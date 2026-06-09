const dataAtual = document.getElementById("ultima-atualizacao");

dataAtual.textContent =
new Date().toLocaleString("pt-BR");

const cardsKpi =
document.getElementById("cards-kpi");

kpis.forEach(kpi => {

    cardsKpi.innerHTML += `
    
        <div class="card-kpi">

            <span>${kpi.titulo}</span>

            <strong>${kpi.valor}</strong>

        </div>
    
    `;

});

const cardsEquipe =
document.getElementById("cards-equipe");

equipe.forEach(colaborador => {

    cardsEquipe.innerHTML += `

        <div class="card-equipe">

            <h3>${colaborador.nome}</h3>

            <p>
                Faturamento:
                ${colaborador.faturamento}
            </p>

            <p>
                Conversão:
                ${colaborador.conversao}
            </p>

            <p>
                NPS:
                ${colaborador.nps}
            </p>

            <span>
                ${colaborador.status}
            </span>

        </div>

    `;

});

const tabelaPonto =
document.getElementById("tabela-ponto");

bancoHoras.forEach(item => {

    tabelaPonto.innerHTML += `
        <tr>
            <td>${item.nome}</td>
            <td>${item.saldo}</td>
            <td>${item.atrasos}</td>
            <td>${item.status}</td>
        </tr>
    `;

});

const cardsDemandas =
document.getElementById("cards-demandas");

demandas.forEach(demanda => {

    cardsDemandas.innerHTML += `

        <div class="card-demanda">

            <h3>${demanda.titulo}</h3>

            <p>
                Solicitante:
                ${demanda.solicitante}
            </p>

            <p>
                Status:
                ${demanda.status}
            </p>

            <div class="progresso">

                <div class="barra">

                    <span
                        style="
                        width:${demanda.progresso}%">
                    </span>

                </div>

                <p>
                    ${demanda.progresso}%
                </p>

            </div>

        </div>

    `;

});

const listaAlertas =
document.getElementById("lista-alertas");

alertas.forEach(alerta => {

    listaAlertas.innerHTML += `
        <div class="alerta">
            ${alerta}
        </div>
    `;

});

new Chart(
    document.getElementById(
        "graficoFaturamento"
    ),
    {
        type: "bar",

        data: {
            labels:
            faturamentoCanal.labels,

            datasets: [{
                label: "Faturamento",

                data:
                faturamentoCanal.valores
            }]
        }
    }
);

new Chart(
    document.getElementById(
        "graficoClientes"
    ),
    {
        type: "doughnut",

        data: {
            labels:
            clientes.labels,

            datasets: [{
                data:
                clientes.valores
            }]
        }
    }
);

