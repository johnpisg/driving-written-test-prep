
JDriveTestPrep.checktest = function (params) {
    var viewModel = {
        message: ko.observable('Hey ' + params.name + ', the result for your test is:'),
        points: ko.observable('0 of 0'),
        evaluateTest: function () {
            var total = JDriveTestPrep.app.randomQuestions().length;
            var count = 0;
            for (var i = 0; i < total ; i++) {
                if (JDriveTestPrep.app.randomQuestions()[i].ranswer
                    == JDriveTestPrep.app.randomQuestions()[i].useranswer) {
                    count++;
                }
            }
            var perc = Math.round((count * 1.0 / total * 1.0) * 100.0);
            viewModel.points(count + " of " + total + " (" + perc + "%)");
        },
        restart: function () {
            JDriveTestPrep.app.navigate("home");
        }
    };
    viewModel.evaluateTest();
    return viewModel;
};