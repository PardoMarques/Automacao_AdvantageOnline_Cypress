            #language: pt
            Funcionalidade: API - Advantage Online Shopping - Carrinho

            Cenário: Obter os detalhes de um carrinho
            Dado API_AOS - Account - Autenticar Usuário
            Quando API_AOS - Cart - Consultar itens do carrinho pelo idCarrinho  "531397054"
            Então o status code da resposta deve ser "200"

            Cenario: Atualizar um item no carrinho usando API
            Esquema do Cenário: Atualizar um item no carrinho usando API
            Dado API_AOS - Account - Autenticar Usuário
            Quando API_AOS - Cart - Atualizar um item no carrinho com os seguintes dados:
            | cartId   | productId   | newColor   | quantity   |
            | <cartId> | <productId> | <newColor> | <quantity> |
            Então o status code da resposta deve ser "200"

            Exemplos:
            | cartId    | productId | newColor | quantity |
            | 123456789 | 987654321 | blue     | 1        |
            | 987654321 | 123456789 | red      | 2        |