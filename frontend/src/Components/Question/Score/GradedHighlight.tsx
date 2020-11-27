import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";

function gradedHighlight (a:any)
{
    let buttonInactive= "rating-buttons";
    let buttonActive = "rating-buttons-system-correct"

    if (parseInt(a.toString()) !== 0) {
        if (a === 1)
        {
            return <ButtonGroup>
                <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
                <Button className={buttonActive} id="correctorRating" value={1} disabled>1</Button>
                <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
                <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
                <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
                <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
            </ButtonGroup>
        }
        else if (a === 2)
        {
            return <ButtonGroup>
                <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
                <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
                <Button className={buttonActive} id="correctorRating" value={2} disabled>2</Button>
                <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
                <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
                <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
            </ButtonGroup>
        }
        else if (a === 3)
        {
            return <ButtonGroup>
                <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
                <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
                <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
                <Button className={buttonActive} id="correctorRating" value={3} disabled>3</Button>
                <Button className={buttonInactive} id="correctorRating" value={4} disabled>4</Button>
                <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
            </ButtonGroup>
        }
        else if (a === 4)
        {
            return <ButtonGroup>
                <Button className={buttonInactive} id="correctorRating" value={0} disabled>0</Button>
                <Button className={buttonInactive} id="correctorRating" value={1} disabled>1</Button>
                <Button className={buttonInactive} id="correctorRating" value={2} disabled>2</Button>
                <Button className={buttonInactive} id="correctorRating" value={3} disabled>3</Button>
                <Button className={buttonActive} id="correctorRating" value={4} disabled>4</Button>
                <Button className={buttonInactive} id="correctorRating" value={5} disabled>5</Button>
            </ButtonGroup>
        }
        else if (a === 5)
        {
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
    // return <ButtonGroup toggle>
    //     <Button className="rating-buttons" id="correctorRating" value={0}>0</Button>
    //     <Button className="rating-buttons" id="correctorRating" value={1}>1</Button>
    //     <Button className="rating-buttons" id="correctorRating" value={2}>2</Button>
    //     <Button className="rating-buttons" id="correctorRating" value={3}>3</Button>
    //     <Button className="rating-buttons" id="correctorRating" value={4}>4</Button>
    //     <Button className="rating-buttons" id="correctorRating" value={5}>5</Button>
    // </ButtonGroup>
}

export default gradedHighlight;