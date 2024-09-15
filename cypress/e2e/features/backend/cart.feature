            #language: pt
            Funcionalidade: API - Advantage Online Shopping - Carrinho

            Cenário: Obter os detalhes de um carrinho
            Dado API_AOS - Account - Autenticar Usuário "ADMIN"
            Quando API_AOS - Cart - Consultar itens do carrinho pelo idUsuario
            Então o status code da resposta deve ser "200"

            Cenario: Cadastrar um item no carrinho usando API
            Esquema do Cenário: Cadastrar um item no carrinho usando API
            Dado API_AOS - Account - Autenticar Usuário "ADMIN"
            Quando API_AOS - Cart - Cadastrar um item no carrinho com os seguintes dados
            | productId   | color   | hasWarranty   | quantity   |
            | <productId> | <color> | <hasWarranty> | <quantity> |
            Então o status code da resposta deve ser "200"

            Exemplos:
            | productId | color | hasWarranty | quantity |
            | 22        | WHITE | false       | 1        |
            | 22        | WHITE | false       | 1        |