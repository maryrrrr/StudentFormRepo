import React, { useState } from 'react';
import Students from './components/students/Students';

function App() {
  const[students,setStudents]= useState([
    {id:0, name:"Ali", classNumber:123, phoneNumber:2356, email:"ali@gmail.com"},
    {id:1, name:"Reza", classNumber:456, phoneNumber:521, email:"reza@gmail.com"},
    {id:2, name:"Sara", classNumber:753, phoneNumber:896, email:"sara@gmail.com"},
    {id:3, name:"Ahmad", classNumber:852, phoneNumber:741, email:"ahmad@gmail.com"},
  ]);
  return (
    <div>
      <Students studentList={students}/>
    </div>
  );
}

export default App;
