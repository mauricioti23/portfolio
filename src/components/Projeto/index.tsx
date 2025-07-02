import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de projetos feita com vueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )

}

export default Projeto
