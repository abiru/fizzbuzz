import {calculate} from './lib/fizzbuzz'
import _ from 'lodash'

_.times(100, (number) => {
  console.log(calculate(number))
})
