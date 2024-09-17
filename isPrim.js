const { error } = require("console")

module.exports = function isPrime(szam){
    if (typeof szam === 'string'){
        throw new Error("Nem számot adtál meg!")
    }
    if (!Number.isInteger(szam)){
        throw new Error("Nem egész számot adtál meg!")
    }
    if (szam === 0 || szam === 1){
        return false
    }
    for(let oszto = 2; oszto < szam; oszto++){
        if(szam % oszto === 0){
            return false
        }
    }
    return true
}