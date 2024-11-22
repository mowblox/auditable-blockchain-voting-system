import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface EmailRequestBody {
  email: string;
}

const oAuth2Client = new google.auth.OAuth2(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body as EmailRequestBody;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: 'truecastapp@gmail.com',
      subject: 'Waitlist Request',
      text: `New waitlist request from: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
