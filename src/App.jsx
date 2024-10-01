// src/App.jsx

import { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import './App.css'; // Import CSS for additional styling

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleStudentAdded = () => {
    setRefresh(!refresh); // Toggle to trigger re-fetching in StudentList
  };

  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <AddStudentForm onStudentAdded={handleStudentAdded} />
      <StudentList refresh={refresh} />
    </div>
  );
};

export default App;
