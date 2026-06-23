let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

let colors = [
    "#f2f2f2",
    "#dbeafe",
    "#fde68a",
    "#fecdd3",
    "#bbf7d0",
    "#ddd6fe"
];

let index = 0;

document.getElementById("textBtn").onclick = function(){

    if(input.value != "")
    {
        heading.innerHTML = input.value;
    }

};

document.getElementById("bgBtn").onclick = function(){

    index++;
    if(index >= colors.length)
    {
        index = 0;
    }
    document.body.style.backgroundColor = colors[index];
};

document.getElementById("fontBtn").onclick = function(){
    heading.style.fontSize = "45px";

};

let show = true;
document.getElementById("toggleBtn").onclick = function(){

    if(show == true)
    {
        para.style.display = "none";
        show = false;
    }
    else
    {
        para.style.display = "block";
        show = true;
    }

};


document.getElementById("resetBtn").onclick = function(){
    heading.innerHTML = "Welcome to JavaScript Lab";
    heading.style.fontSize = "35px";
    document.body.style.backgroundColor = "#f2f2f2";
    para.style.display = "block";
    input.value = "";
    show = true;
    index = 0;

};