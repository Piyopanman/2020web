let myHeading = document.querySelector('h1');
let gazou = document.querySelector('img');
const myButton1 = document.getElementById('midasi');

myButton1.onclick = () => {
    //alert("ボタンがクリックされました")
    if(myHeading.textContent === "webテクノロジーB 最初のサンプル！"){
        myHeading.textContent = "g19911 Kakizaki Hinano";
    }else{
        myHeading.textContent = "webテクノロジーB 最初のサンプル！";
    }
}

