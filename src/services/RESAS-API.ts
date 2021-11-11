import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  headers: {
    "Content-type": "application/json",
    "X-API-KEY": "UbmYIMbPHjQ3uG4FhEgxVukLAIyQSyFVChTvn6nS",
  },
});

class apiService {
  prefectures(): Promise<Prefecture[]> {
    return apiClient.get("/api/v1/prefectures").then((res) => {
      return res.data.result;
    });
  }
  populationComposition(prefCode: number): Promise<any> {
    return apiClient
      .get("/api/v1/population/composition/perYear", {
        params: {
          prefCode,
          cityCode: "-",
        },
      })
      .then((res) => {
        return res.data.result;
      });
  }
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export default new apiService();
