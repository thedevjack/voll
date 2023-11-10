import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useConsultaData } from "../../hooks/useConsulta";
import { useProfissionalData } from "../../hooks/useProfissional";
import useDadosGrafico from "./useDadosGrafico";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";

interface Props {
  profissionais: IProfissional[] | undefined;
  consultas: IConsulta[] | undefined;
}

interface IDados {
    nome: string;
    consultas: number;
  }

function Grafico({ profissionais, consultas }: Props) {
  // consultas = x
  // profissionais = y

  const dataConsulta = useConsultaData();
  const dataProfissionais = useProfissionalData();

  if (dataConsulta.isError || dataProfissionais.isError) {
    console.log("Ocorreu um erro na request!");
  }

  let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category" dataKey="nome"></YAxis>
        <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Grafico;
