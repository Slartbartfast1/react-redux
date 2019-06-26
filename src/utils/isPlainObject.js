/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

// 简单对象只能是{}和new object()
// typeof [] === "object",但不是简单对象
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = Object.getPrototypeOf(obj)
  if (proto === null) return true
  // 基于原型链查找
  // new出来的对象的原型是function 
  // function的原型是object 
  // 二者不相等 所以不是简单对象
  let baseProto = proto
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto)
  }

  return proto === baseProto
}
