import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
   
  superHeroes: any[] = [];
  filteredArray: any[] = [];
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHeroes().subscribe((heroes: []) => {
      this.filteredArray = this.superHeroes = heroes;
    });
  }

  segmentChanged(event) {
     const value = event.detail.value;

     if (value === '') {
      this.filteredArray = this.superHeroes;
      return;
     }

    this.filteredArray = this.superHeroes.filter((superHeroe: any) => superHeroe.publisher === value);

  }

}
