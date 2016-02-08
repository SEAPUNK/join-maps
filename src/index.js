'use strict'

import 'babel-polyfill-safe'

module.exports = function joinMap (...maps) {
  const newMap = new Map()
  for (let map of maps) {
    if (!(map instanceof Map)) {
      throw new Error('arguments must be es2015 Maps')
    }
    for (let [key, val] of map) {
      newMap.set(key, val)
    }
  }
  return newMap
}
