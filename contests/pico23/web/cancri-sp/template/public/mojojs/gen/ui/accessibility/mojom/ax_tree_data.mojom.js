// ui/accessibility/mojom/ax_tree_data.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/accessibility/mojom/ax_tree_data.mojom';
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
  var ax_tree_id$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/accessibility/mojom/ax_tree_id.mojom', 'ax_tree_id.mojom.js');
  }



  function AXTreeData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AXTreeData.prototype.initDefaults_ = function() {
    this.treeId = null;
    this.parentTreeId = null;
    this.focusedTreeId = null;
    this.doctype = null;
    this.loaded = false;
    this.selIsBackward = false;
    this.loadingProgress = 0;
    this.mimetype = null;
    this.title = null;
    this.url = null;
    this.focusId = 0;
    this.selAnchorObjectId = 0;
    this.selAnchorOffset = 0;
    this.selAnchorAffinity = 0;
    this.selFocusObjectId = 0;
    this.selFocusOffset = 0;
    this.selFocusAffinity = 0;
    this.rootScrollerId = 0;
    this.metadata = null;
  };
  AXTreeData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AXTreeData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 128},
      {version: 2, numBytes: 136}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.treeId
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, ax_tree_id$.AXTreeID, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.parentTreeId
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, ax_tree_id$.AXTreeID, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.focusedTreeId
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 32, ax_tree_id$.AXTreeID, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.doctype
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate AXTreeData.mimetype
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AXTreeData.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, false)
    if (err !== validator.validationError.NONE)
        return err;






    // validate AXTreeData.selAnchorAffinity
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 100, ax_enums$.TextAffinity);
    if (err !== validator.validationError.NONE)
        return err;




    // validate AXTreeData.selFocusAffinity
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 112, ax_enums$.TextAffinity);
    if (err !== validator.validationError.NONE)
        return err;




    // version check AXTreeData.metadata
    if (!messageValidator.isFieldInStructVersion(offset, 2))
      return validator.validationError.NONE;
    // validate AXTreeData.metadata
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 120, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AXTreeData.encodedSize = codec.kStructHeaderSize + 128;

  AXTreeData.decode = function(decoder) {
    var packed;
    var val = new AXTreeData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.treeId =
        decoder.decodeStruct(ax_tree_id$.AXTreeID);
    val.parentTreeId =
        decoder.decodeStruct(ax_tree_id$.AXTreeID);
    val.focusedTreeId =
        decoder.decodeStruct(ax_tree_id$.AXTreeID);
    val.doctype =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.loaded = (packed >> 0) & 1 ? true : false;
    val.selIsBackward = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.loadingProgress =
        decoder.decodeStruct(codec.Float);
    val.mimetype =
        decoder.decodeStruct(codec.String);
    val.title =
        decoder.decodeStruct(codec.String);
    val.url =
        decoder.decodeStruct(codec.String);
    val.focusId =
        decoder.decodeStruct(codec.Int32);
    val.selAnchorObjectId =
        decoder.decodeStruct(codec.Int32);
    val.selAnchorOffset =
        decoder.decodeStruct(codec.Int32);
    val.selAnchorAffinity =
        decoder.decodeStruct(new codec.Enum(ax_enums$.TextAffinity));
    val.selFocusObjectId =
        decoder.decodeStruct(codec.Int32);
    val.selFocusOffset =
        decoder.decodeStruct(codec.Int32);
    val.selFocusAffinity =
        decoder.decodeStruct(new codec.Enum(ax_enums$.TextAffinity));
    val.rootScrollerId =
        decoder.decodeStruct(codec.Int32);
    if (version >= 2) {
      val.metadata =
          decoder.decodeArrayPointer(codec.String);
    } else {
      val.metadata = null;
    }
    return val;
  };

  AXTreeData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AXTreeData.encodedSize);
    encoder.writeUint32(2);
    encoder.encodeStruct(ax_tree_id$.AXTreeID, val.treeId);
    encoder.encodeStruct(ax_tree_id$.AXTreeID, val.parentTreeId);
    encoder.encodeStruct(ax_tree_id$.AXTreeID, val.focusedTreeId);
    encoder.encodeStruct(codec.String, val.doctype);
    packed = 0;
    packed |= (val.loaded & 1) << 0
    packed |= (val.selIsBackward & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.loadingProgress);
    encoder.encodeStruct(codec.String, val.mimetype);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStruct(codec.String, val.url);
    encoder.encodeStruct(codec.Int32, val.focusId);
    encoder.encodeStruct(codec.Int32, val.selAnchorObjectId);
    encoder.encodeStruct(codec.Int32, val.selAnchorOffset);
    encoder.encodeStruct(codec.Int32, val.selAnchorAffinity);
    encoder.encodeStruct(codec.Int32, val.selFocusObjectId);
    encoder.encodeStruct(codec.Int32, val.selFocusOffset);
    encoder.encodeStruct(codec.Int32, val.selFocusAffinity);
    encoder.encodeStruct(codec.Int32, val.rootScrollerId);
    encoder.encodeArrayPointer(codec.String, val.metadata);
  };
  exports.AXTreeData = AXTreeData;
})();