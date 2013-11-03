JDriveTestPrep.greeting = function (params) {
    var viewModel = {
        message: ko.observable('Hello ' + params.name + ', wait while the test is generated please.'),
        generateTest: function () {
            JDriveTestPrep.app.randomQuestions.removeAll();
            console.log(JDriveTestPrep.app.randomQuestions().length);

            JDriveTestPrep.app.randomQuestions.push(
                {
                    id: 1,
                    q: "Who is Jhon?",
                    answers: [
                        { id: 1, text: "The world's best!" },
                        { id: 2, text: "The world's worst!" },
                        { id: 3, text: "The longboarder!" },
                        { id: 4, text: "The developer!" }
                    ],
                    useranswer: 0,
                    ranswer: 4
                });

            JDriveTestPrep.app.randomQuestions.push(
                {
                    id: 2,
                    q: "Where is Jhon from?",
                    answers: [
                        { id: 1, text: "Trinidad!" },
                        { id: 2, text: "Peru!" },
                        { id: 3, text: "Argentina" },
                        { id: 4, text: "USA" }
                    ],
                    useranswer: 0,
                    ranswer: 2
                });

            JDriveTestPrep.app.randomQuestions.push(
                {
                    id: 3,
                    q: "Where does Jhon work?",
                    answers: [
                        { id: 1, text: "Trinidad!" },
                        { id: 2, text: "Peru!" },
                        { id: 3, text: "Argentina" },
                        { id: 4, text: "USA" }
                    ],
                    useranswer: 0,
                    ranswer: 1
                });
            console.log(JDriveTestPrep.app.randomQuestions().length);
            //navigate 
            JDriveTestPrep.app.navigate("question/" + params.name + "/" + params.time + "/" + params.questions + "/" + "1");
        }
    };
    viewModel.generateTest();
    return viewModel;
};