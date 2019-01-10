import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'


class TopicBrowser extends Component {
constructor(){
    super();
    this.state = {};
}
render(){
    return(
        <div>
            
            <p>Hello World</p>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
    )
}

}
export default TopicBrowser;



// ### Instructions

// * Open `src/components/TopicBrowser/TopicBrowser.js`.
// * Import `React` and `Component` from `react`.
// * Create a basic react component called `TopicBrowser`:
//   * This component should `render` one `<p>` element that says "Hello World."
// * Export `TopicBrowser` by default.
// * Open `src/App.js`.
// * Import the `TopicBrowser` component after the `import` of react.
// * Render the `TopicBrowser` component in the `render` method of `App`.