import { Resend } from 'resend';

import EmailTemplate from '../../../components/EmailTemplate';

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }

  const emailTemplate = <EmailTemplate {...data} />;
  const apiKey = process.env.RESEND_API_KEY;
  const destinationEmail = process.env.RESEND_DESTINATION_EMAIL;

  if (!apiKey || !destinationEmail) {
    return Response.json(
      {
        message:
          'Email is not configured yet. Add RESEND_API_KEY and RESEND_DESTINATION_EMAIL to enable the contact form.'
      },
      { status: 501 }
    );
  }

  const resend = new Resend(apiKey);
  const fromName = 'shawn-portfolio';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    const { error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: destinationEmail,
      replyTo: data.email,
      subject: `${data.name} - via ${fromName}`,
      react: emailTemplate
    });

    if (error) {
      return Response.json({ message: error.message }, { status: 400 });
    }

    return Response.json({ message: 'Email sent' });
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }
}
