import * as React from "react";
import {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


interface props {
    amount: Number;
    MultipleChoice : Boolean
}

class InputTypes extends Component<props> {

    MP = () =>{
        if (this.props.MultipleChoice.valueOf()){
            return(
                    <Form.Check inline type="radio" label="CorrectAnswer" id="correct"  name="correct" required />
                    )
        }

    }


    render() {
        return(

            Array.from(Array(this.props.amount), (e  ,i) =>{
                return(
                    <>
                        <Form.Control type="text" id={i.toString()} placeholder={"Antwoord " + (i+1)} required />
                        {this.MP()}
                    </>
                )
            })
        )

    }
}

export default InputTypes;