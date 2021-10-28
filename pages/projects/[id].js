import content from '../../datas/infos.json';
import GalerieVertical from '../../components/project/galerievertical';
import ProjectInformations from '../../components/project/projectinformations';
import { getProjectData } from '../../lib/projects';

const getAllProjectsIds = () => {
	return content.projects.map(project => {
		return {
			params: {
				id: project.title.toLowerCase()
			}
		}
	})
}

export async function getStaticPaths() {
	const paths = getAllProjectsIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	let path = `/public/images/projects/`
	const project = await getProjectData(params.id)
	
	return {
		props: {
			id: params.id,
			project: project.datas
		}
	}
}

export default function Project({ id, project}) {
	return (
		<>
			<div className='banner'>
				<h1>{project.title}</h1>
			</div>
			<div className='project'>
				<GalerieVertical arrayImages={project.imgPath.imgs}/>
				<ProjectInformations datas={project}/>
			</div>
		</>
	)
}
