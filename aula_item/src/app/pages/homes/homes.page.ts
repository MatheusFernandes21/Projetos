import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {

  items: Array<any>;


  constructor(public itemService: ItemService,
                    private  router: Router) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
