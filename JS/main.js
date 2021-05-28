
let clickable = document.getElementById('resume')
if(clickable){
    clickable.addEventListener('click', ()=>{
        console.log('called');
       let tempElement = document.createElement('a');
       tempElement.setAttribute('href', 'JS/Francois_Greeff_CV.docx');
       tempElement.setAttribute('download','Francois Greeff CV.docx');
       document.body.appendChild(tempElement);
       tempElement.click();
       document.body.removeChild(tempElement);
    })
}
else{
    alert('error');
    location.reload()
}

