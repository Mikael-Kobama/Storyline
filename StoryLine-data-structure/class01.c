#include <stdio.h>

int main()
{
  // Declarando as variáveis
  int a = 10; // Variável 'a' é inicializada com valor 10
  int b, c;   // 'b' e 'c' são declaradas, mas ainda não inicializadas

  // Imprimindo os endereços de memória e valores das variáveis antes de inicializar 'b' e 'c'
  // &a retorna o endereço de memória de 'a', enquanto a imprime o valor de 'a'
  // O mesmo vale para 'b' e 'c', mas esses ainda não têm valores atribuídos
  printf("&a  = %p, a = %d\n", &a, a);
  printf("&b  = %p, b = %d\n", &b, b);
  printf("&c  = %p, c = %d\n\n", &c, c);

  // Atribuindo valores para 'b' e 'c'
  b = 20;    // Atribuindo 20 para 'b'
  c = a + b; // Atribuindo a soma de 'a' e 'b' para 'c'

  // Imprimindo novamente os endereços de memória e os valores das variáveis após as atribuições
  // Agora, 'b' e 'c' terão valores definidos e a mudança será visível na saída
  printf("&a  = %p, a = %d\n", &a, a);
  printf("&b  = %p, b = %d\n", &b, b);
  printf("&c  = %p, c = %d\n\n", &c, c);

  // O programa termina aqui
  return 0;
}
