import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GitHubSecao } from "./styles"

const Sobre = () => (
  <section style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px' }}>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptatibus eius! Dicta atque quod tempore voluptatem cumque labore, nihil ipsa accusamus illum voluptatum unde facilis, voluptas officiis. Temporibus, ex officia.
    </Paragrafo>
    <GitHubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=mauricioti23&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="GitHub Status"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mauricioti23&layout=compact&langs_count=7&theme=dracula"
        alt="Top Langs"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
