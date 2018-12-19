app.controller('toDoCtrl', function ($scope) {

    $scope.itemList = [];
    $scope.filterParam = 'all';


    $scope.addItem = function () {
        $scope.itemList.push({
            'title': $scope.newToDo, 'doneWork': false

        });
    }

    $scope.clickEvent = function (event) {
        if (event.keyCode == 13 && $scope.newToDo != '') {
            $scope.addItem();
            $scope.newToDo = '';

        }
    }

    $scope.removeElement = function (index) {
        $scope.itemList.splice(index, 1);

    }

    $scope.calculatNotDone = function () {
        var allElements = 0;
        for (var i = 0; i < $scope.itemList.length; i++) {
            if ($scope.itemList[i].doneWork == false) {
                allElements++;

            }
        }
        return allElements;
    }

    $scope.removeComplited = function () {
        for (var i = 0; i < $scope.itemList.length; i++) {
            if ($scope.itemList[i].doneWork == true) {
                $scope.itemList.splice(i, 1);
                i--
            }
        }
    }

    $scope.filterList = function (type) {
        // switch (type) {
        //     case 'all': {

        //     }
        //     case 'active': {

        //     }
        //     case 'complited': {

        //     }

        // }
        $scope.filterParam = type
    }
});

app.filter('ourFilter', function () {
    return function (array, param) {
        let returnArray = []
        switch (param) {
            case 'all': {
                returnArray = array
                break
            }

            case 'active': {
                for (var i = 0; i < array.length; i++) {
                    if (array[i].doneWork == false) {
                        returnArray.push(array[i])
                    }
                }
                break
            }
            case 'complited': {
                for (var i = 0; i < array.length; i++) {
                    if (array[i].doneWork == true) {
                        returnArray.push(array[i])
                       
                    }
                }
                break
            }
        }

            return returnArray

    }
})