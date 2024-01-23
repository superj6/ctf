// media/mojo/mojom/audio_output_stream.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/audio_output_stream.mojom';
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
  var audio_data_pipe$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/audio_data_pipe.mojom', 'audio_data_pipe.mojom.js');
  }
  var audio_parameters$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/audio_parameters.mojom', 'audio_parameters.mojom.js');
  }
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_types.mojom', 'media_types.mojom.js');
  }



  function AudioOutputStream_Play_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStream_Play_Params.prototype.initDefaults_ = function() {
  };
  AudioOutputStream_Play_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStream_Play_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStream_Play_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioOutputStream_Play_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStream_Play_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioOutputStream_Play_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStream_Play_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioOutputStream_Pause_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStream_Pause_Params.prototype.initDefaults_ = function() {
  };
  AudioOutputStream_Pause_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStream_Pause_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStream_Pause_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioOutputStream_Pause_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStream_Pause_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioOutputStream_Pause_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStream_Pause_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioOutputStream_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStream_Flush_Params.prototype.initDefaults_ = function() {
  };
  AudioOutputStream_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStream_Flush_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStream_Flush_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioOutputStream_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStream_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioOutputStream_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStream_Flush_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioOutputStream_SetVolume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStream_SetVolume_Params.prototype.initDefaults_ = function() {
    this.volume = 0;
  };
  AudioOutputStream_SetVolume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStream_SetVolume_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStream_SetVolume_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioOutputStream_SetVolume_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStream_SetVolume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.volume =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  AudioOutputStream_SetVolume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStream_SetVolume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.volume);
  };
  function AudioOutputStreamObserver_DidStartPlaying_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStreamObserver_DidStartPlaying_Params.prototype.initDefaults_ = function() {
  };
  AudioOutputStreamObserver_DidStartPlaying_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStreamObserver_DidStartPlaying_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStreamObserver_DidStartPlaying_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioOutputStreamObserver_DidStartPlaying_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStreamObserver_DidStartPlaying_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioOutputStreamObserver_DidStartPlaying_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStreamObserver_DidStartPlaying_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioOutputStreamObserver_DidStopPlaying_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStreamObserver_DidStopPlaying_Params.prototype.initDefaults_ = function() {
  };
  AudioOutputStreamObserver_DidStopPlaying_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStreamObserver_DidStopPlaying_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStreamObserver_DidStopPlaying_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioOutputStreamObserver_DidStopPlaying_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStreamObserver_DidStopPlaying_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioOutputStreamObserver_DidStopPlaying_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStreamObserver_DidStopPlaying_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioOutputStreamObserver_DidChangeAudibleState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStreamObserver_DidChangeAudibleState_Params.prototype.initDefaults_ = function() {
    this.isAudible = false;
  };
  AudioOutputStreamObserver_DidChangeAudibleState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStreamObserver_DidChangeAudibleState_Params.validate = function(messageValidator, offset) {
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

  AudioOutputStreamObserver_DidChangeAudibleState_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioOutputStreamObserver_DidChangeAudibleState_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStreamObserver_DidChangeAudibleState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isAudible = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioOutputStreamObserver_DidChangeAudibleState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStreamObserver_DidChangeAudibleState_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isAudible & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioOutputStreamProvider_Acquire_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStreamProvider_Acquire_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.client = new AudioOutputStreamProviderClientPtr();
  };
  AudioOutputStreamProvider_Acquire_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStreamProvider_Acquire_Params.validate = function(messageValidator, offset) {
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


    // validate AudioOutputStreamProvider_Acquire_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, audio_parameters$.AudioParameters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioOutputStreamProvider_Acquire_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioOutputStreamProvider_Acquire_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioOutputStreamProvider_Acquire_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStreamProvider_Acquire_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(audio_parameters$.AudioParameters);
    val.client =
        decoder.decodeStruct(new codec.Interface(AudioOutputStreamProviderClientPtr));
    return val;
  };

  AudioOutputStreamProvider_Acquire_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStreamProvider_Acquire_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(audio_parameters$.AudioParameters, val.params);
    encoder.encodeStruct(new codec.Interface(AudioOutputStreamProviderClientPtr), val.client);
  };
  function AudioOutputStreamProviderClient_Created_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioOutputStreamProviderClient_Created_Params.prototype.initDefaults_ = function() {
    this.stream = new AudioOutputStreamPtr();
    this.dataPipe = null;
  };
  AudioOutputStreamProviderClient_Created_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioOutputStreamProviderClient_Created_Params.validate = function(messageValidator, offset) {
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


    // validate AudioOutputStreamProviderClient_Created_Params.stream
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioOutputStreamProviderClient_Created_Params.dataPipe
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, audio_data_pipe$.ReadWriteAudioDataPipe, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioOutputStreamProviderClient_Created_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioOutputStreamProviderClient_Created_Params.decode = function(decoder) {
    var packed;
    var val = new AudioOutputStreamProviderClient_Created_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stream =
        decoder.decodeStruct(new codec.Interface(AudioOutputStreamPtr));
    val.dataPipe =
        decoder.decodeStructPointer(audio_data_pipe$.ReadWriteAudioDataPipe);
    return val;
  };

  AudioOutputStreamProviderClient_Created_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioOutputStreamProviderClient_Created_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(AudioOutputStreamPtr), val.stream);
    encoder.encodeStructPointer(audio_data_pipe$.ReadWriteAudioDataPipe, val.dataPipe);
  };
  var kAudioOutputStream_Play_Name = 685484594;
  var kAudioOutputStream_Pause_Name = 1380538603;
  var kAudioOutputStream_Flush_Name = 1224750463;
  var kAudioOutputStream_SetVolume_Name = 1427854937;

  function AudioOutputStreamPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioOutputStream,
                                                   handleOrPtrInfo);
  }

  function AudioOutputStreamAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioOutputStream, associatedInterfacePtrInfo);
  }

  AudioOutputStreamAssociatedPtr.prototype =
      Object.create(AudioOutputStreamPtr.prototype);
  AudioOutputStreamAssociatedPtr.prototype.constructor =
      AudioOutputStreamAssociatedPtr;

  function AudioOutputStreamProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioOutputStreamPtr.prototype.play = function() {
    return AudioOutputStreamProxy.prototype.play
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProxy.prototype.play = function() {
    var params_ = new AudioOutputStream_Play_Params();
    var builder = new codec.MessageV0Builder(
        kAudioOutputStream_Play_Name,
        codec.align(AudioOutputStream_Play_Params.encodedSize));
    builder.encodeStruct(AudioOutputStream_Play_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioOutputStreamPtr.prototype.pause = function() {
    return AudioOutputStreamProxy.prototype.pause
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProxy.prototype.pause = function() {
    var params_ = new AudioOutputStream_Pause_Params();
    var builder = new codec.MessageV0Builder(
        kAudioOutputStream_Pause_Name,
        codec.align(AudioOutputStream_Pause_Params.encodedSize));
    builder.encodeStruct(AudioOutputStream_Pause_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioOutputStreamPtr.prototype.flush = function() {
    return AudioOutputStreamProxy.prototype.flush
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProxy.prototype.flush = function() {
    var params_ = new AudioOutputStream_Flush_Params();
    var builder = new codec.MessageV0Builder(
        kAudioOutputStream_Flush_Name,
        codec.align(AudioOutputStream_Flush_Params.encodedSize));
    builder.encodeStruct(AudioOutputStream_Flush_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioOutputStreamPtr.prototype.setVolume = function() {
    return AudioOutputStreamProxy.prototype.setVolume
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProxy.prototype.setVolume = function(volume) {
    var params_ = new AudioOutputStream_SetVolume_Params();
    params_.volume = volume;
    var builder = new codec.MessageV0Builder(
        kAudioOutputStream_SetVolume_Name,
        codec.align(AudioOutputStream_SetVolume_Params.encodedSize));
    builder.encodeStruct(AudioOutputStream_SetVolume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioOutputStreamStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioOutputStreamStub.prototype.play = function() {
    return this.delegate_ && this.delegate_.play && this.delegate_.play();
  }
  AudioOutputStreamStub.prototype.pause = function() {
    return this.delegate_ && this.delegate_.pause && this.delegate_.pause();
  }
  AudioOutputStreamStub.prototype.flush = function() {
    return this.delegate_ && this.delegate_.flush && this.delegate_.flush();
  }
  AudioOutputStreamStub.prototype.setVolume = function(volume) {
    return this.delegate_ && this.delegate_.setVolume && this.delegate_.setVolume(volume);
  }

  AudioOutputStreamStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioOutputStream_Play_Name:
      var params = reader.decodeStruct(AudioOutputStream_Play_Params);
      this.play();
      return true;
    case kAudioOutputStream_Pause_Name:
      var params = reader.decodeStruct(AudioOutputStream_Pause_Params);
      this.pause();
      return true;
    case kAudioOutputStream_Flush_Name:
      var params = reader.decodeStruct(AudioOutputStream_Flush_Params);
      this.flush();
      return true;
    case kAudioOutputStream_SetVolume_Name:
      var params = reader.decodeStruct(AudioOutputStream_SetVolume_Params);
      this.setVolume(params.volume);
      return true;
    default:
      return false;
    }
  };

  AudioOutputStreamStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioOutputStreamRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioOutputStream_Play_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStream_Play_Params;
      break;
      case kAudioOutputStream_Pause_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStream_Pause_Params;
      break;
      case kAudioOutputStream_Flush_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStream_Flush_Params;
      break;
      case kAudioOutputStream_SetVolume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStream_SetVolume_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioOutputStreamResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioOutputStream = {
    name: 'media.mojom.AudioOutputStream',
    kVersion: 0,
    ptrClass: AudioOutputStreamPtr,
    proxyClass: AudioOutputStreamProxy,
    stubClass: AudioOutputStreamStub,
    validateRequest: validateAudioOutputStreamRequest,
    validateResponse: null,
  };
  AudioOutputStreamStub.prototype.validator = validateAudioOutputStreamRequest;
  AudioOutputStreamProxy.prototype.validator = null;
  var kAudioOutputStreamObserver_DidStartPlaying_Name = 110525484;
  var kAudioOutputStreamObserver_DidStopPlaying_Name = 552770981;
  var kAudioOutputStreamObserver_DidChangeAudibleState_Name = 1967487137;

  function AudioOutputStreamObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioOutputStreamObserver,
                                                   handleOrPtrInfo);
  }

  function AudioOutputStreamObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioOutputStreamObserver, associatedInterfacePtrInfo);
  }

  AudioOutputStreamObserverAssociatedPtr.prototype =
      Object.create(AudioOutputStreamObserverPtr.prototype);
  AudioOutputStreamObserverAssociatedPtr.prototype.constructor =
      AudioOutputStreamObserverAssociatedPtr;

  function AudioOutputStreamObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioOutputStreamObserverPtr.prototype.didStartPlaying = function() {
    return AudioOutputStreamObserverProxy.prototype.didStartPlaying
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamObserverProxy.prototype.didStartPlaying = function() {
    var params_ = new AudioOutputStreamObserver_DidStartPlaying_Params();
    var builder = new codec.MessageV0Builder(
        kAudioOutputStreamObserver_DidStartPlaying_Name,
        codec.align(AudioOutputStreamObserver_DidStartPlaying_Params.encodedSize));
    builder.encodeStruct(AudioOutputStreamObserver_DidStartPlaying_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioOutputStreamObserverPtr.prototype.didStopPlaying = function() {
    return AudioOutputStreamObserverProxy.prototype.didStopPlaying
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamObserverProxy.prototype.didStopPlaying = function() {
    var params_ = new AudioOutputStreamObserver_DidStopPlaying_Params();
    var builder = new codec.MessageV0Builder(
        kAudioOutputStreamObserver_DidStopPlaying_Name,
        codec.align(AudioOutputStreamObserver_DidStopPlaying_Params.encodedSize));
    builder.encodeStruct(AudioOutputStreamObserver_DidStopPlaying_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioOutputStreamObserverPtr.prototype.didChangeAudibleState = function() {
    return AudioOutputStreamObserverProxy.prototype.didChangeAudibleState
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamObserverProxy.prototype.didChangeAudibleState = function(isAudible) {
    var params_ = new AudioOutputStreamObserver_DidChangeAudibleState_Params();
    params_.isAudible = isAudible;
    var builder = new codec.MessageV0Builder(
        kAudioOutputStreamObserver_DidChangeAudibleState_Name,
        codec.align(AudioOutputStreamObserver_DidChangeAudibleState_Params.encodedSize));
    builder.encodeStruct(AudioOutputStreamObserver_DidChangeAudibleState_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioOutputStreamObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioOutputStreamObserverStub.prototype.didStartPlaying = function() {
    return this.delegate_ && this.delegate_.didStartPlaying && this.delegate_.didStartPlaying();
  }
  AudioOutputStreamObserverStub.prototype.didStopPlaying = function() {
    return this.delegate_ && this.delegate_.didStopPlaying && this.delegate_.didStopPlaying();
  }
  AudioOutputStreamObserverStub.prototype.didChangeAudibleState = function(isAudible) {
    return this.delegate_ && this.delegate_.didChangeAudibleState && this.delegate_.didChangeAudibleState(isAudible);
  }

  AudioOutputStreamObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioOutputStreamObserver_DidStartPlaying_Name:
      var params = reader.decodeStruct(AudioOutputStreamObserver_DidStartPlaying_Params);
      this.didStartPlaying();
      return true;
    case kAudioOutputStreamObserver_DidStopPlaying_Name:
      var params = reader.decodeStruct(AudioOutputStreamObserver_DidStopPlaying_Params);
      this.didStopPlaying();
      return true;
    case kAudioOutputStreamObserver_DidChangeAudibleState_Name:
      var params = reader.decodeStruct(AudioOutputStreamObserver_DidChangeAudibleState_Params);
      this.didChangeAudibleState(params.isAudible);
      return true;
    default:
      return false;
    }
  };

  AudioOutputStreamObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioOutputStreamObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioOutputStreamObserver_DidStartPlaying_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStreamObserver_DidStartPlaying_Params;
      break;
      case kAudioOutputStreamObserver_DidStopPlaying_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStreamObserver_DidStopPlaying_Params;
      break;
      case kAudioOutputStreamObserver_DidChangeAudibleState_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStreamObserver_DidChangeAudibleState_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioOutputStreamObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioOutputStreamObserver = {
    name: 'media.mojom.AudioOutputStreamObserver',
    kVersion: 0,
    ptrClass: AudioOutputStreamObserverPtr,
    proxyClass: AudioOutputStreamObserverProxy,
    stubClass: AudioOutputStreamObserverStub,
    validateRequest: validateAudioOutputStreamObserverRequest,
    validateResponse: null,
  };
  AudioOutputStreamObserver.DisconnectReason = {};
  AudioOutputStreamObserver.DisconnectReason.kDefault = 0;
  AudioOutputStreamObserver.DisconnectReason.kPlatformError = 1;
  AudioOutputStreamObserver.DisconnectReason.kTerminatedByClient = 2;
  AudioOutputStreamObserver.DisconnectReason.kStreamCreationFailed = 3;
  AudioOutputStreamObserver.DisconnectReason.kDocumentDestroyed = 4;
  AudioOutputStreamObserver.DisconnectReason.MIN_VALUE = 0;
  AudioOutputStreamObserver.DisconnectReason.MAX_VALUE = 4;

  AudioOutputStreamObserver.DisconnectReason.isKnownEnumValue = function(value) {
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

  AudioOutputStreamObserver.DisconnectReason.toKnownEnumValue = function(value) {
    return value;
  };

  AudioOutputStreamObserver.DisconnectReason.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  AudioOutputStreamObserverStub.prototype.validator = validateAudioOutputStreamObserverRequest;
  AudioOutputStreamObserverProxy.prototype.validator = null;
  var kAudioOutputStreamProvider_Acquire_Name = 1317847338;

  function AudioOutputStreamProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioOutputStreamProvider,
                                                   handleOrPtrInfo);
  }

  function AudioOutputStreamProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioOutputStreamProvider, associatedInterfacePtrInfo);
  }

  AudioOutputStreamProviderAssociatedPtr.prototype =
      Object.create(AudioOutputStreamProviderPtr.prototype);
  AudioOutputStreamProviderAssociatedPtr.prototype.constructor =
      AudioOutputStreamProviderAssociatedPtr;

  function AudioOutputStreamProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioOutputStreamProviderPtr.prototype.acquire = function() {
    return AudioOutputStreamProviderProxy.prototype.acquire
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProviderProxy.prototype.acquire = function(params, client) {
    var params_ = new AudioOutputStreamProvider_Acquire_Params();
    params_.params = params;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kAudioOutputStreamProvider_Acquire_Name,
        codec.align(AudioOutputStreamProvider_Acquire_Params.encodedSize));
    builder.encodeStruct(AudioOutputStreamProvider_Acquire_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioOutputStreamProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioOutputStreamProviderStub.prototype.acquire = function(params, client) {
    return this.delegate_ && this.delegate_.acquire && this.delegate_.acquire(params, client);
  }

  AudioOutputStreamProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioOutputStreamProvider_Acquire_Name:
      var params = reader.decodeStruct(AudioOutputStreamProvider_Acquire_Params);
      this.acquire(params.params, params.client);
      return true;
    default:
      return false;
    }
  };

  AudioOutputStreamProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioOutputStreamProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioOutputStreamProvider_Acquire_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStreamProvider_Acquire_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioOutputStreamProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioOutputStreamProvider = {
    name: 'media.mojom.AudioOutputStreamProvider',
    kVersion: 0,
    ptrClass: AudioOutputStreamProviderPtr,
    proxyClass: AudioOutputStreamProviderProxy,
    stubClass: AudioOutputStreamProviderStub,
    validateRequest: validateAudioOutputStreamProviderRequest,
    validateResponse: null,
  };
  AudioOutputStreamProviderStub.prototype.validator = validateAudioOutputStreamProviderRequest;
  AudioOutputStreamProviderProxy.prototype.validator = null;
  var kAudioOutputStreamProviderClient_Created_Name = 584031978;

  function AudioOutputStreamProviderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioOutputStreamProviderClient,
                                                   handleOrPtrInfo);
  }

  function AudioOutputStreamProviderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioOutputStreamProviderClient, associatedInterfacePtrInfo);
  }

  AudioOutputStreamProviderClientAssociatedPtr.prototype =
      Object.create(AudioOutputStreamProviderClientPtr.prototype);
  AudioOutputStreamProviderClientAssociatedPtr.prototype.constructor =
      AudioOutputStreamProviderClientAssociatedPtr;

  function AudioOutputStreamProviderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioOutputStreamProviderClientPtr.prototype.created = function() {
    return AudioOutputStreamProviderClientProxy.prototype.created
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioOutputStreamProviderClientProxy.prototype.created = function(stream, dataPipe) {
    var params_ = new AudioOutputStreamProviderClient_Created_Params();
    params_.stream = stream;
    params_.dataPipe = dataPipe;
    var builder = new codec.MessageV0Builder(
        kAudioOutputStreamProviderClient_Created_Name,
        codec.align(AudioOutputStreamProviderClient_Created_Params.encodedSize));
    builder.encodeStruct(AudioOutputStreamProviderClient_Created_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioOutputStreamProviderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioOutputStreamProviderClientStub.prototype.created = function(stream, dataPipe) {
    return this.delegate_ && this.delegate_.created && this.delegate_.created(stream, dataPipe);
  }

  AudioOutputStreamProviderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioOutputStreamProviderClient_Created_Name:
      var params = reader.decodeStruct(AudioOutputStreamProviderClient_Created_Params);
      this.created(params.stream, params.dataPipe);
      return true;
    default:
      return false;
    }
  };

  AudioOutputStreamProviderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioOutputStreamProviderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioOutputStreamProviderClient_Created_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioOutputStreamProviderClient_Created_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioOutputStreamProviderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioOutputStreamProviderClient = {
    name: 'media.mojom.AudioOutputStreamProviderClient',
    kVersion: 0,
    ptrClass: AudioOutputStreamProviderClientPtr,
    proxyClass: AudioOutputStreamProviderClientProxy,
    stubClass: AudioOutputStreamProviderClientStub,
    validateRequest: validateAudioOutputStreamProviderClientRequest,
    validateResponse: null,
  };
  AudioOutputStreamProviderClientStub.prototype.validator = validateAudioOutputStreamProviderClientRequest;
  AudioOutputStreamProviderClientProxy.prototype.validator = null;
  exports.AudioOutputStream = AudioOutputStream;
  exports.AudioOutputStreamPtr = AudioOutputStreamPtr;
  exports.AudioOutputStreamAssociatedPtr = AudioOutputStreamAssociatedPtr;
  exports.AudioOutputStreamObserver = AudioOutputStreamObserver;
  exports.AudioOutputStreamObserverPtr = AudioOutputStreamObserverPtr;
  exports.AudioOutputStreamObserverAssociatedPtr = AudioOutputStreamObserverAssociatedPtr;
  exports.AudioOutputStreamProvider = AudioOutputStreamProvider;
  exports.AudioOutputStreamProviderPtr = AudioOutputStreamProviderPtr;
  exports.AudioOutputStreamProviderAssociatedPtr = AudioOutputStreamProviderAssociatedPtr;
  exports.AudioOutputStreamProviderClient = AudioOutputStreamProviderClient;
  exports.AudioOutputStreamProviderClientPtr = AudioOutputStreamProviderClientPtr;
  exports.AudioOutputStreamProviderClientAssociatedPtr = AudioOutputStreamProviderClientAssociatedPtr;
})();