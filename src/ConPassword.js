import React, {Component} from "react";


class ConPassword extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            input: "",
            status: "Both Passwords are not equal",
            constraintsHeight: 0,
            constraintColor: "gray"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        this.setState ({input: e.target.value});
        const equal = "Both Passwords are equal";
        const notEqual = "Both Passwords are not equal";
        const status = (e.target.value == this.props.password) ? equal : notEqual;

        const blue = "#0023ff";
        const color = (e.target.value == this.props.password) ? blue : "gray";
        this.setState({ status: status, constraintColor: color });
    }
    handleFocus() {
        this.setState({ constraintsHeight: "100px" });
    }

    handleBlur() {
        this.setState({ constraintsHeight: "0px" });
    }
    render() {
        return (
            <div>
                <label for="conpassword"> Confirm Password</label>
                <input type="password" name="conpassword" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                <ul style={{ maxHeight: this.state.constraintsHeight }} className="list">
                    <li style={{color: this.state.constraintColor}}>{this.state.status}</li>
                </ul>
            </div>
        )
    }
}

export default ConPassword;
