let gazou = document.querySelector('img');

gazou.onclick = () => {
    console.log("hoge");
    let mySrc = gazou.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        gazou.setAttribute('src', 'images/firefox2.png');
    }else{
        gazou.setAttribute('src', 'images/firefox-icon.png');
    }
}


let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;

}

myButton.onclick = function() {
  setUserName();
}
