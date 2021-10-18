let addBtn = document.querySelector('#addNoteBtn');
let inputData = document.querySelector('#inputArea');
let displayNotes = document.querySelector('.displayNotes')
let pendingTasks = document.querySelector('.pendingTasks');
let deleteAllBtn = document.querySelector('.deleteAll');
let printDate = document.querySelector('.printDate');
let listArr;
showNotes();

//Adding NOTE
addBtn.addEventListener('click', () => {

    let userInput = inputData.value;

    //If user press add note without any content it doestn't add empty content
    if(userInput == '') return alert('Please enter a Note :)');

    let getLocalStorage = localStorage.getItem('New todo');

    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }

    listArr.push(userInput);
    localStorage.setItem("New todo", JSON.stringify(listArr));
    inputData.value = '';
    showNotes();
})

//deleting all tasks
deleteAllBtn.addEventListener('click', () => {
    // let getLocalStorage = localStorage.getItem('New todo');
    // listArr = JSON.parse(getLocalStorage);
    // localStorage.clear()
    // listArr.splice(0, listArr.length);
    // localStorage.setItem('New todo', JSON.stringify(listArr));
    // showNotes()

    //SHORT method
    listArr = [];
    localStorage.setItem('New todo', JSON.stringify(listArr));
    showNotes()
})

//showing all the notes
function showNotes() {
    let getLocalStorage = localStorage.getItem('New todo');
    
    if (getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newTagLine = ``;
    listArr.forEach((element, index) => {
        newTagLine += `
        <div class="printsNotes">
        <p>${element}</p>
        <button id="delNoteBtn" onclick="deleteNote(${index})">Delete note</button>
        <hr/>
        <div/>`
    })
    

    displayNotes.innerHTML = newTagLine;

    pendingTasks.innerHTML = `<p>You are left with ${listArr.length} tasks</p>`
}

function deleteNote(index){
    let getLocalStorage = localStorage.getItem('New todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem('New todo', JSON.stringify(listArr));
    showNotes();
}