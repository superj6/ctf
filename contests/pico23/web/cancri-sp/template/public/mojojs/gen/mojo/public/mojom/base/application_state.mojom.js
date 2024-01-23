// mojo/public/mojom/base/application_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/mojom/base/application_state.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojoBase.mojom');


  var ApplicationState = {};
  ApplicationState.UNKNOWN = 0;
  ApplicationState.HAS_RUNNING_ACTIVITIES = 1;
  ApplicationState.HAS_PAUSED_ACTIVITIES = 2;
  ApplicationState.HAS_STOPPED_ACTIVITIES = 3;
  ApplicationState.HAS_DESTROYED_ACTIVITIES = 4;
  ApplicationState.MIN_VALUE = 0;
  ApplicationState.MAX_VALUE = 4;

  ApplicationState.isKnownEnumValue = function(value) {
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

  ApplicationState.toKnownEnumValue = function(value) {
    return value;
  };

  ApplicationState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ApplicationState = ApplicationState;
})();