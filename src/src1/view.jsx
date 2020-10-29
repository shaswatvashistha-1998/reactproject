import React from 'react'
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Table from './table'
export default function View({data}){
    
    //use user in code for multiple users
    return(
        <>
        <thead>
          <th style={{"border": "2px solid white"}}>name</th>
          <th style={{"border": "2px solid white"}}>id</th>
          <th style={{"border": "2px solid white"}}>age</th>
        </thead>
        <tbody>
              <td style={{"border": "2px solid white"}}>{localStorage.getItem('name')}</td>
              <td style={{"border": "2px solid white"}}>{localStorage.getItem('id')}</td>
              <td style={{"border": "2px solid white"}}>{localStorage.getItem('age')}</td>
              </tbody>
        <button><Link to="/table">Go back</Link></button> 
        </>
      )
      }