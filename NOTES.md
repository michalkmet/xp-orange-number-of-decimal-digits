# Notes

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ DONE Plan for pomodoro 1
- ✅ DONE initial refactor
- ✅ DONE create user stories , include examples
- Story1: 1 digit numbers
As a user, I want to see number of digits (1 digit)
- ✅ DONE UAT1.1: When I pass 0, then I should see 1
- ✅ DONE UAT1.2: When I pass 1, then I should see 1
- ✅ DONE UAT1.3: When I pass 9, then I should see 1

Story2: 2 digits numbers
As a user, I want to see number of digits (2 digits)
- ✅ DONE UAT2.1: When I pass 11, then I should see 2
- ✅ DONE UAT2.2: When I pass 66, then I should see 2

Story3: 3 digits numbers
As a user, I want to see number of digits (3 digits)
- 🚧 IN PROGRESS UAT3.1: When I pass 100, then I should see 3
- ⚠ TODO UAT3.2: When I pass 666, then I should see 3

Pomodoro 2:

Story3: 3 digits numbers
As a user, I want to see number of digits (3 digits)
- ✅ DONE UAT3.1: When I pass 100, then I should see 3
- ✅ DONE UAT3.2: When I pass 666, then I should see 3
- 
- Story4: 4+ digits number
- ✅ DONE UAT4.1:  When I pass 9999, then I should see 4
- ✅ DONE UAT4.2:  When I pass 12345, then I should see 5
- ✅ DONE UAT4.3:  When I pass 128685, then I should see 6
- ✅ DONE UAT4.4:  When I pass 9876543210, then I should see 10
- ✅ DONE UAT4.5:  When I pass 9007199254740991, then I should see 16