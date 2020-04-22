'use strict';

// tests for hello

const expect = require('chai').expect;
const handler = require('../handler');

describe('hello', () => {
  before((done) => {
    done();
  });

  it('test getLocalGreeting', async () => {
    expect(handler.getLocalGreeting('en')).to.be.equal('Hello!');   
    expect(handler.getLocalGreeting('hi')).to.be.equal('👋');
  });
});
