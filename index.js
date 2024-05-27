let a = Math.floor(Math.random()*100)

alert(a)

if (a%3 === 0){
    alert("Bu son fizz");
} else if(a%5 === 0){
    alert("Bu son buzz")
}else if(a%3 == 0 && a%5 ==0){
    alert("FizzBuzz son")
}else{
    alert("Bu fizz buzz son emas")
}






