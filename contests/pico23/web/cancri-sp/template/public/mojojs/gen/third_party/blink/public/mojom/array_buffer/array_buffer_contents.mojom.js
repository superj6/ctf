// third_party/blink/public/mojom/array_buffer/array_buffer_contents.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/array_buffer/array_buffer_contents.mojom';
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
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }



  function SerializedArrayBufferContents(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerializedArrayBufferContents.prototype.initDefaults_ = function() {
    this.contents = null;
    this.isResizableByUserJavascript = false;
    this.maxByteLength = 0;
  };
  SerializedArrayBufferContents.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerializedArrayBufferContents.validate = function(messageValidator, offset) {
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


    // validate SerializedArrayBufferContents.contents
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SerializedArrayBufferContents.encodedSize = codec.kStructHeaderSize + 32;

  SerializedArrayBufferContents.decode = function(decoder) {
    var packed;
    var val = new SerializedArrayBufferContents();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contents =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    packed = decoder.readUint8();
    val.isResizableByUserJavascript = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.maxByteLength =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  SerializedArrayBufferContents.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerializedArrayBufferContents.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.contents);
    packed = 0;
    packed |= (val.isResizableByUserJavascript & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.maxByteLength);
  };
  exports.SerializedArrayBufferContents = SerializedArrayBufferContents;
})();