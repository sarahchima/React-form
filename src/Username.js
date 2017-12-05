import React, {Component} from "react";

class Username extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            lengthColor: "#a1a1a4",
            charColor: "#a1a1a4",
            constraintsHeight: 0
        }

        this.handleChange =  this.handleChange.bind(this); 
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
    }

    handleFocus() {
        this.setState({ constraintsHeight: "100px" });
    }

    handleBlur() {
        this.setState({ constraintsHeight: "0px" });
    }


    handleChange(e) {

        const input = e.target.value;

        //Checks if length is more than 3 characters
        const lengthColor = input.length >= 3 ? "green": "#a1a1a4"; 

        //checks if length contains a special character
        const specialCharTest = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        const charColor = specialCharTest.test(input) != true ? "green": "#a1a1a4"; 
        this.setState({
            input: e.target.value,
            lengthColor: lengthColor,
            charColor: charColor
        })
    }
    render() {
        return (
            <div>
                <label for="username">Username</label>
                <input type="text" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                <ul style={{ transition: "all 0.5s linear", overflow: "hidden", maxHeight: this.state.constraintsHeight, }}>
                    <li style={{color:this.state.lengthColor}}>Must be at least 3 characters</li>
                    <li style={{color:this.state.charColor}}>Must contain only letters and numbers</li>
                </ul>
            </div> 
        )
    }
}

export default Username;