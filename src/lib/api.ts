import axios from "axios";

type IDataResponse = {
    status: number;
    data?: {
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
}

type IDeviceInfoResponse = {
    status: number;
    data?: {
        devVer: string;
        deviceId: string;
        ipAddr: string;
        maxPower: number;
        minPower: number;
        ssid: string;
    }
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
        try {
            const response = await axios(
                {
                    method: "GET",
                    url: `http://${this.ip}:${this.port}/getOutputData`,
                    headers: {
                        Accept: 'application/json',
                    },
                    timeout: 2000
                },

            );
            const d = response.data.data;

            return {
                status: 200,
                data: {
                    channel1: {
                        lifetimeGeneration: d.te1,
                        power: d.p1,
                        startupGeneration: d.e1,
                    }, channel2: {
                        lifetimeGeneration: d.te2,
                        power: d.p2,
                        startupGeneration: d.e2,
                    }
                }
            };

        } catch (err: any) {
            return {
                status: 500
            }
        }
    }

    async getDeviceInfo(): Promise<IDeviceInfoResponse> {
        const response = await axios(
            {
                url: `http://${this.ip}:${this.port}/getDeviceInfo`,
                headers: {
                    Accept: 'application/json',
                },
                timeout: 2000
            },

        );
        return {
            status: 200,
            data: response.data
        } as IDeviceInfoResponse;
    }

}