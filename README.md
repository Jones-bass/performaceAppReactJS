

## Performando Apps ReactJS Rocketseat

 ##
 O React. memo. evita as renderizações desnecessárias, de forma resumida, ele 'memoriza' um componente e só renderiza-o caso ele tenha alguma propriedade ou estado alterado. Ou seja, é retirada a regra de ter que ser renderizado novamente devido a alterações no componente pai.

##
O useMemo utiliza uma técnica já conhecida chamada memoization , que consiste em guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros).

uando usar =>
* Calculos pesados
* Igualdade referencial (Quando a gente passa referencia para o componente filho)

##
O useCallback é um Hook adicional, mas há um motivo para ele existir. Esse Hook é utilizado para melhorar o desempenho do aplicativo, evitando renderizações e processamentos desnecessários.