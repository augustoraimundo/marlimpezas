export default function animaScroll(){
    function scroller(){
        const scrooling = document.querySelectorAll('.animado')
        const top = window.innerHeight * 0.6
        scrooling.forEach((elementos) =>{
        const scrollar = elementos.getBoundingClientRect().top

        if(scrollar < top){
            elementos.classList.add('active')
            }else{
            elementos.classList.remove('active')
        }
    }) 
}
window.addEventListener('scroll', scroller)
}
