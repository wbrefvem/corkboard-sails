import json
import csv


f = open('se_data.csv', 'rU+')
j = open('se_data.json', 'w')

reader = csv.DictReader(f)

fixtures = []
for row in reader:
    fixtures.append(row)

json.dump(fixtures, j, indent=4)

f.close()
j.close()
