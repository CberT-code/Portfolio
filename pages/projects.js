import content from '../datas/infos.json';
import Head from 'next/head'
import Galerie from '../components/project/galerie';
import { addImgsProjects } from '../lib/projects';

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
	let datas = content
	await addImgsProjects(datas.projects, `/public/images/projects/`)
	console.log(datas.projects)
	return {
		props: {
			datas: datas
		}
	}
} 