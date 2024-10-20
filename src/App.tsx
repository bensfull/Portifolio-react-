import { useState } from 'react';
import { ThemeProvider } from 'styled-components';


import Sidebar from "./container/sidebar";
import EstiloGlobal, { Container } from './styles';
import Sobre from './container/sobre';
import Projetos from './container/Projetos';
import temaLight from './themes/lights';
import temaDark from './themes/dark';

function App() {
  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(true)

    function TrocaTema(){
      setestaUsandoTemaDark(!estaUsandoTemaDark)
    }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal/>
      <Container>
      <Sidebar trocaTema={TrocaTema}/>
      <main>
          <Sobre/>
          <Projetos/>
      </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
