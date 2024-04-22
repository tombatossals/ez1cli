# ez1cli

APSysems microinverters EZ1-M API cli

<!-- toc -->
* [ez1cli](#ez1cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g ez1cli
$ ez1cli COMMAND
running command...
$ ez1cli (--version)
ez1cli/0.0.1 darwin-x64 node-v21.7.3
$ ez1cli --help [COMMAND]
USAGE
  $ ez1cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`ez1cli get COMMAND IP`](#ez1cli-get-command-ip)

## `ez1cli get COMMAND IP`

Get info from the microinverter API

```
USAGE
  $ ez1cli get COMMAND IP [--json]

ARGUMENTS
  COMMAND  (device-info|data) Information to get from the microinverter API
  IP       IP of the microinverter

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Get info from the microinverter API

EXAMPLES
  $ minverter get device 192.168.4.10
```

_See code: [src/commands/get/index.ts](https://github.com/tombatossals/ez1cl/blob/v0.0.1/src/commands/get/index.ts)_
<!-- commandsstop -->
