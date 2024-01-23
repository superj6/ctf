// third_party/blink/public/mojom/annotation/annotation.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/annotation/annotation.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var link_to_text$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/link_to_text/link_to_text.mojom', '../link_to_text/link_to_text.mojom.js');
  }


  var AnnotationType = {};
  AnnotationType.kSharedHighlight = 0;
  AnnotationType.kUserNote = 1;
  AnnotationType.MIN_VALUE = 0;
  AnnotationType.MAX_VALUE = 1;

  AnnotationType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AnnotationType.toKnownEnumValue = function(value) {
    return value;
  };

  AnnotationType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SelectorCreationResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SelectorCreationResult.prototype.initDefaults_ = function() {
    this.hostReceiver = new bindings.InterfaceRequest();
    this.agentRemote = new AnnotationAgentPtr();
    this.serializedSelector = null;
    this.selectedText = null;
  };
  SelectorCreationResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SelectorCreationResult.validate = function(messageValidator, offset) {
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


    // validate SelectorCreationResult.hostReceiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectorCreationResult.agentRemote
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectorCreationResult.serializedSelector
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectorCreationResult.selectedText
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SelectorCreationResult.encodedSize = codec.kStructHeaderSize + 32;

  SelectorCreationResult.decode = function(decoder) {
    var packed;
    var val = new SelectorCreationResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostReceiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    val.agentRemote =
        decoder.decodeStruct(new codec.Interface(AnnotationAgentPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.serializedSelector =
        decoder.decodeStruct(codec.String);
    val.selectedText =
        decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  SelectorCreationResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SelectorCreationResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.hostReceiver);
    encoder.encodeStruct(new codec.Interface(AnnotationAgentPtr), val.agentRemote);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.serializedSelector);
    encoder.encodeStructPointer(string16$.String16, val.selectedText);
  };
  function AnnotationAgent_ScrollIntoView_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnnotationAgent_ScrollIntoView_Params.prototype.initDefaults_ = function() {
  };
  AnnotationAgent_ScrollIntoView_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnnotationAgent_ScrollIntoView_Params.validate = function(messageValidator, offset) {
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

  AnnotationAgent_ScrollIntoView_Params.encodedSize = codec.kStructHeaderSize + 0;

  AnnotationAgent_ScrollIntoView_Params.decode = function(decoder) {
    var packed;
    var val = new AnnotationAgent_ScrollIntoView_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AnnotationAgent_ScrollIntoView_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnnotationAgent_ScrollIntoView_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AnnotationAgentHost_DidFinishAttachment_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnnotationAgentHost_DidFinishAttachment_Params.prototype.initDefaults_ = function() {
    this.documentRelativeRect = null;
  };
  AnnotationAgentHost_DidFinishAttachment_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnnotationAgentHost_DidFinishAttachment_Params.validate = function(messageValidator, offset) {
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


    // validate AnnotationAgentHost_DidFinishAttachment_Params.documentRelativeRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnnotationAgentHost_DidFinishAttachment_Params.encodedSize = codec.kStructHeaderSize + 8;

  AnnotationAgentHost_DidFinishAttachment_Params.decode = function(decoder) {
    var packed;
    var val = new AnnotationAgentHost_DidFinishAttachment_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.documentRelativeRect =
        decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  AnnotationAgentHost_DidFinishAttachment_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnnotationAgentHost_DidFinishAttachment_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.documentRelativeRect);
  };
  function AnnotationAgentContainer_CreateAgent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnnotationAgentContainer_CreateAgent_Params.prototype.initDefaults_ = function() {
    this.hostRemote = new AnnotationAgentHostPtr();
    this.agentReceiver = new bindings.InterfaceRequest();
    this.type = 0;
    this.serializedSelector = null;
  };
  AnnotationAgentContainer_CreateAgent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnnotationAgentContainer_CreateAgent_Params.validate = function(messageValidator, offset) {
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


    // validate AnnotationAgentContainer_CreateAgent_Params.hostRemote
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnnotationAgentContainer_CreateAgent_Params.agentReceiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnnotationAgentContainer_CreateAgent_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, AnnotationType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnnotationAgentContainer_CreateAgent_Params.serializedSelector
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnnotationAgentContainer_CreateAgent_Params.encodedSize = codec.kStructHeaderSize + 24;

  AnnotationAgentContainer_CreateAgent_Params.decode = function(decoder) {
    var packed;
    var val = new AnnotationAgentContainer_CreateAgent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostRemote =
        decoder.decodeStruct(new codec.Interface(AnnotationAgentHostPtr));
    val.agentReceiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    val.type =
        decoder.decodeStruct(new codec.Enum(AnnotationType));
    val.serializedSelector =
        decoder.decodeStruct(codec.String);
    return val;
  };

  AnnotationAgentContainer_CreateAgent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnnotationAgentContainer_CreateAgent_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(AnnotationAgentHostPtr), val.hostRemote);
    encoder.encodeStruct(codec.InterfaceRequest, val.agentReceiver);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.String, val.serializedSelector);
  };
  function AnnotationAgentContainer_CreateAgentFromSelection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnnotationAgentContainer_CreateAgentFromSelection_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  AnnotationAgentContainer_CreateAgentFromSelection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnnotationAgentContainer_CreateAgentFromSelection_Params.validate = function(messageValidator, offset) {
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


    // validate AnnotationAgentContainer_CreateAgentFromSelection_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AnnotationType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnnotationAgentContainer_CreateAgentFromSelection_Params.encodedSize = codec.kStructHeaderSize + 8;

  AnnotationAgentContainer_CreateAgentFromSelection_Params.decode = function(decoder) {
    var packed;
    var val = new AnnotationAgentContainer_CreateAgentFromSelection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(AnnotationType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AnnotationAgentContainer_CreateAgentFromSelection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnnotationAgentContainer_CreateAgentFromSelection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.error = 0;
    this.readyStatus = 0;
  };
  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SelectorCreationResult, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, link_to_text$.LinkGenerationError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.readyStatus
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, link_to_text$.LinkGenerationReadyStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(SelectorCreationResult);
    val.error =
        decoder.decodeStruct(new codec.Enum(link_to_text$.LinkGenerationError));
    val.readyStatus =
        decoder.decodeStruct(new codec.Enum(link_to_text$.LinkGenerationReadyStatus));
    return val;
  };

  AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SelectorCreationResult, val.result);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeStruct(codec.Int32, val.readyStatus);
  };
  var kAnnotationAgent_ScrollIntoView_Name = 0;

  function AnnotationAgentPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AnnotationAgent,
                                                   handleOrPtrInfo);
  }

  function AnnotationAgentAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AnnotationAgent, associatedInterfacePtrInfo);
  }

  AnnotationAgentAssociatedPtr.prototype =
      Object.create(AnnotationAgentPtr.prototype);
  AnnotationAgentAssociatedPtr.prototype.constructor =
      AnnotationAgentAssociatedPtr;

  function AnnotationAgentProxy(receiver) {
    this.receiver_ = receiver;
  }
  AnnotationAgentPtr.prototype.scrollIntoView = function() {
    return AnnotationAgentProxy.prototype.scrollIntoView
        .apply(this.ptr.getProxy(), arguments);
  };

  AnnotationAgentProxy.prototype.scrollIntoView = function() {
    var params_ = new AnnotationAgent_ScrollIntoView_Params();
    var builder = new codec.MessageV0Builder(
        kAnnotationAgent_ScrollIntoView_Name,
        codec.align(AnnotationAgent_ScrollIntoView_Params.encodedSize));
    builder.encodeStruct(AnnotationAgent_ScrollIntoView_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AnnotationAgentStub(delegate) {
    this.delegate_ = delegate;
  }
  AnnotationAgentStub.prototype.scrollIntoView = function() {
    return this.delegate_ && this.delegate_.scrollIntoView && this.delegate_.scrollIntoView();
  }

  AnnotationAgentStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAnnotationAgent_ScrollIntoView_Name:
      var params = reader.decodeStruct(AnnotationAgent_ScrollIntoView_Params);
      this.scrollIntoView();
      return true;
    default:
      return false;
    }
  };

  AnnotationAgentStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAnnotationAgentRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAnnotationAgent_ScrollIntoView_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AnnotationAgent_ScrollIntoView_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAnnotationAgentResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AnnotationAgent = {
    name: 'blink.mojom.AnnotationAgent',
    kVersion: 0,
    ptrClass: AnnotationAgentPtr,
    proxyClass: AnnotationAgentProxy,
    stubClass: AnnotationAgentStub,
    validateRequest: validateAnnotationAgentRequest,
    validateResponse: null,
  };
  AnnotationAgentStub.prototype.validator = validateAnnotationAgentRequest;
  AnnotationAgentProxy.prototype.validator = null;
  var kAnnotationAgentHost_DidFinishAttachment_Name = 0;

  function AnnotationAgentHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AnnotationAgentHost,
                                                   handleOrPtrInfo);
  }

  function AnnotationAgentHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AnnotationAgentHost, associatedInterfacePtrInfo);
  }

  AnnotationAgentHostAssociatedPtr.prototype =
      Object.create(AnnotationAgentHostPtr.prototype);
  AnnotationAgentHostAssociatedPtr.prototype.constructor =
      AnnotationAgentHostAssociatedPtr;

  function AnnotationAgentHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  AnnotationAgentHostPtr.prototype.didFinishAttachment = function() {
    return AnnotationAgentHostProxy.prototype.didFinishAttachment
        .apply(this.ptr.getProxy(), arguments);
  };

  AnnotationAgentHostProxy.prototype.didFinishAttachment = function(documentRelativeRect) {
    var params_ = new AnnotationAgentHost_DidFinishAttachment_Params();
    params_.documentRelativeRect = documentRelativeRect;
    var builder = new codec.MessageV0Builder(
        kAnnotationAgentHost_DidFinishAttachment_Name,
        codec.align(AnnotationAgentHost_DidFinishAttachment_Params.encodedSize));
    builder.encodeStruct(AnnotationAgentHost_DidFinishAttachment_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AnnotationAgentHostStub(delegate) {
    this.delegate_ = delegate;
  }
  AnnotationAgentHostStub.prototype.didFinishAttachment = function(documentRelativeRect) {
    return this.delegate_ && this.delegate_.didFinishAttachment && this.delegate_.didFinishAttachment(documentRelativeRect);
  }

  AnnotationAgentHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAnnotationAgentHost_DidFinishAttachment_Name:
      var params = reader.decodeStruct(AnnotationAgentHost_DidFinishAttachment_Params);
      this.didFinishAttachment(params.documentRelativeRect);
      return true;
    default:
      return false;
    }
  };

  AnnotationAgentHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAnnotationAgentHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAnnotationAgentHost_DidFinishAttachment_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AnnotationAgentHost_DidFinishAttachment_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAnnotationAgentHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AnnotationAgentHost = {
    name: 'blink.mojom.AnnotationAgentHost',
    kVersion: 0,
    ptrClass: AnnotationAgentHostPtr,
    proxyClass: AnnotationAgentHostProxy,
    stubClass: AnnotationAgentHostStub,
    validateRequest: validateAnnotationAgentHostRequest,
    validateResponse: null,
  };
  AnnotationAgentHostStub.prototype.validator = validateAnnotationAgentHostRequest;
  AnnotationAgentHostProxy.prototype.validator = null;
  var kAnnotationAgentContainer_CreateAgent_Name = 0;
  var kAnnotationAgentContainer_CreateAgentFromSelection_Name = 1;

  function AnnotationAgentContainerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AnnotationAgentContainer,
                                                   handleOrPtrInfo);
  }

  function AnnotationAgentContainerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AnnotationAgentContainer, associatedInterfacePtrInfo);
  }

  AnnotationAgentContainerAssociatedPtr.prototype =
      Object.create(AnnotationAgentContainerPtr.prototype);
  AnnotationAgentContainerAssociatedPtr.prototype.constructor =
      AnnotationAgentContainerAssociatedPtr;

  function AnnotationAgentContainerProxy(receiver) {
    this.receiver_ = receiver;
  }
  AnnotationAgentContainerPtr.prototype.createAgent = function() {
    return AnnotationAgentContainerProxy.prototype.createAgent
        .apply(this.ptr.getProxy(), arguments);
  };

  AnnotationAgentContainerProxy.prototype.createAgent = function(hostRemote, agentReceiver, type, serializedSelector) {
    var params_ = new AnnotationAgentContainer_CreateAgent_Params();
    params_.hostRemote = hostRemote;
    params_.agentReceiver = agentReceiver;
    params_.type = type;
    params_.serializedSelector = serializedSelector;
    var builder = new codec.MessageV0Builder(
        kAnnotationAgentContainer_CreateAgent_Name,
        codec.align(AnnotationAgentContainer_CreateAgent_Params.encodedSize));
    builder.encodeStruct(AnnotationAgentContainer_CreateAgent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AnnotationAgentContainerPtr.prototype.createAgentFromSelection = function() {
    return AnnotationAgentContainerProxy.prototype.createAgentFromSelection
        .apply(this.ptr.getProxy(), arguments);
  };

  AnnotationAgentContainerProxy.prototype.createAgentFromSelection = function(type) {
    var params_ = new AnnotationAgentContainer_CreateAgentFromSelection_Params();
    params_.type = type;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAnnotationAgentContainer_CreateAgentFromSelection_Name,
          codec.align(AnnotationAgentContainer_CreateAgentFromSelection_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AnnotationAgentContainer_CreateAgentFromSelection_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AnnotationAgentContainerStub(delegate) {
    this.delegate_ = delegate;
  }
  AnnotationAgentContainerStub.prototype.createAgent = function(hostRemote, agentReceiver, type, serializedSelector) {
    return this.delegate_ && this.delegate_.createAgent && this.delegate_.createAgent(hostRemote, agentReceiver, type, serializedSelector);
  }
  AnnotationAgentContainerStub.prototype.createAgentFromSelection = function(type) {
    return this.delegate_ && this.delegate_.createAgentFromSelection && this.delegate_.createAgentFromSelection(type);
  }

  AnnotationAgentContainerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAnnotationAgentContainer_CreateAgent_Name:
      var params = reader.decodeStruct(AnnotationAgentContainer_CreateAgent_Params);
      this.createAgent(params.hostRemote, params.agentReceiver, params.type, params.serializedSelector);
      return true;
    default:
      return false;
    }
  };

  AnnotationAgentContainerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAnnotationAgentContainer_CreateAgentFromSelection_Name:
      var params = reader.decodeStruct(AnnotationAgentContainer_CreateAgentFromSelection_Params);
      this.createAgentFromSelection(params.type).then(function(response) {
        var responseParams =
            new AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams();
        responseParams.result = response.result;
        responseParams.error = response.error;
        responseParams.readyStatus = response.readyStatus;
        var builder = new codec.MessageV1Builder(
            kAnnotationAgentContainer_CreateAgentFromSelection_Name,
            codec.align(AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAnnotationAgentContainerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAnnotationAgentContainer_CreateAgent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AnnotationAgentContainer_CreateAgent_Params;
      break;
      case kAnnotationAgentContainer_CreateAgentFromSelection_Name:
        if (message.expectsResponse())
          paramsClass = AnnotationAgentContainer_CreateAgentFromSelection_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAnnotationAgentContainerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAnnotationAgentContainer_CreateAgentFromSelection_Name:
        if (message.isResponse())
          paramsClass = AnnotationAgentContainer_CreateAgentFromSelection_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AnnotationAgentContainer = {
    name: 'blink.mojom.AnnotationAgentContainer',
    kVersion: 0,
    ptrClass: AnnotationAgentContainerPtr,
    proxyClass: AnnotationAgentContainerProxy,
    stubClass: AnnotationAgentContainerStub,
    validateRequest: validateAnnotationAgentContainerRequest,
    validateResponse: validateAnnotationAgentContainerResponse,
  };
  AnnotationAgentContainerStub.prototype.validator = validateAnnotationAgentContainerRequest;
  AnnotationAgentContainerProxy.prototype.validator = validateAnnotationAgentContainerResponse;
  exports.AnnotationType = AnnotationType;
  exports.SelectorCreationResult = SelectorCreationResult;
  exports.AnnotationAgent = AnnotationAgent;
  exports.AnnotationAgentPtr = AnnotationAgentPtr;
  exports.AnnotationAgentAssociatedPtr = AnnotationAgentAssociatedPtr;
  exports.AnnotationAgentHost = AnnotationAgentHost;
  exports.AnnotationAgentHostPtr = AnnotationAgentHostPtr;
  exports.AnnotationAgentHostAssociatedPtr = AnnotationAgentHostAssociatedPtr;
  exports.AnnotationAgentContainer = AnnotationAgentContainer;
  exports.AnnotationAgentContainerPtr = AnnotationAgentContainerPtr;
  exports.AnnotationAgentContainerAssociatedPtr = AnnotationAgentContainerAssociatedPtr;
})();