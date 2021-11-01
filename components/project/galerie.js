import LinkPicture from "../linkpicture"

export default function Galerie({datas}) {
	const imgPath = "/images/projects/"
	const projectPath = "/projects/"
	return (
			<div className="galerie">
			 	{datas.projects.map(project => {
					 console.log(project.imgPath.cover)
					return (
						<LinkPicture title={project.title} src={project.imgPath.cover} link={`${projectPath}${project.title.toLowerCase()}`}/>
					)
				})}
			</div>
	)
}