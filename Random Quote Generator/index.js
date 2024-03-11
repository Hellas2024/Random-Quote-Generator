const quotes = [
    "Speed is key, less you see.",
    "A piece of wood is nothing more than what its used for.",
    "Eye for an eye, may be as just as one can be.",
    "What is to live without a story in mind.",
    "He saw nothing; only that which pertained to him.",
    "Save now, enjoy with one eye closed later.",
    "If you want to be happy, you can't let things outside of your control dissuade you.",
    "Show me who a man walks with, I'll tell you who he is."
]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
   if(usedIndexes.size >= quotes.length) {
    usedIndexes.clear()
   }
   
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}   