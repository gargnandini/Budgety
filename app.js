//BUDGET CONTROLLER
var budgetController = (function() {

    // var x = 23;
    // var add = function(a) {
    //     return x + a;
    // }
    // return {
    //     publicTest: function(b) {
    //         return add(b);
    //     }
    // }

})();

//UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    // var z = budgetCtrl.publicTest(5);
    // return {
    //     anotherPublic: function() {
    //         console.log(z);
    //     }
    // }

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputValue).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                //console.log('ENTER was pressed');
                ctrlAddItem();
            }

        });
    }

    var ctrlAddItem = function() {

        //1 get input data
        var input = UICtrl.getinput();

        //2 add the item to the budget controller

        //3 add the item to UI

        //4 calculate the budget

        //5 display the budget

    };

    return{
        init: function() {
            console.log('Aplication has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();