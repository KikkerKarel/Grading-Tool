import * as React from "react";
import {Component} from "react";
import {Alert, Button, Col, Form} from "react-bootstrap";
import axios from "axios";
import "../admin.css";

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

        enumeration: false,
        grammar: false,
        quote: false,
        maxWords: 0,

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
            OqCorrectAnswer : '',
            type: 0,
            message: "Gelukt!",
            enumeration: false,
            grammar: false,
            quote: false,
            maxWords: 0,
        })
        this.delay(2500).then(() => this.setState({message: ``}));
        console.log(this.state);
    }

    Send() {
        let questiontext = encodeURIComponent(this.state.questionText);
        let maxWords = this.state.maxWords;

        if (this.state.maxWords.toString() === "" || this.state.maxWords <= 0) {
            maxWords = 0;
        }


        axios.post(`/api/question/create/${questiontext}/${this.state.type}/${this.state.enumeration}/${this.state.grammar}/${this.state.quote}/${maxWords}`).then(response => {
            if (this.state.type === 1) {
                if ((this.state.McAnswer1) !== '' && (this.state.McCorrectAnswer) === (this.state.McAnswer1)) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer1}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    });

                } else if (this.state.McAnswer1 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer1}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                }

                if (this.state.McAnswer2 !== '' && this.state.McCorrectAnswer === this.state.McAnswer2) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer2}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })

                } else if (this.state.McAnswer2 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer2}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                }

                if (this.state.McAnswer3 !== '' && this.state.McCorrectAnswer === this.state.McAnswer3) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer3}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                } else if (this.state.McAnswer3 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer3}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                }

                if (this.state.McAnswer4 !== '' && this.state.McCorrectAnswer === this.state.McAnswer4) {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer4}/${true}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                } else if (this.state.McAnswer4 !== '') {
                    axios.post(`/api/question/addMcAnswer/${response.data.id}/${this.state.McAnswer4}/${false}`)
                        .then(() => {
                            this.setState({message: "Gelukt!"}, () => this.clear());
                        }).catch(error => {
                        this.setState({message: error.response});
                    })
                }
            } else if (this.state.OqCorrectAnswer !== '') {
                axios.post(`/api/question/addTextAnswer/${response.data.id}/${this.state.OqCorrectAnswer}`)
                    .then(() => {
                        this.setState({message: "Gelukt!"}, () => this.clear());
                    }).catch(error => {
                    this.setState({message: error.response});
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
                <div>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Open vraag antwoord" required
                                      onChange={(e) => this.setState({OqCorrectAnswer: e.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Opsomming" checked={this.state.enumeration}
                                    onChange={(e: any) => this.setState({enumeration: e.target.checked})}/>
                        <Form.Check type="checkbox" label="Hoofdlettergevoelig / Grammatica"
                                    checked={this.state.grammar}
                                    onChange={(e: any) => this.setState({grammar: e.target.checked})}/>
                        <Form.Check type="checkbox" label="Citaat" checked={this.state.quote}
                                    onChange={(e: any) => this.setState({quote: e.target.checked})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="number" defaultValue={0} value={this.state.maxWords} placeholder="Maximaal aantal woorden"
                                      onChange={(e: any) => this.setState({maxWords: e.target.value})}/>
                    </Form.Group>
                </div>
            )
        }
    }

    render() {
        return (
            <Form style={{width:"23rem"}}>
                <Alert variant="primary" className="OrangeAlert">
                    <Alert.Heading>Bericht:</Alert.Heading>
                    <p className="message">
                        {this.state.message}
                    </p>
                </Alert>
                <Form.Group>
                    <Form.Label>Vraag:</Form.Label>
                    <Form.Control value={this.state.questionText.toString()} placeholder="Vul een vraag in"
                                  type="text" onChange={(e) => this.setState({questionText: e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Check inline label="Gesloten vraag" name="QuestionType" id="MP" type="radio"
                                onChange={() => this.setState({type: 1})}/>
                    <Form.Check inline label="Open vraag" name="QuestionType" id="OQ" type="radio"
                                onChange={() => this.setState({type: 2})}/>
                </Form.Group>
                <Col>
                    <Form.Group>
                        {this.Input(parseInt(this.state.type.toString()))}
                    </Form.Group>
                </Col>
                <Button className="btn--medium btn btn-primary m2" style={{fontSize:"inherit"}} onClick={() => this.Send()}> Aanmaken</Button>
            </Form>
        )
    }
}

export default CreateQuestionForm;