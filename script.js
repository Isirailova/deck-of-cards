const localDeckId = localStorage.getItem("deckId");

const getDeckId = async () => {
    if(!localDeckId){
        const request = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        const data = await request.json();

        localDeckId = data.deck_id;
        localStorage.setItem('deckId', localDeckId);
    }

    return localDeckId;
}

const drawCards = async (count) =>{
    const deckId = await getDeckId();
    const request = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
    const data = await request.json();

    return data;
}