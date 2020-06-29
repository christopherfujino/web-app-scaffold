package main

import (
  "fmt"
  "net/http"
  "os"
)

func main() {
  fmt.Println("Hello world!")
  err := http.ListenAndServe("0.0.0.0:8080", nil)
  if (err != nil) {
    fmt.Println("Server failed with err:\n%s", err.Error())
    os.Exit(1)
  }
}
