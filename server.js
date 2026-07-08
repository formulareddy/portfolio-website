const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailSubject = subject
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] Message from ${name}`;

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'support.mylegacy@gmail.com',
      subject: emailSubject,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:700;background:#f5f5f5;">Name</td><td style="padding:10px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:700;background:#f5f5f5;">Email</td><td style="padding:10px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:700;background:#f5f5f5;">Subject</td><td style="padding:10px;border:1px solid #ddd;">${subject || 'N/A'}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:700;background:#f5f5f5;">Message</td><td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
        </table>
        <hr style="margin-top:30px;border:none;border-top:1px solid #eee;">
        <p style="color:#888;font-size:12px;">Sent from your portfolio contact form.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
