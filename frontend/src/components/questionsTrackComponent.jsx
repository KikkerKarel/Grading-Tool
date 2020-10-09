    import React, { Component } from 'react';
    import ProgressBar from 'react-bootstrap/ProgressBar'

    const now = 60;

 class Test extends Component

 {
     render() {
         return (
             <div className="Siterange">
                 <div className="Header">
                 </div>
                 <div className="QuestionsDIV">
                     <div className="QuestionsNumber">
                         <h1 className="MockText">Vraag 3/5</h1>
                     </div>
                     <div className="Questionsstatus">
                         <div className="ClosedQuestions">
                             <h1 className="Closed">Meerkeuze vragen:</h1>
                             <table className="ClosedQuestionsStatus">
                                 <thead>
                                 <tr>
                                     <th className="thClosedQuestion"></th>
                                 </tr>
                                 </thead>
                                 <tbody className="Closedtablebody">
                                 <tr className="Closedtabletr">
                                     <td className="ClosedQuestiontd">
                                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                         <li className="ClosedQuestionText Correct" name="ClosedQuestionNumber">1. Wat is de hoofdstad van Duitsland?</li>
                                         <li className="ClosedQuestionText False" name="ClosedQuestionNumber">2. Wat is het hardste materiaal van het menselijk lichaam?</li>
                                         <li className="ClosedQuestionText Correct" name="ClosedQuestionNumber">3. Wie is de schrijver van de Harry Potter boeken?</li>
                                         <li className="ClosedQuestionText Correct" name="ClosedQuestionNumber">4. Hoeveel is 94 + 4?</li>
                                         <li className="ClosedQuestionText Correct" name="ClosedQuestionNumber">5. In welk orgaan wordt gal gemaakt</li>
                                         <li className="ClosedQuestionText False" name="ClosedQuestionNumber">6. Hoe heet de voorzitter van de Provinciale Staten?</li>
                                         <li className="ClosedQuestionText False" name="ClosedQuestionNumber">7. Welke functie van het bloed wordt verstoord door Malaria?</li>
                                         <li className="ClosedQuestionText Correct" name="ClosedQuestionNumber">8. Wat is een bekende uitspraak van Rene Descartes (filosoof)?</li>
                                         <li className="ClosedQuestionText False" name="ClosedQuestionNumber">9. Empirisme is een filosofische stroming, welke uitspraak past het beste bij Empirisme?</li>
                                     </td>
                                 </tr>
                                 </tbody>
                             </table>
                         </div>
                         <div className="OpenQuestions">
                             <h1 className="Open">Open vragen:</h1>
                             <table className="OpenQuestionsStatus">
                                 <thead>
                                 <tr>
                                     <th className="thOpenQuestion"></th>
                                 </tr>
                                 </thead>
                                 <tbody className="Opentablebody">
                                 <tr className="Opentabletr">
                                     <td className="OpenQuestiontd">
                                         <li className="OpenQuestionText Correct" name="ClosedQuestionNumber">1. Wat is de hoofdstad van Duitsland?</li>
                                         <li className="OpenQuestionText False" name="ClosedQuestionNumber">2. Wat is het hardste materiaal van het menselijk lichaam?</li>
                                         <li className="OpenQuestionText Correct" name="ClosedQuestionNumber">3. Wie is de schrijver van de Harry Potter boeken?</li>
                                         <li className="OpenQuestionText Correct" name="ClosedQuestionNumber">4. Hoeveel is 94 + 4?</li>
                                         <li className="OpenQuestionText Correct" name="ClosedQuestionNumber">5. In welk orgaan wordt gal gemaakt</li>
                                         <li className="OpenQuestionText False" name="ClosedQuestionNumber">6. Hoe heet de voorzitter van de Provinciale Staten?</li>
                                         <li className="OpenQuestionText False" name="ClosedQuestionNumber">7. Welke functie van het bloed wordt verstoord door Malaria?</li>
                                         <li className="OpenQuestionText Correct" name="ClosedQuestionNumber">8. Wat is een bekende uitspraak van Rene Descartes (filosoof)?</li>
                                         <li className="OpenQuestionText False" name="ClosedQuestionNumber">9. Empirisme is een filosofische stroming, welke uitspraak past het beste bij Empirisme?</li>
                                     </td>
                                 </tr>
                                 </tbody>
                             </table>
                         </div>
                 </div>
                 <div className="LoadingBar">
                     <ProgressBar className="ProgressBar" animated now={60} label={`${ now }%`} />
                 </div>
             </div>
         </div>) ;
     }
 }
 export default Test;