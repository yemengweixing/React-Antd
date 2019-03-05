import React from 'react';
import { Link } from 'react-router-dom'


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <div>
                    this is main page
                   <br />
                    <Link to="/main/te&">a</Link> 
                    <br />
                    <Link to="/main/456">路由b</Link>
                    <hr />
                    {this.props.children}
                </div>
            </div>

        
        );
    }

}   