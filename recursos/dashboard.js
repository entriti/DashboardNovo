document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
})
function ativarItemCustos(){
    document.getElementById('Ordens').classList.remove('active');
    document.getElementById('Vendas').classList.remove('active');
    document.getElementById('Taxas').classList.remove('active');
    document.getElementById('Custos').classList.add('active');
    document.getElementById('RH').classList.remove('active');
}
function ativarItemOrdens(){
    document.getElementById('Ordens').classList.add('active');
    document.getElementById('Vendas').classList.remove('active');
    document.getElementById('Taxas').classList.remove('active');
    document.getElementById('Custos').classList.remove('active');
    document.getElementById('RH').classList.remove('active');
}
function ativarItemVendas(){
    document.getElementById('Ordens').classList.remove('active');
    document.getElementById('Vendas').classList.add('active');
    document.getElementById('Taxas').classList.remove('active');
    document.getElementById('Custos').classList.remove('active');
    document.getElementById('RH').classList.remove('active');
}
function ativarItemRH(){
    document.getElementById('Ordens').classList.remove('active');
    document.getElementById('Vendas').classList.add('active');
    document.getElementById('Taxas').classList.remove('active');
    document.getElementById('Custos').classList.remove('active');
    document.getElementById('RH').classList.remove('active');
}
function ativarItemTaxas(){
    document.getElementById('Ordens').classList.remove('active');
    document.getElementById('Vendas').classList.remove('active');
    document.getElementById('Taxas').classList.add('active');
    document.getElementById('Custos').classList.remove('active');
    document.getElementById('RH').classList.remove('active');
}

function showDashboard(url) {
    const iframe = document.getElementById('dashboardFrame');
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'flex';
    iframe.src = url;
}

function onIframeLoad() {
    const iframe = document.getElementById('dashboardFrame');
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'none';
    iframe.classList.add('show'); // Mostrar iframe quando carregado
}

function handleError() {
    document.getElementById('loadingMessage').innerText = 'Erro ao carregar o conteúdo.';
}

function logout(){
    window.location.href = "https://entriti.github.io/DashboardNovo/Login";
    console.log('oi')
}
