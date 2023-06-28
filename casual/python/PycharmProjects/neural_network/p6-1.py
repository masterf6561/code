import numpy as np


layer_outputs = [[4.8, 1.21, 2.385], 
                 [8.9, -1.81, 0.2],
                 [1.41, 1.051, 0.026]] 

'''
E = 2.71828182846
exp_values = []
for output in layer_output:
    exp_values.append(E**output)

wird ersetzt durch:
'''
exp_values = np.exp(layer_outputs)

'''
norm_base = sum(exp_values)
norm_values = []

for value in exp_values: 
    norm_values.append(value / norm_base)
'''

norm_values = exp_values / np.sum(exp_values, axis=1, keepdims=True)

print(norm_values)
