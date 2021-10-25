import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Article ({ item, icon}) {
	return (
		<>
			<div className="article">
				<FontAwesomeIcon icon={icon} size="3x"/>
				<div className='text'>
					<h1>{item.title}</h1>
					<h2>{item.content}</h2>
				</div>
			</div>
		</>
	)
}