import * as React from "react";
import HomeProps from "./HomeProps";

export default class Home extends React.Component<
    HomeProps, // the first type of the generic React.Component is the format of the props of this component
    {} // the second type of the generic React.Component is the format of the state of this component
    > {
    render() {
        return (
            <div>
                Hello There, {this.props.name}, you are {this.props.age}, right?
            </div>
        );
    }
}