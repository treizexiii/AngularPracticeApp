import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Device } from '../models/device.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {

    // Voir doc EricJS pour information sur les observables
    deviceSubject = new Subject<any[]>();

    private devices: Device[] = [];

    constructor(private httpClient: HttpClient) { }

    emitDeviceSubject() {
        this.deviceSubject.next(this.devices.slice());
    }

    getDeviceById(id: number) {
        const device: Device = this.devices.find(
            (deviceObject) => {
                return deviceObject.id == id;
            }
        );
        return device;
    }

    switchOnAll(): void {
        for (let device of this.devices) {
            device.status = "On";
        }
        this.emitDeviceSubject();
    }

    switchOffAll(): void {
        for (let device of this.devices) {
            device.status = "Off";
        }
        this.emitDeviceSubject();
    }

    switchOnByIndex(index: number): void {
        this.devices[index].status = "On";
        this.emitDeviceSubject();
    }

    switchOffyIndex(index: number): void {
        this.devices[index].status = "Off";
        this.emitDeviceSubject();
    }

    addDevice(name: string, status: string) {
        const newDevice: Device = new Device();
        newDevice.name = name;
        newDevice.status = status;
        newDevice.id = this.devices.length;

        this.devices.push(newDevice);
        this.emitDeviceSubject();
    }

    saveDeviceToDatabase() {
        this.httpClient.put('https://http-client-demo-e9eb6-default-rtdb.europe-west1.firebasedatabase.app/devices.json', this.devices).subscribe(
            () => {
                console.log('Enregistrement terminé.');
            },
            (error) => {
                console.log(`Erreur de sauvegarde: ${error}`);
            }
        );
    }

    getDeviceFromeDatabase() {
        this.httpClient.get<any[]>('https://http-client-demo-e9eb6-default-rtdb.europe-west1.firebasedatabase.app/devices.json').subscribe(
            (response) => {
                this.devices = response;
                this.emitDeviceSubject();
            },
            (error) => {
                console.log(`Erreur de chargement: ${error}`);
            }
        );
    }
}
