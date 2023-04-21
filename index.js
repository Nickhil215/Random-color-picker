function getColor(){
    // hex code
    const ramdom=Math.floor(Math.random()*16777215);
    // console.log(ramdom);
    const ramdomcode="#" + ramdom.toString(16);
    document.body.style.backgroundColor=ramdomcode
    document.getElementById("color").innerText=ramdomcode;

    navigator.clipboard.writeText(ramdomcode);

    
}



document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();