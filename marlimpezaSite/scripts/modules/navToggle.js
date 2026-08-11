export default function navToggle(){
    const toggle = document.getElementById('menuToggle');
    const wrapper = document.getElementById('navWrapper');
    const backdrop = document.getElementById('navBackdrop');

    if(!toggle || !wrapper) return;

    function fechar(){
        wrapper.classList.remove('open');
        backdrop && backdrop.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function alternar(){
        const aberto = wrapper.classList.toggle('open');
        backdrop && backdrop.classList.toggle('open', aberto);
        toggle.setAttribute('aria-expanded', String(aberto));
    }

    toggle.addEventListener('click', alternar);
    backdrop && backdrop.addEventListener('click', fechar);
    wrapper.querySelectorAll('a').forEach((link) =>{
        link.addEventListener('click', fechar);
    });
}
