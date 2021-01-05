import Table from "react-bootstrap/Table";

function EmployeeTable(props) {
    const users = props.users;

    return (
        // <h2>
        //     {users.length > 0 ? users[0].name.first : ""}
        //     Hello {console.log(users)}
        // </h2>

        <Table striped bordered hover sizr="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>username</th>
                </tr>
            </thead>
            <tbody>
                {this.state.results.map((result, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.login.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

//after question mark use arr.map to populate employee data to table elements, within the JSX itself

export default EmployeeTable;