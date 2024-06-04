import './App.css';
import Avaliacao from './components/avaliacao';
import Botao from './components/botao';
import Cabecalho from './components/cabecalho';
import Container from './components/container';
import Grafico from './components/grafico';
import Rodape from './components/rodape';
import Subtitulo from './components/subtitulo';
import Tabela from './components/tabela';
import Titulo from './components/titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if(consultasErro || profissionaisErro) {
    console.error("Ocorreu um erro na requisição");
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área administrativa</Titulo>
        
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consulta do dia</Titulo>
        <Tabela consultas={ consultas }/>

        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Junho/2024</Subtitulo>
        <Grafico consultas={ consultas } profissionais={ profissionais }/>

        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={ profissionais }/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
