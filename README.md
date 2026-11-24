# Portfólio profissional — Semana 22

## Estrutura do projeto

- `index.html`: estrutura e conteúdo da página.
- `style.css`: aparência, cores, organização e responsividade.
- `script.js`: interações e consulta à API do GitHub.
- `assets/`: pasta reservada para imagens e outros recursos.

## Como visualizar

1. Extraia todos os arquivos do ZIP.
2. Abra a pasta `portfolio_semana22` no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador. Para testar a consulta à API, mantenha a conexão com a internet.
4. Digite um nome de usuário público do GitHub na seção "Meus repositórios".

## Recursos implementados

- Apresentação pessoal, trajetória, projetos, habilidades e contato.
- Layout responsivo para computador e celular.
- Alternância entre tema escuro e claro.
- Filtro dos projetos por categoria.
- Consulta à API pública do GitHub para exibir repositórios de um usuário.
- Mensagens para carregamento, usuário não encontrado e ausência de repositórios.

## Personalização antes da entrega

- No `index.html`, substitua `seuemail@exemplo.com` pelo e-mail que deseja divulgar.
- Atualize o link `https://github.com/` para o endereço do seu perfil.
- Revise os textos de apresentação, habilidades e projetos para refletir exatamente o que deseja apresentar.
- A pasta `assets` está preparada para receber imagens. Se adicionar imagens, utilize caminhos como `assets/minha-foto.jpg`.

## Versionamento com Git e GitHub

Exemplo de fluxo para organizar o trabalho:

1. Mantenha a branch principal (`main`) com a versão estável.
2. Crie uma branch para desenvolver a atividade:
   `git checkout -b desenvolvimento`
3. Faça alterações em etapas e registre commits com mensagens claras, por exemplo:
   - `git add .`
   - `git commit -m "Separa HTML CSS e JavaScript"`
   - `git commit -m "Adiciona consulta à API do GitHub"`
   - `git commit -m "Implementa filtro de projetos e tema"`
4. Envie a branch para o GitHub:
   `git push -u origin desenvolvimento`
5. No GitHub, abra um Pull Request da branch `desenvolvimento` para `main`.
6. Revise os arquivos e as alterações do Pull Request. Registre comentários ou ajustes, se necessário.
7. Depois da revisão, faça o merge do Pull Request.

> O Pull Request e o merge precisam ser realizados no repositório do GitHub. O arquivo ZIP contém o projeto organizado, mas não cria essas ações automaticamente.

## Observação

A consulta à API utiliza o endpoint público de repositórios do GitHub e não exige token para uma consulta simples. A API depende de conexão com a internet e possui limite de requisições.
