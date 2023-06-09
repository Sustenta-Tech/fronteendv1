const steps = [
    {
        id: "Greet",
        message: "Olá, Seja bem vindo(a) a Sustenta Tech!",
        trigger: "Done",
    },

    {
        id: "Done",
        message: "Por favor, insira seu nome:",
        trigger: "waiting1",
    },
    {
        id: "waiting1",
        user: true,
        trigger: "Name",
    },
    {
        id: "Name",
        message: "Olá {previousValue}, selecione sua dúvida",
        trigger: "issues",
    },

    {
        id: "issues",
        options: [
            { value: "sustentatech", label: "O que é a Sustenta Tech?", trigger: "sustentatech" },
            { value: "missao", label: "Qual a missão do Sustenta Tech?", trigger: "missao" },
            { value: "bootcamp", label: "O que é o Bootcamp Full Stack?", trigger: "bootcamp" },
            { value: "generation", label: "O que é a Generation Brasil?", trigger: "generation" },
            { value: "sumup", label: "A SumUp patrocinou esse projeto?", trigger: "sumup" },
            { value: "pqcontratar", label: "Porque contratar essa equipe de desenvolvedores?", trigger: "pqcontratar" },
        ]
    },
    {
        id: "sustentatech",
        message:
            "É um ecommerce que oferece boas compras e apoia a Agenda 2030 da ONU para ajudar o meio ambiente.",
        trigger: "newQuestion",
    },

    {
        id: "missao",
        message:
            "Acreditamos em um futuro sustentável e incentivamos o uso de produtos ecologicamente viável. Juntos, podemos fazer a diferença.",
        trigger: "newQuestion",
    },

    {
        id: "bootcamp",
        message:
            "É um programa de treinamento intensivo para desenvolvedores de software, abrangendo front-end e back-end. Esse ecommerce é o resultado do nosso trabalho de conclusão do curso.",
        trigger: "newQuestion",
    },

    {
        id: "generation",
        message:
            "Uma ONG global que oferece programas de treinamento intensivo e prático em habilidades técnicas e socioemocionais para jovens e adultos em mais de 17 países.",
        trigger: "newQuestion",
    },

    {
        id: "sumup",
        message:
            "Sim! A parceria entre a SumUp e a Generation Brasil possibilitou o patrocínio da turma 62 do Bootcamp de Desenvolvedores, da qual nossa equipe fez parte. Estamos gratos por essa oportunidade única e valiosa.",
        trigger: "newQuestion",
    },

    {
        id: "pqcontratar",
        message:
            "Ao contratar a nossa equipe, você pode esperar profissionais versáteis, colaborativos, adaptáveis e dedicados a entregar soluções de software de alta qualidade. Estamos prontos para enfrentar novos desafios e contribuir para o sucesso do seu projeto.",
        trigger: "newQuestion",
    },
    {
        id: "newQuestion",
        message: "Gostaria de fazer outra pergunta?",
        trigger: "resp"

    },
    {
        id: "resp",
        options: [
            { value: "sim", label: "Sim", trigger: "issues" },
            { value: "nao", label: "Não", trigger: "end-message" }
        ]
    },
    {
        id: 'end-message',
        message: 'Obrigada!Para mais informações entre em contato: sustentatechintegrador @gmail.com ❤',
        end: true,
    },
];

export default steps;