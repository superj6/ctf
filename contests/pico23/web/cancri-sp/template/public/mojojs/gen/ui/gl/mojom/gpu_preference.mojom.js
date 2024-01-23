// ui/gl/mojom/gpu_preference.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gl/mojom/gpu_preference.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gl.mojom');


  var GpuPreference = {};
  GpuPreference.kNone = 0;
  GpuPreference.kDefault = 1;
  GpuPreference.kLowPower = 2;
  GpuPreference.kHighPerformance = 3;
  GpuPreference.MIN_VALUE = 0;
  GpuPreference.MAX_VALUE = 3;

  GpuPreference.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  GpuPreference.toKnownEnumValue = function(value) {
    return value;
  };

  GpuPreference.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.GpuPreference = GpuPreference;
})();