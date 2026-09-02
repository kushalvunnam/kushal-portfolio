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

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const recipient = process.env.CONTACT_EMAIL;
    if (!recipient) {
      console.error('CONTACT_EMAIL environment variable is missing.');
      return res.status(500).json({ error: 'Server misconfiguration' });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipient,
      subject: New Portfolio Contact — ,
      text: Name: \nEmail: \n\nMessage:\n\n\nSent from Vunnam Kushal Portfolio,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return res.status(400).json({ error: data.error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Internal Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
