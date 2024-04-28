import './CardPerfume.css'
import PerfumeFotos from '../../assets/perfumes-fotos/PerfumeFotos'

const CardPerfume = (props) => {

    console.log(props)

    return (
        <div className="card-perfume">

            <img src={props.perfume.image} alt="foto perfume" className='perfume-img' />

            <span className='title'>{props.perfume.brand.toUpperCase()} - {props.perfume.name.toUpperCase()}</span>

            <div className='value-container'>

                <span className='value-pix'>R$ {props.perfume.valuePix} NO PIX</span>

                <span className='value'>OU <br />R${props.perfume.value}</span>
            </div>

        </div>
    )
}

export default CardPerfume