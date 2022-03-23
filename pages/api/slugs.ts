import { NextApiRequest, NextApiResponse } from "next";
import { getPostSlugs } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = getPostSlugs()
	res.send(data);
};
