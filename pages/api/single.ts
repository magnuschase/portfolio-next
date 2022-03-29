import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req
	const name = JSON.parse(body).name
	const data = await getPostBySlug(name.endsWith('md') ? name : `${name}.md`, true)
	res.send(data)
};
