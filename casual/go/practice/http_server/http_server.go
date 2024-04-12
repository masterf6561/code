package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"reflect"
)

func hello(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h) //simpler to use
		}
	}
}

func setHue(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Request received")
	turn := r.PathValue("turn")
	fmt.Println("Will try to turn hue Lamp", turn)
	var on bool
	switch turn {
	case "on":
		on = true
	case "off":
		on = false
	default:
		fmt.Fprintf(w, "Error while making Request. Use 'on' or 'off'")
	}

	data := []byte(fmt.Sprintf(`{"on": %t}`, on))
	url := "http://192.168.178.43/api/iv-Ekkacn8ag8lkZNrN6ZwZW3Ht1LmyjZGVAWCce/lights/1/state"

	req, err := http.NewRequest("PUT", url, bytes.NewBuffer(data))

	fmt.Fprintf(w, "Hi from server \n")

	if err != nil {
		fmt.Fprintf(w, "Error while creating Request", err)
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}

	resp, err := client.Do(req)

	w.Write([]byte("turning hue " + turn + "\n")) //more efficient for raw data but more complex
	if err != nil {
		fmt.Fprintf(w, "Error making HTTP POST request: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Fprintf(w, "Unexpected response status: %s", resp.Status)
	}
}

type HueState struct {
	On  bool
	Bri int
	Hue int
	Sat int
}

func printHueState(w http.ResponseWriter, state HueState) {
	// Get the type of the struct
	st := reflect.TypeOf(state)

	// Iterate over the fields of the struct
	for i := 0; i < st.NumField(); i++ {
		// Get the field name and value
		fieldName := st.Field(i).Name
		fieldValue := reflect.ValueOf(state).Field(i)

		// Print the field name and value
		fmt.Fprintf(w, "%s: %v\n", fieldName, fieldValue)
	}
}

func getHue(w http.ResponseWriter, req *http.Request) {
	url := "http://192.168.178.43/api/iv-Ekkacn8ag8lkZNrN6ZwZW3Ht1LmyjZGVAWCce/lights/1"
	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		fmt.Fprintf(w, "Error creating Request to Bridge %v", err)
	}

	client := &http.Client{}
	res, err := client.Do(req)

	// state := hueState{resp.Body["state"]}
	if res.StatusCode != http.StatusOK {
		fmt.Fprintf(w, "Status Code", res.StatusCode)
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Fprintf(w, "Error while parsing Body", err)
	}

	var formattedBody map[string]json.RawMessage
	err = json.Unmarshal(body, &formattedBody)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error parsing JSON response: %v", err), http.StatusInternalServerError)
		return
	}

	bodyState := fmt.Sprintf("%s", formattedBody["state"])
	var state HueState
	err = json.Unmarshal([]byte(bodyState), &state)

	printHueState(w, state)
	log.Println(state)
}

func main() {

	router := http.NewServeMux()
	router.HandleFunc("GET /hello", hello)
	router.HandleFunc("GET /headers", headers)
	router.HandleFunc("GET /hue", getHue)
	router.HandleFunc("GET /hue/{turn}", setHue)

	server := http.Server{
		Addr:    ":8090",
		Handler: router,
	}

	log.Println("Starting Server at Port :8090")

	server.ListenAndServe()
}
