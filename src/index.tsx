import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import styles
import './semantic/dist/components/button.css';
import './semantic/dist/components/container.css';
import './semantic/dist/components/divider.css';
import './semantic/dist/components/flag.css';
import './semantic/dist/components/header.css';
import './semantic/dist/components/icon.css';
import './semantic/dist/components/image.css';
import './semantic/dist/components/input.css';
import './semantic/dist/components/label.css';
import './semantic/dist/components/list.css';
import './semantic/dist/components/loader.css';
import './semantic/dist/components/rail.css';
import './semantic/dist/components/reveal.css';
import './semantic/dist/components/segment.css';
import './semantic/dist/components/step.css';
import './semantic/dist/components/site.css';
import './semantic/dist/components/reset.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
