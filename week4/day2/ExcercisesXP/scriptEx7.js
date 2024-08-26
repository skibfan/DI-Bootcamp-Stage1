const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
secretSociety = ''

for (i in names) {
    secretSociety += names[i][0]
}

console.log(secretSociety)