/* #shop a.add-to-bag{
    display: block;
    color: #8f746c;
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
    padding: 10px 0;
    border: 2px solid #8f746c;
    width: 20%;
    margin: 20px auto;
}

#shop a.add-to-bag:hover{
    background-color: #8f746c;
    color:white;
    transition: 0.1s;
  */

var test = document.getElementById("test");

console.log(test);

test.setAttribute("style", "position:relative");

test.setAttribute("style", "left: 50px"); //overwrites//

test.setAttribute("style", "position: relative; left: 50px");

test.style.left = "20 px";

test.style.color = "blue";

test.style.backgroundColor = "black";