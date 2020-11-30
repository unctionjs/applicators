# @unction/applicators

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<MapperFunctionType<A, B>> | Set<MapperFunctionType<A, B>> | RecordType<C, MapperFunctionType<A, B>> => Record<string | number | symbol, A> | Map<C, A> => Record<string | number | symbol, B> | Map<C, B>

Takes a list of functions and a list of values and applies the values to the functions.

``` javascript
applicators([
  recordfrom(["point", "x"]),
  recordfrom(["point", "y"]),
  recordfrom(["point", "z"]),
])([
  40.453,
  2.2,
  423.0,
])
```

returns

``` javascript
[
  {point: {x: 40.453}},
  {point: {y: 2.2}},
  {point: {z: 423.0}},
]
```

``` javascript
applicators({
  x: inc,
  y: dec
})({
  x: -1,
  y: 1
})
```

returns

``` javascript
{
  x: 0,
  y: 0
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/applicators.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/applicators.svg?maxAge=2592000&style=flat-square
