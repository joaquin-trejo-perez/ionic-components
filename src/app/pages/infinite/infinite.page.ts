import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(30);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
     setTimeout( ()=>{

      if(this.data.length > 200){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(30);
      this.data.push(...nuevoArr);
      this.infiniteScroll.complete();

     },1500);
  }

}
