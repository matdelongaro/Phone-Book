
document.querySelector('#searchInput').addEventListener("input", function(){
    let filter = this.value.toLowerCase();
    let names = document.querySelectorAll('#nameList li');
    names.forEach(function(name) {
        let text = name.textContent.toLowerCase();
        if(text.includes(filter)){
            name.style.display = "block";
        } else {
            name.style.display = "none";
            
        }
});

});