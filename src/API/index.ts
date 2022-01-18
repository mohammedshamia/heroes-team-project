import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://prohop-express.herokuapp.com/api/",
});

export default class APIInstance {
  static async get(url: string): Promise<AxiosResponse> {
    return api.get(url, {});
  }

  static async post<T>(url: string, body: T): Promise<AxiosResponse> {
    return api.post(url, body, {});
  }

  static async put<T>(url: string, body: T): Promise<AxiosResponse> {
    return api.put(url, body);
  }
  static async delete(url: string): Promise<AxiosResponse> {
    return api.delete(url, {});
  }
}