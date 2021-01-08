import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";

function systemScore(score: any) {
    let buttonInactive = "rating-buttons-system";
    let buttonActive = "rating-buttons-system-correct";
    let systemButtons = [];

    score = Math.round(score);

    for (let i = 0; i < 6; i++) {
        if (i === score) {
            systemButtons.push(<Button className={buttonActive} value={i} disabled>{i}</Button>);
        } else {
            systemButtons.push(<Button className={buttonInactive} value={i} disabled>{i}</Button>);
        }
    }
    return <ButtonGroup>{systemButtons}</ButtonGroup>;
}

export default systemScore;