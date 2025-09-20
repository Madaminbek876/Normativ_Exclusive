function ikitataHarf(str) {
  let bormi = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log("Ikkita bir hil harf bu =", str[i]);
        bormi = true;
      }
    }
  }
  if (!bormi) {
    console.log(null);
  }
}
ikitataHarf("Javascript");
ikitataHarf("Frontend");
ikitataHarf("Python");
