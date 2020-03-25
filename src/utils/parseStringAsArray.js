module.exports = function parseStringAs(arrayAsString){
    return arrayAsString.split(',').map((tech)=>{tech.trim()});
}