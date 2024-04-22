/*$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(".sub-menu b").click(function () {
  $(this).parent(".sub-menu-b").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});*/

// Oculta todos os submenus dentro de elementos com a classe 'sub-menu'
$('.sub-menu ul').hide();

// Adiciona um evento de clique em todos os links dentro de elementos com a classe 'sub-menu'
$(".sub-menu a").click(function () {
  // Seleciona o submenu associado ao link clicado e alterna sua visibilidade
  $(this).siblings("ul").slideToggle("100");
  // Alterna a classe do ícone para cima ou para baixo, indicando se o submenu está visível ou não
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

// Oculta todos os submenus dentro de elementos com a classe 'sub-menu' dentro de um submenu
$('.sub-menu ul .sub-menu ul').hide();

// Adiciona um evento de clique em todos os links dentro de elementos com a classe 'sub-menu' dentro de um submenu
$(".sub-menu ul .sub-menu a").click(function () {
  // Seleciona o submenu associado ao link clicado e alterna sua visibilidade
  $(this).siblings("ul").slideToggle("100");
  // Alterna a classe do ícone para cima ou para baixo, indicando se o submenu está visível ou não
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
