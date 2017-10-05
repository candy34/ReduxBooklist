import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row">
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-3">Books N' Roses: Appetite for Instruction</h1>
                <p class="lead"></p>
              </div>
            </div>

                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
