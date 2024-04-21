oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g minverter
$ minverter COMMAND
running command...
$ minverter (--version)
minverter/0.0.1 darwin-x64 node-v21.7.3
$ minverter --help [COMMAND]
USAGE
  $ minverter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`minverter get COMMAND IP`](#minverter-get-command-ip)

## `minverter get COMMAND IP`

Get info from the microinverter API

```
USAGE
  $ minverter get COMMAND IP

ARGUMENTS
  COMMAND  (device-info|data) Information to get from the microinverter API
  IP       IP of the microinverter

DESCRIPTION
  Get info from the microinverter API

EXAMPLES
  $ minverter get device 192.168.4.10
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/get/index.ts](https://github.com/tombatossals/ez1-api-cli/blob/v0.0.1/src/commands/get/index.ts)_
<!-- commandsstop -->
