
JDriveTestPrep.home = function () {
    var viewModel = {
        message: ko.observable('Setup your Test!'),
        name: ko.observable(''),
        time: ko.observable(30),
        questionNumber: ko.observable(20),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        start: function () {
            if (this.name().trim() == "") {
                DevExpress.ui.dialog.alert('Enter a name', 'Warning!');
            } else {
                JDriveTestPrep.app.navigate("greeting/" + this.name() + "/" + this.time() + "/" + this.questionNumber() + "/" + "1");
            }
        }
    };
    return viewModel;
};