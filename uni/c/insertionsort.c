#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void swap(int A[], int i, int j){
    int n = A[i];
    A[i] = A[j];
    A[j] = n;
}

void inserti(int A[], int i){
    for(int j = i; j > 0; j--){
        if(A[j] > A[j-1]){
            swap(A, j, j-1);
        }
    }
}

void insertion_sort(int A[], int n){
    for(int x = 0; x < n; x++){
        inserti(A, x);
    }
}

int main(){
    char line[256];
    printf("Eingabe: ");
    fgets(line, sizeof(line), stdin);
    char *token;
    token = strtok(line, " ");  
    int A[16];
    int n = 0;
    while(token != NULL){
        A[n++] = atoi(token);
        token = strtok(NULL, " ");
    }
    insertion_sort(A, n);
    for(int i=n; i>0; --i){
        printf("%i ", A[i]);
    }
    printf("\n");
    return 0;

}