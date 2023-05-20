const theme = document.querySelector('#theme')
const col = document.querySelector('#themechange')

col.classList.add('dark');
theme.classList.add('black');

col.addEventListener('click',()=>{
    theme.classList.toggle('black');
    col.classList.toggle('dark');
    if(col.innerHTML===`Light`){
        col.innerHTML=`Dark`
            }
    else{
         col.innerHTML=`Light`
        }
})




