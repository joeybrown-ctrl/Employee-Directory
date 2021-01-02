import Table from "react-bootstrap/table";
import API from "./utils/API.js";
import './App.css';
import { render } from "@testing-library/react";

class APP extends Component {
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

    render() {
      return (
        <div>
          
        </div>
      )
    }
  }
}

export default App;
