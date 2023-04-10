
document.addEventListener('DOMContentLoaded',loadCards)

// look for DOM Element
// Get the book to borrow

const bookInput = document.getElementById("input_box");
const tableBody=document.getElementById("table_Body")
const addBookButton = document.getElementById("addButton")
const baseUrl = 'https://openlibrary.org/search.json';
const searchForm=document.getElementById("searchForm")
const studentNameBox=document.getElementById('studentName')

// Add event listener to the form
searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let bookName = bookInput.value
    const apiUrl =  `${baseUrl}?q=${encodeURIComponent(bookName)}`
    console.log(apiUrl)
    let studentName = studentNameBox.value
    console.log(studentName)

    // condition to enter both student name and book else alert with a message
    if(bookName && studentName){
        searchBook(apiUrl,studentName)
    } else {
        alert ("please Enter the book name and student name");
    } 
    }
    
)
// makes the function asynchronous i.e it will wait for other functions to load first
async function searchBook(apiUrl,studentName){
    fetch(apiUrl)
    .then ((response)=>response.json())
    .then ((data)=>{
        const book = data.docs[0];
        console.log(book)
        const bookTitle = book.title;
        console.log(bookTitle)
        const author = book.author_name[0];
        console.log(author)
        
        // creates table data to be displayed after submission
        let tableRow = document.createElement('tr')
        let cellOne = document.createElement('td')
        let cellTwo = document.createElement('td')
        let cellThree = document.createElement('td')
        let cellFour = document.createElement('td')

        // assign each cell in the table to a data 
        let date= new Date()
        let shortDate = date.toDateString()
        cellOne.textContent= shortDate
        tableRow.appendChild(cellOne)
        cellTwo.textContent=bookTitle
        tableRow.appendChild(cellTwo)
        cellThree.textContent=author
        tableRow.appendChild(cellThree)
        cellFour.textContent=studentName
        tableRow.appendChild(cellFour)
        tableBody.appendChild(tableRow)
    })
}
