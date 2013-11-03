window.JDriveTestPrep = {};
$(function () {
    JDriveTestPrep.app = new DevExpress.framework.html.HtmlApplication(
    {
        namespace: JDriveTestPrep,
        defaultLayout: "myLayout"
    }
    );
    JDriveTestPrep.app.router.register(":view/:name", { view: "home", name: "" });
    JDriveTestPrep.app.navigate();
});

JDriveTestPrep.home = function () {
    var viewModel = {
        message: ko.observable('Welcome!'),
        name: ko.observable(''),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        greet: function () {
            JDriveTestPrep.app.navigate("greeting/" + this.name());
        }
    };
    return viewModel;
};

JDriveTestPrep.greeting = function (params) {
    var viewModel = {
        message: 'Hello ' + params.name +'!',
    };
    return viewModel;
};