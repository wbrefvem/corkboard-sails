import json


f = open('se_data.json', 'r')
j = open('etype_choices.json', 'w')

fixtures = json.load(f)

choices = []

for fixture in fixtures:

    types = fixture["Event Type: (Select all that apply)"].split(';')

    for t in types:
        t = t.strip()
        if t not in choices:
            choices.append(t)

json.dump(choices, j, indent=4)

f.close()
j.close()
