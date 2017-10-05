
//select book is an action creator, it will need an action type
import {BOOK_SELECTED} from '../constants'
export function selectBook(book) {

  return {
    //You should create a Type and Payload for your Action here
    type: BOOK_SELECTED,
    payload: book
  };
}
