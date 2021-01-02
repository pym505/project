def solution(p):
    answer=True
p.sort()
for i in range(0,len(p)):
    for a in p[i+1:]:
        if p[i] in a:
            answer = False
            return answer
return answer

phone_book = ["119", "97674223", "1195524421"]
print(solution(phone_book))

phone_book = ["12", "123", "1235", "567", "88"]
print(solution(phone_book))

phone_book = ["123", "456", "789"]
print(solution(phone_book))