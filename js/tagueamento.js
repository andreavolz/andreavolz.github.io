// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Todas páginas - Contato
let contato = document.getElementsByClassName('menu-lista-link menu-lista-contato')[0]
contato.addEventListener('click', function(){
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

// Todas páginas - Inicia download do PDF
let inicia_download = document.getElementsByClassName('menu-lista-link menu-lista-download')[0]
inicia_download.addEventListener('click', function(){
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
}); 

// Página análise - botão Lorem
let lorem = document.getElementsByClassName('card card-montadoras');
lorem.addEventListener('click', function (){
    ga('send', 'event', 'analise', 'ver_mais', 'Lorem')
});

// Página análise - botão Ipsum
let ipsum = document.getElementsByClassName('card card-montadoras');
ipsum.addEventListener('click', function (){
    ga('send', 'event', 'analise', 'ver_mais', 'Ipsum')
});

// Página análise - botão Dolor
let dolor = document.getElementsByClassName('card card-montadoras');
dolor.addEventListener('click', function (){
    ga('send', 'event', 'analise', 'ver_mais', 'Dolor')
});

// Página sobre - preencher campo do nome
let nome = document.getElementById('nome');
nome.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'nome', 'preencheu')
});

// Página sobre - preencher campo do email
let email = document.getElementById('email');
email.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'email', 'preencheu')
});

// Página sobre - preencher campo do telefone
let telefone = document.getElementById('telefone');
telefone.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'telefone', 'preencheu')
});

// Página sobre - preencher campo de aceite
let aceito = document.getElementById('aceito');
aceito.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'aceito', 'preencheu')
});

// Página sobre - enviar (popup)
let enviar = document.getElementsByTagName('button')[0];
enviar.addEventListener('click', function() {
    ga('send', 'event', 'contato', 'enviado', 'enviado');
});