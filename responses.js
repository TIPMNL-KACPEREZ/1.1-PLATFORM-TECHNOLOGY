function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "let's play") {
        return "Okay!";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissor") {
        return "rock";

    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
        //song
    } else if (input == "sing a song") {
        return "Never gonna give you up, never gonna let you down Never gonna run around and desert you";

        //what are you doing
    } else if (input == "what are you doing") {
        return "talking to you";

           //what is your favorite food
    } else if (input == "what is your favorite food") {
        return "battery";

         //tell a joke
    } else if (input == "tell me a joke") {
        return "How does the ocean say hello?";

        //tell a joke2
    } else if (input == "how") {
        return "It Waves. hahaha";

    } else {
        return "Try asking something else!";
    }
    
}