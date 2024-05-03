import click
from langchain_community.llms import Ollama


llm = Ollama(
    model="llama3:8b-instruct-q4_0",
    temperature=0.9,
)

# @click.group()
# def question():
#     pass

# @question.command()
@click.command()
@click.argument("question",type=click.STRING)
def get_answer(question):
    prompt = question
    print(prompt)
    response = llm.invoke(prompt,num_predict=100)
    print(response)

if __name__ == "__main__":
    # question()
    get_answer()
