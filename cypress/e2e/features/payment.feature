#language: pt
Funcionalidade: Pagamentos no Advantage Online Shopping

Cenário: Exibir login, cadastro e sumário de compra
Dado que tenho um produto no carrinho
Quando acesso a página de pagamento
Então deve ser exibido título, login, cadastro e sumário de compra

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produto
Dado que tenho um produto no carrinho
Quando acesso a página de pagamento
Então deve ser exibido na tela de pagamento o item adicionado ao carrinho
E deve ser exibido corretamente a quantidade e o preço do item

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produtos iguais
Dado que tenho dois produtos iguais no carrinho
Quando acesso a página de pagamento
Então deve ser exibido na tela de pagamento os dois itens adicionados ao carrinho
E deve ser exibido corretamente a quantidade e o preço de cada item
E deve ser respeitado o calcúlo do valor total da compra

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 2 produtos diferentes
Dado que tenho dois produtos diferentes no carrinho
Quando acesso a página de pagamento
Então deve ser exibido na tela de pagamento os dois itens adicionados ao carrinho
E deve ser exibido corretamente a quantidade e o preço de cada item
E deve ser respeitado o calcúlo do valor total da compra