#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int* getProperDivisors(int number, int* divisorCount) {
    int *divisors = malloc(number * sizeof(int));
    if (!divisors) {
        return NULL;
    }

    int index = 0;
    for (int i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            divisors[index] = i;
            index++;
        }
    }
    *divisorCount = index;
    return divisors;
}

int sumOfProperDivisors(int number) {
    int divisorCount;
    int *divisors = getProperDivisors(number, &divisorCount);
    int sum = 0;

    if (divisors) {
        for (int i = 0; i < divisorCount; i++) {
            sum += divisors[i];
        }
        free(divisors);
    }

    return sum;
}

int main(void) {
    int number = 1;
    while (1) {
        int sum = sumOfProperDivisors(number);
        if (sum == number) {
            // Get current time
            time_t currentTime;
            time(&currentTime);

            // Convert the time to a string
            char timeString[100]; // Adjust the array size as needed
            strftime(timeString, sizeof(timeString), "%Y-%m-%d %H:%M:%S", localtime(&currentTime));

            // Print the perfect number with timestamp
            printf("[%s] Perfect Number: %d\n", timeString, number);
        }
        number++;
    }

    return 0;
}

