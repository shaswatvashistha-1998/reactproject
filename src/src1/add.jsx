import React from 'react'
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom';
export default function Constant({nameval,idval,ageval,namehandler,idhandler,agehandler,settingvalue}){
    return(
        <>
        Name:<input type='text' name='name' value={nameval} onChange={(e)=>namehandler(e.target.value)}></input>
        id:<input type='text' name='value' value={idval} onChange={(e)=>idhandler(e.target.value)}></input>
        age:<input type='text' name='id' value={ageval} onChange={(e)=>agehandler(e.target.value)}></input>
        <Link to ="/table"><button onClick={settingvalue}>add users</button></Link>
        </>
    )
}