import React from "react";
// import Table from "react-bootstrap/Table";

function EmpItem(props) {
    return (
        <tr>
            <th>{props.name}</th>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td><img src={props.picture} alt={props.name}></img></td>
        </tr>
    )
}

export default EmpItem;