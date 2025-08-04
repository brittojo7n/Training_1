import time
start = time.perf_counter()

for i in range(10000):
    print(i)
 
end = time.perf_counter()
print("Execution time:", end - start, "seconds")
