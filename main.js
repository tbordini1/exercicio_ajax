// Adiciona um event listener que aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos HTML pelo ID, onde os dados do usuário serão exibidos
    const nameElement = document.querySelector('#name');           // Elemento onde o nome do usuário será exibido
    const usernameElement = document.querySelector('#username');   // Elemento onde o nome de usuário (login) será exibido
    const avatarElement = document.querySelector('#avatar');       // Elemento onde o avatar do usuário será exibido
    const reposElement = document.querySelector('#repos');         // Elemento onde o número de repositórios será exibido
    const followersElement = document.querySelector('#followers'); // Elemento onde o número de seguidores será exibido
    const followingElement = document.querySelector('#following'); // Elemento onde o número de seguidos será exibido
    const linkElement = document.querySelector('#link');           // Elemento onde o link para o perfil GitHub será exibido

    // Faz uma requisição à API do GitHub para obter os dados do usuário
    fetch('https://api.github.com/users/tbordini1')
        .then(function(res) {
            return res.json(); // Converte a resposta da API para o formato JSON
        })
        .then(function(json) {
            // Preenche os elementos da página com os dados obtidos da API
            nameElement.innerText = json.name;             // Exibe o nome do usuário
            usernameElement.innerText = json.login;        // Exibe o nome de usuário (login)
            avatarElement.src = json.avatar_url;           // Exibe a imagem do avatar
            reposElement.innerText = json.public_repos;    // Exibe o número de repositórios públicos
            followersElement.innerText = json.followers;   // Exibe o número de seguidores
            followingElement.innerText = json.following;   // Exibe o número de pessoas que o usuário segue
            linkElement.href = json.html_url;              // Define o link para o perfil do GitHub
        })
        .catch(function(error) {
            // Exibe uma mensagem de erro no console caso ocorra algum problema na requisição
            console.log('Ocorreu um erro:', error);
        });
});
