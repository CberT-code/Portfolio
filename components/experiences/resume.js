import style from './resume.module.css'

export default function Resume({ title, datas }) {
	const datasLength = datas.length

	return (
		<div className={style.resume}>
			<div className={style.title}>
				<h1>{title}</h1>
			</div>
			<div className={style.content}>
				{datas.map((resume, key) => {
					return (
						<div className={style.item} key={key}>
							<div className={style.informations}>
								<span className={style.date}>{resume.year}</span>
								<span className={style.location}>{resume.location}</span>
							</div>
							<div className={style.details}>
								<h1>{resume.title}</h1>
								<h2>{resume.details}</h2>
							</div>
							{key != datasLength - 1 ? <div className={style.empty} /> : '' }
						</div>
					)
				})}
			</div>
		</div>

	)
}