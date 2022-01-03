/** Using hash Map | O(n) Time | O(1) Space 
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const lookUpAnswer = {3: "Fizz", 5: "Buzz"};
    const answer = [];
    
    for (let index = 1; index <= n; index++) {
        let answerString = '';
        
        for (const [key, value] of Object.entries(lookUpAnswer)) {
            if (index % key === 0) {
                answerString += value;
            }
        }
        
        if (!answerString) {
            answerString += index;
        }
        
        answer.push(answerString);
    }
    return answer;
};