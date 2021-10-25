import LinkPicture from "../linkpicture"

export default function Galerie({datas}) {
	return (
			<div className="galerie">
				<LinkPicture title={datas.projects[0].title} src="/images/projects/transcendance.webp" link={`/projects/${datas.projects[0].title.toLowerCase()}`}/>
				<LinkPicture title={datas.projects[1].title} src="/images/projects/webserv.png" link={`/projects/${datas.projects[1].title.toLowerCase()}`}/>
				<LinkPicture title={datas.projects[2].title} src="/images/projects/minishell.png" link={`/projects/${datas.projects[2].title.toLowerCase()}`}/>
				<LinkPicture title={datas.projects[3].title} src="/images/projects/cub3d.png" link={`/projects/${datas.projects[3].title.toLowerCase()}`}/>
			</div>
	)
}