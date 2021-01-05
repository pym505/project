
def solution(p):
    #print(p)
    re=[]
    n_p=0
    num=0

    for i in p:
        comp=i
        temp=0

        num=num+1
        for j in range(num,len(p)):
            temp=temp+1
            if comp > p[j]:
                #print(comp,"-",p[j],"[",temp,"]")
                break

        re.insert(num-1,temp)
        
    return re

p = [1,2,3,2,3]
print(solution(p))
