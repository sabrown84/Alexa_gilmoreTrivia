/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
   1     "Who speaks the first line of the series?": [
            "Lorelai",
            "Sookie",
            "Luke",
            "Rory",
            "Logan"
        ]
    },
    {
    2    "Which journalist does Rory idolize?": [
            "Christiane Amanpour",
            "Lane",
            "Nancy Drew",
            "Steven King"
        ]
    },
    {
    3    "Which major character was scripted as a woman?": [
            "Luke",
            "Kirk",
            "Taylor Dosey",
            "Michel"
        ]
    },
    {
    4    "Who from Glee appears as a nurse in Season 1?": [
            "Jane Lynch",
            "Lea Michele",
            "Chris Colfer",
            "Naya Rivera"
        ]
    },
    {
    5    "Which character hates coffee in real life?": [
            "Rory",
            "Emily Gilmore",
            "Lorelai",
            "Dean"
        ]
    },
    {
     6   "What singer does the Gilmore Girls theme song?": [
            "Carole King",
            "The Spice Girls",
            "N Sync",
            "Trey Songz"
        ]
    },
    {
    7    "What is the name of Babette's cat that dies in Season 1?": [
            "Cinnamon",
            "Li-lou",
            "Mary Jane",
            "Kenny"
        ]
    },
    {
     8   "What's the population of Stars Hollow?": [
            "Nine thousand nine hundred seventy-three",
            "four hundred sixty-four",
            "Seventeen thousand three hundred fourty",
            "one hundred"
        ]
    },
    {
     9   "Who was specifically written a part?": [
            "Liza Weil",
            "Tristen",
            "Lane",
            "Sookie"
        ]
    },
    {
    10    "Which actress appeared in Dirty Dancing?": [
            "Kelly Bishop",
            "Kirk",
            "Marjorie Houseman",
            "Alexis Bledel"
        ]
    },
    {
     11   "What did Rory shoplift after she kissed Dean?": [
            "Cornstarch",
            "Flour",
            "Milk",
            "Grapes"
        ]
    },
    {
     12   "What band is Hep Alien's guitarist, Gil, a member of?": [
            "Skid Row",
            "Rolling Stones",
            "One Republic",
            "Blink 182"
        ]
    },
    {
    13    "Who was Richard Gilmore engaged to before Emily?": [
            "Pennilyn Lot",
            "Mrs. Kim",
            "Drella",
            "An Elf"
        ]
    },
    {
     14   "Who has the last line in the series?": [
            "Rory",
            "Lorelai",
            "Luke",
            "Sookie"
        ]
    },
    {
    15    "What is the name of the secret society at Chilton?": [
            "The Puffs",
            "The Gremlins",
            "The Candles",
            "The Pops"
        ]
    },
    {
     16   "What was Luke's nickname at Stars Hollow High?": [
            "Butch",
            "Frosty",
            "Burl",
            "Snowy"
        ]
    },
    {
     17   "What town is Stars Hollow based on?": [
            "Washington Depot, Connecticut",
            "New York, New York",
            "Windsor, Connecticut",
            "Atlanta, Georgia"
        ]
    },
    {
     18   "What day of the year is Luke's dark day?": [
            "November thirtieth",
            "June third",
            "May nineth",
            "May twentieth"
        ]
    },
    {
     19   "What does Lorelai have to borrow constantly?": [
            "A pen",
            "Coffee Cup",
            "Napkin",
            "Jeans"
        ]
    },
    {
     20   "How long did Rory and Jess date in real life?": [
            "three and a half years",
            "one year",
            "two years",
            "five years"
        ]
    },
    {
     21   "In what year did Lorelai and Luke get together?": [
            "Season four",
            "Season two",
            "Season three",
            "Season six"
        ]
    },
    {
     22   "What Season is Rory Dating Jess?": [
            "Season 3",
            "Season 6",
            "Season 4",
            "Season 1"
        ]
    },
    {
      23  "Who did Lorelai almost marry in Season 2?": [
            "Max",
            "Christopher",
            "Luke",
            "Jason"
        ]
    },
    {
      24  "Who is Rory's Father?": [
            "Christopher",
            "Richard",
            "Jason",
            "Luke"
        ]
    },
    {
       25 "When does Rory start dating Logan?": [
            "Season 5",
            "Season 4",
            "Season 6",
            "Season 7"
        ]
    },
    {
      26  "What animal does Lorelai have": [
            "Dog",
            "Cat",
            "Rabbit",
            "Fish"
        ]
    },
    {
     27   "Who is Sookie married to?": [
            "Jackson",
            "Kirk",
            "Richard",
            "Lorelai"
        ]
    },
    {
     28   "What store was it before it was Luke's Diner?": [
            "Hardware Store",
            "Ice Cream Store",
            "Make-Up Store",
            "Movie theatre"
        ]
    },
    {
     29   "What Inn did Lorelai and Sookie work at first?": [
            "Independence Inn",
            "Dragonfly Inn",
            "The Shoemaker",
            "Rampant Mate Inn"
        ]
    },
    {
     30   "who is the chef working in the Independence Inn?": [
            "Sookie",
            "Jackson",
            "Luke",
            "Sharon"
        ]
    },
    {
       31 "What store does Taylor have?": [
            "Grocery Store",
            "Diner",
            "Pizza Parlor",
            "Gas Station"
        ]
    },
    {
      32  "Who are Lorelai's parents?": [
            "Emily and Richard",
            "Rory and Logan",
            "Christopher and Sherry",
            "Logan and Finn"
        ]
    },
    {
     33   "What day is the dinner that Lorelai and Rory have to go to every week?": [
            "Friday",
            "Wednesday",
            "Thursday",
            "Sunday"
        ]
    },
    {
     34   "Who built a car for Rory?": [
            "Dean",
            "Jess",
            "Doyle",
            "Logan"
        ]
    },
    {
     35   "Where does Rory go to college in season 5?": [
            "Yale",
            "Harvard",
            "Princton",
            "Columbia"
        ]
    },
    {
     36   "What wedding did Lorelai and Luke dance at?": [
            "Liz's",
            "Luke's",
            "Max's",
            "Rory's"
        ]
    },  
    {
       37 "Who is Liz?": [
            "Luke's Sister",
            "Jackson's Sister,
            "Christorpher's sister",
            "Emily's sister"
        ]
    },
    {
      38  "Where did Jess go when Luke kicked him out?": [
            "California",
            "New York",
            "Floriday",
            "Colorado"
        ]
    },
    {
     39   "What is Sookie and Jackson's first baby named?": [
            "Davey",
            "Paul Anka",
            "Jordan",
            "George"
        ]
    },
    {
     40   "When Lane lived with her mother, where did she hide her CD's?": [
            "Under the floor boards",
            "Behind a chair",
            "In the marriage jug",
            "At Rory's house"
        ]
    },
    {
     41   "What instrument does Lane play in her band?": [
            "Drums",
            "Guitar",
            "Trumpet",
            "Piano"
        ]
    },
    {
     42   "Who broke Lorelai and Luke up, then got them back together?": [
            "Emily",
            "Christopher",
            "Logan",
            "Richard"
        ]
    },
    {
       43 "Who is the best man in Richard and Emily's wedding?": [
            "Rory",
            "Luke",
            "Christopher",
            "Lorelai"
        ]
    },
    {
      44  "Who did Lorelai call at her bachelorette party, before the wedding to Max?": [
            "Christopher",
            "Max",
            "Emily",
            "Jackson"
        ]
    },
    {
     45   "Who called Rory, 'Mary' when she first started at Chilton Academy?": [
            "Tristan",
            "Kirk",
            "Dean",
            "Jess"
        ]
    },
    {
     46   "Who was Luke married to?": [
            "Nicole",
            "Ms. Patty",
            "Babette",
            "Lorelai"
        ]
    },
    {
     47   "How many roommates did Rory have during her first year at Yale?": [
            "four",
            "two",
            "three",
            "one"
        ]
    },
    {
     48   "Why did Lorelai break up with Jason?": [
            "He sued her dad",
            "He got drunk",
            "He cheated on her",
            "He threatened her"
        ]
    },
    {
       49 "Why did Dean's wife throw him out?": [
            "He had sex with Rory",
            "He got drunk",
            "He quit his job",
            "He got her pregnant"
        ]
    },
    {
      50  "When was Gilmore Girls placed on the air in the U.S.?": [
            "Two thousand",
            "Two thousand two",
            "Nineteen Ninety-nine",
            "Two thousand one"
        ]
    },
    {
     51   "Before Rory chose to go to Yale, what college did she want to attend?": [
            "Harvard",
            "Princton",
            "Duke",
            "Columbia"
        ]
    },
    {
     52   "What was Luke's wife's job?": [
            "Lawyer",
            "doctor",
            "housewife",
            "mail carrier"
        ]
    },
    {
     53   "When Lane decides to rebel and dye her hair, what color did she choose?": [
            "purple",
            "pink",
            "green",
            "blonde"
        ]
    },
    {
     54   "Who does Emily invite to the wedding to distract Lorelai from Luke?": [
            "Christopher",
            "Max Medina",
            "Alex",
            "Jason Stiles"
        ]
    },
    {
       55 "Who is Dean's wife?": [
            "Lindsay",
            "Riley",
            "Rory",
            "Katie"
        ]
    },
    {
      56  "What is Paris' first boyfriend's name?": [
            "Jamie",
            "Max",
            "Asher",
            "Tristan"
        ]
    },
    {
     57   "Who gets burned by the cheese from Lorelai's birthday pizza during the test run?": [
            "Kirk",
            "Luke",
            "Rory",
            "Dean"
        ]
    },
    {
     58   "Who is Rory's first boyfriend?": [
            "Dean",
            "Jess",
            "Logan",
            "Tristan"
        ]
    },
    {
     59   "Who is Jess?": [
            "Luke's Nephew",
            "Lorelai's Cousin",
            "Luke's Son",
            "Sookie's Nephew"
        ]
    },
    {
     60   "Jess got at girlfriend, what was her name?": [
            "Shane",
            "Andy",
            "Lane",
            "Andrea"
        ]
    },
    {
       61 "What age was Lorelai when she had Rory?": [
            "Sixteen",
            "twenty-one",
            "thirteen",
            "twenty-four"
        ]
    },
    {
      62  "Who is Rory's enemy at Chilton?": [
            "Paris",
            "Nicky",
            "Madaline",
            "Ashley"
        ]
    },
    {
     63   "Who does yearly repairs on Lorelai's house?": [
            "Luke",
            "Richard",
            "Dan",
            "Mike"
        ]
    },
    {
     64   "What time was Rory born?": [
            "Four o three a.m.",
            "six o three a.m.",
            "ten o three a.m.",
            "two o three a.m."
        ]
    },
    {
     65   "What is Rory's middle name?": [
            "Leigh",
            "Emily",
            "Ann",
            "Mary"
        ]
    },
    {
     66   "How many generations of Gellar's have gone to Harvard?": [
            "ten",
            "five",
            "six",
            "twelve"
        ]
    },
    {
       67 "What kind of computer did Rory get for her birthday?": [
            "Apple",
            "Dell",
            "Sony",
            "Gateway"
        ]
    },
    {
      68  "What was the name of the line of skincare products Kirk was selling?": [
            "Hay There",
            "Grassy Knolls",
            "Silky Smooth",
            "Dove"
        ]
    },
    {
     69   "Who does Paris lose her virginity to?": [
            "Jamie",
            "Doyle",
            "Alestar",
            "Jess"
        ]
    },
    {
     70   "What does the nickname Gigi stand for?": [
            "Georgia",
            "Girl",
            "Georgette",
            "Giselle"
        ]
    },
    {
     71   "Where does Lorelai escape to during the spa weekend with her mother?": [
            "the quiet room",
            "the panic room",
            "the safe room",
            "the singles room"
        ]
    },
    {
     72   "Who tells Zach to burn in hell at the magazine stand?": [
            "Mrs. Kim",
            "Lane",
            "Lorelai",
            "Luke"
        ]
    }
    {
       73 "What makes Lorelai think she might be pregnant again?": [
            "An Apple",
            "weight gain",
            "an orange",
            "a banana"
        ]
    },
    {
      74  "What grade did Max give Rory on her first paper?": [
            "D",
            "A",
            "B"
        ]
    },
    {
     75   "Where do Rory and Dean breakup?": [
            "Dance marathon",
            "At her house",
            "at luke's",
            "at Doose's"
        ]
    },
    {
     78   "Who did Rory go to Finn's birthday party with?": [
            "Robert",
            "Collin",
            "Logan",
            "Jess"
        ]
    },
    {
     79   "How many yellow daisies did Max send to Lorelai when he asked her to marry him?": [
            "one thousand",
            "one hundred",
            "three thousand",
            "ten"
        ]
    },
    {
     80   "Why did Lorelai have to use her emergency card during the dance marathon?": [
            "Her shoe broke",
            "Her dress ripped",
            "She had to use the bathroom",
            "She needed a hug"
        ]
    },
    {
       81 "Where does Logan take everyone for Valentine's Day?": [
            "Martha's Vinyard",
            "Europe",
            "Italy",
            "London"
        ]
    },
    {
      82  "What is the name of the Secret Society Logan belongs to?": [
            "The Life and Death Brigade",
            "The Skulls",
            "Kappa Alpha Psi",
            "Phi Kappa Psi"
        ]
    },
    {
     83   "When is Rory's birthdate?": [
            "October eighth",
            "May first ",
            "June twenty-third",
            "October fourteenth"
        ]
    },
    {
     84   "What did Paris inherit from Asher Flemming?": [
            "A Printing Press",
            "A Canon of Novels",
            "Money",
            "His Biography"
        ]
    },
    {
     85   "What famous author kept ordering iced tea at the Dragonfly Inn?": [
            "Norman Mailer",
            "Steven King",
            "Nancy Drew",
            "Little Kim"
        ]
    },
    {
     86   "What band does Rory go see with her mom, Sookie, Paris, Louise, and Madeline?": [
            "The Bangles",
            "The Cardigans",
            "The Cranberries",
            "A.C.D.C."
        ]
    },
    {
       87 "What is Luke's annual 'dark day'?": [
            "The anniversary of his father's death",
            "His ex-girlfriend's birthday",
            "The anniversary of his divorce",
            "The anniversary of his high school graduation"
        ]
    },
    {
      88  "What's Jackson's cousin's name who goes on a double date with Lorelai?": [
            "Rune",
            "Ryan",
            "Roland",
            "Rand"
        ]
    },
    {
     89   "What does Rory steal and get arrested for?": [
            "Stealing a boat",
            "Cereal from the Yale cafeteria",
            "Drugs from the pharmacy",
            "A watch"
        ]
    },
    {
     90   "How does Jess get a black eye?": [
            "A swan",
            "Fought with Dean",
            "Playing softball",
            "He fell"
        ]
    },
    {
     91   "What does Rory receive from Logan before he leaves for London?": [
            "A model rocket",
            "A Birkin bag",
            "A plane ticket",
            "A new job"
        ]
    },
    {
     92   "What is Luke's daughter's name?": [
            "April",
            "Summer",
            "Autumn",
            "Hannah"
        ]
    },
    {
       93 "How many Lorelai's are/were there in the show?": [
            "three",
            "two",
            "one",
            "five"
        ]
    },
    {
      94  "When was Stars Hollow founded?": [
            "Seventeen seventy-nine",
            "Eighteen seventy-seven",
            "two thousand fourteen",
            "nineteen ninety-three "
        ]
    },
    {
     95   "What's April's mother's name?": [
            "Rachel",
            "Sookie",
            "Georgia",
            "Nicole"
        ]
    },
    {
     96   "Where do Emily and Richard live?": [
            "Hartford",
            "Windsor",
            "Boston",
            "New york"
        ]
    },
    {
     97   "Who does Paris run into in speed dating?": [
            "Doyle",
            "Colin",
            "Finn",
            "Glen"
        ]
    },
    {
     98   "How much money does Lorelai ask Luke for as a loan for the Dragonfly?": [
            "thirty thousand dollars",
            "ten thousand dollars",
            "five thousand dollars",
            "four hundred dollars"
        ]
    },
    {
       99 "What is Christopher's last name?": [
            "Hayden",
            "Gerard",
            "Porter",
            "Brown"
        ]
    },
    {
      100  "Who was the first to know that Luke and Lorelai kissed?": [
            "Kirk",
            "Sookie",
            "Jackson",
            "Emily"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

