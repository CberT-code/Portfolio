
import Link from 'next/link'
import Image from 'next/image'

export default function Presentation({ datas }) {
	return (
		<div className='presentation'>
			<div className='profilPicture'>
				<Image
					priority
					src="/images/profile2 copie.jpg"
					layout="fill"
					alt='profile'
					quality={100}
				/>
			</div>
			<div className='description'>
				<h2>{datas.work}</h2>
				<h1>{datas.surname} {datas.name}</h1>
				<p>{datas.presentation}</p>
				<div className='buttons'>
					<Link href='/files/cv.pdf' ><a className='borderBlue'>Download CV</a></Link>
					{/* <Link href='/' ><a className='borderWhite'>Contact</a></Link> */}
				</div>
			</div>
		</div>

	)
}