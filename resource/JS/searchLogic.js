
document.addEventListener("keydown", function(event){
if(event.key === "Enter"){
    event.preventDefault();
    const inputSearch = document.getElementById("inputSearch")
    inputSearch.value = "";
}
});



