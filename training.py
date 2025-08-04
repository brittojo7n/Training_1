import time

def encrypt(string, shift):
    print(f"\nInput String: {string}")
    result = ""
    for char in string.lower():
        if 'a' <= char <= 'z':
            char_ascii = ord(char) + shift
            if char_ascii > ord('z'):
                char_ascii = char_ascii - 26
            result += chr(char_ascii)
        else:
            result += char
    return result

string = input("\nEnter a string: ")
start = time.perf_counter()
string = encrypt(string, 4)
print(f"Final String: {string}")
end = time.perf_counter()
print(f"Execution time: {end - start:.6f} seconds")