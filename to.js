// alert("hii joijned ")
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let k="";
function addTask(){
    // alert("First add Your Task")
    if(inputBox.value ===''){
        alert("First add Your Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let sp =document.createElement("span");
        sp.innerHTML= "\u00d7";
        li.appendChild(sp);
    }

    inputBox.value="";
    save();
}
inputBox.addEventListener("keyup", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        // Call the function to add a task when Enter is pressed
        addTask();
    }
});
// Add event listener for the Enter key
document.getElementById("addButton").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    },false);
   function save(){
    localStorage.setItem("data",listContainer.innerHTML);
   }
    