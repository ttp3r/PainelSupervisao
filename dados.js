const kpis = [
  {
    titulo: "Faturamento",
    valor: "R$ 2.150.890"
  },
  {
    titulo: "Pedidos",
    valor: "1.262"
  },
  {
    titulo: "Ticket Médio",
    valor: "R$ 1.704"
  },
  {
    titulo: "PA",
    valor: "1,80"
  },
  {
    titulo: "Conversão",
    valor: "10,9%"
  }
];

const equipe = [
  {
    nome: "Rafaela Silva",
    faturamento: "R$ 42.000",
    conversao: "13%",
    nps: "4.85",
    status: "Excelente"
  },
  {
    nome: "Maria Luisa",
    faturamento: "R$ 37.000",
    conversao: "12%",
    nps: "4.88",
    status: "Excelente"
  },
  {
    nome: "Verena Machado",
    faturamento: "R$ 29.000",
    conversao: "10%",
    nps: "4.93",
    status: "Atenção"
  }
];

const demandas = [
  {
    titulo: "Dashboard Looker",
    solicitante: "Diretoria",
    progresso: 40,
    status: "Em andamento"
  },
  {
    titulo: "POP Omnichat",
    solicitante: "Álvaro",
    progresso: 80,
    status: "Revisão"
  }
];

const bancoHoras = [
  {
    nome: "Rafaela Silva",
    saldo: "+12h",
    atrasos: 0,
    status: "OK"
  },
  {
    nome: "Maria Luisa",
    saldo: "+8h",
    atrasos: 1,
    status: "Atenção"
  },
  {
    nome: "Verena Machado",
    saldo: "-3h",
    atrasos: 4,
    status: "Crítico"
  }
];

const alertas = [
  "Meta de conversão abaixo do esperado no canal WhatsApp.",
  "3 demandas estão próximas do prazo final.",
  "Banco de horas negativo para 1 colaborador."
];

const faturamentoCanal = {
  labels: ["WhatsApp", "Loja", "Site", "Marketplace"],
  valores: [850000, 520000, 430000, 350000]
};

const clientes = {
  labels: ["Novos", "Recorrentes"],
  valores: [420, 842]
};