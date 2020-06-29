#!/usr/bin/env bash

if [[ ! -f ./go.mod ]]; then
  echo 'Please initialize with `go mod init`.'
  #exit 1
fi

"$@"
