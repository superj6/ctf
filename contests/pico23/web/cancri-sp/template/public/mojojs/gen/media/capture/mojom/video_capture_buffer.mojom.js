// media/capture/mojom/video_capture_buffer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/capture/mojom/video_capture_buffer.mojom';
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
  var mailbox_holder$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox_holder.mojom', '../../../gpu/ipc/common/mailbox_holder.mojom.js');
  }
  var video_capture_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/video_capture_types.mojom', 'video_capture_types.mojom.js');
  }
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_types.mojom', '../../mojo/mojom/media_types.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', '../../../ui/gfx/mojom/buffer_types.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/color_space.mojom', '../../../ui/gfx/mojom/color_space.mojom.js');
  }



  function VideoFrameInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoFrameInfo.prototype.initDefaults_ = function() {
    this.timestamp = null;
    this.metadata = null;
    this.pixelFormat = 0;
    this.isPremapped = false;
    this.codedSize = null;
    this.visibleRect = null;
    this.colorSpace = null;
    this.strides = null;
  };
  VideoFrameInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoFrameInfo.validate = function(messageValidator, offset) {
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


    // validate VideoFrameInfo.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, media_types$.VideoFrameMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.pixelFormat
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, video_capture_types$.VideoCapturePixelFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.codedSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.visibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VideoFrameInfo.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, color_space$.ColorSpace, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoFrameInfo.strides
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, video_capture_types$.PlaneStrides, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoFrameInfo.encodedSize = codec.kStructHeaderSize + 56;

  VideoFrameInfo.decode = function(decoder) {
    var packed;
    var val = new VideoFrameInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timestamp =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.metadata =
        decoder.decodeStructPointer(media_types$.VideoFrameMetadata);
    val.pixelFormat =
        decoder.decodeStruct(new codec.Enum(video_capture_types$.VideoCapturePixelFormat));
    packed = decoder.readUint8();
    val.isPremapped = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.codedSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.visibleRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.colorSpace =
        decoder.decodeStructPointer(color_space$.ColorSpace);
    val.strides =
        decoder.decodeStructPointer(video_capture_types$.PlaneStrides);
    return val;
  };

  VideoFrameInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoFrameInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStructPointer(media_types$.VideoFrameMetadata, val.metadata);
    encoder.encodeStruct(codec.Int32, val.pixelFormat);
    packed = 0;
    packed |= (val.isPremapped & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.codedSize);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleRect);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
    encoder.encodeStructPointer(video_capture_types$.PlaneStrides, val.strides);
  };
  function ReadyBuffer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReadyBuffer.prototype.initDefaults_ = function() {
    this.bufferId = 0;
    this.info = null;
  };
  ReadyBuffer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReadyBuffer.validate = function(messageValidator, offset) {
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



    // validate ReadyBuffer.info
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, VideoFrameInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReadyBuffer.encodedSize = codec.kStructHeaderSize + 16;

  ReadyBuffer.decode = function(decoder) {
    var packed;
    var val = new ReadyBuffer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.info =
        decoder.decodeStructPointer(VideoFrameInfo);
    return val;
  };

  ReadyBuffer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReadyBuffer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.bufferId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(VideoFrameInfo, val.info);
  };
  function MailboxBufferHandleSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MailboxBufferHandleSet.prototype.initDefaults_ = function() {
    this.mailboxHolder = null;
  };
  MailboxBufferHandleSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MailboxBufferHandleSet.validate = function(messageValidator, offset) {
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


    // validate MailboxBufferHandleSet.mailboxHolder
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(mailbox_holder$.MailboxHolder), false, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MailboxBufferHandleSet.encodedSize = codec.kStructHeaderSize + 8;

  MailboxBufferHandleSet.decode = function(decoder) {
    var packed;
    var val = new MailboxBufferHandleSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mailboxHolder =
        decoder.decodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder));
    return val;
  };

  MailboxBufferHandleSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MailboxBufferHandleSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(mailbox_holder$.MailboxHolder), val.mailboxHolder);
  };

  function VideoBufferHandle(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  VideoBufferHandle.Tags = {
    unsafeShmemRegion: 0,
    readOnlyShmemRegion: 1,
    mailboxHandles: 2,
    gpuMemoryBufferHandle: 3,
  };

  VideoBufferHandle.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  VideoBufferHandle.prototype.initValue_ = function(value) {
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
        "unsafeShmemRegion",
        "readOnlyShmemRegion",
        "mailboxHandles",
        "gpuMemoryBufferHandle",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a VideoBufferHandle member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(VideoBufferHandle.prototype, "unsafeShmemRegion", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.unsafeShmemRegion) {
        throw new ReferenceError(
            "VideoBufferHandle.unsafeShmemRegion is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.unsafeShmemRegion;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "readOnlyShmemRegion", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.readOnlyShmemRegion) {
        throw new ReferenceError(
            "VideoBufferHandle.readOnlyShmemRegion is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.readOnlyShmemRegion;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "mailboxHandles", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.mailboxHandles) {
        throw new ReferenceError(
            "VideoBufferHandle.mailboxHandles is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.mailboxHandles;
      this.$data = value;
    }
  });
  Object.defineProperty(VideoBufferHandle.prototype, "gpuMemoryBufferHandle", {
    get: function() {
      if (this.$tag != VideoBufferHandle.Tags.gpuMemoryBufferHandle) {
        throw new ReferenceError(
            "VideoBufferHandle.gpuMemoryBufferHandle is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = VideoBufferHandle.Tags.gpuMemoryBufferHandle;
      this.$data = value;
    }
  });


    VideoBufferHandle.encode = function(encoder, val) {
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
        case VideoBufferHandle.Tags.unsafeShmemRegion:
          encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.unsafeShmemRegion);
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.readOnlyShmemRegion);
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          encoder.encodeStructPointer(MailboxBufferHandleSet, val.mailboxHandles);
          break;
        case VideoBufferHandle.Tags.gpuMemoryBufferHandle:
          encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferHandle, val.gpuMemoryBufferHandle);
          break;
      }
      encoder.align();
    };


    VideoBufferHandle.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new VideoBufferHandle();
      var tag = decoder.readUint32();
      switch (tag) {
        case VideoBufferHandle.Tags.unsafeShmemRegion:
          result.unsafeShmemRegion = decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          result.readOnlyShmemRegion = decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          result.mailboxHandles = decoder.decodeStructPointer(MailboxBufferHandleSet);
          break;
        case VideoBufferHandle.Tags.gpuMemoryBufferHandle:
          result.gpuMemoryBufferHandle = decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferHandle);
          break;
      }
      decoder.align();

      return result;
    };


    VideoBufferHandle.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case VideoBufferHandle.Tags.unsafeShmemRegion:
          

    // validate VideoBufferHandle.unsafeShmemRegion
    err = messageValidator.validateStructPointer(data_offset, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.readOnlyShmemRegion:
          

    // validate VideoBufferHandle.readOnlyShmemRegion
    err = messageValidator.validateStructPointer(data_offset, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.mailboxHandles:
          

    // validate VideoBufferHandle.mailboxHandles
    err = messageValidator.validateStructPointer(data_offset, MailboxBufferHandleSet, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case VideoBufferHandle.Tags.gpuMemoryBufferHandle:
          

    // validate VideoBufferHandle.gpuMemoryBufferHandle
    err = messageValidator.validateStructPointer(data_offset, buffer_types$.GpuMemoryBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  VideoBufferHandle.encodedSize = 16;
  exports.VideoFrameInfo = VideoFrameInfo;
  exports.ReadyBuffer = ReadyBuffer;
  exports.MailboxBufferHandleSet = MailboxBufferHandleSet;
  exports.VideoBufferHandle = VideoBufferHandle;
})();