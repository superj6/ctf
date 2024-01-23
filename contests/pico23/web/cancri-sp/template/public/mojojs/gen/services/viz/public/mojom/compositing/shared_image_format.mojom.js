// services/viz/public/mojom/compositing/shared_image_format.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/shared_image_format.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var resource_format$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/resource_format.mojom', 'resource_format.mojom.js');
  }


  var PlaneConfig = {};
  PlaneConfig.kY_V_U = 0;
  PlaneConfig.kY_UV = 1;
  PlaneConfig.kY_UV_A = 2;
  PlaneConfig.MIN_VALUE = 0;
  PlaneConfig.MAX_VALUE = 2;

  PlaneConfig.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PlaneConfig.toKnownEnumValue = function(value) {
    return value;
  };

  PlaneConfig.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var Subsampling = {};
  Subsampling.k420 = 0;
  Subsampling.MIN_VALUE = 0;
  Subsampling.MAX_VALUE = 0;

  Subsampling.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
      return true;
    }
    return false;
  };

  Subsampling.toKnownEnumValue = function(value) {
    return value;
  };

  Subsampling.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ChannelFormat = {};
  ChannelFormat.k8 = 0;
  ChannelFormat.k10 = 1;
  ChannelFormat.k16 = 2;
  ChannelFormat.k16F = 3;
  ChannelFormat.MIN_VALUE = 0;
  ChannelFormat.MAX_VALUE = 3;

  ChannelFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ChannelFormat.toKnownEnumValue = function(value) {
    return value;
  };

  ChannelFormat.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function MultiplanarFormat(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MultiplanarFormat.prototype.initDefaults_ = function() {
    this.planeConfig = 0;
    this.subsampling = 0;
    this.channelFormat = 0;
  };
  MultiplanarFormat.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MultiplanarFormat.validate = function(messageValidator, offset) {
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


    // validate MultiplanarFormat.planeConfig
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PlaneConfig);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MultiplanarFormat.subsampling
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, Subsampling);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MultiplanarFormat.channelFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ChannelFormat);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MultiplanarFormat.encodedSize = codec.kStructHeaderSize + 16;

  MultiplanarFormat.decode = function(decoder) {
    var packed;
    var val = new MultiplanarFormat();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.planeConfig =
        decoder.decodeStruct(new codec.Enum(PlaneConfig));
    val.subsampling =
        decoder.decodeStruct(new codec.Enum(Subsampling));
    val.channelFormat =
        decoder.decodeStruct(new codec.Enum(ChannelFormat));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MultiplanarFormat.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MultiplanarFormat.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.planeConfig);
    encoder.encodeStruct(codec.Int32, val.subsampling);
    encoder.encodeStruct(codec.Int32, val.channelFormat);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function SharedImageFormat(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  SharedImageFormat.Tags = {
    resourceFormat: 0,
    multiplanarFormat: 1,
  };

  SharedImageFormat.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  SharedImageFormat.prototype.initValue_ = function(value) {
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
        "resourceFormat",
        "multiplanarFormat",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a SharedImageFormat member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(SharedImageFormat.prototype, "resourceFormat", {
    get: function() {
      if (this.$tag != SharedImageFormat.Tags.resourceFormat) {
        throw new ReferenceError(
            "SharedImageFormat.resourceFormat is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = SharedImageFormat.Tags.resourceFormat;
      this.$data = value;
    }
  });
  Object.defineProperty(SharedImageFormat.prototype, "multiplanarFormat", {
    get: function() {
      if (this.$tag != SharedImageFormat.Tags.multiplanarFormat) {
        throw new ReferenceError(
            "SharedImageFormat.multiplanarFormat is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = SharedImageFormat.Tags.multiplanarFormat;
      this.$data = value;
    }
  });


    SharedImageFormat.encode = function(encoder, val) {
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
        case SharedImageFormat.Tags.resourceFormat:
          encoder.encodeStruct(codec.Int32, val.resourceFormat);
          break;
        case SharedImageFormat.Tags.multiplanarFormat:
          encoder.encodeStructPointer(MultiplanarFormat, val.multiplanarFormat);
          break;
      }
      encoder.align();
    };


    SharedImageFormat.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new SharedImageFormat();
      var tag = decoder.readUint32();
      switch (tag) {
        case SharedImageFormat.Tags.resourceFormat:
          result.resourceFormat = decoder.decodeStruct(new codec.Enum(resource_format$.ResourceFormat));
          break;
        case SharedImageFormat.Tags.multiplanarFormat:
          result.multiplanarFormat = decoder.decodeStructPointer(MultiplanarFormat);
          break;
      }
      decoder.align();

      return result;
    };


    SharedImageFormat.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case SharedImageFormat.Tags.resourceFormat:
          

    // validate SharedImageFormat.resourceFormat
    err = messageValidator.validateEnum(data_offset, resource_format$.ResourceFormat);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case SharedImageFormat.Tags.multiplanarFormat:
          

    // validate SharedImageFormat.multiplanarFormat
    err = messageValidator.validateStructPointer(data_offset, MultiplanarFormat, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  SharedImageFormat.encodedSize = 16;
  exports.PlaneConfig = PlaneConfig;
  exports.Subsampling = Subsampling;
  exports.ChannelFormat = ChannelFormat;
  exports.MultiplanarFormat = MultiplanarFormat;
  exports.SharedImageFormat = SharedImageFormat;
})();