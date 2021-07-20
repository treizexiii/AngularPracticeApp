export class DeviceService {
    devices = [
        {
            name: "Ordinateur",
            status: 'On'
        },
        {
            name: "Télévision",
            status: 'On'
        },
        {
            name: "Cafetière",
            status: 'Off'
        },
        {
            name: "Machine à laver",
            status: "Off"
        }
    ];

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
