
JDriveTestPrep.home = function () {
    var viewModel = {
        message: ko.observable('Setup your Test!'),
        name: ko.observable(''),
        time: ko.observable(30),
        questionNumber: ko.observable(5),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        start: function () {
            if (this.name().trim() == "") {
                DevExpress.ui.dialog.alert('Enter a name', 'Warning!');
            } else if (this.questionNumber() == "" || this.questionNumber() <= 0 || this.questionNumber() > 8) {
                DevExpress.ui.dialog.alert('The number of random questions should be between 1 and 8.', 'Warning!');
            } else if (this.time() == "" || this.time() <= 0 || this.time() > 30) {
                DevExpress.ui.dialog.alert('The time should be between 1 and 30.', 'Warning!');
            } else {
                JDriveTestPrep.app.navigate("greeting/" + this.name() + "/" + this.time() + "/" + this.questionNumber() + "/" + "1");
            }
        },
        about: function () {
            JDriveTestPrep.app.navigate("about");
        }, 
        exit: function () {
            try {
                JDriveTestPrep.app.exitApp();
            }
            catch (e) {
                DevExpress.ui.dialog.alert(e.message, 'Exception');
            }
        }
    };
    return viewModel;
};