// Rendering Lists in React

import React from 'react'
import Book from './Book'

function RenderingLists() {
    // Create an array of books
    const bookList = [
        "To kill a mockingbird",
        "The Great Gatsby",
        "The catcher in the rye"

    ]

    const books = [
        {
            title: "To kill a mockingbird",
            author: "Harper Lee",
            pages: 281
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            pages: 218
        },
        {
            title: "The catcher in the rye",
            author: "J. D. Salinger",
            pages: 234
        },
        
    ]
    return (
        // Return statement
        // How to render items from an array
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
        <hr />
        {
        // How to render render arrays of object with multiple properties
            books.map(book => {
                return (
                <div key={book.title}>
                    <h5>Title: {book.title}</h5>
                    <p>Author: {book.author}</p>
                    <p>Number of pages: {book.pages}</p>
                </div>
                )
            })
        }
        <hr />
        {
        // How to render React components by passing array objects as props
            books.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
        </div>
    )
}

export default RenderingLists

// Return statement: 
// "I'll create a new arrow function that takes a book as a parameter, and returns 
// an H2 element containing the book. Now I can save the file and see each book rendered in the UI. 
// So what is happening here, is the map method is iterating over each book in the booklist, and 
// returning each book wrapped up in an h2 element. This is functionally identical to the for loops 
// you’re familiar with from vanilla JavaScript."

// "map() is like a for loop but cooler. Don't be repetetive and use copy/paste, use map() instead."

// Key props:
// "... If  you open the console and refresh the app, you'll see a warning: Each child in a list should 
// have a unique "key" prop. What this is telling you is that for each  element that you render in a list, 
// in our case, for each book, it must have a prop called 'key' which identifies it uniquely, like a 
// primary key in a database. This unique identifier is used by  React to keep track of which elements need to 
// be rerendered whenever the component is updated."
// "... take special note that even though these first two calls to the map method do not render a React  component, 
// they can still take this special prop called key, and in fact, it's required  that you pass it whenever rendering lists 
// of items whether they are divs, headings,  paragraphs, components or anything else."
// "As far as which element the key goes on, always  put the key on the outermost element that will be repeated, for example 
// we put the key  on the div in the second example here, not on any of the elements inside it."