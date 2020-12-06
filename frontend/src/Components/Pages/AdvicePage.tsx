import * as React from "react";
import {Component} from "react";
import axios from "axios";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import {Card} from "react-bootstrap";

interface props{

}

class AdvicePage extends Component<props, {}> {
    state = {
        words: [],
        advice: {
            matchingWordPositions: [],
            suggestedScore: -1,
            examItem: {
                textAnswer: "",
                question: {
                    text: "",
                    textAnswer: {value: ""}
                }
            }
        }
    };

    async componentDidMount() {
        let exam = (new URLSearchParams(window.location.search)).get("exam");
        let question = (new URLSearchParams(window.location.search)).get("question")
        axios.get("/advice/" + exam + "/" + question).then(data => this.setState({advice : data.data}))
            .catch(err => console.log(err));

    }

    render() {

        const {advice} = this.state;

        if(advice.suggestedScore === -1)
            return (<div>Invalid parameters</div>);

        let words = this.state.advice.examItem.textAnswer.split(" ");
        let positions = this.state.advice.matchingWordPositions;

        for(let i = 0; i < words.length; i++)
        {
            // @ts-ignore
            if(positions.includes(i)){
                words[i] = "<mark>" + words[i] + "</mark>";
            }
        }

        return(
        <div className="page-container">
            <div className="content-wrap ">
                <HeaderNavbar/>
            </div>
            <div className="content-wrap d-flex justify-content-center">
            <section className="content-container">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>

                            <h3 className="text">{this.state.advice.examItem.question.text}</h3>

                            <h4 className="text">Correct antwoord:</h4>
                            <p>{advice.examItem.question.textAnswer.value}</p>

                            <h4 className="text">Gegeven antwoord:</h4>
                            <div dangerouslySetInnerHTML={{__html: words.join(" ")}}/>
                        </Card.Text>
                        <Card.Title>Score: {advice.suggestedScore} out of 5</Card.Title>
                    </Card.Body>
                </Card>
            </section>

            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        )
    }
}

export default AdvicePage