// third_party/blink/public/mojom/payments/payment_credential.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/payments/payment_credential.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('payments.mojom');


  var PaymentCredentialStorageStatus = {};
  PaymentCredentialStorageStatus.SUCCESS = 0;
  PaymentCredentialStorageStatus.FAILED_TO_STORE_CREDENTIAL = 1;
  PaymentCredentialStorageStatus.MIN_VALUE = 0;
  PaymentCredentialStorageStatus.MAX_VALUE = 1;

  PaymentCredentialStorageStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  PaymentCredentialStorageStatus.toKnownEnumValue = function(value) {
    return value;
  };

  PaymentCredentialStorageStatus.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PaymentCredential_StorePaymentCredential_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCredential_StorePaymentCredential_Params.prototype.initDefaults_ = function() {
    this.credentialId = null;
    this.rpId = null;
    this.userId = null;
  };
  PaymentCredential_StorePaymentCredential_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCredential_StorePaymentCredential_Params.validate = function(messageValidator, offset) {
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


    // validate PaymentCredential_StorePaymentCredential_Params.credentialId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_Params.rpId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_Params.userId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCredential_StorePaymentCredential_Params.encodedSize = codec.kStructHeaderSize + 24;

  PaymentCredential_StorePaymentCredential_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentCredential_StorePaymentCredential_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.credentialId =
        decoder.decodeArrayPointer(codec.Uint8);
    val.rpId =
        decoder.decodeStruct(codec.String);
    val.userId =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  PaymentCredential_StorePaymentCredential_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCredential_StorePaymentCredential_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.credentialId);
    encoder.encodeStruct(codec.String, val.rpId);
    encoder.encodeArrayPointer(codec.Uint8, val.userId);
  };
  function PaymentCredential_StorePaymentCredential_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCredential_StorePaymentCredential_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  PaymentCredential_StorePaymentCredential_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate PaymentCredential_StorePaymentCredential_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PaymentCredentialStorageStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PaymentCredential_StorePaymentCredential_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PaymentCredential_StorePaymentCredential_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(new codec.Enum(PaymentCredentialStorageStatus));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPaymentCredential_StorePaymentCredential_Name = 0;

  function PaymentCredentialPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PaymentCredential,
                                                   handleOrPtrInfo);
  }

  function PaymentCredentialAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PaymentCredential, associatedInterfacePtrInfo);
  }

  PaymentCredentialAssociatedPtr.prototype =
      Object.create(PaymentCredentialPtr.prototype);
  PaymentCredentialAssociatedPtr.prototype.constructor =
      PaymentCredentialAssociatedPtr;

  function PaymentCredentialProxy(receiver) {
    this.receiver_ = receiver;
  }
  PaymentCredentialPtr.prototype.storePaymentCredential = function() {
    return PaymentCredentialProxy.prototype.storePaymentCredential
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentCredentialProxy.prototype.storePaymentCredential = function(credentialId, rpId, userId) {
    var params_ = new PaymentCredential_StorePaymentCredential_Params();
    params_.credentialId = credentialId;
    params_.rpId = rpId;
    params_.userId = userId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPaymentCredential_StorePaymentCredential_Name,
          codec.align(PaymentCredential_StorePaymentCredential_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PaymentCredential_StorePaymentCredential_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PaymentCredential_StorePaymentCredential_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PaymentCredentialStub(delegate) {
    this.delegate_ = delegate;
  }
  PaymentCredentialStub.prototype.storePaymentCredential = function(credentialId, rpId, userId) {
    return this.delegate_ && this.delegate_.storePaymentCredential && this.delegate_.storePaymentCredential(credentialId, rpId, userId);
  }

  PaymentCredentialStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PaymentCredentialStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPaymentCredential_StorePaymentCredential_Name:
      var params = reader.decodeStruct(PaymentCredential_StorePaymentCredential_Params);
      this.storePaymentCredential(params.credentialId, params.rpId, params.userId).then(function(response) {
        var responseParams =
            new PaymentCredential_StorePaymentCredential_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kPaymentCredential_StorePaymentCredential_Name,
            codec.align(PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PaymentCredential_StorePaymentCredential_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePaymentCredentialRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPaymentCredential_StorePaymentCredential_Name:
        if (message.expectsResponse())
          paramsClass = PaymentCredential_StorePaymentCredential_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePaymentCredentialResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPaymentCredential_StorePaymentCredential_Name:
        if (message.isResponse())
          paramsClass = PaymentCredential_StorePaymentCredential_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PaymentCredential = {
    name: 'payments.mojom.PaymentCredential',
    kVersion: 0,
    ptrClass: PaymentCredentialPtr,
    proxyClass: PaymentCredentialProxy,
    stubClass: PaymentCredentialStub,
    validateRequest: validatePaymentCredentialRequest,
    validateResponse: validatePaymentCredentialResponse,
  };
  PaymentCredentialStub.prototype.validator = validatePaymentCredentialRequest;
  PaymentCredentialProxy.prototype.validator = validatePaymentCredentialResponse;
  exports.PaymentCredentialStorageStatus = PaymentCredentialStorageStatus;
  exports.PaymentCredential = PaymentCredential;
  exports.PaymentCredentialPtr = PaymentCredentialPtr;
  exports.PaymentCredentialAssociatedPtr = PaymentCredentialAssociatedPtr;
})();