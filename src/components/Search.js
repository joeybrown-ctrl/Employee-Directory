import { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";


class Search extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        API.getEmployees()
            .then((res) => {
                console.log(res.data);
                this.setState({ results: res.data.results });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <EmployeeTable users={this.state.results} />
            </div>
        )

    }
}

export default Search;