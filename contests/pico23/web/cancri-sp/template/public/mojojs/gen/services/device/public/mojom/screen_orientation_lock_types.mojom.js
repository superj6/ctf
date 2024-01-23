// services/device/public/mojom/screen_orientation_lock_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/screen_orientation_lock_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');


  var ScreenOrientationLockResult = {};
  ScreenOrientationLockResult.SCREEN_ORIENTATION_LOCK_RESULT_SUCCESS = 0;
  ScreenOrientationLockResult.SCREEN_ORIENTATION_LOCK_RESULT_ERROR_NOT_AVAILABLE = 1;
  ScreenOrientationLockResult.SCREEN_ORIENTATION_LOCK_RESULT_ERROR_FULLSCREEN_REQUIRED = 2;
  ScreenOrientationLockResult.SCREEN_ORIENTATION_LOCK_RESULT_ERROR_CANCELED = 3;
  ScreenOrientationLockResult.MIN_VALUE = 0;
  ScreenOrientationLockResult.MAX_VALUE = 3;

  ScreenOrientationLockResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ScreenOrientationLockResult.toKnownEnumValue = function(value) {
    return value;
  };

  ScreenOrientationLockResult.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ScreenOrientationLockType = {};
  ScreenOrientationLockType.DEFAULT = 0;
  ScreenOrientationLockType.PORTRAIT_PRIMARY = 1;
  ScreenOrientationLockType.PORTRAIT_SECONDARY = 2;
  ScreenOrientationLockType.LANDSCAPE_PRIMARY = 3;
  ScreenOrientationLockType.LANDSCAPE_SECONDARY = 4;
  ScreenOrientationLockType.ANY = 5;
  ScreenOrientationLockType.LANDSCAPE = 6;
  ScreenOrientationLockType.PORTRAIT = 7;
  ScreenOrientationLockType.NATURAL = 8;
  ScreenOrientationLockType.MIN_VALUE = 0;
  ScreenOrientationLockType.MAX_VALUE = 8;

  ScreenOrientationLockType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return true;
    }
    return false;
  };

  ScreenOrientationLockType.toKnownEnumValue = function(value) {
    return value;
  };

  ScreenOrientationLockType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ScreenOrientationLockResult = ScreenOrientationLockResult;
  exports.ScreenOrientationLockType = ScreenOrientationLockType;
})();