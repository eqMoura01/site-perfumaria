import './Destaques.css'

const Destaques = () => {

    const options = [
        {
            title: 'Lataffa',
            link: '/lataffa'
        },
        {
            title: 'Pacco Rabane',
            link: '/pacco-rabane'
        },
        {
            title: 'Fendi',
            link: '/fendi'
        },
        {
            title: 'Giorgio Armani',
            link: '/giorgio-armani'
        },
        {
            title: 'Bvlgari',
            link: '/bvlgari'
        },
    ]

    return (
        <div className="destaques">
            {options.map((item, index) => (
                <a href={item.link} key={index} className='destaques-link'>
                    <h1 key={index}>{item.title}</h1>
                </a>
            )
            )}
        </div>
    )

}

export default Destaques