//Evento para o botão 'Abrir post' - para abrir o modal quando clicado
function handleModal() {
    const modalController = document.querySelector('.modal__controller');
    const buttonsPosts = document.querySelectorAll('.article__button-openPost');
  
    buttonsPosts.forEach(buttonOnlyPost => {
        buttonOnlyPost.addEventListener('click', function() {
          modalController.showModal();
        })
    })
}
handleModal()


//Evento para o 'botão' X - para fechar o modal quando clicado
function closeModal() {
    const modalController = document.querySelector('.modal__controller');
    const buttonClose = document.querySelector('.modal__close');

    buttonClose.addEventListener('click', function() {
        modalController.close();
    })
}
closeModal()


//Evento para o 'botão' do like - para que quando clicado, o coração mude para a cor vermelha
//Evento para que quando o 'botão' do like seja clicado, o número de curtidas aumente +1, caso contrário -1
function colorLike() {
    const likeButtons = document.querySelectorAll('.article__likes-number');
    const hearts = document.querySelectorAll('.article__like-post');
    const likeCounts = document.querySelectorAll('.article__numberLikes-post');

    likeButtons.forEach((clickLike, allHearts) => {
        clickLike.addEventListener('click', function() {
            const heart = hearts[allHearts];
            const likeCount = likeCounts[allHearts];
            const currentSrc = heart.getAttribute('src');
            const currentAlt = heart.getAttribute('alt');
            let currentLikes = parseInt(likeCount.textContent)

        
            if (currentSrc === './src/assets/img/gray-heart.svg' && currentAlt === "Empty Heart(Post not liked)") {
                heart.setAttribute('src', './src/assets/img/red-heart.svg');
                heart.setAttribute('alt', "Full Heart(Post liked)");
                currentLikes++;
            } else {
                heart.setAttribute('src', './src/assets/img/gray-heart.svg');
                heart.setAttribute('alt', "Empty Heart(Post not liked)");
                currentLikes--;
            }
            likeCount.textContent = currentLikes
        });
    });    
}
colorLike();


/*Evento de click para fechar o DIALOG quando a área de fora for clicada*/
function myModal() {
    
}