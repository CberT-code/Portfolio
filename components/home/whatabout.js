import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faUsers, faCode, faCogs} from '@fortawesome/free-solid-svg-icons'
import { Article } from '../article'

export default function WhatAbout ({datas}) {
	return (
		<div className='whatAbout'>
			<div className='col2'>
				<Article item={datas.what[0]} icon={faCogs} />
				<Article item={datas.what[1]} icon={faCode} />
			</div>
			<div className='col2'>
				<Article item={datas.what[2]} icon={faUsers} />
				<Article item={datas.what[3]} icon={faArrowCircleRight} />
			</div>
			</div>
	)
}