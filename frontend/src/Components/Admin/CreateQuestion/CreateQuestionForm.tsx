import * as React from "react";
import {Component} from "react";
import {Alert, Button, Col, Form} from "react-bootstrap";
import axios from "axios";

class CreateQuestionForm extends Component {
    state = {
        questionText: ``,
        type: 0,

        McAnswer1: ``,
        McAnswer2: ``,
        McAnswer3: ``,
        McAnswer4: ``,
        McCorrectAnswer: ``,
        OqCorrectAnswer: ``,

        message: ``
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    clear() {
        this.setState({
            McAnswer1: '',
            McAnswer2: '',
            McAnswer3: '',
            McAnswer4: '',
            questionText: '',
            type: 0,
            message: "Gelukt!"
        })
        this.delay(2500).then(() => this.setState({message: ``}));
    }

    Send(questionText: string,
         questionType: number,
         mcAnswer1?: string,
         mcAnswer2?: string,
         mcAnswer3?: string,
         mcAnswer4?: string,
         mcCorrectAnswer?: string,
         oqCorrectAnswer?: string
    ) {
        let questiontext = encodeURIComponent(questionText);
        axios.post(`/api/question/create/${questiontext}/${questionType}`).then(response => {
            console.log("Vraag toegevoegd");

            if (questionType === 1) {
                if (mcAnswer1 !== '' && mcCorrectAnswer === mcAnswer1) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    });

                } else if (mcAnswer1 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer1}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                }

                if (mcAnswer2 !== '' && mcCorrectAnswer === mcAnswer2) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })

                } else if (mcAnswer2 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer2}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                }

                if (mcAnswer3 !== '' && mcCorrectAnswer === mcAnswer3) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                } else if (mcAnswer3 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer3}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                }

                if (mcAnswer4 !== '' && mcCorrectAnswer === mcAnswer4) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                } else if (mcAnswer4 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${mcAnswer4}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: "Error... zie console"});
                        console.log(error.response);
                    })
                }
            } else if (oqCorrectAnswer !== '') {
                axios.post(`/api/question/addTextAnswer/${response.data.id}/${oqCorrectAnswer}`)
                    .then(() => {
                        this.setState({message: "Gelukt!"}, () => this.clear());
                    }).catch(error => {
                    this.setState({message: "Error... zie console"});
                    console.log(error.response);
                })
            }
        });
    }

    returnOption = (value: any) => {
        if (value.trim() !== "") {
            return (<option> {value} </option>)
        }
    }

    Input = (value: number) => {
        if (value === 1) {
            return (
                <>
                    <Form.Control type="text" placeholder="Antwoord 1"
                                  onChange={(e) => this.setState({McAnswer1: e.target.value})}/>
                    <Form.Control type="text" placeholder="Antwoord 2"
                                  onChange={(e) => this.setState({McAnswer2: e.target.value})}/>
                    <Form.Control type="text" placeholder="Antwoord 3"
                                  onChange={(e) => this.setState({McAnswer3: e.target.value})}/>
                    <Form.Control type="text" placeholder="Antwoord 4"
                                  onChange={(e) => this.setState({McAnswer4: e.target.value})}/>

                    <Form.Label>Correcte antwoord:</Form.Label>
                    <Form.Control as="select" id="McCorrectAnswer"
                                  onChange={(e) => this.setState({McCorrectAnswer: e.target.value.toString()})}>
                        {this.returnOption(this.state.McAnswer1.toString())}
                        {this.returnOption(this.state.McAnswer2.toString())}
                        {this.returnOption(this.state.McAnswer3.toString())}
                        {this.returnOption(this.state.McAnswer4.toString())}
                    </Form.Control>
                </>
            )
        } else if (value === 2) {
            return (
                <Form.Control type="text" placeholder="Open vraag antwoord" required
                              onChange={(e) => this.setState({OqCorrectAnswer: e.target.value})}/>
            )
        }
    }

    render() {
        return (
            <Form>
                <Alert variant="primary">
                    <Alert.Heading>Bericht:</Alert.Heading>
                    <p className="message">
                        {this.state.message}
                    </p>
                </Alert>
                <Form.Group>
                    <Form.Label> Vraag: </Form.Label>
                    <Form.Control value={this.state.questionText.toString()} placeholder="Vul een vraag in"
                                  type="text" onChange={(e) => this.setState({questionText: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Check inline label="Multiple Choice" name="QuestionType" id="MP" type="radio"
                                onChange={() => this.setState({type: 1})}/>
                    <Form.Check inline label="Open Question" name="QuestionType" id="OQ" type="radio"
                                onChange={() => this.setState({type: 2})}/>
                </Form.Group>
                <Col>
                    <Form.Group>
                        {this.Input(parseInt(this.state.type.toString()))}
                    </Form.Group>
                </Col>
                <Button variant="primary m-2" onClick={() =>
                    this.Send(this.state.questionText.toString(),
                        this.state.type,
                        this.state.McAnswer1,
                        this.state.McAnswer2,
                        this.state.McAnswer3,
                        this.state.McAnswer4,
                        this.state.McCorrectAnswer,
                        this.state.OqCorrectAnswer
                    )}>
                    Aanmaken</Button>
            </Form>
        )
    }
}

export default CreateQuestionForm;