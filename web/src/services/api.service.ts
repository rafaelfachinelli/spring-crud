import api from "./api";

export default class APIDataService {
  findAll() {
    return api.get("/view");
  }

  findById(id: number) {
    return api.get(`/view/${id}`);
  }

  create(name: string, email?: string, phone?: string) {
    return api.post("/create", {
      name,
      email,
      phone
    });
  }

  updateById(id: number, name?: string, email?: string, phone?: string) {
    return api.put(`/update/${id}`, {
      name,
      email,
      phone
    });
  }

  deleteById(id: number) {
    return api.delete(`/delete/${id}`);
  }

  deleteAll() {
    return api.delete("/delete");
  }
}