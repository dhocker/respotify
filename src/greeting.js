import React from "react";

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="greeting">
                <h2>Hello! The time is {this.props.time}!</h2>
            </div>
        );
    }
};