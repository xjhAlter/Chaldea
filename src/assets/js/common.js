// 通用方法

// 简写
let PI = Math.PI
let cos = Math.cos
let sin = Math.sin
let abs = Math.abs
let sqrt = Math.sqrt
let pow = Math.pow
let random = Math.random
let atan2 = Math.atan2

function add (a, b) {
  return a + b
}

/**
 * 获取本地图片
 * @param imgUrl
 */
function getLocalImg (imgUrl) {
  return require(`../image/${imgUrl}`)
}

export {
  PI,
  cos,
  sin,
  abs,
  sqrt,
  pow,
  random,
  atan2,
  add,
  getLocalImg
}
