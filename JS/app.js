'use strict';
document.addEventListener('DOMContentLoaded', function() {console.log("działa")
var elementWithDropdown = document.querySelector('.for-dropdown');    
console.log(elementWithDropdown);
var dropdown = document.querySelector('.dropdown');
console.log(dropdown)
elementWithDropdown.addEventListener('mouseover',function(){
console.log("myszka jest tu");
dropdown.style.display = "block";
});
elementWithDropdown.addEventListener('mouseout',function(){
console.log("myszki już tu nie ma");
dropdown.style.display = "none";
});
});