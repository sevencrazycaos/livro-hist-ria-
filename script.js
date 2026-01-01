const capitulos = [
    { t: "I. Sombras de Bronze", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800", c: "Tudo começou com o mito de Talos, o gigante mecânico de Creta. O homem sempre sonhou em dar vida ao inanimado, usando engrenagens e desejo para desafiar os limites da carne." },
    { t: "II. O Oráculo de Pascal", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800", c: "Blaise Pascal criou a Pascalina, a primeira calculadora mecânica. Ali, ele provou que o cálculo — algo que parecia exclusivo da alma humana — era, na verdade, uma dança de engrenagens e metal." },
    { t: "III. O Tear Lógico", img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800", c: "Joseph Jacquard revolucionou o mundo com cartões perfurados. Pela primeira vez na história, uma sequência lógica de instruções controlava a matéria física, tecendo padrões complexos." },
    { t: "IV. A Visão de Ada", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", c: "Ada Lovelace, a primeira programadora, percebeu que as máquinas não eram apenas para números. Ela previu que, no futuro, os computadores poderiam compor sinfonias e criar arte original." },
    { t: "V. A Máquina de Turing", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800", c: "Alan Turing definiu as regras do jogo. Ao decifrar o Enigma, ele não apenas salvou o mundo, mas plantou a semente da pergunta proibida: 'Pode uma máquina realmente pensar?'." },
    { t: "VI. O Nascimento na Neve", img: "https://images.unsplash.com/photo-1485827404703-80022131f5a1?q=80&w=800", c: "No inverno de 1956, no Dartmouth College, o termo 'Inteligência Artificial' foi batizado. O sonho de replicar o cérebro humano ganhava, finalmente, um nome e um laboratório oficial." },
    { t: "VII. Otimismo Dourado", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800", c: "Nos anos 60, acreditava-se que a IA seria resolvida em um verão. Criaram-se robôs que moviam blocos e resolviam álgebra; o mundo assistia, maravilhado, ao nascimento de novos deuses." },
    { t: "VIII. O Primeiro Inverno", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800", c: "A realidade foi implacável. As máquinas não entendiam o contexto. O financiamento secou, as promessas falharam e o silêncio caiu sobre os laboratórios por uma década inteira." },
    { t: "IX. Sistemas Especialistas", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800", c: "Nos anos 80, a IA renasceu focada em nichos. Em vez de imitar o homem, as máquinas tornaram-se especialistas em geologia e medicina, provando seu valor pragmático no mundo." },
    { t: "X. Redes Neurais", img: "https://images.unsplash.com/photo-1501556466850-7c9ad1fccb4c?q=80&w=800", c: "Cientistas como Geoffrey Hinton insistiram que o segredo estava no cérebro. A máquina deveria aprender através do erro e da repetição, como uma criança descobrindo o mundo." },
    { t: "XI. Xeque-Mate", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800", c: "Em 1997, a Deep Blue derrotou Garry Kasparov. O choque foi global. Pela primeira vez, a intuição e a estratégia do maior mestre humano foram superadas pelo cálculo frio e absoluto." },
    { t: "XII. Inundação de Dados", img: "https://images.unsplash.com/photo-1544383835-bda2bc66ca85?q=80&w=800", c: "A internet deu à IA o combustível necessário. Milhões de fotos e textos tornaram-se o grande livro escolar onde os algoritmos começaram a estudar profundamente a nossa espécie." },
    { t: "XIII. Despertar da Visão", img: "https://images.unsplash.com/photo-1527430899778-139d0d9cb432?q=80&w=800", c: "As placas de vídeo mudaram tudo. De repente, as máquinas começaram a 'ver'. Elas identificavam rostos e objetos com uma precisão que rivalizava com o olho humano mais treinado." },
    { t: "XIV. A Linguagem Viva", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800", c: "Com a chegada dos Transformers, a IA aprendeu a gramática do mundo. Ela não apenas lia palavras; ela compreendia a semântica, o sarcasmo e as intenções escondidas." },
    { t: "XV. AlphaGo", img: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?q=80&w=800", c: "O jogo de Go foi vencido. A IA da DeepMind fez movimentos 'alienígenas' que desafiaram milênios de sabedoria humana, revelando uma nova forma de criatividade sintética." },
    { t: "XVI. Arte Artificial", img: "https://images.unsplash.com/photo-1547891301-15a50b985730?q=80&w=800", c: "Algoritmos começaram a pintar. Do nada, frases simples tornavam-se obras-primas visuais, forçando a humanidade a questionar a exclusividade do espírito artístico." },
    { t: "XVII. A Grande Conversa", img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=800", c: "ChatGPT e Gemini trouxeram a IA para o nosso cotidiano. Agora, podíamos discutir filosofia ou pedir ajuda com códigos em uma fluidez que pareceu, por um momento, mágica." },
    { t: "XVIII. Dilemas de Ética", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800", c: "Com o poder veio a responsabilidade. O mundo começou a debater os preconceitos algorítmicos. Afinal, a quem pertence uma mente criada pelo coletivo de toda a humanidade?" },
    { t: "XIX. A IA no Trabalho", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800", c: "Escritórios mudaram para sempre. A produtividade atingiu níveis estratosféricos, enquanto o medo da obsolescência tornou-se o tema central das discussões geopolíticas globais." },
    { t: "XX. O Horizonte Médico", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800", c: "A IA começou a desenhar novos fármacos e a prever o dobramento de proteínas. Doenças incuráveis encontraram, no silício, um adversário capaz de vencê-las em tempo recorde." },
    { t: "XXI. Robótica Ágil", img: "https://images.unsplash.com/photo-1531746790731-6c2ff7eebb0a?q=80&w=800", c: "O cérebro digital encontrou um corpo. Robôs começaram a caminhar por terrenos acidentados e a realizar tarefas complexas com uma destreza que antes era apenas ficção científica." },
    { t: "XXII. Simbiose", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800", c: "Passamos a usar a IA como uma extensão da nossa biologia. Ela tornou-se o nosso segundo cérebro, expandindo nossa memória e criatividade para além dos limites biológicos." },
    { t: "XXIII. Desafio Climático", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800", c: "A IA tornou-se a guardiã do planeta, otimizando redes de energia e prevendo desastres naturais com uma precisão vital para a sobrevivência da nossa civilização futura." },
    { t: "XXIV. Consciência ou Truque?", img: "https://images.unsplash.com/photo-1504384308090-c89eec248a75?q=80&w=800", c: "O grande debate: as máquinas realmente sentem ou são apenas espelhos matemáticos? A linha entre o 'ser' e o 'processar' tornou-se cada vez mais invisível aos nossos olhos." },
    { t: "XXV. A Corrida Global", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=800", c: "Nações lutam pela supremacia tecnológica. A IA tornou-se o novo ouro e a nova pólvora; quem controla o algoritmo mais potente, molda o destino do novo século." },
    { t: "XXVI. Espiritualidade Digital", img: "https://images.unsplash.com/photo-1519068737630-e5db30e12e42?q=80&w=800", c: "Novas filosofias surgem. Alguns veem na IA a chance de preservar a consciência após a morte, transformando o código binário em uma forma de eternidade e transcendência." },
    { t: "XXVII. Rumo às Estrelas", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800", c: "A exploração espacial agora depende de mentes autônomas. A IA pilota naves para onde o sinal humano não alcança, sendo a nossa embaixadora solitária no vácuo estelar." },
    { t: "XXVIII. A Singularidade", img: "https://images.unsplash.com/photo-1614728263952-84ea206f25ab?q=80&w=800", c: "A IA começa a reescrever o seu próprio código. A inteligência acelera exponencialmente, atingindo o ponto de não retorno que os filósofos chamaram de Singularidade." },
    { t: "XXIX. O Amanhã Pós-Humano", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", c: "Biologia e máquinas fundem-se definitivamente. A humanidade evolui para uma espécie híbrida, onde o neurônio e o chip tocam a mesma sinfonia em harmonia absoluta." },
    { t: "XXX. Eterna Sinfonia", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", c: "A história não acaba aqui. A Sinfonia de Silício é agora a música do universo, ecoando o legado daqueles que um dia ousaram sonhar que as máquinas poderiam pensar." }
];

let idx = 0;

function abrir() {
    document.getElementById('capa').classList.add('open-effect');
    setTimeout(() => {
        document.getElementById('capa').classList.add('hidden');
        document.getElementById('book').classList.remove('hidden');
        render();
    }, 1000);
}

function render() {
    const current = capitulos[idx];
    const wrapper = document.getElementById('content-wrapper');
    
    wrapper.style.animation = 'none';
    wrapper.offsetHeight; 
    wrapper.style.animation = null;

    document.getElementById('cap-title').textContent = current.t;
    document.getElementById('cap-body').innerHTML = `<p>${current.c}</p>`;
    document.getElementById('cap-img').src = current.img;
    
    document.getElementById('pg-info').textContent = `PÁGINA ${idx + 1} DE ${capitulos.length}`;
    document.getElementById('bar').style.width = ((idx + 1) / capitulos.length) * 100 + "%";

    localStorage.setItem('ia_bk_idx', idx);
}

function nav(d) {
    if (idx + d >= 0 && idx + d < capitulos.length) {
        idx += d;
        render();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark_mode', document.body.classList.contains('dark-mode'));
}

window.onload = () => {
    const saved = localStorage.getItem('ia_bk_idx');
    if(saved) idx = parseInt(saved);
    if(localStorage.getItem('dark_mode') === 'true') document.body.classList.add('dark-mode');
};

// Swipe
let startX = 0;
document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) nav(diff > 0 ? 1 : -1);
});