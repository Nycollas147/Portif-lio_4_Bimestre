// Interações do portfólio

// Atualiza automaticamente o ano do rodapé.
document.getElementById("year").textContent = new Date().getFullYear();

// Alternância entre tema escuro e claro.
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  const temaClaroAtivo = document.body.classList.contains("light-theme");
  themeIcon.textContent = temaClaroAtivo ? "☾" : "☀";
  themeToggle.setAttribute(
    "aria-label",
    temaClaroAtivo ? "Ativar tema escuro" : "Ativar tema claro"
  );
});

// Filtro dos projetos: todos, desenvolvimento web ou acadêmicos.
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project");
const filterFeedback = document.getElementById("filterFeedback");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filtro = button.dataset.filter;
    let quantidadeVisivel = 0;

    filterButtons.forEach(function (item) {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    projectCards.forEach(function (card) {
      const deveMostrar = filtro === "todos" || card.dataset.category === filtro;
      card.hidden = !deveMostrar;

      if (deveMostrar) {
        quantidadeVisivel++;
      }
    });

    filterFeedback.textContent = quantidadeVisivel + " projeto(s) exibido(s).";
  });
});

// Consulta à API pública do GitHub para listar repositórios de um usuário.
const githubForm = document.getElementById("githubForm");
const githubUserInput = document.getElementById("githubUser");
const githubButton = document.getElementById("githubButton");
const apiMessage = document.getElementById("apiMessage");
const repoList = document.getElementById("repoList");

githubForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const usuario = githubUserInput.value.trim();

  if (usuario === "") {
    apiMessage.textContent = "Digite um nome de usuário do GitHub.";
    return;
  }

  repoList.innerHTML = "";
  apiMessage.textContent = "Carregando repositórios...";
  githubButton.disabled = true;
  githubButton.textContent = "Buscando...";

  try {
    const resposta = await fetch(
      "https://api.github.com/users/" + encodeURIComponent(usuario) + "/repos?sort=updated&per_page=6"
    );

    if (!resposta.ok) {
      if (resposta.status === 404) {
        throw new Error("Usuário não encontrado. Confira se o nome foi digitado corretamente.");
      }
      if (resposta.status === 403) {
        throw new Error("Limite de consultas da API atingido. Tente novamente mais tarde.");
      }
      throw new Error("Não foi possível consultar o GitHub agora.");
    }

    const repositorios = await resposta.json();

    if (repositorios.length === 0) {
      apiMessage.textContent = "Esse usuário não possui repositórios públicos.";
      return;
    }

    apiMessage.textContent = "Foram encontrados " + repositorios.length + " repositório(s) público(s).";

    repositorios.forEach(function (repositorio) {
      const card = document.createElement("article");
      card.className = "repo-card";

      const titulo = document.createElement("h3");
      titulo.textContent = repositorio.name;

      const descricao = document.createElement("p");
      descricao.textContent = repositorio.description || "Este repositório não possui descrição.";

      const link = document.createElement("a");
      link.href = repositorio.html_url;
      link.textContent = "Ver no GitHub";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const meta = document.createElement("div");
      meta.className = "repo-meta";

      const linguagem = document.createElement("span");
      linguagem.textContent = "Linguagem: " + (repositorio.language || "Não informada");

      const estrelas = document.createElement("span");
      estrelas.textContent = "★ " + repositorio.stargazers_count;

      meta.appendChild(linguagem);
      meta.appendChild(estrelas);
      card.appendChild(titulo);
      card.appendChild(descricao);
      card.appendChild(meta);
      card.appendChild(document.createElement("br"));
      card.appendChild(link);
      repoList.appendChild(card);
    });
  } catch (erro) {
    apiMessage.textContent = erro.message + " Verifique sua conexão com a internet.";
  } finally {
    githubButton.disabled = false;
    githubButton.textContent = "Buscar";
  }
});
