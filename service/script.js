function IkkitaHarf(str) {
  let bormi = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log(str[i]);
        bormi = true;
      }
    }
  }
  if (!bormi) {
    console.log(null);
  }
}
IkkitaHarf("javascript");
IkkitaHarf("Python");
