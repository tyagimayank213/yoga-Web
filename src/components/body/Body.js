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

  if ((Data.amount < 500) || (Data.amount > 500)) {
    errors.amount = 'Enter Correct Amount';
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
      Gender:'',
      amount:'',
    },
    validate:validateEmployee,
    onSubmit:values=>{
      alert(JSON.stringify(values));
      window.location.reload();  
    }
  });
  function setValues() {
    var ele = document.getElementsByName('timeSlot');
      
    for( let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        formik.values.TimeSlot
                =ele[i].value;
    }

    var ele = document.getElementsByName('gender');
      
    for( let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        formik.values.Gender
                =ele[i].value;
    }
  }
  function paymentCheck(){
    var btn = document.getElementById('pay');
    if(formik.values.amount>499 && formik.values.amount<501){
      btn.style.backgroundColor = 'green';
      btn.style.color = 'white';
      btn.style.border = '1px solid black';
      alert('Payment Done Successfully.');
    }
  }
  
  return (
    <div id="bodyContent">
        <div>
          <div className="formm">
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
              <label>Gender</label><br/>
              <input type="radio" name="gender" value="Male" onClick={setValues}/>
              <label for="Male">Male</label>
              <input type="radio" name="gender" value="Female" onClick={setValues}/>
              <label for="female">Female</label>
              <input type="radio" name="gender" value="Other" onClick={setValues}/>
              <label for="Other">Other</label><br/>
              <label for="age">Age:</label>
              <input type="number" name="Age" id="age" value={formik.values.Age}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.Age && formik.errors.Age ? <span style={{color:'red'}}>{formik.errors.Age}</span> : null}
              <br/>
              <label for="timeSlot">Choose a Time-Slot:</label><br/>
              <input type="radio" name="timeSlot" value="6-7AM" onClick={setValues}/>
              <label for="6-7AM">6-7AM</label>
              <input type="radio" name="timeSlot" value="7-8AM" onClick={setValues}/>
              <label for="7-8AM">7-8AM</label>
              <input type="radio" name="timeSlot" value="8-9AM" onClick={setValues}/>
              <label for="8-9AM">8-9AM</label>
              <input type="radio" name="timeSlot" value="5-6PM" onClick={setValues}/>
              <label for="5-6PM">5-6PM</label><br/>
              <label for="Amount">Enter Fees Amount</label><br/>
              {/* <input type="text" id="Amount" name="Amount"  required /> */}
              <input type="number" name="amount" id="amount" value={formik.values.amount}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              {formik.touched.amount && formik.errors.amount ? <span style={{color:'red'}}>{formik.errors.amount}</span> : null}
              <button id="pay" onClick={paymentCheck}> Pay Fees</button><br/>
              <button type="submit" id="pay" onClick = {formik.handleSubmit}>Submit</button>
              
          </div>
        </div>
        <div id="secondContainer">
          <img id="mainPageImage" src={mainPageImage} />
        </div>
    </div>
  )
}

export default Body;