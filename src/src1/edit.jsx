import React,{useState} from 'react'
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom';
export default function Edit({data,setuser}){
    console.log(data)
    const [name2, setname] = useState('')
    const [id2, setid] = useState(0)
    const [age2, setage] = useState(0)
        return(
            <>
            NAme:<input type='text' name='name' value={name2} onChange={(e)=>setname(e.target.value)}></input>
            Id:<input type='text' name='id' value={id2} onChange={(e)=>setid(e.target.value)}></input>
            Age:<input type='text' name='age' value={age2} onChange={(e)=>setage(e.target.value)}></input>
            <Link to ="/table">
            <button onClick={() => {
          localStorage.setItem('name1',name2);
          localStorage.setItem('age1',age2)
          localStorage.setItem('id1',id2)
          change()
        }}>edit users</button>
        </Link>
            </>
        )
  function change(){
    const name=localStorage.getItem('name')
    const age=localStorage.getItem('age')
    const id=localStorage.getItem('id')
    const name1=localStorage.getItem('name1')
    const age1=localStorage.getItem('age1')
    const id1=localStorage.getItem('id1')
    const obj=[{name:name,id:id,age:age}]
    console.log(data.filter((e)=>{if(e.id==id){
        e.id=id1;e.name=name1;e.age=age1;
    }}))
  }
    }