import React, { Component } from "react";
import authorize from '../../hoc/Authorize/Authorize';

class UserInfo extends Component {
    render() {
        return(
            <div>USER INFO</div>
        )
    }
}

export default authorize(UserInfo);