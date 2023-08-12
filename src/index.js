module.exports = function reverse (n) {
  let myArr = String(Math.abs(n)).split("").reverse().map((n)=>{
    return Number(n)
    })
    return +myArr.join("")
}
