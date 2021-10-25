import Image from 'next/image'
import Link from 'next/link'

export default function LinkPicture({ src, title = null, link = '', height = "300px", width = "300px" }) {
	return (
		<Link href={link} >
			< div className="linkPicture" >
				<Image src={src} alt={title} layout="fill" />
				<h1>{title}</h1>

				<style jsx>{`
			.linkPicture {
				display: flex;
				flex-flow: column;
				align-items: center;
				justify-content: center;
				align-item: center;
				margin: 1rem;
				position: relative;
				width: ${width};
				height: ${height};
				border-radius: 40px;
				border-style: solid;
				border-color: #3B3B3C;
				border-width: 1px;
				overflow: hidden;
				transition: transform .2s;
			}
			.linkPicture:hover{
				transform: scale(1.1);
			}
			.linkPicture h1{
				background-color: rgba(20,20,20,0.5);
				text-align: center;
				width: 100%;
				position: absolute;
				font-size: 2rem;
			}
			`}</style>
			</div >
		</Link>
	)
}