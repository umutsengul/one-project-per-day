const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');
const ul = document.getElementById('taskList')

myButton.onclick = function()
{
    if(myInput.value === '')
    {
        alert('Lutfen yapabileceginiz bir sey yazin')
    }
    else{
        const li = document.createElement('li')
        li.textContent = myInput.value;
        ul.appendChild(li);
        myInput.value = ''
    }
}
