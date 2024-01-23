// services/network/public/mojom/parsed_headers.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/parsed_headers.mojom';
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
  var content_security_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/content_security_policy.mojom', 'content_security_policy.mojom.js');
  }
  var cross_origin_embedder_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cross_origin_embedder_policy.mojom', 'cross_origin_embedder_policy.mojom.js');
  }
  var cross_origin_opener_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cross_origin_opener_policy.mojom', 'cross_origin_opener_policy.mojom.js');
  }
  var link_header$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/link_header.mojom', 'link_header.mojom.js');
  }
  var no_vary_search$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/no_vary_search.mojom', 'no_vary_search.mojom.js');
  }
  var supports_loading_mode$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/supports_loading_mode.mojom', 'supports_loading_mode.mojom.js');
  }
  var timing_allow_origin$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/timing_allow_origin.mojom', 'timing_allow_origin.mojom.js');
  }
  var variants_header$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/variants_header.mojom', 'variants_header.mojom.js');
  }
  var web_client_hints_types$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/web_client_hints_types.mojom', 'web_client_hints_types.mojom.js');
  }
  var x_frame_options$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/x_frame_options.mojom', 'x_frame_options.mojom.js');
  }


  var OriginAgentClusterValue = {};
  OriginAgentClusterValue.kAbsent = 0;
  OriginAgentClusterValue.kTrue = 1;
  OriginAgentClusterValue.kFalse = 2;
  OriginAgentClusterValue.MIN_VALUE = 0;
  OriginAgentClusterValue.MAX_VALUE = 2;

  OriginAgentClusterValue.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  OriginAgentClusterValue.toKnownEnumValue = function(value) {
    return value;
  };

  OriginAgentClusterValue.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ParsedHeaders(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ParsedHeaders.prototype.initDefaults_ = function() {
    this.contentSecurityPolicy = null;
    this.allowCspFrom = null;
    this.crossOriginEmbedderPolicy = null;
    this.crossOriginOpenerPolicy = null;
    this.originAgentCluster = 0;
    this.xfo = x_frame_options$.XFrameOptionsValue.kNone;
    this.acceptCh = null;
    this.criticalCh = null;
    this.linkHeaders = null;
    this.timingAllowOrigin = null;
    this.supportsLoadingMode = null;
    this.reportingEndpoints = null;
    this.variantsHeaders = null;
    this.contentLanguage = null;
    this.noVarySearch = null;
  };
  ParsedHeaders.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ParsedHeaders.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 136}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.contentSecurityPolicy
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.allowCspFrom
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, content_security_policy$.AllowCSPFromHeaderValue, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.crossOriginEmbedderPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.crossOriginOpenerPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, cross_origin_opener_policy$.CrossOriginOpenerPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.originAgentCluster
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 40, OriginAgentClusterValue);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.acceptCh
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 4, new codec.Enum(web_client_hints_types$.WebClientHintsType), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.criticalCh
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 4, new codec.Enum(web_client_hints_types$.WebClientHintsType), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.xfo
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, x_frame_options$.XFrameOptionsValue);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.linkHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(link_header$.LinkHeader), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.timingAllowOrigin
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 72, timing_allow_origin$.TimingAllowOrigin, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.supportsLoadingMode
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 88, 4, new codec.Enum(supports_loading_mode$.LoadingMode), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.reportingEndpoints
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 96, true, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.variantsHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 104, 8, new codec.PointerTo(variants_header$.VariantsHeader), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.contentLanguage
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 112, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ParsedHeaders.noVarySearch
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 120, no_vary_search$.NoVarySearch, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ParsedHeaders.encodedSize = codec.kStructHeaderSize + 128;

  ParsedHeaders.decode = function(decoder) {
    var packed;
    var val = new ParsedHeaders();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contentSecurityPolicy =
        decoder.decodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy));
    val.allowCspFrom =
        decoder.decodeStruct(content_security_policy$.AllowCSPFromHeaderValue);
    val.crossOriginEmbedderPolicy =
        decoder.decodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy);
    val.crossOriginOpenerPolicy =
        decoder.decodeStructPointer(cross_origin_opener_policy$.CrossOriginOpenerPolicy);
    val.originAgentCluster =
        decoder.decodeStruct(new codec.Enum(OriginAgentClusterValue));
    val.xfo =
        decoder.decodeStruct(new codec.Enum(x_frame_options$.XFrameOptionsValue));
    val.acceptCh =
        decoder.decodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType));
    val.criticalCh =
        decoder.decodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType));
    val.linkHeaders =
        decoder.decodeArrayPointer(new codec.PointerTo(link_header$.LinkHeader));
    val.timingAllowOrigin =
        decoder.decodeStruct(timing_allow_origin$.TimingAllowOrigin);
    val.supportsLoadingMode =
        decoder.decodeArrayPointer(new codec.Enum(supports_loading_mode$.LoadingMode));
    val.reportingEndpoints =
        decoder.decodeMapPointer(codec.String, codec.String);
    val.variantsHeaders =
        decoder.decodeArrayPointer(new codec.PointerTo(variants_header$.VariantsHeader));
    val.contentLanguage =
        decoder.decodeArrayPointer(codec.String);
    val.noVarySearch =
        decoder.decodeStructPointer(no_vary_search$.NoVarySearch);
    return val;
  };

  ParsedHeaders.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ParsedHeaders.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), val.contentSecurityPolicy);
    encoder.encodeStruct(content_security_policy$.AllowCSPFromHeaderValue, val.allowCspFrom);
    encoder.encodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, val.crossOriginEmbedderPolicy);
    encoder.encodeStructPointer(cross_origin_opener_policy$.CrossOriginOpenerPolicy, val.crossOriginOpenerPolicy);
    encoder.encodeStruct(codec.Int32, val.originAgentCluster);
    encoder.encodeStruct(codec.Int32, val.xfo);
    encoder.encodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType), val.acceptCh);
    encoder.encodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType), val.criticalCh);
    encoder.encodeArrayPointer(new codec.PointerTo(link_header$.LinkHeader), val.linkHeaders);
    encoder.encodeStruct(timing_allow_origin$.TimingAllowOrigin, val.timingAllowOrigin);
    encoder.encodeArrayPointer(new codec.Enum(supports_loading_mode$.LoadingMode), val.supportsLoadingMode);
    encoder.encodeMapPointer(codec.String, codec.String, val.reportingEndpoints);
    encoder.encodeArrayPointer(new codec.PointerTo(variants_header$.VariantsHeader), val.variantsHeaders);
    encoder.encodeArrayPointer(codec.String, val.contentLanguage);
    encoder.encodeStructPointer(no_vary_search$.NoVarySearch, val.noVarySearch);
  };
  exports.OriginAgentClusterValue = OriginAgentClusterValue;
  exports.ParsedHeaders = ParsedHeaders;
})();