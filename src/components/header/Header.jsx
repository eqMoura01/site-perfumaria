import Logo from '../../assets/logo.jpg'
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <img src={Logo} alt="Logo" className='logo-img' />
            <a href='/'>Home</a>
            <input placeholder='Buscar' className='header-input' />
            <h1>Contato</h1>
        </div>
    )

}

export default Header