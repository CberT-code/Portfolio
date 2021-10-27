import content from '../../datas/infos.json';
import Layout from '../../components/layout/layout';
import GalerieVertical from '../../components/project/galerievertical';
import ProjectInformations from '../../components/project/projectinformations';
import { getProjectData, getProjectsImages } from '../../lib/projects';

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
	const project = await getProjectData(params.id)
	const projectsImages = await getProjectsImages(params.id)
	return {
		props: {
			id: params.id,
			project,
			projectsImages
		}
	}
}

export default function Project({ id, project, projectsImages }) {
	const parsedProject = JSON.parse(project.projectjson)
	return (
		<>
			<div className='banner'>
				<h1>{parsedProject.title}</h1>
			</div>
			<div className='project'>
				<GalerieVertical path={`/images/projects/${id}/`} arrayImages={projectsImages}/>
				<ProjectInformations datas={parsedProject}/>
			</div>
		</>
	)
}