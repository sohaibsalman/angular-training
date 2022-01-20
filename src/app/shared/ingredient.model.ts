// Ingredient model which is defined in shared folder so that it can be used in different functionalities

export class Ingredient {
    // A shortcut notation provided by typescript to create a data member
    // and initialize it with the parameters recieved in constructor

    // This will first create properties of Ingredient and then
    // assign them the values coming in constructor as arguments
    constructor(public name: string, public amount: number) {}
}
