import React from "react";


function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">
                        <span>
                            Name
                            <svg
                                className=""
                                onClick={() => {
                                    props.setSort(!props.sort);
                                }}
                                height="1rem"
                                width="2rem"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                            <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                                />
                            </svg>
                        </span>
                    </th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Employee Photo</th>
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    );
}

export default EmployeeTable;