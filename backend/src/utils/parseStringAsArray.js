module.exports =  function (ArrayAsString){
    return ArrayAsString.split(",").map(element => element.trim())
}