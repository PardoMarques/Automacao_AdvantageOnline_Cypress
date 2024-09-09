#language: pt
Funcionalidade: Pagamentos no Advantage Online Shopping

Cenário: Exibir login, cadastro e sumário de compra
Dado que tenho um produto no carrinho
Quando acesso a página de pagamento
Então deve exibir título, login, cadastro e sumário de compra

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produto
Dado que tenho um produto no carrinho
Quando acesso a página de pagamento
Então o item adicionado ao carrinho deve ser exibido na tela de pagamento
E a quantidade e o preço do item deve ser exibido corretamente

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produtos iguais
Dado que tenho dois produtos iguais no carrinho
Quando acesso a página de pagamento
Então os dois itens adicionados ao carrinho devem ser exibidos na tela de pagamento
E a quantidade e o preço de cada item devem ser exibidos corretamente
E o calcúlo do valor total da compra deve ser respeitado

Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 2 produtos diferentes
Dado que tenho dois produtos diferentes no carrinho
Quando acesso a página de pagamento
Então os dois itens adicionados ao carrinho devem ser exibidos na tela de pagamento
E a quantidade e o preço de cada item devem ser exibidos corretamente
E o calcúlo do valor total da compra deve ser respeitado