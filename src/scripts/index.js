import {posts} from './database.js'
//Evento para o botão 'Abrir post' - para abrir o modal quando clicado
function handleModal() {
    const modalController = document.querySelector('.modal__controller');
    const buttonsPosts = document.querySelectorAll('.article__button-openPost');
  
    buttonsPosts.forEach(buttonOnlyPost => {
        buttonOnlyPost.addEventListener('click', function() {
            const post = posts.find(element =>{
                if (element.id == buttonOnlyPost.id) {
                    return true
                }
            })
            createModal(post)
            modalController.showModal();
            closeModal()
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


/*Evento de click nos botões de seguir*/
function followUser() {
    const buttonFollow = document.querySelectorAll('.suggestion__user-buttonFollow');

    buttonFollow.forEach((follow) => {
        follow.addEventListener('click', function() {
            if (this.classList.contains('suggestion__user-buttonFollow--active')) {
                this.classList.remove('suggestion__user-buttonFollow--active');
            } else {
                this.classList.add('suggestion__user-buttonFollow--active');
            }
        });
    });
}
followUser();


/*Evento de click para fechar o DIALOG quando a área de fora for clicada*/


/*Criando DIALOG*/
function createModal(post) {
    const modalController = document.querySelector('.modal__controller')
    modalController.innerHTML = ""

    //Criando os elementos do modal
    const modalContainer = document.createElement('div')
    const modalClose = document.createElement('span')
    const modalForm = document.createElement('form')
    const formUser = document.createElement('div')
    const formHeader = document.createElement('div')
    const formUserImage = document.createElement('img')
    const formUserData = document.createElement('div')
    const formUserName = document.createElement('h2')
    const formUserOccupation = document.createElement('p')
    const formUserTitlePost = document.createElement('h2')
    const formUserContentPost = document.createElement('p')


    //Adicionando as classes aos elementos
    modalContainer.classList.add('modal__container')

    modalClose.classList.add('modal__close')
    modalClose.textContent = "X"

    modalForm.classList.add('modal__form')
    formUser.classList.add('form__user')
    formHeader.classList.add('form__header')

    formUserImage.classList.add('form__user-image')
    formUserImage.innerHTML = ""
    formUserImage.src = post.img
    formUserImage.alt = post.user

    formUserData.classList.add('form__user-data')

    formUserName.classList.add('form__user-name')
    formUserName.innerHTML = ""
    formUserName.textContent = post.user

    formUserOccupation.classList.add('form__user-occupation')
    formUserOccupation.innerHTML = ""
    formUserOccupation.textContent = post.stack

    formUserTitlePost.classList.add('form__user-title-post')
    formUserTitlePost.innerHTML = ""
    formUserTitlePost.textContent = post.title

    formUserContentPost.classList.add('form__user-content-post')
    formUserContentPost.innerHTML = ""
    formUserContentPost.textContent = post.text


    //Adicionando a hierarquia dos elementos
    formUserData.append(formUserName, formUserOccupation)
    formHeader.append(formUserImage, formUserData);
    formUser.append(formHeader, formUserTitlePost, formUserContentPost);
    modalForm.appendChild(formUser);
    modalContainer.append(modalClose, modalForm);
    modalController.appendChild(modalContainer);
}