
import Styles from './css/Header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/Lupa.png'

function Header() {
    return (

        <header>
            <img src={Logo} alt="Logo da empresa" className={Styles.img_viagens}/>
            <nav className={Styles.menu_header}>
                <a href='#'>Home</a>
                 <a href='#'>Escócia</a>
                  <a href='#'>Grand Canyon</a>
                   <a href='#'>Muralhas da China</a>
                    <a href='#'>Aruba</a>
            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupinha" className={Styles.img_lupa}/>


        </header>

    )
}

export default Header; 