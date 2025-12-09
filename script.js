const perguntas = {
    romance: [
        ["Nunca mais poder abraçar seu parceiro(a)", "Nunca mais poder beijar seu parceiro(a)"],
        ["Nunca mais poder tocar no seu parceiro(a)", "Nunca mais poder falar com seu parceiro(a)"],
        ["Um encontro surpresa em um restaurante", "Um cinema caseiro com pipoca e refrigerante"],
        ["Receber uma carta de amor", "Receber um presente simbólico"],
        ["Saber tudo sobre o passado do seu parceiro(a)", "Saber tudo o que se passa na cabeça do seu parceiro(a)"],
        ["Passar por uma situação embaraçosa junto com seu parceiro(a)", "Que apenas um dos dois passe por uma situação embaraçosa"],
        ["Ficar com seu parceiro(a) em uma ilha deserta por uma semana", "Que seu parceiro(a) fique preso no espaço por três meses"],
        ["Esquecer o aniversário de namoro", "Esquecer o dia dos namorados"],
        ["Passar um dia inteiro no shopping com seu parceiro(a)", "Passar um dia inteiro em casa com seu parceiro(a)"],
        ["Fazer uma viagem romântica com seu parceiro(a)", "Ficar em casa assistindo filmes com seu parceiro(a)"],
        ["Receber flores inesperadamente", "Receber uma serenata surpresa"],
        ["Ter uma playlist do casal", "Ter um álbum de recordações juntos"],
        ["Viver uma aventura com seu parceiro(a)", "Ter um dia de spa relaxante com seu parceiro(a)"],
        ["Ter um hobby juntos", "Apoiar o hobby individual do parceiro"],
        ["Planejar projetos a dois", "Improvisar aventuras espontâneas"],
        ["Criar tradições de casal", "Viver cada dia de forma diferente"],
        ["Conversar sobre o que mais admira no outro", "Ouvir o que o outro mais admira em você"],
        ["Poder mudar o que quiser no seu parceiro(a)", "Que seu parceiro(a) mude o que quiser em você"],
        ["Viver num mundo futurista juntos", "Viver num mundo vintage retrô juntos"],
        ["Se conhecerem em outra vida como amigos primeiro", "Se conhecerem como casal direto"],
        ["Criar uma receita juntos do zero", "Inventar um jogo exclusivo do casal"],
        ["Guardar o primeiro encontro na memória", "Guardar o melhor encontro na memória"],
        ["Fazer um desafio surpresa um para o outro", "Criar uma rotina fofa para repetir sempre"],
        ["Ter um namoro cheio de fotos e declarações públicas", "Viver um amor discreto, quase secreto"]

    ],
    fantasia: [
        ["Ter a habilidade de voar", "Ter a habilidade de ficar invisível"],
        ["Ser um mago poderoso", "Ser um guerreiro lendário"],
        ["Visitar um mundo mágico", "Ter um dragão de estimação"],
        ["Controlar os animais", "Controlar os elementos"],
        ["Lutar contra uma galinha do tamanho de um urso", "Lutar contra 10 ursos do tamanho de galinhas"],
        ["Ser amigo de um dragão", "Dominar um unicórnio selvagem"],
        ["Viajar no tempo", "Explorar outras dimensões"],
        ["Ter uma varinha mágica", "Ter um grimório infinito"],
        ["Visitar Atlantis", "Visitar a casa do Papai Noel"],
        ["Dominar o fogo", "Dominar o gelo"],
        ["Transformar-se em qualquer criatura mágica", "Controlar criaturas mágicas"],
        ["Ser rei/rainha de um reino mágico", "Ser um cavaleiro(a) lendário(a)"],
        ["Ter mapas que levam a tesouros", "Ter uma bússola que aponta para o que deseja"],
        ["Controlar sonhos", "Entrar nas histórias dos livros"]
        ["Ter asas de fada", "Ter a cauda de uma sereia"],
        ["Viver em um castelo flutuante", "Viver em uma floresta encantada"],
        ["Ser imortal", "Poder reviver uma vez após morrer"],
        ["Dominar a telecinese", "Dominar telepatia"],
        ["Ser escolhido por uma profecia", "Quebrar uma maldição antiga"],
        ["Ser capaz de reescrever o passado", "Ser capaz de moldar o futuro"]
    ],
    tecnologia: [
        ["Viver em um futuro cyberpunk", "Voltar para a era medieval com conhecimento atual"],
        ["Ter um robô pessoal", "Ter óculos com um assistente pessoal"],
        ["Programar com pensamento", "Ter memória infinita"],
        ["Viajar para Marte", "Explorar o fundo do oceano com tecnologia avançada"],
        ["Ter um chip que te faz aprender coisas instantaneamente", "Ter um exoesqueleto que te dá super força"],
        ["Controlar eletrônicos com a voz", "Controlar eletrônicos com o pensamento"],
        ["Ter um carro que dirige sozinho", "Ter uma moto voadora"],
        ["Poder holografar seu corpo para qualquer lugar", "Poder aparecer em qualquer tela do mundo"],
        ["Viver em uma cidade 100% inteligente", "Morar em uma casa totalmente automatizada"],
        ["Ter uma IA como melhor amiga", "Ter um androide idêntico a humanos como melhor amigo"],
        ["Viajar no tempo por meio de tecnologia", "Simular qualquer época em realidade virtual"],
        ["Ter um celular indestrutível", "Ter uma internet infinita"],
        ["Fazer upload da mente para a nuvem", "Baixar habilidades como em jogos"],
        ["Ser um hacker lendário", "Ser um inventor revolucionário"],
        ["Perder o acesso à internet por um mês", "Perder acesso a todas as redes sociais por um ano"],
        ["Assistir tudo em holograma 3D", "Jogar tudo em realidade virtual total"],
        ["Substituir seu braço por um braço biônico", "Substituir seu olho por visão aumentada digital"],
        ["Pilotar um drone gigante pessoal", "Ter uma mochila foguete funcional"],
        ["Morar em uma estação espacial", "Morar em uma cidade submarina futurista"],
        ["Ter um assistente IA que prevê o futuro", "Ter um dispositivo que pausa o tempo"]
    ],
    culturaPop: [
        ["Viver no último anime que você assistiu", "Viver no último filme que você assistiu"],
        ["Estudar em Hogwarts (Harry Potter)", "Estudar no Colégio Alfier (Winx)"],
        ["Viver dentro do Minecraft", "Viver dentro de Stardew Valley"],
        ["Passar um dia com seu ídolo", "Estar em uma série famosa"],
        ["Ser um(a) treinador(a) pokémon", "Ser um(a) feiticeiro(a) Jujutsu"],
        ["Comer uma comida preparada pelo Sanji", "Comer uma comida preparada pelo Remy (Ratatouille)"],
        ["Ter uma Kekkei Genkai na vida real", "Ter uma Akuma no Mi na vida real"],
        ["Participar de um reality show estilo Round 6", "Participar de uma competição inspirada em Jogos Vorazes"],
        ["Ser melhor amigo do Homem-Aranha", "Ser parceiro do Batman"],
        ["Ir para o universo de Avatar: A Lenda de Aang", "Ir para o universo de Naruto"],
        ["Ter a Lâmina do Caos do Kratos", "Ter a Keyblade do Sora"],
        ["Namorar um(a) personagem de anime", "Namorar um(a) personagem de filme"],
        ["Ser teleportado para dentro do último jogo que jogou", "Que o último jogo que jogou vire realidade por um dia"],
        ["Estudar com a turma de My Hero Academia", "Treinar com a Akatsuki"],
        ["Viajar o multiverso com o Doutor Estranho", "Viajar o multiverso com o Rick Sanchez"],
        ["Cuidar de um Grogu (Baby Yoda)", "Ter um Pikachu como parceiro"],
        ["Ser um caçador de demônios (Kimetsu)", "Ser um shinigami (Bleach)"],
        ["Ver um crossover entre seus universos favoritos", "Criar um universo novo juntando seus universos favoritos"],
        ["Entrar no mundo de Stranger Things", "Entrar no mundo de It a Coisa"],
        ["Participar de uma edição de Jogos Mortais", "Participar do Torneio Tribruxo"],
        ["Ser personagem jogável em GTA", "Ser personagem lendário em League of Legends"],
        ["Ganhar um item lendário em Genshin Impact", "Pegar um lendário shiny em Pokémon"],
        ["Ter um Death Note com uso controlado", "Ter o Omnitrix com apenas 10 aliens liberados"],
        ["Fazer parte da família dos Incríveis", "Fazer parte dos Vingadores"],
        ["Fazer um churrasco com o Luffy", "Fazer uma festa com o Tony Stark"]
    ],

    extremo: [
        ["Pular de paraquedas", "Pular de bungee jump"],
        ["Passar 24h sem celular", "Passar 24h sem comer doce"],
        ["Tomar banho gelado por 1 semana", "Ficar sem celular por 1 semana"],
        ["Só poder comer coisas apimentadas", "Só poder comer comidas sem sal"],
        ["Morar 1 mês em uma floresta", "Morar 1 mês em uma caverna"],
        ["Comer insetos", "Beber um suco com misturas estranhas"],
        ["Ficar com roupa de inverno em um deserto", "Ficar com roupa de banho em um lugar congelante"],
        ["Andar 10km descalço", "Carregar 20kg por 5km"],
        ["Ficar 7 dias sem açúcar", "Ficar 7 dias sem carne"],
        ["Escalar o monte everest", "Explorar o triângulo das bermudas"],
        ["Ficar numa ilha deserta com um assassino", "Ficar numa ilha deserta com animais selvagens"],
        ["Nunca mais poder jogar nenhum jogo", "Nunca mais poder falar com ninguém que ama"],
        ["Trocar de corpo com sua pessoa amada por um dia", "Trocar de lugar com uma pessoa que você não gosta por um dia"],
        ["Participar de um reality de sobrevivência", "Participar do BBB"],
        ["Dormir em uma casa assombrada", "Acampar sozinho no mato"],
        ["Beber café sem açúcar por 1 ano", "Beber café com sal por 1 semana"],
        ["Só poder usar roupas que pinicam por 1 semana", "Só poder usar roupas apertadas por 1 semana"],
        ["Beber querosene", "Beber um veneno vencido"],
        ["Participar de um desafio de resistência física", "Participar de um desafio mental extremo"],
        ["Saltar de um penhasco seguro (cliff jump)", "Descer corredeiras em rafting selvagem"]
    ],

    pesadas: [
        ["Legalizar todas as drogas", "Dar pena de morte para qualquer um que já tenha usado alguma droga"],
        ["Ser amado mas não amar", "Amar e não ser amado"],
        ["Ter dinheiro mas sem tempo", "Ter tempo mas viver apertado"],
        ["Nunca errar, mas nunca aprender com nada", "Errar muito, mas evoluir com o tempo"],
        ["Ser esquecido por todos, até mesmo quem você ama", "Ser lembrado por algo vergonhoso por todos"],
        ["Guardar um segredo que destruiria alguém", "Revelar e destruir uma relação"],
        ["Dar tudo de si e não ser reconhecido", "Nunca dar muito e parecer egoísta"],
        ["Saber a data da morte das pessoas que ama", "Saber a data da própria morte"],
        ["Ter um último dia perfeito com alguém", "Ter muitos dias comuns para lembrar"],
        ["Abrir mão do orgulho", "Ver alguém indo embora por causa dele"],
        ["Ter pouco e ser grato", "Ter muito e nunca ser suficiente"],
        ["Aceitar mudanças dolorosas", "Lutar para manter algo que já acabou"]
        ["Abrir mão de algo que ama por alguém", "Escolher a própria felicidade mesmo machucando o outro"],
        ["Ter a chance de salvar a vida de alguém que você ama, mas ter que sacrificar sua própria vida", "Não ter a chance de salvar a vida de alguém que você ama, mas ter a chance de viver uma vida longa e feliz"],
        ["Perdoar uma ferida emocional profunda", "Seguir com o ressentimento para se proteger"],
        ["Assumir uma falha que magoou alguém", "Esperar que o tempo cure sem conversar"],
        ["Voltar 5 anos atrás e recomeçar tudo", "Avançar 5 anos instantaneamente"],
    ],


    jogos: [
        ["Zerar um jogo difícil", "Zerar um jogo longo"],
        ["Ser pro player em qualquer jogo", "Ser péssimo em todos os jogos, mas ganhar dinheiro toda vez que jogar"],
        ["Ter ping 200 sempre", "Jogar com 20 FPS"],
        ["Jogar sozinho tranquilo", "Jogar com amigos bagunceiros"],
        ["Viver dentro de Minecraft", "Viver dentro de Terraria"],
        ["Puxar uma run no modo hardcore", "Fazer speedrun do início ao fim"],
        ["Ter Skins raras", "Ter Habilidades úteis"],
        ["Jogar um jogo novo sem tutoriais", "Jogar um antigo mas com mods malucos"],
        ["Chegar na final e perder", "Ser eliminado no início mas com risadas"],
        ["Ficar sem jogar por 1 mês", "Jogar apenas 1 jogo repetido por 1 mês"],
        ["(Brawl stars) Ter todos os brawlers no máximo", "(Brawl stars) Ter todas as skins mais raras"],
        ["(Brawl stars) Ser mestre em 1 único brawler", "(Brawl stars) Ser mediano em todos"],
        ["(Brawl stars) Ganhar uma partida com 1 de vida", "(Brawl stars) Ganhar no último segundo do tempo"],
        ["(Brawl stars) Jogar só sobrevivência", "(Brawl stars) Jogar só futebol"],
        ["(Brawl stars) Ter poder estrela no início", "(Brawl stars) Ter engrenagem lendária no início"],
        ["(Brawl stars) Levar um wipe solo no time inimigo", "(Brawl stars) Fazer gol de bandeja em final apertada"],
        ["(Brawl stars) Jogar com randoms eternamente", "(Brawl stars) Jogar sempre com gente que reclama"],
        ["(Brawl stars) Puxar 3 horas seguidas de push", "(Brawl stars) Treinar mecânica 3 horas no treino"],
        ["(Brawl stars) Ganhar do seu brawler favorito contra um counter", "(Brawl stars) Ganhar fácil usando um meta quebrado"],
        ["(Brawl stars) Conseguir uma skin lendária no primeiro giro", "(Brawl stars) Ganhar um brawler mítico aleatório"]
    ],

    reflexivo: [
        ["Ter paz de espírito", "Ter sucesso profissional"],
        ["Viver o presente intensamente", "Planejar o futuro com foco"],
        ["Ouvir mais as pessoas", "Ser mais ouvido pelas pessoas"],
        ["Fazer o que ama e ganhar pouco", "Ganhar muito fazendo algo que não gosta tanto"],
        ["Ser lembrado pelo que fez", "Ser lembrado por quem você foi"],
        ["Ter poucas amizades verdadeiras", "Ter muitas amizades superficiais"],
        ["Nunca se preocupar", "Ter todas as respostas"],
        ["Mudar o passado", "Ver o futuro"],
        ["Amar muito e correr riscos", "Amar pouco e se proteger"],
        ["Viver uma vida simples feliz", "Viver uma vida intensa imprevisível"],
        ["Ajudar o mundo e não ser reconhecido", "Ser reconhecido por algo que não fez sozinho"],
        ["Perdoar alguém que te feriu", "Ser perdoado por algo que você fez"],
        ["Arriscar algo grande pelo amor", "Guardar o coração para não se ferir"],
        ["Ter tempo livre mas pouca energia", "Ter energia mas pouco tempo"],
        ["Aprender com erros do passado", "Esquecer erros e seguir em frente"],
        ["Mudar o mundo devagar", "Mudar uma pessoa profundamente"],
        ["Ouvir verdades difíceis", "Viver com mentiras confortáveis"],
        ["Abrir mão de algo por alguém", "Ver alguém abrir mão por você"],
        ["Ter coragem de recomeçar", "Ter paciência para continuar"],
        ["Saber o motivo de tudo", "Aceitar que nem tudo tem resposta"]
    ],

    all: [
        ["Tomar sorvete no frio", "Tomar chocolate quente no calor"],
        ["Cair de sono abraçado(a) a alguém", "Ficar conversando até amanhecer"],
        ["Rir até a barriga doer", "Chorar de emoção com algo bonito"],
        ["Esquecer o guarda-chuva na chuva", "Esquecer a toalha no banho"],
        ["Dormir com barulho de chuva", "Dormir com ventilador no máximo"],
        ["Ganhar um abraço inesperado", "Dar um abraço inesperado"],
        ["Ter um dia incrível e esquecer fotos", "Tirar várias fotos mas ser um dia normal"],
        ["Pão com manteiga", "Pão com queijo"],
        ["Viajar sem planejar", "Planejar tudo com antecedência"],
        ["Perder a hora para dormir", "Perder a hora para acordar"],
        ["Ir para a praia", "Ir para o campo"],
        ["Cachorro como pet", "Gato como pet"],
        ["Aprender algo novo por conta", "Aprender algo novo com alguém ensinando"],
        ["Jogar videogame sozinho", "Jogar com amigos"],
        ["Comprar algo caro e durar anos", "Comprar mais barato e trocar sempre"],
        ["Assistir série longa", "Assistir filmes curtos"],
        ["Festa com muitas pessoas", "Passeio com poucas pessoas"],
        ["Dizer exatamente o que pensa sempre", "Guardar tudo que pensa para si"],
        ["Receber um presente simples", "Receber uma carta longa e sincera"],
        ["Conhecer o futuro", "Rever um momento do passado"],
        ["Ser o mais engraçado da sala", "Ser o mais inteligente"],
        ["Perder algo e achar depois", "Nunca perder nada"],
        ["Ter poucos amigos leais", "Ter muitos amigos casuais"],
        ["Ter muito dinheiro", "Ter muito tempo"],
        ["Poder pausar o tempo", "Poder acelerar o tempo"],
        ["Comer pizza todo fim de semana", "Comer hambúrguer todo fim de semana"],
        ["Ir para o espaço", "Ir para o fundo do mar"],
        ["Viver sem internet", "Viver sem música"],
        ["Ser bom em esportes", "Ser bom em artes"],
        ["Saber todas as línguas", "Tocar todos os instrumentos"],
        ["Morar no frio", "Morar no calor"],
        ["Ouvir música o dia todo", "Assistir vídeos o dia todo"],
        ["Trabalhar com o que ama ganhando pouco", "Trabalhar com algo neutro ganhando bem"],
        ["Viajar sozinho", "Viajar acompanhado"],
        ["Conhecer um ídolo", "Ser o ídolo de alguém"],
        ["Comer doce demais", "Comer salgado demais"],
        ["Filme de terror", "Filme de comédia"],
        ["Ter uma memória perfeita", "Esquecer coisas ruins para sempre"],
        ["Dormir tarde e acordar tarde", "Dormir cedo e acordar cedo"],
        ["Falar várias línguas medianamente", "Falar uma língua perfeitamente"],
        ["Perder o celular", "Perder a carteira"],
        ["Voltar a um momento que marcou", "Pular para um momento futuro importante"],
        ["Ser mais impulsivo", "Ser mais calculista"],
        ["Viver um amor intenso curto", "Viver um amor leve porém longo"],
        ["Pizza doce", "Pizza salgada"],
        ["Mudar seu nome", "Mudar sua aparência"],
        ["Atravessar a rua correndo", "Esperar o semáforo mesmo vazio"],
        ["Encontrar R$50 na rua", "Ganhar um abraço quando mais precisa"],
        ["Ter uma casa grande", "Ter uma casa pequena e aconchegante"],
        ["Ser extremamente romântico", "Ser discreto mas profundo"],
        ["Receber elogios", "Dar elogios"],
        ["Comer algo novo sem saber o que é", "Comer só o que conhece"],
        ["Fazer uma viagem sem celular", "Fazer uma viagem só com fotos instantâneas"],
        ["Aprender um novo hobby por ano", "Aprofundar um único hobby para ser excelente"],
        ["Receber um bilhete escondido no bolso", "Esconder um bilhete para alguém encontrar depois"],
        ["Um jantar feito com o que tiver na geladeira", "Pedir delivery do favorito"],
        ["Dormir na rede ao ar livre", "Dormir em cama com coberta pesada"],
        ["Andar na chuva sem guarda-chuva", "Tomar banho com luz de velas"],
        ["Guardar um objeto simbólico", "Guardar uma memória específica na mente"],
        ["Ter risadas internas com alguém", "Criar piadas internas que só vocês entendem"],
        ["Dividir a última fatia de comida", "Ficar com fome mas fazer a pessoa rir"],
        ["Dar um presente feito à mão", "Dar algo que a pessoa deseja faz tempo"],
        ["Ter uma playlist que conta a história do casal", "Ter um álbum com fotos de fases da vida"],
        ["Ir a um show de última hora", "Ficar em casa ouvindo o show ao vivo e dançando juntos"],
        ["Conversar olhando o céu", "Conversar olhando nos olhos"],
        ["Receber um áudio longo e carinhoso", "Receber mensagens curtas porém frequentes"],
        ["Planejar metas juntos", "Realizar metas espontaneamente sem planejar"],
        ["Ter uma tradição só de vocês", "Que tudo vire novidade sempre"],
        ["Um dia inteiro sem pressa", "Um dia cheio de atividades legais"],
        ["Descobrir um restaurante novo", "Retornar ao lugar favorito mil vezes"],
        ["Guardar lembranças em uma caixa", "Guardar lembranças em garrafas com bilhetes"],
        ["Trocar presentes sem motivo", "Trocar cartas em datas importantes"],
        ["Ir dormir mesmo com assunto pendente", "Virar a noite conversando até resolver"],
        ["Receber café pronto", "Preparar café para quem você ama"],
        ["Ficar olhando fotos antigas", "Criar fotos novas todas as semanas"],
        ["Fazer promessa de futuro", "Aproveitar ao máximo o presente"],
        ["Chamar por apelido", "Chamar pelo nome completo com carinho"],
        ["Ter um cheiro que lembra alguém", "Ter uma música que lembra alguém"],
        ["Pagar mico em público rindo", "Fingir ser sério mas rachar por dentro"],
        ["Dançar mesmo sem saber dançar", "Ver alguém dançar e só apreciar"]

    ]


};


