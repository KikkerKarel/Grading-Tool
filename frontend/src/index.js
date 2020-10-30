// import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.css'
    import {register} from "./serviceWorker";

    import Answer from './components/Answer/answerComponent'
    import './components/Answer/Answer.css';

    import AddAnswer from './components/AddAnswer/AddAnswerComponent'
    import './components/AddAnswer/AddAnswer.css';
    import AnswerComponent from "./components/AddAnswer/AddAnswerComponent";

    // ReactDOM.render(<Answer />, document.getElementById('root'))
    ReactDOM.render(<AnswerComponent />, document.getElementById('root'))
    register();