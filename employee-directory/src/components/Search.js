import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label for="sortby" >Sort By: </label>
                <input
                    onChange={props.handleInputChange}
                    type="checkbox"
                    name="sortby"
                    id="firstname"
                    checked={(props.sortby === "firstname") ? "checked" : false}
                />First Name
        <input
                    onChange={props.handleInputChange}
                    type="checkbox"
                    name="sortby"
                    id="lastname"
                    checked={(props.sortby === "lastname") ? "checked" : false}
                />Last Name
            </div>

        </form>
    );
}

export default Search;