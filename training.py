import time

def encrypt(str1, shift):
    print(f"\nInput str1: {str1}")
    result = ""
    for str1 in str1.lower():
        if 'a' <= str1 <= 'z':
            str_ascii = ord(str1) + shift
            if str_ascii > ord('z'):
                str_ascii = str_ascii - 26
            result += chr(str_ascii)
        else:
            result += str1
    return result

str1 = input("\nEnter a str1: ")
start = time.perf_counter()
str1 = encrypt(str1, 4)
print(f"Final str1: {str1}")
end = time.perf_counter()
print(f"Execution time: {end - start:.6f} seconds")
