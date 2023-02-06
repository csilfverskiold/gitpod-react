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
                return <h2>{book}</h2>
            })}
        <hr />
        {
        // How to render render arrays of object with multiple properties
            books.map(book => {
                return (
                <div>
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
                return <Book book={book} />
            })
        }
        </div>
    )
}

export default RenderingLists

// Return statement: " I'll create a new arrow function that takes a book as a parameter, and returns 
// an H2 element containing the book. Now I can save the file and see each book rendered in the UI. 
// So what is happening here, is the map method is iterating over each book in the booklist, and 
// returning each book wrapped up in an h2 element. This is functionally identical to the for loops 
// you’re familiar with from vanilla JavaScript."

// "map() is like a for loop but cooler. Don't be repetetive and use copy/paste, use map() instead."