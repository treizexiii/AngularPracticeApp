import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() indexOfDevice: number;

  constructor(private service: DeviceService) {
    this.deviceName = "";
    this.deviceStatus = 'Absent';
    this.indexOfDevice = 0;
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor(): string {
    if (this.deviceStatus == 'On') {
      return "green";
    } else if(this.deviceStatus == 'Off') {
      return "red";
    } else {
      return "gray";
    }
  }

  onSwitchOn() {
    this.service.switchOnByIndex(this.indexOfDevice);
  }

  onSwitchOff() {
    this.service.switchOffyIndex(this.indexOfDevice);
  }

}
