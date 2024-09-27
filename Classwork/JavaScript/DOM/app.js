//getElementsById()
var a = document.getElementById('heading');
a.style.color = 'red';
a.style.backgroundColor = 'aqua';
a.style.border = 2px solid black;
a.style.padding = '10px';


//getElementsByClassName()
var b = document.getElementsByClassName('list');
console.log(b);
for(let lists of b){
    lists.style.fontweight = "bold";
    lists.style.color = 'purple';
    
}

//getElementsByName()

var c = document.getElementsByName('ul');