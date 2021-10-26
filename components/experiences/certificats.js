import style from './certificats.module.css'

const Certificat = ({data}) => {
	return (
		<div className={style.certificat}>
			<h1>{data.title}</h1>
			<h2>{data.school}</h2>
			<h3>{data.year}</h3>
		</div>
	)
}

export default function Certificats ({datas}){
	return (
		<div className={style.certificats}>
			{console.log(datas)}
			{datas.map((data, key) => {
				return <Certificat key={key} data={data} />
			})}
		</div>
	)
}