import content from '../datas/infos.json';
import { getFirstFileLike, getAllFiles } from './utils';



export async function getProjectData(id) {
	let project = content.projects.find( project => project.title.toLowerCase() === id)
	await addImgsPath(project, `/public/images/projects/`)
	return {
		datas: project
	}
}
export async function addImgsProjects(Projects, path) {
	await Projects.map( project => {
		addImgsPath(project, path)
	})
}

export async function addImgsPath(obj, path) {
	console.log('ici = ', obj.title.toLowerCase())
	let cover = await getFirstFileLike(obj.title.toLowerCase(), path)
	console.log('la = ', cover)
	//the path in the object should not start with /public cause the front-end doesnt need it
	let frontPath = path.startsWith('/public') ? path.replace('/public', '') : path
	let arrayimgs = await getAllFiles(path + obj.title.toLowerCase())
	
	obj.imgPath = {}
	obj.imgPath.cover = frontPath + cover
	obj.imgPath.imgs = arrayimgs.map( pathImg => `${frontPath}${obj.title.toLowerCase()}/${pathImg}`)
}

