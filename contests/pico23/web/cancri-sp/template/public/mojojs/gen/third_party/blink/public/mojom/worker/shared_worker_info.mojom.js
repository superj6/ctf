// third_party/blink/public/mojom/worker/shared_worker_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/shared_worker_info.mojom';
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
  var content_security_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/content_security_policy.mojom', '../../../../../services/network/public/mojom/content_security_policy.mojom.js');
  }
  var fetch_client_settings_object$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/fetch_client_settings_object.mojom', '../loader/fetch_client_settings_object.mojom.js');
  }
  var worker_options$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/worker/worker_options.mojom', 'worker_options.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function SharedWorkerInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedWorkerInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.options = null;
    this.contentSecurityPolicies = null;
    this.outsideFetchClientSettingsObject = null;
  };
  SharedWorkerInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedWorkerInfo.validate = function(messageValidator, offset) {
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


    // validate SharedWorkerInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, worker_options$.WorkerOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.contentSecurityPolicies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedWorkerInfo.outsideFetchClientSettingsObject
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, fetch_client_settings_object$.FetchClientSettingsObject, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedWorkerInfo.encodedSize = codec.kStructHeaderSize + 32;

  SharedWorkerInfo.decode = function(decoder) {
    var packed;
    var val = new SharedWorkerInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.options =
        decoder.decodeStructPointer(worker_options$.WorkerOptions);
    val.contentSecurityPolicies =
        decoder.decodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy));
    val.outsideFetchClientSettingsObject =
        decoder.decodeStructPointer(fetch_client_settings_object$.FetchClientSettingsObject);
    return val;
  };

  SharedWorkerInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedWorkerInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(worker_options$.WorkerOptions, val.options);
    encoder.encodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), val.contentSecurityPolicies);
    encoder.encodeStructPointer(fetch_client_settings_object$.FetchClientSettingsObject, val.outsideFetchClientSettingsObject);
  };
  exports.SharedWorkerInfo = SharedWorkerInfo;
})();