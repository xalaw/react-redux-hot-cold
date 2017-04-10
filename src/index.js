import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';
import './reset.css';
import './index.css';

import {addGuess, setNewGame, toggleModal} from './actions';
import store from './store';

store.dispatch(addGuess(35));
store.dispatch(addGuess(70));
store.dispatch(toggleModal());
console.log(store.getState());
store.dispatch(setNewGame());
console.log(store.getState());


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
