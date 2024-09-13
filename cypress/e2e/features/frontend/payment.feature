#language: pt
Funcionalidade: Pagamentos

Contexto: Inserir ao menos um produto no carrinho
Dado que acesso a página do Advantage Online Shopping como "USER"
E adiciono ao carrinho o produto "HP ROAR WIRELESS SPEAKER"

Cenário: Exibir login, cadastro e sumário de compra
Quando clico no ícone do carrinho
E acesso a página de pagamento
Então deve ser exibido título, login, cadastro e sumário de compra

# Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produto
# E adiciono ao carrinho o produto "HP ROAR WIRELESS SPEAKER"
# Quando acesso a página de pagamento
# Então deve ser exibido na tela de pagamento o item adicionado ao carrinho
# E deve ser exibido corretamente a quantidade e o preço do item

# Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 1 produtos iguais
# Dado que tenho dois produtos iguais no carrinho
# Quando acesso a página de pagamento
# Então deve ser exibido na tela de pagamento os dois itens adicionados ao carrinho
# E deve ser exibido corretamente a quantidade e o preço de cada item
# E deve ser respeitado o calcúlo do valor total da compra

# Cenário: Calcular e exibir o valor total da compra na tela de pagamento - 2 produtos diferentes
# Dado que tenho dois produtos diferentes no carrinho
# Quando acesso a página de pagamento
# Então deve ser exibido na tela de pagamento os dois itens adicionados ao carrinho
# E deve ser exibido corretamente a quantidade e o preço de cada item
# E deve ser respeitado o calcúlo do valor total da compra