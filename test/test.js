// force the test environment to 'test'
process.env.NODE_ENV = 'test';
const express = require('express');
// use zombie.js as headless browser
var Browser = require('zombie');
// load Node.js assertion module
var assert = require('assert');
// get the application server module
const app = require('../server');

var easierPuzzel = require('../public/js/easierPuzzel.js');

describe('Testing the puzzel game', function() {
    before(function() {
        this.server = app.listen(3000);
        // initialize the browser using the same port as the test application
        this.browser = new Browser({ site: 'http://localhost:3000' });
    });

    // load the mainpage
    beforeEach(function(done) {
        this.browser.visit('/', done);
    });


    it('should create load the page', function() {
        assert.ok(this.browser.success);
    });
    it('should respond to mouse click', function() {
        console.log(easierPuzzel.easierPuzzel())
            // this.browser.evaluate("$('#harder-puzzel').click()")
            // this.browser.fire(this.browser.query("#harder-puel"), 'click')
            // this.browser.assert.text('title', 'My Awesome Page')

    })
    it('should paint the canvas');
    it('should create position object');
    it('should create puzzel number entires on the canvas');
    it('should check availablity of the position');
    it('should check placeholder of entry of the position');
    it('should make a move to the new location');

    after(function(done) {
        this.server.close(done);
    });
});