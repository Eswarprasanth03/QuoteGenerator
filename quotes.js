let  button = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")
const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "Thomas Jefferson"
    },
    {
        quote: "The successful warrior is the average man, with laser-like focus.",
        person: "Bruce Lee"
    },
    {
        quote: "The best revenge is massive success.",
        person: "Frank Sinatra"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        person: "Zig Ziglar"
    },
    {
        quote: "Believe you can and you’re halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        person: "Vidal Sassoon"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Opportunities don't happen, you create them.",
        person: "Chris Grosser"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        person: "John D. Rockefeller"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        person: "Florence Nightingale"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        person: "Henry David Thoreau"
    },
    {
        quote: "The mind is everything. What you think you become.",
        person: "Buddha"
    },
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Whether you think you can or you think you can’t, you’re right.",
        person: "Henry Ford"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        person: "George Addair"
    },
    {
        quote: "Too many of us are not living our dreams because we are living our fears.",
        person: "Les Brown"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        person: "Stephen Covey"
    },
    {
        quote: "What you do speaks so loudly that I cannot hear what you say.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        person: "Amelia Earhart"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        person: "Tony Robbins"
    },
    {
        quote: "Dream big and dare to fail.",
        person: "Norman Vaughan"
    },
    {
        quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
        person: "Anonymous"
    },
    {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        person: "Sam Levenson"
    },
    {
        quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        person: "Walt Whitman"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        person: "Winston Churchill"
    },
    {
        quote: "Do what you can with all you have, wherever you are.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        person: "William James"
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        person: "Christian D. Larson"
    },
    {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        person: "Jordan Belfort"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        person: "Arthur Ashe"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Don’t let yesterday take up too much of today.",
        person: "Will Rogers"
    },
    {
        quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        person: "Og Mandino"
    },
    {
        quote: "It’s not whether you get knocked down, it’s whether you get up.",
        person: "Vince Lombardi"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        person: "Bo Bennett"
    }
];
button.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;



})