import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";



function highlightGraded (a:any) {
    let buttonInactive= "rating-buttons";
    let buttonActive = "rating-buttons-system-correct"
    if (parseInt(a.toString()) === 0) {
        return <ButtonGroup>
            <Button className={buttonActive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 1) {
        return <ButtonGroup>
            <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonActive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 2) {
        return <ButtonGroup>
            <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonActive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    }  else if (parseInt(a.toString()) === 3) {
        return <ButtonGroup>
            <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonActive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    } else if (parseInt(a.toString()) === 4) {
        return <ButtonGroup>
            <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonActive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    } else {
        return <ButtonGroup>
            <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
            <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
            <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
            <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
            <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
            <Button className={buttonActive} id="correctorRating" value={5} disabled>5</Button>
        </ButtonGroup>
    }
}

export default highlightGraded;