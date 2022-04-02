import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer')

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req
	const json = JSON.parse(body)
	const text = json.text
	const name = json.name
	const email = json.email
	const phone = json.phone

	let transporter = nodemailer.createTransport({
		host: "smtp-relay.sendinblue.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.SEND_LOGIN,
			pass: process.env.SEND_PASSWD,
		},
	});

	let info = await transporter.sendMail({
		from: `"Kontakt" <${process.env.SEND_LOGIN}>`, // sender address
		to: 'jakub@kapala.xyz', // list of receivers
		subject: `New message from ${name}`, // Subject line
		html: `<b>New message received</b>
				<br/>
				<b>Sender IP</b>: ${req.socket.remoteAddress}<br/>
				<b>Phone number</b>: ${phone}<br/>
				<b>E-mail</b>: ${email}<br/>
				<b>Name:</b> ${name}
				<br/>
				<b>Message:</b><br/>
				<div>${text}</div>
		`,
	});

	res.send(info.response)
};
