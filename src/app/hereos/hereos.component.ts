import { Component } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent {
  hero: Hero ={
    id: 1,
    name: 'Windstorm'
  };
}
