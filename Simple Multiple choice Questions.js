var questions = [
    {
        prompt: "What is the color of the sky?\n(a) Blue\n(b) Red\n (c) White\n (d) Indigo",
        answer: "a"
    },
    {
        prompt: " How often should we brush our teeth?\n(a) Once a day\n(b) Twice a day\n (c) Thrice a day\n(d) After every meal",
        answer: "d"
    },
    {
        prompt: "What was the gender of the first president of the Philipines?\n(a) Male\n(b) Female",
        answer: "b"
    }, 
    {
        prompt: "What color are bananas?\n(a) Yellow\n(b) Black\n(c) Magenta\n(d) Green",
        answer: "a"
    },
    {
        prompt: "What is the color of strawberries?\n(a) Yellow\n(b)Strawberry\n(c) Green\n(d) Red",
        answer: "b"
    }

];
var score = 0;
for (i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response== questions[i].answer) {
        score++;
        alert("correct");
    } else {
        alert("Wrong Choice")
    };

}
alert("You got " + score++ + "/" + questions.length)
