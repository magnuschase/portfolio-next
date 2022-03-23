import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from '../../util/md';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req
	const data = getPostBySlug(`${JSON.parse(body).name}.md`)
	res.send(data);
};
