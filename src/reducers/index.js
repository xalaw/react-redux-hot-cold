import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
};

function decideFeedback(guess, state){
        guess = parseInt(guess, 10);
        const difference = Math.abs(guess - state.correctAnswer);
        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }
        return feedback;    
}

export const hotColdReducer = (state = initialState, action) => {
    if (action.type === actions.ADD_GUESS){
        let newFeedback = decideFeedback(action.guess, state);
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback: newFeedback
        }); 
    }
    if (action.type === actions.SET_NEW_GAME){
        let newAnswer = Math.round(Math.random() * 100);
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: newAnswer,
            showInfoModal: false

        });
    } 
    if (action.type === actions.TOGGLE_MODAL){
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        } )
    }
}

