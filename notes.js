const inputElement = document.getElementById('title')
const btnAdd= document.getElementById('btn_add')
const btnSuccess=document.getElementById('success_Btn')
const btnCross=document.getElementById('cross_Btn')
const listElement = document.getElementById('notes_list')


// Create click to success and cross bnt (start)
/*teory
const denis = {
    name: 'Denis',
    age : 18,
    wife: 'no',
    girlfriend: 'yes',
    getInfo: function () {
        console.log(denis.name +'\n'+ denis.age)        
    }
}
denis.getInfo()
*/

let notes =[
    {   name: 'Bryan',
        age: 19,
        completed: false,
    },
    {   name: 'Igor',
        age: 19,
        completed: true,
    },]

    function arrayNotes (arr){
        for(let i =0 ; i < arr.length; i++ ){
            listElement.insertAdjacentHTML("beforeend",notes_Template(arr[i]))}
       }

arrayNotes(notes)

       btnAdd.onclick = function (){
        if(inputElement.value.length == 0){
            return
        }
        const newPeople= {
            name: inputElement.value,
            age: 19,
            complted: false,
        }
        listElement.insertAdjacentHTML
        ("beforeend",notes_Template(newPeople))
        inputElement.value=''
    }
    
    function notes_Template (input){
        return  `<li class="list_item">
         <span class="list_item_text"> ${input.name } ${input.age }  </span>
        <span class="two_button">
            <span class="success">
                <button class="success_Btn" id="success_Btn"></button></span>
            <span class="cross">
                <button class="cross_Btn" id ="cross_Btn"></button></span>
        </span></li>`}