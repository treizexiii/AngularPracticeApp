import { Subject } from 'rxjs';
import { Device } from '../models/device.model';
export class DeviceService {

    // Voir doc EricJS pour information sur les observables
    deviceSubject = new Subject<any[]>();

    private devices: Device[] = [
        {
            id: 1,
            name: "Ordinateur",
            status: 'On'
        },
        {
            id: 2,
            name: "Télévision",
            status: 'On'
        },
        {
            id: 3,
            name: "Cafetière",
            status: 'Off'
        },
        {
            id: 4,
            name: "Machine à laver",
            status: "Off"
        }
    ];

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
}
