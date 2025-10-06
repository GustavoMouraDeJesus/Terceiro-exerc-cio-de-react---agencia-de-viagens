import Style from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Aruba from '../assets/imagens/Aruba.png'

function Aruba(){
    return(

        <section className={Style.fundo_aruba}>
            <h1>Venha conhecer a Aruba!</h1>
            <ComponenteProps 
            lugar="Aruba"
            texto="Aruba é uma ilha caribenha conhecida por suas praias de areia branca e mar azul-turquesa. Com clima ensolarado o ano todo, combina beleza natural e hospitalidade acolhedora. Sua cultura é uma mistura vibrante de influências holandesas e latinas, refletida na música, gastronomia e arquitetura colorida. É um destino perfeito para relaxar e viver momentos inesquecíveis."
            bandeira={Bandeira_Aruba}/>
            

        </section>

    )
}

export default Aruba