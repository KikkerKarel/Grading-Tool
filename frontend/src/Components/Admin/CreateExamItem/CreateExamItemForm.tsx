import * as React from "react";
import {Component} from "react";
import axios from "axios";
import {Alert, Button, Form} from "react-bootstrap";
import "../admin.css";

interface iChoice{
    id: number,
    text : string
}

interface iQuestion{
    id : number,
    text: string,
    type: number,
    choices : Array<iChoice>
}

interface iExam{
    id : number,
    examName : string
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
            this.setState({exams : response.data, examID : response.data[0].id});
        })

        axios.get(`/api/question/find/all`).then(response =>{
            this.setState({myQuestions : response.data, questionID : response.data[0].id, questionType : response.data[0].type });
        });
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    SetQuestion = (id : number) =>{
        this.state.myQuestions.forEach((q) =>{
            if (q.id === id){
                this.setState({questionType : q.type, questionID : q.id});
            }
        })
    }

    Input=(type : String, questionID : number)=>{
        if (type==="CHOICE"){
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
        else if(type==="TEXT"){
            return(
                <Form.Control type="text" value={this.state.oqAnswer} placeholder="Open vraag antwoord" required onChange={(e) => this.setState({oqAnswer : e.target.value})} />
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

        if(this.state.questionType === "CHOICE"){
            axios.post(`/api/examitems/create/mc/${examID}/${questionID}/${this.state.mcAnswer}`).then(() =>{
                this.setState({message : "Gelukt!"});
                this.delay(2500).then( () =>  this.setState({message: ``})  );
            }).catch(error =>{
                this.setState({message : error.response});
            });
        }
        else if(this.state.questionType ==="TEXT"){
            let questionText = encodeURIComponent(this.state.oqAnswer);

            axios.post(`/api/examitems/create/oq/${examID}/${questionID}/${questionText}`).then(() =>{
                this.setState({message : "Gelukt!"});
                this.delay(2500).then( () =>  this.setState({message: ``})  );
            }).catch(error =>{
                this.setState({message : error.response});
            });
        }
        this.setState({oqAnswer : ""});
    }

    render() {
        let questions;
        questions = this.state.myQuestions.map(q => {
            return (
                <option value={q.id}> {q.text.toString() + " (" + q.type + ")"}</option>
            );
        });

        let ExamIds;
        ExamIds = this.state.exams.map(e => {
            return (
                <option value={e.id.toString()} > {e.examName.toString() }</option>
            );
        });

        return (
            <Form onSubmit={(e) => this.SubmitForm(e)}>
                <Alert variant="primary" className="OrangeAlert">
                    <Alert.Heading>Bericht:</Alert.Heading>
                    <p className="message">
                        {this.state.message}
                    </p>
                </Alert>
                <Form.Group>
                    <Form.Label>Examen:</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.setState({examID : e.target.value})}>
                        {ExamIds}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Vraag:</Form.Label>
                    <Form.Control as="select" onChange={(e) => this.SetQuestion( parseInt( e.target.value))}>
                        {questions}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    {this.Input(this.state.questionType, this.state.questionID)}
                </Form.Group>
                <Button className="btn--medium btn btn-primary m2" style={{fontSize:"inherit"}} type="submit" disabled={this.validateForm(this.state.questionType, this.state.oqAnswer)}>Koppelen</Button>
            </Form>
        )
    }
}

export default CreateExamItemForm;