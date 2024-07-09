// src/components/EmployeeForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [foodPreference, setFoodPreference] = useState('');

  const handleEmployeeForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/employees', { name, employeeId, foodPreference });
      // Handle form submission success (e.g., show success message)
    } catch (error) {
      console.error('Form submission failed', error);
    }
  };

  return (
    <form onSubmit={handleEmployeeForm}>
      <h2>Register Employee</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
      <select value={foodPreference} onChange={(e) => setFoodPreference(e.target.value)}>
        <option value="">Select Food Preference</option>
        <option value="normal">Normal</option>
        <option value="diet">Diet</option>
      </select>
      <button type="submit">Register Employee</button>
    </form>
  );
};

export default EmployeeForm;
