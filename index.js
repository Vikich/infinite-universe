let addPara = () => {
  document.body.append(document.createElement('p'));
}

let addText = (text) =>{
  let newText = document.createElement('newText');
  newText.className = "newText";
  newText.innerText = text;
  document.body.append(newText);
}

let addInput = () => {
  let input = document.createElement('input');
  input.className = "input";
  input.innerText = ""
  document.body.append(input);
}

let addButton = (text) => {
  let button = document.createElement('button');
  button.className = "button";
  button.innerText = text;
  
  button.onclick = () => {
    console.log("username: " + document.querySelectorAll("input")[0].value + 
                " passward: " + document.querySelectorAll("input")[1].value);
  }
  document.body.append(button);
}

  
let addHeader = (text) => {
  let header = document.createElement('header');
  header.className = "header";
  header.innerText = text;
  document.body.append(header);
}

let addHeader2 = (text) => {
  let header2 = document.createElement('header2');
  header2.className = "header2";
  header2.innerText = text;
  document.body.append(header2);
}


addHeader("Welcome to the website!");
addPara();
addHeader2("Would you like to log in?");
addPara();
addText("User name");
addInput();
addPara();
addText("Password ");
addInput();
addPara();
addButton("Log in")
