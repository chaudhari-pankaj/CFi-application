Notification.requestPermission().then(perm => {
})
// function sound(){
//     const audio = new Audio("https://www.youtube.com/watch?v=0Gc3nvmMQP0");
//     // audio.src = "https://www.youtube.com/watch?v=0Gc3nvmMQP0";
//     audio.play();
// }
function unnotify(){
    document.querySelector(".box").innerHTML = ``
}
function notify(){
    fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => {return response.json()})
.then(data =>{
    new Notification(data.setup,{
    body:data.punchline,
    icon: "download.jpeg",
})
// alert(data.setup+"\n"+data.punchline)
asetup=data.setup;
apunchline=data.punchline;

let scriptcont = [
    asetup,
    apunchline,
]
// scriptcont[0]=`${asetup}`;


function generatelist(arg){
  let items = `<li>${arg[0]}</li>` + `<li>${arg[1]}</li>`;
  return items;
}
document.querySelector(".box").innerHTML = `
<h1>Notification</h1>
<ul>
${generatelist(scriptcont)}
</ul>
`
// sound();
setTimeout(unnotify,5000);
})
.catch(error => console.log(error))
}
let asetup,apunchline;
if(Notification.permission==="granted"){
    setInterval(notify,10000);
    notify();
    // unnotify();
}
else{
alert("pls turn on your notification");
Notification.requestPermission().then(perm => {
    if(perm==="granted"){
        setInterval(notify,10000);
        // alert("perm")
}
});
}

