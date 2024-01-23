// ui/gfx/mojom/presentation_feedback.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/presentation_feedback.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }



  function PresentationFeedback(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PresentationFeedback.prototype.initDefaults_ = function() {
    this.timestamp = null;
    this.interval = null;
    this.flags = 0;
    this.availableTimestamp = null;
    this.readyTimestamp = null;
    this.latchTimestamp = null;
    this.writesDoneTimestamp = null;
  };
  PresentationFeedback.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PresentationFeedback.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationFeedback.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationFeedback.interval
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PresentationFeedback.availableTimestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationFeedback.readyTimestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationFeedback.latchTimestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PresentationFeedback.writesDoneTimestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PresentationFeedback.encodedSize = codec.kStructHeaderSize + 56;

  PresentationFeedback.decode = function(decoder) {
    var packed;
    var val = new PresentationFeedback();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.interval =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.flags =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.availableTimestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.readyTimestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.latchTimestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.writesDoneTimestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  PresentationFeedback.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PresentationFeedback.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeTicks, val.timestamp);
    encoder.encodeStructPointer(time$.TimeDelta, val.interval);
    encoder.encodeStruct(codec.Uint32, val.flags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(time$.TimeTicks, val.availableTimestamp);
    encoder.encodeStructPointer(time$.TimeTicks, val.readyTimestamp);
    encoder.encodeStructPointer(time$.TimeTicks, val.latchTimestamp);
    encoder.encodeStructPointer(time$.TimeTicks, val.writesDoneTimestamp);
  };
  exports.PresentationFeedback = PresentationFeedback;
})();