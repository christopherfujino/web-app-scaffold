#!/usr/bin/env python
'''`docker-compose` wrapper that loads a config file'''

import subprocess
import sys

def run(cmd):
    return subprocess.check_output(
            cmd,
            text=True,
            ).strip()

def validate():
    # platform
    platform = run(['uname', '-s'])

def main(args):
    validate()
    subprocess.Popen(
            " ".join(['docker-compose'] + args),
            shell=True,
            )

main(sys.argv[1:])
