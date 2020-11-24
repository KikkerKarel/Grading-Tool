import {Component} from "react";
import * as React from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

function Send(){
    axios.post(``);
}

interface iQuestion{
    id : number,
    text: string,
    type: number
}

interface iExam{
    id : number
}


class CreateExamItemForm extends Component{
    state ={
        myQuestions : Array<iQuestion>(),
        exams: Array<iExam>(),

        questionID : Number,
        questionType : Number,
    }

    componentDidMount() {
        axios.get(`/api/exams/find/all`).then(response =>{
            this.setState({exams : response.data});
        })


        axios.get(`/api/question/find/all`).then(response =>{
            this.setState({myQuestions : response.data });
        });
    }

    SetQuestionType = (text : string) =>{
        this.state.myQuestions.map(q =>{
            if (q.text === text){
                this.setState({questionType : q.type});
                this.setState({questionID : q.id});
            }
        })
    }
    //
    // Input = (value : number) =>{
    //     if ( value === 1){
    //         axios.get(`/api/question/mc/${this.state.questionID}`).then(response =>{
    //                 let mcOptions;
    //                 mcOptions = response.data.map(mc =>{
    //                     return()
    //                 })
    //
    //
    //                 return(
    //                     <option> {response.data}</option>
    //                 )
    //             }
    //         )
    //
    //     }
    // }



    render() {
        let questions;
        questions = this.state.myQuestions.map(q => {
            return (
                <option> {q.text.toString()}</option>
            )
        })

        let ExamIds;
        ExamIds = this.state.exams.map(e => {
                return (
                    <option > {e.id.toString()}</option>
                )
            }
        )

        return (
            <Form>
                <Form.Group>
                    <Form.Label> ExamID:</Form.Label>
                    <Form.Control as="select">
                        <option>abc</option>
                        {ExamIds}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Vraag:</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.SetQuestionType(e.target.value)}>
                        {<option>abc</option>}
                        {questions}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    {}
                </Form.Group>


                <Button variant="primary m-2" > Submit</Button>
                <Button variant="primary m-2" onClick={() => console.log(this.state)} > get State</Button>
                <Button variant="primary m-2" onClick={() => this.setState({})}>clear fields</Button>
            </Form>
        )
    }
}

export default CreateExamItemForm;
