#language: pt
Funcionalidade: Login no Advantage Online Shopping

Cenario: Acesso A Página Advantage Online Shopping
Dado que acesso a página do Advantage Online Shopping
Então deve ser exibido o texto "SPECIAL OFFER"

Cenario: Autenticação Válida
Dado que acesso a página do Advantage Online Shopping
Quando realizo o login com sucesso
Então deve ser exibido no campo do usuário o nome "SPECIAL OFFER"