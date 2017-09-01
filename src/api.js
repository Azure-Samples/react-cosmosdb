const baseAPI = '/api';

const heroService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/heroes`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero/${hero.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default heroService;
