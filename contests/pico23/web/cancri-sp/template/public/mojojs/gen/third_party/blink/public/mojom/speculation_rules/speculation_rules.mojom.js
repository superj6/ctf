// third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom';
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
  var referrer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/referrer.mojom', '../loader/referrer.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var SpeculationAction = {};
  SpeculationAction.kPrefetch = 0;
  SpeculationAction.kPrefetchWithSubresources = 1;
  SpeculationAction.kPrerender = 2;
  SpeculationAction.MIN_VALUE = 0;
  SpeculationAction.MAX_VALUE = 2;

  SpeculationAction.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SpeculationAction.toKnownEnumValue = function(value) {
    return value;
  };

  SpeculationAction.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SpeculationTargetHint = {};
  SpeculationTargetHint.kNoHint = 0;
  SpeculationTargetHint.kBlank = 1;
  SpeculationTargetHint.kSelf = 2;
  SpeculationTargetHint.MIN_VALUE = 0;
  SpeculationTargetHint.MAX_VALUE = 2;

  SpeculationTargetHint.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SpeculationTargetHint.toKnownEnumValue = function(value) {
    return value;
  };

  SpeculationTargetHint.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SpeculationEagerness = {};
  SpeculationEagerness.kConservative = 0;
  SpeculationEagerness.kModerate = 1;
  SpeculationEagerness.kEager = 2;
  SpeculationEagerness.MIN_VALUE = 0;
  SpeculationEagerness.MAX_VALUE = 2;

  SpeculationEagerness.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  SpeculationEagerness.toKnownEnumValue = function(value) {
    return value;
  };

  SpeculationEagerness.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SpeculationCandidate(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpeculationCandidate.prototype.initDefaults_ = function() {
    this.url = null;
    this.action = SpeculationAction.kPrefetch;
    this.requiresAnonymousClientIpWhenCrossOrigin = false;
    this.referrer = null;
    this.targetBrowsingContextNameHint = SpeculationTargetHint.kNoHint;
    this.eagerness = SpeculationEagerness.kConservative;
  };
  SpeculationCandidate.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpeculationCandidate.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpeculationCandidate.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpeculationCandidate.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, SpeculationAction);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpeculationCandidate.referrer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, referrer$.Referrer, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate SpeculationCandidate.targetBrowsingContextNameHint
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, SpeculationTargetHint);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpeculationCandidate.eagerness
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, SpeculationEagerness);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SpeculationCandidate.encodedSize = codec.kStructHeaderSize + 32;

  SpeculationCandidate.decode = function(decoder) {
    var packed;
    var val = new SpeculationCandidate();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.action =
        decoder.decodeStruct(new codec.Enum(SpeculationAction));
    packed = decoder.readUint8();
    val.requiresAnonymousClientIpWhenCrossOrigin = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.referrer =
        decoder.decodeStructPointer(referrer$.Referrer);
    val.targetBrowsingContextNameHint =
        decoder.decodeStruct(new codec.Enum(SpeculationTargetHint));
    val.eagerness =
        decoder.decodeStruct(new codec.Enum(SpeculationEagerness));
    return val;
  };

  SpeculationCandidate.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpeculationCandidate.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.Int32, val.action);
    packed = 0;
    packed |= (val.requiresAnonymousClientIpWhenCrossOrigin & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(referrer$.Referrer, val.referrer);
    encoder.encodeStruct(codec.Int32, val.targetBrowsingContextNameHint);
    encoder.encodeStruct(codec.Int32, val.eagerness);
  };
  function SpeculationHost_UpdateSpeculationCandidates_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpeculationHost_UpdateSpeculationCandidates_Params.prototype.initDefaults_ = function() {
    this.candidates = null;
  };
  SpeculationHost_UpdateSpeculationCandidates_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpeculationHost_UpdateSpeculationCandidates_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SpeculationHost_UpdateSpeculationCandidates_Params.candidates
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(SpeculationCandidate), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SpeculationHost_UpdateSpeculationCandidates_Params.encodedSize = codec.kStructHeaderSize + 8;

  SpeculationHost_UpdateSpeculationCandidates_Params.decode = function(decoder) {
    var packed;
    var val = new SpeculationHost_UpdateSpeculationCandidates_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.candidates =
        decoder.decodeArrayPointer(new codec.PointerTo(SpeculationCandidate));
    return val;
  };

  SpeculationHost_UpdateSpeculationCandidates_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpeculationHost_UpdateSpeculationCandidates_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(SpeculationCandidate), val.candidates);
  };
  function SpeculationHost_EnableNoVarySearchSupport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SpeculationHost_EnableNoVarySearchSupport_Params.prototype.initDefaults_ = function() {
  };
  SpeculationHost_EnableNoVarySearchSupport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SpeculationHost_EnableNoVarySearchSupport_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SpeculationHost_EnableNoVarySearchSupport_Params.encodedSize = codec.kStructHeaderSize + 0;

  SpeculationHost_EnableNoVarySearchSupport_Params.decode = function(decoder) {
    var packed;
    var val = new SpeculationHost_EnableNoVarySearchSupport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SpeculationHost_EnableNoVarySearchSupport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SpeculationHost_EnableNoVarySearchSupport_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kSpeculationHost_UpdateSpeculationCandidates_Name = 0;
  var kSpeculationHost_EnableNoVarySearchSupport_Name = 1;

  function SpeculationHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SpeculationHost,
                                                   handleOrPtrInfo);
  }

  function SpeculationHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SpeculationHost, associatedInterfacePtrInfo);
  }

  SpeculationHostAssociatedPtr.prototype =
      Object.create(SpeculationHostPtr.prototype);
  SpeculationHostAssociatedPtr.prototype.constructor =
      SpeculationHostAssociatedPtr;

  function SpeculationHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  SpeculationHostPtr.prototype.updateSpeculationCandidates = function() {
    return SpeculationHostProxy.prototype.updateSpeculationCandidates
        .apply(this.ptr.getProxy(), arguments);
  };

  SpeculationHostProxy.prototype.updateSpeculationCandidates = function(candidates) {
    var params_ = new SpeculationHost_UpdateSpeculationCandidates_Params();
    params_.candidates = candidates;
    var builder = new codec.MessageV0Builder(
        kSpeculationHost_UpdateSpeculationCandidates_Name,
        codec.align(SpeculationHost_UpdateSpeculationCandidates_Params.encodedSize));
    builder.encodeStruct(SpeculationHost_UpdateSpeculationCandidates_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SpeculationHostPtr.prototype.enableNoVarySearchSupport = function() {
    return SpeculationHostProxy.prototype.enableNoVarySearchSupport
        .apply(this.ptr.getProxy(), arguments);
  };

  SpeculationHostProxy.prototype.enableNoVarySearchSupport = function() {
    var params_ = new SpeculationHost_EnableNoVarySearchSupport_Params();
    var builder = new codec.MessageV0Builder(
        kSpeculationHost_EnableNoVarySearchSupport_Name,
        codec.align(SpeculationHost_EnableNoVarySearchSupport_Params.encodedSize));
    builder.encodeStruct(SpeculationHost_EnableNoVarySearchSupport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SpeculationHostStub(delegate) {
    this.delegate_ = delegate;
  }
  SpeculationHostStub.prototype.updateSpeculationCandidates = function(candidates) {
    return this.delegate_ && this.delegate_.updateSpeculationCandidates && this.delegate_.updateSpeculationCandidates(candidates);
  }
  SpeculationHostStub.prototype.enableNoVarySearchSupport = function() {
    return this.delegate_ && this.delegate_.enableNoVarySearchSupport && this.delegate_.enableNoVarySearchSupport();
  }

  SpeculationHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSpeculationHost_UpdateSpeculationCandidates_Name:
      var params = reader.decodeStruct(SpeculationHost_UpdateSpeculationCandidates_Params);
      this.updateSpeculationCandidates(params.candidates);
      return true;
    case kSpeculationHost_EnableNoVarySearchSupport_Name:
      var params = reader.decodeStruct(SpeculationHost_EnableNoVarySearchSupport_Params);
      this.enableNoVarySearchSupport();
      return true;
    default:
      return false;
    }
  };

  SpeculationHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSpeculationHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSpeculationHost_UpdateSpeculationCandidates_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SpeculationHost_UpdateSpeculationCandidates_Params;
      break;
      case kSpeculationHost_EnableNoVarySearchSupport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SpeculationHost_EnableNoVarySearchSupport_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSpeculationHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SpeculationHost = {
    name: 'blink.mojom.SpeculationHost',
    kVersion: 0,
    ptrClass: SpeculationHostPtr,
    proxyClass: SpeculationHostProxy,
    stubClass: SpeculationHostStub,
    validateRequest: validateSpeculationHostRequest,
    validateResponse: null,
  };
  SpeculationHostStub.prototype.validator = validateSpeculationHostRequest;
  SpeculationHostProxy.prototype.validator = null;
  exports.SpeculationAction = SpeculationAction;
  exports.SpeculationTargetHint = SpeculationTargetHint;
  exports.SpeculationEagerness = SpeculationEagerness;
  exports.SpeculationCandidate = SpeculationCandidate;
  exports.SpeculationHost = SpeculationHost;
  exports.SpeculationHostPtr = SpeculationHostPtr;
  exports.SpeculationHostAssociatedPtr = SpeculationHostAssociatedPtr;
})();