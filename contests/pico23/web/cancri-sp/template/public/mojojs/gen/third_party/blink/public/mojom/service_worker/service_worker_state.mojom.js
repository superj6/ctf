// third_party/blink/public/mojom/service_worker/service_worker_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_state.mojom';
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


  var ServiceWorkerState = {};
  ServiceWorkerState.kParsed = 0;
  ServiceWorkerState.kInstalling = 1;
  ServiceWorkerState.kInstalled = 2;
  ServiceWorkerState.kActivating = 3;
  ServiceWorkerState.kActivated = 4;
  ServiceWorkerState.kRedundant = 5;
  ServiceWorkerState.MIN_VALUE = 0;
  ServiceWorkerState.MAX_VALUE = 5;

  ServiceWorkerState.isKnownEnumValue = function(value) {
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

  ServiceWorkerState.toKnownEnumValue = function(value) {
    return value;
  };

  ServiceWorkerState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ServiceWorkerState = ServiceWorkerState;
})();