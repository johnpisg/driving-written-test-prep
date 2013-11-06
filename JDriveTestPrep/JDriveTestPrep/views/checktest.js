
JDriveTestPrep.checktest = function (params) {
    
    var aVM = function (a) {
        var self = this;
        self.id = ko.observable(a.id);
        self.text = ko.observable(a.text);
    };
    var qVM = function (q) {
        var self = this;

        self.id = ko.observable(q.id);
        self.q = ko.observable(q.q);
        self.ranswer = ko.observable(q.ranswer);
        self.useranswer = ko.observable(q.useranswer);
        self.correctAnswer = ko.observable("hola");

        self.answers = ko.observableArray();

        var items = ko.utils.arrayMap(q.answers, function (item) {
            var a = new aVM(item);
            self.answers.push(a);
            return a;
        });

        self.correctAnswer(q.answers[q.ranswer - 1].text);
        //self.answers(items);
    };

    var viewModel = {
        message: ko.observable('Hey ' + params.name + ', the result for your test is:'),
        points: ko.observable('0 of 0'),
        arrayWrong: ko.observableArray([]),
        evaluateTest: function () {
            var total = JDriveTestPrep.app.randomQuestions().length;
            var count = 0;
            //var array = [];
            this.arrayWrong.removeAll();

            for (var i = 0; i < total ; i++) {
                if (JDriveTestPrep.app.randomQuestions()[i].ranswer
                    == JDriveTestPrep.app.randomQuestions()[i].useranswer) {
                    count++;
                }
                else {
                    //wrong
                    //this.arrayWrong.push(JDriveTestPrep.app.randomQuestions()[i]);
                    this.arrayWrong.push(new qVM(JDriveTestPrep.app.randomQuestions()[i]));
                }
            }

            var perc = Math.round((count * 1.0 / total * 1.0) * 100.0);
            this.points(count + " of " + total + " (" + perc + "%)");

            //viewModel.arrayWrong(ko.observableArray(array));
        },
        restart: function () {
            JDriveTestPrep.app.navigate("home");
        }
    };
    viewModel.evaluateTest();
    //viewModel.arrayWrong.removeAll();
    //viewModel.arrayWrong.push.apply(viewModel.arrayWrong, array);
    return viewModel;
};