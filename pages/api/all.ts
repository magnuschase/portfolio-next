import { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = getAllPosts()
	res.send(data);
};
