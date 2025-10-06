import Style from './css/Grandcanyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Grand from '../assets/imagens/Grand.jpg'

function Grandcanyon(){
    return(

        <section className={Style.fundo_grandcanyon}>
            <h1>Venha conhecer o Grandcanyon!</h1>
            <ComponenteProps
            lugar="Grand Canyon"
            texto="O Grand Canyon, localizado nos Estados Unidos, é uma das paisagens mais impressionantes do planeta. Esculpido pelo rio Colorado ao longo de milhões de anos, revela camadas rochosas que contam a história da Terra. Suas cores vibrantes e formações imensas criam um cenário de tirar o fôlego. É um verdadeiro espetáculo da natureza e um dos destinos mais admirados do mundo."
            bandeira={Bandeira_Grand}/>
            

        </section>

    )
}

export default Grandcanyon