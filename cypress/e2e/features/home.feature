            #language: pt
            Funcionalidade: HomePage

            Cenario: Acesso A Página Advantage Online Shopping
            Dado que acesso a página do Advantage Online Shopping
            Então a página inicial deve conter as categorias
            E deve ser exibido o texto "SPECIAL OFFER"

            # ----------------------- INÍCIO >> CAMPO DE PESQUISA
            Cenário: Exibir campo de pesquisa no cabeçalho dentro da página Home
            Dado que acesso a página do Advantage Online Shopping
            Então deve ser visível no cabeçalho o campo de pesquisa

            Cenário: Exibir sugestões ao digitar no campo de pesquisa
            Dado que acesso a página do Advantage Online Shopping
            Quando realizo a pesquisa		"G1"
            Então deve ser exibido um pop-up de produtos com o trecho "G1"

            Cenário: Clicar em um produto sugerido leva à página de detalhes
            Dado que acesso a página do Advantage Online Shopping
            Quando realizo a pesquisa		"HP CHROMEBOOK 14 G1(ES)"
            E clico no item disponível nos resultados
            Então devo ser redirecionado para a página de detalhes do produto

            Esquema do Cenário: Exibir campo de pesquisa no cabeçalho fora da página Home
            Dado que acesso a página do Advantage Online Shopping
            Quando acesso página da categoria <categorias>
            Então deve ser visível no cabeçalho o campo de pesquisa
            Exemplos:
            | categorias   |
            | "SPEAKERS"   |
            | "TABLETS"    |
            | "LAPTOPS"    |
            | "MICES"      |
            | "HEADPHONES" |
# ----------------------- FIM >> CAMPO DE PESQUISA