let perguntasRestantes = {};

function inicializarRestantes() {
    for (const categoria in perguntas) {
        perguntasRestantes[categoria] = [...perguntas[categoria]];
    }
}
inicializarRestantes();

function pegarPergunta() {
    const categoriaEscolhida = document.getElementById("categorias").value;

    let categoria;
    if (categoriaEscolhida === "all") {
        categoria = "all";
    } else {
        categoria = categoriaEscolhida;
    }


    const index = Math.floor(Math.random() * perguntasRestantes[categoria].length);
    const pergunta = perguntasRestantes[categoria][index];
    perguntasRestantes[categoria].splice(index, 1);

    return pergunta;
}

function trocar() {
    const pergunta = pegarPergunta();
    const btn1 = document.getElementById("opcao1");
    const btn2 = document.getElementById("opcao2");
    const barra = document.getElementById("resultado");
    const texto = document.getElementById("textoResultado");
    const container = document.getElementById("resultadoContainer");

    // Reset visual
    barra.style.width = "0%";
    texto.textContent = "";
    container.style.opacity = "0";

    btn1.disabled = false;
    btn2.disabled = false;

    btn1.innerText = pergunta[0];
    btn2.innerText = pergunta[1];
}

function animarResultado(opcao) {
    const barra = document.getElementById("resultado");
    const texto = document.getElementById("textoResultado");
    const container = document.getElementById("resultadoContainer");

    let valorFinal = Math.floor(Math.random() * 60) + 20; // 30% a 90%
    let porcentagem = 0;

    barra.style.width = "0%";
    container.style.opacity = "1";

    const btn1 = document.getElementById("opcao1");
    const btn2 = document.getElementById("opcao2");
    btn1.disabled = btn2.disabled = true;

    let intervalo = setInterval(() => {
        porcentagem += 1; // Cresce mais rápido (antes era 1)
        barra.style.width = porcentagem + "%";
        texto.textContent = `Você escolheu: ${opcao} | ${porcentagem}%`;

        if (porcentagem >= valorFinal) {
            porcentagem = valorFinal;
            barra.style.width = valorFinal + "%";
            texto.textContent = `Você escolheu: ${opcao} | ${valorFinal}%`;

            clearInterval(intervalo);

            setTimeout(() => {
                container.style.opacity = "0";
                barra.style.width = "0%";
                texto.textContent = "";
                setTimeout(trocar, 500);
            }, 800);
        }
    }, 80); // velocidade da animação da barra (pode ajustar aqui também)

}



document.getElementById("opcao1").onclick = () => animarResultado(document.getElementById("opcao1").innerText);
document.getElementById("opcao2").onclick = () => animarResultado(document.getElementById("opcao2").innerText);

window.onload = trocar;
