import React from "react";

function EmployeeList(props) {
    const field = (props.sortby === "firstname") ? "first" : "last";
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Cell #</th>
                        <th>Email</th>
                    </tr>
                </thead><tbody>
                    {props.results.sort((a, b) => a.name[field] > b.name[field] ? 1 : -1).map(result => (
                        <tr key={result.id.value}>
                            <td><img className="img-fluid" src={result.picture.large} /></td>
                            <td><span>{`${result.name.first} ${result.name.last}`}</span></td>
                            <td><span>{result.cell}</span></td>
                            <td><span>{result.email}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;