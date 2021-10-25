
import content from '../datas/infos.json';
import Layout from '../components/layout/layout'
import Presentation from '../components/home/presentation';
import WhatAbout from '../components/home/whatabout';
import Recommandations from '../components/home/recommandations';
import Fun from '../components/home/fun';

export default function Home({ datas }) {
	return (
		<Layout>
			<Presentation datas={datas} />
			<h3>What about</h3>
			<WhatAbout datas={datas} />
			<h3>Recommandations</h3>
			<Recommandations datas={datas} />
			<h3>Fun Facts</h3>
			<Fun datas={datas} />
		</Layout>
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