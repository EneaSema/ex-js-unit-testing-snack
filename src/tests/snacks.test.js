const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("../assets/js/snacks.js");

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
  expect(createSlug("Titolo Molto Bello")).toBe("titolo-molto-bello");
});

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([1, 2, 3])).toBe(2);
});

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Titolo molto bello")).toBe("titolo-molto-bello");
});

// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome(`otto`)).toBeTruthy();
  expect(isPalindrome(`lupo`)).toBeFalsy();
});

// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlug("")).toThrow("Titolo vuoto o non valido");
  expect(() => createSlug(null)).toThrow("Titolo vuoto o non valido");
});

// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

test(`La funzione findPostById restituisce il post corretto dato l’array di post e l’id`, () => {
  const posts = [
    {
      id: 0,
      title: "title10",
      slug: "slug1",
    },
    {
      id: 1,
      title: "title 20",
      slug: "slug-2",
    },
    {
      id: 2,
      title: "title-30",
      slug: "slug 3",
    },
  ];
  expect(findPostById(posts, 1)).toEqual({
    id: 1,
    title: "title 20",
    slug: "slug-2",
  });
  expect(() => findPostById(posts, `ciao`)).toThrow(
    `Errore di ricerca! La parola "ciao" non è un id valido`
  );
  expect(() => findPostById([6, 9], `ciao`)).toThrow(
    `Errore di ricerca! L'array posts non è nel formsto corretto`
  );
  expect(findPostById(posts, 4)).toBe(null);
});
