// media/mojo/mojom/cdm_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/cdm_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var content_decryption_module$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/content_decryption_module.mojom', 'content_decryption_module.mojom.js');
  }
  var frame_interface_factory$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/frame_interface_factory.mojom', 'frame_interface_factory.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var interface_provider$ =
      mojo.internal.exposeNamespace('serviceManager.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/service_manager/public/mojom/interface_provider.mojom', '../../../services/service_manager/public/mojom/interface_provider.mojom.js');
  }



  function CdmService_CreateCdmFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmService_CreateCdmFactory_Params.prototype.initDefaults_ = function() {
    this.factory = new bindings.InterfaceRequest();
    this.frameInterfaces = new frame_interface_factory$.FrameInterfaceFactoryPtr();
  };
  CdmService_CreateCdmFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmService_CreateCdmFactory_Params.validate = function(messageValidator, offset) {
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


    // validate CdmService_CreateCdmFactory_Params.factory
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmService_CreateCdmFactory_Params.frameInterfaces
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmService_CreateCdmFactory_Params.encodedSize = codec.kStructHeaderSize + 16;

  CdmService_CreateCdmFactory_Params.decode = function(decoder) {
    var packed;
    var val = new CdmService_CreateCdmFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.factory =
        decoder.decodeStruct(codec.InterfaceRequest);
    val.frameInterfaces =
        decoder.decodeStruct(new codec.Interface(frame_interface_factory$.FrameInterfaceFactoryPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CdmService_CreateCdmFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmService_CreateCdmFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.factory);
    encoder.encodeStruct(new codec.Interface(frame_interface_factory$.FrameInterfaceFactoryPtr), val.frameInterfaces);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CdmServiceBroker_GetService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CdmServiceBroker_GetService_Params.prototype.initDefaults_ = function() {
    this.cdmPath = null;
    this.receiver = new bindings.InterfaceRequest();
  };
  CdmServiceBroker_GetService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CdmServiceBroker_GetService_Params.validate = function(messageValidator, offset) {
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


    // validate CdmServiceBroker_GetService_Params.cdmPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CdmServiceBroker_GetService_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CdmServiceBroker_GetService_Params.encodedSize = codec.kStructHeaderSize + 16;

  CdmServiceBroker_GetService_Params.decode = function(decoder) {
    var packed;
    var val = new CdmServiceBroker_GetService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cdmPath =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CdmServiceBroker_GetService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CdmServiceBroker_GetService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.cdmPath);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kCdmService_CreateCdmFactory_Name = 1620539244;

  function CdmServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmService,
                                                   handleOrPtrInfo);
  }

  function CdmServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmService, associatedInterfacePtrInfo);
  }

  CdmServiceAssociatedPtr.prototype =
      Object.create(CdmServicePtr.prototype);
  CdmServiceAssociatedPtr.prototype.constructor =
      CdmServiceAssociatedPtr;

  function CdmServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmServicePtr.prototype.createCdmFactory = function() {
    return CdmServiceProxy.prototype.createCdmFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmServiceProxy.prototype.createCdmFactory = function(factory, frameInterfaces) {
    var params_ = new CdmService_CreateCdmFactory_Params();
    params_.factory = factory;
    params_.frameInterfaces = frameInterfaces;
    var builder = new codec.MessageV0Builder(
        kCdmService_CreateCdmFactory_Name,
        codec.align(CdmService_CreateCdmFactory_Params.encodedSize));
    builder.encodeStruct(CdmService_CreateCdmFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CdmServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmServiceStub.prototype.createCdmFactory = function(factory, frameInterfaces) {
    return this.delegate_ && this.delegate_.createCdmFactory && this.delegate_.createCdmFactory(factory, frameInterfaces);
  }

  CdmServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmService_CreateCdmFactory_Name:
      var params = reader.decodeStruct(CdmService_CreateCdmFactory_Params);
      this.createCdmFactory(params.factory, params.frameInterfaces);
      return true;
    default:
      return false;
    }
  };

  CdmServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCdmServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmService_CreateCdmFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CdmService_CreateCdmFactory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CdmService = {
    name: 'media.mojom.CdmService',
    kVersion: 0,
    ptrClass: CdmServicePtr,
    proxyClass: CdmServiceProxy,
    stubClass: CdmServiceStub,
    validateRequest: validateCdmServiceRequest,
    validateResponse: null,
  };
  CdmServiceStub.prototype.validator = validateCdmServiceRequest;
  CdmServiceProxy.prototype.validator = null;
  var kCdmServiceBroker_GetService_Name = 744883427;

  function CdmServiceBrokerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CdmServiceBroker,
                                                   handleOrPtrInfo);
  }

  function CdmServiceBrokerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CdmServiceBroker, associatedInterfacePtrInfo);
  }

  CdmServiceBrokerAssociatedPtr.prototype =
      Object.create(CdmServiceBrokerPtr.prototype);
  CdmServiceBrokerAssociatedPtr.prototype.constructor =
      CdmServiceBrokerAssociatedPtr;

  function CdmServiceBrokerProxy(receiver) {
    this.receiver_ = receiver;
  }
  CdmServiceBrokerPtr.prototype.getService = function() {
    return CdmServiceBrokerProxy.prototype.getService
        .apply(this.ptr.getProxy(), arguments);
  };

  CdmServiceBrokerProxy.prototype.getService = function(cdmPath, receiver) {
    var params_ = new CdmServiceBroker_GetService_Params();
    params_.cdmPath = cdmPath;
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kCdmServiceBroker_GetService_Name,
        codec.align(CdmServiceBroker_GetService_Params.encodedSize));
    builder.encodeStruct(CdmServiceBroker_GetService_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CdmServiceBrokerStub(delegate) {
    this.delegate_ = delegate;
  }
  CdmServiceBrokerStub.prototype.getService = function(cdmPath, receiver) {
    return this.delegate_ && this.delegate_.getService && this.delegate_.getService(cdmPath, receiver);
  }

  CdmServiceBrokerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCdmServiceBroker_GetService_Name:
      var params = reader.decodeStruct(CdmServiceBroker_GetService_Params);
      this.getService(params.cdmPath, params.receiver);
      return true;
    default:
      return false;
    }
  };

  CdmServiceBrokerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCdmServiceBrokerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCdmServiceBroker_GetService_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CdmServiceBroker_GetService_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCdmServiceBrokerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CdmServiceBroker = {
    name: 'media.mojom.CdmServiceBroker',
    kVersion: 0,
    ptrClass: CdmServiceBrokerPtr,
    proxyClass: CdmServiceBrokerProxy,
    stubClass: CdmServiceBrokerStub,
    validateRequest: validateCdmServiceBrokerRequest,
    validateResponse: null,
  };
  CdmServiceBrokerStub.prototype.validator = validateCdmServiceBrokerRequest;
  CdmServiceBrokerProxy.prototype.validator = null;
  exports.CdmService = CdmService;
  exports.CdmServicePtr = CdmServicePtr;
  exports.CdmServiceAssociatedPtr = CdmServiceAssociatedPtr;
  exports.CdmServiceBroker = CdmServiceBroker;
  exports.CdmServiceBrokerPtr = CdmServiceBrokerPtr;
  exports.CdmServiceBrokerAssociatedPtr = CdmServiceBrokerAssociatedPtr;
})();