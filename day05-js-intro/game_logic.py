

def evaluate_guess(guess, answer):
    result = ["absent"] * len(answer)
    pool = list(answer)

    # Pass 1: exact matches
    for i in range(len(answer)):
        # Python - double equals for comparison
        if guess[i] == answer[i]:
            result[i] = "correct"
            # Python uses None
            pool[i] = None

    # Pass 2: present/absent
    for i in range(len(answer)):
        if result[i] == "correct":
            continue
        if guess[i] in pool:
            result[i] = "present"
            pool[pool.index(guess[i])] = None

    return result

def visualize(result):
    for i in range(len(result)): 
        if result[i] == "present":
            print("🟨", end=" ")
        elif result[i] == "absent":
            print("◻️", end=" ")
        elif result[i] == "correct":
            print("🟩", end=" ")
    print()

print(evaluate_guess("AUDIO", "AUDIO"))
print(evaluate_guess("LEMON", "LEVEL"))
visualize(evaluate_guess("LEVEL", "LEMON"))

guess = "AUDIO"


