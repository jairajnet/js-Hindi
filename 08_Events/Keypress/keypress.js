const insert=document.getElementById('insert')
console.log(insert);

window.addEventListener('keydown',(e)=>{
    //alert(e.key)
insert.innerHTML=`
<div>
<table>
<tr>
<td>Key</td>
<td>KeyCode</td>
</tr>
<tr>
<td>${e.key}</td>
<td>${e.keyCode}</td>
</tr>
</table></div>`    
});