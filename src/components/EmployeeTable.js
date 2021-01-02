
// import Table from "react-bootstrap/Table";

function EmployeeTable(props) {
    const users = props.users;

    return (
        // <Table striped bordered hover variant="dark">

        // </Table>
        <h2>
            {/* {users[0].name.first} */}
            {users.length > 0 ? users[0].name.first : ""}
            Hello {console.log(users)}
        </h2>
    )
}

//after question mark use arr.map to populate employee data to table elements, within the JSX itself

export default EmployeeTable;