import React, { useState, useEffect } from 'react';

function UserForm({ user, onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', department: '' });

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert('Invalid email format.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
      <button type="submit">{user ? 'Update User' : 'Add User'}</button>
    </form>
  );
}

export default UserForm;
