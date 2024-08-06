brand = {
    "name": "Zara" ,
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"], 
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": { 
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
    }
}
# 3
brand["number_stores"] = 2 
# 4
clients = ", ".join(brand["major_color"].keys()) + "!"
print("Zara's clients are such countries as {}".format(clients))
# 5
brand["country_creation"] = "Spain"
# 6
if "international_competitors" in brand: 
    brand["international_competitors"].append("Desigual")
# 7
del brand["creation_date"]
# 8
print(brand["international_competitors"][-1])
# 9
colors = ""
for i in brand["major_color"]["US"]:
    colors += i
    if i == brand["major_color"]["US"][-1]:
        colors += "!"
    else: 
        colors += ", "

print(colors)
# 10
print(len(brand))
# 11
for i in brand.keys():
    if i != list(brand)[-1]: 
        print(i, end=", ")
    else: 
        print(i)
# 12
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
# 13
brand = {**brand, **more_on_zara}
# 14
print(brand["number_stores"])