import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../utils/api';
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data))
      .catch(() => setError('Failed to fetch users.'));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(() => alert('Failed to delete user.'));
  };

  const handleFormSubmit = (user) => {
    if (user.id) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      {error && <p>{error}</p>}
      <UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
      <UserForm user={selectedUser} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
