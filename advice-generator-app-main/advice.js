const quoteId = document.getElementById('quote-id');
const quoteText = document.getElementById('quote-text');
const btn = document.getElementById('btn');

const apiUrl = 'https://api.adviceslip.com/advice';

const getQuote = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;  
};

const renderAdvice = (adviceObj) => {
    const { id, advice } = adviceObj;
    quoteId.textContent = `ADVICE # ${id}`;
    quoteText.textContent = advice;
}

const newAdvice = async () => {
    const data = await getQuote();
    const advice = data.slip;

    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', newAdvice);
})