import { Component, OnInit } from '@angular/core'

import { Download } from './download'

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
})
export class DownloadsComponent implements OnInit {
  downloads: Download[]
  search: string

  constructor() {
    this.downloads = [
      {
        name: 'AXICOM Copy',
        url: './assets/AXICOMCopy-v1.1.zip',
        description: 'simple batch file copy tool for IT admins',
      },
      {
        name: 'WoL Tool',
        url: './assets/WoL_Tool-0.2.0.1.zip',
        description: 'use Wake-on-LAN to wake a machine up on the local network',
      },
    ]

    this.search = ''
  }

  ngOnInit(): void {}
}
