/*
 * JSTools JavaScript utilities
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/
var utils = {}
// Core methods
  , core = require('./core')
// Namespaces with methods
  , string = require('./string')
  , file = require('./file')
  , async = require('./async')
  , uri = require('./uri')
  , array = require('./array')
  , object = require('./object')
  , date = require('./date')
  , request = require('./request')
// Third-party -- remove this if possible
  , inflection = require('../deps/inflection')
// Constructors
  , EventBuffer = require('./event_buffer').EventBuffer
  , XML = require('./xml').XML
  , SortedCollection = require('./sorted_collection').SortedCollection;

core.mixin(utils, core);

utils.string = string;
utils.file = file;
utils.async = async;
utils.uri = uri;
utils.array = array;
utils.object = object;
utils.date = date;
utils.request = request;
utils.inflection = inflection;
utils.SortedCollection = SortedCollection;
utils.EventBuffer = EventBuffer;
utils.XML = XML;

module.exports = utils;
