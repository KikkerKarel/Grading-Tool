import * as React from "react";
import {Component} from "react";
import axios from "axios";
import {Alert, Button, Form} from "react-bootstrap";
import "../admin.css";

interface iUser{
    id : number,
    username : string
}

class CreateExamForm extends Component{
    state ={
        users : Array<iUser>(),
        exam : ``,
        examinerID : 1,
        message :``
    }

    Send(
        examinerID : number,
        exam : string) {
        axios.post(`/api/exams/create/${exam}/${examinerID}`).then( () =>{
            this.setState({message : `Gelukt!`, exam : `` });
            this.delay(2500).then( () =>  this.setState({message: ``})  );
        }).catch((error) =>{
            this.setState({message : error.response})
        })
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    componentDidMount() {
        axios.get( `/api/users/all`).then(response => {
            this.setState({users : response.data});
        })
    }

    render() {
        let examiners;
        examiners = this.state.users.map(e => {
            return (
                <option value={e.id}> {e.username.toString()}</option>
            )
        })

        return (
            <Form>
                <Alert variant="primary" className="OrangeAlert" >
                    <Alert.Heading>Bericht:</Alert.Heading>
                    <p className="message">
                        {this.state.message}
                    </p>
                </Alert>
                <Form.Group>
                    <Form.Label>Naam examen:</Form.Label>
                    <Form.Control type="text" placeholder="Naam" onChange={(e) => this.setState({exam: e.target.value}) } value={this.state.exam.toString()} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Examinator:</Form.Label>
                    <Form.Control as="select" id="select" onChange={(e) => this.setState({examinerID : e.target.value}) } >
                        <option value="choose" disabled>Kies een examinator:</option>
                        {examiners}
                    </Form.Control>
                </Form.Group>
                <Button className="btn--medium btn btn-primary m2" style={{fontSize:"inherit"}} onClick={() => this.Send( parseInt(this.state.examinerID.toString()), this.state.exam.toString()) }>Aanmaken</Button>
            </Form>
        )
    }
}

export default CreateExamForm;