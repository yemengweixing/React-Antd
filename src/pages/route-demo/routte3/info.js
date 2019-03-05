import React from "react";

export default class Info extends React.Component {
    render() {
        return (
            <div>
                <div>动态路由</div>
               路由的值： {this.props.match.params.value}
            </div>
        );
    }
}
