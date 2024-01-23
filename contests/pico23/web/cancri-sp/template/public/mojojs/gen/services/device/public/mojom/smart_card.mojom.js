// services/device/public/mojom/smart_card.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/smart_card.mojom';
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


  var SmartCardReaderState = {};
  SmartCardReaderState.kUnavailable = 0;
  SmartCardReaderState.kEmpty = 1;
  SmartCardReaderState.kPresent = 2;
  SmartCardReaderState.kExclusive = 3;
  SmartCardReaderState.kInuse = 4;
  SmartCardReaderState.kMute = 5;
  SmartCardReaderState.kUnpowered = 6;
  SmartCardReaderState.MIN_VALUE = 0;
  SmartCardReaderState.MAX_VALUE = 6;

  SmartCardReaderState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  SmartCardReaderState.toKnownEnumValue = function(value) {
    return value;
  };

  SmartCardReaderState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SmartCardReaderInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardReaderInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.state = 0;
    this.atr = null;
  };
  SmartCardReaderInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardReaderInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmartCardReaderInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmartCardReaderInfo.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, SmartCardReaderState);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmartCardReaderInfo.atr
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmartCardReaderInfo.encodedSize = codec.kStructHeaderSize + 24;

  SmartCardReaderInfo.decode = function(decoder) {
    var packed;
    var val = new SmartCardReaderInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.state =
        decoder.decodeStruct(new codec.Enum(SmartCardReaderState));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.atr =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  SmartCardReaderInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardReaderInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.atr);
  };
  function SmartCardManagerClient_ReaderAdded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardManagerClient_ReaderAdded_Params.prototype.initDefaults_ = function() {
    this.readerInfo = null;
  };
  SmartCardManagerClient_ReaderAdded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardManagerClient_ReaderAdded_Params.validate = function(messageValidator, offset) {
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


    // validate SmartCardManagerClient_ReaderAdded_Params.readerInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SmartCardReaderInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmartCardManagerClient_ReaderAdded_Params.encodedSize = codec.kStructHeaderSize + 8;

  SmartCardManagerClient_ReaderAdded_Params.decode = function(decoder) {
    var packed;
    var val = new SmartCardManagerClient_ReaderAdded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.readerInfo =
        decoder.decodeStructPointer(SmartCardReaderInfo);
    return val;
  };

  SmartCardManagerClient_ReaderAdded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardManagerClient_ReaderAdded_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SmartCardReaderInfo, val.readerInfo);
  };
  function SmartCardManagerClient_ReaderRemoved_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardManagerClient_ReaderRemoved_Params.prototype.initDefaults_ = function() {
    this.readerInfo = null;
  };
  SmartCardManagerClient_ReaderRemoved_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardManagerClient_ReaderRemoved_Params.validate = function(messageValidator, offset) {
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


    // validate SmartCardManagerClient_ReaderRemoved_Params.readerInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SmartCardReaderInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmartCardManagerClient_ReaderRemoved_Params.encodedSize = codec.kStructHeaderSize + 8;

  SmartCardManagerClient_ReaderRemoved_Params.decode = function(decoder) {
    var packed;
    var val = new SmartCardManagerClient_ReaderRemoved_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.readerInfo =
        decoder.decodeStructPointer(SmartCardReaderInfo);
    return val;
  };

  SmartCardManagerClient_ReaderRemoved_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardManagerClient_ReaderRemoved_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SmartCardReaderInfo, val.readerInfo);
  };
  function SmartCardManagerClient_ReaderChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardManagerClient_ReaderChanged_Params.prototype.initDefaults_ = function() {
    this.readerInfo = null;
  };
  SmartCardManagerClient_ReaderChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardManagerClient_ReaderChanged_Params.validate = function(messageValidator, offset) {
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


    // validate SmartCardManagerClient_ReaderChanged_Params.readerInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SmartCardReaderInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmartCardManagerClient_ReaderChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  SmartCardManagerClient_ReaderChanged_Params.decode = function(decoder) {
    var packed;
    var val = new SmartCardManagerClient_ReaderChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.readerInfo =
        decoder.decodeStructPointer(SmartCardReaderInfo);
    return val;
  };

  SmartCardManagerClient_ReaderChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardManagerClient_ReaderChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SmartCardReaderInfo, val.readerInfo);
  };
  var kSmartCardManagerClient_ReaderAdded_Name = 1610491090;
  var kSmartCardManagerClient_ReaderRemoved_Name = 1403231447;
  var kSmartCardManagerClient_ReaderChanged_Name = 199119185;

  function SmartCardManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SmartCardManagerClient,
                                                   handleOrPtrInfo);
  }

  function SmartCardManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SmartCardManagerClient, associatedInterfacePtrInfo);
  }

  SmartCardManagerClientAssociatedPtr.prototype =
      Object.create(SmartCardManagerClientPtr.prototype);
  SmartCardManagerClientAssociatedPtr.prototype.constructor =
      SmartCardManagerClientAssociatedPtr;

  function SmartCardManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  SmartCardManagerClientPtr.prototype.readerAdded = function() {
    return SmartCardManagerClientProxy.prototype.readerAdded
        .apply(this.ptr.getProxy(), arguments);
  };

  SmartCardManagerClientProxy.prototype.readerAdded = function(readerInfo) {
    var params_ = new SmartCardManagerClient_ReaderAdded_Params();
    params_.readerInfo = readerInfo;
    var builder = new codec.MessageV0Builder(
        kSmartCardManagerClient_ReaderAdded_Name,
        codec.align(SmartCardManagerClient_ReaderAdded_Params.encodedSize));
    builder.encodeStruct(SmartCardManagerClient_ReaderAdded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SmartCardManagerClientPtr.prototype.readerRemoved = function() {
    return SmartCardManagerClientProxy.prototype.readerRemoved
        .apply(this.ptr.getProxy(), arguments);
  };

  SmartCardManagerClientProxy.prototype.readerRemoved = function(readerInfo) {
    var params_ = new SmartCardManagerClient_ReaderRemoved_Params();
    params_.readerInfo = readerInfo;
    var builder = new codec.MessageV0Builder(
        kSmartCardManagerClient_ReaderRemoved_Name,
        codec.align(SmartCardManagerClient_ReaderRemoved_Params.encodedSize));
    builder.encodeStruct(SmartCardManagerClient_ReaderRemoved_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SmartCardManagerClientPtr.prototype.readerChanged = function() {
    return SmartCardManagerClientProxy.prototype.readerChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  SmartCardManagerClientProxy.prototype.readerChanged = function(readerInfo) {
    var params_ = new SmartCardManagerClient_ReaderChanged_Params();
    params_.readerInfo = readerInfo;
    var builder = new codec.MessageV0Builder(
        kSmartCardManagerClient_ReaderChanged_Name,
        codec.align(SmartCardManagerClient_ReaderChanged_Params.encodedSize));
    builder.encodeStruct(SmartCardManagerClient_ReaderChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SmartCardManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  SmartCardManagerClientStub.prototype.readerAdded = function(readerInfo) {
    return this.delegate_ && this.delegate_.readerAdded && this.delegate_.readerAdded(readerInfo);
  }
  SmartCardManagerClientStub.prototype.readerRemoved = function(readerInfo) {
    return this.delegate_ && this.delegate_.readerRemoved && this.delegate_.readerRemoved(readerInfo);
  }
  SmartCardManagerClientStub.prototype.readerChanged = function(readerInfo) {
    return this.delegate_ && this.delegate_.readerChanged && this.delegate_.readerChanged(readerInfo);
  }

  SmartCardManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmartCardManagerClient_ReaderAdded_Name:
      var params = reader.decodeStruct(SmartCardManagerClient_ReaderAdded_Params);
      this.readerAdded(params.readerInfo);
      return true;
    case kSmartCardManagerClient_ReaderRemoved_Name:
      var params = reader.decodeStruct(SmartCardManagerClient_ReaderRemoved_Params);
      this.readerRemoved(params.readerInfo);
      return true;
    case kSmartCardManagerClient_ReaderChanged_Name:
      var params = reader.decodeStruct(SmartCardManagerClient_ReaderChanged_Params);
      this.readerChanged(params.readerInfo);
      return true;
    default:
      return false;
    }
  };

  SmartCardManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSmartCardManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSmartCardManagerClient_ReaderAdded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SmartCardManagerClient_ReaderAdded_Params;
      break;
      case kSmartCardManagerClient_ReaderRemoved_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SmartCardManagerClient_ReaderRemoved_Params;
      break;
      case kSmartCardManagerClient_ReaderChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SmartCardManagerClient_ReaderChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSmartCardManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SmartCardManagerClient = {
    name: 'device.mojom.SmartCardManagerClient',
    kVersion: 0,
    ptrClass: SmartCardManagerClientPtr,
    proxyClass: SmartCardManagerClientProxy,
    stubClass: SmartCardManagerClientStub,
    validateRequest: validateSmartCardManagerClientRequest,
    validateResponse: null,
  };
  SmartCardManagerClientStub.prototype.validator = validateSmartCardManagerClientRequest;
  SmartCardManagerClientProxy.prototype.validator = null;
  exports.SmartCardReaderState = SmartCardReaderState;
  exports.SmartCardReaderInfo = SmartCardReaderInfo;
  exports.SmartCardManagerClient = SmartCardManagerClient;
  exports.SmartCardManagerClientPtr = SmartCardManagerClientPtr;
  exports.SmartCardManagerClientAssociatedPtr = SmartCardManagerClientAssociatedPtr;
})();