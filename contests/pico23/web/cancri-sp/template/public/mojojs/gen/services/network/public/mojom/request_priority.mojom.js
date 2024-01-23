// services/network/public/mojom/request_priority.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/request_priority.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');


  var RequestPriority = {};
  RequestPriority.kThrottled = 0;
  RequestPriority.kIdle = 1;
  RequestPriority.kLowest = 2;
  RequestPriority.kLow = 3;
  RequestPriority.kMedium = 4;
  RequestPriority.kHighest = 5;
  RequestPriority.MIN_VALUE = 0;
  RequestPriority.MAX_VALUE = 5;

  RequestPriority.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  RequestPriority.toKnownEnumValue = function(value) {
    return value;
  };

  RequestPriority.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchPriorityAttribute = {};
  FetchPriorityAttribute.kLow = 0;
  FetchPriorityAttribute.kAuto = 1;
  FetchPriorityAttribute.kHigh = 2;
  FetchPriorityAttribute.MIN_VALUE = 0;
  FetchPriorityAttribute.MAX_VALUE = 2;

  FetchPriorityAttribute.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FetchPriorityAttribute.toKnownEnumValue = function(value) {
    return value;
  };

  FetchPriorityAttribute.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.RequestPriority = RequestPriority;
  exports.FetchPriorityAttribute = FetchPriorityAttribute;
})();