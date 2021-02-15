import { Component, OnInit } from '@angular/core';
import { XR } from 'aws-amplify';

@Component({
  selector: 'sumerian',
  templateUrl: './sumerian.component.html',
  styleUrls: ['./sumerian.component.scss'],
})
export class SumerianComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    await this.loadAndStartScene();
  }

  async loadAndStartScene() {
    await XR.loadScene('EchartsHtml3d', 'sumerian-scene-dom-id');
    XR.start('EchartsHtml3d');
  }
}
