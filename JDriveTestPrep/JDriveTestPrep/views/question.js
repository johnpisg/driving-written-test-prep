

JDriveTestPrep.question = function (params) {
    var nq = params.qnumber;
    var viewModel = {
        number: ko.observable(0),
        id: ko.observable(0),
        q: ko.observable(""),
        answers: ko.observableArray([]),
        useranswer: 0,
        ranswer: 0,
        nextQuestion: function () {
            //continue
        },
        onAnswerClick: function (itemData) {
            
        }
    };

    if (nq > 0) {
        viewModel = {
            number: ko.observable(params.qnumber),
            id: ko.observable(JDriveTestPrep.app.randomQuestions()[params.qnumber - 1].id),
            q: ko.observable(JDriveTestPrep.app.randomQuestions()[params.qnumber - 1].q),
            answers: ko.observableArray(JDriveTestPrep.app.randomQuestions()[params.qnumber - 1].answers),
            useranswer: JDriveTestPrep.app.randomQuestions()[params.qnumber - 1].useranswer,
            ranswer: JDriveTestPrep.app.randomQuestions()[params.qnumber - 1].ranswer,
            nextQuestion: function () {
                //continue
                if (viewModel.useranswer == "" || viewModel.useranswer == 0) {
                    DevExpress.ui.dialog.alert('Choose an answer first.', 'Warning!');
                } else {
                    var nextNumber = parseInt(params.qnumber) + 1;
                    console.log(nextNumber);
                    console.log(JDriveTestPrep.app.randomQuestions().length);
                    if (nextNumber <= JDriveTestPrep.app.randomQuestions().length) {
                        //navigate 
                        JDriveTestPrep.app.navigate("question/" + params.name + "/" + params.time + "/" + params.questions + "/" + nextNumber);
                    } else {
                        var result = DevExpress.ui.dialog.confirm('You have finished. Do you want to evaluate your answers now?', 'Question!');
                        result.done(function (dialogResult) {
                            console.log(dialogResult ? "Confirmed" : "Canceled");
                        });
                        
                    }
                }
            },
            onAnswerClick: function (itemData) {
                if (itemData.checkedState()) {
                    viewModel.useranswer = itemData.id;
                    for (var i = 0; i < viewModel.answers().length; i++) {
                        if (itemData.id != viewModel.answers()[i].id && viewModel.answers()[i].checkedState())
                            viewModel.answers()[i].checkedState(false);
                    }
                }
                else
                    viewModel.useranswer = 0;
            }
        };

        var length = viewModel.answers().length;
        for (var i = 0; i < length; i++) {
            viewModel.answers()[i].checkedState = ko.observable(false);
        }
    }

    return viewModel;
};