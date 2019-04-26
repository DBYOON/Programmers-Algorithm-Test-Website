/**********************************************************************
[문제 설명]
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

[제한사항]
참가자 중에는 동명이인이 있을 수 있습니다.

[입출력 예]
_________________________________________________________

participant               completion            return  
_________________________________________________________

["leo", "kiki", "eden"]   ["eden", "kiki"]      "leo"
_________________________________________________________

["marina", "josipa",      ["josipa", "filipa",  "vinko" 
"nikola" , "vinko",       "marina", "nikola"] 
"filipa"]
_________________________________________________________

["mislav", "stanko",      ["stanko", "ana",     "mislav"
"mislav", "ana"]          "mislav"]
_________________________________________________________

[입출력 예 설명]
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 
완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

***********************************************************************/

function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();
    for (let i in participant) {
        if (participant[ i ] !== completion[ i ]) {
          answer = participant[ i ];
          participant.splice(i, 1);
        }
    }
    return answer;
}