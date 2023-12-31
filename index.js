let names = ["david", "emma", "ayomiposi"]

for (i in names) {
    console.log(names[i]);
}

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (i of names) {
    console.log(i);
}