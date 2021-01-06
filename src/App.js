import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import DirNav from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import EmpItem from "./components/EmpItem";
import API from "./utils/API";
import "./App.css";

export default function App() {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  useEffect(() => {
    API.fetchEmployees()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (sort) {
      ascendingSort("first", results);
    } else {
      descendingSort("first", results);
    }
    console.log(sort);
  }, [sort]);

  const ascendingSort = (prop, arr) => {
    arr.sort((a, b) => {
      if (a.name[prop] < b.name[prop]) {
        return -1;
      } else if (a.name[prop] > b.name[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const descendingSort = (prop, arr) => {
    arr.sort((a, b) => {
      if (a.name[prop] < b.name[prop]) {
        return 1;
      } else if (a.name[prop] > b.name[prop]) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="App">

      <Wrapper className="container-fluid">
        <div className="nav-row">
          <Navbar />
        </div>
        <div className="filter-row">
          <div className="filter-col">
            <form>
              <label>
                Filter by Name:
              <input
                  type="text"
                  className="searchBar"
                  value={search}
                  onChange={(event) => {

                    setSearch(event.target.value);
                  }}
                />
              </label>
            </form>
          </div>
        </div>

        <div className="table-row">
          <div className="table-col">
            <EmployeeTable sort={sort} setSort={setSort} className="table">
              {search.length < 1
                ? results.map((result, i) => (
                  <EmpItem
                    style={{ color: "white" }}
                    className="table-item"
                    number={i}
                    key={result.login.uuid}
                    name={result.name.first + " " + result.name.last}
                    phone={result.phone}
                    email={result.email}
                    picture={result.picture.medium}
                  ></EmpItem>
                ))
                results.map((result, i) => {
                  if (
                    result.name.first
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return (
                      <EmpItem
                className="table-item"
                number={i}
                key={result.login.uuid}
                name={result.name.first + " " + result.name.last}
                phone={result.phone}
                email={result.email}
                picture={result.picture.medium}
              ></EmpItem>
                    );
                  }
                })}
          </EmployeeTable>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
