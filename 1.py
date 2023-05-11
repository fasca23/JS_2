import time

def simple(n):
    start = time.time()
    simple_n = []
    for i in range(2, n+1):
        for j in range(2 , i):
            if i % j == 0:
                break    
        else: 
            simple_n.append(i)
    # Время выполнения в миллисекундах
    end = (time.time() - start)*1000
    return end
        
print(simple(100000))

# print (round(2.75, 1))