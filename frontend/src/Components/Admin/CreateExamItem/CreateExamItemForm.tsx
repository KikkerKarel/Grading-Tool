import {Component} from "react";
import * as React from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

function Send(){
    axios.post(``);
}

interface iChoice{
    id: number,
    text : string
}

interface iQuestion{
    id : number,
    text: string,
    type: number,
    choices : Array<iChoice>,
}

interface iExam{
    id : number
}


class CreateExamItemForm extends Component{
    state ={
        myQuestions : Array<iQuestion>(),
        exams: Array<iExam>(),
        examID : 0,
        questionID : 0,
        questionType : "",
        mcAnswer : 1,
        oqAnswer : "",
        message : ""
    }

    componentDidMount() {
        axios.get(`/api/exams/find/all`).then(response =>{
            //console.log(response.data);
            this.setState({exams : response.data, examID : response.data[0].id});
        })

        axios.get(`/api/question/find/all`).then(response =>{
            //console.log(response.data);

            this.setState({myQuestions : response.data, questionID : response.data[0].id, questionType : response.data[0].type });
        });
    }

    SetQuestion = (text : string) =>{
        this.state.myQuestions.map(q =>{
            if (q.text === text){
                this.setState({questionType : q.type, questionID : q.id});
            }
        })
    }


    Input=(type : String, questionID : number)=>{
        if (type=="CHOICE"){
            let mcChoices = this.state.myQuestions.find(q => q.id === questionID)?.choices;
            let myChoices;
            myChoices = mcChoices?.map(c =>{
                return(
                    <option value={c.id} > {c.text.toString()}</option>
                )
            });
            return(
                <>
                    <Form.Label>Gegeven antwoord:</Form.Label>
                    <Form.Control as="select" id="McCorrectAnswer" onChange={(e) => this.setState({ mcAnswer: e.target.value.toString()})} >
                        {myChoices}
                    </Form.Control>
                </>
            )
        }
        else if(type=="TEXT"){
            return(
                <>
                    <Form.Control type="text" value={this.state.oqAnswer} placeholder="Open vraag antwoord" required onChange={(e) => this.setState({oqAnswer : e.target.value})} />
                </>
            )
        }
    }


    validateForm(type : String, oqinput : string){
        return type === "TEXT" && oqinput === "";
    }

    SubmitForm(e : any){
        e.preventDefault();

        let examID = this.state.examID;
        let questionID = this.state.questionID;

        console.log(this.state.mcAnswer);

         if(this.state.questionType === "CHOICE"){
             axios.post(`/api/examitems/create/mc/${examID}/${questionID}/${this.state.mcAnswer}`).then(() =>{
                 this.setState({message : "Gelukt!"});
             }).catch(error =>{
                 this.setState({message : error.data});
             });
         }
         else if(this.state.questionType ==="TEXT"){
             let questionText = encodeURIComponent(this.state.oqAnswer);

             axios.post(`/api/examitems/create/oq/${examID}/${questionID}/${questionText}`).then(() =>{
                 this.setState({message : "Gelukt!"});
             }).catch(error =>{
                 this.setState({message : error.data});
             });
         }

         this.setState({oqAnswer : ""});
    }

    render() {
        let questions;
        questions = this.state.myQuestions.map(q => {
            return (
                <option> {q.text.toString()}</option>
            );
        });

        let ExamIds;
        ExamIds = this.state.exams.map(e => {
            return (
                <option > {e.id.toString()}</option>
            );
        });





        return (
            <>
                <h1>{this.state.message}</h1>
            <Form onSubmit={(e) => this.SubmitForm(e)}>
                <Form.Group>
                    <Form.Label> ExamID:</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.setState({examID : e.target.value})}>
                        {ExamIds}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Vraag:</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.SetQuestion(e.target.value)}>
                        {questions}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    {this.Input(this.state.questionType, this.state.questionID)}
                </Form.Group>

                <Button variant="primary m-2" type="submit" disabled={this.validateForm(this.state.questionType, this.state.oqAnswer)} >Submit</Button>
            </Form>
                </>
        )
    }
}

export default CreateExamItemForm;
