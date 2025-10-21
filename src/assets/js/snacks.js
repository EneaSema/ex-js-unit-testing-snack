// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== ``);

  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(stringa) {
  if (!stringa) {
    throw new Error("Titolo vuoto o non valido");
  }
  return stringa.toLowerCase().replaceAll(" ", "-");
}

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

function average(numbers) {
  return (
    numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / numbers.length
  );
}

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test", lavorato sulla funzione dello snack 2

// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

function isPalindrome(parola) {
  const parolaInverse = parola.trim().split(``).reverse().join(``);
  return parola.trim() === parolaInverse;
}

//  ALTRA SOLUZIONE TROVATA CON IL MIO RAGIONAMENTO ED AIUTO DI GEMINI
// function isPalindrome(parola) {
//   for (let i = 0; i < Math.floor(parola.length / 2); i++) {
//     let currentChar = parola[i];
//     if (currentChar !== parola[parola.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`${id} non è un id`);
  }
  posts.array.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error(
        `Errore di ricerca! L'array posts non è nel formsto corretto`
      );
    }
  });
  return posts.find((p) => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
