const div1=document.querySelector('.abc')

let color=document.querySelector('#color')
//console.log(div1);
color.addEventListener('keyup',(e)=>
    {
    console.log(color.value)
    div1.style.backgroundColor=color.value
})

addEventListener('mousemove',(e)=>{
   // console.log(`${e.screenX},${e.screenY}`)
    
})

