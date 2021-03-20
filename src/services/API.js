import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api",
  headers: { Authorization: "Bearer " + process.env.VUE_APP_TOKEN },
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 419) {
      alert("No autorizado");
    }
    return Promise.reject(error.response);
  }
);

export default apiClient;
