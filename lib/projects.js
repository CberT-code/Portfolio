import fs from 'fs'
import path from 'path'
import content from '../datas/infos.json';

export async function getProjectData(id) {
	var projectjson = null
	content.projects.map(project => {
		if (project.title.toLowerCase() === id) {
			projectjson = JSON.stringify(project)
		}
	})
	return {
		id,
		projectjson
	}
}

export async function getProjectsImages(folder){
	
	const imagesDirectory = path.join(process.cwd(), `/public/images/projects/${folder}/`)
	const fileNames = fs.readdirSync(imagesDirectory)
		return fileNames
}