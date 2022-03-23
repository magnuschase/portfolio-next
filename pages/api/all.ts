import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = getAllPosts()
	res.send(data);
};
