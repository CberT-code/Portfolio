import Image from 'next/image'


const Review = ({ item, img }) => {
	return (
			<div className="review">
				<div className='image'>
					<Image
						priority
						src={img}
						layout="fill"
						alt='profile'
						quality={100}
					/>
				</div>
				<div className='text'>
					<p>{`" ${item.content} "`}</p>
					<h1>{item.name}</h1>
					<h2>{item.where}</h2>
				</div>
			</div>
	)
}

export default function Recommandations({ datas }) {
	return (
		<div className="reviews">
			<Review item={datas.reviews[0]} img="/images/Leopold.jpg"/>
			<Review item={datas.reviews[1]} img="/images/zakboudi.jpeg"/>
		</div>
	)
}