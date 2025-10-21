const { getInitials, createSlug } = require("../assets/js/snacks.js");

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
