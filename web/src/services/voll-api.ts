import axios from "axios";
import IConsulta from "../types/IConsulta";
import IProfissional from "../types/IProfissional";

export const API_URL = axios.create();
API_URL.defaults.baseURL = import.meta.env.VITE_APP_VOLL_BASEURL;

export function getConsulta() {
  return API_URL.get<IConsulta[]>("/consulta");
}

export function getProfissional() {
  return API_URL.get<IProfissional[]>("/especialista");
}
