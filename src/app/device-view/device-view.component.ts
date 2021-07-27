import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  isAuth: boolean = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date.toLocaleDateString());
        }, 2000);
    }
  );

  devices: any[];
  deviceSubscription: Subscription;

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }
  ngOnInit(): void {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onTurnOn(): void {
    this.deviceService.switchOnAll()
  }

  onTurnOff(): void {
    this.deviceService.switchOffAll()
  }

  onSave() {
    this.deviceService.saveDeviceToDatabase();
  }

  onFetch() {
    this.deviceService.getDeviceFromeDatabase();
  }
}
