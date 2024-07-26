import React, { useState, useEffect } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../services/userService';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState({ name: '', email: '', membershipId: '' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.id) {
      await updateUser(formState);
    } else {
      await addUser(formState);
    }
    setFormState({ name: '', email: '', membershipId: '' });
    loadUsers();
  };

  const handleEdit = (user) => {
    setFormState(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Name" required />
        <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="Email" required />
        <input type="text" value={formState.membershipId} onChange={(e) => setFormState({ ...formState, membershipId: e.target.value })} placeholder="Membership ID" required />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.membershipId}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
