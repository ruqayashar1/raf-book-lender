// look for DOM Element
// Get the book to borrow
// post request
const input = document.getElementById("input_box");
let tableadata=document.getElementById("table-group-divider")

function handleBorrow(){
    let action = input.value;
    console.log(action);
    // gives an alert message "please enter book name" if the name was not entered into the textbox
    let d= new Date(Date.now());
    if(action === ""){
        alert ("please Enter the book name");
        return
    }
let data={

 "date": 334556,
"book_name": "string",
"author": "string",
"action": "borrow",
"student": "string"
}
data=JSON.stringify(data)
let url = "http://localhost:3000/book_data";
fetch(url,{method:"POST", 
body:data,
headers:{
    "Content-Type":"application/json",
},
})

.then ((response)=>response.json())
.then ((data)=>{
    // alerts the student that the book hsa been successfully borrowed
    console.log(data);
input.value="";
alert ('borrowed');
});
}


// update the data in the table
function populateData(){
    let url= "http://localhost:3000/book_data";

    fetch(url,{method:"GET", 
headers:{
    "Content-Type":"application/json",
}
})
.then ((response)=>response.json())
.then ((data)=>{
    console.log("data");
});
}

handleBorrow()