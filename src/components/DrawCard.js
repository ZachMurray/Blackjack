import * as React from 'react';
import Button from '@mui/material/Button';

async function newFunction() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    // fetch("https://deckofcardsapi.com/api/deck/j149q8w30l8i/draw/?count=1", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error(error));
    const response = await fetch("https://deckofcardsapi.com/api/deck/j149q8w30l8i/draw/?count=1", requestOptions);
    return await response.json();
}

export default function DrawCard() {
    newFunction();
    return (
        <Button>Draw Card</Button>
    );
}