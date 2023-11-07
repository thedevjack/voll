import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getConsulta } from "../services/voll-api";

export function useConsultaData() {
  const useQueryConsulta = useQuery({
    queryFn: getConsulta,
    queryKey: ["consulta-data"],
    retry: 2,
  });

  return {
    ...useQueryConsulta,
    data: useQueryConsulta.data?.data,
  };
}
