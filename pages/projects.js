import content from '../datas/infos.json';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Galerie from '../components/project/galerie';

export default function Experiences({datas}) {
	return (
		<Layout>
			<Head>
				<title>Cyrille BERTOLA - Projects</title>
			</Head>
			<div className='banner'>
				<h1>Projects</h1>
			</div>
			<Galerie datas={datas} />
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