import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Test extends Component
 {
     state = {
         isLoading: true,
         Exam: [],
     };

     async componentDidMount() {
         const response = await fetch('http://localhost:8080/api/exams/find/1');
         const body = await response.json();

         this.setState({ Exam: body, isLoading: false });
     }

     render() {
         const {Exam, isLoading} = this.state;

         if (isLoading) {
             return <p>Loading...</p>;
         }

         function setClassname(gradedtype, type){
             if(type === "Closed")
             {
                 let prefix = 'ClosedQuestionText'
                 switch (gradedtype) {
                     case null:         return prefix
                     case true:         return prefix + ' Correct'
                     case false:        return prefix + ' False'
                 }
             }
             else if(type === "Open")
             {
                 let prefix = 'OpenQuestionText'
                 switch (gradedtype) {
                     case null:         return prefix
                     case true:         return prefix + ' Correct'
                     case false:        return prefix + ' False'
                 }
             }
         }

         return (
             <div className="Siterange">
                 <div className="Header">
                 </div>
                 <div className="QuestionsDIV">
                     <div className="QuestionsNumber">
                         {/*<h1 className="MockText">Vraag 3/5</h1>*/}
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
                                         {/*<i className="fa fa-arrow-right" aria-hidden="true"></i>*/}
                                         <ol>
                                             {(() => {
                                                 {{
                                                     return Exam.items.map(examitem =>
                                                     {
                                                         if (examitem.question.type == 1)
                                                         {
                                                             return <li key={examitem.questionId} className={setClassname(examitem.gradedCorrect, "Closed")}> {examitem.question.text} </li>
                                                         }
                                                     })
                                                 }}
                                             })()}
                                         </ol>
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
                                         <ol>
                                             {(() => {
                                                 {{
                                                     return Exam.items.map(examitem =>
                                                     {
                                                         if (examitem.question.type == 2)
                                                         {
                                                             return <li key={examitem.questionId} className={setClassname(examitem.gradedCorrect, "Closed")}> {examitem.question.text} </li>
                                                         }
                                                     })
                                                 }}
                                             })()}
                                         </ol>
                                     </td>
                                 </tr>
                                 </tbody>
                             </table>
                         </div>
                 </div>
                 <div className="LoadingBar">
                     <ProgressBar className="ProgressBar" animated now={Exam.progress} label={`${Exam.progress}%`} />
                 </div>
             </div>
         </div>) ;
     }
 }

export default Test;