import React from 'react';
import Sidebar from "./container/sidebar";
import EstiloGlobal, { Container } from './styles';
import Sobre from './container/sobre';
import Projetos from './container/Projetos';

function App() {
  return (
    <>
    <EstiloGlobal/>

    <Container>
    <Sidebar/>
    <main>
        <Sobre/>
        <Projetos/>
    </main>
    </Container>


    </>
  )
}

export default App;
