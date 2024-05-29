import IProfissional from "./types/IProfissional"
import useFetch from "./useFetch"

const useDadosProfissional = () => {
  useFetch<IProfissional[]>({ url: 'profissionais' });
}

export default useDadosProfissional;