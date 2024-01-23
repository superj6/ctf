// components/attribution_reporting/eligibility_error.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/attribution_reporting/eligibility_error.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('attributionReporting.mojom');


  var EligibilityError = {};
  EligibilityError.kInvalidStructuredHeader = 0;
  EligibilityError.kContainsNavigationSource = 1;
  EligibilityError.kIneligible = 2;
  EligibilityError.MIN_VALUE = 0;
  EligibilityError.MAX_VALUE = 2;

  EligibilityError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  EligibilityError.toKnownEnumValue = function(value) {
    return value;
  };

  EligibilityError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.EligibilityError = EligibilityError;
})();