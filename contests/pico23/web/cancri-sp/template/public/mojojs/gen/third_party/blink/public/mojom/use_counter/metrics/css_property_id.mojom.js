// third_party/blink/public/mojom/use_counter/metrics/css_property_id.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/use_counter/metrics/css_property_id.mojom';
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


  var CSSSampleId = {};
  CSSSampleId.kInvalid = 0;
  CSSSampleId.kInternalAlignSelfBlock = 0;
  CSSSampleId.kInternalEmptyLineHeight = 0;
  CSSSampleId.kInternalVisitedBackgroundColor = 0;
  CSSSampleId.kInternalVisitedBorderBlockEndColor = 0;
  CSSSampleId.kInternalVisitedBorderBlockStartColor = 0;
  CSSSampleId.kInternalVisitedBorderBottomColor = 0;
  CSSSampleId.kInternalVisitedBorderInlineEndColor = 0;
  CSSSampleId.kInternalVisitedBorderInlineStartColor = 0;
  CSSSampleId.kInternalVisitedBorderLeftColor = 0;
  CSSSampleId.kInternalVisitedBorderRightColor = 0;
  CSSSampleId.kInternalVisitedBorderTopColor = 0;
  CSSSampleId.kInternalVisitedCaretColor = 0;
  CSSSampleId.kInternalVisitedColor = 0;
  CSSSampleId.kInternalVisitedColumnRuleColor = 0;
  CSSSampleId.kInternalVisitedFill = 0;
  CSSSampleId.kInternalVisitedOutlineColor = 0;
  CSSSampleId.kInternalVisitedStroke = 0;
  CSSSampleId.kInternalVisitedTextDecorationColor = 0;
  CSSSampleId.kInternalVisitedTextEmphasisColor = 0;
  CSSSampleId.kInternalVisitedTextFillColor = 0;
  CSSSampleId.kInternalVisitedTextStrokeColor = 0;
  CSSSampleId.kInternalFontSizeDelta = 0;
  CSSSampleId.kInternalForcedBackgroundColor = 0;
  CSSSampleId.kInternalForcedBorderColor = 0;
  CSSSampleId.kInternalForcedColor = 0;
  CSSSampleId.kInternalForcedOutlineColor = 0;
  CSSSampleId.kInternalForcedVisitedColor = 0;
  CSSSampleId.kTotalPagesMeasured = 1;
  CSSSampleId.kColor = 2;
  CSSSampleId.kDirection = 3;
  CSSSampleId.kDisplay = 4;
  CSSSampleId.kFont = 5;
  CSSSampleId.kFontFamily = 6;
  CSSSampleId.kFontSize = 7;
  CSSSampleId.kFontStyle = 8;
  CSSSampleId.kFontVariant = 9;
  CSSSampleId.kFontWeight = 10;
  CSSSampleId.kTextRendering = 11;
  CSSSampleId.kAliasWebkitFontFeatureSettings = 12;
  CSSSampleId.kFontKerning = 13;
  CSSSampleId.kWebkitFontSmoothing = 14;
  CSSSampleId.kFontVariantLigatures = 15;
  CSSSampleId.kWebkitLocale = 16;
  CSSSampleId.kWebkitTextOrientation = 17;
  CSSSampleId.kWebkitWritingMode = 18;
  CSSSampleId.kZoom = 19;
  CSSSampleId.kLineHeight = 20;
  CSSSampleId.kBackground = 21;
  CSSSampleId.kBackgroundAttachment = 22;
  CSSSampleId.kBackgroundClip = 23;
  CSSSampleId.kBackgroundColor = 24;
  CSSSampleId.kBackgroundImage = 25;
  CSSSampleId.kBackgroundOrigin = 26;
  CSSSampleId.kBackgroundPosition = 27;
  CSSSampleId.kBackgroundPositionX = 28;
  CSSSampleId.kBackgroundPositionY = 29;
  CSSSampleId.kBackgroundRepeat = 30;
  CSSSampleId.kBackgroundRepeatX = 31;
  CSSSampleId.kBackgroundRepeatY = 32;
  CSSSampleId.kBackgroundSize = 33;
  CSSSampleId.kBorder = 34;
  CSSSampleId.kBorderBottom = 35;
  CSSSampleId.kBorderBottomColor = 36;
  CSSSampleId.kBorderBottomLeftRadius = 37;
  CSSSampleId.kBorderBottomRightRadius = 38;
  CSSSampleId.kBorderBottomStyle = 39;
  CSSSampleId.kBorderBottomWidth = 40;
  CSSSampleId.kBorderCollapse = 41;
  CSSSampleId.kBorderColor = 42;
  CSSSampleId.kBorderImage = 43;
  CSSSampleId.kBorderImageOutset = 44;
  CSSSampleId.kBorderImageRepeat = 45;
  CSSSampleId.kBorderImageSlice = 46;
  CSSSampleId.kBorderImageSource = 47;
  CSSSampleId.kBorderImageWidth = 48;
  CSSSampleId.kBorderLeft = 49;
  CSSSampleId.kBorderLeftColor = 50;
  CSSSampleId.kBorderLeftStyle = 51;
  CSSSampleId.kBorderLeftWidth = 52;
  CSSSampleId.kBorderRadius = 53;
  CSSSampleId.kBorderRight = 54;
  CSSSampleId.kBorderRightColor = 55;
  CSSSampleId.kBorderRightStyle = 56;
  CSSSampleId.kBorderRightWidth = 57;
  CSSSampleId.kBorderSpacing = 58;
  CSSSampleId.kBorderStyle = 59;
  CSSSampleId.kBorderTop = 60;
  CSSSampleId.kBorderTopColor = 61;
  CSSSampleId.kBorderTopLeftRadius = 62;
  CSSSampleId.kBorderTopRightRadius = 63;
  CSSSampleId.kBorderTopStyle = 64;
  CSSSampleId.kBorderTopWidth = 65;
  CSSSampleId.kBorderWidth = 66;
  CSSSampleId.kBottom = 67;
  CSSSampleId.kBoxShadow = 68;
  CSSSampleId.kBoxSizing = 69;
  CSSSampleId.kCaptionSide = 70;
  CSSSampleId.kClear = 71;
  CSSSampleId.kClip = 72;
  CSSSampleId.kAliasWebkitClipPath = 73;
  CSSSampleId.kContent = 74;
  CSSSampleId.kCounterIncrement = 75;
  CSSSampleId.kCounterReset = 76;
  CSSSampleId.kCursor = 77;
  CSSSampleId.kEmptyCells = 78;
  CSSSampleId.kFloat = 79;
  CSSSampleId.kFontStretch = 80;
  CSSSampleId.kHeight = 81;
  CSSSampleId.kImageRendering = 82;
  CSSSampleId.kLeft = 83;
  CSSSampleId.kLetterSpacing = 84;
  CSSSampleId.kListStyle = 85;
  CSSSampleId.kListStyleImage = 86;
  CSSSampleId.kListStylePosition = 87;
  CSSSampleId.kListStyleType = 88;
  CSSSampleId.kMargin = 89;
  CSSSampleId.kMarginBottom = 90;
  CSSSampleId.kMarginLeft = 91;
  CSSSampleId.kMarginRight = 92;
  CSSSampleId.kMarginTop = 93;
  CSSSampleId.kMaxHeight = 94;
  CSSSampleId.kMaxWidth = 95;
  CSSSampleId.kMinHeight = 96;
  CSSSampleId.kMinWidth = 97;
  CSSSampleId.kOpacity = 98;
  CSSSampleId.kOrphans = 99;
  CSSSampleId.kOutline = 100;
  CSSSampleId.kOutlineColor = 101;
  CSSSampleId.kOutlineOffset = 102;
  CSSSampleId.kOutlineStyle = 103;
  CSSSampleId.kOutlineWidth = 104;
  CSSSampleId.kOverflow = 105;
  CSSSampleId.kOverflowWrap = 106;
  CSSSampleId.kOverflowX = 107;
  CSSSampleId.kOverflowY = 108;
  CSSSampleId.kPadding = 109;
  CSSSampleId.kPaddingBottom = 110;
  CSSSampleId.kPaddingLeft = 111;
  CSSSampleId.kPaddingRight = 112;
  CSSSampleId.kPaddingTop = 113;
  CSSSampleId.kPage = 114;
  CSSSampleId.kPageBreakAfter = 115;
  CSSSampleId.kPageBreakBefore = 116;
  CSSSampleId.kPageBreakInside = 117;
  CSSSampleId.kPointerEvents = 118;
  CSSSampleId.kPosition = 119;
  CSSSampleId.kQuotes = 120;
  CSSSampleId.kResize = 121;
  CSSSampleId.kRight = 122;
  CSSSampleId.kSize = 123;
  CSSSampleId.kSrc = 124;
  CSSSampleId.kSpeak = 125;
  CSSSampleId.kTableLayout = 126;
  CSSSampleId.kTabSize = 127;
  CSSSampleId.kTextAlign = 128;
  CSSSampleId.kTextDecoration = 129;
  CSSSampleId.kTextIndent = 130;
  CSSSampleId.kTextOverflow = 136;
  CSSSampleId.kTextShadow = 142;
  CSSSampleId.kTextTransform = 143;
  CSSSampleId.kTop = 149;
  CSSSampleId.kTransition = 150;
  CSSSampleId.kTransitionDelay = 151;
  CSSSampleId.kTransitionDuration = 152;
  CSSSampleId.kTransitionProperty = 153;
  CSSSampleId.kTransitionTimingFunction = 154;
  CSSSampleId.kUnicodeBidi = 155;
  CSSSampleId.kUnicodeRange = 156;
  CSSSampleId.kVerticalAlign = 157;
  CSSSampleId.kVisibility = 158;
  CSSSampleId.kWhiteSpace = 159;
  CSSSampleId.kWidows = 160;
  CSSSampleId.kWidth = 161;
  CSSSampleId.kWordBreak = 162;
  CSSSampleId.kWordSpacing = 163;
  CSSSampleId.kAliasWordWrap = 164;
  CSSSampleId.kZIndex = 165;
  CSSSampleId.kAliasWebkitAnimation = 166;
  CSSSampleId.kAliasWebkitAnimationDelay = 167;
  CSSSampleId.kAliasWebkitAnimationDirection = 168;
  CSSSampleId.kAliasWebkitAnimationDuration = 169;
  CSSSampleId.kAliasWebkitAnimationFillMode = 170;
  CSSSampleId.kAliasWebkitAnimationIterationCount = 171;
  CSSSampleId.kAliasWebkitAnimationName = 172;
  CSSSampleId.kAliasWebkitAnimationPlayState = 173;
  CSSSampleId.kAliasWebkitAnimationTimingFunction = 174;
  CSSSampleId.kAliasWebkitAppearance = 175;
  CSSSampleId.kAliasWebkitBackfaceVisibility = 177;
  CSSSampleId.kAliasWebkitBackgroundClip = 178;
  CSSSampleId.kAliasWebkitBackgroundOrigin = 180;
  CSSSampleId.kAliasWebkitBackgroundSize = 181;
  CSSSampleId.kAliasWebkitBorderAfter = 182;
  CSSSampleId.kAliasWebkitBorderAfterColor = 183;
  CSSSampleId.kAliasWebkitBorderAfterStyle = 184;
  CSSSampleId.kAliasWebkitBorderAfterWidth = 185;
  CSSSampleId.kAliasWebkitBorderBefore = 186;
  CSSSampleId.kAliasWebkitBorderBeforeColor = 187;
  CSSSampleId.kAliasWebkitBorderBeforeStyle = 188;
  CSSSampleId.kAliasWebkitBorderBeforeWidth = 189;
  CSSSampleId.kAliasWebkitBorderEnd = 190;
  CSSSampleId.kAliasWebkitBorderEndColor = 191;
  CSSSampleId.kAliasWebkitBorderEndStyle = 192;
  CSSSampleId.kAliasWebkitBorderEndWidth = 193;
  CSSSampleId.kWebkitBorderHorizontalSpacing = 195;
  CSSSampleId.kWebkitBorderImage = 196;
  CSSSampleId.kAliasWebkitBorderRadius = 197;
  CSSSampleId.kAliasWebkitBorderStart = 198;
  CSSSampleId.kAliasWebkitBorderStartColor = 199;
  CSSSampleId.kAliasWebkitBorderStartStyle = 200;
  CSSSampleId.kAliasWebkitBorderStartWidth = 201;
  CSSSampleId.kWebkitBorderVerticalSpacing = 202;
  CSSSampleId.kWebkitBoxAlign = 203;
  CSSSampleId.kWebkitBoxDirection = 204;
  CSSSampleId.kWebkitBoxFlex = 205;
  CSSSampleId.kWebkitBoxOrdinalGroup = 208;
  CSSSampleId.kWebkitBoxOrient = 209;
  CSSSampleId.kWebkitBoxPack = 210;
  CSSSampleId.kWebkitBoxReflect = 211;
  CSSSampleId.kAliasWebkitBoxShadow = 212;
  CSSSampleId.kWebkitColumnBreakAfter = 215;
  CSSSampleId.kWebkitColumnBreakBefore = 216;
  CSSSampleId.kWebkitColumnBreakInside = 217;
  CSSSampleId.kAliasWebkitColumnCount = 218;
  CSSSampleId.kAliasWebkitColumnGap = 219;
  CSSSampleId.kAliasWebkitColumnRule = 221;
  CSSSampleId.kAliasWebkitColumnRuleColor = 222;
  CSSSampleId.kAliasWebkitColumnRuleStyle = 223;
  CSSSampleId.kAliasWebkitColumnRuleWidth = 224;
  CSSSampleId.kAliasWebkitColumnSpan = 225;
  CSSSampleId.kAliasWebkitColumnWidth = 226;
  CSSSampleId.kAliasWebkitColumns = 227;
  CSSSampleId.kAlignContent = 230;
  CSSSampleId.kAlignItems = 231;
  CSSSampleId.kAlignSelf = 232;
  CSSSampleId.kFlex = 233;
  CSSSampleId.kFlexBasis = 234;
  CSSSampleId.kFlexDirection = 235;
  CSSSampleId.kFlexFlow = 236;
  CSSSampleId.kFlexGrow = 237;
  CSSSampleId.kFlexShrink = 238;
  CSSSampleId.kFlexWrap = 239;
  CSSSampleId.kJustifyContent = 240;
  CSSSampleId.kGridTemplateColumns = 242;
  CSSSampleId.kGridTemplateRows = 243;
  CSSSampleId.kGridColumnStart = 244;
  CSSSampleId.kGridColumnEnd = 245;
  CSSSampleId.kGridRowStart = 246;
  CSSSampleId.kGridRowEnd = 247;
  CSSSampleId.kGridColumn = 248;
  CSSSampleId.kGridRow = 249;
  CSSSampleId.kGridAutoFlow = 250;
  CSSSampleId.kWebkitHighlight = 251;
  CSSSampleId.kAliasWebkitHyphenateCharacter = 252;
  CSSSampleId.kWebkitLineBreak = 259;
  CSSSampleId.kWebkitLineClamp = 260;
  CSSSampleId.kAliasWebkitLogicalWidth = 263;
  CSSSampleId.kAliasWebkitLogicalHeight = 264;
  CSSSampleId.kWebkitMarginAfterCollapse = 265;
  CSSSampleId.kWebkitMarginBeforeCollapse = 266;
  CSSSampleId.kWebkitMarginBottomCollapse = 267;
  CSSSampleId.kWebkitMarginTopCollapse = 268;
  CSSSampleId.kWebkitMarginCollapse = 269;
  CSSSampleId.kAliasWebkitMarginAfter = 270;
  CSSSampleId.kAliasWebkitMarginBefore = 271;
  CSSSampleId.kAliasWebkitMarginEnd = 272;
  CSSSampleId.kAliasWebkitMarginStart = 273;
  CSSSampleId.kWebkitMask = 280;
  CSSSampleId.kWebkitMaskBoxImage = 281;
  CSSSampleId.kWebkitMaskBoxImageOutset = 282;
  CSSSampleId.kWebkitMaskBoxImageRepeat = 283;
  CSSSampleId.kWebkitMaskBoxImageSlice = 284;
  CSSSampleId.kWebkitMaskBoxImageSource = 285;
  CSSSampleId.kWebkitMaskBoxImageWidth = 286;
  CSSSampleId.kWebkitMaskClip = 287;
  CSSSampleId.kWebkitMaskComposite = 288;
  CSSSampleId.kWebkitMaskImage = 289;
  CSSSampleId.kWebkitMaskOrigin = 290;
  CSSSampleId.kWebkitMaskPosition = 291;
  CSSSampleId.kWebkitMaskPositionX = 292;
  CSSSampleId.kWebkitMaskPositionY = 293;
  CSSSampleId.kWebkitMaskRepeat = 294;
  CSSSampleId.kWebkitMaskRepeatX = 295;
  CSSSampleId.kWebkitMaskRepeatY = 296;
  CSSSampleId.kWebkitMaskSize = 297;
  CSSSampleId.kAliasWebkitMaxLogicalWidth = 298;
  CSSSampleId.kAliasWebkitMaxLogicalHeight = 299;
  CSSSampleId.kAliasWebkitMinLogicalWidth = 300;
  CSSSampleId.kAliasWebkitMinLogicalHeight = 301;
  CSSSampleId.kOrder = 303;
  CSSSampleId.kAliasWebkitPaddingAfter = 304;
  CSSSampleId.kAliasWebkitPaddingBefore = 305;
  CSSSampleId.kAliasWebkitPaddingEnd = 306;
  CSSSampleId.kAliasWebkitPaddingStart = 307;
  CSSSampleId.kAliasWebkitPerspective = 308;
  CSSSampleId.kAliasWebkitPerspectiveOrigin = 309;
  CSSSampleId.kWebkitPerspectiveOriginX = 310;
  CSSSampleId.kWebkitPerspectiveOriginY = 311;
  CSSSampleId.kWebkitPrintColorAdjust = 312;
  CSSSampleId.kWebkitRtlOrdering = 313;
  CSSSampleId.kWebkitRubyPosition = 314;
  CSSSampleId.kWebkitTextCombine = 315;
  CSSSampleId.kWebkitTextDecorationsInEffect = 316;
  CSSSampleId.kAliasWebkitTextEmphasis = 317;
  CSSSampleId.kAliasWebkitTextEmphasisColor = 318;
  CSSSampleId.kAliasWebkitTextEmphasisPosition = 319;
  CSSSampleId.kAliasWebkitTextEmphasisStyle = 320;
  CSSSampleId.kWebkitTextFillColor = 321;
  CSSSampleId.kWebkitTextSecurity = 322;
  CSSSampleId.kWebkitTextStroke = 323;
  CSSSampleId.kWebkitTextStrokeColor = 324;
  CSSSampleId.kWebkitTextStrokeWidth = 325;
  CSSSampleId.kAliasWebkitTransform = 326;
  CSSSampleId.kAliasWebkitTransformOrigin = 327;
  CSSSampleId.kWebkitTransformOriginX = 328;
  CSSSampleId.kWebkitTransformOriginY = 329;
  CSSSampleId.kWebkitTransformOriginZ = 330;
  CSSSampleId.kAliasWebkitTransformStyle = 331;
  CSSSampleId.kAliasWebkitTransition = 332;
  CSSSampleId.kAliasWebkitTransitionDelay = 333;
  CSSSampleId.kAliasWebkitTransitionDuration = 334;
  CSSSampleId.kAliasWebkitTransitionProperty = 335;
  CSSSampleId.kAliasWebkitTransitionTimingFunction = 336;
  CSSSampleId.kWebkitUserDrag = 337;
  CSSSampleId.kWebkitUserModify = 338;
  CSSSampleId.kAliasWebkitUserSelect = 339;
  CSSSampleId.kShapeOutside = 347;
  CSSSampleId.kShapeMargin = 348;
  CSSSampleId.kClipPath = 355;
  CSSSampleId.kClipRule = 356;
  CSSSampleId.kMask = 357;
  CSSSampleId.kFilter = 359;
  CSSSampleId.kFloodColor = 360;
  CSSSampleId.kFloodOpacity = 361;
  CSSSampleId.kLightingColor = 362;
  CSSSampleId.kStopColor = 363;
  CSSSampleId.kStopOpacity = 364;
  CSSSampleId.kColorInterpolation = 365;
  CSSSampleId.kColorInterpolationFilters = 366;
  CSSSampleId.kColorRendering = 368;
  CSSSampleId.kFill = 369;
  CSSSampleId.kFillOpacity = 370;
  CSSSampleId.kFillRule = 371;
  CSSSampleId.kMarker = 372;
  CSSSampleId.kMarkerEnd = 373;
  CSSSampleId.kMarkerMid = 374;
  CSSSampleId.kMarkerStart = 375;
  CSSSampleId.kMaskType = 376;
  CSSSampleId.kShapeRendering = 377;
  CSSSampleId.kStroke = 378;
  CSSSampleId.kStrokeDasharray = 379;
  CSSSampleId.kStrokeDashoffset = 380;
  CSSSampleId.kStrokeLinecap = 381;
  CSSSampleId.kStrokeLinejoin = 382;
  CSSSampleId.kStrokeMiterlimit = 383;
  CSSSampleId.kStrokeOpacity = 384;
  CSSSampleId.kStrokeWidth = 385;
  CSSSampleId.kAlignmentBaseline = 386;
  CSSSampleId.kBaselineShift = 387;
  CSSSampleId.kDominantBaseline = 388;
  CSSSampleId.kTextAnchor = 392;
  CSSSampleId.kVectorEffect = 393;
  CSSSampleId.kWritingMode = 394;
  CSSSampleId.kTextDecorationLine = 401;
  CSSSampleId.kTextDecorationStyle = 402;
  CSSSampleId.kTextDecorationColor = 403;
  CSSSampleId.kTextAlignLast = 404;
  CSSSampleId.kTextUnderlinePosition = 405;
  CSSSampleId.kMaxZoom = 406;
  CSSSampleId.kMinZoom = 407;
  CSSSampleId.kOrientation = 408;
  CSSSampleId.kUserZoom = 409;
  CSSSampleId.kAliasWebkitAppRegion = 412;
  CSSSampleId.kAliasWebkitFilter = 413;
  CSSSampleId.kWebkitBoxDecorationBreak = 414;
  CSSSampleId.kWebkitTapHighlightColor = 415;
  CSSSampleId.kBufferedRendering = 416;
  CSSSampleId.kGridAutoRows = 417;
  CSSSampleId.kGridAutoColumns = 418;
  CSSSampleId.kBackgroundBlendMode = 419;
  CSSSampleId.kMixBlendMode = 420;
  CSSSampleId.kTouchAction = 421;
  CSSSampleId.kGridArea = 422;
  CSSSampleId.kGridTemplateAreas = 423;
  CSSSampleId.kAnimation = 424;
  CSSSampleId.kAnimationDelay = 425;
  CSSSampleId.kAnimationDirection = 426;
  CSSSampleId.kAnimationDuration = 427;
  CSSSampleId.kAnimationFillMode = 428;
  CSSSampleId.kAnimationIterationCount = 429;
  CSSSampleId.kAnimationName = 430;
  CSSSampleId.kAnimationPlayState = 431;
  CSSSampleId.kAnimationTimingFunction = 432;
  CSSSampleId.kObjectFit = 433;
  CSSSampleId.kPaintOrder = 434;
  CSSSampleId.kMaskSourceType = 435;
  CSSSampleId.kIsolation = 436;
  CSSSampleId.kObjectPosition = 437;
  CSSSampleId.kShapeImageThreshold = 439;
  CSSSampleId.kColumnFill = 440;
  CSSSampleId.kTextJustify = 441;
  CSSSampleId.kJustifySelf = 443;
  CSSSampleId.kScrollBehavior = 444;
  CSSSampleId.kWillChange = 445;
  CSSSampleId.kTransform = 446;
  CSSSampleId.kTransformOrigin = 447;
  CSSSampleId.kTransformStyle = 448;
  CSSSampleId.kPerspective = 449;
  CSSSampleId.kPerspectiveOrigin = 450;
  CSSSampleId.kBackfaceVisibility = 451;
  CSSSampleId.kGridTemplate = 452;
  CSSSampleId.kGrid = 453;
  CSSSampleId.kAll = 454;
  CSSSampleId.kJustifyItems = 455;
  CSSSampleId.kX = 461;
  CSSSampleId.kY = 462;
  CSSSampleId.kRx = 463;
  CSSSampleId.kRy = 464;
  CSSSampleId.kFontSizeAdjust = 465;
  CSSSampleId.kCx = 466;
  CSSSampleId.kCy = 467;
  CSSSampleId.kR = 468;
  CSSSampleId.kAliasEpubCaptionSide = 469;
  CSSSampleId.kAliasEpubTextCombine = 470;
  CSSSampleId.kAliasEpubTextEmphasis = 471;
  CSSSampleId.kAliasEpubTextEmphasisColor = 472;
  CSSSampleId.kAliasEpubTextEmphasisStyle = 473;
  CSSSampleId.kAliasEpubTextOrientation = 474;
  CSSSampleId.kAliasEpubTextTransform = 475;
  CSSSampleId.kAliasEpubWordBreak = 476;
  CSSSampleId.kAliasEpubWritingMode = 477;
  CSSSampleId.kAliasWebkitAlignContent = 478;
  CSSSampleId.kAliasWebkitAlignItems = 479;
  CSSSampleId.kAliasWebkitAlignSelf = 480;
  CSSSampleId.kAliasWebkitBorderBottomLeftRadius = 481;
  CSSSampleId.kAliasWebkitBorderBottomRightRadius = 482;
  CSSSampleId.kAliasWebkitBorderTopLeftRadius = 483;
  CSSSampleId.kAliasWebkitBorderTopRightRadius = 484;
  CSSSampleId.kAliasWebkitBoxSizing = 485;
  CSSSampleId.kAliasWebkitFlex = 486;
  CSSSampleId.kAliasWebkitFlexBasis = 487;
  CSSSampleId.kAliasWebkitFlexDirection = 488;
  CSSSampleId.kAliasWebkitFlexFlow = 489;
  CSSSampleId.kAliasWebkitFlexGrow = 490;
  CSSSampleId.kAliasWebkitFlexShrink = 491;
  CSSSampleId.kAliasWebkitFlexWrap = 492;
  CSSSampleId.kAliasWebkitJustifyContent = 493;
  CSSSampleId.kAliasWebkitOpacity = 494;
  CSSSampleId.kAliasWebkitOrder = 495;
  CSSSampleId.kAliasWebkitShapeImageThreshold = 496;
  CSSSampleId.kAliasWebkitShapeMargin = 497;
  CSSSampleId.kAliasWebkitShapeOutside = 498;
  CSSSampleId.kScrollSnapType = 499;
  CSSSampleId.kTranslate = 504;
  CSSSampleId.kRotate = 505;
  CSSSampleId.kScale = 506;
  CSSSampleId.kImageOrientation = 507;
  CSSSampleId.kBackdropFilter = 508;
  CSSSampleId.kTextCombineUpright = 509;
  CSSSampleId.kTextOrientation = 510;
  CSSSampleId.kGridColumnGap = 511;
  CSSSampleId.kGridRowGap = 512;
  CSSSampleId.kGridGap = 513;
  CSSSampleId.kFontFeatureSettings = 514;
  CSSSampleId.kVariable = 515;
  CSSSampleId.kFontDisplay = 516;
  CSSSampleId.kContain = 517;
  CSSSampleId.kD = 518;
  CSSSampleId.kBreakAfter = 520;
  CSSSampleId.kBreakBefore = 521;
  CSSSampleId.kBreakInside = 522;
  CSSSampleId.kColumnCount = 523;
  CSSSampleId.kColumnGap = 524;
  CSSSampleId.kColumnRule = 525;
  CSSSampleId.kColumnRuleColor = 526;
  CSSSampleId.kColumnRuleStyle = 527;
  CSSSampleId.kColumnRuleWidth = 528;
  CSSSampleId.kColumnSpan = 529;
  CSSSampleId.kColumnWidth = 530;
  CSSSampleId.kColumns = 531;
  CSSSampleId.kFontVariantCaps = 533;
  CSSSampleId.kHyphens = 534;
  CSSSampleId.kFontVariantNumeric = 535;
  CSSSampleId.kTextSizeAdjust = 536;
  CSSSampleId.kAliasWebkitTextSizeAdjust = 537;
  CSSSampleId.kOverflowAnchor = 538;
  CSSSampleId.kUserSelect = 539;
  CSSSampleId.kOffsetDistance = 540;
  CSSSampleId.kOffsetPath = 541;
  CSSSampleId.kOffset = 543;
  CSSSampleId.kOffsetAnchor = 544;
  CSSSampleId.kOffsetPosition = 545;
  CSSSampleId.kCaretColor = 547;
  CSSSampleId.kOffsetRotate = 548;
  CSSSampleId.kFontVariationSettings = 549;
  CSSSampleId.kInlineSize = 550;
  CSSSampleId.kBlockSize = 551;
  CSSSampleId.kMinInlineSize = 552;
  CSSSampleId.kMinBlockSize = 553;
  CSSSampleId.kMaxInlineSize = 554;
  CSSSampleId.kMaxBlockSize = 555;
  CSSSampleId.kLineBreak = 556;
  CSSSampleId.kPlaceContent = 557;
  CSSSampleId.kPlaceItems = 558;
  CSSSampleId.kTransformBox = 559;
  CSSSampleId.kPlaceSelf = 560;
  CSSSampleId.kScrollSnapAlign = 561;
  CSSSampleId.kScrollPadding = 562;
  CSSSampleId.kScrollPaddingTop = 563;
  CSSSampleId.kScrollPaddingRight = 564;
  CSSSampleId.kScrollPaddingBottom = 565;
  CSSSampleId.kScrollPaddingLeft = 566;
  CSSSampleId.kScrollPaddingBlock = 567;
  CSSSampleId.kScrollPaddingBlockStart = 568;
  CSSSampleId.kScrollPaddingBlockEnd = 569;
  CSSSampleId.kScrollPaddingInline = 570;
  CSSSampleId.kScrollPaddingInlineStart = 571;
  CSSSampleId.kScrollPaddingInlineEnd = 572;
  CSSSampleId.kScrollMargin = 573;
  CSSSampleId.kScrollMarginTop = 574;
  CSSSampleId.kScrollMarginRight = 575;
  CSSSampleId.kScrollMarginBottom = 576;
  CSSSampleId.kScrollMarginLeft = 577;
  CSSSampleId.kScrollMarginBlock = 578;
  CSSSampleId.kScrollMarginBlockStart = 579;
  CSSSampleId.kScrollMarginBlockEnd = 580;
  CSSSampleId.kScrollMarginInline = 581;
  CSSSampleId.kScrollMarginInlineStart = 582;
  CSSSampleId.kScrollMarginInlineEnd = 583;
  CSSSampleId.kScrollSnapStop = 584;
  CSSSampleId.kOverscrollBehavior = 585;
  CSSSampleId.kOverscrollBehaviorX = 586;
  CSSSampleId.kOverscrollBehaviorY = 587;
  CSSSampleId.kFontVariantEastAsian = 588;
  CSSSampleId.kTextDecorationSkipInk = 589;
  CSSSampleId.kScrollCustomization = 590;
  CSSSampleId.kRowGap = 591;
  CSSSampleId.kGap = 592;
  CSSSampleId.kViewportFit = 593;
  CSSSampleId.kMarginBlockStart = 594;
  CSSSampleId.kMarginBlockEnd = 595;
  CSSSampleId.kMarginInlineStart = 596;
  CSSSampleId.kMarginInlineEnd = 597;
  CSSSampleId.kPaddingBlockStart = 598;
  CSSSampleId.kPaddingBlockEnd = 599;
  CSSSampleId.kPaddingInlineStart = 600;
  CSSSampleId.kPaddingInlineEnd = 601;
  CSSSampleId.kBorderBlockEndColor = 602;
  CSSSampleId.kBorderBlockEndStyle = 603;
  CSSSampleId.kBorderBlockEndWidth = 604;
  CSSSampleId.kBorderBlockStartColor = 605;
  CSSSampleId.kBorderBlockStartStyle = 606;
  CSSSampleId.kBorderBlockStartWidth = 607;
  CSSSampleId.kBorderInlineEndColor = 608;
  CSSSampleId.kBorderInlineEndStyle = 609;
  CSSSampleId.kBorderInlineEndWidth = 610;
  CSSSampleId.kBorderInlineStartColor = 611;
  CSSSampleId.kBorderInlineStartStyle = 612;
  CSSSampleId.kBorderInlineStartWidth = 613;
  CSSSampleId.kBorderBlockStart = 614;
  CSSSampleId.kBorderBlockEnd = 615;
  CSSSampleId.kBorderInlineStart = 616;
  CSSSampleId.kBorderInlineEnd = 617;
  CSSSampleId.kMarginBlock = 618;
  CSSSampleId.kMarginInline = 619;
  CSSSampleId.kPaddingBlock = 620;
  CSSSampleId.kPaddingInline = 621;
  CSSSampleId.kBorderBlockColor = 622;
  CSSSampleId.kBorderBlockStyle = 623;
  CSSSampleId.kBorderBlockWidth = 624;
  CSSSampleId.kBorderInlineColor = 625;
  CSSSampleId.kBorderInlineStyle = 626;
  CSSSampleId.kBorderInlineWidth = 627;
  CSSSampleId.kBorderBlock = 628;
  CSSSampleId.kBorderInline = 629;
  CSSSampleId.kInsetBlockStart = 630;
  CSSSampleId.kInsetBlockEnd = 631;
  CSSSampleId.kInsetBlock = 632;
  CSSSampleId.kInsetInlineStart = 633;
  CSSSampleId.kInsetInlineEnd = 634;
  CSSSampleId.kInsetInline = 635;
  CSSSampleId.kInset = 636;
  CSSSampleId.kColorScheme = 637;
  CSSSampleId.kOverflowInline = 638;
  CSSSampleId.kOverflowBlock = 639;
  CSSSampleId.kForcedColorAdjust = 640;
  CSSSampleId.kInherits = 641;
  CSSSampleId.kInitialValue = 642;
  CSSSampleId.kSyntax = 643;
  CSSSampleId.kOverscrollBehaviorInline = 644;
  CSSSampleId.kOverscrollBehaviorBlock = 645;
  CSSSampleId.kFontOpticalSizing = 647;
  CSSSampleId.kContainIntrinsicBlockSize = 648;
  CSSSampleId.kContainIntrinsicHeight = 649;
  CSSSampleId.kContainIntrinsicInlineSize = 650;
  CSSSampleId.kContainIntrinsicSize = 651;
  CSSSampleId.kContainIntrinsicWidth = 652;
  CSSSampleId.kOriginTrialTestProperty = 654;
  CSSSampleId.kMathStyle = 656;
  CSSSampleId.kAspectRatio = 657;
  CSSSampleId.kAppearance = 658;
  CSSSampleId.kRubyPosition = 660;
  CSSSampleId.kTextUnderlineOffset = 661;
  CSSSampleId.kContentVisibility = 662;
  CSSSampleId.kTextDecorationThickness = 663;
  CSSSampleId.kPageOrientation = 664;
  CSSSampleId.kAnimationTimeline = 665;
  CSSSampleId.kCounterSet = 666;
  CSSSampleId.kSource = 667;
  CSSSampleId.kStart = 668;
  CSSSampleId.kEnd = 669;
  CSSSampleId.kTimeRange = 670;
  CSSSampleId.kScrollbarGutter = 671;
  CSSSampleId.kAscentOverride = 672;
  CSSSampleId.kDescentOverride = 673;
  CSSSampleId.kAdvanceOverride = 674;
  CSSSampleId.kLineGapOverride = 675;
  CSSSampleId.kMathShift = 676;
  CSSSampleId.kMathDepth = 677;
  CSSSampleId.kOverflowClipMargin = 679;
  CSSSampleId.kScrollbarWidth = 680;
  CSSSampleId.kSystem = 681;
  CSSSampleId.kNegative = 682;
  CSSSampleId.kPrefix = 683;
  CSSSampleId.kSuffix = 684;
  CSSSampleId.kRange = 685;
  CSSSampleId.kPad = 686;
  CSSSampleId.kFallback = 687;
  CSSSampleId.kSymbols = 688;
  CSSSampleId.kAdditiveSymbols = 689;
  CSSSampleId.kSpeakAs = 690;
  CSSSampleId.kBorderStartStartRadius = 691;
  CSSSampleId.kBorderStartEndRadius = 692;
  CSSSampleId.kBorderEndStartRadius = 693;
  CSSSampleId.kBorderEndEndRadius = 694;
  CSSSampleId.kAccentColor = 695;
  CSSSampleId.kSizeAdjust = 696;
  CSSSampleId.kContainerName = 697;
  CSSSampleId.kContainerType = 698;
  CSSSampleId.kContainer = 699;
  CSSSampleId.kFontSynthesisWeight = 700;
  CSSSampleId.kFontSynthesisStyle = 701;
  CSSSampleId.kAppRegion = 702;
  CSSSampleId.kFontSynthesisSmallCaps = 703;
  CSSSampleId.kFontSynthesis = 704;
  CSSSampleId.kTextEmphasis = 705;
  CSSSampleId.kTextEmphasisColor = 706;
  CSSSampleId.kTextEmphasisPosition = 707;
  CSSSampleId.kTextEmphasisStyle = 708;
  CSSSampleId.kFontPalette = 709;
  CSSSampleId.kBasePalette = 710;
  CSSSampleId.kOverrideColors = 711;
  CSSSampleId.kViewTransitionName = 712;
  CSSSampleId.kObjectViewBox = 713;
  CSSSampleId.kObjectOverflow = 714;
  CSSSampleId.kToggleGroup = 715;
  CSSSampleId.kToggleRoot = 716;
  CSSSampleId.kToggleTrigger = 717;
  CSSSampleId.kToggle = 718;
  CSSSampleId.kAnchorName = 719;
  CSSSampleId.kPositionFallback = 720;
  CSSSampleId.kAnchorScroll = 721;
  CSSSampleId.kPopUpShowDelay = 722;
  CSSSampleId.kPopUpHideDelay = 723;
  CSSSampleId.kHyphenateCharacter = 724;
  CSSSampleId.kScrollTimeline = 725;
  CSSSampleId.kScrollTimelineName = 726;
  CSSSampleId.kScrollTimelineAxis = 727;
  CSSSampleId.kViewTimeline = 728;
  CSSSampleId.kViewTimelineAxis = 729;
  CSSSampleId.kViewTimelineInset = 730;
  CSSSampleId.kViewTimelineName = 731;
  CSSSampleId.kToggleVisibility = 732;
  CSSSampleId.kInitialLetter = 733;
  CSSSampleId.kHyphenateLimitChars = 734;
  CSSSampleId.kAnimationDelayStart = 735;
  CSSSampleId.kAnimationDelayEnd = 736;
  CSSSampleId.kFontVariantPosition = 737;
  CSSSampleId.kFontVariantAlternates = 738;
  CSSSampleId.kBaselineSource = 739;
  CSSSampleId.kAnimationRange = 740;
  CSSSampleId.kAnimationRangeStart = 741;
  CSSSampleId.kAnimationRangeEnd = 742;
  CSSSampleId.kAnimationComposition = 743;
  CSSSampleId.kTopLayer = 744;
  CSSSampleId.kAnchorDefault = 745;
  CSSSampleId.MIN_VALUE = 0;
  CSSSampleId.MAX_VALUE = 745;

  CSSSampleId.isKnownEnumValue = function(value) {
    switch (value) {
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
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
    case 126:
    case 127:
    case 128:
    case 129:
    case 130:
    case 136:
    case 142:
    case 143:
    case 149:
    case 150:
    case 151:
    case 152:
    case 153:
    case 154:
    case 155:
    case 156:
    case 157:
    case 158:
    case 159:
    case 160:
    case 161:
    case 162:
    case 163:
    case 164:
    case 165:
    case 166:
    case 167:
    case 168:
    case 169:
    case 170:
    case 171:
    case 172:
    case 173:
    case 174:
    case 175:
    case 177:
    case 178:
    case 180:
    case 181:
    case 182:
    case 183:
    case 184:
    case 185:
    case 186:
    case 187:
    case 188:
    case 189:
    case 190:
    case 191:
    case 192:
    case 193:
    case 195:
    case 196:
    case 197:
    case 198:
    case 199:
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 208:
    case 209:
    case 210:
    case 211:
    case 212:
    case 215:
    case 216:
    case 217:
    case 218:
    case 219:
    case 221:
    case 222:
    case 223:
    case 224:
    case 225:
    case 226:
    case 227:
    case 230:
    case 231:
    case 232:
    case 233:
    case 234:
    case 235:
    case 236:
    case 237:
    case 238:
    case 239:
    case 240:
    case 242:
    case 243:
    case 244:
    case 245:
    case 246:
    case 247:
    case 248:
    case 249:
    case 250:
    case 251:
    case 252:
    case 259:
    case 260:
    case 263:
    case 264:
    case 265:
    case 266:
    case 267:
    case 268:
    case 269:
    case 270:
    case 271:
    case 272:
    case 273:
    case 280:
    case 281:
    case 282:
    case 283:
    case 284:
    case 285:
    case 286:
    case 287:
    case 288:
    case 289:
    case 290:
    case 291:
    case 292:
    case 293:
    case 294:
    case 295:
    case 296:
    case 297:
    case 298:
    case 299:
    case 300:
    case 301:
    case 303:
    case 304:
    case 305:
    case 306:
    case 307:
    case 308:
    case 309:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 315:
    case 316:
    case 317:
    case 318:
    case 319:
    case 320:
    case 321:
    case 322:
    case 323:
    case 324:
    case 325:
    case 326:
    case 327:
    case 328:
    case 329:
    case 330:
    case 331:
    case 332:
    case 333:
    case 334:
    case 335:
    case 336:
    case 337:
    case 338:
    case 339:
    case 347:
    case 348:
    case 355:
    case 356:
    case 357:
    case 359:
    case 360:
    case 361:
    case 362:
    case 363:
    case 364:
    case 365:
    case 366:
    case 368:
    case 369:
    case 370:
    case 371:
    case 372:
    case 373:
    case 374:
    case 375:
    case 376:
    case 377:
    case 378:
    case 379:
    case 380:
    case 381:
    case 382:
    case 383:
    case 384:
    case 385:
    case 386:
    case 387:
    case 388:
    case 392:
    case 393:
    case 394:
    case 401:
    case 402:
    case 403:
    case 404:
    case 405:
    case 406:
    case 407:
    case 408:
    case 409:
    case 412:
    case 413:
    case 414:
    case 415:
    case 416:
    case 417:
    case 418:
    case 419:
    case 420:
    case 421:
    case 422:
    case 423:
    case 424:
    case 425:
    case 426:
    case 427:
    case 428:
    case 429:
    case 430:
    case 431:
    case 432:
    case 433:
    case 434:
    case 435:
    case 436:
    case 437:
    case 439:
    case 440:
    case 441:
    case 443:
    case 444:
    case 445:
    case 446:
    case 447:
    case 448:
    case 449:
    case 450:
    case 451:
    case 452:
    case 453:
    case 454:
    case 455:
    case 461:
    case 462:
    case 463:
    case 464:
    case 465:
    case 466:
    case 467:
    case 468:
    case 469:
    case 470:
    case 471:
    case 472:
    case 473:
    case 474:
    case 475:
    case 476:
    case 477:
    case 478:
    case 479:
    case 480:
    case 481:
    case 482:
    case 483:
    case 484:
    case 485:
    case 486:
    case 487:
    case 488:
    case 489:
    case 490:
    case 491:
    case 492:
    case 493:
    case 494:
    case 495:
    case 496:
    case 497:
    case 498:
    case 499:
    case 504:
    case 505:
    case 506:
    case 507:
    case 508:
    case 509:
    case 510:
    case 511:
    case 512:
    case 513:
    case 514:
    case 515:
    case 516:
    case 517:
    case 518:
    case 520:
    case 521:
    case 522:
    case 523:
    case 524:
    case 525:
    case 526:
    case 527:
    case 528:
    case 529:
    case 530:
    case 531:
    case 533:
    case 534:
    case 535:
    case 536:
    case 537:
    case 538:
    case 539:
    case 540:
    case 541:
    case 543:
    case 544:
    case 545:
    case 547:
    case 548:
    case 549:
    case 550:
    case 551:
    case 552:
    case 553:
    case 554:
    case 555:
    case 556:
    case 557:
    case 558:
    case 559:
    case 560:
    case 561:
    case 562:
    case 563:
    case 564:
    case 565:
    case 566:
    case 567:
    case 568:
    case 569:
    case 570:
    case 571:
    case 572:
    case 573:
    case 574:
    case 575:
    case 576:
    case 577:
    case 578:
    case 579:
    case 580:
    case 581:
    case 582:
    case 583:
    case 584:
    case 585:
    case 586:
    case 587:
    case 588:
    case 589:
    case 590:
    case 591:
    case 592:
    case 593:
    case 594:
    case 595:
    case 596:
    case 597:
    case 598:
    case 599:
    case 600:
    case 601:
    case 602:
    case 603:
    case 604:
    case 605:
    case 606:
    case 607:
    case 608:
    case 609:
    case 610:
    case 611:
    case 612:
    case 613:
    case 614:
    case 615:
    case 616:
    case 617:
    case 618:
    case 619:
    case 620:
    case 621:
    case 622:
    case 623:
    case 624:
    case 625:
    case 626:
    case 627:
    case 628:
    case 629:
    case 630:
    case 631:
    case 632:
    case 633:
    case 634:
    case 635:
    case 636:
    case 637:
    case 638:
    case 639:
    case 640:
    case 641:
    case 642:
    case 643:
    case 644:
    case 645:
    case 647:
    case 648:
    case 649:
    case 650:
    case 651:
    case 652:
    case 654:
    case 656:
    case 657:
    case 658:
    case 660:
    case 661:
    case 662:
    case 663:
    case 664:
    case 665:
    case 666:
    case 667:
    case 668:
    case 669:
    case 670:
    case 671:
    case 672:
    case 673:
    case 674:
    case 675:
    case 676:
    case 677:
    case 679:
    case 680:
    case 681:
    case 682:
    case 683:
    case 684:
    case 685:
    case 686:
    case 687:
    case 688:
    case 689:
    case 690:
    case 691:
    case 692:
    case 693:
    case 694:
    case 695:
    case 696:
    case 697:
    case 698:
    case 699:
    case 700:
    case 701:
    case 702:
    case 703:
    case 704:
    case 705:
    case 706:
    case 707:
    case 708:
    case 709:
    case 710:
    case 711:
    case 712:
    case 713:
    case 714:
    case 715:
    case 716:
    case 717:
    case 718:
    case 719:
    case 720:
    case 721:
    case 722:
    case 723:
    case 724:
    case 725:
    case 726:
    case 727:
    case 728:
    case 729:
    case 730:
    case 731:
    case 732:
    case 733:
    case 734:
    case 735:
    case 736:
    case 737:
    case 738:
    case 739:
    case 740:
    case 741:
    case 742:
    case 743:
    case 744:
    case 745:
      return true;
    }
    return false;
  };

  CSSSampleId.toKnownEnumValue = function(value) {
    return value;
  };

  CSSSampleId.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.CSSSampleId = CSSSampleId;
})();