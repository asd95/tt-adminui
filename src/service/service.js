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
    if (!data) {
      return [];
    }
    if (
      (data.idnp === undefined || data.idnp === "") &&
      (data.tel === undefined || data.tel === "")
    ) {
      return [];
    }
    const res = await this.getResource("users");
    return searchUser(res, data);
  };
  
  getMonitoringData = async () => {
    const res = await this.getResource("monitoring");
    return res;
  };
}

export default Service;
