// url/mojom/scheme_host_port.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'url/mojom/scheme_host_port.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('url.mojom');



  function SchemeHostPort(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SchemeHostPort.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.host = null;
    this.port = 0;
  };
  SchemeHostPort.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SchemeHostPort.validate = function(messageValidator, offset) {
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


    // validate SchemeHostPort.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SchemeHostPort.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SchemeHostPort.encodedSize = codec.kStructHeaderSize + 24;

  SchemeHostPort.decode = function(decoder) {
    var packed;
    var val = new SchemeHostPort();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme =
        decoder.decodeStruct(codec.String);
    val.host =
        decoder.decodeStruct(codec.String);
    val.port =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SchemeHostPort.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SchemeHostPort.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Uint16, val.port);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.SchemeHostPort = SchemeHostPort;
})();