import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req
	const data = await getPostBySlug(`${JSON.parse(body).name}.md`, true)
	res.send(data)
};
