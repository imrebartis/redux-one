import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //any key added to the combined reducer (here: this index.js)
  //ends up as a key in the global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;