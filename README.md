

## Performando Apps ReactJS Rocketseat

 ##
 O React. memo. evita as renderizações desnecessárias, de forma resumida, ele 'memoriza' um componente e só renderiza-o caso ele tenha alguma propriedade ou estado alterado. Ou seja, é retirada a regra de ter que ser renderizado novamente devido a alterações no componente pai.

##
O useMemo utiliza uma técnica já conhecida chamada memoization , que consiste em guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros).

Quando usar =>
* Calculos pesados
* Igualdade referencial (Quando a gente passa referencia para o componente filho)

##
O useCallback é um Hook adicional, mas há um motivo para ele existir. Esse Hook é utilizado para melhorar o desempenho do aplicativo, evitando renderizações e processamentos desnecessários.

##
Empacotamento (Bundling)
A maioria das aplicações React serão “empacotadas” usando ferramentas como Webpack, Rollup ou Browserify. Empacotamento (Bundling) é o processo onde vários arquivos importados são unidos em um único arquivo: um “pacote” (bundle). Este pacote pode ser incluído em uma página web para carregar uma aplicação toda de uma vez.

