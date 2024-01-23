// ui/gfx/mojom/frame_data.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/frame_data.mojom';
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



  function FrameData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameData.prototype.initDefaults_ = function() {
    this.seq = 0;
  };
  FrameData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameData.validate = function(messageValidator, offset) {
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

  FrameData.encodedSize = codec.kStructHeaderSize + 8;

  FrameData.decode = function(decoder) {
    var packed;
    var val = new FrameData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.seq =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  FrameData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.seq);
  };
  exports.FrameData = FrameData;
})();