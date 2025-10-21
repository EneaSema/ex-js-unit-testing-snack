// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ");

  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

module.exports = { getInitials };
