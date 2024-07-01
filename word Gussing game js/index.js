var display_text = document.getElementById("display-text");
var word_hint = document.getElementById("word-hint");
var refresh_btn = document.getElementById("refresh-btn");
var check_btn = document.getElementById("check-btn");
var user_input = document.getElementById("user-input");
var time_text = document.getElementById("timer");
var correct_word;
var timer;

function timer_func(maxTime) {
    clearInterval(timer);
    timer = setInterval(function () {
        if (maxTime > 0) {
            maxTime--;
            time_text.innerText = maxTime + "s";
        } else {
            clearInterval(timer);
            alert("Time Off! The correct word was: " + correct_word);
            game();
        }
    }, 1000);
}

function game() {
    timer_func(30); 
    var words = [
        { word: "comfort", hint: "A pleasant feeling of relaxation" },
        { word: "tongue", hint: "The muscular organ of the mouth" },
        { word: "country", hint: "A politically identified region" },
        { word: "book", hint: "People read for knowledge" },
        { word: "group", hint: "A number of objects or persons" },
        { word: "nedle", hint: "A thin and sharp metal pin" },
        { word: "expert", hint: "Person with extensive knowledge" }

    ];

    var word_obj = words[Math.floor(Math.random() * words.length)];
    var shuffled_word = shuffleWord(word_obj.word);

    display_text.innerText = shuffled_word;
    word_hint.innerText = word_obj.hint;
    correct_word = word_obj.word.toLowerCase();
    user_input.value = "";
    user_input.setAttribute("maxlength", shuffled_word.length);
}

function shuffleWord(word) {
    var shuffled_array = word.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return shuffled_array;
}

function check_word() {
    var user_word = user_input.value.toLowerCase();
    if (user_word !== "") {
        if (user_word === correct_word) {
            alert("Congrats! " + user_word + " Is The Correct Word");
        } else {
            alert("Oops! " + user_word + " Is Not The Correct Word");
        }
        game();
    } else {
        alert("Input field is empty");
    }
}

refresh_btn.onclick = function () {
    game();
}

check_btn.onclick = function () {
    check_word();
}

// Initial game setup
game();
