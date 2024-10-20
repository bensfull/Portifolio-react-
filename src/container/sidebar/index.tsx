import React from 'react';
import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { Descriçao, BotaoTema,SidebarContainer } from './styles';

type Props ={
  trocaTema:() => void;
}

const Sidebar = (props:Props)=>{
  return(
      <>
        <aside>
          <SidebarContainer>
            <Avatar/>
            <Titulo fontSize={20}> Bensfull </Titulo>
            <Paragrafo tipo='segundario' fontSize={16}>Bensfull</Paragrafo>
            <Descriçao tipo='principal1' fontSize={12}>Desenvolvedor full stack</Descriçao>
            <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
          </SidebarContainer>
        </aside>
    </>
  )

}


export default Sidebar
