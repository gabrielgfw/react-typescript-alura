import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

export interface IDados {
  nome: string,
  consultas: number
}

interface DadosGraficosProps {
  profissionais: IProfissional[] | null,
  consultas: IConsulta[] | null
}

const useDadosGrafico = ({ profissionais, consultas } : DadosGraficosProps) => {
  let dados: Array<IDados> = [];

  if(profissionais && consultas) {
    dados = profissionais.map(profissional => {
      const consultasProfissional = consultas.filter(consulta => {
        consulta.profissional.some(prof => prof.nome === profissional.nome)
      });

      return {
        nome: profissional.nome,
        consultas: consultasProfissional.length
      }
    })
  }
  return dados;
}

export default useDadosGrafico;