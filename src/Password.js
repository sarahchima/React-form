import React, {Component} from "react";

const blue = "#0023ff";
class Password extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.state = {
            constraintsHeight: 0,
            input: "",
            lengthColor: "gray",
            numberColor: "gray",
            upperCaseColor: "gray",
            lowerCaseColor: "gray",
        }
    }

    handleFocus() {
        this.setState({ constraintsHeight: "100px" });
    }

    handleBlur() {
        this.setState({ constraintsHeight: "0px" });
    }

    handleInput(e) {
        let input = e.target.value;

        //Check for length
        const lengthColor = input.length >= 6 ? blue : "gray";

        //check if it contains a number
        const numReg = /\d/;
        const numberColor = numReg.test(e.target.value) == true ? blue : "gray";

        //check if it contains an uppercase letter
        const upperCaseReg = /[A-Z]/
        const upperCaseColor = upperCaseReg.test(e.target.value) == true ? blue : "gray";

        //check if it contains a lowercase letter
        const lowerCaseReg = /[a-z]/
        const lowerCaseColor = lowerCaseReg.test(e.target.value) == true ? blue : "gray";

        this.setState({
            input: e.target.value,
            lengthColor: lengthColor,
            numberColor: numberColor,
            upperCaseColor: upperCaseColor,
            lowerCaseColor: lowerCaseColor,
        })

        this.props.onChange(input);
    }

    render() {
        return (
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput} />
                <ul style={{ maxHeight: this.state.constraintsHeight }} className="list">
                    <li style={{ color: this.state.lengthColor }}>Must be at least 6 characters</li>
                    <li style={{ color: this.state.numberColor }}>Contains at least 1 number</li>
                    <li style={{ color: this.state.upperCaseColor }}>Contains at least one uppercase</li>
                    <li style={{ color: this.state.lowerCaseColor }}>Contains at least one lowercase</li>
                </ul>
            </div>
        )
    }
}


export default Password;
