class AnagramChecker():
    def __init__(self, filename):
        with open(filename) as f:
            self.text = f.read()

    def is_valid_word(self, word):
        temp = self.text.lower().split()
        try:
            assert temp.index(word.lower())
            return True
        except Exception:
            return False
        
    def get_anagrams(self, word):
        # if self.is_valid_word(word):
        all_anagrams = []
        checker_word = word.lower()
        try:
            temp = self.text.lower().split()
            for i in temp:
                if self.is_anagram(word, i):
                    all_anagrams.append(i)
            all_anagrams.remove(word)
            if len(all_anagrams) > 0:
                return all_anagrams
            else:
                return ["No anagrams for this word"]
        except Exception:
            return ["No anagrams for this word"]

    def is_anagram(self, word1, word2):
        word1 = list(word1)
        word2 = list(word2)
        if len(word1) == len(word2):
            for i in word1:
                try:
                    word2.index(i)
                    word2.remove(i)
                except Exception:
                    return False
            return True
        return False