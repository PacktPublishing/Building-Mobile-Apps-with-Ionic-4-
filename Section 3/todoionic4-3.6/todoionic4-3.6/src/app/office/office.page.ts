import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    console.log(id);
  }

  ngOnInit() {
  }

}
