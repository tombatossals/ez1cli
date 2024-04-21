import { Args, Command } from '@oclif/core';

import { EZ1API, IResponse } from "../../lib/api.js";

export default class Get extends Command {
  static args = {
    command: Args.string({
      description: 'Information to get from the microinverter API',
      options: ["device-info", "data"],
      required: true
    }),
    ip: Args.string({
      description: 'IP of the microinverter',
      required: true
    }),
  }

  static description = 'Get info from the microinverter API'

  static enableJsonFlag = true

  static examples = [
    `$ minverter get device 192.168.4.10`,
  ]

  async run(): Promise<IResponse> {
    const { args } = await this.parse(Get)

    const api = new EZ1API(args.ip);
    const data = await api.call(args.command);

    this.log(`${JSON.stringify(data, null, 2)}`);
    return data;
  }
}
