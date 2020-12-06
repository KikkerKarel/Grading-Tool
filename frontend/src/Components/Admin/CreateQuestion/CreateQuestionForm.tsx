import * as React from "react";
import {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
import axios from "axios";

function Send(questionText : string,
              questionType : number,
              mcAnswer1? : string,
              mcAnswer2? : string,
              mcAnswer3? : string,
              mcAnswer4? : string,
              mcCorrectAnswer? : string,
              oqCorrectAnswer? : string,
        ){
    let questiontext = encodeURIComponent(questionText);

    axios.post(`/api/question/create/${questiontext}/${questionType}`).then(response => {
        console.log("Vraag toegevoegd");

        if (questionType === 1){
            if(mcAnswer1 !== '' && mcCorrectAnswer === mcAnswer1 ){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${true}`);
            }
            else if(mcAnswer1 !== ''){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${false}`);
            }

            if(mcAnswer2 !== '' && mcCorrectAnswer === mcAnswer2){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${true}`);
            }
            else if(mcAnswer2 !== ''){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${false}`);
            }

            if(mcAnswer3 !== '' && mcCorrectAnswer === mcAnswer3){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${true}`);
            }
            else if(mcAnswer3 !== ''){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${false}`);
            }

            if(mcAnswer4 !== '' && mcCorrectAnswer === mcAnswer4){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${true}`);
            }
            else if(mcAnswer4 !== ''){
                axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${false}`);
            }
        }
        else if(oqCorrectAnswer !== ''){
            axios.post(`/api/question/addTextAnswer/${response.data.id}/${oqCorrectAnswer}`)
        }
    } );
}

class CreateQuestionForm extends Component {
    state ={
        questionText : String,
        type: Number,

        McAnswer1 : String,
        McAnswer2 : String,
        McAnswer3 : String,
        McAnswer4 : String,
        McCorrectAnswer : String,
        OqCorrectAnswer : String,
    }

componentDidMount() {
    this.setState({McAnswer1 : '', McAnswer2: '', McAnswer3 : '', McAnswer4 : '', questionText : ''});
}
    test = (value : any) =>{
        if(value.trim() !== ""){
            return(<option> {value} </option>)
        }
    }

    Input=(value : number)=>{
        if (value===1){
            return(
                <>
                    <Form.Control type="text" placeholder="Antwoord 1" onChange={(e) => this.setState({McAnswer1: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 2" onChange={(e) => this.setState({McAnswer2: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 3" onChange={(e) => this.setState({McAnswer3: e.target.value}) } />
                    <Form.Control type="text" placeholder="Antwoord 4" onChange={(e) => this.setState({McAnswer4: e.target.value}) } />

                    <Form.Label>Correcte antwoord:</Form.Label>
                    <Form.Control as="select" id="McCorrectAnswer" onChange={(e) => this.setState({ McCorrectAnswer: e.target.value.toString()})} >
                        {this.test(this.state.McAnswer1.toString())}
                        {this.test(this.state.McAnswer2.toString())}
                        {this.test(this.state.McAnswer3.toString())}
                        {this.test(this.state.McAnswer4.toString())}
                    </Form.Control>
                </>
            )
        }
        else if(value===2){
            return(
                <>
                    <Form.Control type="text" placeholder="Open vraag antwoord" required onChange={(e) => this.setState({OqCorrectAnswer : e.target.value})} />
                </>
            )
        }
    }
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Vraag:</Form.Label>
                    <Form.Control value={this.state.questionText.toString()}  placeholder="Vul een vraag in"  type="text" onChange={(e) => this.setState({questionText : e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Check inline label="Gesloten vraag" name="QuestionType" id="MP" type="radio" onChange={() => this.setState({type: 1})} />
                    <Form.Check inline label="Open vraag" name="QuestionType" id="OQ" type="radio" onChange={() => this.setState({type: 2})}/>
                </Form.Group>
                <Col>
                    <Form.Group >
                        {this.Input(parseInt(this.state.type.toString()))}
                    </Form.Group>
                </Col>
                <Button variant="primary m-2" onClick={() =>
                    Send(this.state.questionText.toString(),
                        parseInt(this.state.type.toString()),
                        this.state.McAnswer1.toString(),
                        this.state.McAnswer2.toString(),
                        this.state.McAnswer3.toString(),
                        this.state.McAnswer4.toString(),
                        this.state.McCorrectAnswer.toString(),
                        this.state.OqCorrectAnswer.toString()
                        ) }>
                    Maak vraag</Button>
                <Button variant="primary m-2" type="" onClick={() => this.setState({McAnswer1 : '', McAnswer2: '', McAnswer3 : '', McAnswer4 : '',questionText : '', type : 0}) }>Velden legen</Button>
            </Form>
        )
    }
}

export default CreateQuestionForm;