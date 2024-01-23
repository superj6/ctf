// services/network/public/mojom/timing_allow_origin.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/timing_allow_origin.mojom';
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




  function TimingAllowOrigin(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  TimingAllowOrigin.Tags = {
    serializedOrigins: 0,
    all: 1,
  };

  TimingAllowOrigin.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  TimingAllowOrigin.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "serializedOrigins",
        "all",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a TimingAllowOrigin member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(TimingAllowOrigin.prototype, "serializedOrigins", {
    get: function() {
      if (this.$tag != TimingAllowOrigin.Tags.serializedOrigins) {
        throw new ReferenceError(
            "TimingAllowOrigin.serializedOrigins is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TimingAllowOrigin.Tags.serializedOrigins;
      this.$data = value;
    }
  });
  Object.defineProperty(TimingAllowOrigin.prototype, "all", {
    get: function() {
      if (this.$tag != TimingAllowOrigin.Tags.all) {
        throw new ReferenceError(
            "TimingAllowOrigin.all is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TimingAllowOrigin.Tags.all;
      this.$data = value;
    }
  });


    TimingAllowOrigin.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case TimingAllowOrigin.Tags.serializedOrigins:
          encoder.encodeArrayPointer(codec.String, val.serializedOrigins);
          break;
        case TimingAllowOrigin.Tags.all:
          encoder.encodeStruct(codec.Uint8, val.all);
          break;
      }
      encoder.align();
    };


    TimingAllowOrigin.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new TimingAllowOrigin();
      var tag = decoder.readUint32();
      switch (tag) {
        case TimingAllowOrigin.Tags.serializedOrigins:
          result.serializedOrigins = decoder.decodeArrayPointer(codec.String);
          break;
        case TimingAllowOrigin.Tags.all:
          result.all = decoder.decodeStruct(codec.Uint8);
          break;
      }
      decoder.align();

      return result;
    };


    TimingAllowOrigin.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case TimingAllowOrigin.Tags.serializedOrigins:
          

    // validate TimingAllowOrigin.serializedOrigins
    err = messageValidator.validateArrayPointer(data_offset, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case TimingAllowOrigin.Tags.all:
          

          break;
      }

      return validator.validationError.NONE;
    };

  TimingAllowOrigin.encodedSize = 16;
  exports.TimingAllowOrigin = TimingAllowOrigin;
})();