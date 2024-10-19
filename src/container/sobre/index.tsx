import Titulo from "../../components/Titulo"

import P from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = ( )=>{
  return(
    <section>
        <Titulo fontSize={16}> Sobre mim </Titulo>
        <P tipo="segundario">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </P>

          <GithubSecao>
              <img src="https://github-readme-stats.vercel.app/api?username=bensfull&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
              <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=bensfull&layout=compact&langs_count=7&theme=dracula"/>
          </GithubSecao>
    </section>
  )
}

export default Sobre
