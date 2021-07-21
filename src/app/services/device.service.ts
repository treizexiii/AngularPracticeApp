import { Device } from '../models/device.model';
export class DeviceService {
    devices: Device[] = [
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
    }

    switchOffAll(): void {
        for (let device of this.devices) {
            device.status = "Off";
        }
    }

    switchOnByIndex(index: number): void {
        this.devices[index].status = "On";
    }

    switchOffyIndex(index: number): void {
        this.devices[index].status = "Off";
    }
}
