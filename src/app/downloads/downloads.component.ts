import { Component, OnInit } from '@angular/core';

import { Download } from './download'

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  downloads: Download[]

  constructor() {
    this.downloads = [
      {name: 'Item 1', url: 'https://wige-dev.com', description: 'Lorem ipsum dolor sit amet'},
      {name: 'Item 2', url: 'https://wige-dev.com', description: 'Lorem ipsum dolor sit amet'}
    ]
  }

  ngOnInit(): void {
  }

}
