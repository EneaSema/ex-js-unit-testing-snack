const { getInitials, createSlug, average } = require("../assets/js/snacks.js");

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Enea Sema")).toBe("E.S.");
  expect(getInitials("aurora sema")).toBe("A.S.");
  expect(getInitials("Lupo  Nero")).toBe("L.N.");
});

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("ENEA")).toBe("enea");
  expect(createSlug("LUPO")).toBe("lupo");
});

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3])).toBe(2);
});
