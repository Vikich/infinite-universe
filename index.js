let addPara = () => {
  document.body.append(document.createElement('p'));
}

let addText = (text) => {
  let newText = document.createElement('newText');
  newText.className = "newText";
  newText.innerText = text;
  form.appendChild(newText);
}

let addInput = (text) => {
  let input = document.createElement('input');
  input.className = "input";
  input.setAttribute('name', text);
  form.appendChild(input);
}

let addButton = (text) => {
  let button = document.createElement('button');
  button.className = "button";
  button.innerText = text;
 
  button.onclick = () => {
    const formData = new FormData(form);
    console.log([...formData.entries()]);
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

let form = document.createElement("form");
document.body.appendChild(form);

addText("User name");
addInput("Username");
form.appendChild(document.createElement('p'));
addText("Password ");
addInput("Passward");
addPara();
addButton("Log in");