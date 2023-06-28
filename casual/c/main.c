#include <stdio.h>


void counting(int number){
  for(int i = 0; i<= number; i++){
    printf("%d\n", i);
  }
  if(number != 0){
    printf("Number is higher than 0\n");
  }
}

int main(){
    printf("hello world \n");
    for(int i = 0; i<=10; ++i){
        printf("%d\n", i);
    }
    counting(13);
    return 0;
}
