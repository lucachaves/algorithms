# https://www.hackerrank.com/challenges/separate-the-numbers/problem

def separateTheNumbers(s):
    for slice in range(1, int(len(s)/2+1)):
        firstSlice = s[0:slice]
        number = int(firstSlice)
        sequence = firstSlice
        while len(sequence) < len(s):
            number += 1
            sequence += str(number)
        if sequence == s:
            return "YES "+firstSlice
    return 'NO'

print(separateTheNumbers('1234'))   #=> YES 1
print(separateTheNumbers('91011'))  #=> YES 9
print(separateTheNumbers('99100'))  #=> YES 99
print(separateTheNumbers('101103')) #=> NO
print(separateTheNumbers('010203')) #=> NO
print(separateTheNumbers('13'))     #=> NO
print(separateTheNumbers('1'))      #=> NO
print(separateTheNumbers('2'))      #=> NO
print(separateTheNumbers('33'))     #=> NO
print(separateTheNumbers('4445'))   #=> YES 44
print(separateTheNumbers('8889'))   #=> YES 88
print(separateTheNumbers('8910'))   #=> YES 8
print(separateTheNumbers('90071992547409929007199254740993')) #=> YES 9007199254740992
print(separateTheNumbers('45035996273704964503599627370497')) #=> YES 4503599627370496
print(separateTheNumbers('22517998136852482251799813685249')) #=> YES 2251799813685248
print(separateTheNumbers('11258999068426241125899906842625')) #=> YES 1125899906842624
print(separateTheNumbers('562949953421312562949953421313'))   #=> YES 562949953421312
print(separateTheNumbers('90071992547409928007199254740993')) #=> NO
print(separateTheNumbers('45035996273704963503599627370497')) #=> NO
print(separateTheNumbers('22517998136852481251799813685249')) #=> NO
print(separateTheNumbers('11258999068426240125899906842625')) #=> NO
print(separateTheNumbers('562949953421312462949953421313'))   #=> NO
