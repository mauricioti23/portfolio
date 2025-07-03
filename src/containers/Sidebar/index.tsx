import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
     <Avatar />
    <Titulo fontSize={20}>Mauricio S. Vasconcelos</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>mauricioti23</Paragrafo>
    <Descricao fontSize={12}>Estudante Full-Stack JAVA</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
    </aside>
)

export default Sidebar
