// Função para alternar o menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    mobileMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
}

// Controla a exibição do dropdown ao clicar em "Produtos" no menu mobile
document.querySelectorAll('.navbar li').forEach(function(item) {
    item.addEventListener('click', function(event) {
        // Previne que o clique no "Produtos" também feche o menu
        if (item.querySelector('.dropdown')) {
            event.stopPropagation(); // Impede que o clique propague para os outros itens de menu
        }

        // Se o item clicado já estiver ativo, remova a classe e feche o dropdown
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.dropdown').style.display = 'none'; // Esconde o dropdown
        } else {
            // Fechar outros dropdowns
            document.querySelectorAll('.navbar li').forEach(function(li) {
                li.classList.remove('active');
                li.querySelector('.dropdown').style.display = 'none'; // Esconde todos os dropdowns
            });

            // Mostrar o dropdown do item clicado
            item.classList.add('active');
            if (item.querySelector('.dropdown')) {
                item.querySelector('.dropdown').style.display = 'block'; // Exibe o dropdown
            }
        }
    });
});

// Fechar o dropdown se clicar fora do menu
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.mobile-menu');
    if (!menu.contains(event.target)) {
        document.querySelectorAll('.navbar li').forEach(function(item) {
            item.classList.remove('active');
            item.querySelector('.dropdown').style.display = 'none'; // Esconde o dropdown
        });
    }
});

// Fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('show');
        hamburgerMenu.classList.remove('open');
    }
});





