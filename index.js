'use strict'
// Descarga de Pdf
document.getElementById("cv-download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.type = "application/pdf";
  link.href = "assets/CV-MolinaSebastian.pdf";
  link.download = "CV-Sebastian-Molina.pdf";
  fetch(link.href)
    .then((response) => {
      if (!response.ok) throw new Error("Archivo no encontrado");
      link.click();
    })
    .catch((error) => alert("Error: " + error.message));
});

// Bloque de seccion de experiencias
const li = document.querySelectorAll('.li');

const content = document.querySelectorAll('.experiences-subcontent .content');

li.forEach((_, index)=>{
  li[index].addEventListener('click', ()=>{

    li.forEach((_, i)=>{
      li[i].classList.remove('active')
      content[i].classList.remove('active')
    })

    li[index].classList.add('active')
    content[index].classList.add('active')
  })
})