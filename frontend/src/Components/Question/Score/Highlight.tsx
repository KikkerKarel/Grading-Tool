import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";



    function highlight (a:any) {
    let buttonInactive= "rating-buttons-system";
    let buttonActive = "rating-buttons-system-correct"
    if (parseInt(a.toString()) === 0) {
        return <ButtonGroup>
            <Button className={buttonActive} value={0} disabled>0</Button>
            <Button className={buttonInactive} value={1} disabled>1</Button>
            <Button className={buttonInactive} value={2} disabled>2</Button>
            <Button className={buttonInactive} value={3} disabled>3</Button>
            <Button className={buttonInactive} value={4} disabled>4</Button>
            <Button className={buttonInactive} value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 1) {
        return <ButtonGroup>
            <Button className={buttonInactive} value={0} disabled>0</Button>
            <Button className={buttonActive} value={1} disabled>1</Button>
            <Button className={buttonInactive} value={2} disabled>2</Button>
            <Button className={buttonInactive} value={3} disabled>3</Button>
            <Button className={buttonInactive} value={4} disabled>4</Button>
            <Button className={buttonInactive} value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 2) {
        return <ButtonGroup>
            <Button className={buttonInactive} value={0} disabled>0</Button>
            <Button className={buttonInactive} value={1} disabled>1</Button>
            <Button className={buttonActive} value={2} disabled>2</Button>
            <Button className={buttonInactive} value={3} disabled>3</Button>
            <Button className={buttonInactive} value={4} disabled>4</Button>
            <Button className={buttonInactive} value={5} disabled>5</Button>
        </ButtonGroup>
    }  else if (parseInt(a.toString()) === 3) {
        return <ButtonGroup>
            <Button className={buttonInactive} value={0} disabled>0</Button>
            <Button className={buttonInactive} value={1} disabled>1</Button>
            <Button className={buttonInactive} value={2} disabled>2</Button>
            <Button className={buttonActive} value={3} disabled>3</Button>
            <Button className={buttonInactive} value={4} disabled>4</Button>
            <Button className={buttonInactive} value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 4) {
        return <ButtonGroup>
            <Button className={buttonInactive} value={0} disabled>0</Button>
            <Button className={buttonInactive} value={1} disabled>1</Button>
            <Button className={buttonInactive} value={2} disabled>2</Button>
            <Button className={buttonInactive} value={3} disabled>3</Button>
            <Button className={buttonActive} value={4} disabled>4</Button>
            <Button className={buttonInactive} value={5} disabled>5</Button>
        </ButtonGroup>
    } else {
        return <ButtonGroup>
            <Button className={buttonInactive} value={0} disabled>0</Button>
            <Button className={buttonInactive} value={1} disabled>1</Button>
            <Button className={buttonInactive} value={2} disabled>2</Button>
            <Button className={buttonInactive} value={3} disabled>3</Button>
            <Button className={buttonInactive} value={4} disabled>4</Button>
            <Button className={buttonActive} value={5} disabled>5</Button>
        </ButtonGroup>
    }
}

export default highlight;