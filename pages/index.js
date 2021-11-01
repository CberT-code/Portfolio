
import content from '../datas/infos.json';
import Presentation from '../components/home/presentation';
import WhatAbout from '../components/home/whatabout';
import Recommandations from '../components/home/recommandations';
import Fun from '../components/home/fun';
import axios from 'axios';
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

// export async function getStaticProps() {
// 	const datas = content
// 	return {
// 		props: {
// 			datas
// 		}
// 	}
// }

export async function getServerSideProps(context) {
	const datas = await axios.get(`${process.env.HOST}/api/user`)
	console.log(datas)
	return {
	  props: { 
		  datas: datas.data
	},
	}
  }