#language: pt
Funcionalidade: Produtos

Contexto: Acessando a página de produtos
Dado que acesso a página do Advantage Online Shopping como "USER"
E realizo a pesquisa "HP ROAR WIRELESS SPEAKER"
E clico no único produto "HP ROAR WIRELESS SPEAKER" disponível nos resultados

# ----------------------- INÍCIO >> CARRINHO
Cenário: Exibir botão "ADD TO CART" na página de detalhes do produto
Então deve estar disponível o botão ADD TO CART

Cenário: Adicionar produto ao carrinho com sucesso
Quando clico no botão ADD TO CART
Então deve ser informado no PopUp do carrinho o total igual a "$84.99"
# ----------------------- FIM >> CARRINHO
