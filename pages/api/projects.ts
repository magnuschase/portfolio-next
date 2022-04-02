import { NextApiRequest, NextApiResponse } from "next";
import { getAllProjects } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = await getAllProjects()
	res.send(data)
};
