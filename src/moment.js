import {
  __,
  compose,
  ifElse,
  equals,
  always,
  both,
  lt,
  indexOf,
  type,
  replace,
  multiply,
  identity,
  divide,
  length,
  add,
  gte,
} from 'ramda'

// [ string | number ] -> Date
const create = s =>
  ifElse(
    compose(equals('Null'), type),
    always(new Date()),
    always(new Date(
      ifElse(
        both(
          compose(equals('String'), type),
          compose(lt(__, 0), indexOf('T'))
        ),
        replace(/[-]/g, '/'),
        ifElse(
          both(
            compose(equals('Number'), type),
            compose(equals(10), length, toString)
          ),
          multiply(1000),
          identity
        )
      )(s)
    ))
  )(s)
// number -> [ number | string ]
const zero = n => ifElse(gte(__, 10), identity, always(`0${ n }`))(n)

// string -> string -> string
const stringify = f => d => {
  const year   = d.getFullYear()
  const month  = add(d.getMonth(), 1)
  const day    = d.getDate()
  const hour   = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return ifElse(
    compose(equals('Null'), type),
    always(d),
    compose(
      replace('YYYY', year),
      replace('MM', zero(month)),
      replace('DD', zero(day)),
      replace('HH', zero(hour)),
      replace('mm', zero(minute)),
      replace('ss', zero(second)),
      replace('Hi', hour),
      replace('mi', minute),
      replace('si', second)
    )
  )(f)
}
// string -> date -> [ string | number ]
const format = f => d => {
  switch (f) {
    case 'x': return d.getTime()
    case 'X': return divide(d.getTime(), 1000)
    case 'day': return d.getDay()
    case 'date': return d.getDate()
    default: return stringify(f)(d)
  }
}

// string -> string -> [ string | number ]
export default (
  f => (s = null) => compose(format(f), create)(s)
)
