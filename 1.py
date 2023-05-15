import time

def simple(n):
    time_start = time.time()
    
    simple_n = []
    start = 2
    while len(simple_n) < n:
        
        flag = False
        
        for i in simple_n:
            if start % i == 0 and (start / i != 1):
                flag = True
                break
            
        if flag == False:
            simple_n.append(start)

        start += 1
            
    end = (time.time() - time_start)*1000
    print(end)
    return simple_n
        
print(simple(200))