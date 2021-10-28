import ViewPicture from "../viewpicture"

export default function GalerieVertical({arrayImages }) {
	return (
		<div className="galerieVertical">
			{arrayImages.map((image, key) => {
				return <ViewPicture key={key} src={`${image}`} height="600px" width="800px" />
			})}
		</div>
	)
}