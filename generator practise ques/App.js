import React from 'react';
import UserListTable from './UserListTable';
import ProductData from './ProductData';
const App = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserListTable />
      <h1>Product Data</h1>
      <ProductData/>
    </div>
  );
};

export default App;
