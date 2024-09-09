#language: pt
Funcionalidade: Produtos no Advantage Online Shopping

Contexto: Acessando a página de produtos
Dado que acesso a página do Advantage Online Shopping
E realizo a pesquisa		"HP CHROMEBOOK 14 G1(ES)"
E clico no item disponível nos resultados

# ----------------------- INÍCIO >> CARRINHO
Cenário: Exibir botão "ADD TO CART" na página de detalhes do produto
Então o botão "ADD TO CART" deve estar disponível

Cenário: Adicionar produto ao carrinho com sucesso
Quando clico no botão "ADD TO CART"
Então o produto é adicionado ao carrinho com sucesso
# ----------------------- FIM >> CARRINHO

# o produto deve ser adicionado ao carrinho
# uma modal de confirmação deve aparecer temporariamente
# o número de itens no ícone do carrinho deve ser atualizado em tempo real