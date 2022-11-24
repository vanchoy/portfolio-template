import { createRoot } from 'react-dom/client';

import ReactGA from 'react-ga4';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import App from './containers/App';

import './styles/index.scss';

// if the browser supports SW (all modern browsers do it)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // we will register it after the page complete the load
    navigator.serviceWorker.register("/service-worker.js");
  });
}

ReactGA.initialize("G-X5992Z40J2");
ReactGA.send("pageview");

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();