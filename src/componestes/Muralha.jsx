import Style from './css/Muralha.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_China from '../assets/imagens/China.png'

function Muralha(){
    return(

        <section className={Style.fundo_muralha}>
            <h1>Venha conhecer a grande muralha da China!</h1>
            <ComponenteProps 
            lugar="Muralha da China"
            texto="A Grande Muralha da China é uma das construções mais impressionantes da humanidade, estendendo-se por milhares de quilômetros entre montanhas e desertos. Erguida para proteger o império chinês de invasões, ela simboliza força, resistência e engenhosidade. Além de sua importância histórica, é um dos maiores ícones culturais do mundo, atraindo milhões de visitantes todos os anos."
            bandeira={Bandeira_China}/>
            

        </section>

    )
}

export default Muralha