export class Keg {

    public capacity: number = 124;


    constructor(public name: string, public brand: string, public pintPrice: number, public kegPrice: number, public abv: number) { }

    sellBeer(type: string) {
        if (type == "Pint") {
            this.capacity--;
        } else if (type == "Growler") {
            this.capacity -= 2;
        } else if (type == "Large") {
            this.capacity -= 4;
        }
    }
    needReplacement() {
        if (this.capacity < 10) {
            return true;
        } else {
            return false;
        }
    }
}