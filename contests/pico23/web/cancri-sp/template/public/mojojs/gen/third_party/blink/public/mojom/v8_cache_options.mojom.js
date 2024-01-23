// third_party/blink/public/mojom/v8_cache_options.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/v8_cache_options.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');


  var V8CacheOptions = {};
  V8CacheOptions.kDefault = 0;
  V8CacheOptions.kNone = 1;
  V8CacheOptions.kCode = 2;
  V8CacheOptions.kCodeWithoutHeatCheck = 3;
  V8CacheOptions.kFullCodeWithoutHeatCheck = 4;
  V8CacheOptions.MIN_VALUE = 0;
  V8CacheOptions.MAX_VALUE = 4;

  V8CacheOptions.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  V8CacheOptions.toKnownEnumValue = function(value) {
    return value;
  };

  V8CacheOptions.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.V8CacheOptions = V8CacheOptions;
})();