// components/attribution_reporting/registration.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/attribution_reporting/registration.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('attributionReporting.mojom');
  var aggregation_service$ =
      mojo.internal.exposeNamespace('aggregationService.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/aggregation_service/aggregation_service.mojom', '../aggregation_service/aggregation_service.mojom.js');
  }
  var int128$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/int128.mojom', '../../mojo/public/mojom/base/int128.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../mojo/public/mojom/base/time.mojom.js');
  }
  var schemeful_site$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/schemeful_site.mojom', '../../services/network/public/mojom/schemeful_site.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../url/mojom/origin.mojom.js');
  }



  function DebugKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DebugKey.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  DebugKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DebugKey.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  DebugKey.encodedSize = codec.kStructHeaderSize + 8;

  DebugKey.decode = function(decoder) {
    var packed;
    var val = new DebugKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  DebugKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DebugKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.value);
  };
  function SuitableOrigin(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SuitableOrigin.prototype.initDefaults_ = function() {
    this.origin = null;
  };
  SuitableOrigin.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SuitableOrigin.validate = function(messageValidator, offset) {
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


    // validate SuitableOrigin.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SuitableOrigin.encodedSize = codec.kStructHeaderSize + 8;

  SuitableOrigin.decode = function(decoder) {
    var packed;
    var val = new SuitableOrigin();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  SuitableOrigin.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SuitableOrigin.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
  };
  function FilterData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilterData.prototype.initDefaults_ = function() {
    this.filterValues = null;
  };
  FilterData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilterData.validate = function(messageValidator, offset) {
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


    // validate FilterData.filterValues
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.ArrayOf(codec.String), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilterData.encodedSize = codec.kStructHeaderSize + 8;

  FilterData.decode = function(decoder) {
    var packed;
    var val = new FilterData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filterValues =
        decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.String));
    return val;
  };

  FilterData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilterData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.String), val.filterValues);
  };
  function Filters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Filters.prototype.initDefaults_ = function() {
    this.filterValues = null;
  };
  Filters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Filters.validate = function(messageValidator, offset) {
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


    // validate Filters.filterValues
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.ArrayOf(codec.String), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Filters.encodedSize = codec.kStructHeaderSize + 8;

  Filters.decode = function(decoder) {
    var packed;
    var val = new Filters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filterValues =
        decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.String));
    return val;
  };

  Filters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Filters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.String), val.filterValues);
  };
  function AggregationKeys(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AggregationKeys.prototype.initDefaults_ = function() {
    this.keys = null;
  };
  AggregationKeys.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AggregationKeys.validate = function(messageValidator, offset) {
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


    // validate AggregationKeys.keys
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, new codec.PointerTo(int128$.Uint128), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AggregationKeys.encodedSize = codec.kStructHeaderSize + 8;

  AggregationKeys.decode = function(decoder) {
    var packed;
    var val = new AggregationKeys();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keys =
        decoder.decodeMapPointer(codec.String, new codec.PointerTo(int128$.Uint128));
    return val;
  };

  AggregationKeys.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AggregationKeys.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, new codec.PointerTo(int128$.Uint128), val.keys);
  };
  function AggregatableTriggerData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AggregatableTriggerData.prototype.initDefaults_ = function() {
    this.keyPiece = null;
    this.sourceKeys = null;
    this.filters = null;
    this.notFilters = null;
  };
  AggregatableTriggerData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AggregatableTriggerData.validate = function(messageValidator, offset) {
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


    // validate AggregatableTriggerData.keyPiece
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, int128$.Uint128, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AggregatableTriggerData.sourceKeys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AggregatableTriggerData.filters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AggregatableTriggerData.notFilters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AggregatableTriggerData.encodedSize = codec.kStructHeaderSize + 32;

  AggregatableTriggerData.decode = function(decoder) {
    var packed;
    var val = new AggregatableTriggerData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keyPiece =
        decoder.decodeStructPointer(int128$.Uint128);
    val.sourceKeys =
        decoder.decodeArrayPointer(codec.String);
    val.filters =
        decoder.decodeStructPointer(Filters);
    val.notFilters =
        decoder.decodeStructPointer(Filters);
    return val;
  };

  AggregatableTriggerData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AggregatableTriggerData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(int128$.Uint128, val.keyPiece);
    encoder.encodeArrayPointer(codec.String, val.sourceKeys);
    encoder.encodeStructPointer(Filters, val.filters);
    encoder.encodeStructPointer(Filters, val.notFilters);
  };
  function SourceRegistration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SourceRegistration.prototype.initDefaults_ = function() {
    this.destination = null;
    this.sourceEventId = 0;
    this.expiry = null;
    this.eventReportWindow = null;
    this.aggregatableReportWindow = null;
    this.priority = 0;
    this.debugKey = null;
    this.filterData = null;
    this.aggregationKeys = null;
    this.debugReporting = false;
  };
  SourceRegistration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SourceRegistration.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SourceRegistration.destination
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, schemeful_site$.SchemefulSite, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate SourceRegistration.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SourceRegistration.eventReportWindow
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SourceRegistration.aggregatableReportWindow
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate SourceRegistration.debugKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, DebugKey, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SourceRegistration.filterData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, FilterData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SourceRegistration.aggregationKeys
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, AggregationKeys, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SourceRegistration.encodedSize = codec.kStructHeaderSize + 80;

  SourceRegistration.decode = function(decoder) {
    var packed;
    var val = new SourceRegistration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.destination =
        decoder.decodeStructPointer(schemeful_site$.SchemefulSite);
    val.sourceEventId =
        decoder.decodeStruct(codec.Uint64);
    val.expiry =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.eventReportWindow =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.aggregatableReportWindow =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.priority =
        decoder.decodeStruct(codec.Int64);
    val.debugKey =
        decoder.decodeStructPointer(DebugKey);
    val.filterData =
        decoder.decodeStructPointer(FilterData);
    val.aggregationKeys =
        decoder.decodeStructPointer(AggregationKeys);
    packed = decoder.readUint8();
    val.debugReporting = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SourceRegistration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SourceRegistration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(schemeful_site$.SchemefulSite, val.destination);
    encoder.encodeStruct(codec.Uint64, val.sourceEventId);
    encoder.encodeStructPointer(time$.TimeDelta, val.expiry);
    encoder.encodeStructPointer(time$.TimeDelta, val.eventReportWindow);
    encoder.encodeStructPointer(time$.TimeDelta, val.aggregatableReportWindow);
    encoder.encodeStruct(codec.Int64, val.priority);
    encoder.encodeStructPointer(DebugKey, val.debugKey);
    encoder.encodeStructPointer(FilterData, val.filterData);
    encoder.encodeStructPointer(AggregationKeys, val.aggregationKeys);
    packed = 0;
    packed |= (val.debugReporting & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TriggerDedupKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TriggerDedupKey.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  TriggerDedupKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TriggerDedupKey.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  TriggerDedupKey.encodedSize = codec.kStructHeaderSize + 8;

  TriggerDedupKey.decode = function(decoder) {
    var packed;
    var val = new TriggerDedupKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  TriggerDedupKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TriggerDedupKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.value);
  };
  function EventTriggerData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EventTriggerData.prototype.initDefaults_ = function() {
    this.data = 0;
    this.priority = 0;
    this.dedupKey = null;
    this.filters = null;
    this.notFilters = null;
  };
  EventTriggerData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EventTriggerData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate EventTriggerData.dedupKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, TriggerDedupKey, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EventTriggerData.filters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EventTriggerData.notFilters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EventTriggerData.encodedSize = codec.kStructHeaderSize + 40;

  EventTriggerData.decode = function(decoder) {
    var packed;
    var val = new EventTriggerData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(codec.Uint64);
    val.priority =
        decoder.decodeStruct(codec.Int64);
    val.dedupKey =
        decoder.decodeStructPointer(TriggerDedupKey);
    val.filters =
        decoder.decodeStructPointer(Filters);
    val.notFilters =
        decoder.decodeStructPointer(Filters);
    return val;
  };

  EventTriggerData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EventTriggerData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.data);
    encoder.encodeStruct(codec.Int64, val.priority);
    encoder.encodeStructPointer(TriggerDedupKey, val.dedupKey);
    encoder.encodeStructPointer(Filters, val.filters);
    encoder.encodeStructPointer(Filters, val.notFilters);
  };
  function AggregatableDedupKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AggregatableDedupKey.prototype.initDefaults_ = function() {
    this.dedupKey = null;
    this.filters = null;
    this.notFilters = null;
  };
  AggregatableDedupKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AggregatableDedupKey.validate = function(messageValidator, offset) {
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


    // validate AggregatableDedupKey.dedupKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, TriggerDedupKey, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AggregatableDedupKey.filters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AggregatableDedupKey.notFilters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AggregatableDedupKey.encodedSize = codec.kStructHeaderSize + 24;

  AggregatableDedupKey.decode = function(decoder) {
    var packed;
    var val = new AggregatableDedupKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dedupKey =
        decoder.decodeStructPointer(TriggerDedupKey);
    val.filters =
        decoder.decodeStructPointer(Filters);
    val.notFilters =
        decoder.decodeStructPointer(Filters);
    return val;
  };

  AggregatableDedupKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AggregatableDedupKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(TriggerDedupKey, val.dedupKey);
    encoder.encodeStructPointer(Filters, val.filters);
    encoder.encodeStructPointer(Filters, val.notFilters);
  };
  function TriggerRegistration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TriggerRegistration.prototype.initDefaults_ = function() {
    this.eventTriggers = null;
    this.filters = null;
    this.notFilters = null;
    this.aggregatableTriggerData = null;
    this.aggregatableValues = null;
    this.debugKey = null;
    this.aggregatableDedupKeys = null;
    this.debugReporting = false;
    this.aggregationCoordinator = 0;
  };
  TriggerRegistration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TriggerRegistration.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.eventTriggers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(EventTriggerData), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.filters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.notFilters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Filters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.aggregatableTriggerData
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(AggregatableTriggerData), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.aggregatableValues
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 32, false, codec.String, codec.Uint32, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.debugKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, DebugKey, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerRegistration.aggregatableDedupKeys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(AggregatableDedupKey), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TriggerRegistration.aggregationCoordinator
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 60, aggregation_service$.AggregationCoordinator);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TriggerRegistration.encodedSize = codec.kStructHeaderSize + 64;

  TriggerRegistration.decode = function(decoder) {
    var packed;
    var val = new TriggerRegistration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.eventTriggers =
        decoder.decodeArrayPointer(new codec.PointerTo(EventTriggerData));
    val.filters =
        decoder.decodeStructPointer(Filters);
    val.notFilters =
        decoder.decodeStructPointer(Filters);
    val.aggregatableTriggerData =
        decoder.decodeArrayPointer(new codec.PointerTo(AggregatableTriggerData));
    val.aggregatableValues =
        decoder.decodeMapPointer(codec.String, codec.Uint32);
    val.debugKey =
        decoder.decodeStructPointer(DebugKey);
    val.aggregatableDedupKeys =
        decoder.decodeArrayPointer(new codec.PointerTo(AggregatableDedupKey));
    packed = decoder.readUint8();
    val.debugReporting = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.aggregationCoordinator =
        decoder.decodeStruct(new codec.Enum(aggregation_service$.AggregationCoordinator));
    return val;
  };

  TriggerRegistration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TriggerRegistration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(EventTriggerData), val.eventTriggers);
    encoder.encodeStructPointer(Filters, val.filters);
    encoder.encodeStructPointer(Filters, val.notFilters);
    encoder.encodeArrayPointer(new codec.PointerTo(AggregatableTriggerData), val.aggregatableTriggerData);
    encoder.encodeMapPointer(codec.String, codec.Uint32, val.aggregatableValues);
    encoder.encodeStructPointer(DebugKey, val.debugKey);
    encoder.encodeArrayPointer(new codec.PointerTo(AggregatableDedupKey), val.aggregatableDedupKeys);
    packed = 0;
    packed |= (val.debugReporting & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.aggregationCoordinator);
  };
  exports.DebugKey = DebugKey;
  exports.SuitableOrigin = SuitableOrigin;
  exports.FilterData = FilterData;
  exports.Filters = Filters;
  exports.AggregationKeys = AggregationKeys;
  exports.AggregatableTriggerData = AggregatableTriggerData;
  exports.SourceRegistration = SourceRegistration;
  exports.TriggerDedupKey = TriggerDedupKey;
  exports.EventTriggerData = EventTriggerData;
  exports.AggregatableDedupKey = AggregatableDedupKey;
  exports.TriggerRegistration = TriggerRegistration;
})();