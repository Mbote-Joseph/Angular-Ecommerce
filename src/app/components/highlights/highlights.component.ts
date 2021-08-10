import { Component, OnInit } from '@angular/core';
import {
  categories,
  categoriesHeadings,
} from 'src/app/shared/helpers/categories';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
})
export class HighlightsComponent implements OnInit {
  categories = categoriesHeadings;
  quickLinks = [
    {
      title: 'help center',
      phrase: 'guide to customer care',
    },
    { title: 'easy return', phrase: 'quick refund' },
    { title: 'sell on store', phrase: 'millions of visitors' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
