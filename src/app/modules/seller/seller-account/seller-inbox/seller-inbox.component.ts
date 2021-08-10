import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-inbox',
  templateUrl: './seller-inbox.component.html',
  styleUrls: ['./seller-inbox.component.css'],
})
export class SellerInboxComponent implements OnInit {
  currentLink?: string;
  splitLink?: string[];
  backRoute?: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.currentLink = this.router.url;
    this.splitLink = this.currentLink.split('/');
    this.backRoute = this.splitLink[this.splitLink.length - 1];

    if (this.backRoute === 'inbox')
      this.router.navigate(['../'], { relativeTo: this.route });
    if (this.backRoute === 'chat')
      this.router.navigate(['./'], { relativeTo: this.route });
  }
}
