// document.getElementById("output").style.visibility = "hidden";
// document.getElementById("lbsInput").addEventListener("input", function(e) {
//   document.getElementById("output").style.visibility = "visible";
//   let lbs = e.target.value;
//   document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
//   document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
//   document.getElementById("ozOutput").innerHTML = lbs * 16;
// });


/*
Formulas for conversions.
Centimeters = feet * 30.48
Meters = feet * 0.3048
Kilo Meters

*/
'use strict';

var Conversion;

const UIController = (function () {

  const OutputStrings = {
    inputNum: "#UnitInput",
    outputCent: "#centOutput",
    outputKilos: "#kiloOutput",
    outputImperial: "#imperialOutput",
    outputPane: "#output"
  };

  const UnitStrings = {
    mass: "#mass",
    length: "#length",
    volume: "#volume"
  }

  const UnitNames = {
    grams: "Gram(s): ",
    kgrams: "Kilogram(s): ",
    oz: "Ounce(s): ",
    cmeter: "Centimeter(s): ",
    meters: "Meter(s): ",
    kmeters: "Kilometer(s): ",
    inches: "Inch(es): ",
    mliters: "Milliter(s): ",
    liters: "Liter(s): ",
    quarts: "Quart(s): "
  }

  return {
    getDOMStrings: function () {
      return OutputStrings;
    },
    getUnitStrings: function () {
      return UnitStrings;
    },
    getUnitNames: function () {
      return UnitNames;
    }
  };
})();

// For testing
// UIController.getInput();

const controller = (function (UICtrl) {
  const setUpListners = function () {
    // Acces object inside of UIController
    const DOM = UIController.getDOMStrings();
    const Unit = UIController.getUnitStrings();
    const UnitNames = UIController.getUnitNames();
    document.querySelector(DOM.outputPane).style.visibility = "hidden";

    const massSelect = document.querySelector(Unit.mass).addEventListener('click', function () {
      document.querySelector(DOM.outputPane).style.visibility = "visible";

      const grams = document.querySelector(DOM.outputCent).innerHTML = UnitNames.grams;
      const kgrams = document.querySelector(DOM.outputKilos).innerHTML = UnitNames.kgrams;
      const ounces = document.querySelector(DOM.outputImperial).innerHTML = UnitNames.oz;


      document.querySelector(DOM.inputNum).addEventListener("input", function (e) {
        // document.querySelector(DOM.outputCent).style.visibility = "visible";
        let lbs = e.target.value;
        document.querySelector(DOM.outputCent).innerHTML = grams + (lbs / 0.00220462).toFixed(2);
        document.querySelector(DOM.outputKilos).innerHTML = kgrams + (lbs / 2.2046).toFixed(6);
        document.querySelector(DOM.outputImperial).innerHTML = ounces + (lbs * 16).toFixed(2);
      });

      console.log("Clicked mass button");
    })

    const lengthSelect = document.querySelector(Unit.length).addEventListener('click', function () {
      document.querySelector(DOM.outputPane).style.visibility = "visible";

      const centimeter = document.querySelector(DOM.outputCent).innerHTML = UnitNames.cmeter;
      const kilometer = document.querySelector(DOM.outputKilos).innerHTML = UnitNames.kmeters;
      const inches = document.querySelector(DOM.outputImperial).innerHTML = UnitNames.inches;

      document.querySelector(DOM.inputNum).addEventListener("input", function (e) {
        // document.querySelector(DOM.outputCent).style.visibility = "visible";
        let feet = e.target.value;
        document.querySelector(DOM.outputCent).innerHTML = centimeter + (feet * 30.48).toFixed(2);
        document.querySelector(DOM.outputKilos).innerHTML = kilometer + (feet / 3280.8).toFixed(6);
        document.querySelector(DOM.outputImperial).innerHTML = inches + (feet * 12).toFixed(2);
      });

      console.log("Clicked length button");
    })

    const volumeSelect = document.querySelector(Unit.volume).addEventListener('click', function () {
      document.querySelector(DOM.outputPane).style.visibility = "visible";

      const milliters = document.querySelector(DOM.outputCent).innerHTML = UnitNames.mliters;
      const liters = document.querySelector(DOM.outputKilos).innerHTML = UnitNames.liters;
      const quarts = document.querySelector(DOM.outputImperial).innerHTML = UnitNames.quarts;

      document.querySelector(DOM.inputNum).addEventListener("input", function (e) {
        // document.querySelector(DOM.outputCent).style.visibility = "visible";
        let gallons = e.target.value;
        document.querySelector(DOM.outputCent).innerHTML = milliters + (gallons * 3785.411784).toFixed(2);
        document.querySelector(DOM.outputKilos).innerHTML = liters + (gallons * 3.78541178).toFixed(6);
        document.querySelector(DOM.outputImperial).innerHTML = quarts + (gallons * 4).toFixed(2);
      });

      console.log("Clicked volume button");
    })

    
  };

  // const ctrlUpdate = function(){ 
  //   const input = UICtrl.getInput();
  //   console.log(input)
  // }
  return {
    init: function () {
      console.log("App started.");
      setUpListners();
      // ctrlUpdate();
    }
  };
})(UIController);

controller.init();