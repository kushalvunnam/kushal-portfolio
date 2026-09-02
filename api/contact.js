import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const recipient = process.env.CONTACT_EMAIL;
    if (!recipient) {
      return res.status(500).json({ error: 'Server misconfiguration: CONTACT_EMAIL missing' });
    }

    const response = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      reply_to: email,
      subject: `New Portfolio Contact - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Vunnam Kushal Portfolio`,
    });

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return res.status(400).json({ error: response.error.message || 'Error from email service' });
    }

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Internal Error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
