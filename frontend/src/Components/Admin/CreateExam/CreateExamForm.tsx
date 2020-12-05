import {Component} from "react";
import * as React from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

interface iUser{
    id : number,
    username : string
}

function Send(
 examinerID : number,
 student : string
){
    axios.post(`/api/exams/create/${student}/${examinerID}`);
}

class CreateExamForm extends Component{
    state ={
        users : Array<iUser>(),
        studentName : String,
        examinerID : Number
    }

    componentDidMount() {
        this.setState({studentName: ''})

        axios.get( `/api/users/all`).then(response => {
            this.setState({users : response.data});
        })
    }

    SetExaminerID =( username : string ) =>
    {
        this.state.users.map(user => {
            if (user.username === username) {
                this.setState({examinerID : user.id})
            }
        });
    }

    render() {
         let examiners;
         examiners = this.state.users.map(e => {
             return (
                 <option value={e.username.toString()}> {e.username.toString()}</option>
             )
         })

        return (
                <Form>
                    <Form.Group>
                        <Form.Label>Naam examenleerling: </Form.Label>
                        <Form.Control type="text" placeholder="Naam" onChange={(e) => this.setState({studentName: e.target.value}) } value={this.state.studentName.toString()} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Examinator: </Form.Label>
                        <Form.Control as="select" id="select" onChange={(e) => this.SetExaminerID(e.target.value) } >
                            <option value="choose">Kies een examinator </option>
                            {examiners}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary m-2" onClick={() => Send(parseInt(this.state.examinerID.toString()) , this.state.studentName.toString())}>Maak aan</Button>
                    <Button variant="primary m-2" type="" onClick={() => this.setState({studentName : ``})}>Velden legen</Button>
                </Form>
        )
    }
}

export default CreateExamForm;