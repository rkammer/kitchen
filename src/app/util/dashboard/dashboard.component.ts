import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  success: boolean = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.success = (this.route.snapshot.params.message === 'success') ? true : false;
  }

}
