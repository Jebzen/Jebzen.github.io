window.addEventListener("click", (e) =>{
    document.getElementById("40_input").value = e.target.tagName;
});

document.getElementById("41_input_1").value = "ID: " + document.getElementById("41_input_1").id;
document.getElementById("41_input_2").value = "ID: " + document.getElementById("41_input_2").id;
document.getElementById("41_input_3").value = "Name: " + document.getElementById("41_input_3").name;

document.getElementById("41_form").addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(document.getElementById("41_input_1").value);
    console.log(document.getElementById("41_input_2").value);
    console.log(document.getElementById("41_input_3").value);
});