import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../services/device.service';
import { Device } from '../models/device.model';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  device: Device;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.device = this.deviceService.getDeviceById(+id);
  }

  ngOnInit(): void {
  }

}
