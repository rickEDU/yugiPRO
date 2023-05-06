# YugiPro!

## proposito:
Projeto com o intuito de ser ferramenta de estudos para aprofundar os conhecimentos sobre **Typescript** e **React**.
A ideia é ser um aplicativo parecido com o [Mobalytics.lor](https://app.mobalytics.gg/pt_br/lor) mas focado no jogo **Yu-gi-oh!**, em que o usuário pode se **cadastrar, criar decks, ver todas as cartas incluindo as cartas banidas e/ou as novas cartas, além de poder compartilhar os decks criados, e vericar o winrate de cada deck**.
### Autores:
| ATRIBUIÇÃO | DESCRIÇÃO |
| --------| ------- |
| ADM | Administrador do sistema.|
| USER | Usuário logado no sistema.|
| VISIT | Usuário visitante, não logado no sistema|

## Requisitos funcionais:

| REQUISITO | DESCRIÇÃO | AUTOR|
| --------- | --------- | ---- |
|RF01 - Cadastro do usuário | O usuário pode ou não se cadastrar no sistema, sem o cadastro ele não poderá criar decks, ou acessar alguns áreas do sistema.| ADM / USER
|RF02 - Atualizar cadastro do usuário | O sistema deve permitir que o usuário possa alterar seus dados no cadastro, como mudança de senha, email, username.| ADM / USER|
|RF03 - Visualizar informações do cadastro do usuário | O sistema deve permitir que o usuário ou o administrador veja as informações (id, username, email, plano) que estão presentes no cadastro do usuário, ele não poderá vê a senha.| ADM / USER|
|RF04 - Deletar cadastro do usuário | O sistema deve permitir que um usuário seja deletado, soft delete, mas só o administrador poderá efetuar essa deleção.| ADM |
|RF05 -  O usuário poderá criar decks | O sistema deve permitir aos usuários cadastrados a criação de decks que tenham entre 40 e 60 cartas. | USER|
| RF06 - Visialização de Decks| O sistema deve perimtir que o usuário visualize decks criados pela comunidade | ADM / USER / VISIT |
| RF07 - Edição de deck| O sistema deve permitir a edição de decks feitas pelo próprio usuário | USER |
| RF08 - Deleção de decks | O sistema deve permitir que o usuário delete qualquer um dos decks que ele tenha criado | USER|
| RF09 - Visualização das catas banidas | O sistema deve permitir que o usuário passa ver a lista de cartas banidas | ADM / USER / VISIT |
| RF10 - Filtro de cartas | O sistema deve conter um menu que exiba várias opções de filtro, para facilitar a busca feita por um usuário a uma carta. | ADM / USER / VISIT |
| RF11 - Filtro de decks |  O sistema deve conter um menu que exiba várias opções de filtro, para facilitar a busca feita por um usuário a um deck. | ADM / USER / VISIT |
| RF11 - Campo para pesquisa de cartas | O sistema deve conter um campo de pesquisa, para facilitar a busca por uma cartar. | ADM / USER / VISIT |
| RF12 - Tier List | O sistema deve conter um Tier List, onde será possível verificar os Tier dos decks, onde decks rank será exibido por rank S,A,B e C. | ADM / USER / VISIT |

## Requisitos não funcionais:
## Regras de negócio:

