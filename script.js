var inputTodo = document.querySelector('.inputField');
inputTodo.addEventListener('change',addTodo);
var idNum = 0;
var todoRemain = 0;
var todoCompleted = 0;
function addTodo(){
  var remainingTodo = document.querySelector('.todoRemaining');
  remainingTodo.textContent = ++todoRemain;
  
  var completedTodo = document.querySelector('.todoCompleted');
  
  idNum++;
  var btmText = document.querySelector('.btmText');
  var insertNew = document.querySelector('#section2');
  var todoDiv = document.querySelector('#myTodos');
  var newDiv = document.createElement('div');
  
  newDiv.className = 'border';

  newDiv.onmouseover = ()=>{
    newDiv.style.color = 'hsl(240, 50%, 45%)';
    newDiv.style.fontWeight = 'bold';
  }
  
  newDiv.onmouseout = ()=>{
    newDiv.style.color = 'hsl(234, 11%, 52%)';
    newDiv.style.fontWeight = 'normal';
  }
  
  var newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.id = 'newCheck' + idNum;
  newInput.name = 'newCheck';
  newDiv.append(newInput);
  
 var newLabel = document.createElement('label');
  newLabel.textContent = inputTodo.value;
  newLabel.htmlFor = 'newCheck' + idNum;
  newLabel.addEventListener('click',()=>{
  var checkStrike = newLabel.classList.toggle('strike');
  
    if(checkStrike == true){
     completedTodo.textContent = ++todoCompleted;
     }
     else if(checkStrike == false){
      completedTodo.textContent = --todoCompleted;
     }
  })
  newDiv.append(newLabel);
  var cancelDiv = document.createElement('div');
  cancelDiv.style.width = '12px';
  cancelDiv.style.height = '12px';
  cancelDiv.style.background = 'url("icon-cross.svg")';
  cancelDiv.style.backgroundSize = 'contain';
  cancelDiv.style.backgroundPosition = 'center';
  cancelDiv.style.backgroundRepeat = 'no-repeat';
  cancelDiv.style.position = 'absolute';
  cancelDiv.style.left = '280px';
  cancelDiv.style.marginTop = '-12px';
  newDiv.append(cancelDiv);
  
  todoDiv.append(newDiv);
  insertNew.insertBefore(todoDiv,btmText);
  var cancelClicked = false;
  cancelDiv.addEventListener('click',()=>{
    newDiv.style.display = 'none';
    remainingTodo.textContent = --todoRemain;
    cancelClicked = true;
  });
}

var todoDiv = document.querySelector('#myTodos');
new Sortable(todoDiv,{
    animation: 300
  })

//light theme toggling
var sun = document.querySelector('.menuBtn');
sun.addEventListener('click',()=>{
var body = document.body;
body.classList.toggle('light');
var section1 = document.querySelector('#section1');
section1.classList.toggle('light');
var input = document.querySelector('#input');
input.classList.toggle('light');
var inputCircle = document.querySelector('.circle');
inputCircle.classList.toggle('light');
day = sun.classList.toggle('light');
var section2 = document.querySelector('#section2');
section2.classList.toggle('light');
var section3 = document.querySelector('#section3');
section3.classList.toggle('light');
var btmText = document.querySelector('.btmText');
btmText.classList.toggle('light');
var section3Text = document.querySelector('.text');
section3Text.classList.toggle('light');
var footer = document.querySelector('.p');
footer.classList.toggle('light');
})