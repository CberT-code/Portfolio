import fs from 'fs'
import path from 'path'

export async function getAllFiles(folder){

	const imagesDirectory = path.join(process.cwd(), folder)
	const fileNames = fs.readdirSync(imagesDirectory)
	return fileNames
}

export async function getFirstFileLike(name, path){
	const fileNames = await getAllFiles(path)
	return fileNames.filter(file => file.includes('.')).find(file => file.includes(name) )
}