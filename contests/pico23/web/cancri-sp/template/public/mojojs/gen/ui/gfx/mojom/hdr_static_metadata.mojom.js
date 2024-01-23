// ui/gfx/mojom/hdr_static_metadata.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/hdr_static_metadata.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');



  function HDRStaticMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HDRStaticMetadata.prototype.initDefaults_ = function() {
    this.max = 0;
    this.maxAvg = 0;
    this.min = 0;
  };
  HDRStaticMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HDRStaticMetadata.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  HDRStaticMetadata.encodedSize = codec.kStructHeaderSize + 16;

  HDRStaticMetadata.decode = function(decoder) {
    var packed;
    var val = new HDRStaticMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.max =
        decoder.decodeStruct(codec.Float);
    val.maxAvg =
        decoder.decodeStruct(codec.Float);
    val.min =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HDRStaticMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HDRStaticMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.max);
    encoder.encodeStruct(codec.Float, val.maxAvg);
    encoder.encodeStruct(codec.Float, val.min);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.HDRStaticMetadata = HDRStaticMetadata;
})();