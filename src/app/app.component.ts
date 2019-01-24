import { Component } from '@angular/core';
import { Keg } from './models/Keg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    document.body.classList.add('backgroundImage');
  }
  title = 'Vader\'s Brews';
  kegList: Keg[] = [
    new Keg("Jabba's Excellent Ale", "Star Wars Brews", 7.50, 40, 6),
    new Keg("Leia's Pilsner", "Naboo Brews", 6, 30, 4.5),
    new Keg("Swamp Rat IPA", "Cantina Brewery", 7, 45, 6)
  ]
  createKeg(name, brand, pint, keg, abv) {
    let newKeg = new Keg(name, brand, pint, keg, abv);
    this.kegList.push(newKeg);
  }
  showForm: boolean = false;
  addClicked() {
    this.showForm = !this.showForm;
  }
}
