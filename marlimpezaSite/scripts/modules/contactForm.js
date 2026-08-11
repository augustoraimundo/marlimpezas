const EMAIL_DESTINO = 'augustoraimundobaptistagugas@gmail.com';

export default function contactForm(){
    const form = document.getElementById('formContato');
    if(!form) return;

    form.addEventListener('submit', (evento) =>{
        evento.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const telefone = form.telefone.value.trim();
        const assunto = form.assunto.value;
        const mensagem = form.mensagem.value.trim();

        const corpo = [
            `Nome: ${nome}`,
            `Email: ${email}`,
            telefone ? `Telefone: ${telefone}` : null,
            '',
            mensagem
        ].filter(Boolean).join('\n');

        const link = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        window.location.href = link;
    });
}
