// gpu/ipc/common/gpu_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/gpu_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');
  var dx_diag_node$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/dx_diag_node.mojom', 'dx_diag_node.mojom.js');
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
  var gpu_preference$ =
      mojo.internal.exposeNamespace('gl.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gl/mojom/gpu_preference.mojom', '../../../ui/gl/mojom/gpu_preference.mojom.js');
  }
  var vulkan_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/vulkan_info.mojom', 'vulkan_info.mojom.js');
  }


  var VideoCodecProfile = {};
  VideoCodecProfile.VIDEO_CODEC_PROFILE_UNKNOWN = -1;
  VideoCodecProfile.H264PROFILE_BASELINE = 0;
  VideoCodecProfile.H264PROFILE_MAIN = 1;
  VideoCodecProfile.H264PROFILE_EXTENDED = 2;
  VideoCodecProfile.H264PROFILE_HIGH = 3;
  VideoCodecProfile.H264PROFILE_HIGH10PROFILE = 4;
  VideoCodecProfile.H264PROFILE_HIGH422PROFILE = 5;
  VideoCodecProfile.H264PROFILE_HIGH444PREDICTIVEPROFILE = 6;
  VideoCodecProfile.H264PROFILE_SCALABLEBASELINE = 7;
  VideoCodecProfile.H264PROFILE_SCALABLEHIGH = 8;
  VideoCodecProfile.H264PROFILE_STEREOHIGH = 9;
  VideoCodecProfile.H264PROFILE_MULTIVIEWHIGH = 10;
  VideoCodecProfile.VP8PROFILE_ANY = 11;
  VideoCodecProfile.VP9PROFILE_PROFILE0 = 12;
  VideoCodecProfile.VP9PROFILE_PROFILE1 = 13;
  VideoCodecProfile.VP9PROFILE_PROFILE2 = 14;
  VideoCodecProfile.VP9PROFILE_PROFILE3 = 15;
  VideoCodecProfile.HEVCPROFILE_MAIN = 16;
  VideoCodecProfile.HEVCPROFILE_MAIN10 = 17;
  VideoCodecProfile.HEVCPROFILE_MAIN_STILL_PICTURE = 18;
  VideoCodecProfile.DOLBYVISION_PROFILE0 = 19;
  VideoCodecProfile.DOLBYVISION_PROFILE4 = 20;
  VideoCodecProfile.DOLBYVISION_PROFILE5 = 21;
  VideoCodecProfile.DOLBYVISION_PROFILE7 = 22;
  VideoCodecProfile.THEORAPROFILE_ANY = 23;
  VideoCodecProfile.AV1PROFILE_PROFILE_MAIN = 24;
  VideoCodecProfile.AV1PROFILE_PROFILE_HIGH = 25;
  VideoCodecProfile.AV1PROFILE_PROFILE_PRO = 26;
  VideoCodecProfile.DOLBYVISION_PROFILE8 = 27;
  VideoCodecProfile.DOLBYVISION_PROFILE9 = 28;
  VideoCodecProfile.HEVCPROFILE_REXT = 29;
  VideoCodecProfile.HEVCPROFILE_HIGH_THROUGHPUT = 30;
  VideoCodecProfile.HEVCPROFILE_MULTIVIEW_MAIN = 31;
  VideoCodecProfile.HEVCPROFILE_SCALABLE_MAIN = 32;
  VideoCodecProfile.HEVCPROFILE_3D_MAIN = 33;
  VideoCodecProfile.HEVCPROFILE_SCREEN_EXTENDED = 34;
  VideoCodecProfile.HEVCPROFILE_SCALABLE_REXT = 35;
  VideoCodecProfile.HEVCPROFILE_HIGH_THROUGHPUT_SCREEN_EXTENDED = 36;
  VideoCodecProfile.MIN_VALUE = -1;
  VideoCodecProfile.MAX_VALUE = 36;

  VideoCodecProfile.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
      return true;
    }
    return false;
  };

  VideoCodecProfile.toKnownEnumValue = function(value) {
    return value;
  };

  VideoCodecProfile.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ImageDecodeAcceleratorType = {};
  ImageDecodeAcceleratorType.kJpeg = 0;
  ImageDecodeAcceleratorType.kWebP = 1;
  ImageDecodeAcceleratorType.kUnknown = 2;
  ImageDecodeAcceleratorType.MIN_VALUE = 0;
  ImageDecodeAcceleratorType.MAX_VALUE = 2;

  ImageDecodeAcceleratorType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ImageDecodeAcceleratorType.toKnownEnumValue = function(value) {
    return value;
  };

  ImageDecodeAcceleratorType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ImageDecodeAcceleratorSubsampling = {};
  ImageDecodeAcceleratorSubsampling.k420 = 0;
  ImageDecodeAcceleratorSubsampling.k422 = 1;
  ImageDecodeAcceleratorSubsampling.k444 = 2;
  ImageDecodeAcceleratorSubsampling.MIN_VALUE = 0;
  ImageDecodeAcceleratorSubsampling.MAX_VALUE = 2;

  ImageDecodeAcceleratorSubsampling.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ImageDecodeAcceleratorSubsampling.toKnownEnumValue = function(value) {
    return value;
  };

  ImageDecodeAcceleratorSubsampling.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function GpuDevice(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuDevice.prototype.initDefaults_ = function() {
    this.vendorId = 0;
    this.deviceId = 0;
    this.active = false;
    this.cudaComputeCapabilityMajor = 0;
    this.vendorString = null;
    this.deviceString = null;
    this.driverVendor = null;
    this.driverVersion = null;
    this.gpuPreference = 0;
  };
  GpuDevice.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuDevice.validate = function(messageValidator, offset) {
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





    // validate GpuDevice.vendorString
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuDevice.deviceString
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuDevice.driverVendor
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuDevice.driverVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate GpuDevice.gpuPreference
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 48, gpu_preference$.GpuPreference);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuDevice.encodedSize = codec.kStructHeaderSize + 56;

  GpuDevice.decode = function(decoder) {
    var packed;
    var val = new GpuDevice();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.vendorId =
        decoder.decodeStruct(codec.Uint32);
    val.deviceId =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.active = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cudaComputeCapabilityMajor =
        decoder.decodeStruct(codec.Int32);
    val.vendorString =
        decoder.decodeStruct(codec.String);
    val.deviceString =
        decoder.decodeStruct(codec.String);
    val.driverVendor =
        decoder.decodeStruct(codec.String);
    val.driverVersion =
        decoder.decodeStruct(codec.String);
    val.gpuPreference =
        decoder.decodeStruct(new codec.Enum(gpu_preference$.GpuPreference));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuDevice.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuDevice.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.vendorId);
    encoder.encodeStruct(codec.Uint32, val.deviceId);
    packed = 0;
    packed |= (val.active & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.cudaComputeCapabilityMajor);
    encoder.encodeStruct(codec.String, val.vendorString);
    encoder.encodeStruct(codec.String, val.deviceString);
    encoder.encodeStruct(codec.String, val.driverVendor);
    encoder.encodeStruct(codec.String, val.driverVersion);
    encoder.encodeStruct(codec.Int32, val.gpuPreference);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoDecodeAcceleratorSupportedProfile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoDecodeAcceleratorSupportedProfile.prototype.initDefaults_ = function() {
    this.profile = 0;
    this.encryptedOnly = false;
    this.maxResolution = null;
    this.minResolution = null;
  };
  VideoDecodeAcceleratorSupportedProfile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoDecodeAcceleratorSupportedProfile.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecodeAcceleratorSupportedProfile.profile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecodeAcceleratorSupportedProfile.maxResolution
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoDecodeAcceleratorSupportedProfile.minResolution
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoDecodeAcceleratorSupportedProfile.encodedSize = codec.kStructHeaderSize + 24;

  VideoDecodeAcceleratorSupportedProfile.decode = function(decoder) {
    var packed;
    var val = new VideoDecodeAcceleratorSupportedProfile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.profile =
        decoder.decodeStruct(new codec.Enum(VideoCodecProfile));
    packed = decoder.readUint8();
    val.encryptedOnly = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.maxResolution =
        decoder.decodeStructPointer(geometry$.Size);
    val.minResolution =
        decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  VideoDecodeAcceleratorSupportedProfile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoDecodeAcceleratorSupportedProfile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.profile);
    packed = 0;
    packed |= (val.encryptedOnly & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.maxResolution);
    encoder.encodeStructPointer(geometry$.Size, val.minResolution);
  };
  function VideoDecodeAcceleratorCapabilities(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoDecodeAcceleratorCapabilities.prototype.initDefaults_ = function() {
    this.supportedProfiles = null;
    this.flags = 0;
  };
  VideoDecodeAcceleratorCapabilities.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoDecodeAcceleratorCapabilities.validate = function(messageValidator, offset) {
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


    // validate VideoDecodeAcceleratorCapabilities.supportedProfiles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoDecodeAcceleratorCapabilities.encodedSize = codec.kStructHeaderSize + 16;

  VideoDecodeAcceleratorCapabilities.decode = function(decoder) {
    var packed;
    var val = new VideoDecodeAcceleratorCapabilities();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.supportedProfiles =
        decoder.decodeArrayPointer(new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile));
    val.flags =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoDecodeAcceleratorCapabilities.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoDecodeAcceleratorCapabilities.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile), val.supportedProfiles);
    encoder.encodeStruct(codec.Uint32, val.flags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEncodeAcceleratorSupportedProfile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEncodeAcceleratorSupportedProfile.prototype.initDefaults_ = function() {
    this.profile = 0;
    this.maxFramerateNumerator = 0;
    this.minResolution = null;
    this.maxResolution = null;
    this.maxFramerateDenominator = 0;
  };
  VideoEncodeAcceleratorSupportedProfile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEncodeAcceleratorSupportedProfile.validate = function(messageValidator, offset) {
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


    // validate VideoEncodeAcceleratorSupportedProfile.profile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEncodeAcceleratorSupportedProfile.minResolution
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEncodeAcceleratorSupportedProfile.maxResolution
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VideoEncodeAcceleratorSupportedProfile.encodedSize = codec.kStructHeaderSize + 32;

  VideoEncodeAcceleratorSupportedProfile.decode = function(decoder) {
    var packed;
    var val = new VideoEncodeAcceleratorSupportedProfile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.profile =
        decoder.decodeStruct(new codec.Enum(VideoCodecProfile));
    val.maxFramerateNumerator =
        decoder.decodeStruct(codec.Uint32);
    val.minResolution =
        decoder.decodeStructPointer(geometry$.Size);
    val.maxResolution =
        decoder.decodeStructPointer(geometry$.Size);
    val.maxFramerateDenominator =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEncodeAcceleratorSupportedProfile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEncodeAcceleratorSupportedProfile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.profile);
    encoder.encodeStruct(codec.Uint32, val.maxFramerateNumerator);
    encoder.encodeStructPointer(geometry$.Size, val.minResolution);
    encoder.encodeStructPointer(geometry$.Size, val.maxResolution);
    encoder.encodeStruct(codec.Uint32, val.maxFramerateDenominator);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ImageDecodeAcceleratorSupportedProfile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImageDecodeAcceleratorSupportedProfile.prototype.initDefaults_ = function() {
    this.imageType = 0;
    this.minEncodedDimensions = null;
    this.maxEncodedDimensions = null;
    this.subsamplings = null;
  };
  ImageDecodeAcceleratorSupportedProfile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImageDecodeAcceleratorSupportedProfile.validate = function(messageValidator, offset) {
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


    // validate ImageDecodeAcceleratorSupportedProfile.imageType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ImageDecodeAcceleratorType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ImageDecodeAcceleratorSupportedProfile.minEncodedDimensions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ImageDecodeAcceleratorSupportedProfile.maxEncodedDimensions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ImageDecodeAcceleratorSupportedProfile.subsamplings
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, new codec.Enum(ImageDecodeAcceleratorSubsampling), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImageDecodeAcceleratorSupportedProfile.encodedSize = codec.kStructHeaderSize + 32;

  ImageDecodeAcceleratorSupportedProfile.decode = function(decoder) {
    var packed;
    var val = new ImageDecodeAcceleratorSupportedProfile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.imageType =
        decoder.decodeStruct(new codec.Enum(ImageDecodeAcceleratorType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.minEncodedDimensions =
        decoder.decodeStructPointer(geometry$.Size);
    val.maxEncodedDimensions =
        decoder.decodeStructPointer(geometry$.Size);
    val.subsamplings =
        decoder.decodeArrayPointer(new codec.Enum(ImageDecodeAcceleratorSubsampling));
    return val;
  };

  ImageDecodeAcceleratorSupportedProfile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImageDecodeAcceleratorSupportedProfile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.imageType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.minEncodedDimensions);
    encoder.encodeStructPointer(geometry$.Size, val.maxEncodedDimensions);
    encoder.encodeArrayPointer(new codec.Enum(ImageDecodeAcceleratorSubsampling), val.subsamplings);
  };
  function GpuInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuInfo.prototype.initDefaults_ = function() {
    this.initializationTime = null;
    this.optimus = false;
    this.amdSwitchable = false;
    this.softwareRendering = false;
    this.sandboxed = false;
    this.inProcessGpu = false;
    this.passthroughCmdDecoder = false;
    this.canSupportThreadedTextureMailbox = false;
    this.jpegDecodeAcceleratorSupported = false;
    this.subpixelFontRendering = false;
    this.glResetNotificationStrategy = 0;
    this.gpu = null;
    this.secondaryGpus = null;
    this.pixelShaderVersion = null;
    this.vertexShaderVersion = null;
    this.maxMsaaSamples = null;
    this.machineModelName = null;
    this.machineModelVersion = null;
    this.glVersion = null;
    this.glVendor = null;
    this.glRenderer = null;
    this.glExtensions = null;
    this.glWsVendor = null;
    this.glWsVersion = null;
    this.glWsExtensions = null;
    this.directRenderingVersion = null;
    this.videoDecodeAcceleratorSupportedProfiles = null;
    this.videoEncodeAcceleratorSupportedProfiles = null;
    this.imageDecodeAcceleratorSupportedProfiles = null;
    this.visibilityCallbackCallCount = 0;
    this.vulkanInfo = null;
  };
  GpuInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 184}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.initializationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuInfo.gpu
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, GpuDevice, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.secondaryGpus
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(GpuDevice), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.pixelShaderVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.vertexShaderVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.maxMsaaSamples
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.machineModelName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.machineModelVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glVendor
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glRenderer
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 88, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glExtensions
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 96, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glWsVendor
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 104, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glWsVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 112, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.glWsExtensions
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 120, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuInfo.directRenderingVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 128, false)
    if (err !== validator.validationError.NONE)
        return err;






    // validate GpuInfo.videoDecodeAcceleratorSupportedProfiles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 136, 8, new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuInfo.videoEncodeAcceleratorSupportedProfiles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 144, 8, new codec.PointerTo(VideoEncodeAcceleratorSupportedProfile), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate GpuInfo.imageDecodeAcceleratorSupportedProfiles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 152, 8, new codec.PointerTo(ImageDecodeAcceleratorSupportedProfile), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuInfo.vulkanInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 168, vulkan_info$.VulkanInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuInfo.encodedSize = codec.kStructHeaderSize + 176;

  GpuInfo.decode = function(decoder) {
    var packed;
    var val = new GpuInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.initializationTime =
        decoder.decodeStructPointer(time$.TimeDelta);
    packed = decoder.readUint8();
    val.optimus = (packed >> 0) & 1 ? true : false;
    val.amdSwitchable = (packed >> 1) & 1 ? true : false;
    val.softwareRendering = (packed >> 2) & 1 ? true : false;
    val.sandboxed = (packed >> 3) & 1 ? true : false;
    val.inProcessGpu = (packed >> 4) & 1 ? true : false;
    val.passthroughCmdDecoder = (packed >> 5) & 1 ? true : false;
    val.canSupportThreadedTextureMailbox = (packed >> 6) & 1 ? true : false;
    val.jpegDecodeAcceleratorSupported = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.subpixelFontRendering = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    val.glResetNotificationStrategy =
        decoder.decodeStruct(codec.Uint32);
    val.gpu =
        decoder.decodeStructPointer(GpuDevice);
    val.secondaryGpus =
        decoder.decodeArrayPointer(new codec.PointerTo(GpuDevice));
    val.pixelShaderVersion =
        decoder.decodeStruct(codec.String);
    val.vertexShaderVersion =
        decoder.decodeStruct(codec.String);
    val.maxMsaaSamples =
        decoder.decodeStruct(codec.String);
    val.machineModelName =
        decoder.decodeStruct(codec.String);
    val.machineModelVersion =
        decoder.decodeStruct(codec.String);
    val.glVersion =
        decoder.decodeStruct(codec.String);
    val.glVendor =
        decoder.decodeStruct(codec.String);
    val.glRenderer =
        decoder.decodeStruct(codec.String);
    val.glExtensions =
        decoder.decodeStruct(codec.String);
    val.glWsVendor =
        decoder.decodeStruct(codec.String);
    val.glWsVersion =
        decoder.decodeStruct(codec.String);
    val.glWsExtensions =
        decoder.decodeStruct(codec.String);
    val.directRenderingVersion =
        decoder.decodeStruct(codec.String);
    val.videoDecodeAcceleratorSupportedProfiles =
        decoder.decodeArrayPointer(new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile));
    val.videoEncodeAcceleratorSupportedProfiles =
        decoder.decodeArrayPointer(new codec.PointerTo(VideoEncodeAcceleratorSupportedProfile));
    val.imageDecodeAcceleratorSupportedProfiles =
        decoder.decodeArrayPointer(new codec.PointerTo(ImageDecodeAcceleratorSupportedProfile));
    val.visibilityCallbackCallCount =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.vulkanInfo =
        decoder.decodeStructPointer(vulkan_info$.VulkanInfo);
    return val;
  };

  GpuInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.initializationTime);
    packed = 0;
    packed |= (val.optimus & 1) << 0
    packed |= (val.amdSwitchable & 1) << 1
    packed |= (val.softwareRendering & 1) << 2
    packed |= (val.sandboxed & 1) << 3
    packed |= (val.inProcessGpu & 1) << 4
    packed |= (val.passthroughCmdDecoder & 1) << 5
    packed |= (val.canSupportThreadedTextureMailbox & 1) << 6
    packed |= (val.jpegDecodeAcceleratorSupported & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.subpixelFontRendering & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.glResetNotificationStrategy);
    encoder.encodeStructPointer(GpuDevice, val.gpu);
    encoder.encodeArrayPointer(new codec.PointerTo(GpuDevice), val.secondaryGpus);
    encoder.encodeStruct(codec.String, val.pixelShaderVersion);
    encoder.encodeStruct(codec.String, val.vertexShaderVersion);
    encoder.encodeStruct(codec.String, val.maxMsaaSamples);
    encoder.encodeStruct(codec.String, val.machineModelName);
    encoder.encodeStruct(codec.String, val.machineModelVersion);
    encoder.encodeStruct(codec.String, val.glVersion);
    encoder.encodeStruct(codec.String, val.glVendor);
    encoder.encodeStruct(codec.String, val.glRenderer);
    encoder.encodeStruct(codec.String, val.glExtensions);
    encoder.encodeStruct(codec.String, val.glWsVendor);
    encoder.encodeStruct(codec.String, val.glWsVersion);
    encoder.encodeStruct(codec.String, val.glWsExtensions);
    encoder.encodeStruct(codec.String, val.directRenderingVersion);
    encoder.encodeArrayPointer(new codec.PointerTo(VideoDecodeAcceleratorSupportedProfile), val.videoDecodeAcceleratorSupportedProfiles);
    encoder.encodeArrayPointer(new codec.PointerTo(VideoEncodeAcceleratorSupportedProfile), val.videoEncodeAcceleratorSupportedProfiles);
    encoder.encodeArrayPointer(new codec.PointerTo(ImageDecodeAcceleratorSupportedProfile), val.imageDecodeAcceleratorSupportedProfiles);
    encoder.encodeStruct(codec.Uint32, val.visibilityCallbackCallCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(vulkan_info$.VulkanInfo, val.vulkanInfo);
  };
  exports.VideoCodecProfile = VideoCodecProfile;
  exports.ImageDecodeAcceleratorType = ImageDecodeAcceleratorType;
  exports.ImageDecodeAcceleratorSubsampling = ImageDecodeAcceleratorSubsampling;
  exports.GpuDevice = GpuDevice;
  exports.VideoDecodeAcceleratorSupportedProfile = VideoDecodeAcceleratorSupportedProfile;
  exports.VideoDecodeAcceleratorCapabilities = VideoDecodeAcceleratorCapabilities;
  exports.VideoEncodeAcceleratorSupportedProfile = VideoEncodeAcceleratorSupportedProfile;
  exports.ImageDecodeAcceleratorSupportedProfile = ImageDecodeAcceleratorSupportedProfile;
  exports.GpuInfo = GpuInfo;
})();