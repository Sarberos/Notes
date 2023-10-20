const inputElement = document.getElementById('title')
const btnAdd= document.getElementById('btn_add')
const listElement = document.getElementById('notes_list')


let notes =['Hello','Brayn']

function arrayNotes (arr){
    for(let i =0 ; i < arr.length; i++ ){
        listElement.insertAdjacentHTML
        ("beforeend",notes_Template(arr[i]))}
}

arrayNotes(notes)

btnAdd.onclick = function (){
    if(inputElement.value.length == 0){
        retutrn
    }
    listElement.insertAdjacentHTML
    ("beforeend",notes_Template(inputElement.value))
    inputElement.value=''
}

function notes_Template (input){
    return  `<li class="list_item">
     <span class="list_item_text"> ${input} </span>
    <span class="two_button">
        <span class="success">
            <button class="success_Btn"></button></span>
        <span class="cross">
            <button class="cross_Btn"></button></span>
    </span></li>`}
