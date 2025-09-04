---
title: Understanding Gradient Descent in Machine Learning
published: 2025-09-04
description: 'Learn the fundamentals of Gradient Descent, one of the most important optimization algorithms in machine learning. This blog explains the core concept, types of gradient descent, and walks you through a hands-on Python example with linear regression. Perfect for beginners and enthusiasts who want to understand how machine learning models are trained and optimized.'
image: ''
tags: ['Programming', 'Machine Learning']
category: 'Programming'
draft: false 
lang: 'en'
---

Gradient Descent is one of the most fundamental optimization algorithms used in machine learning and deep learning. It plays a critical role in training models by minimizing the cost (or loss) function. In this blog post, we will explore how gradient descent works and implement a simple example in Python.

---

## What is Gradient Descent?

Gradient Descent is an iterative optimization algorithm used to find the minimum of a function. In the context of machine learning, the function is typically a loss function, which measures how far off the model’s predictions are from the actual values.
The basic idea is:

1. Initialize the model parameters randomly.
2. Compute the gradient (partial derivatives) of the loss function with respect to the parameters.
3. Update the parameters by moving them in the direction opposite to the gradient.
4. Repeat until the loss converges to a minimum.

---

## Types of Gradient Descent

- **Batch Gradient Descent**: Uses the entire dataset to compute the gradient before each update.
- **Stochastic Gradient Descent** (SGD): Updates parameters for each training example individually.
- **Mini-batch Gradient Descent**: A compromise that updates parameters using small random subsets of the dataset.

---

## Example: Linear Regression with Gradient Descent

We will implement a simple linear regression using gradient descent to understand the process.

### Step 1: Import Libraries

```python
import numpy as np
import matplotlib.pyplot as plt
```

### Step 2: Generate Sample Data

```python
# Generate random data
def generate_data(n=100):
    X = np.linspace(0, 10, n)
    y = 2.5 * X + np.random.randn(n) * 2 # y = 2.5x + noise
    return X, y

X, y = generate_data()
```

### Step 3: Implement Gradient Descent

```python
def gradient_descent(X, y, lr=0.01, epochs=1000):
    m, b = 0.0, 0.0 # initial parameters
    n = len(X)
    for _ in range(epochs):
        y_pred = m * X + b
        # Compute gradients
        dm = (-2/n) * sum(X * (y - y_pred))
        db = (-2/n) * sum(y - y_pred)
        # Update parameters
        m -= lr * dm
        b -= lr * db
    return m, b


m, b = gradient_descent(X, y)
print(f"Learned parameters: m={m:.2f}, b={b:.2f}")
```

### Step 4: Visualize the Result

```python
plt.scatter(X, y, label="Data")
plt.plot(X, m * X + b, color="red", label="Fitted Line")
plt.legend()
plt.show()
```

---

## Conclusion

Gradient Descent is a powerful and versatile algorithm for optimization in machine learning. Although our example used linear regression, the same principle applies to training neural networks, logistic regression, and many other models.

The choice of the learning rate is crucial: too small, and the algorithm will be slow; too large, and it might overshoot the minimum.

Mastering gradient descent is a key step toward understanding how machine learning models are trained and optimized.
