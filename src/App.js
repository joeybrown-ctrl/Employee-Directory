import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import DirNav from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import EmpItem from "./components/EmpItem";
import API from "./utils/API";
// import "./App.css";

export default function App() {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  useEffect(() => {
    API.getEmployees()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (sort) {
      ascSort("first", results);
    } else {
      dscSort("first", results);
    }
    console.log(sort);
  }, [sort]);

  const ascSort = (prop, arr) => {
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

  const dscSort = (prop, arr) => {
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
        <DirNav />

        <form>
          <label>
            Filter by Name:
              <input
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </label>
        </form>

        <EmployeeTable sort={sort} setSort={setSort}>
          {search.length < 1
            ? results.map((result, i) => (

              <EmpItem
                number={i}
                key={result.login.uuid}
                name={result.name.first + " " + result.name.last}
                phone={result.phone}
                email={result.email}
                picture={result.picture.medium}
              >

              </EmpItem>
            ))


            : results.map((result, i) => {
              if (result.name.first
                .toLowerCase()
                .includes(search.toLowerCase())) {
                return (
                  <EmpItem
                    number={i}
                    key={result.login.uuid}
                    name={result.name.first + " " + result.name.last}
                    phone={result.phone}
                    email={result.email}
                    picture={result.picture.medium}>

                  </EmpItem>
                );
              }
            })
          }


        </EmployeeTable>
      </Wrapper>
    </div>
  );
}
