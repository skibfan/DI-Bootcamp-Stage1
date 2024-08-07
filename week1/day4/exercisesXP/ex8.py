data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def quiz(data): 
    score = 0
    for i in data:
        question = i["question"]
        answer = i["answer"]
        print(question)
        your_answer = input("your answer: ")
        if your_answer == answer:
            score += 1
    print(f"Your final score is: {score}\ncorrect answers: {score}, incorrect answers: {len(data) - score}")
quiz(data)