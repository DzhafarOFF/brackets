module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let matches = {};

    bracketsConfig.forEach(brackets => matches[brackets[0]] = brackets[1]);
    
    for (let i = 0; i < str.length; i++) {
      let bracket = str.charAt(i);
      let isOpenBracket = matches[bracket];
      let isOneSymbolBrackets = matches[bracket] == bracket;
      let lastOpenBracket = stack[stack.length - 1];
      const getLastOpenBracket = () => stack.pop();
      const getMatchingClosingBracket = () => matches[getLastOpenBracket()];
      
      if (isOneSymbolBrackets && lastOpenBracket == bracket) {
          stack.pop();
      } else if (isOpenBracket) {
          stack.push(bracket);
      } else if (bracket != getMatchingClosingBracket()) {            
          return false;
      }
    }    
    return stack.length == 0;
}
