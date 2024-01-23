// services/network/public/mojom/oblivious_http_request.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/oblivious_http_request.mojom';
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
  var isolation_info$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/isolation_info.mojom', 'isolation_info.mojom.js');
  }
  var mutable_network_traffic_annotation_tag$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom', 'mutable_network_traffic_annotation_tag.mojom.js');
  }
  var trust_tokens$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/trust_tokens.mojom', 'trust_tokens.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function ObliviousHttpRequestBody(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObliviousHttpRequestBody.prototype.initDefaults_ = function() {
    this.content = null;
    this.contentType = null;
  };
  ObliviousHttpRequestBody.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObliviousHttpRequestBody.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequestBody.content
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequestBody.contentType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ObliviousHttpRequestBody.encodedSize = codec.kStructHeaderSize + 16;

  ObliviousHttpRequestBody.decode = function(decoder) {
    var packed;
    var val = new ObliviousHttpRequestBody();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.content =
        decoder.decodeStruct(codec.String);
    val.contentType =
        decoder.decodeStruct(codec.String);
    return val;
  };

  ObliviousHttpRequestBody.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObliviousHttpRequestBody.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.content);
    encoder.encodeStruct(codec.String, val.contentType);
  };
  function ObliviousHttpPaddingParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObliviousHttpPaddingParameters.prototype.initDefaults_ = function() {
    this.addExponentialPad = false;
    this.padToNextPowerOfTwo = false;
    this.exponentialMean = 0;
  };
  ObliviousHttpPaddingParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObliviousHttpPaddingParameters.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  ObliviousHttpPaddingParameters.encodedSize = codec.kStructHeaderSize + 8;

  ObliviousHttpPaddingParameters.decode = function(decoder) {
    var packed;
    var val = new ObliviousHttpPaddingParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.addExponentialPad = (packed >> 0) & 1 ? true : false;
    val.padToNextPowerOfTwo = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    val.exponentialMean =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ObliviousHttpPaddingParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObliviousHttpPaddingParameters.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.addExponentialPad & 1) << 0
    packed |= (val.padToNextPowerOfTwo & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint16, val.exponentialMean);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ObliviousHttpRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObliviousHttpRequest.prototype.initDefaults_ = function() {
    this.relayUrl = null;
    this.trafficAnnotation = null;
    this.keyConfig = null;
    this.resourceUrl = null;
    this.method = null;
    this.requestBody = null;
    this.trustTokenParams = null;
    this.paddingParams = null;
  };
  ObliviousHttpRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObliviousHttpRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.relayUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.trafficAnnotation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.keyConfig
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.resourceUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.requestBody
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, ObliviousHttpRequestBody, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.trustTokenParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, trust_tokens$.TrustTokenParams, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpRequest.paddingParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, ObliviousHttpPaddingParameters, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ObliviousHttpRequest.encodedSize = codec.kStructHeaderSize + 64;

  ObliviousHttpRequest.decode = function(decoder) {
    var packed;
    var val = new ObliviousHttpRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.relayUrl =
        decoder.decodeStructPointer(url$.Url);
    val.trafficAnnotation =
        decoder.decodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag);
    val.keyConfig =
        decoder.decodeStruct(codec.String);
    val.resourceUrl =
        decoder.decodeStructPointer(url$.Url);
    val.method =
        decoder.decodeStruct(codec.String);
    val.requestBody =
        decoder.decodeStructPointer(ObliviousHttpRequestBody);
    val.trustTokenParams =
        decoder.decodeStructPointer(trust_tokens$.TrustTokenParams);
    val.paddingParams =
        decoder.decodeStructPointer(ObliviousHttpPaddingParameters);
    return val;
  };

  ObliviousHttpRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObliviousHttpRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.relayUrl);
    encoder.encodeStructPointer(mutable_network_traffic_annotation_tag$.MutableNetworkTrafficAnnotationTag, val.trafficAnnotation);
    encoder.encodeStruct(codec.String, val.keyConfig);
    encoder.encodeStructPointer(url$.Url, val.resourceUrl);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(ObliviousHttpRequestBody, val.requestBody);
    encoder.encodeStructPointer(trust_tokens$.TrustTokenParams, val.trustTokenParams);
    encoder.encodeStructPointer(ObliviousHttpPaddingParameters, val.paddingParams);
  };
  function ObliviousHttpClient_OnCompleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ObliviousHttpClient_OnCompleted_Params.prototype.initDefaults_ = function() {
    this.responseBody = null;
    this.netError = 0;
  };
  ObliviousHttpClient_OnCompleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ObliviousHttpClient_OnCompleted_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ObliviousHttpClient_OnCompleted_Params.responseBody
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ObliviousHttpClient_OnCompleted_Params.encodedSize = codec.kStructHeaderSize + 16;

  ObliviousHttpClient_OnCompleted_Params.decode = function(decoder) {
    var packed;
    var val = new ObliviousHttpClient_OnCompleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.responseBody =
        decoder.decodeStruct(codec.NullableString);
    val.netError =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ObliviousHttpClient_OnCompleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ObliviousHttpClient_OnCompleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.responseBody);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kObliviousHttpClient_OnCompleted_Name = 2050894614;

  function ObliviousHttpClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ObliviousHttpClient,
                                                   handleOrPtrInfo);
  }

  function ObliviousHttpClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ObliviousHttpClient, associatedInterfacePtrInfo);
  }

  ObliviousHttpClientAssociatedPtr.prototype =
      Object.create(ObliviousHttpClientPtr.prototype);
  ObliviousHttpClientAssociatedPtr.prototype.constructor =
      ObliviousHttpClientAssociatedPtr;

  function ObliviousHttpClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ObliviousHttpClientPtr.prototype.onCompleted = function() {
    return ObliviousHttpClientProxy.prototype.onCompleted
        .apply(this.ptr.getProxy(), arguments);
  };

  ObliviousHttpClientProxy.prototype.onCompleted = function(responseBody, netError) {
    var params_ = new ObliviousHttpClient_OnCompleted_Params();
    params_.responseBody = responseBody;
    params_.netError = netError;
    var builder = new codec.MessageV0Builder(
        kObliviousHttpClient_OnCompleted_Name,
        codec.align(ObliviousHttpClient_OnCompleted_Params.encodedSize));
    builder.encodeStruct(ObliviousHttpClient_OnCompleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ObliviousHttpClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ObliviousHttpClientStub.prototype.onCompleted = function(responseBody, netError) {
    return this.delegate_ && this.delegate_.onCompleted && this.delegate_.onCompleted(responseBody, netError);
  }

  ObliviousHttpClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kObliviousHttpClient_OnCompleted_Name:
      var params = reader.decodeStruct(ObliviousHttpClient_OnCompleted_Params);
      this.onCompleted(params.responseBody, params.netError);
      return true;
    default:
      return false;
    }
  };

  ObliviousHttpClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateObliviousHttpClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kObliviousHttpClient_OnCompleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ObliviousHttpClient_OnCompleted_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateObliviousHttpClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ObliviousHttpClient = {
    name: 'network.mojom.ObliviousHttpClient',
    kVersion: 0,
    ptrClass: ObliviousHttpClientPtr,
    proxyClass: ObliviousHttpClientProxy,
    stubClass: ObliviousHttpClientStub,
    validateRequest: validateObliviousHttpClientRequest,
    validateResponse: null,
  };
  ObliviousHttpClientStub.prototype.validator = validateObliviousHttpClientRequest;
  ObliviousHttpClientProxy.prototype.validator = null;
  exports.ObliviousHttpRequestBody = ObliviousHttpRequestBody;
  exports.ObliviousHttpPaddingParameters = ObliviousHttpPaddingParameters;
  exports.ObliviousHttpRequest = ObliviousHttpRequest;
  exports.ObliviousHttpClient = ObliviousHttpClient;
  exports.ObliviousHttpClientPtr = ObliviousHttpClientPtr;
  exports.ObliviousHttpClientAssociatedPtr = ObliviousHttpClientAssociatedPtr;
})();