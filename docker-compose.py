#!/usr/bin/env python
'''`docker-compose` wrapper that loads a config file'''

import subprocess
import sys
from distutils.spawn import find_executable

def run(cmd):
    return subprocess.check_output(
            cmd,
            text=True,
            ).strip()

def validate():
    # platform
    platform = run(['uname', '-s'])

    commands = [
            'docker',
            'docker-compose',
            ]

    for command in commands:
        path = find_executable(command)
        if path == None:
            print(
                    'Error! %s is either not installed or not on path.' %
                    command
                    )
            exit(1)

def main(args):
    validate()
    subprocess.Popen(
            ' '.join(['docker-compose'] + args),
            shell=True,
            )

main(sys.argv[1:])
