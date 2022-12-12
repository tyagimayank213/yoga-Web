import React from 'react'
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {useFormik} from 'formik';
import mainPageImage from '../../images/mainPageImage.jpg'
import './Body.css'

const validateEmployee = Data => {
  const errors = {};

  if (!Data.Name) {
    errors.Name = 'Please Enter Name';
  } else if (Data.Name.length > 20) {
    errors.Name = 'Name cannot exceed 20 characters';
  }
  if(Data.Phone.length != 10){
    errors.Phone = 'Enter a valid number'
  }

  if (Data.Age<18 || Data.Age>65) {
    errors.Age = 'Eligible Age limit (18-65)';
  } 
  return errors;
};

const Body = () => {
  const formik=useFormik({
    initialValues:{
      Name:'',
      Phone:'',
      Address:'',
      Age:'',
      TimeSlot:'',
      Amount:'',
    },
    validate:validateEmployee,
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });
  const [payBalance, setPayBalance] = useState(0);
  const [okBalance, setOkBalance] = useState(false)
  const amountClearance=()=>{
    if(payBalance==500){
      setOkBalance = true;
    }
  }
  return (
    <div id="bodyContent">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <legend id="Admission">Admission Form</legend>
              <label for="fname">Fullname:</label>
              <input type="text" name="Name" id="Name" value={formik.values.Name}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}>
              </input>
              {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}<br/></span> : null}
              <label for="phone">Phone:</label>
              <input type="text" name="Phone" id="phone" value={formik.values.Phone}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} required>
              </input><br />
              {formik.touched.Phone && formik.errors.Phone ? <span style={{color:'red'}}>{formik.errors.Phone}<br/></span> : null}
              <label for="Address">Address:</label>
              <input type="text" name="Address" id="address" value={formik.values.Address}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}>
              </input>
              {formik.touched.Address && formik.errors.Address ? <span style={{color:'red'}}>{formik.errors.Address}<br/></span> : null}
              <br/> 
              <label for="age">Age:</label>
              <input type="number" name="Age" id="age" value={formik.values.Age}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} required>
              </input>
              {formik.touched.Age && formik.errors.Age ? <span style={{color:'red'}}>{formik.errors.Age}</span> : null}
              <br/>
              <label for="timeSlot">Choose a Time-Slot:</label>
              <select name="timeSlot" id="timeSlot" required>
                  <option value="">--Please choose an option--</option>
                  <option value="6-7AM">6-7AM</option>
                  <option value="7-8AM">7-8AM</option>
                  <option value="8-9AM">8-9AM</option>
                  <option value="5-6PM">5-6PM</option>
              </select><br/>
              
              <button id="pay"  onClick={amountClearance} style={{backgroundColor: payBalance == 500? "green" : "silver"}}>Pay Fees</button>
              
          </form>
        </div>
        <div id="secondContainer">
          <img id="mainPageImage" src={mainPageImage} />
        </div>
    </div>
  )
}

export default Body;