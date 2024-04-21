import axios from "axios";

type IDataResponse = {
    channel1: {
        lifetimeGeneration: number;
        power: number;
        startupGeneration: number;
    }, channel2: {
        lifetimeGeneration: number;
        power: number;
        startupGeneration: number;
    }
}

type IDeviceInfoResponse = {
    devVer: string;
    deviceId: string;
    ipAddr: string;
    maxPower: number;
    minPower: number;
    ssid: string;
}

export type IResponse = IDataResponse | IDeviceInfoResponse;

export class EZ1API {
    private readonly ip: string;
    private readonly port: number;

    constructor(ip: string, port?: number) {
        this.ip = ip;
        this.port = port || 8050;
    }

    async call(method: string): Promise<IResponse> {
        switch (method) {
            case "data": {
                return this.getData();
            }

            case "device-info": {
                return this.getDeviceInfo();
            }

            default: {
                throw new Error(`Unknown method: ${method}`);
            }
        }

    }

    async getData(): Promise<IDataResponse> {
        const response = await axios.get(`http://${this.ip}:${this.port}/getOutputData`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },

        );
        const d = response.data.data;
        return {
            channel1: {
                lifetimeGeneration: d.te1,
                power: d.p1,
                startupGeneration: d.e1,
            }, channel2: {
                lifetimeGeneration: d.te2,
                power: d.p2,
                startupGeneration: d.e2,
            }
        };
    }

    async getDeviceInfo(): Promise<IDeviceInfoResponse> {
        const response = await axios.get(`http://${this.ip}:${this.port}/getDeviceInfo`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },

        );
        return response.data.data as IDeviceInfoResponse;
    }

}