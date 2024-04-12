package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"sync"
)

func make_request(wg *sync.WaitGroup, current_number int) {
	url := "http://homeserver:8090/load"
	data := []byte(fmt.Sprintf(`{"number": %d}`, current_number))

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(data))
	if err != nil {
		fmt.Println("Error while creating Request")
        return 
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}

	resp, err := client.Do(req)

	if err != nil {
		fmt.Println("Error making HTTP POST request", err)
        return 
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Unexpected response status: %s", resp.Status)
        return
	}

    response,err := io.ReadAll(resp.Body)
    if err != nil{
        fmt.Println("Error while parsing response body")
    }

    fmt.Printf("%s\n", response)

	defer wg.Done()
}

func main() {
	request_count := 10000
	var wg sync.WaitGroup
	wg.Add(request_count)
	for i := range request_count {
		go make_request(&wg, i)
	}
	wg.Wait()
    fmt.Printf("All %d Request are done!", request_count)
}
