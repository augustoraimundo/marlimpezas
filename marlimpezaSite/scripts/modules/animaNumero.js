function animar(elemento){
    const totas = +elemento.innerText;
    const aumentar = Math.floor(totas/40);

    let comeco = 0;

    const tempo = setInterval(() =>{
        comeco = comeco + aumentar;

        elemento.innerText = comeco;

        if(comeco > totas){
            elemento.innerText = totas;
            clearInterval(tempo);
        }
    }, 65 * Math.random());
}

export default function numbers(){
    const secao = document.querySelector('.numero');
    const numeros = document.querySelectorAll('.number');

    if(!secao || numeros.length === 0) return;

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                numeros.forEach(animar);
                observer.unobserve(secao);
            }
        })
    }, { threshold: 0.4 });

    observer.observe(secao);
}

