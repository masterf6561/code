package main

import (
	"context"
	"fmt"
	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
	"log"
	"os"
)

func main() {
	ctx := context.Background()
	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("GOOGLE_API_KEY")))
	if err != nil {
		log.Fatal(err)
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-pro")
	resp, err := model.GenerateContent(ctx, genai.Text("Can you give me something like a motivational or funny Line of the day? Only one and format it so that only the Sentence itself is given, you can decide wether funny or motivational."))
	if err != nil {
		log.Fatal(err)
	}
	for _, canditate := range resp.Candidates {
		fmt.Printf("%+v\n", canditate.Content.Parts[0])
	}
}
