# Coding Exercise: stint Index Score Calculation

The stint Index is an assessment that gives an indication of how well a person is performing overall. It combines calmness, coping, happiness, alertness, energy, and apperance scores into a single index to give a picture of someone's overall performance.

The assessment consists of 18 questions (questions.csv), each of which falls into one of 6 categories. Each question can be answered with a value from 0 to 5, where 0 means "Never" and 5 means "Always".

Your task is to -- given a set of responses -- calculate:

1. The stint Index score, which is an average of all the responses. This is a percentage from 0 - 100.
2. A subscore for each of the 6 categories, which is an average of the responses for that category. This is also a percentage.

Some of the questions, denoted with a 'R', must be reverse-coded. For example if the response is 5, the reverse-coded answer would be 0.
