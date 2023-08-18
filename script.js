console.log("Welcome to Random Password Generator")
const PasswordBox = document.getElementById("Password")

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~|!}{[]></-="
const allChars = UpperCase+LowerCase+number+symbol;


document.getElementById("Gpass").addEventListener("click",function createPass(){
    const length = document.getElementById("my-length").value;
    if(length>50) alert("Password length can't be greater than 50")
    else{
    let Password = ""
    Password += UpperCase[Math.floor(Math.random()*UpperCase.length)];
    Password += LowerCase[Math.floor(Math.random()*LowerCase.length)];
    Password += number[Math.floor(Math.random()*number.length)];
    Password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>Password.length){
        Password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    PasswordBox.value = Password;
}
});

document.getElementById("Copy").addEventListener("click",function PassCopy(){
    PasswordBox.select();
    document.execCommand("copy");
});
