package main

import (
	"fmt"
	"strconv"
)

func main() {
    fmt.Println("Gehalt Rechner")
    fmt.Println("Stunden pro Woche:")
    var stunden_input string
    _, err := fmt.Scanln(&stunden_input)

    if err != nil{
        fmt.Println("Error while reading Stunden")
    }
    stunden, err := strconv.Atoi(stunden_input)
    if err != nil{
        fmt.Println("Could not parse Stunden to Int")
    }

    fmt.Println("Gehalt pro Stunde:")
    var gehalt_input string
    _, err = fmt.Scanln(&gehalt_input)
    if err != nil{
        fmt.Println("Error while reading Gehalt")
    }

    gehalt, err := strconv.ParseFloat(gehalt_input, 32)
    if err != nil{
        fmt.Println("Could not parse Gehalt to Int")
    }

    fmt.Println("Steuersatz in %:")
    var steuern_input string
    _, err = fmt.Scanln(&steuern_input)
    if err != nil{
        fmt.Println("Error while reading Steuern")
    }

    steuern, err := strconv.ParseFloat(steuern_input, 32)
    if err != nil{
        fmt.Println("Could not parse steuern to Int")
    }

    wochen_pro_monat := float64(30.0 / 7.0)
    brutto_lohn := float64(gehalt) * float64(stunden) * wochen_pro_monat
    netto_lohn := float64(brutto_lohn) * (steuern/100.0)
    fmt.Printf("Monats gehalt bei %d Stunden und %.1f €/h:\n", stunden, gehalt)
    fmt.Printf("  %.1f€\n", brutto_lohn)
    fmt.Printf("Das sind bei einem Steuersatz von %.2f%%:\n", steuern)
    fmt.Printf("  %.1f€\n", netto_lohn)
}
