var alcoholFlushResponse = require('../');
var es = require('event-stream');
var should = require('should');
var fs = require('fs');

var path = require('path');
require('mocha');

var noFlushResponse = require('./fixtures/no_flush_response.json');
var moderateFlushResponse = require('./fixtures/moderate_flush_response.json');
var extremeFlushResponse = require('./fixtures/extreme_flush_response.json');

describe('alcoholFlushResponse', function() {

  describe('none', function() {
    it('should match the no flush response', function(done) {
      var query = alcoholFlushResponse.none();
      var stream = query.stream();
      es.readArray(noFlushResponse).pipe(stream);
      stream.on('end', function(){
        query.matches().length.should.equal(1);
        query.percentage().should.equal(100);
        done();
      });
    });
  });

  describe('moderate', function() {
    it('should match the moderate flush response', function(done) {
      var query = alcoholFlushResponse.moderate();
      var stream = query.stream();
      es.readArray(moderateFlushResponse).pipe(stream);
      stream.on('end', function(){
        query.matches().length.should.equal(1);
        query.percentage().should.equal(100);
        done();
      });
    });
  });

  describe('extreme', function() {
    it('should match the extreme flush response', function(done) {
      var query = alcoholFlushResponse.extreme();
      var stream = query.stream();
      es.readArray(extremeFlushResponse).pipe(stream);
      stream.on('end', function(){
        query.matches().length.should.equal(1);
        query.percentage().should.equal(100);
        done();
      });
    });
  });
});
