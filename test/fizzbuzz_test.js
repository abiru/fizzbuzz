import assert from 'assert'
import {calculate} from '../lib/fizzbuzz'

describe('fizzbuzz', () => {

  it('fizz number', () => {
    assert.equal(calculate(3), 'fizz')
    assert.equal(calculate(6), 'fizz')
    assert.equal(calculate(9), 'fizz')
  })

  it('buzz number', () => {
    assert.equal(calculate(5), 'buzz')
    assert.equal(calculate(10), 'buzz')
    assert.equal(calculate(20), 'buzz')
  })

  it('fizzbuzz number', () => {
    assert.equal(calculate(15), 'fizzbuzz')
    assert.equal(calculate(30), 'fizzbuzz')
  })

})
