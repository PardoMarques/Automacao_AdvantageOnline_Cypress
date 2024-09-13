#language: pt
Funcionalidade: API - Advantage Online Shopping - Carrinho

Cenario: Autenticação Válidaa
Dado Dado que acesso a página do Advantage Online Shopping como "ADMIN"
E adiciono ao carrinho o produto "HP PAVILION 15Z LAPTOP"
Então API_AOS - get_user_cart - deve conter detalhes do produto inserido