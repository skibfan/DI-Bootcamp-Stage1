import json, os
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

my_data = json.loads(sampleJson)

salary = my_data["company"]["employee"]["payable"]["salary"]
print(salary)

my_data["company"]["employee"]["payable"]["birth_date"] = "01.12.1923"

script_dir = os.path.dirname(__file__)
json_file = os.path.join(script_dir, "sample.json")

# json_file = "sample.json"

with open(json_file, 'w') as js_f:
    json.dump(my_data, js_f)