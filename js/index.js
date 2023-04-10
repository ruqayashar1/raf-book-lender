// look for DOM Element
// Get the book to borrow
// post request
const bookInput = document.getElementById("input_box");
const tableBody=document.getElementById("table_Body")
const addBookButton = document.getElementById("addButton")
const baseUrl = 'https://openlibrary.org/search.json';
const searchForm=document.getElementById("searchForm")
const studentNameBox=document.getElementById('studentName')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let bookName = bookInput.value
    const apiUrl =  `${baseUrl}?q=${encodeURIComponent(bookName)}`
    console.log(apiUrl)
    let studentName = studentNameBox.value
    console.log(studentName)
    if(bookName && studentName){
        searchBook(apiUrl,studentName)
    } else {
        alert ("please Enter the book name and student name");
    } 
    }
    
)

//
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
        
        let tableRow = document.createElement('tr')
        let cellOne = document.createElement('td')
        let cellTwo = document.createElement('td')
        let cellThree = document.createElement('td')
        let cellFour = document.createElement('td')

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
