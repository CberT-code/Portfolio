import content from '../datas/infos.json';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Galerie from '../components/project/galerie';

export default function Experiences({datas}) {
	return (
		<>
			<Head>
				<title>Cyrille BERTOLA - Projects</title>
			</Head>
			<div className='banner'>
				<h1>Projects</h1>
			</div>
			<Galerie datas={datas} />
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