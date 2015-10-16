/*
 * Test plugin to show pattern
 */

define(function(require){

    'use strict';

    var $               = require('jquery');
    var bsp_utils       = require('bsp-utils');
    var testUtility     = require('utilities/test-utility');
    var jqueryTruncate   = require('plugins/jquery.truncate');

    var thePlugin = {
        '_defaultOptions': {
        },
        // when we install the plugin, we create our instance
        _install: function() {
            var self = this;
            self.testInstance = Object.create(testUtility);
            self.testInstance.log('Truncate: Install');
        },
        '_init': function(roots, selector) { 
            var self = this;
            self.testInstance.log('truncate init....');
        },
        // run each time something gets into the DOM
        '_each': function(item) {
            var self = this;
            var options = this.option(item);
            self.testInstance.log('sticky: EACH');
            self.testInstance.log(options);
            $(item).truncate(options);  
        }
    };

    return bsp_utils.plugin(false, 'bsp', 'truncate', thePlugin);
});
