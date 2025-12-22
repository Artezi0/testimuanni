import api from "./api"

export const getStudents = async (name) => {
  const response = await api.get("", {
    params: { name },
  });
  return response.data;
}