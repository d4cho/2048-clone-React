import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Game from './containers/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Game />
        </Layout>
      </div>
    );
  }
}

export default App;
