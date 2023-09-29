# Awesome repo

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Domain:
numbers
digits
integer

Examples:
 
When User pass in 0 , function should return 1
When User pass in 9 , function should return 1
When User pass in 66 , function should return 2
When User pass in 100 , function should return 3
When User pass in 9999 , function should return 4
When User pass in 12345 , function should return 5
When User pass in 128685 , function should return 6
When User pass in 9876543210 , function should return 10
When User pass in 9007199254740991 , function should return 16

Story1: 1 digit numbers
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
- ✅ DONE UAT3.1: When I pass 100, then I should see 3
- ✅ DONE UAT3.2: When I pass 666, then I should see 3

Story4: 4+ digits number
- ⚠ TODO UAT4.1:  When I pass 9999, then I should see 4
- ⚠ TODO UAT4.2:  When I pass 12345, then I should see 5
- ⚠ TODO UAT4.3:  When I pass 128685, then I should see 6
- ⚠ TODO UAT4.4:  When I pass 9876543210, then I should see 10
- ⚠ TODO UAT4.5:  When I pass 9007199254740991, then I should see 16
