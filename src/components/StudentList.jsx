// src/components/StudentList.jsx

import { useEffect, useState } from 'react';
import { getAllStudents } from '../api/studentAPI';

const StudentList = ({ refresh }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      alert('Failed to fetch students');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]); // Re-fetch when 'refresh' changes

  return (
    <div className="student-list">
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <strong>Name:</strong> {student.name} <br />
              <strong>Address:</strong> {student.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
