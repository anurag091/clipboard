# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
it was nicely written but removed couole of ambiguity and extra added cyclomatic complexity. I ahve also added test cases for each possible line and branches.

Here is the exolanation on few changes I did int he function.

1. Simplified the unnecessary if wrapped with event, it was adding extra cyclomatic complexity.

2. Changed else to else if block because it looked like event can be string as well

3. Removed if (candidate) check Since candidate is initially set to TRIVIAL_PARTITION_KEY and it was also adding some cyclomatic complexity. If we don't pass event it will just return TRIVIAL_PARTITION_KEY value.

4. Initialized candidate with TRIVIAL_PARTITION_KEY, because the code was doing the same thing after multiple checks in else condition.

5. Also The typeof check is moved outside of the if (candidate) condition to ensure consistent behavior

