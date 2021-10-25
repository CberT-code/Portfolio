import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import style from './projectinformations.module.css'

export default function ProjectInformations({ datas }) {
	return (
		<div>
			<div className={style.projectInformations}>
				<h1>Project</h1>
				{datas.team.map((worker, key) => {
					return <span key={key}><FontAwesomeIcon icon={faUser} size="1x" /> {worker.name}</span>
				})}
				<span><FontAwesomeIcon icon={faCalendarAlt} size="1x" /> {datas.date}</span>
				<h1>Description</h1>
				<h2>{datas.description}</h2>
				<h1>Technology</h1>
				<div className={style.techno}>
					{datas.tech.map((techno, key) => {
						return <span key={key}>{techno}</span>
					})}
				</div>
				<h1>Github</h1>
				<span><FontAwesomeIcon icon={faCodeBranch} size="1x" /> {datas.github}</span>
			</div>
		</div>
	)
}