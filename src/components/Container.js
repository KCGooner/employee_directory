import React, { Component } from "react";
import ResultList from "./EmployeeList";
import SearchForm from "./Search";
import API from "../utils/API";

class Container extends Component {
    state = {
        search: "",
        sortby: "",
        results: []
    };

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchEmployees("");
    }

    handleInputChange = event => {
        const name = event.target.id;
        if (name === "firstname") {
            this.setState({ sortby: "firstname" });
        }
        if (name === "lastname") {
            this.setState({ sortby: "lastname" });
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    sortby={this.state.sortby}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList sortby={this.state.sortby} results={this.state.results} />
            </div>
        );
    }
}

export default Container;