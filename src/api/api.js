import axios from "axios";

const API_URL = "https://dadosabertos.camara.leg.br/api/v2";

export const fetchDeputados = async () => {
  try {
    const response = await axios.get(API_URL + "/deputados", {
      params: {
        ordem: "ASC",
        ordenarPor: "nome",
      },
    });
    return response.data.dados;
  } catch (error) {
    console.error("Erro ao buscar deputados:", error);
    throw error;
  }
};

export const fetchDeputadoDetalhes = async (id) => {
  try {
    const response = await axios.get(API_URL + "/deputados/" + id);
    return response.data.dados;
  } catch (error) {
    console.error("Erro ao buscar deputados:", error);
    throw error;
  }
};
