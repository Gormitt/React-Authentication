import React from "react";
import Layout from './hoc/Layout/Layout';

const App = props => {
    return (
        <div style = {{textAlign: "center"}}>
            <Layout auth = {props.auth} />
        </div>
    );
}

export default App;
