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
    // import Test from './components/QuestionsTrack/QuestionsTrackComponent'
    import Answer from './Components/Answer/answerComponent'
    import {register} from "./serviceWorker";
    // import './components/QuestionsTrack/QuestionsTrack.css';
    import './Components/Answer/Answer.css';

    ReactDOM.render(<Answer />, document.getElementById('root'))
    register();