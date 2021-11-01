import clientPromise from '../../lib/mongodb'

export async function getUser(req, res) {
	const client = await clientPromise

	// client.db() will be the default database passed in the MONGODB_URI
	// You can change the database by calling the client.db() function and specifying a database like:
	const db = await client.db("portfolio");
	// Then you can execute queries against your database like so:
	// db.find({}) or any of the MongoDB Node Driver commands
	const data = await db.collection("user").findOne({ name: 'Bertola' })
	res.status(200).json(data)
}

export async function postUser(req, res) {
	res.status(200).json({ message: 'CA MARCHE EN POSTE' })
}