export default function simulador(){
    const form = document.getElementById('formSimulador');
    if(!form) return;

    const chips = document.querySelectorAll('.servicos-chips .chip');
    const resultado = document.getElementById('resultadoSimulacao');
    const abaSimulacao = document.querySelector('.tab-btn[data-tab="simulacao"]');
    const abaOrcamento = document.querySelector('.tab-btn[data-tab="orcamento"]');
    const contato = document.getElementById('contact');

    let servicoAtivo = document.querySelector('.servicos-chips .chip.active');

    const formatoMoeda = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA',
        maximumFractionDigits: 0
    });

    chips.forEach((chip) =>{
        chip.addEventListener('click', () =>{
            chips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            servicoAtivo = chip;
        });
    });

    abaOrcamento.addEventListener('click', () =>{
        abaOrcamento.classList.add('active');
        abaSimulacao.classList.remove('active');
        if(contato) contato.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    abaSimulacao.addEventListener('click', () =>{
        abaSimulacao.classList.add('active');
        abaOrcamento.classList.remove('active');
    });

    form.addEventListener('submit', (evento) =>{
        evento.preventDefault();

        const dimensao = +form.dimensao.value;
        const tipoEspaco = form.tipoEspaco;
        const intensidade = form.intensidade;
        const sujidade = form.sujidade;

        if(!servicoAtivo || dimensao <= 0 || !tipoEspaco.value || !intensidade.value || !sujidade.value){
            return;
        }

        const precoBase = +servicoAtivo.dataset.preco;
        const multEspaco = +tipoEspaco.value;
        const multIntensidade = +intensidade.value;
        const multSujidade = +sujidade.value;

        const total = precoBase * dimensao * multEspaco * multIntensidade * multSujidade;

        document.getElementById('resServico').innerText = servicoAtivo.dataset.servico;
        document.getElementById('resDimensao').innerText = `${dimensao} m²`;
        document.getElementById('resEspaco').innerText = tipoEspaco.selectedOptions[0].text;
        document.getElementById('resIntensidade').innerText = intensidade.selectedOptions[0].text;
        document.getElementById('resSujidade').innerText = sujidade.selectedOptions[0].text;
        document.getElementById('resTotal').innerText = formatoMoeda.format(total);

        resultado.classList.add('active');
        resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}
