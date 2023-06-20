const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Add your task to todo list");
    }else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        let span= document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span)
    }
    inputBox.value=''
    saveData();
}

listContainer.addEventListener("click",function(x){
    if(x.target.tagName==="LI"){
        x.target.classList.toggle("checked");
        saveData();
    }else if(x.target.tagName==="SPAN"){
        x.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();