import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserListTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function* fetchUsersGenerator() {
    let page = 1;
    while (true) {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserListTable;
