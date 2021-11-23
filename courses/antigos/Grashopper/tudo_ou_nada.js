let testResults = [
    'pass',
    'pass',
    'fail',
    'pass'
] 

function check(results) {
    for (const element of results) {
        if (element === 'fail'){
            return 'failed';
        }
        return 'passed';
    }
    
}
console.log(check(testResults));