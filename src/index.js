module.exports = function check(str, bracketsConfig) {
    const activeConfig = [];
    let hasError = false;
    
    str.split('').forEach((symbol) => {
        if (hasError) {
            return;
        }
        
        if (activeConfig.length === 0 || symbol !== activeConfig[activeConfig.length - 1][1]) {
            const config = bracketsConfig.find(([openBracket]) => {
                return symbol === openBracket;
            });
            if (config) {
                activeConfig.push(config);
            } else {
                hasError = true;
            }
        } else if (symbol === activeConfig[activeConfig.length - 1][1]) {
            activeConfig.pop();
        } else {
            hasError = true;
        }
    });
    return !hasError && activeConfig.length === 0;
};
