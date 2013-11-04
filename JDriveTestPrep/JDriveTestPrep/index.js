
window.JDriveTestPrep = {};

$(function () {

    JDriveTestPrep.app = new DevExpress.framework.html.HtmlApplication(
    {
        namespace: JDriveTestPrep,
        defaultLayout: "default"
    }
    );
    JDriveTestPrep.app.randomQuestions = ko.observableArray([{
        id: 0, q: "", answers: [ { id: 0, text: "" }], useranswer: 0, ranswer: 4
    }]);
    JDriveTestPrep.app.router.register(":view/:name/:time/:questions/:qnumber/", 
        { view: "home", name: "", time: "", questions:"", qnumber:""});
    JDriveTestPrep.app.navigate();

    

});

