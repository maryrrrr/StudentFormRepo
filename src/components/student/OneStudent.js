import React from 'react';
import './style.css';

const OneStudent=(props) =>{
    return(
        <div className="main">
            <h3>شماره دانشجویی:{props.id}</h3>
            <label>نام و نام خانوادگی:</label>
            <input type="text" value={props.name}/>

            <label>کلاس:</label>
            <input type="text" value={props.classNumber}/>

            <label>شماره تلفن:</label>
            <input type="number" value={phoneNumber}/>

            <label>ایمیل:</label>
            <input type="email" value={email}/>
        </div>
    )
}
export default OneStudent;