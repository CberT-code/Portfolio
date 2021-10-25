import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTasks, faLaptop, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Article } from '../article'

export default function Fun({datas}) {
	return (
		<div className="fun">
			<Article item={datas.fun[0]} icon={faLaptop} />
			<Article item={datas.fun[1]} icon={faTasks} />
			<Article item={datas.fun[2]} icon={faCoffee} />
			<Article item={datas.fun[3]} icon={faMusic} />
		</div>
	)
}