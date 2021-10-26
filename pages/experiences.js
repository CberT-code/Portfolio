import content from '../datas/infos.json';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Resume from '../components/experiences/resume';
import Certificats from '../components/experiences/certificats';

export async function getStaticProps() {
	const datas = content
	return {
		props: {
			datas
		}
	}
}

export default function Experiences({datas}) {
	return (
		<Layout>
			<Head>
				<title>Cyrille BERTOLA - Experience</title>
			</Head>
			<div className='banner'>
				<h1>Experiences</h1>
			</div>
			<div className='experience'>
				<Resume title="Education" datas={datas.education} />
				<Resume title="Expériences" datas={datas.experience} />
			</div>
			<h3>Diplomes</h3>
			<Certificats datas={datas.diploma} />
		</Layout>
	)
}