// look for DOM Element
// Get the book to borrow
// post request
const bookInput = document.getElementById("input_box");
const tableData=document.getElementById("table_data")
const addBookButton = document.getElementById("addButton")
const baseUrl = 'https://openlibrary.org/search.json';
const searchForm=document.getElementById("searchForm")


searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Button clicked, but the default action was prevented");
    let bookName = bookInput.value
    const apiUrl =  `${baseUrl}?q=${encodeURIComponent(bookName)}`
    console.log(apiUrl)
    if(bookName){
        searchBook(apiUrl)
    } else {
        alert ("please Enter the book name");
    } 
    }
)

//
async function searchBook(apiUrl){
    fetch(apiUrl)
    .then ((response)=>response.json())
    .then ((data)=>{
        const book = data.docs[0];
        console.log(book)
        const bookTitle = book.title;
        console.log(bookTitle)
        const author = book.author_name[0];
        console.log(author)
    })
}
