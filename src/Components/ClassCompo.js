import React, { Component } from 'react';
import "../App.css"

export default class ClassCompo extends Component {
    state={
        name:"",
        department:"",
        rating:"",
        data:[]//storing data of state variable in array (of object) form
    }

    handleChange = (e) =>{
         this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = () => {
        //creating a temporary object for updating new data when we click on button
        const DataObj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating,
        }

        const arr= this.state.data;
        arr.push(DataObj);//pushing new object inside "data" array in "state" state variable

        this.setState({[this.state.data] : arr})//updating "data" array of object
       // console.log(this.state.name);

       
      //  this.setState(this.state.name="")
      //  this.setState(this.state.department="")
      //  this.setState({[this.state.rating]: ""});

        console.log(this.state.data);

    }
  render() {
    return (
      <>
      <div className='container'>
          <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
          <label>Name:</label>
          <input placeholder='Enter the value' name="name" className="name" onChange={this.handleChange}/>
          <br/>

          <label>Department:</label>
           <input placeholder='Enter the value' name="department" className="department" onChange={this.handleChange}/>
           <br/>


         <label >Rating:</label>
         <input placeholder='Enter the value' name="rating" className="rating" onChange={this.handleChange}/>
         <br/>


         <button onClick={this.handleSubmit}>Submit</button>

     <div className='conatiner2'>
      {this.state.data.map((item, index) =>{
        return(

          <div key={index} className='conatiner3'>
            <h2 >
              Name:{item.name} |
              Department:{item.department} |
              Rating: {item.rating}
            </h2>
          </div>
          )
      })}
         </div>
        </div>
      </>
    )
  }
}
