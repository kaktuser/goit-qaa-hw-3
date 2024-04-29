const logElement = document.getElementById("log");

logElement.setAttribute("style", "white-space: pre;");

console.log(`Zadanie 1:`);
logElement.textContent = "Zadanie 1:\r\n";

const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`Owoc w komórce nr ${i} to: ${fruits[i]}`);
  logElement.textContent += `Owoc w komórce nr ${i} to: ${fruits[i]}\r\n`;
}

console.log(`Zadanie 2:`);
logElement.textContent = logElement.textContent + "\r\nZadanie 2:\r\n";

const numbers = [5, 1, 4, 6, 8, 0, 2, 3, 9, 7];

const wyznacznik = 5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > wyznacznik) {
    console.log(`Liczba większa niż ${wyznacznik}: ${numbers[i]}`);
    logElement.textContent += `Liczba większa niż ${wyznacznik}: ${numbers[i]}\r\n`;
  }
}
