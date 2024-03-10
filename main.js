function AddItem(){
    var numberlabel1 = document.getElementById("numberlabel1");
    var currentnumber1 =  parseInt(numberlabel1.innerText);
    var newnumber1 = currentnumber1 + 1
    numberlabel1.innerText = newnumber1
}

function SubtractItem(){
    var numberlabel1 = document.getElementById("numberlabel1");
    var currentnumber1 =  parseInt(numberlabel1.innerText);
    if(currentnumber1 > 0){
    var newnumber1 = currentnumber1 - 1
    numberlabel1.innerText = newnumber1
    }
}