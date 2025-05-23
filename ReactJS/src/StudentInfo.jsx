import React from 'react';

function StudentInfo() {
  const student = {
    name: "Surya",
    age: 21,
    grade: "A+",
    courses: ["BlockChain", "CyberSecurity", "OperatingSystem"]
  };

  return (
    <div style={{
      color: "black",
      fontFamily: "Times",
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f0f4f8',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'red', marginBottom: '10px' }}>Student Information</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <div>
        <strong>Courses:</strong>
        <ul>
          {student.courses.map((course, index) => (
            <li key={index} style={{ color: 'black' }}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentInfo;