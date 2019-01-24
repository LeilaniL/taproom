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
  editForm: boolean = false;
  selectedBrew = null;

  editKeg(keg) {
    this.editForm = !this.editForm;
    this.selectedBrew = keg;
  }
  showForm: boolean = false;
  addClicked() {
    this.showForm = !this.showForm;
  }
  pourPint(keg) {
    keg.capacity -= 1;
  }
  emptyKeg(keg) {
    keg.capacity = 0;
  }
  refillKeg(keg) {
    keg.capacity = 124;
  }
  doneEditing() {
    this.editForm = false;
  }



  almostOut(keg) {
    if (keg.capacity <= 10) {
      return "almostOutIndicator";
    }
  }
  pintPrice(keg) {
    if (keg.pintPrice <= 3) {
      return "lowpintPrice"
    } else if (keg.pintPrice <= 8) {
      return "mediumpintPrice"
    } else if (keg.pintPrice <= 12) {
      return "highpintPrice"
    }
  }
  kegPrice(keg) {
    if (keg.kegPrice <= 40)
      return "kegPrice"
  }
  alcoholContent(keg) {
    if (keg.abv <= 20) {
      return "abv"
    }
  }
}