/*
Create an abstract class Animal
it should have properties to represent gender, species and number of legs set in constructor
gender and species property should be ENUM types
it should have getters and setters for each of the properties
*/
abstract class Animal {
    constructor(gender: Gender, species: Species, number_of_legs: number) {
        
        function getGender(){
            return this.gender;
        }

        function setGender(_gender: string){
            this.gender = _gender;
        }

        function getSpecies(){
            return this.species;
        }

        function setSpecies(_species: string){
            this.species = _species;
        }

        function getNumberOfLegs(){
            return this.number_of_legs;
        }

        function setNumberOfLegs(_numberOfLegs: string){
            this.number_of_legs = _numberOfLegs;
        }
    }
}

enum Gender{
    F = 'female',
    M = 'male'
}

enum Species{
    cat = 'cat',
    dog = 'dog',
    ferret = 'ferret'
}
/*
Create Domestic Animal class that extends Animal
Create an interface that enforces class to have method called 'feed' which has input param 'food' and is void
implement interface to Domestic Animal class
method feed should console log 'Nice ${food}'
*/
class DomesticAnimal extends Animal implements Eating{
    feed(food: string): void {
        console.log(`Nice ${food}`)
    }

}

export interface Eating{
     feed(food:string) : void;
}
/*
Create Domestic Animal class instance and use feed method
*/

let doggo: DomesticAnimal = new DomesticAnimal(Gender.F, Species.dog, 4);

doggo.feed("Cracker");