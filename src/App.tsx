import './App.css';
import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Rodape from './components/rodape';
import Tabela from './components/tabela';
import Titulo from './components/titulo';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const { dados, erro } = useDadosConsulta();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área administrativa</Titulo>
        <Tabela consultas={ dados }/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
