// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

const nodemailer = require('nodemailer');

type Data = {
  error?: string,
  data?: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {

  const message = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  type Err = {
    code: string,
    syscall: string,
    address: string,
    port: number,
    command: string
  }

  type Info = {
    accepted: string[],
    rejected: string[],
    envelopeTime: number,
    messageTime: number,
    messageSize: number,
    response: string,
    envelope: { from: string, to: string[] }
    messageId: string
  }

  if (req.method === 'POST') {
    transporter.sendMail(message, (err: Err, info: Info) => {

      if (err) {
        res.status(404).json({error: `Connection refused at ${err.address}`});
      } else {
        res.status(250).json({error: `Message delivered to ${info.accepted}`});
      }
    });

  }
}
