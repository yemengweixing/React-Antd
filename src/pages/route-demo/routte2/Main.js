import React from 'react';
import { Link } from 'react-router-dom'


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <div>
                    this is main page
                    <hr />
                    <Link to="/main/a">a</Link>
                    {this.props.children}
                </div>
            </div>

        
        );
    }

}   