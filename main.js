let myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');
myButton.onclick = () => {
    //alert("ボタンがクリックされました")
    if(myHeading.textContent === "webテクノロジーB 最初のサンプル！"){
        myHeading.textContent = "hogehoge";
    }else{
        myHeading.textContent = "webテクノロジーB 最初のサンプル！";
    }
}
