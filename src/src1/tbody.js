import React from 'react'
import View from './view'
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom';
function Table2({data,setuser}){
  const map=data.map((ele)=>{
      return(
        <>
        <tbody>
          <td style={{"border": "2px solid white"}}>{ele.name}</td>
          <td style={{"border": "2px solid white"}}>{ele.id}</td>
          <td style={{"border": "2px solid white"}}>{ele.age}</td>
          <button onClick={() => {
          localStorage.setItem('name',ele.name);
          localStorage.setItem('id',ele.id);
          localStorage.setItem('age',ele.age)
        }}><Link to="/view">View</Link></button> 
        <button onClick={() => {
          localStorage.setItem('name',ele.name);
          localStorage.setItem('id',ele.id);
          localStorage.setItem('age',ele.age)
        }}><Link to="/edit">Edit</Link></button>
          <button value={ele} onClick={()=>Remove(ele)}>Delete</button>
          </tbody>
          </>
      )
    
//use user in code for multiple users
})
function Edit(){
  return(
    <h2>view</h2>
  )
}
function Remove(value){
  var r=window.confirm("Are you sure you want to delete this row");
  if(r==true){
    let filteredvalues=data.filter((e)=>!(value==e))
  setuser(filteredvalues)
  }
}
  return(
    <>
    {console.log(data)}
    {map}
    {/* <button onClick={user}>Add</button> */}
    </>
  )
  }
export default Table2;