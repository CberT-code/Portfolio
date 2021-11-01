// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUser, postUser } from '../../controllers/api/user';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		await getUser(req, res)
	}
	if (req.method === 'POST') {
		await postUser(req, res)
	}

}
