Painel de Supervisão Operacional
Descrição do Projeto

O Painel de Supervisão Operacional é uma aplicação web desenvolvida utilizando HTML, CSS e JavaScript, com o objetivo de centralizar indicadores comerciais, operacionais e de gestão de equipe em uma única interface.

O projeto foi inspirado em dashboards corporativos utilizados em empresas para acompanhamento de desempenho, produtividade, atendimento ao cliente e gerenciamento de demandas.

A aplicação permite visualizar informações estratégicas de forma organizada e intuitiva, auxiliando gestores no acompanhamento da operação e na tomada de decisões.

Objetivo

Desenvolver uma aplicação Front-End utilizando conceitos de:

HTML5
CSS3
JavaScript
Estruturação de layouts responsivos
Organização de dados em objetos JavaScript
Navegação interna por âncoras
Visualização de indicadores
Funcionalidades
Dashboard Executivo

Apresenta os principais indicadores da operação:

Faturamento Total
Quantidade de Pedidos
Ticket Médio
PA (Itens por Venda)
Conversão
NPS
Serviços Vendidos
Prateleira Infinita
Gráficos Gerenciais

Visualização gráfica de indicadores estratégicos:

Faturamento por Canal
Clientes Novos x Recorrentes

Os gráficos são implementados utilizando a biblioteca Chart.js.

Gestão de Equipe

Permite acompanhar o desempenho individual dos colaboradores:

Nome
Faturamento
Conversão
NPS
Status de desempenho
Banco de Horas

Área destinada ao acompanhamento da jornada da equipe:

Saldo de horas
Quantidade de atrasos
Status da colaboradora
Gestão de Demandas

Controle de projetos e atividades em andamento:

Nome da demanda
Solicitante
Status
Percentual de conclusão
Alertas Operacionais

Exibe notificações importantes da operação, como:

Conversão abaixo da meta
SLA abaixo do esperado
Demandas atrasadas
Banco de horas negativo
Estrutura do Projeto
painel-supervisao/

│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── dados.js
│   └── dashboard.js
│
└── README.md
Tecnologias Utilizadas
HTML5

Responsável pela estrutura da aplicação.

CSS3

Responsável pela estilização, layout responsivo e experiência visual.

JavaScript

Responsável pela:

Atualização dinâmica dos dados
Preenchimento dos cards
Criação de tabelas
Atualização automática da data de sincronização
Chart.js

Biblioteca utilizada para criação dos gráficos.

Organização das Informações

Os dados do sistema são armazenados em objetos JavaScript no arquivo:

dados.js

Exemplo:

const equipe = [
  {
    nome: "Rafaela Silva",
    faturamento: "R$ 42.000",
    conversao: "13%",
    nps: "4.85",
    status: "Excelente"
  }
];

O arquivo:

dashboard.js

é responsável por percorrer esses dados e criar os elementos visualmente na tela.

Navegação

A aplicação utiliza navegação por âncoras.

Ao clicar nos itens do menu lateral, a página realiza uma rolagem suave até a seção correspondente.

Exemplos:

Dashboard
↓
Resumo geral dos indicadores

Equipe
↓
Desempenho da equipe

Banco de Horas
↓
Controle de jornada

Demandas
↓
Projetos e atividades
Responsividade

O sistema foi desenvolvido para funcionar em diferentes tamanhos de tela:

Desktop
Notebook
Tablet
Smartphone

Em telas menores, o conteúdo é reorganizado automaticamente para melhorar a experiência do usuário.

Melhorias Futuras

As próximas versões poderão incluir:

Integração com Google Sheets
Integração com Looker Studio
Integração com Ponto Mais
Cadastro de usuários
Login e autenticação
Kanban interativo
Exportação de relatórios
Indicadores em tempo real
Dashboard multiunidades
Aplicação Prática

Embora tenha sido desenvolvido como atividade acadêmica da disciplina de Front-End, o projeto foi idealizado com foco em uma aplicação real de supervisão operacional, podendo futuramente ser adaptado para utilização em ambientes corporativos.

Autora

Talita Rocha

Curso de Sistemas de Informação

Disciplina: Front-End

Projeto desenvolvido utilizando HTML, CSS e JavaScript para aplicação prática dos conceitos estudados durante a disciplina.