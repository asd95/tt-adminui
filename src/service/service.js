import { searchUser } from "../utils/utils";

class Service {
  _apiBase = "http://localhost:8000";

  getResource = async (url = "") => {
    const res = await fetch(`${this._apiBase}/${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    }
    return res.json();
  };
  getUsers = async (data = null) => {
    const res = await this.getResource("users");
    if (!data) {
      return res
    }
    return searchUser(res, data);
  };
  getMonitoringData = async () => {
    const res = await this.getResource("monitoring");
    return res;
  };
}

export default Service;
