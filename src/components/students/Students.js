import React from 'react';
import OneStudent from '../student/OneStudent';

const Students=(props) =>{
    return(
       props.studentList.map((person,index) =>
        <OneStudent 
        key={index}
        id={person.id}
        name={person.name}
        classNumber={person.classNumber}
        phoneNumber={person.phoneNumber}
        email={person.email}
        />
        )
    )
}
export default Students;