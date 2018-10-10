# https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

import string

def sherlockAndAnagrams(s):
    ALPHABET = string.ascii_lowercase
    signatures = {}

    # iterate over all substrings of s
    for start in range(len(s)):
        for finish in range(start, len(s)):
            # initialize substring signature
            signature = [0 for _ in ALPHABET]
            for letter in s[start:finish+1]:
                signature[ord(letter)-ord(ALPHABET[0])] += 1
            # tuples are hashable in contrast to lists
            signature = tuple(signature)
            signatures[signature] = signatures.get(signature, 0) + 1
    
    res = 0
    for count in signatures.values():
        res += count*(count-1)/2
    return res

# print(sherlockAndAnagrams('aa'))           #=> 1
print(sherlockAndAnagrams('abba'))       #=> 4
# print(sherlockAndAnagrams('abcd'))       #=> 0
# print(sherlockAndAnagrams('ifailuhkqq')) #=> 3
# print(sherlockAndAnagrams('kkkk'))       #=> 10
# print(sherlockAndAnagrams('cdcd'))       #=> 5