const localDeckId = localStorage.getItem("deckId");

const getDeckCard = async () => {
  if (!localDeckId) {
    const res = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );

    const data = await res.json();
    localDeckId = data.deckId;
    localStorage.setItem("deckId", localDeckId);
  }
  return localDeckId;
};

const drawCards = async () => {
  let deckId = await getDeckCard();
};
