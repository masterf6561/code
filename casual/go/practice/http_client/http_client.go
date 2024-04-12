package main

import (
	"bufio"
	"fmt"
	"net/http"
	"sync"
	"time"
)

func make_request(wg *sync.WaitGroup) {
	url := "http://homeserver:8090/hue"
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	fmt.Println("Response status:", resp.Status)

	scanner := bufio.NewScanner(resp.Body)
	for i := 0; scanner.Scan() && i < 5; i++ {
		fmt.Println(scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}
	defer wg.Done()
}

func main() {
	request_count := 100
	var wg sync.WaitGroup
	wg.Add(request_count)
	for i := range request_count {
		go make_request(&wg)
		time.Sleep(1 * time.Second)
		fmt.Println(i)
	}
	wg.Wait()
}
