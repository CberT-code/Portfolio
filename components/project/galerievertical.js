import ViewPicture from "../viewpicture"
import Image from 'next/image'


export default function GalerieVertical({ path, arrayImages }) {
	return (
		<div className="galerieVertical">
			{arrayImages.map((image, key) => {
				return <ViewPicture key={key} src={`${path}${image}`} height="600px" width="600px" />

			})}
		</div>
	)
}