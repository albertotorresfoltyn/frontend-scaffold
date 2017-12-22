import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss"



export default class App extends React.Component {

    constructor() {
      super();
    }
    render() {
      return (
        <div>
          <h2>Test</h2>
            <div>

            </div>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
