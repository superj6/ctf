// third_party/blink/public/mojom/permissions_policy/permissions_policy_feature.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/permissions_policy/permissions_policy_feature.mojom';
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


  var PermissionsPolicyFeature = {};
  PermissionsPolicyFeature.kNotFound = 0;
  PermissionsPolicyFeature.kAutoplay = 1;
  PermissionsPolicyFeature.kCamera = 2;
  PermissionsPolicyFeature.kEncryptedMedia = 3;
  PermissionsPolicyFeature.kFullscreen = 4;
  PermissionsPolicyFeature.kGeolocation = 5;
  PermissionsPolicyFeature.kMicrophone = 6;
  PermissionsPolicyFeature.kMidiFeature = 7;
  PermissionsPolicyFeature.kPayment = 8;
  PermissionsPolicyFeature.kSyncXHR = 13;
  PermissionsPolicyFeature.kUsb = 14;
  PermissionsPolicyFeature.kAccelerometer = 17;
  PermissionsPolicyFeature.kAmbientLightSensor = 18;
  PermissionsPolicyFeature.kGyroscope = 19;
  PermissionsPolicyFeature.kMagnetometer = 20;
  PermissionsPolicyFeature.kPictureInPicture = 26;
  PermissionsPolicyFeature.kVerticalScroll = 27;
  PermissionsPolicyFeature.kScreenWakeLock = 31;
  PermissionsPolicyFeature.kFrobulate = 41;
  PermissionsPolicyFeature.kSerial = 42;
  PermissionsPolicyFeature.kHid = 43;
  PermissionsPolicyFeature.kIdleDetection = 44;
  PermissionsPolicyFeature.kExecutionWhileOutOfViewport = 50;
  PermissionsPolicyFeature.kExecutionWhileNotRendered = 51;
  PermissionsPolicyFeature.kFocusWithoutUserActivation = 52;
  PermissionsPolicyFeature.kClientHintDPR = 53;
  PermissionsPolicyFeature.kClientHintDeviceMemory = 54;
  PermissionsPolicyFeature.kClientHintDownlink = 55;
  PermissionsPolicyFeature.kClientHintECT = 56;
  PermissionsPolicyFeature.kClientHintRTT = 58;
  PermissionsPolicyFeature.kClientHintUA = 59;
  PermissionsPolicyFeature.kClientHintUAArch = 60;
  PermissionsPolicyFeature.kClientHintUAModel = 61;
  PermissionsPolicyFeature.kClientHintUAPlatform = 62;
  PermissionsPolicyFeature.kClientHintViewportWidth = 63;
  PermissionsPolicyFeature.kClientHintWidth = 64;
  PermissionsPolicyFeature.kWebXr = 66;
  PermissionsPolicyFeature.kPublicKeyCredentialsGet = 67;
  PermissionsPolicyFeature.kClientHintUAMobile = 69;
  PermissionsPolicyFeature.kStorageAccessAPI = 70;
  PermissionsPolicyFeature.kClientHintUAFullVersion = 71;
  PermissionsPolicyFeature.kTrustTokenRedemption = 72;
  PermissionsPolicyFeature.kAttributionReporting = 73;
  PermissionsPolicyFeature.kClientHintUAPlatformVersion = 74;
  PermissionsPolicyFeature.kCrossOriginIsolated = 75;
  PermissionsPolicyFeature.kClipboardRead = 76;
  PermissionsPolicyFeature.kClipboardWrite = 77;
  PermissionsPolicyFeature.kWebShare = 78;
  PermissionsPolicyFeature.kGamepad = 79;
  PermissionsPolicyFeature.kOTPCredentials = 80;
  PermissionsPolicyFeature.kDisplayCapture = 81;
  PermissionsPolicyFeature.kSharedAutofill = 83;
  PermissionsPolicyFeature.kDirectSockets = 84;
  PermissionsPolicyFeature.kClientHintPrefersColorScheme = 85;
  PermissionsPolicyFeature.kWindowManagement = 86;
  PermissionsPolicyFeature.kClientHintUABitness = 87;
  PermissionsPolicyFeature.kClientHintUAReduced = 88;
  PermissionsPolicyFeature.kClientHintViewportHeight = 89;
  PermissionsPolicyFeature.kKeyboardMap = 90;
  PermissionsPolicyFeature.kRunAdAuction = 91;
  PermissionsPolicyFeature.kJoinAdInterestGroup = 92;
  PermissionsPolicyFeature.kClientHintUAFullVersionList = 93;
  PermissionsPolicyFeature.kClientHintUAFull = 94;
  PermissionsPolicyFeature.kClientHintUAWoW64 = 95;
  PermissionsPolicyFeature.kBrowsingTopics = 97;
  PermissionsPolicyFeature.kBrowsingTopicsBackwardCompatible = 98;
  PermissionsPolicyFeature.kClientHintSaveData = 99;
  PermissionsPolicyFeature.kLocalFonts = 100;
  PermissionsPolicyFeature.kBluetooth = 101;
  PermissionsPolicyFeature.kIdentityCredentialsGet = 102;
  PermissionsPolicyFeature.kSharedStorage = 103;
  PermissionsPolicyFeature.kUnload = 104;
  PermissionsPolicyFeature.kClientHintPrefersReducedMotion = 105;
  PermissionsPolicyFeature.kComputePressure = 106;
  PermissionsPolicyFeature.kSmartCard = 107;
  PermissionsPolicyFeature.kSharedStorageSelectUrl = 108;
  PermissionsPolicyFeature.kPrivateAggregation = 109;
  PermissionsPolicyFeature.MIN_VALUE = 0;
  PermissionsPolicyFeature.MAX_VALUE = 109;

  PermissionsPolicyFeature.isKnownEnumValue = function(value) {
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
    case 13:
    case 14:
    case 17:
    case 18:
    case 19:
    case 20:
    case 26:
    case 27:
    case 31:
    case 41:
    case 42:
    case 43:
    case 44:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 66:
    case 67:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
      return true;
    }
    return false;
  };

  PermissionsPolicyFeature.toKnownEnumValue = function(value) {
    return value;
  };

  PermissionsPolicyFeature.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.PermissionsPolicyFeature = PermissionsPolicyFeature;
})();