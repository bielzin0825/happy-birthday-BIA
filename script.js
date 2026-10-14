/* ========================================
   SITE DE PRESENTE - JAVASCRIPT
   ======================================== */

// ========================================
// 1. CONTADOR DE CORAÇÕES
// ========================================

let heartCount = localStorage.getItem('heartCount') || 0;
const heartButton = document.getElementById('heartButton');
const heartCountDisplay = document.getElementById('heartCount');

// Atualizar o contador ao carregar a página
updateHeartCount();

// Adicionar evento de clique ao botão de coração
heartButton.addEventListener('click', function(event) {
    heartCount++;
    localStorage.setItem('heartCount', heartCount);
    updateHeartCount();
    
    // Criar animação de coração flutuante
    createFloatingHeart(event);
});

function updateHeartCount() {
    heartCountDisplay.textContent = heartCount;
}

// Criar corações flutuantes ao clicar
function createFloatingHeart(event) {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 1.5s ease-out forwards';
    
    document.body.appendChild(heart);
    
    // Remover o elemento após a animação
    setTimeout(() => heart.remove(), 1500);
}

// Adicionar animação de coração flutuante ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// 2. DATA DINÂMICA NO RODAPÉ
// ========================================

const footerDate = document.getElementById('footerDate');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('pt-BR', options);
footerDate.textContent = `Criado em ${formattedDate}`;

// ========================================
// 3. EFEITO DE SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// 4. EFEITO DE PARALLAX NAS FOTOS
// ========================================

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        // Criar um efeito sutil de parallax
        const offset = scrollPosition * 0.5;
        item.style.transform = `translateY(${offset * (index % 2 === 0 ? 1 : -1) * 0.1}px)`;
    });
});

// ========================================
// 5. ANIMAÇÃO DE ENTRADA AO CARREGAR
// ========================================

window.addEventListener('load', function() {
    console.log('🎁 Site de Presente carregado com sucesso!');
    console.log('💡 Dica: Edite o arquivo index.html para adicionar suas fotos e mensagens');
});

// ========================================
// 6. INTERATIVIDADE COM TECLADO
// ========================================

document.addEventListener('keydown', function(event) {
    // Pressionar 'H' para enviar um coração
    if (event.key.toLowerCase() === 'h') {
        heartButton.click();
    }
});

// ========================================
// 7. DETECÇÃO DE PREFERÊNCIA DE TEMA
// ========================================

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 Modo escuro detectado (opcional: implemente tema escuro)');
}

// ========================================
// INSTRUÇÕES DE EDIÇÃO
// ========================================

console.log(`
╔════════════════════════════════════════════════════════════════╗
║         🎁 SITE DE PRESENTE - INSTRUÇÕES DE EDIÇÃO            ║
╚════════════════════════════════════════════════════════════════╝

📝 PARA EDITAR A MENSAGEM:
   1. Abra o arquivo 'index.html'
   2. Procure por: <!-- EDITE AQUI: Coloque sua mensagem personalizada -->
   3. Altere o texto dentro de <p class="message-text" id="messageText">

📸 PARA ADICIONAR FOTOS:
   1. Abra o arquivo 'index.html'
   2. Procure por: <!-- EDITE AQUI: Adicione as URLs das suas fotos -->
   3. Substitua as URLs das fotos (links que começam com https://)
   4. Você pode usar:
      - Links do Google Drive
      - Links do Imgur
      - Links de qualquer site de imagens
      - URLs de fotos da internet

🎨 PARA ALTERAR CORES:
   1. Abra o arquivo 'styles.css'
   2. Procure por: :root { --primary-color: ...
   3. Altere os valores das cores (use códigos HEX como #FF6B9D)

❤️  FUNCIONALIDADES EXTRAS:
   - Clique no coração para contar quantos corações você enviou
   - Pressione 'H' no teclado para enviar um coração
   - As fotos têm efeito de zoom ao passar o mouse
   - O site é responsivo e funciona em celulares

💾 SALVE SUAS ALTERAÇÕES E ABRA O ARQUIVO index.html NO NAVEGADOR!
`);