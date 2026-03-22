import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 1. Save to Supabase
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, message })

    if (dbError) throw new Error(`DB error: ${dbError.message}`)

    // 2. Send notification email via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ember Business Services <noreply@emberbservices.com>',
        to: ['dulce@emberbservices.com'],
        subject: `New contact message from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
            <h2 style="color:#0F172A;border-bottom:2px solid #C9A227;padding-bottom:12px;">
              New Contact Message — Ember Business Services
            </h2>
            <table style="width:100%;border-collapse:collapse;margin-top:16px;">
              <tr>
                <td style="padding:10px 0;color:#6B7280;font-weight:bold;width:100px;">Name</td>
                <td style="padding:10px 0;color:#111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6B7280;font-weight:bold;">Email</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${email}" style="color:#2563EB;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6B7280;font-weight:bold;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#111827;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#9CA3AF;">
              Sent from the contact form at emberbservices.com
            </p>
          </div>
        `,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      throw new Error(`Resend error: ${errText}`)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
