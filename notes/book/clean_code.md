# This is short notes from clean code by Robert Martin


The only valid measurement of code quality: WTFs/Minute

[BOOK] Implementation Patterns
A Fragile Premise, good code matters

Why are programmer so slow?

-> Start first make a mess, team gets slower and slower as mess become bigger and bigger.

-> We go slow because we make messes, why do we make mess in the first place? the desire to go first.

code gets working is the half of the job, once the code works thats the time to clean it. No body does clean code first, it is just to hard to get code works. Once the code works its create mess, human does not think in straight line, our thinking is complex and not organized.

We need to clean after its working. It might need the same amount of time its take to write it.
But most people treat the works is done when it works.

Its a attitude to build, clean/refactoring just as important as getting code works.


The only way to go fast it to go well.

What is clean code?

clean code does one thing well.
the function should do one thing and one thing well.

[book] object-oriented software design with application
clean code is simple and direct, Clean code reads like well-written prose.
clean code looks like written by someone who cares. 

    what is your job?
    you may think that your job is to write code that works, but thats not your job, that only half of your job, more importantly thats least half of your job. least important part.
    more important part is to write in a such a way that other people can read/understand/maintain make works of the code.

### Professionalism 
Expectation

- We will not ship shit
  - should be clean well tested and organized

- We will always be ready
  - system should be ready (even if some feature is not ready)to deploy end of every sprint

- Stable Productivity

- Inexpensive Adaptability
  - cost of the change should be proportional to scope

- Continuous Improvement
  - codebase, architecture get better with time

- Fearless Competence
  - not been afraid of changing code
    
- Check-in a little better than before

Fragile test problem
Test is the part of the system and has to be design as part of the system.
Decouple the test.

Code coverage is not a goal, if it is treated as a goal engineer might right meaningless test to meet the goal.

- Will not dump on QA
    - We are not supposed to use qa to find bugs, QA should find nothing.
  
- How do you know QA is doing a good job?
  - Get complaint from End User
  - Regression(manual) testing time

- Nothing Fragile

- We will cover for each other.
  - If somebody is down somebody else need to cover the role.

- Pairing

  
- Honest Estimate
  - Define the shape what we don't know
  - Part Project evaluation
  - Give Estimate of three numbers, best case, nominal case, worst case.
  

Fundamental invariant of programming
Sequence, selection, iteration 

- Expect You to Say No
  - Say no when answer is no.
  - Expect you Will Be able to deal pressure


Test Driven Development

* You are not allowed to write any production code until you first written a test that fail because the production code does not exist.
* You are not allowed to write more of a test then is sufficient to fail.
* You are not allowed to write more of production code that is sufficient to pass the current test.

Mutation Test

Component level Test