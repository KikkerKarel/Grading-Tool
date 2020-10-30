import * as React from "react";
import {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import InputTypes from "./InputTypes";


interface props {
    ExamIds: Number[];
}

class CreateQuestionForm extends Component<props> {
    state ={
        test: Number,
    }


     MP =() => {
        this.setState({test: 0})

    };

    OQ=()=>{
        this.setState({test:1})
    };


    Input=(value : number)=>{
        if (value===0){
            return(
                <>

                    <Form.Label>
                        <InputTypes amount={4} MultipleChoice={true} />
                    </Form.Label>

                    </>
            )
        }
        else if( value==1){

            return(
                <>
                    {/*<Form.Label> Correct answer </Form.Label>*/}
                    <InputTypes amount={1}  MultipleChoice={false}/>
                    </>
            )
        }
    }


    render() {
        let ExamIds;
        ExamIds = this.props.ExamIds.map(e => {
                return (
                    <option > {e.toString()}</option>
                )
            }
        )

        return (
            <Form>
                <Form.Group>
                    <Form.Label> ExamID:</Form.Label>
                    <Form.Control as="select">
                        {ExamIds}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Vraag: </Form.Label>
                    <Form.Control  placeholder="Vul een vraag in"  type="text"  required />
                </Form.Group>
                <Form.Group>
                    <Form.Check inline label="Multiple Choice" name="QuestionType" id="MP" type="radio" onChange={() => this.setState({test: 0})} required />
                    <Form.Check inline label="Open Question" name="QuestionType" id="OQ" type="radio" onChange={() => this.setState({test: 1})}/>
                </Form.Group>
                <Col>
                    <Form.Group  >
                        {this.Input(parseInt(this.state.test.toString()))}
                    </Form.Group>
                </Col>

                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
        )
    }
}

export default CreateQuestionForm;