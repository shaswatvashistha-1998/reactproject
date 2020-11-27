import React, { useState } from 'react'
import Tableheader from './thead.js'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tablefooter from './tbody.js'
import Add from './add'
import View from './view.jsx';
import Edit from './edit.jsx'
function Table(props) {
    console.log(props.value)
    console.log('new value just added')
    const [user1, setuser] = useState([])
    const [name1, setname] = useState('')
    const [id1, setid] = useState(0)
    const [age1, setage] = useState(0)
    const header = {
        name: 'name',
        id: 'id',
        age: 'age',
        action: 'action'
    }
    const settingvalue = () => {
        setuser([...user1, { name: name1, id: id1, age: age1 }])
    }
    return (
        <>
            <Router>
                <Link to="/table">Table</Link>
                <Switch>
                    <Route exact path="/table">
                        <table>
                            <Tableheader name={header} />
                            <Tablefooter data={user1} setuser={setuser} />
                        </table>
                    </Route>
                </Switch>
                <Link to="/constant">Add</Link>
                <Switch>
                    <Route exact path="/constant">
                        <Add nameval={name1} namehandler={setname} idval={id1} idhandler={setid} ageval={age1} agehandler={setage} settingvalue={settingvalue} />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/view">
                        <View data={user1}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/edit">
                        <Edit data={user1} setuser={setuser}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Table;
