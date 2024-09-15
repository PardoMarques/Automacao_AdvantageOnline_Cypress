            #language: pt
            Funcionalidade: API - Advantage Online Shopping - Carrinho

            # Cenário: Obter os detalhes de um carrinho
            # Dado API_AOS - Account - Autenticar Usuário "ADMIN"
            # Quando API_AOS - Cart - Consultar itens do carrinho pelo idUsuario
            # Então o status code da resposta deve ser "200"

            Cenario: Atualizar um item no carrinho usando API
            Esquema do Cenário: Atualizar um item no carrinho usando API
            Dado API_AOS - Account - Autenticar Usuário "ADMIN"
            Quando API_AOS - Cart - Cadastrar um item no carrinho com os seguintes dados
            | productId   | color      | hasWarranty   | quantity   |
            | <productId> | <newColor> | <hasWarranty> | <quantity> |
            Então o status code da resposta deve ser "200"

            Exemplos:
            | productId | color | hasWarranty | quantity |
            | 22        | BLUE  | true        | 1        |
# | 22        | BLACK    | 2        |