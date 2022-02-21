export function getList() {
    return fetch('http://localhost:5000/api/products')
      .then(data => data.json())
  }
  