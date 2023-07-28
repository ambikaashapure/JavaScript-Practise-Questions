import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function* fetchUsersGenerator() {
    let page = 1;
    while (true) {
      try {
        const response = await axios.get(`https://reqres.in/api/products?page=${page}`);
        const { data } = response.data;
        if (data.length === 0) {
          break;
        }
        yield data;
        page++;
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data.');
        break;
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    async function fetchUsers() {
      const generator = fetchUsersGenerator();
      for await (const data of generator) {
        setUsers((prevUsers) => [...prevUsers, ...data]);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>year</th>
          <th>color</th>
          <th>pantone_value</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.year}</td>
            <td>{user.color}</td>
            <td>{user.pantone_value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductData;
