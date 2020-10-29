import React from 'react'
function Table(props){
  let header=props.name
    return(
        <thead>
          <th style={{"border": "2px solid white"}}>{header.name}</th>
          <th style={{"border": "2px solid white"}}>{header.id}</th>
          <th style={{"border": "2px solid white"}}>{header.age}</th>
          <th style={{"border": "2px solid white"}}>{header.action}</th>
        </thead>
    )
}
export default Table;