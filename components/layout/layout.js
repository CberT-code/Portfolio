import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

const name = 'Cyrille'
export const siteTitle = 'Portfolio - Cyrille BERTOLA'

export default function Layout({ children }) {
	const nav = [{
			name: 'About me',
			link: '/'
		},{
			name: 'Experiences',
			link: '/experiences'
		},{
			name: 'Projects',
			link: '/projects'
		}]

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<title>Cyrille BERTOLA - Portfolio</title>
				<meta
					name="Portfolio"
					content="Learn more about me - Cyrille BERTOLA - Dev"
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header>
				<div className='logo'>
					<div className='FirstLetter'>C</div>
					<div className='FullName'>
						<span>Cyrille BERTOLA </span>
					</div>
				</div>
				<Nav items={nav}/>
			</header>
			<main>{children}</main>
			<footer>
				<div className='social'>
					<a href="https://www.linkedin.com/in/cyrille-bertola" target="blank">Linkedin</a>
					<a href="https://github.com/CberT-code/CberT-code" target="blank">Github</a>
					<Link href="/files/cv.pdf"><a>CV</a></Link>
				</div>
				<div className='infos'>
					<span>Développé sous NextJS</span>
				</div>
			</footer>
		</>
	)
}