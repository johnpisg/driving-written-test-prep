
JDriveTestPrep.greeting = function (params) {
    var viewModel = {
        message: ko.observable('Hello ' + params.name + ', wait while the test is generated please.'),
        generateTest: function () {
            JDriveTestPrep.app.randomQuestions.removeAll();
            //console.log(JDriveTestPrep.app.randomQuestions().length);
            
            var data = GLOBAL_DATA.d;
            //console.log(data);
            if (data != null && data.length > 0) {

                var randomFrom = function (array, n) {
                    var at = 0;
                    var tmp, current, top = array.length;
                    if (top) while (--top && at++ < n) {
                        current = Math.floor(Math.random() * (top - 1));
                        tmp = array[current];
                        array[current] = array[top];
                        array[top] = tmp;
                    }
                    return array.slice(-n);
                };

                var randomData = randomFrom(data, parseInt(params.questions, 10));
                //console.log(randomData);

                for (var i = 0; i < randomData.length; i++) {
                    JDriveTestPrep.app.randomQuestions.push(randomData[i]);
                }
                //navigate 
                JDriveTestPrep.app.navigate("question/" + params.name + "/" + params.time + "/" + params.questions + "/" + "1");
            } else {
                DevExpress.ui.dialog.alert('Data could not be loaded.', 'Warning!');
            }
            
        }
    };
    viewModel.generateTest();
    return viewModel;
};