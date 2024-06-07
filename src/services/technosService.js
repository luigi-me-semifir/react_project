export default class TechnosService {

  static async getTechnos() {
    try {
      const reponse = await fetch("http://localhost:8080/technos")
      return await reponse.json()
    } catch (e) {
      console.error(e);
    }
  }

  static async getTechno(id) {
    try {
      const response = await fetch(`http://localhost:8080/technos/${id}`)
      const data = await response.json();
      return this.isEmpty(data) ? null : data
    } catch (e) {
      console.error(e);
    }
  }
}