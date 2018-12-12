import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-preferred',
  templateUrl: './preferred.component.html',
  styleUrls: ['./preferred.component.scss']
})
export class PreferredComponent implements OnInit {
  version: string = environment.version;

  constructor() {}

  ngOnInit() {}
}
