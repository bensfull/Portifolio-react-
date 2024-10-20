
import Titulo from "../Titulo"
import Paragrafo from "../Paragrafo"
import {Card, LinkBotao} from "./styles"

const Projeto = () => {
  return(
    <Card>
      <Titulo fontSize={14} >Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="segundario">
        Lista de tarefas feitas com VueJs
      </Paragrafo>

      <LinkBotao>Visualisar</LinkBotao>
    </Card>
  )
}

export default Projeto
