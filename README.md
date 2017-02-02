join-maps
===

[![Greenkeeper badge](https://badges.greenkeeper.io/SEAPUNK/join-maps.svg)](https://greenkeeper.io/)

**Requires Node 4.x or newer**

`npm install join-maps`

Concatenates multiple `Map`s into one `Map`.
Duplicate values are overriden with each successive map.

```js
import joinMaps from 'join-maps'

const A = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])

const B = new Map([
    [3, 'could be 3'],
    [4, 'four']
])

const C = new Map([
    [5, 'five'],
    [3, 'not really 3']
])

const D = joinMaps(A, B, C)

/*
    D is now Map {
      1 => 'one',
      2 => 'two',
      3 => 'not really 3',
      4 => 'four',
      5 => 'five'
    }
 */

```
