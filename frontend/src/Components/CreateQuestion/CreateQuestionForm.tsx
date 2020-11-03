import * as React from "react";
import {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import InputTypes from "./InputTypes";
import axios from "axios";


interface iExam{
    id : number
}


function Send(questionText : string,
              questionType : number,
              mcAnswer1? : string,
              mcAnswer2? : string,
              mcAnswer3? : string,
              mcAnswer4? : string,
              mcCorrectAnswer? : number,
              oqCorrectAnswer? : string,

              ) {

    let questionID = 0;
    axios.post(`/api/question/create/${questionText}/${questionType}`).then(response => {
        questionID = response.data.id;
        console.log(response.data.id);

        if (questionType === 1){

            if(mcCorrectAnswer == 1){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${true}`);
            }
            else{
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${false}`);
            }

            if(mcCorrectAnswer == 2){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${true}`);
            }
            else{
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${false}`);
            }

            if(mcCorrectAnswer == 3 && mcAnswer3 != null){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${true}`);
            }
            else{
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${false}`);
            }

            if(mcCorrectAnswer == 4 && mcAnswer4 != null){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${true}`);
            }
            else{
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${false}`);
            }
        }
        else{
            axios.post(`/api/question/addTextAnswer/${response.data.id}/${oqCorrectAnswer}`)
        }

    } );

    console.log(questionID);

    console.log("gelukt!");
}


class CreateQuestionForm extends Component {
    state ={
        questionText : String,
        type: Number,
        exams: Array<iExam>(),

        McAnswer1 : String,
        McAnswer2 : String,
        McAnswer3 : String,
        McAnswer4 : String,
        McCorrectAnswer : Number,
        OqCorrectAnswer : String,
    }


componentDidMount() {
    axios.get( `/api/exams/find/all`).then(response => {
        this.setState({exams : response.data});
        })
}

    Input=(value : number)=>{
        if (value===1){
            return(
                <>
                    <Form.Control type="text" placeholder="Antwoord 1" required onChange={(e) => this.setState({McAnswer1: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 2" required onChange={(e) => this.setState({McAnswer2: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 3" onChange={(e) => this.setState({McAnswer3: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 4" onChange={(e) => this.setState({McAnswer4: e.target.value}) } />

                    <Form.Label>Correcte antwoord:</Form.Label>
                    <Form.Control as="select" id="McCorrectAnswer" onChange={(e) => this.setState({ McCorrectAnswer: e.target.value})}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Form.Control>
                </>
            )
        }
        else if( value==2){

            return(
                <>
                    <Form.Control type="text" placeholder="Open vraag antwoord" required onChange={(e) => this.setState({OqCorrectAnswer : e.target.value})} />
                </>
            )
        }
    }


    render() {
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
                        {ExamIds}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Vraag: </Form.Label>
                    <Form.Control  placeholder="Vul een vraag in"  type="text"  required  onChange={(e) => this.setState({questionText : e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Check inline label="Multiple Choice" name="QuestionType" id="MP" type="radio" onChange={() => this.setState({type: 1})} required />
                    <Form.Check inline label="Open Question" name="QuestionType" id="OQ" type="radio" onChange={() => this.setState({type: 2})}/>
                </Form.Group>
                <Col>
                    <Form.Group  >
                        {this.Input(parseInt(this.state.type.toString()))}
                    </Form.Group>
                </Col>

                <Button variant="primary" onClick={() =>
                    Send(this.state.questionText.toString(),
                        parseInt(this.state.type.toString()),
                        this.state.McAnswer1.toString(),
                        this.state.McAnswer2.toString(),
                        this.state.McAnswer3.toString(),
                        this.state.McAnswer4.toString(),
                        parseInt(this.state.McCorrectAnswer.toString()),
                        this.state.OqCorrectAnswer.toString()
                        ) }>


                    Submit</Button>
                {/*<Button variant="primary" onClick={() => console.log(this.state) }> Submit</Button>*/}
            </Form>
        )
    }
}

export default CreateQuestionForm;