// src/api/studentAPI.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Adds a new student.
 * @param {Object} studentData - The student data containing name and address.
 * @returns {Promise<Object>} The added student data.
 */
export const addStudent = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error('Failed to add student');
    }

    return response.json();
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

/**
 * Fetches all students.
 * @returns {Promise<Array>} An array of student objects.
 */
export const getAllStudents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/getAll`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
