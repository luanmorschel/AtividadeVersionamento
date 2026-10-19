O projeto simula o checkout de uma loja virtual em JavaScript, num único arquivo chamado checkout.js. Ele calcula o subtotal do carrinho, conta os itens, aplica cupons de desconto (DESC10, DESC20 e FRETEGRATIS) e finaliza a compra, devolvendo subtotal, desconto e total. O código é dividido em seções, e cada desenvolvedor cuida de uma.

Estrutura de pastas: o repositório é simples e tem 4 arquivos, o checkout.js, com o código das quatro seções, o README.md, com a documentação e o git.ignore.

Como executar: com o Node.js instalado, basta abrir o terminal na pasta do projeto e rodar node checkout.js. Também dá para colar o conteúdo do arquivo no console do navegador. Nos dois casos, o resultado esperado do teste é { subtotal: 690, desconto: 69, total: 621 }.

Fluxo de branches: a main guarda a versão final, e só recebe códigos já testados. A develop é a branch de junção, onde as partes de cada desenvolvedor se encontram. As branches feature/* são criadas uma para cada necessidade, como a feature/carrinho-laco e a feature/validacao-cupom. O código segue das feature/* para a develop e dela para a main.

Como o Git teria evitado o incidente: no incidente, dois desenvolvedores editaram o checkout direto, um sobrescreveu o trabalho do outro e não havia histórico para reverter. Com o Git, cada um trabalharia na sua branch, e todas as alterações ficariam registradas em commits que poderiam ser desfeitos. Se os dois mexessem no mesmo trecho, o Git marcaria o conflito e exigiria que a equipe escolhesse a versão certa. Evitando assim os certos problemas.