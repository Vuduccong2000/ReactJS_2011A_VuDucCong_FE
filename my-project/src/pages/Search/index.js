import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory,useParams
  } from "react-router-dom";
function Search(props) {
    let history = useHistory();
    let {id} = useParams();
    function goHome() {
        history.push("/home")
    }
    return (
        <div>
            <button onClick={goHome}>Go Home</button>
            <h1>{id}</h1>
        </div>
    );
}

export default Search;