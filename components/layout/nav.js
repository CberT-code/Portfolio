
import Link from 'next/link'
import { withRouter } from "next/router";
import style from './nav.module.css'

// Parameter items=
// [{
// 		name: 'About me',
// 		link: '/'
// 	},
//  {
// 		name: 'Contact',
// 		link: '/contact'
// 	}]

const NavButton = ({ name, link, routerPath }) => {
	return (
		<Link href={link}>
			<a className={routerPath === link ? style.active : ''}>{name}</a>
		</Link>
	)
}

const Nav = (props) => {
	return (

			<ul className={style.navBar}>
				{props.items.map((item, key) => {
					return <li key={key}>
						<NavButton
							name={item.name}
							link={item.link}
							routerPath={props.router.pathname}
						/>
					</li>
				})}
			</ul>

	)
}

export default withRouter(Nav);