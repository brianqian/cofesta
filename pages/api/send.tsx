import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  const { name, email, message } = req.body;

  const content = {
    to: 'qian.brian@gmail.com',
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    console.log(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
