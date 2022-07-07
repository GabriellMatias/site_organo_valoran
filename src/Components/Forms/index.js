import './Formulario.css'
import TextCamp from '../TextCamp'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
    const elo = [
        'Ferro',
        'Bronze', 
        'Prata',
        'Ouro', 
        'Platina',
        'Diamante',
        'Ascendente',
        'Imortal',
        'Radiante'
    ]
    const save = (evento) => {
        evento.preventDefault()
        console.log('Forms enviado')
    }
    
    return (
        <section className='forms'>
            <form onSubmit={save}>
                <h2>Preencha os dados para entrar no time!</h2>
                <TextCamp obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <TextCamp obrigatorio={true} label="Posicao" placeholder="Digite sua Posicao de Jogo" />
                <ListaSuspensa label ="Elo" itens = {elo} placeholder="Informe seu Elo"/>
                <Botao>
                    Enviar Formulario
                </Botao>
            </form>
        </section>
    )
}
export default Formulario
