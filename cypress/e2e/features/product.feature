#language: pt
Funcionalidade: Produtos no Advantage Online Shopping

Contexto: Acessando a página de produtos
Dado que acesso a página do Advantage Online Shopping
E realizo a pesquisa		"HP CHROMEBOOK 14 G1(ES)"
E clico no item disponível nos resultados

# ----------------------- INÍCIO >> CARRINHO
Cenário: Exibir botão "ADD TO CART" na página de detalhes do produto
Então deve estar disponível o botão "ADD TO CART"

Cenário: Adicionar produto ao carrinho com sucesso
Quando clico no botão "ADD TO CART"
Então deve ser adicionado com sucesso o produto no carrinho
# ----------------------- FIM >> CARRINHO
