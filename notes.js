const inputElement = document.getElementById('title')
const btnAdd= document.getElementById('btn_add')
const btnSuccess=document.getElementById('success_Btn')
const btnCross=document.getElementById('cross_Btn')
const listElement = document.getElementById('notes_list')


 
const notes =[
    {   name: 'Bryan',
        completed: true
    },
    {   name: 'Igor',
        completed: false
    }]
// masiv end

//Create shablon for poocheredno adding masiv elements
function renderElement(arr){
    listElement.innerHTML=''
    for(let i =0 ; i < arr.length; i++ ){
        listElement.insertAdjacentHTML("beforeend",notes_Template(arr[i], i))
    }
    }
//end
 
renderElement(notes)

//Adding elements from the input bar
 btnAdd.onclick = function (){
        if(inputElement.value.length == 0){
        return
    }
    const newPeople= {
        name: inputElement.value,
        completed: false ,
    }
    notes.push(newPeople)
    renderElement(notes)
    inputElement.value='' /* clean input bar after btn click */
}
    
function notes_Template (input,i){      
        return `
        <li class="list_item">
         <span class="${input.completed ? 'text-decoration-line-through' : ' '}" id="list_item_text"> ${input.name } </span>
        <span id="two_button">
            <span id="success">
                <button class="${input.completed ? 'warning_btn' : 'success_Btn'}" id="success_Btn" data-index="${i}"></button></span>
            <span id="cross">
                <button class="cross_Btn" id ="cross_Btn" data-index="${i}"></button></span>
        </span></li>`}

// btnSuccess.onclick= function Success() {
//     return `
//         <li class="list_item">
//          <span class="${input.completed ? 'text-decoration-line-through' : ' '}" id="list_item_text"> ${input.name } </span>
//         <span id="two_button">
//             <span id="success">
//                 <button class="${notes.completed ? 'warning_btn' : 'success_Btn'}" id="success_Btn"></button></span>
//             <span id="cross">
//                 <button class="cross_Btn" id ="cross_Btn"></button></span>
//         </span></li>`
    
// }