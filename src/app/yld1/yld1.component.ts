import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'yld1-component',
  templateUrl: './yld1.component.html',
  styleUrls: ['./yld1.component.scss']
})
export class Yld1Component {
  products2 = "Siit läheb edasi klassika:";

  share() {
    window.alert('The product has been shared!');
  }
}