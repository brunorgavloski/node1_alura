import './estilo.css'
import logo from '../../imagens/logo.svg'

/**componentes são funçoes que retornam html**/
function Logo() {
    return (
        <div className='logo'>
          <img 
            src={logo} 
            alt='logo' 
            className='logo-img'>
          </img>
          <p><strong>Alura</strong>book</p>
        </div>
    )
    
}

export default Logo;