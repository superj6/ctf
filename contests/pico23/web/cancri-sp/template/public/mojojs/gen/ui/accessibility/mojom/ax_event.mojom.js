// ui/accessibility/mojom/ax_event.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/accessibility/mojom/ax_event.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ax.mojom');
  var ax_enums$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/accessibility/ax_enums.mojom', '../ax_enums.mojom.js');
  }
  var ax_event_intent$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/accessibility/mojom/ax_event_intent.mojom', 'ax_event_intent.mojom.js');
  }



  function AXEvent(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AXEvent.prototype.initDefaults_ = function() {
    this.eventType = 0;
    this.id = 0;
    this.eventFrom = 0;
    this.eventFromAction = 0;
    this.eventIntents = null;
    this.actionRequestId = 0;
  };
  AXEvent.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AXEvent.validate = function(messageValidator, offset) {
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


    // validate AXEvent.eventType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ax_enums$.Event);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AXEvent.eventFrom
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ax_enums$.EventFrom);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXEvent.eventFromAction
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ax_enums$.Action);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXEvent.eventIntents
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(ax_event_intent$.EventIntent), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  AXEvent.encodedSize = codec.kStructHeaderSize + 32;

  AXEvent.decode = function(decoder) {
    var packed;
    var val = new AXEvent();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.eventType =
        decoder.decodeStruct(new codec.Enum(ax_enums$.Event));
    val.id =
        decoder.decodeStruct(codec.Int32);
    val.eventFrom =
        decoder.decodeStruct(new codec.Enum(ax_enums$.EventFrom));
    val.eventFromAction =
        decoder.decodeStruct(new codec.Enum(ax_enums$.Action));
    val.eventIntents =
        decoder.decodeArrayPointer(new codec.PointerTo(ax_event_intent$.EventIntent));
    val.actionRequestId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AXEvent.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AXEvent.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.eventType);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.encodeStruct(codec.Int32, val.eventFrom);
    encoder.encodeStruct(codec.Int32, val.eventFromAction);
    encoder.encodeArrayPointer(new codec.PointerTo(ax_event_intent$.EventIntent), val.eventIntents);
    encoder.encodeStruct(codec.Int32, val.actionRequestId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.AXEvent = AXEvent;
})();