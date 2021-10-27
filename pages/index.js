
import content from '../datas/infos.json';
import Layout from '../components/layout/layout'
import Presentation from '../components/home/presentation';
import WhatAbout from '../components/home/whatabout';
import Recommandations from '../components/home/recommandations';
import Fun from '../components/home/fun';

// import clientPromise from '../lib/mongodb'

export default function Home({ datas }) {
	return (
		<>
				 <Presentation datas={datas} />
				 <h3>What about</h3>
				 <WhatAbout datas={datas} />
				 <h3>Recommandations</h3>
				 <Recommandations datas={datas} />
				 <h3>Fun Facts</h3>
				 <Fun datas={datas} />
		</>
	)
}

export async function getStaticProps() {
	const datas = content
	return {
		props: {
			datas
		}
	}
}

// export async function getServerSideProps(context) {
// 	const client = await clientPromise
  
// 	// client.db() will be the default database passed in the MONGODB_URI
// 	// You can change the database by calling the client.db() function and specifying a database like:
// 	const db = client.db("portfolio");
// 	// Then you can execute queries against your database like so:
// 	// db.find({}) or any of the MongoDB Node Driver commands
// 	const data = await db.collection("user").findOne({name:'Bertola'})

// 	const datas = JSON.parse(JSON.stringify(data))
  
// 	return {
// 	  props: { 
		  
// 		  datas
// 	},
// 	}
//   }