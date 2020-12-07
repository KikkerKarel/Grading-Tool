import * as React from "react";
import {Component} from "react";
import {Form} from "react-bootstrap";

interface Object {
    label: string,
    type: string,
    placeholder: string,
    checkLabel1?: string,
    checkLabel2?: string
}

interface props {
    data: Object[];
}

class QuickForm extends Component<props> {
    render() {
        let formRadio;
        let formItems = this.props.data.map((d) => {
            if (d.type === "radio") {
                return (
                    formRadio =
                        <>
                            <Form.Group>
                                <Form.Label>{d.label}</Form.Label>
                                <Form.Check inline label={d.checkLabel1} name="radioButton" type={d.type}
                                            id={d.checkLabel1}/>
                                <Form.Check inline label={d.checkLabel2} name="radioButton" type={d.type}
                                            id={d.checkLabel2}/>
                            </Form.Group>
                        </>
                )
            } else {
                return (
                    <Form.Group>
                        <Form.Label>{d.label}</Form.Label>
                        <Form.Control type={d.type} placeholder={d.placeholder}/>
                    </Form.Group>)
            }
        });

        return (
            <Form>
                {formItems}
            </Form>
        )
    }
}

export default QuickForm