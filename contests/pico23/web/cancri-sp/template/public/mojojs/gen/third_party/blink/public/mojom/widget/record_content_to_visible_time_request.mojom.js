// third_party/blink/public/mojom/widget/record_content_to_visible_time_request.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/widget/record_content_to_visible_time_request.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }



  function RecordContentToVisibleTimeRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RecordContentToVisibleTimeRequest.prototype.initDefaults_ = function() {
    this.eventStartTime = null;
    this.destinationIsLoaded = false;
    this.showReasonTabSwitching = false;
    this.showReasonBfcacheRestore = false;
  };
  RecordContentToVisibleTimeRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RecordContentToVisibleTimeRequest.validate = function(messageValidator, offset) {
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


    // validate RecordContentToVisibleTimeRequest.eventStartTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  RecordContentToVisibleTimeRequest.encodedSize = codec.kStructHeaderSize + 16;

  RecordContentToVisibleTimeRequest.decode = function(decoder) {
    var packed;
    var val = new RecordContentToVisibleTimeRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.eventStartTime =
        decoder.decodeStructPointer(time$.TimeTicks);
    packed = decoder.readUint8();
    val.destinationIsLoaded = (packed >> 0) & 1 ? true : false;
    val.showReasonTabSwitching = (packed >> 1) & 1 ? true : false;
    val.showReasonBfcacheRestore = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RecordContentToVisibleTimeRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RecordContentToVisibleTimeRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeTicks, val.eventStartTime);
    packed = 0;
    packed |= (val.destinationIsLoaded & 1) << 0
    packed |= (val.showReasonTabSwitching & 1) << 1
    packed |= (val.showReasonBfcacheRestore & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.RecordContentToVisibleTimeRequest = RecordContentToVisibleTimeRequest;
})();