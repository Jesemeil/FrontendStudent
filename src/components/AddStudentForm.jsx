// src/components/AddStudentForm.jsx

import { useState } from 'react';
import { addStudent } from '../api/studentAPI';

const AddStudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({ name: '', address: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(student);
      onStudentAdded(); 
      setStudent({ name: '', address: '' });
    } catch (err) {
      setError(err.response ? err.response.data : 'Failed to add student');
      console.error('Error details:', err);
  }
  
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Student</h2>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input
            type="text"
            value={student.address}
            onChange={(e) => setStudent({ ...student, address: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
