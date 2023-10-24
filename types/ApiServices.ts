import axios from "axios";

const client = axios.create({ baseURL: "https://demo.covlie.com" });

export default class ApiServices {
  static fetchUserData() {
    return client.get("/operators") as any;
  }
}
