import { useQuery } from "@tanstack/react-query";
import { getProfissional } from "../services/voll-api";

export function useProfissionalData() {
    const useQueryProfissional = useQuery({
      queryFn: getProfissional,
      queryKey: ["profissional-data"],
      retry: 2,
    });
  
    return {
      ...useQueryProfissional,
      data: useQueryProfissional.data?.data,
    };
  }
  