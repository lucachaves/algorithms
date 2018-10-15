# https://www.urionlinejudge.com.br/judge/en/problems/view/2356

while True:
    try:
        dna = input()
        resistance = input()
        isResistance = 'Resistente' if dna.find(resistance) > -1 else 'Nao resistente'
        print(isResistance)
    except (EOFError):
        break
