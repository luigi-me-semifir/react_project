// TechnosService.js
const AddFormation = {
  addTechno: (techno) => {
    return fetch('http://localhost:8080/technos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(techno),
    }).then((response) => response.json());
  },

  updateTechno: (techno) => {
    return fetch(`http://localhost:8080/technos/${techno.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(techno),
    }).then((response) => response.json());
  },

  getTechnoById: (id) => {
    return fetch(`http://localhost:8080/technos/${id}`).then((response) =>
      response.json()
    );
  },

  getTechno: () => {
    return fetch(`http://localhost:8080/technos/`).then((response) =>
      response.json()
    );
  },

  deleteTechno: (techno) => {
    return fetch(`http://localhost:8080/technos/${techno}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }
      return response.json();
    });
  },

  patchTechno: (id, updates) => {
    return fetch(`http://localhost:8080/technos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }
      return response.json();
    });
  },
};

export default AddFormation;
