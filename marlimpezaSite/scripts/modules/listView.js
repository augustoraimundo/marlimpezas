export default function list(){
    const lista = document.querySelectorAll('.motivos h1')
    lista[0].nextElementSibling.classList.add('active')

    function viewList(){     
        this.nextElementSibling.classList.toggle('active')
    }

    
   lista.forEach((element) =>{
    element.addEventListener('click', viewList)
   })
}