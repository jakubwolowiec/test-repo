"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*
Create an abstract class Animal
it should have properties to represent gender, species and number of legs set in constructor
gender and species property should be ENUM types
it should have getters and setters for each of the properties
*/
var Animal = /** @class */ (function () {
    function Animal(gender, species, number_of_legs) {
        function getGender() {
            return this.gender;
        }
        function setGender(_gender) {
            this.gender = _gender;
        }
        function getSpecies() {
            return this.species;
        }
        function setSpecies(_species) {
            this.species = _species;
        }
        function getNumberOfLegs() {
            return this.number_of_legs;
        }
        function setNumberOfLegs(_numberOfLegs) {
            this.number_of_legs = _numberOfLegs;
        }
    }
    return Animal;
}());
var Gender;
(function (Gender) {
    Gender["F"] = "female";
    Gender["M"] = "male";
})(Gender || (Gender = {}));
var Species;
(function (Species) {
    Species["cat"] = "cat";
    Species["dog"] = "dog";
    Species["ferret"] = "ferret";
})(Species || (Species = {}));
/*
Create Domestic Animal class that extends Animal
Create an interface that enforces class to have method called 'feed' which has input param 'food' and is void
implement interface to Domestic Animal class
method feed should console log 'Nice ${food}'
*/
var DomesticAnimal = /** @class */ (function (_super) {
    __extends(DomesticAnimal, _super);
    function DomesticAnimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomesticAnimal.prototype.feed = function (food) {
        console.log("Nice ".concat(food));
    };
    return DomesticAnimal;
}(Animal));
/*
Create Domestic Animal class instance and use feed method
*/
var doggo = new DomesticAnimal(Gender.F, Species.dog, 4);
doggo.feed("Cracker");
