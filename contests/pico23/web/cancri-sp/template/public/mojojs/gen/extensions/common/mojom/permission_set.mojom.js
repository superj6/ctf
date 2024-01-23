// extensions/common/mojom/permission_set.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/permission_set.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mojom');
  var api_permission_id$ =
      mojo.internal.exposeNamespace('extensions.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'extensions/common/mojom/api_permission_id.mojom', 'api_permission_id.mojom.js');
  }
  var url_pattern_set$ =
      mojo.internal.exposeNamespace('extensions.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'extensions/common/mojom/url_pattern_set.mojom', 'url_pattern_set.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../mojo/public/mojom/base/values.mojom.js');
  }



  function APIPermission(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  APIPermission.prototype.initDefaults_ = function() {
    this.id = 0;
    this.value = null;
  };
  APIPermission.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  APIPermission.validate = function(messageValidator, offset) {
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


    // validate APIPermission.id
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, api_permission_id$.APIPermissionID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate APIPermission.value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, values$.Value, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  APIPermission.encodedSize = codec.kStructHeaderSize + 24;

  APIPermission.decode = function(decoder) {
    var packed;
    var val = new APIPermission();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(new codec.Enum(api_permission_id$.APIPermissionID));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value =
        decoder.decodeStruct(values$.Value);
    return val;
  };

  APIPermission.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(APIPermission.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(values$.Value, val.value);
  };
  function APIPermissionSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  APIPermissionSet.prototype.initDefaults_ = function() {
    this.permissionMap = null;
  };
  APIPermissionSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  APIPermissionSet.validate = function(messageValidator, offset) {
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


    // validate APIPermissionSet.permissionMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.Enum(api_permission_id$.APIPermissionID), new codec.PointerTo(APIPermission), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  APIPermissionSet.encodedSize = codec.kStructHeaderSize + 8;

  APIPermissionSet.decode = function(decoder) {
    var packed;
    var val = new APIPermissionSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.permissionMap =
        decoder.decodeMapPointer(new codec.Enum(api_permission_id$.APIPermissionID), new codec.PointerTo(APIPermission));
    return val;
  };

  APIPermissionSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(APIPermissionSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.Enum(api_permission_id$.APIPermissionID), new codec.PointerTo(APIPermission), val.permissionMap);
  };
  function ManifestPermission(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestPermission.prototype.initDefaults_ = function() {
    this.id = null;
    this.value = null;
  };
  ManifestPermission.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestPermission.validate = function(messageValidator, offset) {
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


    // validate ManifestPermission.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ManifestPermission.value
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, values$.Value, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestPermission.encodedSize = codec.kStructHeaderSize + 24;

  ManifestPermission.decode = function(decoder) {
    var packed;
    var val = new ManifestPermission();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.String);
    val.value =
        decoder.decodeStruct(values$.Value);
    return val;
  };

  ManifestPermission.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestPermission.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(values$.Value, val.value);
  };
  function ManifestPermissionSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ManifestPermissionSet.prototype.initDefaults_ = function() {
    this.permissionMap = null;
  };
  ManifestPermissionSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ManifestPermissionSet.validate = function(messageValidator, offset) {
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


    // validate ManifestPermissionSet.permissionMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.PointerTo(ManifestPermission), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ManifestPermissionSet.encodedSize = codec.kStructHeaderSize + 8;

  ManifestPermissionSet.decode = function(decoder) {
    var packed;
    var val = new ManifestPermissionSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.permissionMap =
        decoder.decodeMapPointer(codec.String, new codec.PointerTo(ManifestPermission));
    return val;
  };

  ManifestPermissionSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ManifestPermissionSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.PointerTo(ManifestPermission), val.permissionMap);
  };
  function PermissionSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PermissionSet.prototype.initDefaults_ = function() {
    this.apis = null;
    this.manifestPermissions = null;
    this.hosts = null;
    this.userScriptHosts = null;
  };
  PermissionSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PermissionSet.validate = function(messageValidator, offset) {
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


    // validate PermissionSet.apis
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, APIPermissionSet, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PermissionSet.manifestPermissions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ManifestPermissionSet, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PermissionSet.hosts
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url_pattern_set$.URLPatternSet, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PermissionSet.userScriptHosts
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url_pattern_set$.URLPatternSet, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PermissionSet.encodedSize = codec.kStructHeaderSize + 32;

  PermissionSet.decode = function(decoder) {
    var packed;
    var val = new PermissionSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.apis =
        decoder.decodeStructPointer(APIPermissionSet);
    val.manifestPermissions =
        decoder.decodeStructPointer(ManifestPermissionSet);
    val.hosts =
        decoder.decodeStructPointer(url_pattern_set$.URLPatternSet);
    val.userScriptHosts =
        decoder.decodeStructPointer(url_pattern_set$.URLPatternSet);
    return val;
  };

  PermissionSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PermissionSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(APIPermissionSet, val.apis);
    encoder.encodeStructPointer(ManifestPermissionSet, val.manifestPermissions);
    encoder.encodeStructPointer(url_pattern_set$.URLPatternSet, val.hosts);
    encoder.encodeStructPointer(url_pattern_set$.URLPatternSet, val.userScriptHosts);
  };
  exports.APIPermission = APIPermission;
  exports.APIPermissionSet = APIPermissionSet;
  exports.ManifestPermission = ManifestPermission;
  exports.ManifestPermissionSet = ManifestPermissionSet;
  exports.PermissionSet = PermissionSet;
})();