(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.basic.Atom": {},
      "ville.embed.MEmbed": {},
      "qx.ui.core.Blocker": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Dock": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.container.Stack": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.container.Scroll": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Part": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.popup.Popup": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.Button": {},
      "qx.ui.form.Button": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.bom.element.Animation": {},
      "qx.ui.basic.Label": {},
      "ville.embed.iconicss.CubeO": {},
      "qx.bom.element.AnimationCss": {},
      "qx.ui.layout.Flow": {},
      "ville.embed.iconicss.CoffeeGrain": {},
      "ville.embed.iconicss.Coffee": {},
      "ville.embed.iconicss.Football": {},
      "ville.embed.iconicss.Shapes": {},
      "ville.embed.iconicss.Rocket": {},
      "ville.embed.iconicss.Wolverine": {},
      "ville.embed.iconicss.SunO": {},
      "ville.embed.fluent.AirplaneTakeOff": {},
      "ville.embed.fluent.AccessTime": {},
      "ville.embed.fluent.Accessibility": {},
      "ville.embed.fluent.AccessibilityCheckmark": {},
      "ville.embed.fluent.AccessibilityError": {},
      "ville.embed.fluent.AccessibilityQuestionMark": {},
      "ville.embed.fluent.Add": {},
      "ville.embed.fluent.AddCircle": {},
      "ville.embed.fluent.AddSquare": {},
      "ville.embed.fluent.AddSquareMultiple": {},
      "ville.embed.fluent.AddSubtractCircle": {},
      "ville.embed.fluent.Airplane": {},
      "ville.embed.fluent.AirplaneLanding": {},
      "ville.embed.fluent.Album": {},
      "ville.embed.fluent.AlbumAdd": {},
      "ville.embed.fluent.Alert": {},
      "ville.embed.fluent.AlertBadge": {},
      "ville.embed.fluent.AlertOff": {},
      "ville.embed.fluent.AlertOn": {},
      "ville.embed.fluent.AlertSnooze": {},
      "ville.embed.fluent.AlertUrgent": {},
      "ville.embed.fluent.AlignBottom": {},
      "ville.embed.fluent.AlignCenterHorizontal": {},
      "ville.embed.fluent.AlignCenterVertical": {},
      "ville.embed.fluent.AlignEndHorizontal": {},
      "ville.embed.fluent.AlignEndVertical": {},
      "ville.embed.fluent.AlignLeft": {},
      "ville.embed.fluent.AlignRight": {},
      "ville.embed.fluent.AlignSpaceAroundHorizontal": {},
      "ville.embed.fluent.AlignSpaceAroundVertical": {},
      "ville.embed.fluent.AlignSpaceBetweenHorizontal": {},
      "ville.embed.fluent.AlignSpaceBetweenVertical": {},
      "ville.embed.fluent.AlignSpaceEvenlyHorizontal": {},
      "ville.embed.fluent.AlignSpaceEvenlyVertical": {},
      "ville.embed.fluent.AlignSpaceFitVertical": {},
      "ville.embed.fluent.AlignStartHorizontal": {},
      "ville.embed.fluent.AlignStartVertical": {},
      "ville.embed.fluent.AlignStraighten": {},
      "ville.embed.fluent.AlignStretchHorizontal": {},
      "ville.embed.fluent.AlignStretchVertical": {},
      "ville.embed.fluent.AlignTop": {},
      "ville.embed.fluent.AnimalCat": {},
      "ville.embed.fluent.AnimalDog": {},
      "ville.embed.fluent.AnimalRabbit": {},
      "ville.embed.fluent.AnimalRabbitOff": {},
      "ville.embed.fluent.AnimalTurtle": {},
      "ville.embed.fluent.AppFolder": {},
      "ville.embed.fluent.AppGeneric": {},
      "ville.embed.fluent.AppRecent": {},
      "ville.embed.fluent.AppTitle": {},
      "ville.embed.fluent.ApprovalsApp": {},
      "ville.embed.fluent.Apps": {},
      "ville.embed.fluent.AppsAddIn": {},
      "ville.embed.fluent.AppsList": {},
      "ville.embed.fluent.AppsListDetail": {},
      "ville.embed.fluent.AppsSettings": {},
      "ville.embed.fluent.AppsShield": {},
      "ville.embed.fluent.Archive": {},
      "ville.embed.fluent.ArchiveArrowBack": {},
      "ville.embed.fluent.ArchiveMultiple": {},
      "ville.embed.fluent.ArchiveSettings": {},
      "ville.embed.fluent.ArrowAutofitContent": {},
      "ville.embed.fluent.ArrowAutofitDown": {},
      "ville.embed.fluent.ArrowAutofitHeight": {},
      "ville.embed.fluent.ArrowAutofitHeightDotted": {},
      "ville.embed.fluent.ArrowAutofitHeightIn": {},
      "ville.embed.fluent.ArrowAutofitUp": {},
      "ville.embed.fluent.ArrowAutofitWidth": {},
      "ville.embed.fluent.ArrowAutofitWidthDotted": {},
      "ville.embed.fluent.ArrowBetweenDown": {},
      "ville.embed.fluent.ArrowBetweenUp": {},
      "ville.embed.fluent.ArrowBidirectionalLeftRight": {},
      "ville.embed.fluent.ArrowBidirectionalUpDown": {},
      "ville.embed.fluent.ArrowBounce": {},
      "ville.embed.fluent.ArrowCircleDown": {},
      "ville.embed.fluent.ArrowCircleDownDouble": {},
      "ville.embed.fluent.ArrowCircleDownRight": {},
      "ville.embed.fluent.ArrowCircleDownSplit": {},
      "ville.embed.fluent.ArrowCircleDownUp": {},
      "ville.embed.fluent.ArrowCircleLeft": {},
      "ville.embed.fluent.ArrowCircleRight": {},
      "ville.embed.fluent.ArrowCircleUp": {},
      "ville.embed.fluent.ArrowCircleUpLeft": {},
      "ville.embed.fluent.ArrowCircleUpRight": {},
      "ville.embed.fluent.ArrowClockwise": {},
      "ville.embed.fluent.ArrowClockwiseDashes": {},
      "ville.embed.fluent.ArrowCollapseAll": {},
      "ville.embed.fluent.ArrowCounterclockwise": {},
      "ville.embed.fluent.ArrowCounterclockwiseDashes": {},
      "ville.embed.fluent.ArrowCurveDownLeft": {},
      "ville.embed.fluent.ArrowCurveDownRight": {},
      "ville.embed.fluent.ArrowCurveUpLeft": {},
      "ville.embed.fluent.ArrowCurveUpRight": {},
      "ville.embed.fluent.ArrowDown": {},
      "ville.embed.fluent.ArrowDownExclamation": {},
      "ville.embed.fluent.ArrowDownLeft": {},
      "ville.embed.fluent.ArrowDownload": {},
      "ville.embed.fluent.ArrowDownloadOff": {},
      "ville.embed.fluent.ArrowEject": {},
      "ville.embed.fluent.ArrowEnter": {},
      "ville.embed.fluent.ArrowEnterLeft": {},
      "ville.embed.fluent.ArrowEnterUp": {},
      "ville.embed.fluent.ArrowExit": {},
      "ville.embed.fluent.ArrowExpand": {},
      "ville.embed.fluent.ArrowExport": {},
      "ville.embed.fluent.ArrowExportLtr": {},
      "ville.embed.fluent.ArrowExportRtl": {},
      "ville.embed.fluent.ArrowExportUp": {},
      "ville.embed.fluent.ArrowFit": {},
      "ville.embed.fluent.ArrowFitIn": {},
      "ville.embed.fluent.ArrowFlowDiagonalUpRight": {},
      "ville.embed.fluent.ArrowFlowUpRight": {},
      "ville.embed.fluent.ArrowFlowUpRightRectangleMultiple": {},
      "ville.embed.fluent.ArrowForward": {},
      "ville.embed.fluent.ArrowForwardDownLightning": {},
      "ville.embed.fluent.ArrowForwardDownPerson": {},
      "ville.embed.fluent.ArrowHookDownLeft": {},
      "ville.embed.fluent.ArrowHookDownRight": {},
      "ville.embed.fluent.ArrowHookUpLeft": {},
      "ville.embed.fluent.ArrowHookUpRight": {},
      "ville.embed.fluent.ArrowImport": {},
      "ville.embed.fluent.ArrowJoin": {},
      "ville.embed.fluent.ArrowLeft": {},
      "ville.embed.fluent.ArrowMaximize": {},
      "ville.embed.fluent.ArrowMaximizeVertical": {},
      "ville.embed.fluent.ArrowMinimize": {},
      "ville.embed.fluent.ArrowMinimizeVertical": {},
      "ville.embed.fluent.ArrowMove": {},
      "ville.embed.fluent.ArrowMoveInward": {},
      "ville.embed.fluent.ArrowNext": {},
      "ville.embed.fluent.ArrowOutlineDownLeft": {},
      "ville.embed.fluent.ArrowOutlineUpRight": {},
      "ville.embed.fluent.ArrowParagraph": {},
      "ville.embed.fluent.ArrowPrevious": {},
      "ville.embed.fluent.ArrowRedo": {},
      "ville.embed.fluent.ArrowRepeat1": {},
      "ville.embed.fluent.ArrowRepeatAll": {},
      "ville.embed.fluent.ArrowRepeatAllOff": {},
      "ville.embed.fluent.ArrowReply": {},
      "ville.embed.fluent.ArrowReplyAll": {},
      "ville.embed.fluent.ArrowReplyDown": {},
      "ville.embed.fluent.ArrowReset": {},
      "ville.embed.fluent.ArrowRight": {},
      "ville.embed.fluent.ArrowRotateClockwise": {},
      "ville.embed.fluent.ArrowRotateCounterclockwise": {},
      "ville.embed.fluent.ArrowRouting": {},
      "ville.embed.fluent.ArrowRoutingRectangleMultiple": {},
      "ville.embed.fluent.ArrowShuffle": {},
      "ville.embed.fluent.ArrowShuffleOff": {},
      "ville.embed.fluent.ArrowSort": {},
      "ville.embed.fluent.ArrowSortDown": {},
      "ville.embed.fluent.ArrowSortDownLines": {},
      "ville.embed.fluent.ArrowSortUp": {},
      "ville.embed.fluent.ArrowSortUpLines": {},
      "ville.embed.fluent.ArrowSplit": {},
      "ville.embed.fluent.ArrowSprint": {},
      "ville.embed.fluent.ArrowSquareDown": {},
      "ville.embed.fluent.ArrowSquareUpRight": {},
      "ville.embed.fluent.ArrowStepBack": {},
      "ville.embed.fluent.ArrowStepIn": {},
      "ville.embed.fluent.ArrowStepInDiagonalDownLeft": {},
      "ville.embed.fluent.ArrowStepInLeft": {},
      "ville.embed.fluent.ArrowStepInRight": {},
      "ville.embed.fluent.ArrowStepOut": {},
      "ville.embed.fluent.ArrowStepOver": {},
      "ville.embed.fluent.ArrowSwap": {},
      "ville.embed.fluent.ArrowSync": {},
      "ville.embed.fluent.ArrowSyncCheckmark": {},
      "ville.embed.fluent.ArrowSyncCircle": {},
      "ville.embed.fluent.ArrowSyncDismiss": {},
      "ville.embed.fluent.ArrowSyncOff": {},
      "ville.embed.fluent.ArrowTrending": {},
      "ville.embed.fluent.ArrowTrendingCheckmark": {},
      "ville.embed.fluent.ArrowTrendingDown": {},
      "ville.embed.fluent.ArrowTrendingLines": {},
      "ville.embed.fluent.ArrowTrendingSettings": {},
      "ville.embed.fluent.ArrowTrendingSparkle": {},
      "ville.embed.fluent.ArrowTrendingText": {},
      "ville.embed.fluent.ArrowTrendingWrench": {},
      "ville.embed.fluent.ArrowTurnBidirectionalDownRight": {},
      "ville.embed.fluent.ArrowTurnDownLeft": {},
      "ville.embed.fluent.ArrowTurnDownRight": {},
      "ville.embed.fluent.ArrowTurnDownUp": {},
      "ville.embed.fluent.ArrowTurnLeftDown": {},
      "ville.embed.fluent.ArrowTurnLeftRight": {},
      "ville.embed.fluent.ArrowTurnLeftUp": {},
      "ville.embed.fluent.ArrowTurnRight": {},
      "ville.embed.fluent.ArrowTurnRightDown": {},
      "ville.embed.fluent.ArrowTurnRightLeft": {},
      "ville.embed.fluent.ArrowTurnRightUp": {},
      "ville.embed.fluent.ArrowTurnUpDown": {},
      "ville.embed.fluent.ArrowTurnUpLeft": {},
      "ville.embed.fluent.ArrowUndo": {},
      "ville.embed.fluent.ArrowUp": {},
      "ville.embed.fluent.ArrowUpExclamation": {},
      "ville.embed.fluent.ArrowUpLeft": {},
      "ville.embed.fluent.ArrowUpRight": {},
      "ville.embed.fluent.ArrowUpload": {},
      "ville.embed.fluent.ArrowWrap": {},
      "ville.embed.fluent.ArrowWrapOff": {},
      "ville.embed.fluent.ArrowsBidirectional": {},
      "ville.embed.fluent.Attach": {},
      "ville.embed.fluent.AttachArrowRight": {},
      "ville.embed.fluent.AttachText": {},
      "ville.embed.fluent.AutoFitHeight": {},
      "ville.embed.fluent.AutoFitWidth": {},
      "ville.embed.fluent.Autocorrect": {},
      "ville.embed.fluent.Autosum": {},
      "ville.embed.fluent.Backpack": {},
      "ville.embed.fluent.BackpackAdd": {},
      "ville.embed.fluent.Backspace": {},
      "ville.embed.fluent.Badge": {},
      "ville.embed.fluent.Balloon": {},
      "ville.embed.fluent.BarcodeScanner": {},
      "ville.embed.fluent.Battery0": {},
      "ville.embed.fluent.Battery10": {},
      "ville.embed.fluent.Battery1": {},
      "ville.embed.fluent.Battery2": {},
      "ville.embed.fluent.Battery3": {},
      "ville.embed.fluent.Battery4": {},
      "ville.embed.fluent.Battery5": {},
      "ville.embed.fluent.Battery6": {},
      "ville.embed.fluent.Battery7": {},
      "ville.embed.fluent.Battery8": {},
      "ville.embed.fluent.Battery9": {},
      "ville.embed.fluent.BatteryCharge": {},
      "ville.embed.fluent.BatteryCheckmark": {},
      "ville.embed.fluent.BatterySaver": {},
      "ville.embed.fluent.BatteryWarning": {},
      "ville.embed.fluent.Beach": {},
      "ville.embed.fluent.Beaker": {},
      "ville.embed.fluent.BeakerAdd": {},
      "ville.embed.fluent.BeakerDismiss": {},
      "ville.embed.fluent.BeakerEdit": {},
      "ville.embed.fluent.BeakerOff": {},
      "ville.embed.fluent.BeakerSettings": {},
      "ville.embed.fluent.Bed": {},
      "ville.embed.fluent.Bench": {},
      "ville.embed.fluent.BezierCurveSquare": {},
      "ville.embed.fluent.BinFull": {},
      "ville.embed.fluent.BinRecycle": {},
      "ville.embed.fluent.BinRecycleFull": {},
      "ville.embed.fluent.BinderTriangle": {},
      "ville.embed.fluent.Bluetooth": {},
      "ville.embed.fluent.BluetoothConnected": {},
      "ville.embed.fluent.BluetoothDisabled": {},
      "ville.embed.fluent.BluetoothSearching": {},
      "ville.embed.fluent.Blur": {},
      "ville.embed.fluent.Board": {},
      "ville.embed.fluent.BoardGames": {},
      "ville.embed.fluent.BoardHeart": {},
      "ville.embed.fluent.BoardSplit": {},
      "ville.embed.fluent.Book": {},
      "ville.embed.fluent.BookAdd": {},
      "ville.embed.fluent.BookArrowClockwise": {},
      "ville.embed.fluent.BookClock": {},
      "ville.embed.fluent.BookCoins": {},
      "ville.embed.fluent.BookCompass": {},
      "ville.embed.fluent.BookContacts": {},
      "ville.embed.fluent.BookDatabase": {},
      "ville.embed.fluent.BookDismiss": {},
      "ville.embed.fluent.BookExclamationMark": {},
      "ville.embed.fluent.BookGlobe": {},
      "ville.embed.fluent.BookInformation": {},
      "ville.embed.fluent.BookLetter": {},
      "ville.embed.fluent.BookNumber": {},
      "ville.embed.fluent.BookOpen": {},
      "ville.embed.fluent.BookOpenGlobe": {},
      "ville.embed.fluent.BookOpenMicrophone": {},
      "ville.embed.fluent.BookPulse": {},
      "ville.embed.fluent.BookQuestionMark": {},
      "ville.embed.fluent.BookQuestionMarkRtl": {},
      "ville.embed.fluent.BookSearch": {},
      "ville.embed.fluent.BookStar": {},
      "ville.embed.fluent.BookTemplate": {},
      "ville.embed.fluent.BookTheta": {},
      "ville.embed.fluent.BookToolbox": {},
      "ville.embed.fluent.Bookmark": {},
      "ville.embed.fluent.BookmarkAdd": {},
      "ville.embed.fluent.BookmarkMultiple": {},
      "ville.embed.fluent.BookmarkOff": {},
      "ville.embed.fluent.BookmarkSearch": {},
      "ville.embed.fluent.BorderAll": {},
      "ville.embed.fluent.BorderBottom": {},
      "ville.embed.fluent.BorderBottomDouble": {},
      "ville.embed.fluent.BorderBottomThick": {},
      "ville.embed.fluent.BorderInside": {},
      "ville.embed.fluent.BorderLeft": {},
      "ville.embed.fluent.BorderLeftRight": {},
      "ville.embed.fluent.BorderNone": {},
      "ville.embed.fluent.BorderOutside": {},
      "ville.embed.fluent.BorderOutsideThick": {},
      "ville.embed.fluent.BorderRight": {},
      "ville.embed.fluent.BorderTop": {},
      "ville.embed.fluent.BorderTopBottom": {},
      "ville.embed.fluent.BorderTopBottomDouble": {},
      "ville.embed.fluent.BorderTopBottomThick": {},
      "ville.embed.fluent.Bot": {},
      "ville.embed.fluent.BotAdd": {},
      "ville.embed.fluent.BotSparkle": {},
      "ville.embed.fluent.BowTie": {},
      "ville.embed.fluent.BowlChopsticks": {},
      "ville.embed.fluent.BowlSalad": {},
      "ville.embed.fluent.Box": {},
      "ville.embed.fluent.BoxArrowLeft": {},
      "ville.embed.fluent.BoxArrowUp": {},
      "ville.embed.fluent.BoxCheckmark": {},
      "ville.embed.fluent.BoxDismiss": {},
      "ville.embed.fluent.BoxEdit": {},
      "ville.embed.fluent.BoxMultiple": {},
      "ville.embed.fluent.BoxMultipleArrowLeft": {},
      "ville.embed.fluent.BoxMultipleArrowRight": {},
      "ville.embed.fluent.BoxMultipleCheckmark": {},
      "ville.embed.fluent.BoxMultipleSearch": {},
      "ville.embed.fluent.BoxSearch": {},
      "ville.embed.fluent.BoxToolbox": {},
      "ville.embed.fluent.Braces": {},
      "ville.embed.fluent.BracesVariable": {},
      "ville.embed.fluent.BrainCircuit": {},
      "ville.embed.fluent.Branch": {},
      "ville.embed.fluent.BranchCompare": {},
      "ville.embed.fluent.BranchFork": {},
      "ville.embed.fluent.BranchForkHint": {},
      "ville.embed.fluent.BranchForkLink": {},
      "ville.embed.fluent.BranchRequest": {},
      "ville.embed.fluent.BreakoutRoom": {},
      "ville.embed.fluent.Briefcase": {},
      "ville.embed.fluent.BriefcaseMedical": {},
      "ville.embed.fluent.BriefcaseOff": {},
      "ville.embed.fluent.BriefcaseSearch": {},
      "ville.embed.fluent.BrightnessHigh": {},
      "ville.embed.fluent.BrightnessLow": {},
      "ville.embed.fluent.BroadActivityFeed": {},
      "ville.embed.fluent.Broom": {},
      "ville.embed.fluent.BubbleMultiple": {},
      "ville.embed.fluent.Bug": {},
      "ville.embed.fluent.BugArrowCounterclockwise": {},
      "ville.embed.fluent.BugProhibited": {},
      "ville.embed.fluent.Building": {},
      "ville.embed.fluent.BuildingBank": {},
      "ville.embed.fluent.BuildingBankLink": {},
      "ville.embed.fluent.BuildingBankToolbox": {},
      "ville.embed.fluent.BuildingDesktop": {},
      "ville.embed.fluent.BuildingFactory": {},
      "ville.embed.fluent.BuildingGovernment": {},
      "ville.embed.fluent.BuildingGovernmentSearch": {},
      "ville.embed.fluent.BuildingHome": {},
      "ville.embed.fluent.BuildingLighthouse": {},
      "ville.embed.fluent.BuildingMosque": {},
      "ville.embed.fluent.BuildingMultiple": {},
      "ville.embed.fluent.BuildingPeople": {},
      "ville.embed.fluent.BuildingRetail": {},
      "ville.embed.fluent.BuildingRetailMoney": {},
      "ville.embed.fluent.BuildingRetailMore": {},
      "ville.embed.fluent.BuildingRetailShield": {},
      "ville.embed.fluent.BuildingRetailToolbox": {},
      "ville.embed.fluent.BuildingShop": {},
      "ville.embed.fluent.BuildingSkyscraper": {},
      "ville.embed.fluent.BuildingSwap": {},
      "ville.embed.fluent.BuildingTownhouse": {},
      "ville.embed.fluent.Button": {},
      "ville.embed.fluent.Calculator": {},
      "ville.embed.fluent.CalculatorArrowClockwise": {},
      "ville.embed.fluent.CalculatorMultiple": {},
      "ville.embed.fluent.Calendar": {},
      "ville.embed.fluent.Calendar3Day": {},
      "ville.embed.fluent.CalendarAdd": {},
      "ville.embed.fluent.CalendarAgenda": {},
      "ville.embed.fluent.CalendarArrowCounterclockwise": {},
      "ville.embed.fluent.CalendarArrowDown": {},
      "ville.embed.fluent.CalendarArrowRight": {},
      "ville.embed.fluent.CalendarAssistant": {},
      "ville.embed.fluent.CalendarCancel": {},
      "ville.embed.fluent.CalendarChat": {},
      "ville.embed.fluent.CalendarCheckmark": {},
      "ville.embed.fluent.CalendarClock": {},
      "ville.embed.fluent.CalendarDataBar": {},
      "ville.embed.fluent.CalendarDate": {},
      "ville.embed.fluent.CalendarDay": {},
      "ville.embed.fluent.CalendarEdit": {},
      "ville.embed.fluent.CalendarEmpty": {},
      "ville.embed.fluent.CalendarError": {},
      "ville.embed.fluent.CalendarEye": {},
      "ville.embed.fluent.CalendarInfo": {},
      "ville.embed.fluent.CalendarLock": {},
      "ville.embed.fluent.CalendarLtr": {},
      "ville.embed.fluent.CalendarMail": {},
      "ville.embed.fluent.CalendarMention": {},
      "ville.embed.fluent.CalendarMonth": {},
      "ville.embed.fluent.CalendarMultiple": {},
      "ville.embed.fluent.CalendarNote": {},
      "ville.embed.fluent.CalendarPattern": {},
      "ville.embed.fluent.CalendarPerson": {},
      "ville.embed.fluent.CalendarPhone": {},
      "ville.embed.fluent.CalendarPlay": {},
      "ville.embed.fluent.CalendarQuestionMark": {},
      "ville.embed.fluent.CalendarRecord": {},
      "ville.embed.fluent.CalendarReply": {},
      "ville.embed.fluent.CalendarRtl": {},
      "ville.embed.fluent.CalendarSearch": {},
      "ville.embed.fluent.CalendarSettings": {},
      "ville.embed.fluent.CalendarShield": {},
      "ville.embed.fluent.CalendarSparkle": {},
      "ville.embed.fluent.CalendarStar": {},
      "ville.embed.fluent.CalendarSync": {},
      "ville.embed.fluent.CalendarTemplate": {},
      "ville.embed.fluent.CalendarToday": {},
      "ville.embed.fluent.CalendarToolbox": {},
      "ville.embed.fluent.CalendarVideo": {},
      "ville.embed.fluent.CalendarWeekNumbers": {},
      "ville.embed.fluent.CalendarWeekStart": {},
      "ville.embed.fluent.CalendarWorkWeek": {},
      "ville.embed.fluent.Call": {},
      "ville.embed.fluent.CallAdd": {},
      "ville.embed.fluent.CallCheckmark": {},
      "ville.embed.fluent.CallConnecting": {},
      "ville.embed.fluent.CallDismiss": {},
      "ville.embed.fluent.CallEnd": {},
      "ville.embed.fluent.CallExclamation": {},
      "ville.embed.fluent.CallForward": {},
      "ville.embed.fluent.CallInbound": {},
      "ville.embed.fluent.CallMissed": {},
      "ville.embed.fluent.CallOutbound": {},
      "ville.embed.fluent.CallPark": {},
      "ville.embed.fluent.CallPause": {},
      "ville.embed.fluent.CallProhibited": {},
      "ville.embed.fluent.CallTransfer": {},
      "ville.embed.fluent.CallWarning": {},
      "ville.embed.fluent.CalligraphyPen": {},
      "ville.embed.fluent.CalligraphyPenCheckmark": {},
      "ville.embed.fluent.CalligraphyPenError": {},
      "ville.embed.fluent.CalligraphyPenQuestionMark": {},
      "ville.embed.fluent.Camera": {},
      "ville.embed.fluent.CameraAdd": {},
      "ville.embed.fluent.CameraArrowUp": {},
      "ville.embed.fluent.CameraDome": {},
      "ville.embed.fluent.CameraEdit": {},
      "ville.embed.fluent.CameraOff": {},
      "ville.embed.fluent.CameraSparkles": {},
      "ville.embed.fluent.CameraSwitch": {},
      "ville.embed.fluent.CardUi": {},
      "ville.embed.fluent.CaretDown": {},
      "ville.embed.fluent.CaretDownRight": {},
      "ville.embed.fluent.CaretLeft": {},
      "ville.embed.fluent.CaretRight": {},
      "ville.embed.fluent.CaretUp": {},
      "ville.embed.fluent.Cart": {},
      "ville.embed.fluent.Cast": {},
      "ville.embed.fluent.CastMultiple": {},
      "ville.embed.fluent.CatchUp": {},
      "ville.embed.fluent.Cellular3g": {},
      "ville.embed.fluent.Cellular4g": {},
      "ville.embed.fluent.Cellular5g": {},
      "ville.embed.fluent.CellularData1": {},
      "ville.embed.fluent.CellularData2": {},
      "ville.embed.fluent.CellularData3": {},
      "ville.embed.fluent.CellularData4": {},
      "ville.embed.fluent.CellularData5": {},
      "ville.embed.fluent.CellularOff": {},
      "ville.embed.fluent.CellularWarning": {},
      "ville.embed.fluent.CenterHorizontal": {},
      "ville.embed.fluent.CenterVertical": {},
      "ville.embed.fluent.Certificate": {},
      "ville.embed.fluent.Channel": {},
      "ville.embed.fluent.ChannelAdd": {},
      "ville.embed.fluent.ChannelAlert": {},
      "ville.embed.fluent.ChannelArrowLeft": {},
      "ville.embed.fluent.ChannelDismiss": {},
      "ville.embed.fluent.ChannelShare": {},
      "ville.embed.fluent.ChannelSubtract": {},
      "ville.embed.fluent.ChartMultiple": {},
      "ville.embed.fluent.ChartPerson": {},
      "ville.embed.fluent.Chat": {},
      "ville.embed.fluent.ChatAdd": {},
      "ville.embed.fluent.ChatArrowBack": {},
      "ville.embed.fluent.ChatArrowDoubleBack": {},
      "ville.embed.fluent.ChatBubblesQuestion": {},
      "ville.embed.fluent.ChatCursor": {},
      "ville.embed.fluent.ChatDismiss": {},
      "ville.embed.fluent.ChatEmpty": {},
      "ville.embed.fluent.ChatHelp": {},
      "ville.embed.fluent.ChatLock": {},
      "ville.embed.fluent.ChatMail": {},
      "ville.embed.fluent.ChatMultiple": {},
      "ville.embed.fluent.ChatMultipleHeart": {},
      "ville.embed.fluent.ChatOff": {},
      "ville.embed.fluent.ChatSettings": {},
      "ville.embed.fluent.ChatSparkle": {},
      "ville.embed.fluent.ChatVideo": {},
      "ville.embed.fluent.ChatWarning": {},
      "ville.embed.fluent.Check": {},
      "ville.embed.fluent.Checkbox1": {},
      "ville.embed.fluent.Checkbox2": {},
      "ville.embed.fluent.CheckboxArrowRight": {},
      "ville.embed.fluent.CheckboxChecked": {},
      "ville.embed.fluent.CheckboxCheckedSync": {},
      "ville.embed.fluent.CheckboxIndeterminate": {},
      "ville.embed.fluent.CheckboxPerson": {},
      "ville.embed.fluent.CheckboxUnchecked": {},
      "ville.embed.fluent.CheckboxWarning": {},
      "ville.embed.fluent.Checkmark": {},
      "ville.embed.fluent.CheckmarkCircle": {},
      "ville.embed.fluent.CheckmarkCircleSquare": {},
      "ville.embed.fluent.CheckmarkCircleWarning": {},
      "ville.embed.fluent.CheckmarkLock": {},
      "ville.embed.fluent.CheckmarkNote": {},
      "ville.embed.fluent.CheckmarkSquare": {},
      "ville.embed.fluent.CheckmarkStarburst": {},
      "ville.embed.fluent.CheckmarkUnderlineCircle": {},
      "ville.embed.fluent.Chess": {},
      "ville.embed.fluent.ChevronCircleDown": {},
      "ville.embed.fluent.ChevronCircleLeft": {},
      "ville.embed.fluent.ChevronCircleRight": {},
      "ville.embed.fluent.ChevronCircleUp": {},
      "ville.embed.fluent.ChevronDoubleDown": {},
      "ville.embed.fluent.ChevronDoubleLeft": {},
      "ville.embed.fluent.ChevronDoubleRight": {},
      "ville.embed.fluent.ChevronDoubleUp": {},
      "ville.embed.fluent.ChevronDown": {},
      "ville.embed.fluent.ChevronDownUp": {},
      "ville.embed.fluent.ChevronLeft": {},
      "ville.embed.fluent.ChevronRight": {},
      "ville.embed.fluent.ChevronUp": {},
      "ville.embed.fluent.ChevronUpDown": {},
      "ville.embed.fluent.Circle": {},
      "ville.embed.fluent.CircleEdit": {},
      "ville.embed.fluent.CircleEraser": {},
      "ville.embed.fluent.CircleHalfFill": {},
      "ville.embed.fluent.CircleHighlight": {},
      "ville.embed.fluent.CircleHint": {},
      "ville.embed.fluent.CircleHintHalfVertical": {},
      "ville.embed.fluent.CircleImage": {},
      "ville.embed.fluent.CircleLine": {},
      "ville.embed.fluent.CircleMultipleSubtractCheckmark": {},
      "ville.embed.fluent.CircleOff": {},
      "ville.embed.fluent.CircleShadow": {},
      "ville.embed.fluent.CircleSmall": {},
      "ville.embed.fluent.City": {},
      "ville.embed.fluent.Class": {},
      "ville.embed.fluent.Classification": {},
      "ville.embed.fluent.ClearFormatting": {},
      "ville.embed.fluent.Clipboard": {},
      "ville.embed.fluent.Clipboard3Day": {},
      "ville.embed.fluent.ClipboardArrowRight": {},
      "ville.embed.fluent.ClipboardBrush": {},
      "ville.embed.fluent.ClipboardBulletList": {},
      "ville.embed.fluent.ClipboardBulletListLtr": {},
      "ville.embed.fluent.ClipboardBulletListRtl": {},
      "ville.embed.fluent.ClipboardCheckmark": {},
      "ville.embed.fluent.ClipboardClock": {},
      "ville.embed.fluent.ClipboardCode": {},
      "ville.embed.fluent.ClipboardDataBar": {},
      "ville.embed.fluent.ClipboardDay": {},
      "ville.embed.fluent.ClipboardEdit": {},
      "ville.embed.fluent.ClipboardError": {},
      "ville.embed.fluent.ClipboardHeart": {},
      "ville.embed.fluent.ClipboardImage": {},
      "ville.embed.fluent.ClipboardLetter": {},
      "ville.embed.fluent.ClipboardLink": {},
      "ville.embed.fluent.ClipboardMathFormula": {},
      "ville.embed.fluent.ClipboardMonth": {},
      "ville.embed.fluent.ClipboardMore": {},
      "ville.embed.fluent.ClipboardNote": {},
      "ville.embed.fluent.ClipboardNumber123": {},
      "ville.embed.fluent.ClipboardPaste": {},
      "ville.embed.fluent.ClipboardPulse": {},
      "ville.embed.fluent.ClipboardSearch": {},
      "ville.embed.fluent.ClipboardSettings": {},
      "ville.embed.fluent.ClipboardTask": {},
      "ville.embed.fluent.ClipboardTaskAdd": {},
      "ville.embed.fluent.ClipboardTaskListLtr": {},
      "ville.embed.fluent.ClipboardTaskListRtl": {},
      "ville.embed.fluent.ClipboardTextEdit": {},
      "ville.embed.fluent.ClipboardTextLtr": {},
      "ville.embed.fluent.ClipboardTextRtl": {},
      "ville.embed.fluent.Clock": {},
      "ville.embed.fluent.ClockAlarm": {},
      "ville.embed.fluent.ClockArrowDownload": {},
      "ville.embed.fluent.ClockBill": {},
      "ville.embed.fluent.ClockDismiss": {},
      "ville.embed.fluent.ClockLock": {},
      "ville.embed.fluent.ClockPause": {},
      "ville.embed.fluent.ClockToolbox": {},
      "ville.embed.fluent.ClosedCaption": {},
      "ville.embed.fluent.ClosedCaptionOff": {},
      "ville.embed.fluent.Cloud": {},
      "ville.embed.fluent.CloudAdd": {},
      "ville.embed.fluent.CloudArchive": {},
      "ville.embed.fluent.CloudArrowDown": {},
      "ville.embed.fluent.CloudArrowRight": {},
      "ville.embed.fluent.CloudArrowUp": {},
      "ville.embed.fluent.CloudBeaker": {},
      "ville.embed.fluent.CloudBidirectional": {},
      "ville.embed.fluent.CloudCheckmark": {},
      "ville.embed.fluent.CloudCube": {},
      "ville.embed.fluent.CloudDatabase": {},
      "ville.embed.fluent.CloudDesktop": {},
      "ville.embed.fluent.CloudDismiss": {},
      "ville.embed.fluent.CloudEdit": {},
      "ville.embed.fluent.CloudError": {},
      "ville.embed.fluent.CloudFlow": {},
      "ville.embed.fluent.CloudLink": {},
      "ville.embed.fluent.CloudOff": {},
      "ville.embed.fluent.CloudSwap": {},
      "ville.embed.fluent.CloudSync": {},
      "ville.embed.fluent.CloudWords": {},
      "ville.embed.fluent.Clover": {},
      "ville.embed.fluent.Code": {},
      "ville.embed.fluent.CodeBlock": {},
      "ville.embed.fluent.CodeCircle": {},
      "ville.embed.fluent.CodeText": {},
      "ville.embed.fluent.CodeTextEdit": {},
      "ville.embed.fluent.Collections": {},
      "ville.embed.fluent.CollectionsAdd": {},
      "ville.embed.fluent.Color": {},
      "ville.embed.fluent.ColorBackground": {},
      "ville.embed.fluent.ColorBackgroundAccent": {},
      "ville.embed.fluent.ColorFill": {},
      "ville.embed.fluent.ColorFillAccent": {},
      "ville.embed.fluent.ColorLine": {},
      "ville.embed.fluent.ColorLineAccent": {},
      "ville.embed.fluent.Column": {},
      "ville.embed.fluent.ColumnArrowRight": {},
      "ville.embed.fluent.ColumnDoubleCompare": {},
      "ville.embed.fluent.ColumnEdit": {},
      "ville.embed.fluent.ColumnSingleCompare": {},
      "ville.embed.fluent.ColumnTriple": {},
      "ville.embed.fluent.ColumnTripleEdit": {},
      "ville.embed.fluent.Comma": {},
      "ville.embed.fluent.Comment": {},
      "ville.embed.fluent.CommentAdd": {},
      "ville.embed.fluent.CommentArrowLeft": {},
      "ville.embed.fluent.CommentArrowRight": {},
      "ville.embed.fluent.CommentCheckmark": {},
      "ville.embed.fluent.CommentDismiss": {},
      "ville.embed.fluent.CommentEdit": {},
      "ville.embed.fluent.CommentError": {},
      "ville.embed.fluent.CommentLightning": {},
      "ville.embed.fluent.CommentLink": {},
      "ville.embed.fluent.CommentMention": {},
      "ville.embed.fluent.CommentMultiple": {},
      "ville.embed.fluent.CommentMultipleCheckmark": {},
      "ville.embed.fluent.CommentMultipleLink": {},
      "ville.embed.fluent.CommentNote": {},
      "ville.embed.fluent.CommentOff": {},
      "ville.embed.fluent.Communication": {},
      "ville.embed.fluent.CommunicationPerson": {},
      "ville.embed.fluent.CommunicationShield": {},
      "ville.embed.fluent.CompassNorthwest": {},
      "ville.embed.fluent.Compose": {},
      "ville.embed.fluent.ConferenceRoom": {},
      "ville.embed.fluent.Connected": {},
      "ville.embed.fluent.Connector": {},
      "ville.embed.fluent.ContactCard": {},
      "ville.embed.fluent.ContactCardGroup": {},
      "ville.embed.fluent.ContactCardLink": {},
      "ville.embed.fluent.ContactCardRibbon": {},
      "ville.embed.fluent.ContentSettings": {},
      "ville.embed.fluent.ContentView": {},
      "ville.embed.fluent.ContentViewGallery": {},
      "ville.embed.fluent.ContentViewGalleryLightning": {},
      "ville.embed.fluent.ContractDownLeft": {},
      "ville.embed.fluent.ContractUpRight": {},
      "ville.embed.fluent.ControlButton": {},
      "ville.embed.fluent.ConvertRange": {},
      "ville.embed.fluent.Cookies": {},
      "ville.embed.fluent.Copy": {},
      "ville.embed.fluent.CopyAdd": {},
      "ville.embed.fluent.CopyArrowRight": {},
      "ville.embed.fluent.CopySelect": {},
      "ville.embed.fluent.Couch": {},
      "ville.embed.fluent.CreditCardClock": {},
      "ville.embed.fluent.CreditCardPerson": {},
      "ville.embed.fluent.CreditCardToolbox": {},
      "ville.embed.fluent.Crop": {},
      "ville.embed.fluent.CropArrowRotate": {},
      "ville.embed.fluent.CropInterim": {},
      "ville.embed.fluent.CropInterimOff": {},
      "ville.embed.fluent.Crown": {},
      "ville.embed.fluent.Cube": {},
      "ville.embed.fluent.CubeAdd": {},
      "ville.embed.fluent.CubeArrowCurveDown": {},
      "ville.embed.fluent.CubeLink": {},
      "ville.embed.fluent.CubeMultiple": {},
      "ville.embed.fluent.CubeQuick": {},
      "ville.embed.fluent.CubeRotate": {},
      "ville.embed.fluent.CubeSync": {},
      "ville.embed.fluent.CubeTree": {},
      "ville.embed.fluent.CurrencyDollarEuro": {},
      "ville.embed.fluent.CurrencyDollarRupee": {},
      "ville.embed.fluent.Cursor": {},
      "ville.embed.fluent.CursorClick": {},
      "ville.embed.fluent.CursorHover": {},
      "ville.embed.fluent.CursorHoverOff": {},
      "ville.embed.fluent.CursorProhibited": {},
      "ville.embed.fluent.Cut": {},
      "ville.embed.fluent.DarkTheme": {},
      "ville.embed.fluent.DataArea": {},
      "ville.embed.fluent.DataBarHorizontal": {},
      "ville.embed.fluent.DataBarVertical": {},
      "ville.embed.fluent.DataBarVerticalAdd": {},
      "ville.embed.fluent.DataBarVerticalArrowDown": {},
      "ville.embed.fluent.DataBarVerticalAscending": {},
      "ville.embed.fluent.DataBarVerticalStar": {},
      "ville.embed.fluent.DataFunnel": {},
      "ville.embed.fluent.DataHistogram": {},
      "ville.embed.fluent.DataLine": {},
      "ville.embed.fluent.DataPie": {},
      "ville.embed.fluent.DataScatter": {},
      "ville.embed.fluent.DataSunburst": {},
      "ville.embed.fluent.DataTreemap": {},
      "ville.embed.fluent.DataTrending": {},
      "ville.embed.fluent.DataUsage": {},
      "ville.embed.fluent.DataUsageEdit": {},
      "ville.embed.fluent.DataUsageSettings": {},
      "ville.embed.fluent.DataUsageToolbox": {},
      "ville.embed.fluent.DataWaterfall": {},
      "ville.embed.fluent.DataWhisker": {},
      "ville.embed.fluent.Database": {},
      "ville.embed.fluent.DatabaseArrowDown": {},
      "ville.embed.fluent.DatabaseArrowRight": {},
      "ville.embed.fluent.DatabaseArrowUp": {},
      "ville.embed.fluent.DatabaseLightning": {},
      "ville.embed.fluent.DatabaseLink": {},
      "ville.embed.fluent.DatabaseMultiple": {},
      "ville.embed.fluent.DatabasePerson": {},
      "ville.embed.fluent.DatabasePlugConnected": {},
      "ville.embed.fluent.DatabaseSearch": {},
      "ville.embed.fluent.DatabaseSwitch": {},
      "ville.embed.fluent.DatabaseWarning": {},
      "ville.embed.fluent.DatabaseWindow": {},
      "ville.embed.fluent.DecimalArrowLeft": {},
      "ville.embed.fluent.DecimalArrowRight": {},
      "ville.embed.fluent.Delete": {},
      "ville.embed.fluent.DeleteArrowBack": {},
      "ville.embed.fluent.DeleteDismiss": {},
      "ville.embed.fluent.DeleteLines": {},
      "ville.embed.fluent.DeleteOff": {},
      "ville.embed.fluent.Dentist": {},
      "ville.embed.fluent.DesignIdeas": {},
      "ville.embed.fluent.Desk": {},
      "ville.embed.fluent.Desktop": {},
      "ville.embed.fluent.DesktopArrowDown": {},
      "ville.embed.fluent.DesktopArrowRight": {},
      "ville.embed.fluent.DesktopCheckmark": {},
      "ville.embed.fluent.DesktopCursor": {},
      "ville.embed.fluent.DesktopEdit": {},
      "ville.embed.fluent.DesktopFlow": {},
      "ville.embed.fluent.DesktopKeyboard": {},
      "ville.embed.fluent.DesktopMac": {},
      "ville.embed.fluent.DesktopOff": {},
      "ville.embed.fluent.DesktopPulse": {},
      "ville.embed.fluent.DesktopSignal": {},
      "ville.embed.fluent.DesktopSpeaker": {},
      "ville.embed.fluent.DesktopSpeakerOff": {},
      "ville.embed.fluent.DesktopSync": {},
      "ville.embed.fluent.DesktopToolbox": {},
      "ville.embed.fluent.DesktopTower": {},
      "ville.embed.fluent.DeveloperBoard": {},
      "ville.embed.fluent.DeveloperBoardLightning": {},
      "ville.embed.fluent.DeveloperBoardLightningToolbox": {},
      "ville.embed.fluent.DeveloperBoardSearch": {},
      "ville.embed.fluent.DeviceEq": {},
      "ville.embed.fluent.DeviceMeetingRoom": {},
      "ville.embed.fluent.DeviceMeetingRoomRemote": {},
      "ville.embed.fluent.Diagram": {},
      "ville.embed.fluent.Dialpad": {},
      "ville.embed.fluent.DialpadOff": {},
      "ville.embed.fluent.DialpadQuestionMark": {},
      "ville.embed.fluent.Diamond": {},
      "ville.embed.fluent.Directions": {},
      "ville.embed.fluent.Dishwasher": {},
      "ville.embed.fluent.Dismiss": {},
      "ville.embed.fluent.DismissCircle": {},
      "ville.embed.fluent.DismissSquare": {},
      "ville.embed.fluent.DismissSquareMultiple": {},
      "ville.embed.fluent.Diversity": {},
      "ville.embed.fluent.DividerShort": {},
      "ville.embed.fluent.DividerTall": {},
      "ville.embed.fluent.Dock": {},
      "ville.embed.fluent.DockRow": {},
      "ville.embed.fluent.Doctor": {},
      "ville.embed.fluent.Document100": {},
      "ville.embed.fluent.Document": {},
      "ville.embed.fluent.DocumentAdd": {},
      "ville.embed.fluent.DocumentArrowDown": {},
      "ville.embed.fluent.DocumentArrowLeft": {},
      "ville.embed.fluent.DocumentArrowRight": {},
      "ville.embed.fluent.DocumentArrowUp": {},
      "ville.embed.fluent.DocumentBorder": {},
      "ville.embed.fluent.DocumentBorderPrint": {},
      "ville.embed.fluent.DocumentBriefcase": {},
      "ville.embed.fluent.DocumentBulletList": {},
      "ville.embed.fluent.DocumentBulletListArrowLeft": {},
      "ville.embed.fluent.DocumentBulletListClock": {},
      "ville.embed.fluent.DocumentBulletListCube": {},
      "ville.embed.fluent.DocumentBulletListMultiple": {},
      "ville.embed.fluent.DocumentBulletListOff": {},
      "ville.embed.fluent.DocumentCatchUp": {},
      "ville.embed.fluent.DocumentCheckmark": {},
      "ville.embed.fluent.DocumentChevronDouble": {},
      "ville.embed.fluent.DocumentCopy": {},
      "ville.embed.fluent.DocumentCss": {},
      "ville.embed.fluent.DocumentCube": {},
      "ville.embed.fluent.DocumentData": {},
      "ville.embed.fluent.DocumentDataLink": {},
      "ville.embed.fluent.DocumentDataLock": {},
      "ville.embed.fluent.DocumentDatabase": {},
      "ville.embed.fluent.DocumentDismiss": {},
      "ville.embed.fluent.DocumentEdit": {},
      "ville.embed.fluent.DocumentEndnote": {},
      "ville.embed.fluent.DocumentError": {},
      "ville.embed.fluent.DocumentFit": {},
      "ville.embed.fluent.DocumentFlowchart": {},
      "ville.embed.fluent.DocumentFolder": {},
      "ville.embed.fluent.DocumentFooter": {},
      "ville.embed.fluent.DocumentFooterDismiss": {},
      "ville.embed.fluent.DocumentHeader": {},
      "ville.embed.fluent.DocumentHeaderArrowDown": {},
      "ville.embed.fluent.DocumentHeaderDismiss": {},
      "ville.embed.fluent.DocumentHeaderFooter": {},
      "ville.embed.fluent.DocumentHeart": {},
      "ville.embed.fluent.DocumentHeartPulse": {},
      "ville.embed.fluent.DocumentImage": {},
      "ville.embed.fluent.DocumentJava": {},
      "ville.embed.fluent.DocumentJavascript": {},
      "ville.embed.fluent.DocumentKey": {},
      "ville.embed.fluent.DocumentLandscape": {},
      "ville.embed.fluent.DocumentLandscapeData": {},
      "ville.embed.fluent.DocumentLandscapeSplit": {},
      "ville.embed.fluent.DocumentLandscapeSplitHint": {},
      "ville.embed.fluent.DocumentLightning": {},
      "ville.embed.fluent.DocumentLink": {},
      "ville.embed.fluent.DocumentLock": {},
      "ville.embed.fluent.DocumentMargins": {},
      "ville.embed.fluent.DocumentMention": {},
      "ville.embed.fluent.DocumentMultiple": {},
      "ville.embed.fluent.DocumentMultiplePercent": {},
      "ville.embed.fluent.DocumentMultipleProhibited": {},
      "ville.embed.fluent.DocumentMultipleSync": {},
      "ville.embed.fluent.DocumentOnePage": {},
      "ville.embed.fluent.DocumentOnePageAdd": {},
      "ville.embed.fluent.DocumentOnePageColumns": {},
      "ville.embed.fluent.DocumentOnePageLink": {},
      "ville.embed.fluent.DocumentOnePageMultiple": {},
      "ville.embed.fluent.DocumentOnePageSparkle": {},
      "ville.embed.fluent.DocumentPageBottomCenter": {},
      "ville.embed.fluent.DocumentPageBottomLeft": {},
      "ville.embed.fluent.DocumentPageBottomRight": {},
      "ville.embed.fluent.DocumentPageBreak": {},
      "ville.embed.fluent.DocumentPageNumber": {},
      "ville.embed.fluent.DocumentPageTopCenter": {},
      "ville.embed.fluent.DocumentPageTopLeft": {},
      "ville.embed.fluent.DocumentPageTopRight": {},
      "ville.embed.fluent.DocumentPdf": {},
      "ville.embed.fluent.DocumentPercent": {},
      "ville.embed.fluent.DocumentPerson": {},
      "ville.embed.fluent.DocumentPill": {},
      "ville.embed.fluent.DocumentPrint": {},
      "ville.embed.fluent.DocumentProhibited": {},
      "ville.embed.fluent.DocumentQuestionMark": {},
      "ville.embed.fluent.DocumentQueue": {},
      "ville.embed.fluent.DocumentQueueAdd": {},
      "ville.embed.fluent.DocumentQueueMultiple": {},
      "ville.embed.fluent.DocumentRibbon": {},
      "ville.embed.fluent.DocumentSass": {},
      "ville.embed.fluent.DocumentSave": {},
      "ville.embed.fluent.DocumentSearch": {},
      "ville.embed.fluent.DocumentSettings": {},
      "ville.embed.fluent.DocumentSignature": {},
      "ville.embed.fluent.DocumentSplitHint": {},
      "ville.embed.fluent.DocumentSplitHintOff": {},
      "ville.embed.fluent.DocumentSync": {},
      "ville.embed.fluent.DocumentTable": {},
      "ville.embed.fluent.DocumentTableArrowRight": {},
      "ville.embed.fluent.DocumentTableCheckmark": {},
      "ville.embed.fluent.DocumentTableCube": {},
      "ville.embed.fluent.DocumentTableSearch": {},
      "ville.embed.fluent.DocumentTableTruck": {},
      "ville.embed.fluent.DocumentTarget": {},
      "ville.embed.fluent.DocumentText": {},
      "ville.embed.fluent.DocumentTextClock": {},
      "ville.embed.fluent.DocumentTextExtract": {},
      "ville.embed.fluent.DocumentTextLink": {},
      "ville.embed.fluent.DocumentTextToolbox": {},
      "ville.embed.fluent.DocumentToolbox": {},
      "ville.embed.fluent.DocumentWidth": {},
      "ville.embed.fluent.DocumentYml": {},
      "ville.embed.fluent.Door": {},
      "ville.embed.fluent.DoorArrowLeft": {},
      "ville.embed.fluent.DoorArrowRight": {},
      "ville.embed.fluent.DoorTag": {},
      "ville.embed.fluent.DoubleSwipeDown": {},
      "ville.embed.fluent.DoubleSwipeUp": {},
      "ville.embed.fluent.DoubleTapSwipeDown": {},
      "ville.embed.fluent.DoubleTapSwipeUp": {},
      "ville.embed.fluent.Drafts": {},
      "ville.embed.fluent.Drag": {},
      "ville.embed.fluent.DrawImage": {},
      "ville.embed.fluent.DrawShape": {},
      "ville.embed.fluent.DrawText": {},
      "ville.embed.fluent.Drawer": {},
      "ville.embed.fluent.DrawerAdd": {},
      "ville.embed.fluent.DrawerArrowDownload": {},
      "ville.embed.fluent.DrawerDismiss": {},
      "ville.embed.fluent.DrawerPlay": {},
      "ville.embed.fluent.DrawerSubtract": {},
      "ville.embed.fluent.DrinkBeer": {},
      "ville.embed.fluent.DrinkBottle": {},
      "ville.embed.fluent.DrinkBottleOff": {},
      "ville.embed.fluent.DrinkCoffee": {},
      "ville.embed.fluent.DrinkMargarita": {},
      "ville.embed.fluent.DrinkToGo": {},
      "ville.embed.fluent.DrinkWine": {},
      "ville.embed.fluent.DriveTrain": {},
      "ville.embed.fluent.Drop": {},
      "ville.embed.fluent.DualScreen": {},
      "ville.embed.fluent.DualScreenAdd": {},
      "ville.embed.fluent.DualScreenArrowRight": {},
      "ville.embed.fluent.DualScreenArrowUp": {},
      "ville.embed.fluent.DualScreenClock": {},
      "ville.embed.fluent.DualScreenClosedAlert": {},
      "ville.embed.fluent.DualScreenDesktop": {},
      "ville.embed.fluent.DualScreenDismiss": {},
      "ville.embed.fluent.DualScreenGroup": {},
      "ville.embed.fluent.DualScreenHeader": {},
      "ville.embed.fluent.DualScreenLock": {},
      "ville.embed.fluent.DualScreenMirror": {},
      "ville.embed.fluent.DualScreenPagination": {},
      "ville.embed.fluent.DualScreenSettings": {},
      "ville.embed.fluent.DualScreenSpan": {},
      "ville.embed.fluent.DualScreenSpeaker": {},
      "ville.embed.fluent.DualScreenStatusBar": {},
      "ville.embed.fluent.DualScreenTablet": {},
      "ville.embed.fluent.DualScreenUpdate": {},
      "ville.embed.fluent.DualScreenVerticalScroll": {},
      "ville.embed.fluent.DualScreenVibrate": {},
      "ville.embed.fluent.Dumbbell": {},
      "ville.embed.fluent.Dust": {},
      "ville.embed.fluent.Earth": {},
      "ville.embed.fluent.EarthLeaf": {},
      "ville.embed.fluent.Edit": {},
      "ville.embed.fluent.EditArrowBack": {},
      "ville.embed.fluent.EditOff": {},
      "ville.embed.fluent.EditPerson": {},
      "ville.embed.fluent.EditProhibited": {},
      "ville.embed.fluent.EditSettings": {},
      "ville.embed.fluent.Elevator": {},
      "ville.embed.fluent.Emoji": {},
      "ville.embed.fluent.EmojiAdd": {},
      "ville.embed.fluent.EmojiAngry": {},
      "ville.embed.fluent.EmojiEdit": {},
      "ville.embed.fluent.EmojiHand": {},
      "ville.embed.fluent.EmojiHint": {},
      "ville.embed.fluent.EmojiLaugh": {},
      "ville.embed.fluent.EmojiMeh": {},
      "ville.embed.fluent.EmojiMeme": {},
      "ville.embed.fluent.EmojiMultiple": {},
      "ville.embed.fluent.EmojiSad": {},
      "ville.embed.fluent.EmojiSadSlight": {},
      "ville.embed.fluent.EmojiSmileSlight": {},
      "ville.embed.fluent.EmojiSparkle": {},
      "ville.embed.fluent.EmojiSurprise": {},
      "ville.embed.fluent.Engine": {},
      "ville.embed.fluent.EqualCircle": {},
      "ville.embed.fluent.EqualOff": {},
      "ville.embed.fluent.Eraser": {},
      "ville.embed.fluent.EraserMedium": {},
      "ville.embed.fluent.EraserSegment": {},
      "ville.embed.fluent.EraserSmall": {},
      "ville.embed.fluent.EraserTool": {},
      "ville.embed.fluent.ErrorCircle": {},
      "ville.embed.fluent.ErrorCircleSettings": {},
      "ville.embed.fluent.ExpandUpLeft": {},
      "ville.embed.fluent.ExpandUpRight": {},
      "ville.embed.fluent.ExtendedDock": {},
      "ville.embed.fluent.Eye": {},
      "ville.embed.fluent.EyeLines": {},
      "ville.embed.fluent.EyeOff": {},
      "ville.embed.fluent.EyeTracking": {},
      "ville.embed.fluent.EyeTrackingOff": {},
      "ville.embed.fluent.Eyedropper": {},
      "ville.embed.fluent.EyedropperOff": {},
      "ville.embed.fluent.FStop": {},
      "ville.embed.fluent.FastAcceleration": {},
      "ville.embed.fluent.FastForward": {},
      "ville.embed.fluent.Fax": {},
      "ville.embed.fluent.Feed": {},
      "ville.embed.fluent.Filmstrip": {},
      "ville.embed.fluent.FilmstripImage": {},
      "ville.embed.fluent.FilmstripPlay": {},
      "ville.embed.fluent.FilmstripSplit": {},
      "ville.embed.fluent.Filter": {},
      "ville.embed.fluent.FilterAdd": {},
      "ville.embed.fluent.FilterDismiss": {},
      "ville.embed.fluent.FilterSync": {},
      "ville.embed.fluent.Fingerprint": {},
      "ville.embed.fluent.Fire": {},
      "ville.embed.fluent.Fireplace": {},
      "ville.embed.fluent.FixedWidth": {},
      "ville.embed.fluent.Flag": {},
      "ville.embed.fluent.FlagCheckered": {},
      "ville.embed.fluent.FlagClock": {},
      "ville.embed.fluent.FlagOff": {},
      "ville.embed.fluent.Flash": {},
      "ville.embed.fluent.FlashAdd": {},
      "ville.embed.fluent.FlashAuto": {},
      "ville.embed.fluent.FlashCheckmark": {},
      "ville.embed.fluent.FlashFlow": {},
      "ville.embed.fluent.FlashOff": {},
      "ville.embed.fluent.FlashPlay": {},
      "ville.embed.fluent.FlashSettings": {},
      "ville.embed.fluent.FlashSparkle": {},
      "ville.embed.fluent.Flashlight": {},
      "ville.embed.fluent.FlashlightOff": {},
      "ville.embed.fluent.FlipHorizontal": {},
      "ville.embed.fluent.FlipVertical": {},
      "ville.embed.fluent.Flow": {},
      "ville.embed.fluent.Flowchart": {},
      "ville.embed.fluent.FlowchartCircle": {},
      "ville.embed.fluent.Fluent": {},
      "ville.embed.fluent.Fluid": {},
      "ville.embed.fluent.Folder": {},
      "ville.embed.fluent.FolderAdd": {},
      "ville.embed.fluent.FolderArrowLeft": {},
      "ville.embed.fluent.FolderArrowRight": {},
      "ville.embed.fluent.FolderArrowUp": {},
      "ville.embed.fluent.FolderBriefcase": {},
      "ville.embed.fluent.FolderGlobe": {},
      "ville.embed.fluent.FolderLightning": {},
      "ville.embed.fluent.FolderLink": {},
      "ville.embed.fluent.FolderList": {},
      "ville.embed.fluent.FolderMail": {},
      "ville.embed.fluent.FolderOpen": {},
      "ville.embed.fluent.FolderOpenVertical": {},
      "ville.embed.fluent.FolderPeople": {},
      "ville.embed.fluent.FolderPerson": {},
      "ville.embed.fluent.FolderProhibited": {},
      "ville.embed.fluent.FolderSearch": {},
      "ville.embed.fluent.FolderSwap": {},
      "ville.embed.fluent.FolderSync": {},
      "ville.embed.fluent.FolderZip": {},
      "ville.embed.fluent.FontDecrease": {},
      "ville.embed.fluent.FontIncrease": {},
      "ville.embed.fluent.FontSpaceTrackingIn": {},
      "ville.embed.fluent.FontSpaceTrackingOut": {},
      "ville.embed.fluent.Food": {},
      "ville.embed.fluent.FoodApple": {},
      "ville.embed.fluent.FoodCake": {},
      "ville.embed.fluent.FoodCarrot": {},
      "ville.embed.fluent.FoodChickenLeg": {},
      "ville.embed.fluent.FoodEgg": {},
      "ville.embed.fluent.FoodFish": {},
      "ville.embed.fluent.FoodGrains": {},
      "ville.embed.fluent.FoodPizza": {},
      "ville.embed.fluent.FoodToast": {},
      "ville.embed.fluent.Form": {},
      "ville.embed.fluent.FormMultiple": {},
      "ville.embed.fluent.FormNew": {},
      "ville.embed.fluent.Fps120": {},
      "ville.embed.fluent.Fps240": {},
      "ville.embed.fluent.Fps30": {},
      "ville.embed.fluent.Fps60": {},
      "ville.embed.fluent.Fps960": {},
      "ville.embed.fluent.Frame": {},
      "ville.embed.fluent.FullScreenMaximize": {},
      "ville.embed.fluent.FullScreenMinimize": {},
      "ville.embed.fluent.Games": {},
      "ville.embed.fluent.GanttChart": {},
      "ville.embed.fluent.Gas": {},
      "ville.embed.fluent.GasPump": {},
      "ville.embed.fluent.Gather": {},
      "ville.embed.fluent.Gauge": {},
      "ville.embed.fluent.GaugeAdd": {},
      "ville.embed.fluent.Gavel": {},
      "ville.embed.fluent.GavelProhibited": {},
      "ville.embed.fluent.Gesture": {},
      "ville.embed.fluent.Gif": {},
      "ville.embed.fluent.Gift": {},
      "ville.embed.fluent.GiftCard": {},
      "ville.embed.fluent.GiftCardAdd": {},
      "ville.embed.fluent.GiftCardArrowRight": {},
      "ville.embed.fluent.GiftCardMoney": {},
      "ville.embed.fluent.GiftCardMultiple": {},
      "ville.embed.fluent.GiftOpen": {},
      "ville.embed.fluent.Glance": {},
      "ville.embed.fluent.GlanceHorizontal": {},
      "ville.embed.fluent.GlanceHorizontalSparkles": {},
      "ville.embed.fluent.Glasses": {},
      "ville.embed.fluent.GlassesOff": {},
      "ville.embed.fluent.Globe": {},
      "ville.embed.fluent.GlobeAdd": {},
      "ville.embed.fluent.GlobeArrowForward": {},
      "ville.embed.fluent.GlobeArrowUp": {},
      "ville.embed.fluent.GlobeClock": {},
      "ville.embed.fluent.GlobeDesktop": {},
      "ville.embed.fluent.GlobeError": {},
      "ville.embed.fluent.GlobeLocation": {},
      "ville.embed.fluent.GlobePerson": {},
      "ville.embed.fluent.GlobeProhibited": {},
      "ville.embed.fluent.GlobeSearch": {},
      "ville.embed.fluent.GlobeShield": {},
      "ville.embed.fluent.GlobeStar": {},
      "ville.embed.fluent.GlobeSurface": {},
      "ville.embed.fluent.GlobeSync": {},
      "ville.embed.fluent.GlobeVideo": {},
      "ville.embed.fluent.GlobeWarning": {},
      "ville.embed.fluent.Grid": {},
      "ville.embed.fluent.GridDots": {},
      "ville.embed.fluent.GridKanban": {},
      "ville.embed.fluent.Group": {},
      "ville.embed.fluent.GroupDismiss": {},
      "ville.embed.fluent.GroupList": {},
      "ville.embed.fluent.GroupReturn": {},
      "ville.embed.fluent.Guardian": {},
      "ville.embed.fluent.Guest": {},
      "ville.embed.fluent.GuestAdd": {},
      "ville.embed.fluent.Guitar": {},
      "ville.embed.fluent.HandDraw": {},
      "ville.embed.fluent.HandLeft": {},
      "ville.embed.fluent.HandLeftChat": {},
      "ville.embed.fluent.HandOpenHeart": {},
      "ville.embed.fluent.HandPoint": {},
      "ville.embed.fluent.HandRight": {},
      "ville.embed.fluent.HandRightOff": {},
      "ville.embed.fluent.HandWave": {},
      "ville.embed.fluent.Handshake": {},
      "ville.embed.fluent.HapticStrong": {},
      "ville.embed.fluent.HapticWeak": {},
      "ville.embed.fluent.HardDrive": {},
      "ville.embed.fluent.HatGraduation": {},
      "ville.embed.fluent.HatGraduationAdd": {},
      "ville.embed.fluent.HatGraduationSparkle": {},
      "ville.embed.fluent.Hd": {},
      "ville.embed.fluent.Hdr": {},
      "ville.embed.fluent.HdrOff": {},
      "ville.embed.fluent.Headphones": {},
      "ville.embed.fluent.HeadphonesSoundWave": {},
      "ville.embed.fluent.Headset": {},
      "ville.embed.fluent.HeadsetAdd": {},
      "ville.embed.fluent.HeadsetVr": {},
      "ville.embed.fluent.Heart": {},
      "ville.embed.fluent.HeartBroken": {},
      "ville.embed.fluent.HeartCircle": {},
      "ville.embed.fluent.HeartCircleHint": {},
      "ville.embed.fluent.HeartOff": {},
      "ville.embed.fluent.HeartPulse": {},
      "ville.embed.fluent.HeartPulseCheckmark": {},
      "ville.embed.fluent.HeartPulseError": {},
      "ville.embed.fluent.HeartPulseWarning": {},
      "ville.embed.fluent.Hexagon": {},
      "ville.embed.fluent.HexagonSparkle": {},
      "ville.embed.fluent.HexagonThree": {},
      "ville.embed.fluent.Highlight": {},
      "ville.embed.fluent.HighlightLink": {},
      "ville.embed.fluent.Highway": {},
      "ville.embed.fluent.History": {},
      "ville.embed.fluent.HistoryDismiss": {},
      "ville.embed.fluent.Home": {},
      "ville.embed.fluent.HomeAdd": {},
      "ville.embed.fluent.HomeCheckmark": {},
      "ville.embed.fluent.HomeDatabase": {},
      "ville.embed.fluent.HomeGarage": {},
      "ville.embed.fluent.HomeHeart": {},
      "ville.embed.fluent.HomeMore": {},
      "ville.embed.fluent.HomePerson": {},
      "ville.embed.fluent.HomeSplit": {},
      "ville.embed.fluent.Hourglass": {},
      "ville.embed.fluent.HourglassHalf": {},
      "ville.embed.fluent.HourglassOneQuarter": {},
      "ville.embed.fluent.HourglassThreeQuarter": {},
      "ville.embed.fluent.Icons": {},
      "ville.embed.fluent.Image": {},
      "ville.embed.fluent.ImageAdd": {},
      "ville.embed.fluent.ImageAltText": {},
      "ville.embed.fluent.ImageArrowBack": {},
      "ville.embed.fluent.ImageArrowCounterclockwise": {},
      "ville.embed.fluent.ImageArrowForward": {},
      "ville.embed.fluent.ImageBorder": {},
      "ville.embed.fluent.ImageCircle": {},
      "ville.embed.fluent.ImageCopy": {},
      "ville.embed.fluent.ImageEdit": {},
      "ville.embed.fluent.ImageGlobe": {},
      "ville.embed.fluent.ImageMultiple": {},
      "ville.embed.fluent.ImageMultipleOff": {},
      "ville.embed.fluent.ImageOff": {},
      "ville.embed.fluent.ImageProhibited": {},
      "ville.embed.fluent.ImageReflection": {},
      "ville.embed.fluent.ImageSearch": {},
      "ville.embed.fluent.ImageShadow": {},
      "ville.embed.fluent.ImageSparkle": {},
      "ville.embed.fluent.ImageSplit": {},
      "ville.embed.fluent.ImageStack": {},
      "ville.embed.fluent.ImageTable": {},
      "ville.embed.fluent.ImmersiveReader": {},
      "ville.embed.fluent.Important": {},
      "ville.embed.fluent.Incognito": {},
      "ville.embed.fluent.Info": {},
      "ville.embed.fluent.InfoShield": {},
      "ville.embed.fluent.InkStroke": {},
      "ville.embed.fluent.InkStrokeArrowDown": {},
      "ville.embed.fluent.InkStrokeArrowUpDown": {},
      "ville.embed.fluent.InkingTool": {},
      "ville.embed.fluent.InprivateAccount": {},
      "ville.embed.fluent.Insert": {},
      "ville.embed.fluent.IosChevronRight": {},
      "ville.embed.fluent.Iot": {},
      "ville.embed.fluent.IotAlert": {},
      "ville.embed.fluent.Javascript": {},
      "ville.embed.fluent.Joystick": {},
      "ville.embed.fluent.Key": {},
      "ville.embed.fluent.KeyCommand": {},
      "ville.embed.fluent.KeyMultiple": {},
      "ville.embed.fluent.KeyReset": {},
      "ville.embed.fluent.Keyboard123": {},
      "ville.embed.fluent.Keyboard": {},
      "ville.embed.fluent.KeyboardDock": {},
      "ville.embed.fluent.KeyboardLayoutFloat": {},
      "ville.embed.fluent.KeyboardLayoutOneHandedLeft": {},
      "ville.embed.fluent.KeyboardLayoutResize": {},
      "ville.embed.fluent.KeyboardLayoutSplit": {},
      "ville.embed.fluent.KeyboardShift": {},
      "ville.embed.fluent.KeyboardShiftUppercase": {},
      "ville.embed.fluent.KeyboardTab": {},
      "ville.embed.fluent.Laptop": {},
      "ville.embed.fluent.LaptopBriefcase": {},
      "ville.embed.fluent.LaptopDismiss": {},
      "ville.embed.fluent.LaptopPerson": {},
      "ville.embed.fluent.LaptopSettings": {},
      "ville.embed.fluent.LaptopShield": {},
      "ville.embed.fluent.LaserTool": {},
      "ville.embed.fluent.Lasso": {},
      "ville.embed.fluent.LauncherSettings": {},
      "ville.embed.fluent.Layer": {},
      "ville.embed.fluent.LayerDiagonal": {},
      "ville.embed.fluent.LayerDiagonalAdd": {},
      "ville.embed.fluent.LayerDiagonalPerson": {},
      "ville.embed.fluent.LayerDiagonalSparkle": {},
      "ville.embed.fluent.LayoutCellFour": {},
      "ville.embed.fluent.LayoutColumnFour": {},
      "ville.embed.fluent.LayoutColumnOneThirdLeft": {},
      "ville.embed.fluent.LayoutColumnOneThirdRight": {},
      "ville.embed.fluent.LayoutColumnOneThirdRightHint": {},
      "ville.embed.fluent.LayoutColumnThree": {},
      "ville.embed.fluent.LayoutColumnTwo": {},
      "ville.embed.fluent.LayoutColumnTwoSplitLeft": {},
      "ville.embed.fluent.LayoutColumnTwoSplitRight": {},
      "ville.embed.fluent.LayoutRowFour": {},
      "ville.embed.fluent.LayoutRowThree": {},
      "ville.embed.fluent.LayoutRowTwo": {},
      "ville.embed.fluent.LayoutRowTwoSplitBottom": {},
      "ville.embed.fluent.LayoutRowTwoSplitTop": {},
      "ville.embed.fluent.LeafOne": {},
      "ville.embed.fluent.LeafThree": {},
      "ville.embed.fluent.LeafTwo": {},
      "ville.embed.fluent.LearningApp": {},
      "ville.embed.fluent.Library": {},
      "ville.embed.fluent.Lightbulb": {},
      "ville.embed.fluent.LightbulbCheckmark": {},
      "ville.embed.fluent.LightbulbCircle": {},
      "ville.embed.fluent.LightbulbFilament": {},
      "ville.embed.fluent.LightbulbPerson": {},
      "ville.embed.fluent.Likert": {},
      "ville.embed.fluent.Line": {},
      "ville.embed.fluent.LineDashes": {},
      "ville.embed.fluent.LineFlowDiagonalUpRight": {},
      "ville.embed.fluent.LineHorizontal1": {},
      "ville.embed.fluent.LineHorizontal1Dashes": {},
      "ville.embed.fluent.LineHorizontal2DashesSolid": {},
      "ville.embed.fluent.LineHorizontal3": {},
      "ville.embed.fluent.LineHorizontal4": {},
      "ville.embed.fluent.LineHorizontal4Search": {},
      "ville.embed.fluent.LineHorizontal5": {},
      "ville.embed.fluent.LineHorizontal5Error": {},
      "ville.embed.fluent.LineStyle": {},
      "ville.embed.fluent.LineThickness": {},
      "ville.embed.fluent.Link": {},
      "ville.embed.fluent.LinkAdd": {},
      "ville.embed.fluent.LinkDismiss": {},
      "ville.embed.fluent.LinkEdit": {},
      "ville.embed.fluent.LinkMultiple": {},
      "ville.embed.fluent.LinkPerson": {},
      "ville.embed.fluent.LinkSquare": {},
      "ville.embed.fluent.LinkToolbox": {},
      "ville.embed.fluent.List": {},
      "ville.embed.fluent.ListBar": {},
      "ville.embed.fluent.ListBarTree": {},
      "ville.embed.fluent.ListBarTreeOffset": {},
      "ville.embed.fluent.ListRtl": {},
      "ville.embed.fluent.Live": {},
      "ville.embed.fluent.LiveOff": {},
      "ville.embed.fluent.LocalLanguage": {},
      "ville.embed.fluent.Location": {},
      "ville.embed.fluent.LocationAdd": {},
      "ville.embed.fluent.LocationAddLeft": {},
      "ville.embed.fluent.LocationAddRight": {},
      "ville.embed.fluent.LocationAddUp": {},
      "ville.embed.fluent.LocationArrow": {},
      "ville.embed.fluent.LocationArrowLeft": {},
      "ville.embed.fluent.LocationArrowRight": {},
      "ville.embed.fluent.LocationArrowUp": {},
      "ville.embed.fluent.LocationDismiss": {},
      "ville.embed.fluent.LocationLive": {},
      "ville.embed.fluent.LocationOff": {},
      "ville.embed.fluent.LocationRipple": {},
      "ville.embed.fluent.LocationTargetSquare": {},
      "ville.embed.fluent.LockClosed": {},
      "ville.embed.fluent.LockClosedKey": {},
      "ville.embed.fluent.LockMultiple": {},
      "ville.embed.fluent.LockOpen": {},
      "ville.embed.fluent.LockShield": {},
      "ville.embed.fluent.Lottery": {},
      "ville.embed.fluent.Luggage": {},
      "ville.embed.fluent.Mail": {},
      "ville.embed.fluent.MailAdd": {},
      "ville.embed.fluent.MailAlert": {},
      "ville.embed.fluent.MailAllRead": {},
      "ville.embed.fluent.MailAllUnread": {},
      "ville.embed.fluent.MailArrowClockwise": {},
      "ville.embed.fluent.MailArrowDoubleBack": {},
      "ville.embed.fluent.MailArrowDown": {},
      "ville.embed.fluent.MailArrowForward": {},
      "ville.embed.fluent.MailArrowUp": {},
      "ville.embed.fluent.MailAttach": {},
      "ville.embed.fluent.MailCheckmark": {},
      "ville.embed.fluent.MailClock": {},
      "ville.embed.fluent.MailCopy": {},
      "ville.embed.fluent.MailDismiss": {},
      "ville.embed.fluent.MailEdit": {},
      "ville.embed.fluent.MailError": {},
      "ville.embed.fluent.MailInbox": {},
      "ville.embed.fluent.MailInboxAdd": {},
      "ville.embed.fluent.MailInboxAll": {},
      "ville.embed.fluent.MailInboxArrowDown": {},
      "ville.embed.fluent.MailInboxArrowRight": {},
      "ville.embed.fluent.MailInboxArrowUp": {},
      "ville.embed.fluent.MailInboxCheckmark": {},
      "ville.embed.fluent.MailInboxDismiss": {},
      "ville.embed.fluent.MailLink": {},
      "ville.embed.fluent.MailList": {},
      "ville.embed.fluent.MailMultiple": {},
      "ville.embed.fluent.MailOff": {},
      "ville.embed.fluent.MailOpenPerson": {},
      "ville.embed.fluent.MailPause": {},
      "ville.embed.fluent.MailProhibited": {},
      "ville.embed.fluent.MailRead": {},
      "ville.embed.fluent.MailReadMultiple": {},
      "ville.embed.fluent.MailRewind": {},
      "ville.embed.fluent.MailSettings": {},
      "ville.embed.fluent.MailShield": {},
      "ville.embed.fluent.MailTemplate": {},
      "ville.embed.fluent.MailUnread": {},
      "ville.embed.fluent.MailWarning": {},
      "ville.embed.fluent.Mailbox": {},
      "ville.embed.fluent.Map": {},
      "ville.embed.fluent.MapDrive": {},
      "ville.embed.fluent.Markdown": {},
      "ville.embed.fluent.MatchAppLayout": {},
      "ville.embed.fluent.MathFormatLinear": {},
      "ville.embed.fluent.MathFormatProfessional": {},
      "ville.embed.fluent.MathFormula": {},
      "ville.embed.fluent.MathSymbols": {},
      "ville.embed.fluent.Maximize": {},
      "ville.embed.fluent.MeetNow": {},
      "ville.embed.fluent.Megaphone": {},
      "ville.embed.fluent.MegaphoneCircle": {},
      "ville.embed.fluent.MegaphoneLoud": {},
      "ville.embed.fluent.MegaphoneOff": {},
      "ville.embed.fluent.Mention": {},
      "ville.embed.fluent.MentionArrowDown": {},
      "ville.embed.fluent.MentionBrackets": {},
      "ville.embed.fluent.Merge": {},
      "ville.embed.fluent.Mic": {},
      "ville.embed.fluent.MicOff": {},
      "ville.embed.fluent.MicProhibited": {},
      "ville.embed.fluent.MicPulse": {},
      "ville.embed.fluent.MicPulseOff": {},
      "ville.embed.fluent.MicRecord": {},
      "ville.embed.fluent.MicSettings": {},
      "ville.embed.fluent.MicSparkle": {},
      "ville.embed.fluent.MicSync": {},
      "ville.embed.fluent.Microscope": {},
      "ville.embed.fluent.Midi": {},
      "ville.embed.fluent.MobileOptimized": {},
      "ville.embed.fluent.Mold": {},
      "ville.embed.fluent.Molecule": {},
      "ville.embed.fluent.Money": {},
      "ville.embed.fluent.MoneyCalculator": {},
      "ville.embed.fluent.MoneyDismiss": {},
      "ville.embed.fluent.MoneyHand": {},
      "ville.embed.fluent.MoneyOff": {},
      "ville.embed.fluent.MoneySettings": {},
      "ville.embed.fluent.MoreCircle": {},
      "ville.embed.fluent.MoreHorizontal": {},
      "ville.embed.fluent.MoreVertical": {},
      "ville.embed.fluent.MountainLocationBottom": {},
      "ville.embed.fluent.MountainLocationTop": {},
      "ville.embed.fluent.MountainTrail": {},
      "ville.embed.fluent.MoviesAndTv": {},
      "ville.embed.fluent.Multiplier12x": {},
      "ville.embed.fluent.Multiplier15x": {},
      "ville.embed.fluent.Multiplier18x": {},
      "ville.embed.fluent.Multiplier1x": {},
      "ville.embed.fluent.Multiplier2x": {},
      "ville.embed.fluent.Multiplier5x": {},
      "ville.embed.fluent.MultiselectLtr": {},
      "ville.embed.fluent.MultiselectRtl": {},
      "ville.embed.fluent.MusicNote1": {},
      "ville.embed.fluent.MusicNote2": {},
      "ville.embed.fluent.MusicNote2Play": {},
      "ville.embed.fluent.MusicNoteOff1": {},
      "ville.embed.fluent.MusicNoteOff2": {},
      "ville.embed.fluent.MyLocation": {},
      "ville.embed.fluent.Navigation": {},
      "ville.embed.fluent.NavigationLocationTarget": {},
      "ville.embed.fluent.NavigationPlay": {},
      "ville.embed.fluent.NavigationUnread": {},
      "ville.embed.fluent.NetworkCheck": {},
      "ville.embed.fluent.New": {},
      "ville.embed.fluent.News": {},
      "ville.embed.fluent.Next": {},
      "ville.embed.fluent.NextFrame": {},
      "ville.embed.fluent.Note": {},
      "ville.embed.fluent.NoteAdd": {},
      "ville.embed.fluent.NoteEdit": {},
      "ville.embed.fluent.NotePin": {},
      "ville.embed.fluent.Notebook": {},
      "ville.embed.fluent.NotebookAdd": {},
      "ville.embed.fluent.NotebookArrowCurveDown": {},
      "ville.embed.fluent.NotebookError": {},
      "ville.embed.fluent.NotebookEye": {},
      "ville.embed.fluent.NotebookLightning": {},
      "ville.embed.fluent.NotebookQuestionMark": {},
      "ville.embed.fluent.NotebookSection": {},
      "ville.embed.fluent.NotebookSectionArrowRight": {},
      "ville.embed.fluent.NotebookSubsection": {},
      "ville.embed.fluent.NotebookSync": {},
      "ville.embed.fluent.Notepad": {},
      "ville.embed.fluent.NotepadEdit": {},
      "ville.embed.fluent.NotepadPerson": {},
      "ville.embed.fluent.NumberCircle0": {},
      "ville.embed.fluent.NumberCircle1": {},
      "ville.embed.fluent.NumberCircle2": {},
      "ville.embed.fluent.NumberCircle3": {},
      "ville.embed.fluent.NumberCircle4": {},
      "ville.embed.fluent.NumberCircle5": {},
      "ville.embed.fluent.NumberCircle6": {},
      "ville.embed.fluent.NumberCircle7": {},
      "ville.embed.fluent.NumberCircle8": {},
      "ville.embed.fluent.NumberCircle9": {},
      "ville.embed.fluent.NumberRow": {},
      "ville.embed.fluent.NumberSymbol": {},
      "ville.embed.fluent.NumberSymbolDismiss": {},
      "ville.embed.fluent.NumberSymbolSquare": {},
      "ville.embed.fluent.Open": {},
      "ville.embed.fluent.OpenFolder": {},
      "ville.embed.fluent.OpenOff": {},
      "ville.embed.fluent.Options": {},
      "ville.embed.fluent.Organization": {},
      "ville.embed.fluent.OrganizationHorizontal": {},
      "ville.embed.fluent.Orientation": {},
      "ville.embed.fluent.Oval": {},
      "ville.embed.fluent.Oven": {},
      "ville.embed.fluent.PaddingDown": {},
      "ville.embed.fluent.PaddingLeft": {},
      "ville.embed.fluent.PaddingRight": {},
      "ville.embed.fluent.PaddingTop": {},
      "ville.embed.fluent.PageFit": {},
      "ville.embed.fluent.PaintBrush": {},
      "ville.embed.fluent.PaintBrushArrowDown": {},
      "ville.embed.fluent.PaintBrushArrowUp": {},
      "ville.embed.fluent.PaintBrushSparkle": {},
      "ville.embed.fluent.PaintBucket": {},
      "ville.embed.fluent.Pair": {},
      "ville.embed.fluent.PanelBottom": {},
      "ville.embed.fluent.PanelBottomContract": {},
      "ville.embed.fluent.PanelBottomExpand": {},
      "ville.embed.fluent.PanelLeft": {},
      "ville.embed.fluent.PanelLeftAdd": {},
      "ville.embed.fluent.PanelLeftContract": {},
      "ville.embed.fluent.PanelLeftExpand": {},
      "ville.embed.fluent.PanelLeftHeader": {},
      "ville.embed.fluent.PanelLeftHeaderAdd": {},
      "ville.embed.fluent.PanelLeftHeaderKey": {},
      "ville.embed.fluent.PanelLeftKey": {},
      "ville.embed.fluent.PanelLeftText": {},
      "ville.embed.fluent.PanelLeftTextAdd": {},
      "ville.embed.fluent.PanelLeftTextDismiss": {},
      "ville.embed.fluent.PanelRight": {},
      "ville.embed.fluent.PanelRightAdd": {},
      "ville.embed.fluent.PanelRightContract": {},
      "ville.embed.fluent.PanelRightCursor": {},
      "ville.embed.fluent.PanelRightExpand": {},
      "ville.embed.fluent.PanelRightGallery": {},
      "ville.embed.fluent.PanelSeparateWindow": {},
      "ville.embed.fluent.PanelTopContract": {},
      "ville.embed.fluent.PanelTopExpand": {},
      "ville.embed.fluent.PanelTopGallery": {},
      "ville.embed.fluent.Password": {},
      "ville.embed.fluent.Patch": {},
      "ville.embed.fluent.Patient": {},
      "ville.embed.fluent.Pause": {},
      "ville.embed.fluent.PauseCircle": {},
      "ville.embed.fluent.PauseOff": {},
      "ville.embed.fluent.PauseSettings": {},
      "ville.embed.fluent.Payment": {},
      "ville.embed.fluent.PaymentWireless": {},
      "ville.embed.fluent.Pen": {},
      "ville.embed.fluent.PenDismiss": {},
      "ville.embed.fluent.PenOff": {},
      "ville.embed.fluent.PenProhibited": {},
      "ville.embed.fluent.PenSparkle": {},
      "ville.embed.fluent.Pentagon": {},
      "ville.embed.fluent.People": {},
      "ville.embed.fluent.PeopleAdd": {},
      "ville.embed.fluent.PeopleAudience": {},
      "ville.embed.fluent.PeopleCall": {},
      "ville.embed.fluent.PeopleChat": {},
      "ville.embed.fluent.PeopleCheckmark": {},
      "ville.embed.fluent.PeopleCommunity": {},
      "ville.embed.fluent.PeopleCommunityAdd": {},
      "ville.embed.fluent.PeopleEdit": {},
      "ville.embed.fluent.PeopleError": {},
      "ville.embed.fluent.PeopleEye": {},
      "ville.embed.fluent.PeopleList": {},
      "ville.embed.fluent.PeopleLock": {},
      "ville.embed.fluent.PeopleMoney": {},
      "ville.embed.fluent.PeopleProhibited": {},
      "ville.embed.fluent.PeopleQueue": {},
      "ville.embed.fluent.PeopleSearch": {},
      "ville.embed.fluent.PeopleSettings": {},
      "ville.embed.fluent.PeopleStar": {},
      "ville.embed.fluent.PeopleSubtract": {},
      "ville.embed.fluent.PeopleSwap": {},
      "ville.embed.fluent.PeopleSync": {},
      "ville.embed.fluent.PeopleTeam": {},
      "ville.embed.fluent.PeopleTeamAdd": {},
      "ville.embed.fluent.PeopleTeamDelete": {},
      "ville.embed.fluent.PeopleTeamToolbox": {},
      "ville.embed.fluent.PeopleToolbox": {},
      "ville.embed.fluent.Person": {},
      "ville.embed.fluent.Person5": {},
      "ville.embed.fluent.Person6": {},
      "ville.embed.fluent.PersonAccounts": {},
      "ville.embed.fluent.PersonAdd": {},
      "ville.embed.fluent.PersonAlert": {},
      "ville.embed.fluent.PersonAlertOff": {},
      "ville.embed.fluent.PersonArrowBack": {},
      "ville.embed.fluent.PersonArrowLeft": {},
      "ville.embed.fluent.PersonArrowRight": {},
      "ville.embed.fluent.PersonAvailable": {},
      "ville.embed.fluent.PersonBoard": {},
      "ville.embed.fluent.PersonCall": {},
      "ville.embed.fluent.PersonChat": {},
      "ville.embed.fluent.PersonCircle": {},
      "ville.embed.fluent.PersonClock": {},
      "ville.embed.fluent.PersonDelete": {},
      "ville.embed.fluent.PersonDesktop": {},
      "ville.embed.fluent.PersonEdit": {},
      "ville.embed.fluent.PersonFeedback": {},
      "ville.embed.fluent.PersonHeart": {},
      "ville.embed.fluent.PersonInfo": {},
      "ville.embed.fluent.PersonKey": {},
      "ville.embed.fluent.PersonLightbulb": {},
      "ville.embed.fluent.PersonLightning": {},
      "ville.embed.fluent.PersonLink": {},
      "ville.embed.fluent.PersonLock": {},
      "ville.embed.fluent.PersonMail": {},
      "ville.embed.fluent.PersonMoney": {},
      "ville.embed.fluent.PersonNote": {},
      "ville.embed.fluent.PersonPasskey": {},
      "ville.embed.fluent.PersonPill": {},
      "ville.embed.fluent.PersonProhibited": {},
      "ville.embed.fluent.PersonQuestionMark": {},
      "ville.embed.fluent.PersonRibbon": {},
      "ville.embed.fluent.PersonRunning": {},
      "ville.embed.fluent.PersonSearch": {},
      "ville.embed.fluent.PersonSettings": {},
      "ville.embed.fluent.PersonSquare": {},
      "ville.embed.fluent.PersonSquareCheckmark": {},
      "ville.embed.fluent.PersonStar": {},
      "ville.embed.fluent.PersonStarburst": {},
      "ville.embed.fluent.PersonSubtract": {},
      "ville.embed.fluent.PersonSupport": {},
      "ville.embed.fluent.PersonSwap": {},
      "ville.embed.fluent.PersonSync": {},
      "ville.embed.fluent.PersonTag": {},
      "ville.embed.fluent.PersonTentative": {},
      "ville.embed.fluent.PersonVoice": {},
      "ville.embed.fluent.PersonWalking": {},
      "ville.embed.fluent.PersonWarning": {},
      "ville.embed.fluent.PersonWrench": {},
      "ville.embed.fluent.Phone": {},
      "ville.embed.fluent.PhoneAdd": {},
      "ville.embed.fluent.PhoneArrowRight": {},
      "ville.embed.fluent.PhoneChat": {},
      "ville.embed.fluent.PhoneCheckmark": {},
      "ville.embed.fluent.PhoneDesktop": {},
      "ville.embed.fluent.PhoneDesktopAdd": {},
      "ville.embed.fluent.PhoneDismiss": {},
      "ville.embed.fluent.PhoneEdit": {},
      "ville.embed.fluent.PhoneEraser": {},
      "ville.embed.fluent.PhoneFooterArrowDown": {},
      "ville.embed.fluent.PhoneHeaderArrowUp": {},
      "ville.embed.fluent.PhoneKey": {},
      "ville.embed.fluent.PhoneLaptop": {},
      "ville.embed.fluent.PhoneLinkSetup": {},
      "ville.embed.fluent.PhoneLock": {},
      "ville.embed.fluent.PhonePageHeader": {},
      "ville.embed.fluent.PhonePagination": {},
      "ville.embed.fluent.PhoneScreenTime": {},
      "ville.embed.fluent.PhoneShake": {},
      "ville.embed.fluent.PhoneSpanIn": {},
      "ville.embed.fluent.PhoneSpanOut": {},
      "ville.embed.fluent.PhoneSpeaker": {},
      "ville.embed.fluent.PhoneStatusBar": {},
      "ville.embed.fluent.PhoneTablet": {},
      "ville.embed.fluent.PhoneUpdate": {},
      "ville.embed.fluent.PhoneUpdateCheckmark": {},
      "ville.embed.fluent.PhoneVerticalScroll": {},
      "ville.embed.fluent.PhoneVibrate": {},
      "ville.embed.fluent.PhotoFilter": {},
      "ville.embed.fluent.Pi": {},
      "ville.embed.fluent.PictureInPicture": {},
      "ville.embed.fluent.PictureInPictureEnter": {},
      "ville.embed.fluent.PictureInPictureExit": {},
      "ville.embed.fluent.Pill": {},
      "ville.embed.fluent.Pin": {},
      "ville.embed.fluent.PinGlobe": {},
      "ville.embed.fluent.PinOff": {},
      "ville.embed.fluent.Pipeline": {},
      "ville.embed.fluent.PipelineAdd": {},
      "ville.embed.fluent.PipelineArrowCurveDown": {},
      "ville.embed.fluent.PipelinePlay": {},
      "ville.embed.fluent.Pivot": {},
      "ville.embed.fluent.PlantCattail": {},
      "ville.embed.fluent.PlantGrass": {},
      "ville.embed.fluent.PlantRagweed": {},
      "ville.embed.fluent.Play": {},
      "ville.embed.fluent.PlayCircle": {},
      "ville.embed.fluent.PlayCircleHint": {},
      "ville.embed.fluent.PlaySettings": {},
      "ville.embed.fluent.PlayingCards": {},
      "ville.embed.fluent.PlugConnected": {},
      "ville.embed.fluent.PlugConnectedAdd": {},
      "ville.embed.fluent.PlugConnectedCheckmark": {},
      "ville.embed.fluent.PlugConnectedSettings": {},
      "ville.embed.fluent.PlugDisconnected": {},
      "ville.embed.fluent.PointScan": {},
      "ville.embed.fluent.Poll": {},
      "ville.embed.fluent.PollHorizontal": {},
      "ville.embed.fluent.PollOff": {},
      "ville.embed.fluent.PortHdmi": {},
      "ville.embed.fluent.PortMicroUsb": {},
      "ville.embed.fluent.PortUsbA": {},
      "ville.embed.fluent.PortUsbC": {},
      "ville.embed.fluent.PositionBackward": {},
      "ville.embed.fluent.PositionForward": {},
      "ville.embed.fluent.PositionToBack": {},
      "ville.embed.fluent.PositionToFront": {},
      "ville.embed.fluent.Power": {},
      "ville.embed.fluent.Predictions": {},
      "ville.embed.fluent.Premium": {},
      "ville.embed.fluent.PremiumPerson": {},
      "ville.embed.fluent.PresenceAvailable": {},
      "ville.embed.fluent.PresenceAway": {},
      "ville.embed.fluent.PresenceBlocked": {},
      "ville.embed.fluent.PresenceDnd": {},
      "ville.embed.fluent.PresenceOffline": {},
      "ville.embed.fluent.PresenceOof": {},
      "ville.embed.fluent.PresenceUnknown": {},
      "ville.embed.fluent.Presenter": {},
      "ville.embed.fluent.PresenterOff": {},
      "ville.embed.fluent.PreviewLink": {},
      "ville.embed.fluent.Previous": {},
      "ville.embed.fluent.PreviousFrame": {},
      "ville.embed.fluent.Print": {},
      "ville.embed.fluent.PrintAdd": {},
      "ville.embed.fluent.Production": {},
      "ville.embed.fluent.ProductionCheckmark": {},
      "ville.embed.fluent.Prohibited": {},
      "ville.embed.fluent.ProhibitedMultiple": {},
      "ville.embed.fluent.ProhibitedNote": {},
      "ville.embed.fluent.ProjectionScreen": {},
      "ville.embed.fluent.ProjectionScreenDismiss": {},
      "ville.embed.fluent.ProjectionScreenText": {},
      "ville.embed.fluent.ProtocolHandler": {},
      "ville.embed.fluent.Pulse": {},
      "ville.embed.fluent.PulseSquare": {},
      "ville.embed.fluent.PuzzleCube": {},
      "ville.embed.fluent.PuzzleCubePiece": {},
      "ville.embed.fluent.PuzzlePiece": {},
      "ville.embed.fluent.PuzzlePieceShield": {},
      "ville.embed.fluent.QrCode": {},
      "ville.embed.fluent.Question": {},
      "ville.embed.fluent.QuestionCircle": {},
      "ville.embed.fluent.QuizNew": {},
      "ville.embed.fluent.Radar": {},
      "ville.embed.fluent.RadarCheckmark": {},
      "ville.embed.fluent.RadarRectangleMultiple": {},
      "ville.embed.fluent.RadioButton": {},
      "ville.embed.fluent.Ram": {},
      "ville.embed.fluent.RatingMature": {},
      "ville.embed.fluent.RatioOneToOne": {},
      "ville.embed.fluent.ReOrder": {},
      "ville.embed.fluent.ReOrderDotsHorizontal": {},
      "ville.embed.fluent.ReOrderDotsVertical": {},
      "ville.embed.fluent.ReadAloud": {},
      "ville.embed.fluent.ReadingList": {},
      "ville.embed.fluent.ReadingListAdd": {},
      "ville.embed.fluent.ReadingModeMobile": {},
      "ville.embed.fluent.RealEstate": {},
      "ville.embed.fluent.Receipt": {},
      "ville.embed.fluent.ReceiptAdd": {},
      "ville.embed.fluent.ReceiptBag": {},
      "ville.embed.fluent.ReceiptCube": {},
      "ville.embed.fluent.ReceiptMoney": {},
      "ville.embed.fluent.ReceiptPlay": {},
      "ville.embed.fluent.ReceiptSearch": {},
      "ville.embed.fluent.ReceiptSparkles": {},
      "ville.embed.fluent.Record": {},
      "ville.embed.fluent.RecordStop": {},
      "ville.embed.fluent.RectangleLandscape": {},
      "ville.embed.fluent.RectangleLandscapeHintCopy": {},
      "ville.embed.fluent.RectangleLandscapeSparkle": {},
      "ville.embed.fluent.RectangleLandscapeSync": {},
      "ville.embed.fluent.RectangleLandscapeSyncOff": {},
      "ville.embed.fluent.RectanglePortraitLocationTarget": {},
      "ville.embed.fluent.Recycle": {},
      "ville.embed.fluent.RemixAdd": {},
      "ville.embed.fluent.Remote": {},
      "ville.embed.fluent.Rename": {},
      "ville.embed.fluent.Replay": {},
      "ville.embed.fluent.Resize": {},
      "ville.embed.fluent.ResizeImage": {},
      "ville.embed.fluent.ResizeLarge": {},
      "ville.embed.fluent.ResizeSmall": {},
      "ville.embed.fluent.ResizeTable": {},
      "ville.embed.fluent.ResizeVideo": {},
      "ville.embed.fluent.Reward": {},
      "ville.embed.fluent.Rewind": {},
      "ville.embed.fluent.Rhombus": {},
      "ville.embed.fluent.Ribbon": {},
      "ville.embed.fluent.RibbonAdd": {},
      "ville.embed.fluent.RibbonOff": {},
      "ville.embed.fluent.RibbonStar": {},
      "ville.embed.fluent.Road": {},
      "ville.embed.fluent.RoadCone": {},
      "ville.embed.fluent.Rocket": {},
      "ville.embed.fluent.RotateLeft": {},
      "ville.embed.fluent.RotateRight": {},
      "ville.embed.fluent.Router": {},
      "ville.embed.fluent.RowTriple": {},
      "ville.embed.fluent.Rss": {},
      "ville.embed.fluent.Ruler": {},
      "ville.embed.fluent.Run": {},
      "ville.embed.fluent.Sanitize": {},
      "ville.embed.fluent.Save": {},
      "ville.embed.fluent.SaveArrowRight": {},
      "ville.embed.fluent.SaveCopy": {},
      "ville.embed.fluent.SaveEdit": {},
      "ville.embed.fluent.SaveImage": {},
      "ville.embed.fluent.SaveMultiple": {},
      "ville.embed.fluent.SaveSearch": {},
      "ville.embed.fluent.SaveSync": {},
      "ville.embed.fluent.Savings": {},
      "ville.embed.fluent.ScaleFill": {},
      "ville.embed.fluent.ScaleFit": {},
      "ville.embed.fluent.Scales": {},
      "ville.embed.fluent.Scan": {},
      "ville.embed.fluent.ScanCamera": {},
      "ville.embed.fluent.ScanDash": {},
      "ville.embed.fluent.ScanObject": {},
      "ville.embed.fluent.ScanPerson": {},
      "ville.embed.fluent.ScanTable": {},
      "ville.embed.fluent.ScanText": {},
      "ville.embed.fluent.ScanThumbUp": {},
      "ville.embed.fluent.ScanThumbUpOff": {},
      "ville.embed.fluent.ScanType": {},
      "ville.embed.fluent.ScanTypeCheckmark": {},
      "ville.embed.fluent.ScanTypeOff": {},
      "ville.embed.fluent.Scratchpad": {},
      "ville.embed.fluent.ScreenCut": {},
      "ville.embed.fluent.ScreenPerson": {},
      "ville.embed.fluent.ScreenSearch": {},
      "ville.embed.fluent.Screenshot": {},
      "ville.embed.fluent.ScreenshotRecord": {},
      "ville.embed.fluent.Script": {},
      "ville.embed.fluent.Search": {},
      "ville.embed.fluent.SearchInfo": {},
      "ville.embed.fluent.SearchSettings": {},
      "ville.embed.fluent.SearchShield": {},
      "ville.embed.fluent.SearchSquare": {},
      "ville.embed.fluent.SearchVisual": {},
      "ville.embed.fluent.Seat": {},
      "ville.embed.fluent.SeatAdd": {},
      "ville.embed.fluent.SelectAllOff": {},
      "ville.embed.fluent.SelectAllOn": {},
      "ville.embed.fluent.SelectObject": {},
      "ville.embed.fluent.SelectObjectSkew": {},
      "ville.embed.fluent.SelectObjectSkewDismiss": {},
      "ville.embed.fluent.SelectObjectSkewEdit": {},
      "ville.embed.fluent.Send": {},
      "ville.embed.fluent.SendBeaker": {},
      "ville.embed.fluent.SendClock": {},
      "ville.embed.fluent.SendCopy": {},
      "ville.embed.fluent.SerialPort": {},
      "ville.embed.fluent.Server": {},
      "ville.embed.fluent.ServerLink": {},
      "ville.embed.fluent.ServerMultiple": {},
      "ville.embed.fluent.ServerPlay": {},
      "ville.embed.fluent.ServiceBell": {},
      "ville.embed.fluent.Settings": {},
      "ville.embed.fluent.SettingsChat": {},
      "ville.embed.fluent.SettingsCogMultiple": {},
      "ville.embed.fluent.ShapeExclude": {},
      "ville.embed.fluent.ShapeIntersect": {},
      "ville.embed.fluent.ShapeOrganic": {},
      "ville.embed.fluent.ShapeSubtract": {},
      "ville.embed.fluent.ShapeUnion": {},
      "ville.embed.fluent.Shapes": {},
      "ville.embed.fluent.Share": {},
      "ville.embed.fluent.ShareAndroid": {},
      "ville.embed.fluent.ShareCloseTray": {},
      "ville.embed.fluent.ShareIos": {},
      "ville.embed.fluent.ShareMultiple": {},
      "ville.embed.fluent.ShareScreenPerson": {},
      "ville.embed.fluent.ShareScreenPersonOverlay": {},
      "ville.embed.fluent.ShareScreenPersonOverlayInside": {},
      "ville.embed.fluent.ShareScreenPersonP": {},
      "ville.embed.fluent.ShareScreenStart": {},
      "ville.embed.fluent.ShareScreenStop": {},
      "ville.embed.fluent.Shield": {},
      "ville.embed.fluent.ShieldAdd": {},
      "ville.embed.fluent.ShieldBadge": {},
      "ville.embed.fluent.ShieldCheckmark": {},
      "ville.embed.fluent.ShieldDismiss": {},
      "ville.embed.fluent.ShieldDismissShield": {},
      "ville.embed.fluent.ShieldError": {},
      "ville.embed.fluent.ShieldGlobe": {},
      "ville.embed.fluent.ShieldKeyhole": {},
      "ville.embed.fluent.ShieldLock": {},
      "ville.embed.fluent.ShieldPerson": {},
      "ville.embed.fluent.ShieldPersonAdd": {},
      "ville.embed.fluent.ShieldProhibited": {},
      "ville.embed.fluent.ShieldQuestion": {},
      "ville.embed.fluent.ShieldTask": {},
      "ville.embed.fluent.Shifts": {},
      "ville.embed.fluent.Shifts30Minutes": {},
      "ville.embed.fluent.ShiftsActivity": {},
      "ville.embed.fluent.ShiftsAdd": {},
      "ville.embed.fluent.ShiftsAvailability": {},
      "ville.embed.fluent.ShiftsCheckmark": {},
      "ville.embed.fluent.ShiftsDay": {},
      "ville.embed.fluent.ShiftsOpen": {},
      "ville.embed.fluent.ShiftsProhibited": {},
      "ville.embed.fluent.ShiftsQuestionMark": {},
      "ville.embed.fluent.ShiftsTeam": {},
      "ville.embed.fluent.ShoppingBag": {},
      "ville.embed.fluent.ShoppingBagAdd": {},
      "ville.embed.fluent.ShoppingBagArrowLeft": {},
      "ville.embed.fluent.ShoppingBagDismiss": {},
      "ville.embed.fluent.ShoppingBagPause": {},
      "ville.embed.fluent.ShoppingBagPercent": {},
      "ville.embed.fluent.ShoppingBagPlay": {},
      "ville.embed.fluent.ShoppingBagTag": {},
      "ville.embed.fluent.Shortpick": {},
      "ville.embed.fluent.Showerhead": {},
      "ville.embed.fluent.SidebarSearchLtr": {},
      "ville.embed.fluent.SidebarSearchRtl": {},
      "ville.embed.fluent.SignOut": {},
      "ville.embed.fluent.Signature": {},
      "ville.embed.fluent.Sim": {},
      "ville.embed.fluent.SkipBack10": {},
      "ville.embed.fluent.SkipForward10": {},
      "ville.embed.fluent.SkipForward30": {},
      "ville.embed.fluent.SkipForwardTab": {},
      "ville.embed.fluent.SlashForward": {},
      "ville.embed.fluent.Sleep": {},
      "ville.embed.fluent.SlideAdd": {},
      "ville.embed.fluent.SlideArrowRight": {},
      "ville.embed.fluent.SlideEraser": {},
      "ville.embed.fluent.SlideGrid": {},
      "ville.embed.fluent.SlideHide": {},
      "ville.embed.fluent.SlideLayout": {},
      "ville.embed.fluent.SlideLink": {},
      "ville.embed.fluent.SlideMicrophone": {},
      "ville.embed.fluent.SlideMultiple": {},
      "ville.embed.fluent.SlideMultipleArrowRight": {},
      "ville.embed.fluent.SlideMultipleSearch": {},
      "ville.embed.fluent.SlidePlay": {},
      "ville.embed.fluent.SlideRecord": {},
      "ville.embed.fluent.SlideSearch": {},
      "ville.embed.fluent.SlideSettings": {},
      "ville.embed.fluent.SlideSize": {},
      "ville.embed.fluent.SlideText": {},
      "ville.embed.fluent.SlideTextEdit": {},
      "ville.embed.fluent.SlideTextMultiple": {},
      "ville.embed.fluent.SlideTextPerson": {},
      "ville.embed.fluent.SlideTextSparkle": {},
      "ville.embed.fluent.SlideTransition": {},
      "ville.embed.fluent.Smartwatch": {},
      "ville.embed.fluent.SmartwatchDot": {},
      "ville.embed.fluent.Snooze": {},
      "ville.embed.fluent.SoundSource": {},
      "ville.embed.fluent.SoundWaveCircle": {},
      "ville.embed.fluent.Space3d": {},
      "ville.embed.fluent.Spacebar": {},
      "ville.embed.fluent.Sparkle": {},
      "ville.embed.fluent.SparkleCircle": {},
      "ville.embed.fluent.SpatulaSpoon": {},
      "ville.embed.fluent.Speaker0": {},
      "ville.embed.fluent.Speaker1": {},
      "ville.embed.fluent.Speaker2": {},
      "ville.embed.fluent.SpeakerBluetooth": {},
      "ville.embed.fluent.SpeakerBox": {},
      "ville.embed.fluent.SpeakerEdit": {},
      "ville.embed.fluent.SpeakerMute": {},
      "ville.embed.fluent.SpeakerOff": {},
      "ville.embed.fluent.SpeakerSettings": {},
      "ville.embed.fluent.SpeakerUsb": {},
      "ville.embed.fluent.SpinnerIos": {},
      "ville.embed.fluent.SplitHint": {},
      "ville.embed.fluent.SplitHorizontal": {},
      "ville.embed.fluent.SplitVertical": {},
      "ville.embed.fluent.Sport": {},
      "ville.embed.fluent.SportAmericanFootball": {},
      "ville.embed.fluent.SportBaseball": {},
      "ville.embed.fluent.SportBasketball": {},
      "ville.embed.fluent.SportHockey": {},
      "ville.embed.fluent.SportSoccer": {},
      "ville.embed.fluent.Square": {},
      "ville.embed.fluent.SquareAdd": {},
      "ville.embed.fluent.SquareArrowForward": {},
      "ville.embed.fluent.SquareDismiss": {},
      "ville.embed.fluent.SquareEraser": {},
      "ville.embed.fluent.SquareHint": {},
      "ville.embed.fluent.SquareHintApps": {},
      "ville.embed.fluent.SquareHintArrowBack": {},
      "ville.embed.fluent.SquareHintHexagon": {},
      "ville.embed.fluent.SquareHintSparkles": {},
      "ville.embed.fluent.SquareMultiple": {},
      "ville.embed.fluent.SquareShadow": {},
      "ville.embed.fluent.SquaresNested": {},
      "ville.embed.fluent.Stack": {},
      "ville.embed.fluent.StackAdd": {},
      "ville.embed.fluent.StackArrowForward": {},
      "ville.embed.fluent.StackStar": {},
      "ville.embed.fluent.StackVertical": {},
      "ville.embed.fluent.Star": {},
      "ville.embed.fluent.StarAdd": {},
      "ville.embed.fluent.StarArrowBack": {},
      "ville.embed.fluent.StarArrowRightEnd": {},
      "ville.embed.fluent.StarArrowRightStart": {},
      "ville.embed.fluent.StarCheckmark": {},
      "ville.embed.fluent.StarDismiss": {},
      "ville.embed.fluent.StarEdit": {},
      "ville.embed.fluent.StarEmphasis": {},
      "ville.embed.fluent.StarHalf": {},
      "ville.embed.fluent.StarLineHorizontal3": {},
      "ville.embed.fluent.StarOff": {},
      "ville.embed.fluent.StarOneQuarter": {},
      "ville.embed.fluent.StarProhibited": {},
      "ville.embed.fluent.StarSettings": {},
      "ville.embed.fluent.StarThreeQuarter": {},
      "ville.embed.fluent.Status": {},
      "ville.embed.fluent.Step": {},
      "ville.embed.fluent.Steps": {},
      "ville.embed.fluent.Stethoscope": {},
      "ville.embed.fluent.Sticker": {},
      "ville.embed.fluent.StickerAdd": {},
      "ville.embed.fluent.Stop": {},
      "ville.embed.fluent.Storage": {},
      "ville.embed.fluent.StoreMicrosoft": {},
      "ville.embed.fluent.Stream": {},
      "ville.embed.fluent.StreamInput": {},
      "ville.embed.fluent.StreamInputOutput": {},
      "ville.embed.fluent.StreamOutput": {},
      "ville.embed.fluent.StreetSign": {},
      "ville.embed.fluent.StyleGuide": {},
      "ville.embed.fluent.SubGrid": {},
      "ville.embed.fluent.Subtitles": {},
      "ville.embed.fluent.Subtract": {},
      "ville.embed.fluent.SubtractCircle": {},
      "ville.embed.fluent.SubtractCircleArrowBack": {},
      "ville.embed.fluent.SubtractCircleArrowForward": {},
      "ville.embed.fluent.SubtractParentheses": {},
      "ville.embed.fluent.SubtractSquare": {},
      "ville.embed.fluent.SubtractSquareMultiple": {},
      "ville.embed.fluent.SurfaceEarbuds": {},
      "ville.embed.fluent.SurfaceHub": {},
      "ville.embed.fluent.SwimmingPool": {},
      "ville.embed.fluent.SwipeDown": {},
      "ville.embed.fluent.SwipeRight": {},
      "ville.embed.fluent.SwipeUp": {},
      "ville.embed.fluent.Symbols": {},
      "ville.embed.fluent.SyncOff": {},
      "ville.embed.fluent.Syringe": {},
      "ville.embed.fluent.System": {},
      "ville.embed.fluent.Tab": {},
      "ville.embed.fluent.TabAdd": {},
      "ville.embed.fluent.TabArrowLeft": {},
      "ville.embed.fluent.TabDesktop": {},
      "ville.embed.fluent.TabDesktopArrowClockwise": {},
      "ville.embed.fluent.TabDesktopArrowLeft": {},
      "ville.embed.fluent.TabDesktopBottom": {},
      "ville.embed.fluent.TabDesktopClock": {},
      "ville.embed.fluent.TabDesktopCopy": {},
      "ville.embed.fluent.TabDesktopImage": {},
      "ville.embed.fluent.TabDesktopLink": {},
      "ville.embed.fluent.TabDesktopMultiple": {},
      "ville.embed.fluent.TabDesktopMultipleAdd": {},
      "ville.embed.fluent.TabDesktopMultipleBottom": {},
      "ville.embed.fluent.TabDesktopMultipleSparkle": {},
      "ville.embed.fluent.TabDesktopNewPage": {},
      "ville.embed.fluent.TabDesktopSearch": {},
      "ville.embed.fluent.TabGroup": {},
      "ville.embed.fluent.TabInPrivate": {},
      "ville.embed.fluent.TabInprivateAccount": {},
      "ville.embed.fluent.TabProhibited": {},
      "ville.embed.fluent.TabShieldDismiss": {},
      "ville.embed.fluent.Table": {},
      "ville.embed.fluent.TableAdd": {},
      "ville.embed.fluent.TableArrowUp": {},
      "ville.embed.fluent.TableBottomRow": {},
      "ville.embed.fluent.TableCalculator": {},
      "ville.embed.fluent.TableCellEdit": {},
      "ville.embed.fluent.TableCellsMerge": {},
      "ville.embed.fluent.TableCellsSplit": {},
      "ville.embed.fluent.TableChecker": {},
      "ville.embed.fluent.TableColumnTopBottom": {},
      "ville.embed.fluent.TableCopy": {},
      "ville.embed.fluent.TableDeleteColumn": {},
      "ville.embed.fluent.TableDeleteRow": {},
      "ville.embed.fluent.TableDismiss": {},
      "ville.embed.fluent.TableEdit": {},
      "ville.embed.fluent.TableFreezeColumn": {},
      "ville.embed.fluent.TableFreezeColumnAndRow": {},
      "ville.embed.fluent.TableFreezeRow": {},
      "ville.embed.fluent.TableImage": {},
      "ville.embed.fluent.TableInsertColumn": {},
      "ville.embed.fluent.TableInsertRow": {},
      "ville.embed.fluent.TableLightning": {},
      "ville.embed.fluent.TableLink": {},
      "ville.embed.fluent.TableLock": {},
      "ville.embed.fluent.TableMoveAbove": {},
      "ville.embed.fluent.TableMoveBelow": {},
      "ville.embed.fluent.TableMoveLeft": {},
      "ville.embed.fluent.TableMoveRight": {},
      "ville.embed.fluent.TableMultiple": {},
      "ville.embed.fluent.TableOffset": {},
      "ville.embed.fluent.TableOffsetAdd": {},
      "ville.embed.fluent.TableOffsetLessThanOrEqualTo": {},
      "ville.embed.fluent.TableOffsetSettings": {},
      "ville.embed.fluent.TableResizeColumn": {},
      "ville.embed.fluent.TableResizeRow": {},
      "ville.embed.fluent.TableSearch": {},
      "ville.embed.fluent.TableSettings": {},
      "ville.embed.fluent.TableSimple": {},
      "ville.embed.fluent.TableSimpleCheckmark": {},
      "ville.embed.fluent.TableSimpleExclude": {},
      "ville.embed.fluent.TableSimpleInclude": {},
      "ville.embed.fluent.TableSimpleMultiple": {},
      "ville.embed.fluent.TableSparkle": {},
      "ville.embed.fluent.TableSplit": {},
      "ville.embed.fluent.TableStackAbove": {},
      "ville.embed.fluent.TableStackBelow": {},
      "ville.embed.fluent.TableStackLeft": {},
      "ville.embed.fluent.TableStackRight": {},
      "ville.embed.fluent.TableSwitch": {},
      "ville.embed.fluent.Tablet": {},
      "ville.embed.fluent.TabletLaptop": {},
      "ville.embed.fluent.TabletSpeaker": {},
      "ville.embed.fluent.Tabs": {},
      "ville.embed.fluent.Tag": {},
      "ville.embed.fluent.TagCircle": {},
      "ville.embed.fluent.TagDismiss": {},
      "ville.embed.fluent.TagError": {},
      "ville.embed.fluent.TagLock": {},
      "ville.embed.fluent.TagMultiple": {},
      "ville.embed.fluent.TagOff": {},
      "ville.embed.fluent.TagQuestionMark": {},
      "ville.embed.fluent.TagReset": {},
      "ville.embed.fluent.TagSearch": {},
      "ville.embed.fluent.TapDouble": {},
      "ville.embed.fluent.TapSingle": {},
      "ville.embed.fluent.Target": {},
      "ville.embed.fluent.TargetAdd": {},
      "ville.embed.fluent.TargetArrow": {},
      "ville.embed.fluent.TargetDismiss": {},
      "ville.embed.fluent.TargetEdit": {},
      "ville.embed.fluent.TaskListAdd": {},
      "ville.embed.fluent.TaskListLtr": {},
      "ville.embed.fluent.TaskListRtl": {},
      "ville.embed.fluent.TaskListSquareAdd": {},
      "ville.embed.fluent.TaskListSquareDatabase": {},
      "ville.embed.fluent.TaskListSquareLtr": {},
      "ville.embed.fluent.TaskListSquarePerson": {},
      "ville.embed.fluent.TaskListSquareRtl": {},
      "ville.embed.fluent.TaskListSquareSettings": {},
      "ville.embed.fluent.TasksApp": {},
      "ville.embed.fluent.TeardropBottomRight": {},
      "ville.embed.fluent.Teddy": {},
      "ville.embed.fluent.Temperature": {},
      "ville.embed.fluent.Tent": {},
      "ville.embed.fluent.TetrisApp": {},
      "ville.embed.fluent.TextAdd": {},
      "ville.embed.fluent.TextAddSpaceAfter": {},
      "ville.embed.fluent.TextAddSpaceBefore": {},
      "ville.embed.fluent.TextAddT": {},
      "ville.embed.fluent.TextAlignCenter": {},
      "ville.embed.fluent.TextAlignCenterRotate270": {},
      "ville.embed.fluent.TextAlignCenterRotate90": {},
      "ville.embed.fluent.TextAlignDistributed": {},
      "ville.embed.fluent.TextAlignDistributedEvenly": {},
      "ville.embed.fluent.TextAlignDistributedVertical": {},
      "ville.embed.fluent.TextAlignJustify": {},
      "ville.embed.fluent.TextAlignJustifyLow": {},
      "ville.embed.fluent.TextAlignJustifyLow90": {},
      "ville.embed.fluent.TextAlignJustifyLowRotate270": {},
      "ville.embed.fluent.TextAlignJustifyLowRotate90": {},
      "ville.embed.fluent.TextAlignJustifyRotate270": {},
      "ville.embed.fluent.TextAlignJustifyRotate90": {},
      "ville.embed.fluent.TextAlignLeft": {},
      "ville.embed.fluent.TextAlignLeftRotate270": {},
      "ville.embed.fluent.TextAlignLeftRotate90": {},
      "ville.embed.fluent.TextAlignRight": {},
      "ville.embed.fluent.TextAlignRightRotate270": {},
      "ville.embed.fluent.TextAlignRightRotate90": {},
      "ville.embed.fluent.TextArrowDownRightColumn": {},
      "ville.embed.fluent.TextAsterisk": {},
      "ville.embed.fluent.TextBaseline": {},
      "ville.embed.fluent.TextBold": {},
      "ville.embed.fluent.TextBoxSettings": {},
      "ville.embed.fluent.TextBulletList": {},
      "ville.embed.fluent.TextBulletList90": {},
      "ville.embed.fluent.TextBulletListAdd": {},
      "ville.embed.fluent.TextBulletListCheckmark": {},
      "ville.embed.fluent.TextBulletListDismiss": {},
      "ville.embed.fluent.TextBulletListLtr": {},
      "ville.embed.fluent.TextBulletListLtr90": {},
      "ville.embed.fluent.TextBulletListRtl": {},
      "ville.embed.fluent.TextBulletListRtl90": {},
      "ville.embed.fluent.TextBulletListSquare": {},
      "ville.embed.fluent.TextBulletListSquareClock": {},
      "ville.embed.fluent.TextBulletListSquareEdit": {},
      "ville.embed.fluent.TextBulletListSquarePerson": {},
      "ville.embed.fluent.TextBulletListSquareSearch": {},
      "ville.embed.fluent.TextBulletListSquareSettings": {},
      "ville.embed.fluent.TextBulletListSquareShield": {},
      "ville.embed.fluent.TextBulletListSquareSparkle": {},
      "ville.embed.fluent.TextBulletListSquareToolbox": {},
      "ville.embed.fluent.TextBulletListSquareWarning": {},
      "ville.embed.fluent.TextBulletListTree": {},
      "ville.embed.fluent.TextCaseLowercase": {},
      "ville.embed.fluent.TextCaseTitle": {},
      "ville.embed.fluent.TextCaseUppercase": {},
      "ville.embed.fluent.TextChangeCase": {},
      "ville.embed.fluent.TextClearFormatting": {},
      "ville.embed.fluent.TextCollapse": {},
      "ville.embed.fluent.TextColor": {},
      "ville.embed.fluent.TextColumnOne": {},
      "ville.embed.fluent.TextColumnOneNarrow": {},
      "ville.embed.fluent.TextColumnOneSemiNarrow": {},
      "ville.embed.fluent.TextColumnOneWide": {},
      "ville.embed.fluent.TextColumnOneWideLightning": {},
      "ville.embed.fluent.TextColumnThree": {},
      "ville.embed.fluent.TextColumnTwo": {},
      "ville.embed.fluent.TextColumnTwoLeft": {},
      "ville.embed.fluent.TextColumnTwoRight": {},
      "ville.embed.fluent.TextColumnWide": {},
      "ville.embed.fluent.TextContinuous": {},
      "ville.embed.fluent.TextDensity": {},
      "ville.embed.fluent.TextDescription": {},
      "ville.embed.fluent.TextDescriptionLtr": {},
      "ville.embed.fluent.TextDescriptionRtl": {},
      "ville.embed.fluent.TextDirectionHorizontalLeft": {},
      "ville.embed.fluent.TextDirectionHorizontalLtr": {},
      "ville.embed.fluent.TextDirectionHorizontalRight": {},
      "ville.embed.fluent.TextDirectionHorizontalRtl": {},
      "ville.embed.fluent.TextDirectionRotate270Right": {},
      "ville.embed.fluent.TextDirectionRotate315Right": {},
      "ville.embed.fluent.TextDirectionRotate45Right": {},
      "ville.embed.fluent.TextDirectionRotate90Left": {},
      "ville.embed.fluent.TextDirectionRotate90Ltr": {},
      "ville.embed.fluent.TextDirectionRotate90Right": {},
      "ville.embed.fluent.TextDirectionRotate90Rtl": {},
      "ville.embed.fluent.TextDirectionVertical": {},
      "ville.embed.fluent.TextEditStyle": {},
      "ville.embed.fluent.TextEffects": {},
      "ville.embed.fluent.TextEffectsSparkle": {},
      "ville.embed.fluent.TextExpand": {},
      "ville.embed.fluent.TextField": {},
      "ville.embed.fluent.TextFirstLine": {},
      "ville.embed.fluent.TextFont": {},
      "ville.embed.fluent.TextFontInfo": {},
      "ville.embed.fluent.TextFontSize": {},
      "ville.embed.fluent.TextFootnote": {},
      "ville.embed.fluent.TextGrammarArrowLeft": {},
      "ville.embed.fluent.TextGrammarArrowRight": {},
      "ville.embed.fluent.TextGrammarCheckmark": {},
      "ville.embed.fluent.TextGrammarDismiss": {},
      "ville.embed.fluent.TextGrammarError": {},
      "ville.embed.fluent.TextGrammarLightning": {},
      "ville.embed.fluent.TextGrammarSettings": {},
      "ville.embed.fluent.TextGrammarWand": {},
      "ville.embed.fluent.TextHanging": {},
      "ville.embed.fluent.TextHeader1": {},
      "ville.embed.fluent.TextHeader1Lines": {},
      "ville.embed.fluent.TextHeader1LinesCaret": {},
      "ville.embed.fluent.TextHeader2": {},
      "ville.embed.fluent.TextHeader2Lines": {},
      "ville.embed.fluent.TextHeader2LinesCaret": {},
      "ville.embed.fluent.TextHeader3": {},
      "ville.embed.fluent.TextHeader3Lines": {},
      "ville.embed.fluent.TextHeader3LinesCaret": {},
      "ville.embed.fluent.TextIndentDecrease": {},
      "ville.embed.fluent.TextIndentDecreaseLtr": {},
      "ville.embed.fluent.TextIndentDecreaseLtr90": {},
      "ville.embed.fluent.TextIndentDecreaseLtrRotate270": {},
      "ville.embed.fluent.TextIndentDecreaseRotate270": {},
      "ville.embed.fluent.TextIndentDecreaseRotate90": {},
      "ville.embed.fluent.TextIndentDecreaseRtl": {},
      "ville.embed.fluent.TextIndentDecreaseRtl90": {},
      "ville.embed.fluent.TextIndentDecreaseRtlRotate270": {},
      "ville.embed.fluent.TextIndentIncrease": {},
      "ville.embed.fluent.TextIndentIncreaseLtr": {},
      "ville.embed.fluent.TextIndentIncreaseLtr90": {},
      "ville.embed.fluent.TextIndentIncreaseLtrRotate270": {},
      "ville.embed.fluent.TextIndentIncreaseRotate270": {},
      "ville.embed.fluent.TextIndentIncreaseRotate90": {},
      "ville.embed.fluent.TextIndentIncreaseRtl": {},
      "ville.embed.fluent.TextIndentIncreaseRtl90": {},
      "ville.embed.fluent.TextIndentIncreaseRtlRotate270": {},
      "ville.embed.fluent.TextItalic": {},
      "ville.embed.fluent.TextLineSpacing": {},
      "ville.embed.fluent.TextMore": {},
      "ville.embed.fluent.TextNumberFormat": {},
      "ville.embed.fluent.TextNumberListLtr": {},
      "ville.embed.fluent.TextNumberListLtr90": {},
      "ville.embed.fluent.TextNumberListLtrRotate270": {},
      "ville.embed.fluent.TextNumberListRotate270": {},
      "ville.embed.fluent.TextNumberListRotate90": {},
      "ville.embed.fluent.TextNumberListRtl": {},
      "ville.embed.fluent.TextNumberListRtl90": {},
      "ville.embed.fluent.TextNumberListRtlRotate270": {},
      "ville.embed.fluent.TextParagraph": {},
      "ville.embed.fluent.TextParagraphDirection": {},
      "ville.embed.fluent.TextParagraphDirectionLeft": {},
      "ville.embed.fluent.TextParagraphDirectionRight": {},
      "ville.embed.fluent.TextPeriodAsterisk": {},
      "ville.embed.fluent.TextPositionBehind": {},
      "ville.embed.fluent.TextPositionFront": {},
      "ville.embed.fluent.TextPositionLine": {},
      "ville.embed.fluent.TextPositionSquare": {},
      "ville.embed.fluent.TextPositionSquareLeft": {},
      "ville.embed.fluent.TextPositionSquareRight": {},
      "ville.embed.fluent.TextPositionThrough": {},
      "ville.embed.fluent.TextPositionTight": {},
      "ville.embed.fluent.TextPositionTopBottom": {},
      "ville.embed.fluent.TextProofingTools": {},
      "ville.embed.fluent.TextQuote": {},
      "ville.embed.fluent.TextSortAscending": {},
      "ville.embed.fluent.TextSortDescending": {},
      "ville.embed.fluent.TextStrikethrough": {},
      "ville.embed.fluent.TextSubscript": {},
      "ville.embed.fluent.TextSuperscript": {},
      "ville.embed.fluent.TextT": {},
      "ville.embed.fluent.TextUnderline": {},
      "ville.embed.fluent.TextUnderlineCharacterU": {},
      "ville.embed.fluent.TextUnderlineDouble": {},
      "ville.embed.fluent.TextWholeWord": {},
      "ville.embed.fluent.TextWordCount": {},
      "ville.embed.fluent.TextWrap": {},
      "ville.embed.fluent.TextWrapOff": {},
      "ville.embed.fluent.Textbox": {},
      "ville.embed.fluent.TextboxAlignBottom": {},
      "ville.embed.fluent.TextboxAlignBottomCenter": {},
      "ville.embed.fluent.TextboxAlignBottomLeft": {},
      "ville.embed.fluent.TextboxAlignBottomRight": {},
      "ville.embed.fluent.TextboxAlignBottomRotate90": {},
      "ville.embed.fluent.TextboxAlignCenter": {},
      "ville.embed.fluent.TextboxAlignMiddle": {},
      "ville.embed.fluent.TextboxAlignMiddleLeft": {},
      "ville.embed.fluent.TextboxAlignMiddleRight": {},
      "ville.embed.fluent.TextboxAlignMiddleRotate90": {},
      "ville.embed.fluent.TextboxAlignTop": {},
      "ville.embed.fluent.TextboxAlignTopCenter": {},
      "ville.embed.fluent.TextboxAlignTopLeft": {},
      "ville.embed.fluent.TextboxAlignTopRight": {},
      "ville.embed.fluent.TextboxAlignTopRotate90": {},
      "ville.embed.fluent.TextboxMore": {},
      "ville.embed.fluent.TextboxRotate90": {},
      "ville.embed.fluent.Thinking": {},
      "ville.embed.fluent.ThumbDislike": {},
      "ville.embed.fluent.ThumbLike": {},
      "ville.embed.fluent.ThumbLikeDislike": {},
      "ville.embed.fluent.TicketDiagonal": {},
      "ville.embed.fluent.TicketHorizontal": {},
      "ville.embed.fluent.TimeAndWeather": {},
      "ville.embed.fluent.TimePicker": {},
      "ville.embed.fluent.Timeline": {},
      "ville.embed.fluent.Timer10": {},
      "ville.embed.fluent.Timer": {},
      "ville.embed.fluent.Timer2": {},
      "ville.embed.fluent.Timer3": {},
      "ville.embed.fluent.TimerOff": {},
      "ville.embed.fluent.ToggleLeft": {},
      "ville.embed.fluent.ToggleMultiple": {},
      "ville.embed.fluent.ToggleRight": {},
      "ville.embed.fluent.Toolbox": {},
      "ville.embed.fluent.TooltipQuote": {},
      "ville.embed.fluent.TopSpeed": {},
      "ville.embed.fluent.Translate": {},
      "ville.embed.fluent.TranslateAuto": {},
      "ville.embed.fluent.TranslateOff": {},
      "ville.embed.fluent.Transmission": {},
      "ville.embed.fluent.TrayItemAdd": {},
      "ville.embed.fluent.TrayItemRemove": {},
      "ville.embed.fluent.TreeDeciduous": {},
      "ville.embed.fluent.TreeEvergreen": {},
      "ville.embed.fluent.Triangle": {},
      "ville.embed.fluent.TriangleDown": {},
      "ville.embed.fluent.TriangleLeft": {},
      "ville.embed.fluent.TriangleRight": {},
      "ville.embed.fluent.TriangleUp": {},
      "ville.embed.fluent.Trophy": {},
      "ville.embed.fluent.TrophyLock": {},
      "ville.embed.fluent.TrophyOff": {},
      "ville.embed.fluent.Tv": {},
      "ville.embed.fluent.TvArrowRight": {},
      "ville.embed.fluent.TvUsb": {},
      "ville.embed.fluent.Umbrella": {},
      "ville.embed.fluent.UninstallApp": {},
      "ville.embed.fluent.UsbPlug": {},
      "ville.embed.fluent.UsbStick": {},
      "ville.embed.fluent.Vault": {},
      "ville.embed.fluent.VehicleBicycle": {},
      "ville.embed.fluent.VehicleBus": {},
      "ville.embed.fluent.VehicleCab": {},
      "ville.embed.fluent.VehicleCableCar": {},
      "ville.embed.fluent.VehicleCar": {},
      "ville.embed.fluent.VehicleCarCollision": {},
      "ville.embed.fluent.VehicleCarParking": {},
      "ville.embed.fluent.VehicleCarProfile": {},
      "ville.embed.fluent.VehicleCarProfileLtr": {},
      "ville.embed.fluent.VehicleCarProfileLtrClock": {},
      "ville.embed.fluent.VehicleCarProfileRtl": {},
      "ville.embed.fluent.VehicleShip": {},
      "ville.embed.fluent.VehicleSubway": {},
      "ville.embed.fluent.VehicleSubwayClock": {},
      "ville.embed.fluent.VehicleTractor": {},
      "ville.embed.fluent.VehicleTruck": {},
      "ville.embed.fluent.VehicleTruckBag": {},
      "ville.embed.fluent.VehicleTruckCube": {},
      "ville.embed.fluent.VehicleTruckProfile": {},
      "ville.embed.fluent.Video": {},
      "ville.embed.fluent.Video360": {},
      "ville.embed.fluent.Video360Off": {},
      "ville.embed.fluent.VideoAdd": {},
      "ville.embed.fluent.VideoBackgroundEffect": {},
      "ville.embed.fluent.VideoBackgroundEffectHorizontal": {},
      "ville.embed.fluent.VideoChat": {},
      "ville.embed.fluent.VideoClip": {},
      "ville.embed.fluent.VideoClipMultiple": {},
      "ville.embed.fluent.VideoClipOff": {},
      "ville.embed.fluent.VideoClipOptimize": {},
      "ville.embed.fluent.VideoClipWand": {},
      "ville.embed.fluent.VideoOff": {},
      "ville.embed.fluent.VideoPerson": {},
      "ville.embed.fluent.VideoPersonCall": {},
      "ville.embed.fluent.VideoPersonClock": {},
      "ville.embed.fluent.VideoPersonOff": {},
      "ville.embed.fluent.VideoPersonPulse": {},
      "ville.embed.fluent.VideoPersonSparkle": {},
      "ville.embed.fluent.VideoPersonSparkleOff": {},
      "ville.embed.fluent.VideoPersonStar": {},
      "ville.embed.fluent.VideoPersonStarOff": {},
      "ville.embed.fluent.VideoPlayPause": {},
      "ville.embed.fluent.VideoProhibited": {},
      "ville.embed.fluent.VideoRecording": {},
      "ville.embed.fluent.VideoSecurity": {},
      "ville.embed.fluent.VideoSwitch": {},
      "ville.embed.fluent.VideoSync": {},
      "ville.embed.fluent.ViewDesktop": {},
      "ville.embed.fluent.ViewDesktopMobile": {},
      "ville.embed.fluent.VirtualNetwork": {},
      "ville.embed.fluent.VirtualNetworkToolbox": {},
      "ville.embed.fluent.Voicemail": {},
      "ville.embed.fluent.VoicemailArrowBack": {},
      "ville.embed.fluent.VoicemailArrowForward": {},
      "ville.embed.fluent.VoicemailArrowSubtract": {},
      "ville.embed.fluent.VoicemailShield": {},
      "ville.embed.fluent.VoicemailSubtract": {},
      "ville.embed.fluent.Vote": {},
      "ville.embed.fluent.WalkieTalkie": {},
      "ville.embed.fluent.Wallet": {},
      "ville.embed.fluent.WalletCreditCard": {},
      "ville.embed.fluent.Wallpaper": {},
      "ville.embed.fluent.Wand": {},
      "ville.embed.fluent.Warning": {},
      "ville.embed.fluent.WarningShield": {},
      "ville.embed.fluent.Washer": {},
      "ville.embed.fluent.Water": {},
      "ville.embed.fluent.WeatherBlowingSnow": {},
      "ville.embed.fluent.WeatherCloudy": {},
      "ville.embed.fluent.WeatherDrizzle": {},
      "ville.embed.fluent.WeatherDuststorm": {},
      "ville.embed.fluent.WeatherFog": {},
      "ville.embed.fluent.WeatherHailDay": {},
      "ville.embed.fluent.WeatherHailNight": {},
      "ville.embed.fluent.WeatherHaze": {},
      "ville.embed.fluent.WeatherMoon": {},
      "ville.embed.fluent.WeatherMoonOff": {},
      "ville.embed.fluent.WeatherPartlyCloudyDay": {},
      "ville.embed.fluent.WeatherPartlyCloudyNight": {},
      "ville.embed.fluent.WeatherRain": {},
      "ville.embed.fluent.WeatherRainShowersDay": {},
      "ville.embed.fluent.WeatherRainShowersNight": {},
      "ville.embed.fluent.WeatherRainSnow": {},
      "ville.embed.fluent.WeatherSnow": {},
      "ville.embed.fluent.WeatherSnowShowerDay": {},
      "ville.embed.fluent.WeatherSnowShowerNight": {},
      "ville.embed.fluent.WeatherSnowflake": {},
      "ville.embed.fluent.WeatherSqualls": {},
      "ville.embed.fluent.WeatherSunny": {},
      "ville.embed.fluent.WeatherSunnyHigh": {},
      "ville.embed.fluent.WeatherSunnyLow": {},
      "ville.embed.fluent.WeatherThunderstorm": {},
      "ville.embed.fluent.WebAsset": {},
      "ville.embed.fluent.Whiteboard": {},
      "ville.embed.fluent.WhiteboardOff": {},
      "ville.embed.fluent.Wifi1": {},
      "ville.embed.fluent.Wifi2": {},
      "ville.embed.fluent.Wifi3": {},
      "ville.embed.fluent.Wifi4": {},
      "ville.embed.fluent.WifiLock": {},
      "ville.embed.fluent.WifiOff": {},
      "ville.embed.fluent.WifiSettings": {},
      "ville.embed.fluent.WifiWarning": {},
      "ville.embed.fluent.Window": {},
      "ville.embed.fluent.WindowAd": {},
      "ville.embed.fluent.WindowAdOff": {},
      "ville.embed.fluent.WindowAdPerson": {},
      "ville.embed.fluent.WindowApps": {},
      "ville.embed.fluent.WindowArrowUp": {},
      "ville.embed.fluent.WindowBulletList": {},
      "ville.embed.fluent.WindowBulletListAdd": {},
      "ville.embed.fluent.WindowConsole": {},
      "ville.embed.fluent.WindowDatabase": {},
      "ville.embed.fluent.WindowDevEdit": {},
      "ville.embed.fluent.WindowDevTools": {},
      "ville.embed.fluent.WindowEdit": {},
      "ville.embed.fluent.WindowFingerprint": {},
      "ville.embed.fluent.WindowHeaderHorizontal": {},
      "ville.embed.fluent.WindowHeaderHorizontalOff": {},
      "ville.embed.fluent.WindowHeaderVertical": {},
      "ville.embed.fluent.WindowInprivate": {},
      "ville.embed.fluent.WindowInprivateAccount": {},
      "ville.embed.fluent.WindowLocationTarget": {},
      "ville.embed.fluent.WindowMultiple": {},
      "ville.embed.fluent.WindowMultipleSwap": {},
      "ville.embed.fluent.WindowNew": {},
      "ville.embed.fluent.WindowPlay": {},
      "ville.embed.fluent.WindowSettings": {},
      "ville.embed.fluent.WindowShield": {},
      "ville.embed.fluent.WindowText": {},
      "ville.embed.fluent.WindowWrench": {},
      "ville.embed.fluent.Wrench": {},
      "ville.embed.fluent.WrenchScrewdriver": {},
      "ville.embed.fluent.WrenchSettings": {},
      "ville.embed.fluent.XboxConsole": {},
      "ville.embed.fluent.XboxController": {},
      "ville.embed.fluent.XboxControllerError": {},
      "ville.embed.fluent.Xray": {},
      "ville.embed.fluent.ZoomFit": {},
      "ville.embed.fluent.ZoomIn": {},
      "ville.embed.fluent.ZoomOut": {},
      "ville.embed.material.AccountCircle": {},
      "wax.demo.MenuButton": {},
      "qx.ui.form.RadioGroup": {},
      "qx.bom.MediaQuery": {},
      "qx.ui.window.Window": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "browser.name": {
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  /**
   * This is the main application class of your custom application "wax"
   * @asset(wax/demo/*)
   */
  qx.Class.define("wax.demo.Application", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
    PROPERTIES
    *****************************************************************************
    */

    properties: {
      demoMode: {
        check: ["desktop", "mobile"],
        init: "desktop"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      _blocker: null,
      _northBox: null,
      _westBox: null,
      /**
       * This method contains the initial application code and gets called 
       * during startup of the application
       * 
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        wax.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        // *** Mixins to enable embed features
        qx.Class.include(qx.ui.basic.Atom, ville.embed.MEmbed);

        // *** Icons using CSS clip-path
        //qx.Class.include(qx.ui.decoration.Decorator, ville.embed.MClipPath);

        // >>> START of Base Scaffolding >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // >>> Base Scaffolding are objects common to all Wax - Franklin based apps  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        // App's Root
        var approot = this.getRoot();

        // Add a Blocker to the application's root for the Main Menu Popup
        this._blocker = new qx.ui.core.Blocker(approot).set({
          color: "black",
          opacity: .08
        });

        // App's main Container (Composite) with Dock Layout 
        var appcompdock = new qx.ui.container.Composite(new qx.ui.layout.Dock(0, 0)).set({
          backgroundColor: "transparent"
        });

        // Dock's North section (Canvas)
        var northhbox = this._northBox = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({
          backgroundColor: "white",
          decorator: "topheader"
        });

        // Dock's West section (VBox)
        var westbox = this._westBox = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({
          backgroundColor: "white",
          padding: [10, 0, 10, 0],
          decorator: "leftside"
        });

        // Dock's Center section (Stack) === THE STACK ===
        var centerbox = new qx.ui.container.Stack().set({
          backgroundColor: "white",
          padding: 0
        });

        // phone/phonegap
        //if (qx.core.Environment.get("phonegap")) {
        var southbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({
          alignY: "middle",
          padding: [0, 4, 0, 4],
          decorator: "bottombar"
        });
        //}

        // West Scroll area to fit all menu items
        var scrollwest = new qx.ui.container.Scroll().set({
          scrollbarX: "off",
          minWidth: 220,
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 10]
        });

        // Center Scroll area to fit all content
        var scroll = new qx.ui.container.Scroll().set({
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 0]
        });

        // === North Toolbar, Parts and Buttons ===
        var northtoolbar = new qx.ui.toolbar.ToolBar().set({
          backgroundColor: "white"
        });
        var mainmenupart = new qx.ui.toolbar.Part(); //Top-Left of the screen 
        var profilepart = new qx.ui.toolbar.Part(); // Top-Right of the screen

        // Icon Images
        var menuimage = "wax/demo/round-menu-24px.svg";
        var roundacct = "wax/demo/round-account_circle-24px.svg";
        var testimage = "wax/demo/test-image.svg";

        // Top-Left Button
        var mainmenubtnbutton = new qx.ui.toolbar.Button("MainMenu", menuimage).set({
          show: "icon"
        });

        // Top-Right MenuButton
        var profilemenubutton = new qx.ui.toolbar.MenuButton("ProfileMenu", roundacct).set({
          show: "icon",
          showArrow: false
        });

        // Main Menu Popup (VBox)
        var mainmenupopup = new qx.ui.popup.Popup().set({
          allowGrowY: true,
          padding: 10
        });
        mainmenupopup.setLayout(new qx.ui.layout.VBox(0));

        // Profile and Settings Menu and Menu Buttons
        var profilemenu = new qx.ui.menu.Menu().set({
          spacingX: 12
        });
        var switchmenubutton1 = new qx.ui.menu.Button("Switch to Mobile", "wax/demo/mobile_friendly-24px.svg").set({
          padding: 10
        });
        switchmenubutton1.getChildControl("icon").set({
          width: 24,
          height: 24
        });
        var aboutmenubutton1 = new qx.ui.menu.Button("About Wax", "wax/demo/info-24px.svg").set({
          padding: 10
        });
        aboutmenubutton1.getChildControl("icon").set({
          width: 24,
          height: 24
        });

        //create About Wax popup window
        var winAboutWax = this.__P_2_0();
        winAboutWax.getLayout().set({
          spacing: 20
        });
        winAboutWax.set({
          width: 430,
          height: 460,
          contentPadding: 0
        });
        var txtaboutwax = 'Project Github page: <a target="_blank" href="https://github.com/sqville/ville.Embed">https://github.com/sqville/ville.Embed</a>';
        //var aboutbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
        var aboutscroll = new qx.ui.container.Scroll().set({
          allowStretchY: true,
          padding: 0,
          margin: 0,
          contentPadding: [0, 24, 0, 24]
        });
        var waxatom = new qx.ui.basic.Atom(txtaboutwax, "wax/demo/ville_Wax.png").set({
          rich: true,
          iconPosition: "top",
          gap: 30,
          paddingTop: 30
        });
        waxatom.getChildControl("label").set({
          wrap: true
        });
        aboutscroll.add(waxatom);
        winAboutWax.add(aboutscroll, {
          flex: 1
        });
        var btnClosewinAbout = new qx.ui.form.Button("Close Window").set({
          marginBottom: 18,
          maxWidth: 300,
          alignX: "center",
          alignY: "middle"
        });
        //winAboutWax.add(new qx.ui.core.Spacer(30, 20), {flex: 1});
        winAboutWax.add(btnClosewinAbout);
        btnClosewinAbout.addListener("execute", function (e) {
          winAboutWax.close();
        }, this);
        approot.addListener("resize", function (e) {
          winAboutWax.center();
        }, this);
        aboutmenubutton1.addListener("execute", function (e) {
          winAboutWax.restore();
          //winAboutWax.maximize();
          winAboutWax.center();
          winAboutWax.show();
        }, this);

        // Add Main Menu Popup Listeners
        mainmenubtnbutton.addListener("execute", function (e) {
          if (qx.core.Environment.get("browser.name") != "edge") {
            this._blocker.blockContent(mainmenubtnbutton.getZIndex());
          }
          mainmenupopup.show();
        }, this);
        mainmenupopup.addListener("disappear", function (e) {
          this._blocker.unblock();
        }, this);

        // Assemble all base pieces  
        scrollwest.add(westbox);
        //scroll.add(centerbox);
        appcompdock.add(northhbox, {
          edge: "north"
        });
        appcompdock.add(scrollwest, {
          edge: "west"
        });
        //appcompdock.add(scroll, {edge:"center"});
        appcompdock.add(centerbox, {
          edge: "center"
        });
        approot.add(appcompdock, {
          edge: 0
        });
        //profilemenu.add(switchmenubutton1);
        profilemenu.add(aboutmenubutton1);
        profilemenubutton.setMenu(profilemenu);
        var atmlogocurrentpage = new qx.ui.basic.Atom("Wax", "wax/demo/Wax_demo_logo.svg").set({
          font: "hym-app-header",
          gap: 10,
          padding: 0,
          visibility: "hidden"
        });
        atmlogocurrentpage.getChildControl("icon").set({
          scale: true,
          width: 48,
          height: 38
        });
        mainmenupart.add(mainmenubtnbutton);
        profilepart.add(profilemenubutton);
        northtoolbar.add(mainmenupart);
        northtoolbar.addSpacer();
        northtoolbar.add(atmlogocurrentpage);
        northtoolbar.addSpacer();
        northtoolbar.add(profilepart);
        northhbox.add(northtoolbar, {
          left: 0,
          right: 0
        });
        appcompdock.add(southbox, {
          edge: "south"
        });

        // <<< END of Base Scaffolding <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        // Add some simple ease in animation to the app's blocker
        var fadeinb = {
          duration: 300,
          timing: "ease",
          keyFrames: {
            0: {
              opacity: 0
            },
            100: {
              opacity: .08
            }
          }
        };
        this._blocker.addListener("blocked", function (e) {
          var domtable;
          if (domtable = this._blocker.getBlockerElement().getDomElement()) {
            qx.bom.element.Animation.animate(domtable, fadeinb);
          }
        }, this);

        // >>> Populate THE STACK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Four page stack EXAMPLE
        // Dashboard Page with Flow layout
        // Overview Page with links to a Detail Page
        // Table to List Page - shows how the Table Widget converts to a List Widget for smaller screens
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        var newapproachpage = new qx.ui.container.Composite().set({
          padding: [20, 30]
        });
        var dashboardpage = new qx.ui.container.Composite().set({
          padding: [20, 30]
        });
        var overviewpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({
          padding: [20, 30]
        });
        var tablelistpage = new qx.ui.container.Composite().set({
          padding: [20, 30]
        });
        newapproachpage.setLayout(new qx.ui.layout.VBox(10).set({
          alignX: "left"
        }));
        var lblnewapproachheader = new qx.ui.basic.Label("New Approach").set({
          font: "control-header"
        });
        //simple description
        var lblnewapproachsimpledesc = new qx.ui.basic.Label("Theres a new approach. Each icon is its own object.").set({
          rich: true,
          wrap: true
        });

        //more structure
        dashboardpage.setLayout(new qx.ui.layout.VBox(10).set({
          alignX: "left"
        }));
        var dashboardscrollstackpage = new qx.ui.container.Scroll().set({
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 0]
        });
        dashboardscrollstackpage.add(dashboardpage);

        // iConicss Icons
        // Top header
        var lbliconicssheader = new qx.ui.basic.Label("iConicss (Pure CSS Icons)").set({
          font: "control-header"
        });

        //simple description
        var lbliconicsssimpledesc = new qx.ui.basic.Label("iConicss by Viglino, is an icon set implemented in pure HTML and CSS. Below is just a subset of icons. Visit <b><a href='https://viglino.github.io/iconicss/?&page=icons' target='_blank'>iConicss Github site</a></b> for the full list of available icons.").set({
          rich: true,
          wrap: true
        });

        // Basic usage
        var lblsubheadsimple = new qx.ui.basic.Label("Basic usage:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblsimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed iConicss object, sized at 3 (\"em\" per the template) and colored <span style='color: blue;'>blue</span>:").set({
          rich: true,
          wrap: true
        });
        var embedCubeo = new ville.embed.iconicss.CubeO(3, "blue");
        var lblsimpleembedcode = new qx.ui.basic.Label("var <span style='color:green;'>cubeoicon</span> = <span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.iconicss.CubeO</span>(<span style='color:green;'>3</span>, <span style='color:maroon;'>\"blue\"</span>);").set({
          rich: true,
          wrap: true,
          font: "monospace",
          backgroundColor: "#f2f2f2",
          padding: 6
        });

        // Use in a Button (requires patching)
        var lblsubheadbutton = new qx.ui.basic.Label("Use in another widget:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblmoreembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first enhance the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once enhanced, add the icon object to the Atom based control:").set({
          rich: true,
          wrap: true
        });
        var cubeoicon = new ville.embed.iconicss.CubeO(2);
        var btnembedcubeobutton = new qx.ui.form.Button('Click Me').set({
          appearance: "testiconicssbutton",
          embed: cubeoicon,
          allowGrowX: false,
          padding: [10, 14],
          gap: 10,
          alignX: "left",
          alignY: "middle"
        });
        var lblbuttonembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Include the Embed Mixin before creating the Button */</span><br>qx.Class.include(<span style='color:green;'>qx.ui.form.Button, ville.embed.MEmbed</span>);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me'</span>).set({ embed : <span style='color:green;'>cubeoicon</span> });").set({
          rich: true,
          wrap: true,
          font: "monospace",
          backgroundColor: "#f2f2f2",
          padding: 6
        });
        var animationGrow = {
          duration: 150,
          keyFrames: {
            0: {
              scale: 1
            },
            100: {
              scale: 1.1
            }
          },
          keep: 100,
          timing: "ease-out"
        };
        btnembedcubeobutton.addListener("mouseover", function (e) {
          var icondom = cubeoicon.getContentElement().getDomElement();
          qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
        });
        btnembedcubeobutton.addListener("mouseout", function (e) {
          var icondom = cubeoicon.getContentElement().getDomElement();
          qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
        });

        // Some of my Favorite Icons
        var lblsubheaderFavs = new qx.ui.basic.Label("A few of my favorite icons:").set({
          font: "headeratom",
          marginTop: 40
        });
        var dashboardiconflow = new qx.ui.container.Composite();
        var dashboardiconflowlayout = new qx.ui.layout.Flow(16, 20, "left");
        dashboardiconflow.setLayout(dashboardiconflowlayout);

        //icons in Atoms
        var atmcoffeegrain = new qx.ui.basic.Atom("coffee-grain").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.CoffeeGrain(3)
        });
        var atmcoffee = new qx.ui.basic.Atom("coffee").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.Coffee(3)
        });
        var atmfootball = new qx.ui.basic.Atom("football").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.Football(3)
        });
        var atmshapes = new qx.ui.basic.Atom("shapes").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.Shapes(3)
        });
        var atmrocket = new qx.ui.basic.Atom("rocket").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.Rocket(3)
        });
        var atmwolverinec = new qx.ui.basic.Atom("wolverine").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.Wolverine(3)
        });
        var atmsuno = new qx.ui.basic.Atom("sun-o").set({
          appearance: "icss-atom",
          embed: new ville.embed.iconicss.SunO(3)
        });
        dashboardiconflow.add(atmcoffee);
        dashboardiconflow.add(atmcoffeegrain);
        dashboardiconflow.add(atmfootball);
        dashboardiconflow.add(atmshapes);
        dashboardiconflow.add(atmrocket);
        dashboardiconflow.add(atmwolverinec);
        dashboardiconflow.add(atmsuno);

        // Assemble
        dashboardpage.add(lbliconicssheader);
        dashboardpage.add(lbliconicsssimpledesc);
        dashboardpage.add(lblsubheadsimple);
        dashboardpage.add(lblsimpleembed);
        dashboardpage.add(embedCubeo);
        dashboardpage.add(lblsimpleembedcode);
        dashboardpage.add(lblsubheadbutton);
        dashboardpage.add(lblmoreembed);
        dashboardpage.add(btnembedcubeobutton);
        dashboardpage.add(lblbuttonembedcode);
        dashboardpage.add(lblsubheaderFavs);
        dashboardpage.add(dashboardiconflow);

        // Second page marker  
        var overviewscrollstackpage = new qx.ui.container.Scroll().set({
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 0]
        });
        overviewscrollstackpage.add(overviewpage);
        var lblfluentuiheader = new qx.ui.basic.Label("Fluent UI Web Icons (SVG)").set({
          font: "control-header"
        });

        //simple description
        var lblfluentsimpledesc = new qx.ui.basic.Label("Microsoft's Fluent UI web icons: <b><a href='https://react.fluentui.dev/?path=/docs/icons-overview--default' target='_blank'>Fluent UI Web Icons</a></b> for the full list of available icons.").set({
          rich: true,
          wrap: true
        });

        // Basic usage
        var lblsubheadfuisimple = new qx.ui.basic.Label("Basic usage:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblfuisimpleembed = new qx.ui.basic.Label("Here, at its most <u>basic</u>, is a lone Embed object, sized 40 x 40, and colored <span style='color: blue;'>blue</span>:").set({
          rich: true,
          wrap: true
        });
        var embedfuiairplanetakeoffalone = new ville.embed.fluent.AirplaneTakeOff(40, "blue");
        var lblsimplefuiembedcode = new qx.ui.basic.Label("var <span style='color:green;'>fuiairplanetakeoff</span> = <span style='color:blue;'>new</span> <span style='color:green;'>ville.embed.fluent.AirplaneTakeOff</span>(40, \"blue\"); //  Behind the scenes, the object's constructor sets initial values using - setWidth(size) setHeight(size) and setTextColor(color) ").set({
          rich: true,
          wrap: true,
          font: "monospace",
          backgroundColor: "#f2f2f2",
          padding: 6
        });

        // Use in a Button
        var lblsubheadfuibutton = new qx.ui.basic.Label("Use in another widget:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblmorefuiembed = new qx.ui.basic.Label("To use the new widget in a Button <b>(qx.ui.form.Button)</b>, you need to first enhance the Button's underlying Atom <b>(qx.ui.basic.Atom)</b>. Once enhanced, add the icon object to the Atom based control:").set({
          rich: true,
          wrap: true
        });
        var embedfuiairplanetakeoff = new ville.embed.fluent.AirplaneTakeOff(30, "blue");
        var btnembedfuiairplanebutton = new qx.ui.form.Button('Click Me').set({
          appearance: "testbutton",
          embed: embedfuiairplanetakeoff,
          allowGrowX: false,
          padding: [10, 14],
          gap: 10,
          alignX: "left",
          alignY: "middle"
        });
        var lblbuttonfuiembedcode = new qx.ui.basic.Label("<span style='color:green;'>/* Include the Embed Mixin before creating the Button */</span><br>qx.Class.include(<span style='color:green;'>qx.ui.basic.Atom, ville.embed.MEmbed</span>);<br><span style='color:blue;'>new</span> <span style='color:green;'>qx.ui.form.Button(</span><span style='color:maroon;'>'Click Me'</span>).set({ embed : <span style='color:green;'>fuiairplanetakeoff</span> });").set({
          rich: true,
          wrap: true,
          font: "monospace",
          backgroundColor: "#f2f2f2",
          padding: 6
        });
        btnembedfuiairplanebutton.addListener("mouseover", function (e) {
          var icondom = embedfuiairplanetakeoff.getContentElement().getDomElement();
          qx.bom.element.AnimationCss.animate(icondom, animationGrow, undefined);
        });
        btnembedfuiairplanebutton.addListener("mouseout", function (e) {
          var icondom = embedfuiairplanetakeoff.getContentElement().getDomElement();
          qx.bom.element.AnimationCss.animateReverse(icondom, animationGrow, undefined);
        });

        // Some of my Favorite Icons
        var lblsubheaderfuiFavs = new qx.ui.basic.Label("2,479 icons available:").set({
          font: "headeratom",
          marginTop: 40
        });
        var fuiiconflow = new qx.ui.container.Composite();
        var fuiiconflowlayout = new qx.ui.layout.Flow(16, 20, "left");
        fuiiconflow.setLayout(fuiiconflowlayout);

        // common props
        var svgsize = 40;
        var atmprops = {
          iconPosition: "top",
          appearance: "icss-atom"
        };
        var arrembeds = [];

        // php generated
        var emdAccessTime = new ville.embed.fluent.AccessTime(svgsize, null, null, "AccessTime");
        arrembeds.push(emdAccessTime);
        var emdAccessibility = new ville.embed.fluent.Accessibility(svgsize, null, null, "Accessibility");
        arrembeds.push(emdAccessibility);
        var emdAccessibilityCheckmark = new ville.embed.fluent.AccessibilityCheckmark(svgsize, null, null, "AccessibilityCheckmark");
        arrembeds.push(emdAccessibilityCheckmark);
        var emdAccessibilityError = new ville.embed.fluent.AccessibilityError(svgsize, null, null, "AccessibilityError");
        arrembeds.push(emdAccessibilityError);
        var emdAccessibilityQuestionMark = new ville.embed.fluent.AccessibilityQuestionMark(svgsize, null, null, "AccessibilityQuestionMark");
        arrembeds.push(emdAccessibilityQuestionMark);
        var emdAdd = new ville.embed.fluent.Add(svgsize, null, null, "Add");
        arrembeds.push(emdAdd);
        var emdAddCircle = new ville.embed.fluent.AddCircle(svgsize, null, null, "AddCircle");
        arrembeds.push(emdAddCircle);
        var emdAddSquare = new ville.embed.fluent.AddSquare(svgsize, null, null, "AddSquare");
        arrembeds.push(emdAddSquare);
        var emdAddSquareMultiple = new ville.embed.fluent.AddSquareMultiple(svgsize, null, null, "AddSquareMultiple");
        arrembeds.push(emdAddSquareMultiple);
        var emdAddSubtractCircle = new ville.embed.fluent.AddSubtractCircle(svgsize, null, null, "AddSubtractCircle");
        arrembeds.push(emdAddSubtractCircle);
        var emdAirplane = new ville.embed.fluent.Airplane(svgsize, null, null, "Airplane");
        arrembeds.push(emdAirplane);
        var emdAirplaneLanding = new ville.embed.fluent.AirplaneLanding(svgsize, null, null, "AirplaneLanding");
        arrembeds.push(emdAirplaneLanding);
        var emdAirplaneTakeOff = new ville.embed.fluent.AirplaneTakeOff(svgsize, null, null, "AirplaneTakeOff");
        arrembeds.push(emdAirplaneTakeOff);
        var emdAlbum = new ville.embed.fluent.Album(svgsize, null, null, "Album");
        arrembeds.push(emdAlbum);
        var emdAlbumAdd = new ville.embed.fluent.AlbumAdd(svgsize, null, null, "AlbumAdd");
        arrembeds.push(emdAlbumAdd);
        var emdAlert = new ville.embed.fluent.Alert(svgsize, null, null, "Alert");
        arrembeds.push(emdAlert);
        var emdAlertBadge = new ville.embed.fluent.AlertBadge(svgsize, null, null, "AlertBadge");
        arrembeds.push(emdAlertBadge);
        var emdAlertOff = new ville.embed.fluent.AlertOff(svgsize, null, null, "AlertOff");
        arrembeds.push(emdAlertOff);
        var emdAlertOn = new ville.embed.fluent.AlertOn(svgsize, null, null, "AlertOn");
        arrembeds.push(emdAlertOn);
        var emdAlertSnooze = new ville.embed.fluent.AlertSnooze(svgsize, null, null, "AlertSnooze");
        arrembeds.push(emdAlertSnooze);
        var emdAlertUrgent = new ville.embed.fluent.AlertUrgent(svgsize, null, null, "AlertUrgent");
        arrembeds.push(emdAlertUrgent);
        var emdAlignBottom = new ville.embed.fluent.AlignBottom(svgsize, null, null, "AlignBottom");
        arrembeds.push(emdAlignBottom);
        var emdAlignCenterHorizontal = new ville.embed.fluent.AlignCenterHorizontal(svgsize, null, null, "AlignCenterHorizontal");
        arrembeds.push(emdAlignCenterHorizontal);
        var emdAlignCenterVertical = new ville.embed.fluent.AlignCenterVertical(svgsize, null, null, "AlignCenterVertical");
        arrembeds.push(emdAlignCenterVertical);
        var emdAlignEndHorizontal = new ville.embed.fluent.AlignEndHorizontal(svgsize, null, null, "AlignEndHorizontal");
        arrembeds.push(emdAlignEndHorizontal);
        var emdAlignEndVertical = new ville.embed.fluent.AlignEndVertical(svgsize, null, null, "AlignEndVertical");
        arrembeds.push(emdAlignEndVertical);
        var emdAlignLeft = new ville.embed.fluent.AlignLeft(svgsize, null, null, "AlignLeft");
        arrembeds.push(emdAlignLeft);
        var emdAlignRight = new ville.embed.fluent.AlignRight(svgsize, null, null, "AlignRight");
        arrembeds.push(emdAlignRight);
        var emdAlignSpaceAroundHorizontal = new ville.embed.fluent.AlignSpaceAroundHorizontal(svgsize, null, null, "AlignSpaceAroundHorizontal");
        arrembeds.push(emdAlignSpaceAroundHorizontal);
        var emdAlignSpaceAroundVertical = new ville.embed.fluent.AlignSpaceAroundVertical(svgsize, null, null, "AlignSpaceAroundVertical");
        arrembeds.push(emdAlignSpaceAroundVertical);
        var emdAlignSpaceBetweenHorizontal = new ville.embed.fluent.AlignSpaceBetweenHorizontal(svgsize, null, null, "AlignSpaceBetweenHorizontal");
        arrembeds.push(emdAlignSpaceBetweenHorizontal);
        var emdAlignSpaceBetweenVertical = new ville.embed.fluent.AlignSpaceBetweenVertical(svgsize, null, null, "AlignSpaceBetweenVertical");
        arrembeds.push(emdAlignSpaceBetweenVertical);
        var emdAlignSpaceEvenlyHorizontal = new ville.embed.fluent.AlignSpaceEvenlyHorizontal(svgsize, null, null, "AlignSpaceEvenlyHorizontal");
        arrembeds.push(emdAlignSpaceEvenlyHorizontal);
        var emdAlignSpaceEvenlyVertical = new ville.embed.fluent.AlignSpaceEvenlyVertical(svgsize, null, null, "AlignSpaceEvenlyVertical");
        arrembeds.push(emdAlignSpaceEvenlyVertical);
        var emdAlignSpaceFitVertical = new ville.embed.fluent.AlignSpaceFitVertical(svgsize, null, null, "AlignSpaceFitVertical");
        arrembeds.push(emdAlignSpaceFitVertical);
        var emdAlignStartHorizontal = new ville.embed.fluent.AlignStartHorizontal(svgsize, null, null, "AlignStartHorizontal");
        arrembeds.push(emdAlignStartHorizontal);
        var emdAlignStartVertical = new ville.embed.fluent.AlignStartVertical(svgsize, null, null, "AlignStartVertical");
        arrembeds.push(emdAlignStartVertical);
        var emdAlignStraighten = new ville.embed.fluent.AlignStraighten(svgsize, null, null, "AlignStraighten");
        arrembeds.push(emdAlignStraighten);
        var emdAlignStretchHorizontal = new ville.embed.fluent.AlignStretchHorizontal(svgsize, null, null, "AlignStretchHorizontal");
        arrembeds.push(emdAlignStretchHorizontal);
        var emdAlignStretchVertical = new ville.embed.fluent.AlignStretchVertical(svgsize, null, null, "AlignStretchVertical");
        arrembeds.push(emdAlignStretchVertical);
        var emdAlignTop = new ville.embed.fluent.AlignTop(svgsize, null, null, "AlignTop");
        arrembeds.push(emdAlignTop);
        var emdAnimalCat = new ville.embed.fluent.AnimalCat(svgsize, null, null, "AnimalCat");
        arrembeds.push(emdAnimalCat);
        var emdAnimalDog = new ville.embed.fluent.AnimalDog(svgsize, null, null, "AnimalDog");
        arrembeds.push(emdAnimalDog);
        var emdAnimalRabbit = new ville.embed.fluent.AnimalRabbit(svgsize, null, null, "AnimalRabbit");
        arrembeds.push(emdAnimalRabbit);
        var emdAnimalRabbitOff = new ville.embed.fluent.AnimalRabbitOff(svgsize, null, null, "AnimalRabbitOff");
        arrembeds.push(emdAnimalRabbitOff);
        var emdAnimalTurtle = new ville.embed.fluent.AnimalTurtle(svgsize, null, null, "AnimalTurtle");
        arrembeds.push(emdAnimalTurtle);
        var emdAppFolder = new ville.embed.fluent.AppFolder(svgsize, null, null, "AppFolder");
        arrembeds.push(emdAppFolder);
        var emdAppGeneric = new ville.embed.fluent.AppGeneric(svgsize, null, null, "AppGeneric");
        arrembeds.push(emdAppGeneric);
        var emdAppRecent = new ville.embed.fluent.AppRecent(svgsize, null, null, "AppRecent");
        arrembeds.push(emdAppRecent);
        var emdAppTitle = new ville.embed.fluent.AppTitle(svgsize, null, null, "AppTitle");
        arrembeds.push(emdAppTitle);
        var emdApprovalsApp = new ville.embed.fluent.ApprovalsApp(svgsize, null, null, "ApprovalsApp");
        arrembeds.push(emdApprovalsApp);
        var emdApps = new ville.embed.fluent.Apps(svgsize, null, null, "Apps");
        arrembeds.push(emdApps);
        var emdAppsAddIn = new ville.embed.fluent.AppsAddIn(svgsize, null, null, "AppsAddIn");
        arrembeds.push(emdAppsAddIn);
        var emdAppsList = new ville.embed.fluent.AppsList(svgsize, null, null, "AppsList");
        arrembeds.push(emdAppsList);
        var emdAppsListDetail = new ville.embed.fluent.AppsListDetail(svgsize, null, null, "AppsListDetail");
        arrembeds.push(emdAppsListDetail);
        var emdAppsSettings = new ville.embed.fluent.AppsSettings(svgsize, null, null, "AppsSettings");
        arrembeds.push(emdAppsSettings);
        var emdAppsShield = new ville.embed.fluent.AppsShield(svgsize, null, null, "AppsShield");
        arrembeds.push(emdAppsShield);
        var emdArchive = new ville.embed.fluent.Archive(svgsize, null, null, "Archive");
        arrembeds.push(emdArchive);
        var emdArchiveArrowBack = new ville.embed.fluent.ArchiveArrowBack(svgsize, null, null, "ArchiveArrowBack");
        arrembeds.push(emdArchiveArrowBack);
        var emdArchiveMultiple = new ville.embed.fluent.ArchiveMultiple(svgsize, null, null, "ArchiveMultiple");
        arrembeds.push(emdArchiveMultiple);
        var emdArchiveSettings = new ville.embed.fluent.ArchiveSettings(svgsize, null, null, "ArchiveSettings");
        arrembeds.push(emdArchiveSettings);
        var emdArrowAutofitContent = new ville.embed.fluent.ArrowAutofitContent(svgsize, null, null, "ArrowAutofitContent");
        arrembeds.push(emdArrowAutofitContent);
        var emdArrowAutofitDown = new ville.embed.fluent.ArrowAutofitDown(svgsize, null, null, "ArrowAutofitDown");
        arrembeds.push(emdArrowAutofitDown);
        var emdArrowAutofitHeight = new ville.embed.fluent.ArrowAutofitHeight(svgsize, null, null, "ArrowAutofitHeight");
        arrembeds.push(emdArrowAutofitHeight);
        var emdArrowAutofitHeightDotted = new ville.embed.fluent.ArrowAutofitHeightDotted(svgsize, null, null, "ArrowAutofitHeightDotted");
        arrembeds.push(emdArrowAutofitHeightDotted);
        var emdArrowAutofitHeightIn = new ville.embed.fluent.ArrowAutofitHeightIn(svgsize, null, null, "ArrowAutofitHeightIn");
        arrembeds.push(emdArrowAutofitHeightIn);
        var emdArrowAutofitUp = new ville.embed.fluent.ArrowAutofitUp(svgsize, null, null, "ArrowAutofitUp");
        arrembeds.push(emdArrowAutofitUp);
        var emdArrowAutofitWidth = new ville.embed.fluent.ArrowAutofitWidth(svgsize, null, null, "ArrowAutofitWidth");
        arrembeds.push(emdArrowAutofitWidth);
        var emdArrowAutofitWidthDotted = new ville.embed.fluent.ArrowAutofitWidthDotted(svgsize, null, null, "ArrowAutofitWidthDotted");
        arrembeds.push(emdArrowAutofitWidthDotted);
        var emdArrowBetweenDown = new ville.embed.fluent.ArrowBetweenDown(svgsize, null, null, "ArrowBetweenDown");
        arrembeds.push(emdArrowBetweenDown);
        var emdArrowBetweenUp = new ville.embed.fluent.ArrowBetweenUp(svgsize, null, null, "ArrowBetweenUp");
        arrembeds.push(emdArrowBetweenUp);
        var emdArrowBidirectionalLeftRight = new ville.embed.fluent.ArrowBidirectionalLeftRight(svgsize, null, null, "ArrowBidirectionalLeftRight");
        arrembeds.push(emdArrowBidirectionalLeftRight);
        var emdArrowBidirectionalUpDown = new ville.embed.fluent.ArrowBidirectionalUpDown(svgsize, null, null, "ArrowBidirectionalUpDown");
        arrembeds.push(emdArrowBidirectionalUpDown);
        var emdArrowBounce = new ville.embed.fluent.ArrowBounce(svgsize, null, null, "ArrowBounce");
        arrembeds.push(emdArrowBounce);
        var emdArrowCircleDown = new ville.embed.fluent.ArrowCircleDown(svgsize, null, null, "ArrowCircleDown");
        arrembeds.push(emdArrowCircleDown);
        var emdArrowCircleDownDouble = new ville.embed.fluent.ArrowCircleDownDouble(svgsize, null, null, "ArrowCircleDownDouble");
        arrembeds.push(emdArrowCircleDownDouble);
        var emdArrowCircleDownRight = new ville.embed.fluent.ArrowCircleDownRight(svgsize, null, null, "ArrowCircleDownRight");
        arrembeds.push(emdArrowCircleDownRight);
        var emdArrowCircleDownSplit = new ville.embed.fluent.ArrowCircleDownSplit(svgsize, null, null, "ArrowCircleDownSplit");
        arrembeds.push(emdArrowCircleDownSplit);
        var emdArrowCircleDownUp = new ville.embed.fluent.ArrowCircleDownUp(svgsize, null, null, "ArrowCircleDownUp");
        arrembeds.push(emdArrowCircleDownUp);
        var emdArrowCircleLeft = new ville.embed.fluent.ArrowCircleLeft(svgsize, null, null, "ArrowCircleLeft");
        arrembeds.push(emdArrowCircleLeft);
        var emdArrowCircleRight = new ville.embed.fluent.ArrowCircleRight(svgsize, null, null, "ArrowCircleRight");
        arrembeds.push(emdArrowCircleRight);
        var emdArrowCircleUp = new ville.embed.fluent.ArrowCircleUp(svgsize, null, null, "ArrowCircleUp");
        arrembeds.push(emdArrowCircleUp);
        var emdArrowCircleUpLeft = new ville.embed.fluent.ArrowCircleUpLeft(svgsize, null, null, "ArrowCircleUpLeft");
        arrembeds.push(emdArrowCircleUpLeft);
        var emdArrowCircleUpRight = new ville.embed.fluent.ArrowCircleUpRight(svgsize, null, null, "ArrowCircleUpRight");
        arrembeds.push(emdArrowCircleUpRight);
        var emdArrowClockwise = new ville.embed.fluent.ArrowClockwise(svgsize, null, null, "ArrowClockwise");
        arrembeds.push(emdArrowClockwise);
        var emdArrowClockwiseDashes = new ville.embed.fluent.ArrowClockwiseDashes(svgsize, null, null, "ArrowClockwiseDashes");
        arrembeds.push(emdArrowClockwiseDashes);
        var emdArrowCollapseAll = new ville.embed.fluent.ArrowCollapseAll(svgsize, null, null, "ArrowCollapseAll");
        arrembeds.push(emdArrowCollapseAll);
        var emdArrowCounterclockwise = new ville.embed.fluent.ArrowCounterclockwise(svgsize, null, null, "ArrowCounterclockwise");
        arrembeds.push(emdArrowCounterclockwise);
        var emdArrowCounterclockwiseDashes = new ville.embed.fluent.ArrowCounterclockwiseDashes(svgsize, null, null, "ArrowCounterclockwiseDashes");
        arrembeds.push(emdArrowCounterclockwiseDashes);
        var emdArrowCurveDownLeft = new ville.embed.fluent.ArrowCurveDownLeft(svgsize, null, null, "ArrowCurveDownLeft");
        arrembeds.push(emdArrowCurveDownLeft);
        var emdArrowCurveDownRight = new ville.embed.fluent.ArrowCurveDownRight(svgsize, null, null, "ArrowCurveDownRight");
        arrembeds.push(emdArrowCurveDownRight);
        var emdArrowCurveUpLeft = new ville.embed.fluent.ArrowCurveUpLeft(svgsize, null, null, "ArrowCurveUpLeft");
        arrembeds.push(emdArrowCurveUpLeft);
        var emdArrowCurveUpRight = new ville.embed.fluent.ArrowCurveUpRight(svgsize, null, null, "ArrowCurveUpRight");
        arrembeds.push(emdArrowCurveUpRight);
        var emdArrowDown = new ville.embed.fluent.ArrowDown(svgsize, null, null, "ArrowDown");
        arrembeds.push(emdArrowDown);
        var emdArrowDownExclamation = new ville.embed.fluent.ArrowDownExclamation(svgsize, null, null, "ArrowDownExclamation");
        arrembeds.push(emdArrowDownExclamation);
        var emdArrowDownLeft = new ville.embed.fluent.ArrowDownLeft(svgsize, null, null, "ArrowDownLeft");
        arrembeds.push(emdArrowDownLeft);
        var emdArrowDownload = new ville.embed.fluent.ArrowDownload(svgsize, null, null, "ArrowDownload");
        arrembeds.push(emdArrowDownload);
        var emdArrowDownloadOff = new ville.embed.fluent.ArrowDownloadOff(svgsize, null, null, "ArrowDownloadOff");
        arrembeds.push(emdArrowDownloadOff);
        var emdArrowEject = new ville.embed.fluent.ArrowEject(svgsize, null, null, "ArrowEject");
        arrembeds.push(emdArrowEject);
        var emdArrowEnter = new ville.embed.fluent.ArrowEnter(svgsize, null, null, "ArrowEnter");
        arrembeds.push(emdArrowEnter);
        var emdArrowEnterLeft = new ville.embed.fluent.ArrowEnterLeft(svgsize, null, null, "ArrowEnterLeft");
        arrembeds.push(emdArrowEnterLeft);
        var emdArrowEnterUp = new ville.embed.fluent.ArrowEnterUp(svgsize, null, null, "ArrowEnterUp");
        arrembeds.push(emdArrowEnterUp);
        var emdArrowExit = new ville.embed.fluent.ArrowExit(svgsize, null, null, "ArrowExit");
        arrembeds.push(emdArrowExit);
        var emdArrowExpand = new ville.embed.fluent.ArrowExpand(svgsize, null, null, "ArrowExpand");
        arrembeds.push(emdArrowExpand);
        var emdArrowExport = new ville.embed.fluent.ArrowExport(svgsize, null, null, "ArrowExport");
        arrembeds.push(emdArrowExport);
        var emdArrowExportLtr = new ville.embed.fluent.ArrowExportLtr(svgsize, null, null, "ArrowExportLtr");
        arrembeds.push(emdArrowExportLtr);
        var emdArrowExportRtl = new ville.embed.fluent.ArrowExportRtl(svgsize, null, null, "ArrowExportRtl");
        arrembeds.push(emdArrowExportRtl);
        var emdArrowExportUp = new ville.embed.fluent.ArrowExportUp(svgsize, null, null, "ArrowExportUp");
        arrembeds.push(emdArrowExportUp);
        var emdArrowFit = new ville.embed.fluent.ArrowFit(svgsize, null, null, "ArrowFit");
        arrembeds.push(emdArrowFit);
        var emdArrowFitIn = new ville.embed.fluent.ArrowFitIn(svgsize, null, null, "ArrowFitIn");
        arrembeds.push(emdArrowFitIn);
        var emdArrowFlowDiagonalUpRight = new ville.embed.fluent.ArrowFlowDiagonalUpRight(svgsize, null, null, "ArrowFlowDiagonalUpRight");
        arrembeds.push(emdArrowFlowDiagonalUpRight);
        var emdArrowFlowUpRight = new ville.embed.fluent.ArrowFlowUpRight(svgsize, null, null, "ArrowFlowUpRight");
        arrembeds.push(emdArrowFlowUpRight);
        var emdArrowFlowUpRightRectangleMultiple = new ville.embed.fluent.ArrowFlowUpRightRectangleMultiple(svgsize, null, null, "ArrowFlowUpRightRectangleMultiple");
        arrembeds.push(emdArrowFlowUpRightRectangleMultiple);
        var emdArrowForward = new ville.embed.fluent.ArrowForward(svgsize, null, null, "ArrowForward");
        arrembeds.push(emdArrowForward);
        var emdArrowForwardDownLightning = new ville.embed.fluent.ArrowForwardDownLightning(svgsize, null, null, "ArrowForwardDownLightning");
        arrembeds.push(emdArrowForwardDownLightning);
        var emdArrowForwardDownPerson = new ville.embed.fluent.ArrowForwardDownPerson(svgsize, null, null, "ArrowForwardDownPerson");
        arrembeds.push(emdArrowForwardDownPerson);
        var emdArrowHookDownLeft = new ville.embed.fluent.ArrowHookDownLeft(svgsize, null, null, "ArrowHookDownLeft");
        arrembeds.push(emdArrowHookDownLeft);
        var emdArrowHookDownRight = new ville.embed.fluent.ArrowHookDownRight(svgsize, null, null, "ArrowHookDownRight");
        arrembeds.push(emdArrowHookDownRight);
        var emdArrowHookUpLeft = new ville.embed.fluent.ArrowHookUpLeft(svgsize, null, null, "ArrowHookUpLeft");
        arrembeds.push(emdArrowHookUpLeft);
        var emdArrowHookUpRight = new ville.embed.fluent.ArrowHookUpRight(svgsize, null, null, "ArrowHookUpRight");
        arrembeds.push(emdArrowHookUpRight);
        var emdArrowImport = new ville.embed.fluent.ArrowImport(svgsize, null, null, "ArrowImport");
        arrembeds.push(emdArrowImport);
        var emdArrowJoin = new ville.embed.fluent.ArrowJoin(svgsize, null, null, "ArrowJoin");
        arrembeds.push(emdArrowJoin);
        var emdArrowLeft = new ville.embed.fluent.ArrowLeft(svgsize, null, null, "ArrowLeft");
        arrembeds.push(emdArrowLeft);
        var emdArrowMaximize = new ville.embed.fluent.ArrowMaximize(svgsize, null, null, "ArrowMaximize");
        arrembeds.push(emdArrowMaximize);
        var emdArrowMaximizeVertical = new ville.embed.fluent.ArrowMaximizeVertical(svgsize, null, null, "ArrowMaximizeVertical");
        arrembeds.push(emdArrowMaximizeVertical);
        var emdArrowMinimize = new ville.embed.fluent.ArrowMinimize(svgsize, null, null, "ArrowMinimize");
        arrembeds.push(emdArrowMinimize);
        var emdArrowMinimizeVertical = new ville.embed.fluent.ArrowMinimizeVertical(svgsize, null, null, "ArrowMinimizeVertical");
        arrembeds.push(emdArrowMinimizeVertical);
        var emdArrowMove = new ville.embed.fluent.ArrowMove(svgsize, null, null, "ArrowMove");
        arrembeds.push(emdArrowMove);
        var emdArrowMoveInward = new ville.embed.fluent.ArrowMoveInward(svgsize, null, null, "ArrowMoveInward");
        arrembeds.push(emdArrowMoveInward);
        var emdArrowNext = new ville.embed.fluent.ArrowNext(svgsize, null, null, "ArrowNext");
        arrembeds.push(emdArrowNext);
        var emdArrowOutlineDownLeft = new ville.embed.fluent.ArrowOutlineDownLeft(svgsize, null, null, "ArrowOutlineDownLeft");
        arrembeds.push(emdArrowOutlineDownLeft);
        var emdArrowOutlineUpRight = new ville.embed.fluent.ArrowOutlineUpRight(svgsize, null, null, "ArrowOutlineUpRight");
        arrembeds.push(emdArrowOutlineUpRight);
        var emdArrowParagraph = new ville.embed.fluent.ArrowParagraph(svgsize, null, null, "ArrowParagraph");
        arrembeds.push(emdArrowParagraph);
        var emdArrowPrevious = new ville.embed.fluent.ArrowPrevious(svgsize, null, null, "ArrowPrevious");
        arrembeds.push(emdArrowPrevious);
        var emdArrowRedo = new ville.embed.fluent.ArrowRedo(svgsize, null, null, "ArrowRedo");
        arrembeds.push(emdArrowRedo);
        var emdArrowRepeat1 = new ville.embed.fluent.ArrowRepeat1(svgsize, null, null, "ArrowRepeat1");
        arrembeds.push(emdArrowRepeat1);
        var emdArrowRepeatAll = new ville.embed.fluent.ArrowRepeatAll(svgsize, null, null, "ArrowRepeatAll");
        arrembeds.push(emdArrowRepeatAll);
        var emdArrowRepeatAllOff = new ville.embed.fluent.ArrowRepeatAllOff(svgsize, null, null, "ArrowRepeatAllOff");
        arrembeds.push(emdArrowRepeatAllOff);
        var emdArrowReply = new ville.embed.fluent.ArrowReply(svgsize, null, null, "ArrowReply");
        arrembeds.push(emdArrowReply);
        var emdArrowReplyAll = new ville.embed.fluent.ArrowReplyAll(svgsize, null, null, "ArrowReplyAll");
        arrembeds.push(emdArrowReplyAll);
        var emdArrowReplyDown = new ville.embed.fluent.ArrowReplyDown(svgsize, null, null, "ArrowReplyDown");
        arrembeds.push(emdArrowReplyDown);
        var emdArrowReset = new ville.embed.fluent.ArrowReset(svgsize, null, null, "ArrowReset");
        arrembeds.push(emdArrowReset);
        var emdArrowRight = new ville.embed.fluent.ArrowRight(svgsize, null, null, "ArrowRight");
        arrembeds.push(emdArrowRight);
        var emdArrowRotateClockwise = new ville.embed.fluent.ArrowRotateClockwise(svgsize, null, null, "ArrowRotateClockwise");
        arrembeds.push(emdArrowRotateClockwise);
        var emdArrowRotateCounterclockwise = new ville.embed.fluent.ArrowRotateCounterclockwise(svgsize, null, null, "ArrowRotateCounterclockwise");
        arrembeds.push(emdArrowRotateCounterclockwise);
        var emdArrowRouting = new ville.embed.fluent.ArrowRouting(svgsize, null, null, "ArrowRouting");
        arrembeds.push(emdArrowRouting);
        var emdArrowRoutingRectangleMultiple = new ville.embed.fluent.ArrowRoutingRectangleMultiple(svgsize, null, null, "ArrowRoutingRectangleMultiple");
        arrembeds.push(emdArrowRoutingRectangleMultiple);
        var emdArrowShuffle = new ville.embed.fluent.ArrowShuffle(svgsize, null, null, "ArrowShuffle");
        arrembeds.push(emdArrowShuffle);
        var emdArrowShuffleOff = new ville.embed.fluent.ArrowShuffleOff(svgsize, null, null, "ArrowShuffleOff");
        arrembeds.push(emdArrowShuffleOff);
        var emdArrowSort = new ville.embed.fluent.ArrowSort(svgsize, null, null, "ArrowSort");
        arrembeds.push(emdArrowSort);
        var emdArrowSortDown = new ville.embed.fluent.ArrowSortDown(svgsize, null, null, "ArrowSortDown");
        arrembeds.push(emdArrowSortDown);
        var emdArrowSortDownLines = new ville.embed.fluent.ArrowSortDownLines(svgsize, null, null, "ArrowSortDownLines");
        arrembeds.push(emdArrowSortDownLines);
        var emdArrowSortUp = new ville.embed.fluent.ArrowSortUp(svgsize, null, null, "ArrowSortUp");
        arrembeds.push(emdArrowSortUp);
        var emdArrowSortUpLines = new ville.embed.fluent.ArrowSortUpLines(svgsize, null, null, "ArrowSortUpLines");
        arrembeds.push(emdArrowSortUpLines);
        var emdArrowSplit = new ville.embed.fluent.ArrowSplit(svgsize, null, null, "ArrowSplit");
        arrembeds.push(emdArrowSplit);
        var emdArrowSprint = new ville.embed.fluent.ArrowSprint(svgsize, null, null, "ArrowSprint");
        arrembeds.push(emdArrowSprint);
        var emdArrowSquareDown = new ville.embed.fluent.ArrowSquareDown(svgsize, null, null, "ArrowSquareDown");
        arrembeds.push(emdArrowSquareDown);
        var emdArrowSquareUpRight = new ville.embed.fluent.ArrowSquareUpRight(svgsize, null, null, "ArrowSquareUpRight");
        arrembeds.push(emdArrowSquareUpRight);
        var emdArrowStepBack = new ville.embed.fluent.ArrowStepBack(svgsize, null, null, "ArrowStepBack");
        arrembeds.push(emdArrowStepBack);
        var emdArrowStepIn = new ville.embed.fluent.ArrowStepIn(svgsize, null, null, "ArrowStepIn");
        arrembeds.push(emdArrowStepIn);
        var emdArrowStepInDiagonalDownLeft = new ville.embed.fluent.ArrowStepInDiagonalDownLeft(svgsize, null, null, "ArrowStepInDiagonalDownLeft");
        arrembeds.push(emdArrowStepInDiagonalDownLeft);
        var emdArrowStepInLeft = new ville.embed.fluent.ArrowStepInLeft(svgsize, null, null, "ArrowStepInLeft");
        arrembeds.push(emdArrowStepInLeft);
        var emdArrowStepInRight = new ville.embed.fluent.ArrowStepInRight(svgsize, null, null, "ArrowStepInRight");
        arrembeds.push(emdArrowStepInRight);
        var emdArrowStepOut = new ville.embed.fluent.ArrowStepOut(svgsize, null, null, "ArrowStepOut");
        arrembeds.push(emdArrowStepOut);
        var emdArrowStepOver = new ville.embed.fluent.ArrowStepOver(svgsize, null, null, "ArrowStepOver");
        arrembeds.push(emdArrowStepOver);
        var emdArrowSwap = new ville.embed.fluent.ArrowSwap(svgsize, null, null, "ArrowSwap");
        arrembeds.push(emdArrowSwap);
        var emdArrowSync = new ville.embed.fluent.ArrowSync(svgsize, null, null, "ArrowSync");
        arrembeds.push(emdArrowSync);
        var emdArrowSyncCheckmark = new ville.embed.fluent.ArrowSyncCheckmark(svgsize, null, null, "ArrowSyncCheckmark");
        arrembeds.push(emdArrowSyncCheckmark);
        var emdArrowSyncCircle = new ville.embed.fluent.ArrowSyncCircle(svgsize, null, null, "ArrowSyncCircle");
        arrembeds.push(emdArrowSyncCircle);
        var emdArrowSyncDismiss = new ville.embed.fluent.ArrowSyncDismiss(svgsize, null, null, "ArrowSyncDismiss");
        arrembeds.push(emdArrowSyncDismiss);
        var emdArrowSyncOff = new ville.embed.fluent.ArrowSyncOff(svgsize, null, null, "ArrowSyncOff");
        arrembeds.push(emdArrowSyncOff);
        var emdArrowTrending = new ville.embed.fluent.ArrowTrending(svgsize, null, null, "ArrowTrending");
        arrembeds.push(emdArrowTrending);
        var emdArrowTrendingCheckmark = new ville.embed.fluent.ArrowTrendingCheckmark(svgsize, null, null, "ArrowTrendingCheckmark");
        arrembeds.push(emdArrowTrendingCheckmark);
        var emdArrowTrendingDown = new ville.embed.fluent.ArrowTrendingDown(svgsize, null, null, "ArrowTrendingDown");
        arrembeds.push(emdArrowTrendingDown);
        var emdArrowTrendingLines = new ville.embed.fluent.ArrowTrendingLines(svgsize, null, null, "ArrowTrendingLines");
        arrembeds.push(emdArrowTrendingLines);
        var emdArrowTrendingSettings = new ville.embed.fluent.ArrowTrendingSettings(svgsize, null, null, "ArrowTrendingSettings");
        arrembeds.push(emdArrowTrendingSettings);
        var emdArrowTrendingSparkle = new ville.embed.fluent.ArrowTrendingSparkle(svgsize, null, null, "ArrowTrendingSparkle");
        arrembeds.push(emdArrowTrendingSparkle);
        var emdArrowTrendingText = new ville.embed.fluent.ArrowTrendingText(svgsize, null, null, "ArrowTrendingText");
        arrembeds.push(emdArrowTrendingText);
        var emdArrowTrendingWrench = new ville.embed.fluent.ArrowTrendingWrench(svgsize, null, null, "ArrowTrendingWrench");
        arrembeds.push(emdArrowTrendingWrench);
        var emdArrowTurnBidirectionalDownRight = new ville.embed.fluent.ArrowTurnBidirectionalDownRight(svgsize, null, null, "ArrowTurnBidirectionalDownRight");
        arrembeds.push(emdArrowTurnBidirectionalDownRight);
        var emdArrowTurnDownLeft = new ville.embed.fluent.ArrowTurnDownLeft(svgsize, null, null, "ArrowTurnDownLeft");
        arrembeds.push(emdArrowTurnDownLeft);
        var emdArrowTurnDownRight = new ville.embed.fluent.ArrowTurnDownRight(svgsize, null, null, "ArrowTurnDownRight");
        arrembeds.push(emdArrowTurnDownRight);
        var emdArrowTurnDownUp = new ville.embed.fluent.ArrowTurnDownUp(svgsize, null, null, "ArrowTurnDownUp");
        arrembeds.push(emdArrowTurnDownUp);
        var emdArrowTurnLeftDown = new ville.embed.fluent.ArrowTurnLeftDown(svgsize, null, null, "ArrowTurnLeftDown");
        arrembeds.push(emdArrowTurnLeftDown);
        var emdArrowTurnLeftRight = new ville.embed.fluent.ArrowTurnLeftRight(svgsize, null, null, "ArrowTurnLeftRight");
        arrembeds.push(emdArrowTurnLeftRight);
        var emdArrowTurnLeftUp = new ville.embed.fluent.ArrowTurnLeftUp(svgsize, null, null, "ArrowTurnLeftUp");
        arrembeds.push(emdArrowTurnLeftUp);
        var emdArrowTurnRight = new ville.embed.fluent.ArrowTurnRight(svgsize, null, null, "ArrowTurnRight");
        arrembeds.push(emdArrowTurnRight);
        var emdArrowTurnRightDown = new ville.embed.fluent.ArrowTurnRightDown(svgsize, null, null, "ArrowTurnRightDown");
        arrembeds.push(emdArrowTurnRightDown);
        var emdArrowTurnRightLeft = new ville.embed.fluent.ArrowTurnRightLeft(svgsize, null, null, "ArrowTurnRightLeft");
        arrembeds.push(emdArrowTurnRightLeft);
        var emdArrowTurnRightUp = new ville.embed.fluent.ArrowTurnRightUp(svgsize, null, null, "ArrowTurnRightUp");
        arrembeds.push(emdArrowTurnRightUp);
        var emdArrowTurnUpDown = new ville.embed.fluent.ArrowTurnUpDown(svgsize, null, null, "ArrowTurnUpDown");
        arrembeds.push(emdArrowTurnUpDown);
        var emdArrowTurnUpLeft = new ville.embed.fluent.ArrowTurnUpLeft(svgsize, null, null, "ArrowTurnUpLeft");
        arrembeds.push(emdArrowTurnUpLeft);
        var emdArrowUndo = new ville.embed.fluent.ArrowUndo(svgsize, null, null, "ArrowUndo");
        arrembeds.push(emdArrowUndo);
        var emdArrowUp = new ville.embed.fluent.ArrowUp(svgsize, null, null, "ArrowUp");
        arrembeds.push(emdArrowUp);
        var emdArrowUpExclamation = new ville.embed.fluent.ArrowUpExclamation(svgsize, null, null, "ArrowUpExclamation");
        arrembeds.push(emdArrowUpExclamation);
        var emdArrowUpLeft = new ville.embed.fluent.ArrowUpLeft(svgsize, null, null, "ArrowUpLeft");
        arrembeds.push(emdArrowUpLeft);
        var emdArrowUpRight = new ville.embed.fluent.ArrowUpRight(svgsize, null, null, "ArrowUpRight");
        arrembeds.push(emdArrowUpRight);
        var emdArrowUpload = new ville.embed.fluent.ArrowUpload(svgsize, null, null, "ArrowUpload");
        arrembeds.push(emdArrowUpload);
        var emdArrowWrap = new ville.embed.fluent.ArrowWrap(svgsize, null, null, "ArrowWrap");
        arrembeds.push(emdArrowWrap);
        var emdArrowWrapOff = new ville.embed.fluent.ArrowWrapOff(svgsize, null, null, "ArrowWrapOff");
        arrembeds.push(emdArrowWrapOff);
        var emdArrowsBidirectional = new ville.embed.fluent.ArrowsBidirectional(svgsize, null, null, "ArrowsBidirectional");
        arrembeds.push(emdArrowsBidirectional);
        var emdAttach = new ville.embed.fluent.Attach(svgsize, null, null, "Attach");
        arrembeds.push(emdAttach);
        var emdAttachArrowRight = new ville.embed.fluent.AttachArrowRight(svgsize, null, null, "AttachArrowRight");
        arrembeds.push(emdAttachArrowRight);
        var emdAttachText = new ville.embed.fluent.AttachText(svgsize, null, null, "AttachText");
        arrembeds.push(emdAttachText);
        var emdAutoFitHeight = new ville.embed.fluent.AutoFitHeight(svgsize, null, null, "AutoFitHeight");
        arrembeds.push(emdAutoFitHeight);
        var emdAutoFitWidth = new ville.embed.fluent.AutoFitWidth(svgsize, null, null, "AutoFitWidth");
        arrembeds.push(emdAutoFitWidth);
        var emdAutocorrect = new ville.embed.fluent.Autocorrect(svgsize, null, null, "Autocorrect");
        arrembeds.push(emdAutocorrect);
        var emdAutosum = new ville.embed.fluent.Autosum(svgsize, null, null, "Autosum");
        arrembeds.push(emdAutosum);
        var emdBackpack = new ville.embed.fluent.Backpack(svgsize, null, null, "Backpack");
        arrembeds.push(emdBackpack);
        var emdBackpackAdd = new ville.embed.fluent.BackpackAdd(svgsize, null, null, "BackpackAdd");
        arrembeds.push(emdBackpackAdd);
        var emdBackspace = new ville.embed.fluent.Backspace(svgsize, null, null, "Backspace");
        arrembeds.push(emdBackspace);
        var emdBadge = new ville.embed.fluent.Badge(svgsize, null, null, "Badge");
        arrembeds.push(emdBadge);
        var emdBalloon = new ville.embed.fluent.Balloon(svgsize, null, null, "Balloon");
        arrembeds.push(emdBalloon);
        var emdBarcodeScanner = new ville.embed.fluent.BarcodeScanner(svgsize, null, null, "BarcodeScanner");
        arrembeds.push(emdBarcodeScanner);
        var emdBattery0 = new ville.embed.fluent.Battery0(svgsize, null, null, "Battery0");
        arrembeds.push(emdBattery0);
        var emdBattery10 = new ville.embed.fluent.Battery10(svgsize, null, null, "Battery10");
        arrembeds.push(emdBattery10);
        var emdBattery1 = new ville.embed.fluent.Battery1(svgsize, null, null, "Battery1");
        arrembeds.push(emdBattery1);
        var emdBattery2 = new ville.embed.fluent.Battery2(svgsize, null, null, "Battery2");
        arrembeds.push(emdBattery2);
        var emdBattery3 = new ville.embed.fluent.Battery3(svgsize, null, null, "Battery3");
        arrembeds.push(emdBattery3);
        var emdBattery4 = new ville.embed.fluent.Battery4(svgsize, null, null, "Battery4");
        arrembeds.push(emdBattery4);
        var emdBattery5 = new ville.embed.fluent.Battery5(svgsize, null, null, "Battery5");
        arrembeds.push(emdBattery5);
        var emdBattery6 = new ville.embed.fluent.Battery6(svgsize, null, null, "Battery6");
        arrembeds.push(emdBattery6);
        var emdBattery7 = new ville.embed.fluent.Battery7(svgsize, null, null, "Battery7");
        arrembeds.push(emdBattery7);
        var emdBattery8 = new ville.embed.fluent.Battery8(svgsize, null, null, "Battery8");
        arrembeds.push(emdBattery8);
        var emdBattery9 = new ville.embed.fluent.Battery9(svgsize, null, null, "Battery9");
        arrembeds.push(emdBattery9);
        var emdBatteryCharge = new ville.embed.fluent.BatteryCharge(svgsize, null, null, "BatteryCharge");
        arrembeds.push(emdBatteryCharge);
        var emdBatteryCheckmark = new ville.embed.fluent.BatteryCheckmark(svgsize, null, null, "BatteryCheckmark");
        arrembeds.push(emdBatteryCheckmark);
        var emdBatterySaver = new ville.embed.fluent.BatterySaver(svgsize, null, null, "BatterySaver");
        arrembeds.push(emdBatterySaver);
        var emdBatteryWarning = new ville.embed.fluent.BatteryWarning(svgsize, null, null, "BatteryWarning");
        arrembeds.push(emdBatteryWarning);
        var emdBeach = new ville.embed.fluent.Beach(svgsize, null, null, "Beach");
        arrembeds.push(emdBeach);
        var emdBeaker = new ville.embed.fluent.Beaker(svgsize, null, null, "Beaker");
        arrembeds.push(emdBeaker);
        var emdBeakerAdd = new ville.embed.fluent.BeakerAdd(svgsize, null, null, "BeakerAdd");
        arrembeds.push(emdBeakerAdd);
        var emdBeakerDismiss = new ville.embed.fluent.BeakerDismiss(svgsize, null, null, "BeakerDismiss");
        arrembeds.push(emdBeakerDismiss);
        var emdBeakerEdit = new ville.embed.fluent.BeakerEdit(svgsize, null, null, "BeakerEdit");
        arrembeds.push(emdBeakerEdit);
        var emdBeakerOff = new ville.embed.fluent.BeakerOff(svgsize, null, null, "BeakerOff");
        arrembeds.push(emdBeakerOff);
        var emdBeakerSettings = new ville.embed.fluent.BeakerSettings(svgsize, null, null, "BeakerSettings");
        arrembeds.push(emdBeakerSettings);
        var emdBed = new ville.embed.fluent.Bed(svgsize, null, null, "Bed");
        arrembeds.push(emdBed);
        var emdBench = new ville.embed.fluent.Bench(svgsize, null, null, "Bench");
        arrembeds.push(emdBench);
        var emdBezierCurveSquare = new ville.embed.fluent.BezierCurveSquare(svgsize, null, null, "BezierCurveSquare");
        arrembeds.push(emdBezierCurveSquare);
        var emdBinFull = new ville.embed.fluent.BinFull(svgsize, null, null, "BinFull");
        arrembeds.push(emdBinFull);
        var emdBinRecycle = new ville.embed.fluent.BinRecycle(svgsize, null, null, "BinRecycle");
        arrembeds.push(emdBinRecycle);
        var emdBinRecycleFull = new ville.embed.fluent.BinRecycleFull(svgsize, null, null, "BinRecycleFull");
        arrembeds.push(emdBinRecycleFull);
        var emdBinderTriangle = new ville.embed.fluent.BinderTriangle(svgsize, null, null, "BinderTriangle");
        arrembeds.push(emdBinderTriangle);
        var emdBluetooth = new ville.embed.fluent.Bluetooth(svgsize, null, null, "Bluetooth");
        arrembeds.push(emdBluetooth);
        var emdBluetoothConnected = new ville.embed.fluent.BluetoothConnected(svgsize, null, null, "BluetoothConnected");
        arrembeds.push(emdBluetoothConnected);
        var emdBluetoothDisabled = new ville.embed.fluent.BluetoothDisabled(svgsize, null, null, "BluetoothDisabled");
        arrembeds.push(emdBluetoothDisabled);
        var emdBluetoothSearching = new ville.embed.fluent.BluetoothSearching(svgsize, null, null, "BluetoothSearching");
        arrembeds.push(emdBluetoothSearching);
        var emdBlur = new ville.embed.fluent.Blur(svgsize, null, null, "Blur");
        arrembeds.push(emdBlur);
        var emdBoard = new ville.embed.fluent.Board(svgsize, null, null, "Board");
        arrembeds.push(emdBoard);
        var emdBoardGames = new ville.embed.fluent.BoardGames(svgsize, null, null, "BoardGames");
        arrembeds.push(emdBoardGames);
        var emdBoardHeart = new ville.embed.fluent.BoardHeart(svgsize, null, null, "BoardHeart");
        arrembeds.push(emdBoardHeart);
        var emdBoardSplit = new ville.embed.fluent.BoardSplit(svgsize, null, null, "BoardSplit");
        arrembeds.push(emdBoardSplit);
        var emdBook = new ville.embed.fluent.Book(svgsize, null, null, "Book");
        arrembeds.push(emdBook);
        var emdBookAdd = new ville.embed.fluent.BookAdd(svgsize, null, null, "BookAdd");
        arrembeds.push(emdBookAdd);
        var emdBookArrowClockwise = new ville.embed.fluent.BookArrowClockwise(svgsize, null, null, "BookArrowClockwise");
        arrembeds.push(emdBookArrowClockwise);
        var emdBookClock = new ville.embed.fluent.BookClock(svgsize, null, null, "BookClock");
        arrembeds.push(emdBookClock);
        var emdBookCoins = new ville.embed.fluent.BookCoins(svgsize, null, null, "BookCoins");
        arrembeds.push(emdBookCoins);
        var emdBookCompass = new ville.embed.fluent.BookCompass(svgsize, null, null, "BookCompass");
        arrembeds.push(emdBookCompass);
        var emdBookContacts = new ville.embed.fluent.BookContacts(svgsize, null, null, "BookContacts");
        arrembeds.push(emdBookContacts);
        var emdBookDatabase = new ville.embed.fluent.BookDatabase(svgsize, null, null, "BookDatabase");
        arrembeds.push(emdBookDatabase);
        var emdBookDismiss = new ville.embed.fluent.BookDismiss(svgsize, null, null, "BookDismiss");
        arrembeds.push(emdBookDismiss);
        var emdBookExclamationMark = new ville.embed.fluent.BookExclamationMark(svgsize, null, null, "BookExclamationMark");
        arrembeds.push(emdBookExclamationMark);
        var emdBookGlobe = new ville.embed.fluent.BookGlobe(svgsize, null, null, "BookGlobe");
        arrembeds.push(emdBookGlobe);
        var emdBookInformation = new ville.embed.fluent.BookInformation(svgsize, null, null, "BookInformation");
        arrembeds.push(emdBookInformation);
        var emdBookLetter = new ville.embed.fluent.BookLetter(svgsize, null, null, "BookLetter");
        arrembeds.push(emdBookLetter);
        var emdBookNumber = new ville.embed.fluent.BookNumber(svgsize, null, null, "BookNumber");
        arrembeds.push(emdBookNumber);
        var emdBookOpen = new ville.embed.fluent.BookOpen(svgsize, null, null, "BookOpen");
        arrembeds.push(emdBookOpen);
        var emdBookOpenGlobe = new ville.embed.fluent.BookOpenGlobe(svgsize, null, null, "BookOpenGlobe");
        arrembeds.push(emdBookOpenGlobe);
        var emdBookOpenMicrophone = new ville.embed.fluent.BookOpenMicrophone(svgsize, null, null, "BookOpenMicrophone");
        arrembeds.push(emdBookOpenMicrophone);
        var emdBookPulse = new ville.embed.fluent.BookPulse(svgsize, null, null, "BookPulse");
        arrembeds.push(emdBookPulse);
        var emdBookQuestionMark = new ville.embed.fluent.BookQuestionMark(svgsize, null, null, "BookQuestionMark");
        arrembeds.push(emdBookQuestionMark);
        var emdBookQuestionMarkRtl = new ville.embed.fluent.BookQuestionMarkRtl(svgsize, null, null, "BookQuestionMarkRtl");
        arrembeds.push(emdBookQuestionMarkRtl);
        var emdBookSearch = new ville.embed.fluent.BookSearch(svgsize, null, null, "BookSearch");
        arrembeds.push(emdBookSearch);
        var emdBookStar = new ville.embed.fluent.BookStar(svgsize, null, null, "BookStar");
        arrembeds.push(emdBookStar);
        var emdBookTemplate = new ville.embed.fluent.BookTemplate(svgsize, null, null, "BookTemplate");
        arrembeds.push(emdBookTemplate);
        var emdBookTheta = new ville.embed.fluent.BookTheta(svgsize, null, null, "BookTheta");
        arrembeds.push(emdBookTheta);
        var emdBookToolbox = new ville.embed.fluent.BookToolbox(svgsize, null, null, "BookToolbox");
        arrembeds.push(emdBookToolbox);
        var emdBookmark = new ville.embed.fluent.Bookmark(svgsize, null, null, "Bookmark");
        arrembeds.push(emdBookmark);
        var emdBookmarkAdd = new ville.embed.fluent.BookmarkAdd(svgsize, null, null, "BookmarkAdd");
        arrembeds.push(emdBookmarkAdd);
        var emdBookmarkMultiple = new ville.embed.fluent.BookmarkMultiple(svgsize, null, null, "BookmarkMultiple");
        arrembeds.push(emdBookmarkMultiple);
        var emdBookmarkOff = new ville.embed.fluent.BookmarkOff(svgsize, null, null, "BookmarkOff");
        arrembeds.push(emdBookmarkOff);
        var emdBookmarkSearch = new ville.embed.fluent.BookmarkSearch(svgsize, null, null, "BookmarkSearch");
        arrembeds.push(emdBookmarkSearch);
        var emdBorderAll = new ville.embed.fluent.BorderAll(svgsize, null, null, "BorderAll");
        arrembeds.push(emdBorderAll);
        var emdBorderBottom = new ville.embed.fluent.BorderBottom(svgsize, null, null, "BorderBottom");
        arrembeds.push(emdBorderBottom);
        var emdBorderBottomDouble = new ville.embed.fluent.BorderBottomDouble(svgsize, null, null, "BorderBottomDouble");
        arrembeds.push(emdBorderBottomDouble);
        var emdBorderBottomThick = new ville.embed.fluent.BorderBottomThick(svgsize, null, null, "BorderBottomThick");
        arrembeds.push(emdBorderBottomThick);
        var emdBorderInside = new ville.embed.fluent.BorderInside(svgsize, null, null, "BorderInside");
        arrembeds.push(emdBorderInside);
        var emdBorderLeft = new ville.embed.fluent.BorderLeft(svgsize, null, null, "BorderLeft");
        arrembeds.push(emdBorderLeft);
        var emdBorderLeftRight = new ville.embed.fluent.BorderLeftRight(svgsize, null, null, "BorderLeftRight");
        arrembeds.push(emdBorderLeftRight);
        var emdBorderNone = new ville.embed.fluent.BorderNone(svgsize, null, null, "BorderNone");
        arrembeds.push(emdBorderNone);
        var emdBorderOutside = new ville.embed.fluent.BorderOutside(svgsize, null, null, "BorderOutside");
        arrembeds.push(emdBorderOutside);
        var emdBorderOutsideThick = new ville.embed.fluent.BorderOutsideThick(svgsize, null, null, "BorderOutsideThick");
        arrembeds.push(emdBorderOutsideThick);
        var emdBorderRight = new ville.embed.fluent.BorderRight(svgsize, null, null, "BorderRight");
        arrembeds.push(emdBorderRight);
        var emdBorderTop = new ville.embed.fluent.BorderTop(svgsize, null, null, "BorderTop");
        arrembeds.push(emdBorderTop);
        var emdBorderTopBottom = new ville.embed.fluent.BorderTopBottom(svgsize, null, null, "BorderTopBottom");
        arrembeds.push(emdBorderTopBottom);
        var emdBorderTopBottomDouble = new ville.embed.fluent.BorderTopBottomDouble(svgsize, null, null, "BorderTopBottomDouble");
        arrembeds.push(emdBorderTopBottomDouble);
        var emdBorderTopBottomThick = new ville.embed.fluent.BorderTopBottomThick(svgsize, null, null, "BorderTopBottomThick");
        arrembeds.push(emdBorderTopBottomThick);
        var emdBot = new ville.embed.fluent.Bot(svgsize, null, null, "Bot");
        arrembeds.push(emdBot);
        var emdBotAdd = new ville.embed.fluent.BotAdd(svgsize, null, null, "BotAdd");
        arrembeds.push(emdBotAdd);
        var emdBotSparkle = new ville.embed.fluent.BotSparkle(svgsize, null, null, "BotSparkle");
        arrembeds.push(emdBotSparkle);
        var emdBowTie = new ville.embed.fluent.BowTie(svgsize, null, null, "BowTie");
        arrembeds.push(emdBowTie);
        var emdBowlChopsticks = new ville.embed.fluent.BowlChopsticks(svgsize, null, null, "BowlChopsticks");
        arrembeds.push(emdBowlChopsticks);
        var emdBowlSalad = new ville.embed.fluent.BowlSalad(svgsize, null, null, "BowlSalad");
        arrembeds.push(emdBowlSalad);
        var emdBox = new ville.embed.fluent.Box(svgsize, null, null, "Box");
        arrembeds.push(emdBox);
        var emdBoxArrowLeft = new ville.embed.fluent.BoxArrowLeft(svgsize, null, null, "BoxArrowLeft");
        arrembeds.push(emdBoxArrowLeft);
        var emdBoxArrowUp = new ville.embed.fluent.BoxArrowUp(svgsize, null, null, "BoxArrowUp");
        arrembeds.push(emdBoxArrowUp);
        var emdBoxCheckmark = new ville.embed.fluent.BoxCheckmark(svgsize, null, null, "BoxCheckmark");
        arrembeds.push(emdBoxCheckmark);
        var emdBoxDismiss = new ville.embed.fluent.BoxDismiss(svgsize, null, null, "BoxDismiss");
        arrembeds.push(emdBoxDismiss);
        var emdBoxEdit = new ville.embed.fluent.BoxEdit(svgsize, null, null, "BoxEdit");
        arrembeds.push(emdBoxEdit);
        var emdBoxMultiple = new ville.embed.fluent.BoxMultiple(svgsize, null, null, "BoxMultiple");
        arrembeds.push(emdBoxMultiple);
        var emdBoxMultipleArrowLeft = new ville.embed.fluent.BoxMultipleArrowLeft(svgsize, null, null, "BoxMultipleArrowLeft");
        arrembeds.push(emdBoxMultipleArrowLeft);
        var emdBoxMultipleArrowRight = new ville.embed.fluent.BoxMultipleArrowRight(svgsize, null, null, "BoxMultipleArrowRight");
        arrembeds.push(emdBoxMultipleArrowRight);
        var emdBoxMultipleCheckmark = new ville.embed.fluent.BoxMultipleCheckmark(svgsize, null, null, "BoxMultipleCheckmark");
        arrembeds.push(emdBoxMultipleCheckmark);
        var emdBoxMultipleSearch = new ville.embed.fluent.BoxMultipleSearch(svgsize, null, null, "BoxMultipleSearch");
        arrembeds.push(emdBoxMultipleSearch);
        var emdBoxSearch = new ville.embed.fluent.BoxSearch(svgsize, null, null, "BoxSearch");
        arrembeds.push(emdBoxSearch);
        var emdBoxToolbox = new ville.embed.fluent.BoxToolbox(svgsize, null, null, "BoxToolbox");
        arrembeds.push(emdBoxToolbox);
        var emdBraces = new ville.embed.fluent.Braces(svgsize, null, null, "Braces");
        arrembeds.push(emdBraces);
        var emdBracesVariable = new ville.embed.fluent.BracesVariable(svgsize, null, null, "BracesVariable");
        arrembeds.push(emdBracesVariable);
        var emdBrainCircuit = new ville.embed.fluent.BrainCircuit(svgsize, null, null, "BrainCircuit");
        arrembeds.push(emdBrainCircuit);
        var emdBranch = new ville.embed.fluent.Branch(svgsize, null, null, "Branch");
        arrembeds.push(emdBranch);
        var emdBranchCompare = new ville.embed.fluent.BranchCompare(svgsize, null, null, "BranchCompare");
        arrembeds.push(emdBranchCompare);
        var emdBranchFork = new ville.embed.fluent.BranchFork(svgsize, null, null, "BranchFork");
        arrembeds.push(emdBranchFork);
        var emdBranchForkHint = new ville.embed.fluent.BranchForkHint(svgsize, null, null, "BranchForkHint");
        arrembeds.push(emdBranchForkHint);
        var emdBranchForkLink = new ville.embed.fluent.BranchForkLink(svgsize, null, null, "BranchForkLink");
        arrembeds.push(emdBranchForkLink);
        var emdBranchRequest = new ville.embed.fluent.BranchRequest(svgsize, null, null, "BranchRequest");
        arrembeds.push(emdBranchRequest);
        var emdBreakoutRoom = new ville.embed.fluent.BreakoutRoom(svgsize, null, null, "BreakoutRoom");
        arrembeds.push(emdBreakoutRoom);
        var emdBriefcase = new ville.embed.fluent.Briefcase(svgsize, null, null, "Briefcase");
        arrembeds.push(emdBriefcase);
        var emdBriefcaseMedical = new ville.embed.fluent.BriefcaseMedical(svgsize, null, null, "BriefcaseMedical");
        arrembeds.push(emdBriefcaseMedical);
        var emdBriefcaseOff = new ville.embed.fluent.BriefcaseOff(svgsize, null, null, "BriefcaseOff");
        arrembeds.push(emdBriefcaseOff);
        var emdBriefcaseSearch = new ville.embed.fluent.BriefcaseSearch(svgsize, null, null, "BriefcaseSearch");
        arrembeds.push(emdBriefcaseSearch);
        var emdBrightnessHigh = new ville.embed.fluent.BrightnessHigh(svgsize, null, null, "BrightnessHigh");
        arrembeds.push(emdBrightnessHigh);
        var emdBrightnessLow = new ville.embed.fluent.BrightnessLow(svgsize, null, null, "BrightnessLow");
        arrembeds.push(emdBrightnessLow);
        var emdBroadActivityFeed = new ville.embed.fluent.BroadActivityFeed(svgsize, null, null, "BroadActivityFeed");
        arrembeds.push(emdBroadActivityFeed);
        var emdBroom = new ville.embed.fluent.Broom(svgsize, null, null, "Broom");
        arrembeds.push(emdBroom);
        var emdBubbleMultiple = new ville.embed.fluent.BubbleMultiple(svgsize, null, null, "BubbleMultiple");
        arrembeds.push(emdBubbleMultiple);
        var emdBug = new ville.embed.fluent.Bug(svgsize, null, null, "Bug");
        arrembeds.push(emdBug);
        var emdBugArrowCounterclockwise = new ville.embed.fluent.BugArrowCounterclockwise(svgsize, null, null, "BugArrowCounterclockwise");
        arrembeds.push(emdBugArrowCounterclockwise);
        var emdBugProhibited = new ville.embed.fluent.BugProhibited(svgsize, null, null, "BugProhibited");
        arrembeds.push(emdBugProhibited);
        var emdBuilding = new ville.embed.fluent.Building(svgsize, null, null, "Building");
        arrembeds.push(emdBuilding);
        var emdBuildingBank = new ville.embed.fluent.BuildingBank(svgsize, null, null, "BuildingBank");
        arrembeds.push(emdBuildingBank);
        var emdBuildingBankLink = new ville.embed.fluent.BuildingBankLink(svgsize, null, null, "BuildingBankLink");
        arrembeds.push(emdBuildingBankLink);
        var emdBuildingBankToolbox = new ville.embed.fluent.BuildingBankToolbox(svgsize, null, null, "BuildingBankToolbox");
        arrembeds.push(emdBuildingBankToolbox);
        var emdBuildingDesktop = new ville.embed.fluent.BuildingDesktop(svgsize, null, null, "BuildingDesktop");
        arrembeds.push(emdBuildingDesktop);
        var emdBuildingFactory = new ville.embed.fluent.BuildingFactory(svgsize, null, null, "BuildingFactory");
        arrembeds.push(emdBuildingFactory);
        var emdBuildingGovernment = new ville.embed.fluent.BuildingGovernment(svgsize, null, null, "BuildingGovernment");
        arrembeds.push(emdBuildingGovernment);
        var emdBuildingGovernmentSearch = new ville.embed.fluent.BuildingGovernmentSearch(svgsize, null, null, "BuildingGovernmentSearch");
        arrembeds.push(emdBuildingGovernmentSearch);
        var emdBuildingHome = new ville.embed.fluent.BuildingHome(svgsize, null, null, "BuildingHome");
        arrembeds.push(emdBuildingHome);
        var emdBuildingLighthouse = new ville.embed.fluent.BuildingLighthouse(svgsize, null, null, "BuildingLighthouse");
        arrembeds.push(emdBuildingLighthouse);
        var emdBuildingMosque = new ville.embed.fluent.BuildingMosque(svgsize, null, null, "BuildingMosque");
        arrembeds.push(emdBuildingMosque);
        var emdBuildingMultiple = new ville.embed.fluent.BuildingMultiple(svgsize, null, null, "BuildingMultiple");
        arrembeds.push(emdBuildingMultiple);
        var emdBuildingPeople = new ville.embed.fluent.BuildingPeople(svgsize, null, null, "BuildingPeople");
        arrembeds.push(emdBuildingPeople);
        var emdBuildingRetail = new ville.embed.fluent.BuildingRetail(svgsize, null, null, "BuildingRetail");
        arrembeds.push(emdBuildingRetail);
        var emdBuildingRetailMoney = new ville.embed.fluent.BuildingRetailMoney(svgsize, null, null, "BuildingRetailMoney");
        arrembeds.push(emdBuildingRetailMoney);
        var emdBuildingRetailMore = new ville.embed.fluent.BuildingRetailMore(svgsize, null, null, "BuildingRetailMore");
        arrembeds.push(emdBuildingRetailMore);
        var emdBuildingRetailShield = new ville.embed.fluent.BuildingRetailShield(svgsize, null, null, "BuildingRetailShield");
        arrembeds.push(emdBuildingRetailShield);
        var emdBuildingRetailToolbox = new ville.embed.fluent.BuildingRetailToolbox(svgsize, null, null, "BuildingRetailToolbox");
        arrembeds.push(emdBuildingRetailToolbox);
        var emdBuildingShop = new ville.embed.fluent.BuildingShop(svgsize, null, null, "BuildingShop");
        arrembeds.push(emdBuildingShop);
        var emdBuildingSkyscraper = new ville.embed.fluent.BuildingSkyscraper(svgsize, null, null, "BuildingSkyscraper");
        arrembeds.push(emdBuildingSkyscraper);
        var emdBuildingSwap = new ville.embed.fluent.BuildingSwap(svgsize, null, null, "BuildingSwap");
        arrembeds.push(emdBuildingSwap);
        var emdBuildingTownhouse = new ville.embed.fluent.BuildingTownhouse(svgsize, null, null, "BuildingTownhouse");
        arrembeds.push(emdBuildingTownhouse);
        var emdButton = new ville.embed.fluent.Button(svgsize, null, null, "Button");
        arrembeds.push(emdButton);
        var emdCalculator = new ville.embed.fluent.Calculator(svgsize, null, null, "Calculator");
        arrembeds.push(emdCalculator);
        var emdCalculatorArrowClockwise = new ville.embed.fluent.CalculatorArrowClockwise(svgsize, null, null, "CalculatorArrowClockwise");
        arrembeds.push(emdCalculatorArrowClockwise);
        var emdCalculatorMultiple = new ville.embed.fluent.CalculatorMultiple(svgsize, null, null, "CalculatorMultiple");
        arrembeds.push(emdCalculatorMultiple);
        var emdCalendar = new ville.embed.fluent.Calendar(svgsize, null, null, "Calendar");
        arrembeds.push(emdCalendar);
        var emdCalendar3Day = new ville.embed.fluent.Calendar3Day(svgsize, null, null, "Calendar3Day");
        arrembeds.push(emdCalendar3Day);
        var emdCalendarAdd = new ville.embed.fluent.CalendarAdd(svgsize, null, null, "CalendarAdd");
        arrembeds.push(emdCalendarAdd);
        var emdCalendarAgenda = new ville.embed.fluent.CalendarAgenda(svgsize, null, null, "CalendarAgenda");
        arrembeds.push(emdCalendarAgenda);
        var emdCalendarArrowCounterclockwise = new ville.embed.fluent.CalendarArrowCounterclockwise(svgsize, null, null, "CalendarArrowCounterclockwise");
        arrembeds.push(emdCalendarArrowCounterclockwise);
        var emdCalendarArrowDown = new ville.embed.fluent.CalendarArrowDown(svgsize, null, null, "CalendarArrowDown");
        arrembeds.push(emdCalendarArrowDown);
        var emdCalendarArrowRight = new ville.embed.fluent.CalendarArrowRight(svgsize, null, null, "CalendarArrowRight");
        arrembeds.push(emdCalendarArrowRight);
        var emdCalendarAssistant = new ville.embed.fluent.CalendarAssistant(svgsize, null, null, "CalendarAssistant");
        arrembeds.push(emdCalendarAssistant);
        var emdCalendarCancel = new ville.embed.fluent.CalendarCancel(svgsize, null, null, "CalendarCancel");
        arrembeds.push(emdCalendarCancel);
        var emdCalendarChat = new ville.embed.fluent.CalendarChat(svgsize, null, null, "CalendarChat");
        arrembeds.push(emdCalendarChat);
        var emdCalendarCheckmark = new ville.embed.fluent.CalendarCheckmark(svgsize, null, null, "CalendarCheckmark");
        arrembeds.push(emdCalendarCheckmark);
        var emdCalendarClock = new ville.embed.fluent.CalendarClock(svgsize, null, null, "CalendarClock");
        arrembeds.push(emdCalendarClock);
        var emdCalendarDataBar = new ville.embed.fluent.CalendarDataBar(svgsize, null, null, "CalendarDataBar");
        arrembeds.push(emdCalendarDataBar);
        var emdCalendarDate = new ville.embed.fluent.CalendarDate(svgsize, null, null, "CalendarDate");
        arrembeds.push(emdCalendarDate);
        var emdCalendarDay = new ville.embed.fluent.CalendarDay(svgsize, null, null, "CalendarDay");
        arrembeds.push(emdCalendarDay);
        var emdCalendarEdit = new ville.embed.fluent.CalendarEdit(svgsize, null, null, "CalendarEdit");
        arrembeds.push(emdCalendarEdit);
        var emdCalendarEmpty = new ville.embed.fluent.CalendarEmpty(svgsize, null, null, "CalendarEmpty");
        arrembeds.push(emdCalendarEmpty);
        var emdCalendarError = new ville.embed.fluent.CalendarError(svgsize, null, null, "CalendarError");
        arrembeds.push(emdCalendarError);
        var emdCalendarEye = new ville.embed.fluent.CalendarEye(svgsize, null, null, "CalendarEye");
        arrembeds.push(emdCalendarEye);
        var emdCalendarInfo = new ville.embed.fluent.CalendarInfo(svgsize, null, null, "CalendarInfo");
        arrembeds.push(emdCalendarInfo);
        var emdCalendarLock = new ville.embed.fluent.CalendarLock(svgsize, null, null, "CalendarLock");
        arrembeds.push(emdCalendarLock);
        var emdCalendarLtr = new ville.embed.fluent.CalendarLtr(svgsize, null, null, "CalendarLtr");
        arrembeds.push(emdCalendarLtr);
        var emdCalendarMail = new ville.embed.fluent.CalendarMail(svgsize, null, null, "CalendarMail");
        arrembeds.push(emdCalendarMail);
        var emdCalendarMention = new ville.embed.fluent.CalendarMention(svgsize, null, null, "CalendarMention");
        arrembeds.push(emdCalendarMention);
        var emdCalendarMonth = new ville.embed.fluent.CalendarMonth(svgsize, null, null, "CalendarMonth");
        arrembeds.push(emdCalendarMonth);
        var emdCalendarMultiple = new ville.embed.fluent.CalendarMultiple(svgsize, null, null, "CalendarMultiple");
        arrembeds.push(emdCalendarMultiple);
        var emdCalendarNote = new ville.embed.fluent.CalendarNote(svgsize, null, null, "CalendarNote");
        arrembeds.push(emdCalendarNote);
        var emdCalendarPattern = new ville.embed.fluent.CalendarPattern(svgsize, null, null, "CalendarPattern");
        arrembeds.push(emdCalendarPattern);
        var emdCalendarPerson = new ville.embed.fluent.CalendarPerson(svgsize, null, null, "CalendarPerson");
        arrembeds.push(emdCalendarPerson);
        var emdCalendarPhone = new ville.embed.fluent.CalendarPhone(svgsize, null, null, "CalendarPhone");
        arrembeds.push(emdCalendarPhone);
        var emdCalendarPlay = new ville.embed.fluent.CalendarPlay(svgsize, null, null, "CalendarPlay");
        arrembeds.push(emdCalendarPlay);
        var emdCalendarQuestionMark = new ville.embed.fluent.CalendarQuestionMark(svgsize, null, null, "CalendarQuestionMark");
        arrembeds.push(emdCalendarQuestionMark);
        var emdCalendarRecord = new ville.embed.fluent.CalendarRecord(svgsize, null, null, "CalendarRecord");
        arrembeds.push(emdCalendarRecord);
        var emdCalendarReply = new ville.embed.fluent.CalendarReply(svgsize, null, null, "CalendarReply");
        arrembeds.push(emdCalendarReply);
        var emdCalendarRtl = new ville.embed.fluent.CalendarRtl(svgsize, null, null, "CalendarRtl");
        arrembeds.push(emdCalendarRtl);
        var emdCalendarSearch = new ville.embed.fluent.CalendarSearch(svgsize, null, null, "CalendarSearch");
        arrembeds.push(emdCalendarSearch);
        var emdCalendarSettings = new ville.embed.fluent.CalendarSettings(svgsize, null, null, "CalendarSettings");
        arrembeds.push(emdCalendarSettings);
        var emdCalendarShield = new ville.embed.fluent.CalendarShield(svgsize, null, null, "CalendarShield");
        arrembeds.push(emdCalendarShield);
        var emdCalendarSparkle = new ville.embed.fluent.CalendarSparkle(svgsize, null, null, "CalendarSparkle");
        arrembeds.push(emdCalendarSparkle);
        var emdCalendarStar = new ville.embed.fluent.CalendarStar(svgsize, null, null, "CalendarStar");
        arrembeds.push(emdCalendarStar);
        var emdCalendarSync = new ville.embed.fluent.CalendarSync(svgsize, null, null, "CalendarSync");
        arrembeds.push(emdCalendarSync);
        var emdCalendarTemplate = new ville.embed.fluent.CalendarTemplate(svgsize, null, null, "CalendarTemplate");
        arrembeds.push(emdCalendarTemplate);
        var emdCalendarToday = new ville.embed.fluent.CalendarToday(svgsize, null, null, "CalendarToday");
        arrembeds.push(emdCalendarToday);
        var emdCalendarToolbox = new ville.embed.fluent.CalendarToolbox(svgsize, null, null, "CalendarToolbox");
        arrembeds.push(emdCalendarToolbox);
        var emdCalendarVideo = new ville.embed.fluent.CalendarVideo(svgsize, null, null, "CalendarVideo");
        arrembeds.push(emdCalendarVideo);
        var emdCalendarWeekNumbers = new ville.embed.fluent.CalendarWeekNumbers(svgsize, null, null, "CalendarWeekNumbers");
        arrembeds.push(emdCalendarWeekNumbers);
        var emdCalendarWeekStart = new ville.embed.fluent.CalendarWeekStart(svgsize, null, null, "CalendarWeekStart");
        arrembeds.push(emdCalendarWeekStart);
        var emdCalendarWorkWeek = new ville.embed.fluent.CalendarWorkWeek(svgsize, null, null, "CalendarWorkWeek");
        arrembeds.push(emdCalendarWorkWeek);
        var emdCall = new ville.embed.fluent.Call(svgsize, null, null, "Call");
        arrembeds.push(emdCall);
        var emdCallAdd = new ville.embed.fluent.CallAdd(svgsize, null, null, "CallAdd");
        arrembeds.push(emdCallAdd);
        var emdCallCheckmark = new ville.embed.fluent.CallCheckmark(svgsize, null, null, "CallCheckmark");
        arrembeds.push(emdCallCheckmark);
        var emdCallConnecting = new ville.embed.fluent.CallConnecting(svgsize, null, null, "CallConnecting");
        arrembeds.push(emdCallConnecting);
        var emdCallDismiss = new ville.embed.fluent.CallDismiss(svgsize, null, null, "CallDismiss");
        arrembeds.push(emdCallDismiss);
        var emdCallEnd = new ville.embed.fluent.CallEnd(svgsize, null, null, "CallEnd");
        arrembeds.push(emdCallEnd);
        var emdCallExclamation = new ville.embed.fluent.CallExclamation(svgsize, null, null, "CallExclamation");
        arrembeds.push(emdCallExclamation);
        var emdCallForward = new ville.embed.fluent.CallForward(svgsize, null, null, "CallForward");
        arrembeds.push(emdCallForward);
        var emdCallInbound = new ville.embed.fluent.CallInbound(svgsize, null, null, "CallInbound");
        arrembeds.push(emdCallInbound);
        var emdCallMissed = new ville.embed.fluent.CallMissed(svgsize, null, null, "CallMissed");
        arrembeds.push(emdCallMissed);
        var emdCallOutbound = new ville.embed.fluent.CallOutbound(svgsize, null, null, "CallOutbound");
        arrembeds.push(emdCallOutbound);
        var emdCallPark = new ville.embed.fluent.CallPark(svgsize, null, null, "CallPark");
        arrembeds.push(emdCallPark);
        var emdCallPause = new ville.embed.fluent.CallPause(svgsize, null, null, "CallPause");
        arrembeds.push(emdCallPause);
        var emdCallProhibited = new ville.embed.fluent.CallProhibited(svgsize, null, null, "CallProhibited");
        arrembeds.push(emdCallProhibited);
        var emdCallTransfer = new ville.embed.fluent.CallTransfer(svgsize, null, null, "CallTransfer");
        arrembeds.push(emdCallTransfer);
        var emdCallWarning = new ville.embed.fluent.CallWarning(svgsize, null, null, "CallWarning");
        arrembeds.push(emdCallWarning);
        var emdCalligraphyPen = new ville.embed.fluent.CalligraphyPen(svgsize, null, null, "CalligraphyPen");
        arrembeds.push(emdCalligraphyPen);
        var emdCalligraphyPenCheckmark = new ville.embed.fluent.CalligraphyPenCheckmark(svgsize, null, null, "CalligraphyPenCheckmark");
        arrembeds.push(emdCalligraphyPenCheckmark);
        var emdCalligraphyPenError = new ville.embed.fluent.CalligraphyPenError(svgsize, null, null, "CalligraphyPenError");
        arrembeds.push(emdCalligraphyPenError);
        var emdCalligraphyPenQuestionMark = new ville.embed.fluent.CalligraphyPenQuestionMark(svgsize, null, null, "CalligraphyPenQuestionMark");
        arrembeds.push(emdCalligraphyPenQuestionMark);
        var emdCamera = new ville.embed.fluent.Camera(svgsize, null, null, "Camera");
        arrembeds.push(emdCamera);
        var emdCameraAdd = new ville.embed.fluent.CameraAdd(svgsize, null, null, "CameraAdd");
        arrembeds.push(emdCameraAdd);
        var emdCameraArrowUp = new ville.embed.fluent.CameraArrowUp(svgsize, null, null, "CameraArrowUp");
        arrembeds.push(emdCameraArrowUp);
        var emdCameraDome = new ville.embed.fluent.CameraDome(svgsize, null, null, "CameraDome");
        arrembeds.push(emdCameraDome);
        var emdCameraEdit = new ville.embed.fluent.CameraEdit(svgsize, null, null, "CameraEdit");
        arrembeds.push(emdCameraEdit);
        var emdCameraOff = new ville.embed.fluent.CameraOff(svgsize, null, null, "CameraOff");
        arrembeds.push(emdCameraOff);
        var emdCameraSparkles = new ville.embed.fluent.CameraSparkles(svgsize, null, null, "CameraSparkles");
        arrembeds.push(emdCameraSparkles);
        var emdCameraSwitch = new ville.embed.fluent.CameraSwitch(svgsize, null, null, "CameraSwitch");
        arrembeds.push(emdCameraSwitch);
        var emdCardUi = new ville.embed.fluent.CardUi(svgsize, null, null, "CardUi");
        arrembeds.push(emdCardUi);
        var emdCaretDown = new ville.embed.fluent.CaretDown(svgsize, null, null, "CaretDown");
        arrembeds.push(emdCaretDown);
        var emdCaretDownRight = new ville.embed.fluent.CaretDownRight(svgsize, null, null, "CaretDownRight");
        arrembeds.push(emdCaretDownRight);
        var emdCaretLeft = new ville.embed.fluent.CaretLeft(svgsize, null, null, "CaretLeft");
        arrembeds.push(emdCaretLeft);
        var emdCaretRight = new ville.embed.fluent.CaretRight(svgsize, null, null, "CaretRight");
        arrembeds.push(emdCaretRight);
        var emdCaretUp = new ville.embed.fluent.CaretUp(svgsize, null, null, "CaretUp");
        arrembeds.push(emdCaretUp);
        var emdCart = new ville.embed.fluent.Cart(svgsize, null, null, "Cart");
        arrembeds.push(emdCart);
        var emdCast = new ville.embed.fluent.Cast(svgsize, null, null, "Cast");
        arrembeds.push(emdCast);
        var emdCastMultiple = new ville.embed.fluent.CastMultiple(svgsize, null, null, "CastMultiple");
        arrembeds.push(emdCastMultiple);
        var emdCatchUp = new ville.embed.fluent.CatchUp(svgsize, null, null, "CatchUp");
        arrembeds.push(emdCatchUp);
        var emdCellular3g = new ville.embed.fluent.Cellular3g(svgsize, null, null, "Cellular3g");
        arrembeds.push(emdCellular3g);
        var emdCellular4g = new ville.embed.fluent.Cellular4g(svgsize, null, null, "Cellular4g");
        arrembeds.push(emdCellular4g);
        var emdCellular5g = new ville.embed.fluent.Cellular5g(svgsize, null, null, "Cellular5g");
        arrembeds.push(emdCellular5g);
        var emdCellularData1 = new ville.embed.fluent.CellularData1(svgsize, null, null, "CellularData1");
        arrembeds.push(emdCellularData1);
        var emdCellularData2 = new ville.embed.fluent.CellularData2(svgsize, null, null, "CellularData2");
        arrembeds.push(emdCellularData2);
        var emdCellularData3 = new ville.embed.fluent.CellularData3(svgsize, null, null, "CellularData3");
        arrembeds.push(emdCellularData3);
        var emdCellularData4 = new ville.embed.fluent.CellularData4(svgsize, null, null, "CellularData4");
        arrembeds.push(emdCellularData4);
        var emdCellularData5 = new ville.embed.fluent.CellularData5(svgsize, null, null, "CellularData5");
        arrembeds.push(emdCellularData5);
        var emdCellularOff = new ville.embed.fluent.CellularOff(svgsize, null, null, "CellularOff");
        arrembeds.push(emdCellularOff);
        var emdCellularWarning = new ville.embed.fluent.CellularWarning(svgsize, null, null, "CellularWarning");
        arrembeds.push(emdCellularWarning);
        var emdCenterHorizontal = new ville.embed.fluent.CenterHorizontal(svgsize, null, null, "CenterHorizontal");
        arrembeds.push(emdCenterHorizontal);
        var emdCenterVertical = new ville.embed.fluent.CenterVertical(svgsize, null, null, "CenterVertical");
        arrembeds.push(emdCenterVertical);
        var emdCertificate = new ville.embed.fluent.Certificate(svgsize, null, null, "Certificate");
        arrembeds.push(emdCertificate);
        var emdChannel = new ville.embed.fluent.Channel(svgsize, null, null, "Channel");
        arrembeds.push(emdChannel);
        var emdChannelAdd = new ville.embed.fluent.ChannelAdd(svgsize, null, null, "ChannelAdd");
        arrembeds.push(emdChannelAdd);
        var emdChannelAlert = new ville.embed.fluent.ChannelAlert(svgsize, null, null, "ChannelAlert");
        arrembeds.push(emdChannelAlert);
        var emdChannelArrowLeft = new ville.embed.fluent.ChannelArrowLeft(svgsize, null, null, "ChannelArrowLeft");
        arrembeds.push(emdChannelArrowLeft);
        var emdChannelDismiss = new ville.embed.fluent.ChannelDismiss(svgsize, null, null, "ChannelDismiss");
        arrembeds.push(emdChannelDismiss);
        var emdChannelShare = new ville.embed.fluent.ChannelShare(svgsize, null, null, "ChannelShare");
        arrembeds.push(emdChannelShare);
        var emdChannelSubtract = new ville.embed.fluent.ChannelSubtract(svgsize, null, null, "ChannelSubtract");
        arrembeds.push(emdChannelSubtract);
        var emdChartMultiple = new ville.embed.fluent.ChartMultiple(svgsize, null, null, "ChartMultiple");
        arrembeds.push(emdChartMultiple);
        var emdChartPerson = new ville.embed.fluent.ChartPerson(svgsize, null, null, "ChartPerson");
        arrembeds.push(emdChartPerson);
        var emdChat = new ville.embed.fluent.Chat(svgsize, null, null, "Chat");
        arrembeds.push(emdChat);
        var emdChatAdd = new ville.embed.fluent.ChatAdd(svgsize, null, null, "ChatAdd");
        arrembeds.push(emdChatAdd);
        var emdChatArrowBack = new ville.embed.fluent.ChatArrowBack(svgsize, null, null, "ChatArrowBack");
        arrembeds.push(emdChatArrowBack);
        var emdChatArrowDoubleBack = new ville.embed.fluent.ChatArrowDoubleBack(svgsize, null, null, "ChatArrowDoubleBack");
        arrembeds.push(emdChatArrowDoubleBack);
        var emdChatBubblesQuestion = new ville.embed.fluent.ChatBubblesQuestion(svgsize, null, null, "ChatBubblesQuestion");
        arrembeds.push(emdChatBubblesQuestion);
        var emdChatCursor = new ville.embed.fluent.ChatCursor(svgsize, null, null, "ChatCursor");
        arrembeds.push(emdChatCursor);
        var emdChatDismiss = new ville.embed.fluent.ChatDismiss(svgsize, null, null, "ChatDismiss");
        arrembeds.push(emdChatDismiss);
        var emdChatEmpty = new ville.embed.fluent.ChatEmpty(svgsize, null, null, "ChatEmpty");
        arrembeds.push(emdChatEmpty);
        var emdChatHelp = new ville.embed.fluent.ChatHelp(svgsize, null, null, "ChatHelp");
        arrembeds.push(emdChatHelp);
        var emdChatLock = new ville.embed.fluent.ChatLock(svgsize, null, null, "ChatLock");
        arrembeds.push(emdChatLock);
        var emdChatMail = new ville.embed.fluent.ChatMail(svgsize, null, null, "ChatMail");
        arrembeds.push(emdChatMail);
        var emdChatMultiple = new ville.embed.fluent.ChatMultiple(svgsize, null, null, "ChatMultiple");
        arrembeds.push(emdChatMultiple);
        var emdChatMultipleHeart = new ville.embed.fluent.ChatMultipleHeart(svgsize, null, null, "ChatMultipleHeart");
        arrembeds.push(emdChatMultipleHeart);
        var emdChatOff = new ville.embed.fluent.ChatOff(svgsize, null, null, "ChatOff");
        arrembeds.push(emdChatOff);
        var emdChatSettings = new ville.embed.fluent.ChatSettings(svgsize, null, null, "ChatSettings");
        arrembeds.push(emdChatSettings);
        var emdChatSparkle = new ville.embed.fluent.ChatSparkle(svgsize, null, null, "ChatSparkle");
        arrembeds.push(emdChatSparkle);
        var emdChatVideo = new ville.embed.fluent.ChatVideo(svgsize, null, null, "ChatVideo");
        arrembeds.push(emdChatVideo);
        var emdChatWarning = new ville.embed.fluent.ChatWarning(svgsize, null, null, "ChatWarning");
        arrembeds.push(emdChatWarning);
        var emdCheck = new ville.embed.fluent.Check(svgsize, null, null, "Check");
        arrembeds.push(emdCheck);
        var emdCheckbox1 = new ville.embed.fluent.Checkbox1(svgsize, null, null, "Checkbox1");
        arrembeds.push(emdCheckbox1);
        var emdCheckbox2 = new ville.embed.fluent.Checkbox2(svgsize, null, null, "Checkbox2");
        arrembeds.push(emdCheckbox2);
        var emdCheckboxArrowRight = new ville.embed.fluent.CheckboxArrowRight(svgsize, null, null, "CheckboxArrowRight");
        arrembeds.push(emdCheckboxArrowRight);
        var emdCheckboxChecked = new ville.embed.fluent.CheckboxChecked(svgsize, null, null, "CheckboxChecked");
        arrembeds.push(emdCheckboxChecked);
        var emdCheckboxCheckedSync = new ville.embed.fluent.CheckboxCheckedSync(svgsize, null, null, "CheckboxCheckedSync");
        arrembeds.push(emdCheckboxCheckedSync);
        var emdCheckboxIndeterminate = new ville.embed.fluent.CheckboxIndeterminate(svgsize, null, null, "CheckboxIndeterminate");
        arrembeds.push(emdCheckboxIndeterminate);
        var emdCheckboxPerson = new ville.embed.fluent.CheckboxPerson(svgsize, null, null, "CheckboxPerson");
        arrembeds.push(emdCheckboxPerson);
        var emdCheckboxUnchecked = new ville.embed.fluent.CheckboxUnchecked(svgsize, null, null, "CheckboxUnchecked");
        arrembeds.push(emdCheckboxUnchecked);
        var emdCheckboxWarning = new ville.embed.fluent.CheckboxWarning(svgsize, null, null, "CheckboxWarning");
        arrembeds.push(emdCheckboxWarning);
        var emdCheckmark = new ville.embed.fluent.Checkmark(svgsize, null, null, "Checkmark");
        arrembeds.push(emdCheckmark);
        var emdCheckmarkCircle = new ville.embed.fluent.CheckmarkCircle(svgsize, null, null, "CheckmarkCircle");
        arrembeds.push(emdCheckmarkCircle);
        var emdCheckmarkCircleSquare = new ville.embed.fluent.CheckmarkCircleSquare(svgsize, null, null, "CheckmarkCircleSquare");
        arrembeds.push(emdCheckmarkCircleSquare);
        var emdCheckmarkCircleWarning = new ville.embed.fluent.CheckmarkCircleWarning(svgsize, null, null, "CheckmarkCircleWarning");
        arrembeds.push(emdCheckmarkCircleWarning);
        var emdCheckmarkLock = new ville.embed.fluent.CheckmarkLock(svgsize, null, null, "CheckmarkLock");
        arrembeds.push(emdCheckmarkLock);
        var emdCheckmarkNote = new ville.embed.fluent.CheckmarkNote(svgsize, null, null, "CheckmarkNote");
        arrembeds.push(emdCheckmarkNote);
        var emdCheckmarkSquare = new ville.embed.fluent.CheckmarkSquare(svgsize, null, null, "CheckmarkSquare");
        arrembeds.push(emdCheckmarkSquare);
        var emdCheckmarkStarburst = new ville.embed.fluent.CheckmarkStarburst(svgsize, null, null, "CheckmarkStarburst");
        arrembeds.push(emdCheckmarkStarburst);
        var emdCheckmarkUnderlineCircle = new ville.embed.fluent.CheckmarkUnderlineCircle(svgsize, null, null, "CheckmarkUnderlineCircle");
        arrembeds.push(emdCheckmarkUnderlineCircle);
        var emdChess = new ville.embed.fluent.Chess(svgsize, null, null, "Chess");
        arrembeds.push(emdChess);
        var emdChevronCircleDown = new ville.embed.fluent.ChevronCircleDown(svgsize, null, null, "ChevronCircleDown");
        arrembeds.push(emdChevronCircleDown);
        var emdChevronCircleLeft = new ville.embed.fluent.ChevronCircleLeft(svgsize, null, null, "ChevronCircleLeft");
        arrembeds.push(emdChevronCircleLeft);
        var emdChevronCircleRight = new ville.embed.fluent.ChevronCircleRight(svgsize, null, null, "ChevronCircleRight");
        arrembeds.push(emdChevronCircleRight);
        var emdChevronCircleUp = new ville.embed.fluent.ChevronCircleUp(svgsize, null, null, "ChevronCircleUp");
        arrembeds.push(emdChevronCircleUp);
        var emdChevronDoubleDown = new ville.embed.fluent.ChevronDoubleDown(svgsize, null, null, "ChevronDoubleDown");
        arrembeds.push(emdChevronDoubleDown);
        var emdChevronDoubleLeft = new ville.embed.fluent.ChevronDoubleLeft(svgsize, null, null, "ChevronDoubleLeft");
        arrembeds.push(emdChevronDoubleLeft);
        var emdChevronDoubleRight = new ville.embed.fluent.ChevronDoubleRight(svgsize, null, null, "ChevronDoubleRight");
        arrembeds.push(emdChevronDoubleRight);
        var emdChevronDoubleUp = new ville.embed.fluent.ChevronDoubleUp(svgsize, null, null, "ChevronDoubleUp");
        arrembeds.push(emdChevronDoubleUp);
        var emdChevronDown = new ville.embed.fluent.ChevronDown(svgsize, null, null, "ChevronDown");
        arrembeds.push(emdChevronDown);
        var emdChevronDownUp = new ville.embed.fluent.ChevronDownUp(svgsize, null, null, "ChevronDownUp");
        arrembeds.push(emdChevronDownUp);
        var emdChevronLeft = new ville.embed.fluent.ChevronLeft(svgsize, null, null, "ChevronLeft");
        arrembeds.push(emdChevronLeft);
        var emdChevronRight = new ville.embed.fluent.ChevronRight(svgsize, null, null, "ChevronRight");
        arrembeds.push(emdChevronRight);
        var emdChevronUp = new ville.embed.fluent.ChevronUp(svgsize, null, null, "ChevronUp");
        arrembeds.push(emdChevronUp);
        var emdChevronUpDown = new ville.embed.fluent.ChevronUpDown(svgsize, null, null, "ChevronUpDown");
        arrembeds.push(emdChevronUpDown);
        var emdCircle = new ville.embed.fluent.Circle(svgsize, null, null, "Circle");
        arrembeds.push(emdCircle);
        var emdCircleEdit = new ville.embed.fluent.CircleEdit(svgsize, null, null, "CircleEdit");
        arrembeds.push(emdCircleEdit);
        var emdCircleEraser = new ville.embed.fluent.CircleEraser(svgsize, null, null, "CircleEraser");
        arrembeds.push(emdCircleEraser);
        var emdCircleHalfFill = new ville.embed.fluent.CircleHalfFill(svgsize, null, null, "CircleHalfFill");
        arrembeds.push(emdCircleHalfFill);
        var emdCircleHighlight = new ville.embed.fluent.CircleHighlight(svgsize, null, null, "CircleHighlight");
        arrembeds.push(emdCircleHighlight);
        var emdCircleHint = new ville.embed.fluent.CircleHint(svgsize, null, null, "CircleHint");
        arrembeds.push(emdCircleHint);
        var emdCircleHintHalfVertical = new ville.embed.fluent.CircleHintHalfVertical(svgsize, null, null, "CircleHintHalfVertical");
        arrembeds.push(emdCircleHintHalfVertical);
        var emdCircleImage = new ville.embed.fluent.CircleImage(svgsize, null, null, "CircleImage");
        arrembeds.push(emdCircleImage);
        var emdCircleLine = new ville.embed.fluent.CircleLine(svgsize, null, null, "CircleLine");
        arrembeds.push(emdCircleLine);
        var emdCircleMultipleSubtractCheckmark = new ville.embed.fluent.CircleMultipleSubtractCheckmark(svgsize, null, null, "CircleMultipleSubtractCheckmark");
        arrembeds.push(emdCircleMultipleSubtractCheckmark);
        var emdCircleOff = new ville.embed.fluent.CircleOff(svgsize, null, null, "CircleOff");
        arrembeds.push(emdCircleOff);
        var emdCircleShadow = new ville.embed.fluent.CircleShadow(svgsize, null, null, "CircleShadow");
        arrembeds.push(emdCircleShadow);
        var emdCircleSmall = new ville.embed.fluent.CircleSmall(svgsize, null, null, "CircleSmall");
        arrembeds.push(emdCircleSmall);
        var emdCity = new ville.embed.fluent.City(svgsize, null, null, "City");
        arrembeds.push(emdCity);
        var emdClass = new ville.embed.fluent.Class(svgsize, null, null, "Class");
        arrembeds.push(emdClass);
        var emdClassification = new ville.embed.fluent.Classification(svgsize, null, null, "Classification");
        arrembeds.push(emdClassification);
        var emdClearFormatting = new ville.embed.fluent.ClearFormatting(svgsize, null, null, "ClearFormatting");
        arrembeds.push(emdClearFormatting);
        var emdClipboard = new ville.embed.fluent.Clipboard(svgsize, null, null, "Clipboard");
        arrembeds.push(emdClipboard);
        var emdClipboard3Day = new ville.embed.fluent.Clipboard3Day(svgsize, null, null, "Clipboard3Day");
        arrembeds.push(emdClipboard3Day);
        var emdClipboardArrowRight = new ville.embed.fluent.ClipboardArrowRight(svgsize, null, null, "ClipboardArrowRight");
        arrembeds.push(emdClipboardArrowRight);
        var emdClipboardBrush = new ville.embed.fluent.ClipboardBrush(svgsize, null, null, "ClipboardBrush");
        arrembeds.push(emdClipboardBrush);
        var emdClipboardBulletList = new ville.embed.fluent.ClipboardBulletList(svgsize, null, null, "ClipboardBulletList");
        arrembeds.push(emdClipboardBulletList);
        var emdClipboardBulletListLtr = new ville.embed.fluent.ClipboardBulletListLtr(svgsize, null, null, "ClipboardBulletListLtr");
        arrembeds.push(emdClipboardBulletListLtr);
        var emdClipboardBulletListRtl = new ville.embed.fluent.ClipboardBulletListRtl(svgsize, null, null, "ClipboardBulletListRtl");
        arrembeds.push(emdClipboardBulletListRtl);
        var emdClipboardCheckmark = new ville.embed.fluent.ClipboardCheckmark(svgsize, null, null, "ClipboardCheckmark");
        arrembeds.push(emdClipboardCheckmark);
        var emdClipboardClock = new ville.embed.fluent.ClipboardClock(svgsize, null, null, "ClipboardClock");
        arrembeds.push(emdClipboardClock);
        var emdClipboardCode = new ville.embed.fluent.ClipboardCode(svgsize, null, null, "ClipboardCode");
        arrembeds.push(emdClipboardCode);
        var emdClipboardDataBar = new ville.embed.fluent.ClipboardDataBar(svgsize, null, null, "ClipboardDataBar");
        arrembeds.push(emdClipboardDataBar);
        var emdClipboardDay = new ville.embed.fluent.ClipboardDay(svgsize, null, null, "ClipboardDay");
        arrembeds.push(emdClipboardDay);
        var emdClipboardEdit = new ville.embed.fluent.ClipboardEdit(svgsize, null, null, "ClipboardEdit");
        arrembeds.push(emdClipboardEdit);
        var emdClipboardError = new ville.embed.fluent.ClipboardError(svgsize, null, null, "ClipboardError");
        arrembeds.push(emdClipboardError);
        var emdClipboardHeart = new ville.embed.fluent.ClipboardHeart(svgsize, null, null, "ClipboardHeart");
        arrembeds.push(emdClipboardHeart);
        var emdClipboardImage = new ville.embed.fluent.ClipboardImage(svgsize, null, null, "ClipboardImage");
        arrembeds.push(emdClipboardImage);
        var emdClipboardLetter = new ville.embed.fluent.ClipboardLetter(svgsize, null, null, "ClipboardLetter");
        arrembeds.push(emdClipboardLetter);
        var emdClipboardLink = new ville.embed.fluent.ClipboardLink(svgsize, null, null, "ClipboardLink");
        arrembeds.push(emdClipboardLink);
        var emdClipboardMathFormula = new ville.embed.fluent.ClipboardMathFormula(svgsize, null, null, "ClipboardMathFormula");
        arrembeds.push(emdClipboardMathFormula);
        var emdClipboardMonth = new ville.embed.fluent.ClipboardMonth(svgsize, null, null, "ClipboardMonth");
        arrembeds.push(emdClipboardMonth);
        var emdClipboardMore = new ville.embed.fluent.ClipboardMore(svgsize, null, null, "ClipboardMore");
        arrembeds.push(emdClipboardMore);
        var emdClipboardNote = new ville.embed.fluent.ClipboardNote(svgsize, null, null, "ClipboardNote");
        arrembeds.push(emdClipboardNote);
        var emdClipboardNumber123 = new ville.embed.fluent.ClipboardNumber123(svgsize, null, null, "ClipboardNumber123");
        arrembeds.push(emdClipboardNumber123);
        var emdClipboardPaste = new ville.embed.fluent.ClipboardPaste(svgsize, null, null, "ClipboardPaste");
        arrembeds.push(emdClipboardPaste);
        var emdClipboardPulse = new ville.embed.fluent.ClipboardPulse(svgsize, null, null, "ClipboardPulse");
        arrembeds.push(emdClipboardPulse);
        var emdClipboardSearch = new ville.embed.fluent.ClipboardSearch(svgsize, null, null, "ClipboardSearch");
        arrembeds.push(emdClipboardSearch);
        var emdClipboardSettings = new ville.embed.fluent.ClipboardSettings(svgsize, null, null, "ClipboardSettings");
        arrembeds.push(emdClipboardSettings);
        var emdClipboardTask = new ville.embed.fluent.ClipboardTask(svgsize, null, null, "ClipboardTask");
        arrembeds.push(emdClipboardTask);
        var emdClipboardTaskAdd = new ville.embed.fluent.ClipboardTaskAdd(svgsize, null, null, "ClipboardTaskAdd");
        arrembeds.push(emdClipboardTaskAdd);
        var emdClipboardTaskListLtr = new ville.embed.fluent.ClipboardTaskListLtr(svgsize, null, null, "ClipboardTaskListLtr");
        arrembeds.push(emdClipboardTaskListLtr);
        var emdClipboardTaskListRtl = new ville.embed.fluent.ClipboardTaskListRtl(svgsize, null, null, "ClipboardTaskListRtl");
        arrembeds.push(emdClipboardTaskListRtl);
        var emdClipboardTextEdit = new ville.embed.fluent.ClipboardTextEdit(svgsize, null, null, "ClipboardTextEdit");
        arrembeds.push(emdClipboardTextEdit);
        var emdClipboardTextLtr = new ville.embed.fluent.ClipboardTextLtr(svgsize, null, null, "ClipboardTextLtr");
        arrembeds.push(emdClipboardTextLtr);
        var emdClipboardTextRtl = new ville.embed.fluent.ClipboardTextRtl(svgsize, null, null, "ClipboardTextRtl");
        arrembeds.push(emdClipboardTextRtl);
        var emdClock = new ville.embed.fluent.Clock(svgsize, null, null, "Clock");
        arrembeds.push(emdClock);
        var emdClockAlarm = new ville.embed.fluent.ClockAlarm(svgsize, null, null, "ClockAlarm");
        arrembeds.push(emdClockAlarm);
        var emdClockArrowDownload = new ville.embed.fluent.ClockArrowDownload(svgsize, null, null, "ClockArrowDownload");
        arrembeds.push(emdClockArrowDownload);
        var emdClockBill = new ville.embed.fluent.ClockBill(svgsize, null, null, "ClockBill");
        arrembeds.push(emdClockBill);
        var emdClockDismiss = new ville.embed.fluent.ClockDismiss(svgsize, null, null, "ClockDismiss");
        arrembeds.push(emdClockDismiss);
        var emdClockLock = new ville.embed.fluent.ClockLock(svgsize, null, null, "ClockLock");
        arrembeds.push(emdClockLock);
        var emdClockPause = new ville.embed.fluent.ClockPause(svgsize, null, null, "ClockPause");
        arrembeds.push(emdClockPause);
        var emdClockToolbox = new ville.embed.fluent.ClockToolbox(svgsize, null, null, "ClockToolbox");
        arrembeds.push(emdClockToolbox);
        var emdClosedCaption = new ville.embed.fluent.ClosedCaption(svgsize, null, null, "ClosedCaption");
        arrembeds.push(emdClosedCaption);
        var emdClosedCaptionOff = new ville.embed.fluent.ClosedCaptionOff(svgsize, null, null, "ClosedCaptionOff");
        arrembeds.push(emdClosedCaptionOff);
        var emdCloud = new ville.embed.fluent.Cloud(svgsize, null, null, "Cloud");
        arrembeds.push(emdCloud);
        var emdCloudAdd = new ville.embed.fluent.CloudAdd(svgsize, null, null, "CloudAdd");
        arrembeds.push(emdCloudAdd);
        var emdCloudArchive = new ville.embed.fluent.CloudArchive(svgsize, null, null, "CloudArchive");
        arrembeds.push(emdCloudArchive);
        var emdCloudArrowDown = new ville.embed.fluent.CloudArrowDown(svgsize, null, null, "CloudArrowDown");
        arrembeds.push(emdCloudArrowDown);
        var emdCloudArrowRight = new ville.embed.fluent.CloudArrowRight(svgsize, null, null, "CloudArrowRight");
        arrembeds.push(emdCloudArrowRight);
        var emdCloudArrowUp = new ville.embed.fluent.CloudArrowUp(svgsize, null, null, "CloudArrowUp");
        arrembeds.push(emdCloudArrowUp);
        var emdCloudBeaker = new ville.embed.fluent.CloudBeaker(svgsize, null, null, "CloudBeaker");
        arrembeds.push(emdCloudBeaker);
        var emdCloudBidirectional = new ville.embed.fluent.CloudBidirectional(svgsize, null, null, "CloudBidirectional");
        arrembeds.push(emdCloudBidirectional);
        var emdCloudCheckmark = new ville.embed.fluent.CloudCheckmark(svgsize, null, null, "CloudCheckmark");
        arrembeds.push(emdCloudCheckmark);
        var emdCloudCube = new ville.embed.fluent.CloudCube(svgsize, null, null, "CloudCube");
        arrembeds.push(emdCloudCube);
        var emdCloudDatabase = new ville.embed.fluent.CloudDatabase(svgsize, null, null, "CloudDatabase");
        arrembeds.push(emdCloudDatabase);
        var emdCloudDesktop = new ville.embed.fluent.CloudDesktop(svgsize, null, null, "CloudDesktop");
        arrembeds.push(emdCloudDesktop);
        var emdCloudDismiss = new ville.embed.fluent.CloudDismiss(svgsize, null, null, "CloudDismiss");
        arrembeds.push(emdCloudDismiss);
        var emdCloudEdit = new ville.embed.fluent.CloudEdit(svgsize, null, null, "CloudEdit");
        arrembeds.push(emdCloudEdit);
        var emdCloudError = new ville.embed.fluent.CloudError(svgsize, null, null, "CloudError");
        arrembeds.push(emdCloudError);
        var emdCloudFlow = new ville.embed.fluent.CloudFlow(svgsize, null, null, "CloudFlow");
        arrembeds.push(emdCloudFlow);
        var emdCloudLink = new ville.embed.fluent.CloudLink(svgsize, null, null, "CloudLink");
        arrembeds.push(emdCloudLink);
        var emdCloudOff = new ville.embed.fluent.CloudOff(svgsize, null, null, "CloudOff");
        arrembeds.push(emdCloudOff);
        var emdCloudSwap = new ville.embed.fluent.CloudSwap(svgsize, null, null, "CloudSwap");
        arrembeds.push(emdCloudSwap);
        var emdCloudSync = new ville.embed.fluent.CloudSync(svgsize, null, null, "CloudSync");
        arrembeds.push(emdCloudSync);
        var emdCloudWords = new ville.embed.fluent.CloudWords(svgsize, null, null, "CloudWords");
        arrembeds.push(emdCloudWords);
        var emdClover = new ville.embed.fluent.Clover(svgsize, null, null, "Clover");
        arrembeds.push(emdClover);
        var emdCode = new ville.embed.fluent.Code(svgsize, null, null, "Code");
        arrembeds.push(emdCode);
        var emdCodeBlock = new ville.embed.fluent.CodeBlock(svgsize, null, null, "CodeBlock");
        arrembeds.push(emdCodeBlock);
        var emdCodeCircle = new ville.embed.fluent.CodeCircle(svgsize, null, null, "CodeCircle");
        arrembeds.push(emdCodeCircle);
        var emdCodeText = new ville.embed.fluent.CodeText(svgsize, null, null, "CodeText");
        arrembeds.push(emdCodeText);
        var emdCodeTextEdit = new ville.embed.fluent.CodeTextEdit(svgsize, null, null, "CodeTextEdit");
        arrembeds.push(emdCodeTextEdit);
        var emdCollections = new ville.embed.fluent.Collections(svgsize, null, null, "Collections");
        arrembeds.push(emdCollections);
        var emdCollectionsAdd = new ville.embed.fluent.CollectionsAdd(svgsize, null, null, "CollectionsAdd");
        arrembeds.push(emdCollectionsAdd);
        var emdColor = new ville.embed.fluent.Color(svgsize, null, null, "Color");
        arrembeds.push(emdColor);
        var emdColorBackground = new ville.embed.fluent.ColorBackground(svgsize, null, null, "ColorBackground");
        arrembeds.push(emdColorBackground);
        var emdColorBackgroundAccent = new ville.embed.fluent.ColorBackgroundAccent(svgsize, null, null, "ColorBackgroundAccent");
        arrembeds.push(emdColorBackgroundAccent);
        var emdColorFill = new ville.embed.fluent.ColorFill(svgsize, null, null, "ColorFill");
        arrembeds.push(emdColorFill);
        var emdColorFillAccent = new ville.embed.fluent.ColorFillAccent(svgsize, null, null, "ColorFillAccent");
        arrembeds.push(emdColorFillAccent);
        var emdColorLine = new ville.embed.fluent.ColorLine(svgsize, null, null, "ColorLine");
        arrembeds.push(emdColorLine);
        var emdColorLineAccent = new ville.embed.fluent.ColorLineAccent(svgsize, null, null, "ColorLineAccent");
        arrembeds.push(emdColorLineAccent);
        var emdColumn = new ville.embed.fluent.Column(svgsize, null, null, "Column");
        arrembeds.push(emdColumn);
        var emdColumnArrowRight = new ville.embed.fluent.ColumnArrowRight(svgsize, null, null, "ColumnArrowRight");
        arrembeds.push(emdColumnArrowRight);
        var emdColumnDoubleCompare = new ville.embed.fluent.ColumnDoubleCompare(svgsize, null, null, "ColumnDoubleCompare");
        arrembeds.push(emdColumnDoubleCompare);
        var emdColumnEdit = new ville.embed.fluent.ColumnEdit(svgsize, null, null, "ColumnEdit");
        arrembeds.push(emdColumnEdit);
        var emdColumnSingleCompare = new ville.embed.fluent.ColumnSingleCompare(svgsize, null, null, "ColumnSingleCompare");
        arrembeds.push(emdColumnSingleCompare);
        var emdColumnTriple = new ville.embed.fluent.ColumnTriple(svgsize, null, null, "ColumnTriple");
        arrembeds.push(emdColumnTriple);
        var emdColumnTripleEdit = new ville.embed.fluent.ColumnTripleEdit(svgsize, null, null, "ColumnTripleEdit");
        arrembeds.push(emdColumnTripleEdit);
        var emdComma = new ville.embed.fluent.Comma(svgsize, null, null, "Comma");
        arrembeds.push(emdComma);
        var emdComment = new ville.embed.fluent.Comment(svgsize, null, null, "Comment");
        arrembeds.push(emdComment);
        var emdCommentAdd = new ville.embed.fluent.CommentAdd(svgsize, null, null, "CommentAdd");
        arrembeds.push(emdCommentAdd);
        var emdCommentArrowLeft = new ville.embed.fluent.CommentArrowLeft(svgsize, null, null, "CommentArrowLeft");
        arrembeds.push(emdCommentArrowLeft);
        var emdCommentArrowRight = new ville.embed.fluent.CommentArrowRight(svgsize, null, null, "CommentArrowRight");
        arrembeds.push(emdCommentArrowRight);
        var emdCommentCheckmark = new ville.embed.fluent.CommentCheckmark(svgsize, null, null, "CommentCheckmark");
        arrembeds.push(emdCommentCheckmark);
        var emdCommentDismiss = new ville.embed.fluent.CommentDismiss(svgsize, null, null, "CommentDismiss");
        arrembeds.push(emdCommentDismiss);
        var emdCommentEdit = new ville.embed.fluent.CommentEdit(svgsize, null, null, "CommentEdit");
        arrembeds.push(emdCommentEdit);
        var emdCommentError = new ville.embed.fluent.CommentError(svgsize, null, null, "CommentError");
        arrembeds.push(emdCommentError);
        var emdCommentLightning = new ville.embed.fluent.CommentLightning(svgsize, null, null, "CommentLightning");
        arrembeds.push(emdCommentLightning);
        var emdCommentLink = new ville.embed.fluent.CommentLink(svgsize, null, null, "CommentLink");
        arrembeds.push(emdCommentLink);
        var emdCommentMention = new ville.embed.fluent.CommentMention(svgsize, null, null, "CommentMention");
        arrembeds.push(emdCommentMention);
        var emdCommentMultiple = new ville.embed.fluent.CommentMultiple(svgsize, null, null, "CommentMultiple");
        arrembeds.push(emdCommentMultiple);
        var emdCommentMultipleCheckmark = new ville.embed.fluent.CommentMultipleCheckmark(svgsize, null, null, "CommentMultipleCheckmark");
        arrembeds.push(emdCommentMultipleCheckmark);
        var emdCommentMultipleLink = new ville.embed.fluent.CommentMultipleLink(svgsize, null, null, "CommentMultipleLink");
        arrembeds.push(emdCommentMultipleLink);
        var emdCommentNote = new ville.embed.fluent.CommentNote(svgsize, null, null, "CommentNote");
        arrembeds.push(emdCommentNote);
        var emdCommentOff = new ville.embed.fluent.CommentOff(svgsize, null, null, "CommentOff");
        arrembeds.push(emdCommentOff);
        var emdCommunication = new ville.embed.fluent.Communication(svgsize, null, null, "Communication");
        arrembeds.push(emdCommunication);
        var emdCommunicationPerson = new ville.embed.fluent.CommunicationPerson(svgsize, null, null, "CommunicationPerson");
        arrembeds.push(emdCommunicationPerson);
        var emdCommunicationShield = new ville.embed.fluent.CommunicationShield(svgsize, null, null, "CommunicationShield");
        arrembeds.push(emdCommunicationShield);
        var emdCompassNorthwest = new ville.embed.fluent.CompassNorthwest(svgsize, null, null, "CompassNorthwest");
        arrembeds.push(emdCompassNorthwest);
        var emdCompose = new ville.embed.fluent.Compose(svgsize, null, null, "Compose");
        arrembeds.push(emdCompose);
        var emdConferenceRoom = new ville.embed.fluent.ConferenceRoom(svgsize, null, null, "ConferenceRoom");
        arrembeds.push(emdConferenceRoom);
        var emdConnected = new ville.embed.fluent.Connected(svgsize, null, null, "Connected");
        arrembeds.push(emdConnected);
        var emdConnector = new ville.embed.fluent.Connector(svgsize, null, null, "Connector");
        arrembeds.push(emdConnector);
        var emdContactCard = new ville.embed.fluent.ContactCard(svgsize, null, null, "ContactCard");
        arrembeds.push(emdContactCard);
        var emdContactCardGroup = new ville.embed.fluent.ContactCardGroup(svgsize, null, null, "ContactCardGroup");
        arrembeds.push(emdContactCardGroup);
        var emdContactCardLink = new ville.embed.fluent.ContactCardLink(svgsize, null, null, "ContactCardLink");
        arrembeds.push(emdContactCardLink);
        var emdContactCardRibbon = new ville.embed.fluent.ContactCardRibbon(svgsize, null, null, "ContactCardRibbon");
        arrembeds.push(emdContactCardRibbon);
        var emdContentSettings = new ville.embed.fluent.ContentSettings(svgsize, null, null, "ContentSettings");
        arrembeds.push(emdContentSettings);
        var emdContentView = new ville.embed.fluent.ContentView(svgsize, null, null, "ContentView");
        arrembeds.push(emdContentView);
        var emdContentViewGallery = new ville.embed.fluent.ContentViewGallery(svgsize, null, null, "ContentViewGallery");
        arrembeds.push(emdContentViewGallery);
        var emdContentViewGalleryLightning = new ville.embed.fluent.ContentViewGalleryLightning(svgsize, null, null, "ContentViewGalleryLightning");
        arrembeds.push(emdContentViewGalleryLightning);
        var emdContractDownLeft = new ville.embed.fluent.ContractDownLeft(svgsize, null, null, "ContractDownLeft");
        arrembeds.push(emdContractDownLeft);
        var emdContractUpRight = new ville.embed.fluent.ContractUpRight(svgsize, null, null, "ContractUpRight");
        arrembeds.push(emdContractUpRight);
        var emdControlButton = new ville.embed.fluent.ControlButton(svgsize, null, null, "ControlButton");
        arrembeds.push(emdControlButton);
        var emdConvertRange = new ville.embed.fluent.ConvertRange(svgsize, null, null, "ConvertRange");
        arrembeds.push(emdConvertRange);
        var emdCookies = new ville.embed.fluent.Cookies(svgsize, null, null, "Cookies");
        arrembeds.push(emdCookies);
        var emdCopy = new ville.embed.fluent.Copy(svgsize, null, null, "Copy");
        arrembeds.push(emdCopy);
        var emdCopyAdd = new ville.embed.fluent.CopyAdd(svgsize, null, null, "CopyAdd");
        arrembeds.push(emdCopyAdd);
        var emdCopyArrowRight = new ville.embed.fluent.CopyArrowRight(svgsize, null, null, "CopyArrowRight");
        arrembeds.push(emdCopyArrowRight);
        var emdCopySelect = new ville.embed.fluent.CopySelect(svgsize, null, null, "CopySelect");
        arrembeds.push(emdCopySelect);
        var emdCouch = new ville.embed.fluent.Couch(svgsize, null, null, "Couch");
        arrembeds.push(emdCouch);
        var emdCreditCardClock = new ville.embed.fluent.CreditCardClock(svgsize, null, null, "CreditCardClock");
        arrembeds.push(emdCreditCardClock);
        var emdCreditCardPerson = new ville.embed.fluent.CreditCardPerson(svgsize, null, null, "CreditCardPerson");
        arrembeds.push(emdCreditCardPerson);
        var emdCreditCardToolbox = new ville.embed.fluent.CreditCardToolbox(svgsize, null, null, "CreditCardToolbox");
        arrembeds.push(emdCreditCardToolbox);
        var emdCrop = new ville.embed.fluent.Crop(svgsize, null, null, "Crop");
        arrembeds.push(emdCrop);
        var emdCropArrowRotate = new ville.embed.fluent.CropArrowRotate(svgsize, null, null, "CropArrowRotate");
        arrembeds.push(emdCropArrowRotate);
        var emdCropInterim = new ville.embed.fluent.CropInterim(svgsize, null, null, "CropInterim");
        arrembeds.push(emdCropInterim);
        var emdCropInterimOff = new ville.embed.fluent.CropInterimOff(svgsize, null, null, "CropInterimOff");
        arrembeds.push(emdCropInterimOff);
        var emdCrown = new ville.embed.fluent.Crown(svgsize, null, null, "Crown");
        arrembeds.push(emdCrown);
        var emdCube = new ville.embed.fluent.Cube(svgsize, null, null, "Cube");
        arrembeds.push(emdCube);
        var emdCubeAdd = new ville.embed.fluent.CubeAdd(svgsize, null, null, "CubeAdd");
        arrembeds.push(emdCubeAdd);
        var emdCubeArrowCurveDown = new ville.embed.fluent.CubeArrowCurveDown(svgsize, null, null, "CubeArrowCurveDown");
        arrembeds.push(emdCubeArrowCurveDown);
        var emdCubeLink = new ville.embed.fluent.CubeLink(svgsize, null, null, "CubeLink");
        arrembeds.push(emdCubeLink);
        var emdCubeMultiple = new ville.embed.fluent.CubeMultiple(svgsize, null, null, "CubeMultiple");
        arrembeds.push(emdCubeMultiple);
        var emdCubeQuick = new ville.embed.fluent.CubeQuick(svgsize, null, null, "CubeQuick");
        arrembeds.push(emdCubeQuick);
        var emdCubeRotate = new ville.embed.fluent.CubeRotate(svgsize, null, null, "CubeRotate");
        arrembeds.push(emdCubeRotate);
        var emdCubeSync = new ville.embed.fluent.CubeSync(svgsize, null, null, "CubeSync");
        arrembeds.push(emdCubeSync);
        var emdCubeTree = new ville.embed.fluent.CubeTree(svgsize, null, null, "CubeTree");
        arrembeds.push(emdCubeTree);
        var emdCurrencyDollarEuro = new ville.embed.fluent.CurrencyDollarEuro(svgsize, null, null, "CurrencyDollarEuro");
        arrembeds.push(emdCurrencyDollarEuro);
        var emdCurrencyDollarRupee = new ville.embed.fluent.CurrencyDollarRupee(svgsize, null, null, "CurrencyDollarRupee");
        arrembeds.push(emdCurrencyDollarRupee);
        var emdCursor = new ville.embed.fluent.Cursor(svgsize, null, null, "Cursor");
        arrembeds.push(emdCursor);
        var emdCursorClick = new ville.embed.fluent.CursorClick(svgsize, null, null, "CursorClick");
        arrembeds.push(emdCursorClick);
        var emdCursorHover = new ville.embed.fluent.CursorHover(svgsize, null, null, "CursorHover");
        arrembeds.push(emdCursorHover);
        var emdCursorHoverOff = new ville.embed.fluent.CursorHoverOff(svgsize, null, null, "CursorHoverOff");
        arrembeds.push(emdCursorHoverOff);
        var emdCursorProhibited = new ville.embed.fluent.CursorProhibited(svgsize, null, null, "CursorProhibited");
        arrembeds.push(emdCursorProhibited);
        var emdCut = new ville.embed.fluent.Cut(svgsize, null, null, "Cut");
        arrembeds.push(emdCut);
        var emdDarkTheme = new ville.embed.fluent.DarkTheme(svgsize, null, null, "DarkTheme");
        arrembeds.push(emdDarkTheme);
        var emdDataArea = new ville.embed.fluent.DataArea(svgsize, null, null, "DataArea");
        arrembeds.push(emdDataArea);
        var emdDataBarHorizontal = new ville.embed.fluent.DataBarHorizontal(svgsize, null, null, "DataBarHorizontal");
        arrembeds.push(emdDataBarHorizontal);
        var emdDataBarVertical = new ville.embed.fluent.DataBarVertical(svgsize, null, null, "DataBarVertical");
        arrembeds.push(emdDataBarVertical);
        var emdDataBarVerticalAdd = new ville.embed.fluent.DataBarVerticalAdd(svgsize, null, null, "DataBarVerticalAdd");
        arrembeds.push(emdDataBarVerticalAdd);
        var emdDataBarVerticalArrowDown = new ville.embed.fluent.DataBarVerticalArrowDown(svgsize, null, null, "DataBarVerticalArrowDown");
        arrembeds.push(emdDataBarVerticalArrowDown);
        var emdDataBarVerticalAscending = new ville.embed.fluent.DataBarVerticalAscending(svgsize, null, null, "DataBarVerticalAscending");
        arrembeds.push(emdDataBarVerticalAscending);
        var emdDataBarVerticalStar = new ville.embed.fluent.DataBarVerticalStar(svgsize, null, null, "DataBarVerticalStar");
        arrembeds.push(emdDataBarVerticalStar);
        var emdDataFunnel = new ville.embed.fluent.DataFunnel(svgsize, null, null, "DataFunnel");
        arrembeds.push(emdDataFunnel);
        var emdDataHistogram = new ville.embed.fluent.DataHistogram(svgsize, null, null, "DataHistogram");
        arrembeds.push(emdDataHistogram);
        var emdDataLine = new ville.embed.fluent.DataLine(svgsize, null, null, "DataLine");
        arrembeds.push(emdDataLine);
        var emdDataPie = new ville.embed.fluent.DataPie(svgsize, null, null, "DataPie");
        arrembeds.push(emdDataPie);
        var emdDataScatter = new ville.embed.fluent.DataScatter(svgsize, null, null, "DataScatter");
        arrembeds.push(emdDataScatter);
        var emdDataSunburst = new ville.embed.fluent.DataSunburst(svgsize, null, null, "DataSunburst");
        arrembeds.push(emdDataSunburst);
        var emdDataTreemap = new ville.embed.fluent.DataTreemap(svgsize, null, null, "DataTreemap");
        arrembeds.push(emdDataTreemap);
        var emdDataTrending = new ville.embed.fluent.DataTrending(svgsize, null, null, "DataTrending");
        arrembeds.push(emdDataTrending);
        var emdDataUsage = new ville.embed.fluent.DataUsage(svgsize, null, null, "DataUsage");
        arrembeds.push(emdDataUsage);
        var emdDataUsageEdit = new ville.embed.fluent.DataUsageEdit(svgsize, null, null, "DataUsageEdit");
        arrembeds.push(emdDataUsageEdit);
        var emdDataUsageSettings = new ville.embed.fluent.DataUsageSettings(svgsize, null, null, "DataUsageSettings");
        arrembeds.push(emdDataUsageSettings);
        var emdDataUsageToolbox = new ville.embed.fluent.DataUsageToolbox(svgsize, null, null, "DataUsageToolbox");
        arrembeds.push(emdDataUsageToolbox);
        var emdDataWaterfall = new ville.embed.fluent.DataWaterfall(svgsize, null, null, "DataWaterfall");
        arrembeds.push(emdDataWaterfall);
        var emdDataWhisker = new ville.embed.fluent.DataWhisker(svgsize, null, null, "DataWhisker");
        arrembeds.push(emdDataWhisker);
        var emdDatabase = new ville.embed.fluent.Database(svgsize, null, null, "Database");
        arrembeds.push(emdDatabase);
        var emdDatabaseArrowDown = new ville.embed.fluent.DatabaseArrowDown(svgsize, null, null, "DatabaseArrowDown");
        arrembeds.push(emdDatabaseArrowDown);
        var emdDatabaseArrowRight = new ville.embed.fluent.DatabaseArrowRight(svgsize, null, null, "DatabaseArrowRight");
        arrembeds.push(emdDatabaseArrowRight);
        var emdDatabaseArrowUp = new ville.embed.fluent.DatabaseArrowUp(svgsize, null, null, "DatabaseArrowUp");
        arrembeds.push(emdDatabaseArrowUp);
        var emdDatabaseLightning = new ville.embed.fluent.DatabaseLightning(svgsize, null, null, "DatabaseLightning");
        arrembeds.push(emdDatabaseLightning);
        var emdDatabaseLink = new ville.embed.fluent.DatabaseLink(svgsize, null, null, "DatabaseLink");
        arrembeds.push(emdDatabaseLink);
        var emdDatabaseMultiple = new ville.embed.fluent.DatabaseMultiple(svgsize, null, null, "DatabaseMultiple");
        arrembeds.push(emdDatabaseMultiple);
        var emdDatabasePerson = new ville.embed.fluent.DatabasePerson(svgsize, null, null, "DatabasePerson");
        arrembeds.push(emdDatabasePerson);
        var emdDatabasePlugConnected = new ville.embed.fluent.DatabasePlugConnected(svgsize, null, null, "DatabasePlugConnected");
        arrembeds.push(emdDatabasePlugConnected);
        var emdDatabaseSearch = new ville.embed.fluent.DatabaseSearch(svgsize, null, null, "DatabaseSearch");
        arrembeds.push(emdDatabaseSearch);
        var emdDatabaseSwitch = new ville.embed.fluent.DatabaseSwitch(svgsize, null, null, "DatabaseSwitch");
        arrembeds.push(emdDatabaseSwitch);
        var emdDatabaseWarning = new ville.embed.fluent.DatabaseWarning(svgsize, null, null, "DatabaseWarning");
        arrembeds.push(emdDatabaseWarning);
        var emdDatabaseWindow = new ville.embed.fluent.DatabaseWindow(svgsize, null, null, "DatabaseWindow");
        arrembeds.push(emdDatabaseWindow);
        var emdDecimalArrowLeft = new ville.embed.fluent.DecimalArrowLeft(svgsize, null, null, "DecimalArrowLeft");
        arrembeds.push(emdDecimalArrowLeft);
        var emdDecimalArrowRight = new ville.embed.fluent.DecimalArrowRight(svgsize, null, null, "DecimalArrowRight");
        arrembeds.push(emdDecimalArrowRight);
        var emdDelete = new ville.embed.fluent.Delete(svgsize, null, null, "Delete");
        arrembeds.push(emdDelete);
        var emdDeleteArrowBack = new ville.embed.fluent.DeleteArrowBack(svgsize, null, null, "DeleteArrowBack");
        arrembeds.push(emdDeleteArrowBack);
        var emdDeleteDismiss = new ville.embed.fluent.DeleteDismiss(svgsize, null, null, "DeleteDismiss");
        arrembeds.push(emdDeleteDismiss);
        var emdDeleteLines = new ville.embed.fluent.DeleteLines(svgsize, null, null, "DeleteLines");
        arrembeds.push(emdDeleteLines);
        var emdDeleteOff = new ville.embed.fluent.DeleteOff(svgsize, null, null, "DeleteOff");
        arrembeds.push(emdDeleteOff);
        var emdDentist = new ville.embed.fluent.Dentist(svgsize, null, null, "Dentist");
        arrembeds.push(emdDentist);
        var emdDesignIdeas = new ville.embed.fluent.DesignIdeas(svgsize, null, null, "DesignIdeas");
        arrembeds.push(emdDesignIdeas);
        var emdDesk = new ville.embed.fluent.Desk(svgsize, null, null, "Desk");
        arrembeds.push(emdDesk);
        var emdDesktop = new ville.embed.fluent.Desktop(svgsize, null, null, "Desktop");
        arrembeds.push(emdDesktop);
        var emdDesktopArrowDown = new ville.embed.fluent.DesktopArrowDown(svgsize, null, null, "DesktopArrowDown");
        arrembeds.push(emdDesktopArrowDown);
        var emdDesktopArrowRight = new ville.embed.fluent.DesktopArrowRight(svgsize, null, null, "DesktopArrowRight");
        arrembeds.push(emdDesktopArrowRight);
        var emdDesktopCheckmark = new ville.embed.fluent.DesktopCheckmark(svgsize, null, null, "DesktopCheckmark");
        arrembeds.push(emdDesktopCheckmark);
        var emdDesktopCursor = new ville.embed.fluent.DesktopCursor(svgsize, null, null, "DesktopCursor");
        arrembeds.push(emdDesktopCursor);
        var emdDesktopEdit = new ville.embed.fluent.DesktopEdit(svgsize, null, null, "DesktopEdit");
        arrembeds.push(emdDesktopEdit);
        var emdDesktopFlow = new ville.embed.fluent.DesktopFlow(svgsize, null, null, "DesktopFlow");
        arrembeds.push(emdDesktopFlow);
        var emdDesktopKeyboard = new ville.embed.fluent.DesktopKeyboard(svgsize, null, null, "DesktopKeyboard");
        arrembeds.push(emdDesktopKeyboard);
        var emdDesktopMac = new ville.embed.fluent.DesktopMac(svgsize, null, null, "DesktopMac");
        arrembeds.push(emdDesktopMac);
        var emdDesktopOff = new ville.embed.fluent.DesktopOff(svgsize, null, null, "DesktopOff");
        arrembeds.push(emdDesktopOff);
        var emdDesktopPulse = new ville.embed.fluent.DesktopPulse(svgsize, null, null, "DesktopPulse");
        arrembeds.push(emdDesktopPulse);
        var emdDesktopSignal = new ville.embed.fluent.DesktopSignal(svgsize, null, null, "DesktopSignal");
        arrembeds.push(emdDesktopSignal);
        var emdDesktopSpeaker = new ville.embed.fluent.DesktopSpeaker(svgsize, null, null, "DesktopSpeaker");
        arrembeds.push(emdDesktopSpeaker);
        var emdDesktopSpeakerOff = new ville.embed.fluent.DesktopSpeakerOff(svgsize, null, null, "DesktopSpeakerOff");
        arrembeds.push(emdDesktopSpeakerOff);
        var emdDesktopSync = new ville.embed.fluent.DesktopSync(svgsize, null, null, "DesktopSync");
        arrembeds.push(emdDesktopSync);
        var emdDesktopToolbox = new ville.embed.fluent.DesktopToolbox(svgsize, null, null, "DesktopToolbox");
        arrembeds.push(emdDesktopToolbox);
        var emdDesktopTower = new ville.embed.fluent.DesktopTower(svgsize, null, null, "DesktopTower");
        arrembeds.push(emdDesktopTower);
        var emdDeveloperBoard = new ville.embed.fluent.DeveloperBoard(svgsize, null, null, "DeveloperBoard");
        arrembeds.push(emdDeveloperBoard);
        var emdDeveloperBoardLightning = new ville.embed.fluent.DeveloperBoardLightning(svgsize, null, null, "DeveloperBoardLightning");
        arrembeds.push(emdDeveloperBoardLightning);
        var emdDeveloperBoardLightningToolbox = new ville.embed.fluent.DeveloperBoardLightningToolbox(svgsize, null, null, "DeveloperBoardLightningToolbox");
        arrembeds.push(emdDeveloperBoardLightningToolbox);
        var emdDeveloperBoardSearch = new ville.embed.fluent.DeveloperBoardSearch(svgsize, null, null, "DeveloperBoardSearch");
        arrembeds.push(emdDeveloperBoardSearch);
        var emdDeviceEq = new ville.embed.fluent.DeviceEq(svgsize, null, null, "DeviceEq");
        arrembeds.push(emdDeviceEq);
        var emdDeviceMeetingRoom = new ville.embed.fluent.DeviceMeetingRoom(svgsize, null, null, "DeviceMeetingRoom");
        arrembeds.push(emdDeviceMeetingRoom);
        var emdDeviceMeetingRoomRemote = new ville.embed.fluent.DeviceMeetingRoomRemote(svgsize, null, null, "DeviceMeetingRoomRemote");
        arrembeds.push(emdDeviceMeetingRoomRemote);
        var emdDiagram = new ville.embed.fluent.Diagram(svgsize, null, null, "Diagram");
        arrembeds.push(emdDiagram);
        var emdDialpad = new ville.embed.fluent.Dialpad(svgsize, null, null, "Dialpad");
        arrembeds.push(emdDialpad);
        var emdDialpadOff = new ville.embed.fluent.DialpadOff(svgsize, null, null, "DialpadOff");
        arrembeds.push(emdDialpadOff);
        var emdDialpadQuestionMark = new ville.embed.fluent.DialpadQuestionMark(svgsize, null, null, "DialpadQuestionMark");
        arrembeds.push(emdDialpadQuestionMark);
        var emdDiamond = new ville.embed.fluent.Diamond(svgsize, null, null, "Diamond");
        arrembeds.push(emdDiamond);
        var emdDirections = new ville.embed.fluent.Directions(svgsize, null, null, "Directions");
        arrembeds.push(emdDirections);
        var emdDishwasher = new ville.embed.fluent.Dishwasher(svgsize, null, null, "Dishwasher");
        arrembeds.push(emdDishwasher);
        var emdDismiss = new ville.embed.fluent.Dismiss(svgsize, null, null, "Dismiss");
        arrembeds.push(emdDismiss);
        var emdDismissCircle = new ville.embed.fluent.DismissCircle(svgsize, null, null, "DismissCircle");
        arrembeds.push(emdDismissCircle);
        var emdDismissSquare = new ville.embed.fluent.DismissSquare(svgsize, null, null, "DismissSquare");
        arrembeds.push(emdDismissSquare);
        var emdDismissSquareMultiple = new ville.embed.fluent.DismissSquareMultiple(svgsize, null, null, "DismissSquareMultiple");
        arrembeds.push(emdDismissSquareMultiple);
        var emdDiversity = new ville.embed.fluent.Diversity(svgsize, null, null, "Diversity");
        arrembeds.push(emdDiversity);
        var emdDividerShort = new ville.embed.fluent.DividerShort(svgsize, null, null, "DividerShort");
        arrembeds.push(emdDividerShort);
        var emdDividerTall = new ville.embed.fluent.DividerTall(svgsize, null, null, "DividerTall");
        arrembeds.push(emdDividerTall);
        var emdDock = new ville.embed.fluent.Dock(svgsize, null, null, "Dock");
        arrembeds.push(emdDock);
        var emdDockRow = new ville.embed.fluent.DockRow(svgsize, null, null, "DockRow");
        arrembeds.push(emdDockRow);
        var emdDoctor = new ville.embed.fluent.Doctor(svgsize, null, null, "Doctor");
        arrembeds.push(emdDoctor);
        var emdDocument100 = new ville.embed.fluent.Document100(svgsize, null, null, "Document100");
        arrembeds.push(emdDocument100);
        var emdDocument = new ville.embed.fluent.Document(svgsize, null, null, "Document");
        arrembeds.push(emdDocument);
        var emdDocumentAdd = new ville.embed.fluent.DocumentAdd(svgsize, null, null, "DocumentAdd");
        arrembeds.push(emdDocumentAdd);
        var emdDocumentArrowDown = new ville.embed.fluent.DocumentArrowDown(svgsize, null, null, "DocumentArrowDown");
        arrembeds.push(emdDocumentArrowDown);
        var emdDocumentArrowLeft = new ville.embed.fluent.DocumentArrowLeft(svgsize, null, null, "DocumentArrowLeft");
        arrembeds.push(emdDocumentArrowLeft);
        var emdDocumentArrowRight = new ville.embed.fluent.DocumentArrowRight(svgsize, null, null, "DocumentArrowRight");
        arrembeds.push(emdDocumentArrowRight);
        var emdDocumentArrowUp = new ville.embed.fluent.DocumentArrowUp(svgsize, null, null, "DocumentArrowUp");
        arrembeds.push(emdDocumentArrowUp);
        var emdDocumentBorder = new ville.embed.fluent.DocumentBorder(svgsize, null, null, "DocumentBorder");
        arrembeds.push(emdDocumentBorder);
        var emdDocumentBorderPrint = new ville.embed.fluent.DocumentBorderPrint(svgsize, null, null, "DocumentBorderPrint");
        arrembeds.push(emdDocumentBorderPrint);
        var emdDocumentBriefcase = new ville.embed.fluent.DocumentBriefcase(svgsize, null, null, "DocumentBriefcase");
        arrembeds.push(emdDocumentBriefcase);
        var emdDocumentBulletList = new ville.embed.fluent.DocumentBulletList(svgsize, null, null, "DocumentBulletList");
        arrembeds.push(emdDocumentBulletList);
        var emdDocumentBulletListArrowLeft = new ville.embed.fluent.DocumentBulletListArrowLeft(svgsize, null, null, "DocumentBulletListArrowLeft");
        arrembeds.push(emdDocumentBulletListArrowLeft);
        var emdDocumentBulletListClock = new ville.embed.fluent.DocumentBulletListClock(svgsize, null, null, "DocumentBulletListClock");
        arrembeds.push(emdDocumentBulletListClock);
        var emdDocumentBulletListCube = new ville.embed.fluent.DocumentBulletListCube(svgsize, null, null, "DocumentBulletListCube");
        arrembeds.push(emdDocumentBulletListCube);
        var emdDocumentBulletListMultiple = new ville.embed.fluent.DocumentBulletListMultiple(svgsize, null, null, "DocumentBulletListMultiple");
        arrembeds.push(emdDocumentBulletListMultiple);
        var emdDocumentBulletListOff = new ville.embed.fluent.DocumentBulletListOff(svgsize, null, null, "DocumentBulletListOff");
        arrembeds.push(emdDocumentBulletListOff);
        var emdDocumentCatchUp = new ville.embed.fluent.DocumentCatchUp(svgsize, null, null, "DocumentCatchUp");
        arrembeds.push(emdDocumentCatchUp);
        var emdDocumentCheckmark = new ville.embed.fluent.DocumentCheckmark(svgsize, null, null, "DocumentCheckmark");
        arrembeds.push(emdDocumentCheckmark);
        var emdDocumentChevronDouble = new ville.embed.fluent.DocumentChevronDouble(svgsize, null, null, "DocumentChevronDouble");
        arrembeds.push(emdDocumentChevronDouble);
        var emdDocumentCopy = new ville.embed.fluent.DocumentCopy(svgsize, null, null, "DocumentCopy");
        arrembeds.push(emdDocumentCopy);
        var emdDocumentCss = new ville.embed.fluent.DocumentCss(svgsize, null, null, "DocumentCss");
        arrembeds.push(emdDocumentCss);
        var emdDocumentCube = new ville.embed.fluent.DocumentCube(svgsize, null, null, "DocumentCube");
        arrembeds.push(emdDocumentCube);
        var emdDocumentData = new ville.embed.fluent.DocumentData(svgsize, null, null, "DocumentData");
        arrembeds.push(emdDocumentData);
        var emdDocumentDataLink = new ville.embed.fluent.DocumentDataLink(svgsize, null, null, "DocumentDataLink");
        arrembeds.push(emdDocumentDataLink);
        var emdDocumentDataLock = new ville.embed.fluent.DocumentDataLock(svgsize, null, null, "DocumentDataLock");
        arrembeds.push(emdDocumentDataLock);
        var emdDocumentDatabase = new ville.embed.fluent.DocumentDatabase(svgsize, null, null, "DocumentDatabase");
        arrembeds.push(emdDocumentDatabase);
        var emdDocumentDismiss = new ville.embed.fluent.DocumentDismiss(svgsize, null, null, "DocumentDismiss");
        arrembeds.push(emdDocumentDismiss);
        var emdDocumentEdit = new ville.embed.fluent.DocumentEdit(svgsize, null, null, "DocumentEdit");
        arrembeds.push(emdDocumentEdit);
        var emdDocumentEndnote = new ville.embed.fluent.DocumentEndnote(svgsize, null, null, "DocumentEndnote");
        arrembeds.push(emdDocumentEndnote);
        var emdDocumentError = new ville.embed.fluent.DocumentError(svgsize, null, null, "DocumentError");
        arrembeds.push(emdDocumentError);
        var emdDocumentFit = new ville.embed.fluent.DocumentFit(svgsize, null, null, "DocumentFit");
        arrembeds.push(emdDocumentFit);
        var emdDocumentFlowchart = new ville.embed.fluent.DocumentFlowchart(svgsize, null, null, "DocumentFlowchart");
        arrembeds.push(emdDocumentFlowchart);
        var emdDocumentFolder = new ville.embed.fluent.DocumentFolder(svgsize, null, null, "DocumentFolder");
        arrembeds.push(emdDocumentFolder);
        var emdDocumentFooter = new ville.embed.fluent.DocumentFooter(svgsize, null, null, "DocumentFooter");
        arrembeds.push(emdDocumentFooter);
        var emdDocumentFooterDismiss = new ville.embed.fluent.DocumentFooterDismiss(svgsize, null, null, "DocumentFooterDismiss");
        arrembeds.push(emdDocumentFooterDismiss);
        var emdDocumentHeader = new ville.embed.fluent.DocumentHeader(svgsize, null, null, "DocumentHeader");
        arrembeds.push(emdDocumentHeader);
        var emdDocumentHeaderArrowDown = new ville.embed.fluent.DocumentHeaderArrowDown(svgsize, null, null, "DocumentHeaderArrowDown");
        arrembeds.push(emdDocumentHeaderArrowDown);
        var emdDocumentHeaderDismiss = new ville.embed.fluent.DocumentHeaderDismiss(svgsize, null, null, "DocumentHeaderDismiss");
        arrembeds.push(emdDocumentHeaderDismiss);
        var emdDocumentHeaderFooter = new ville.embed.fluent.DocumentHeaderFooter(svgsize, null, null, "DocumentHeaderFooter");
        arrembeds.push(emdDocumentHeaderFooter);
        var emdDocumentHeart = new ville.embed.fluent.DocumentHeart(svgsize, null, null, "DocumentHeart");
        arrembeds.push(emdDocumentHeart);
        var emdDocumentHeartPulse = new ville.embed.fluent.DocumentHeartPulse(svgsize, null, null, "DocumentHeartPulse");
        arrembeds.push(emdDocumentHeartPulse);
        var emdDocumentImage = new ville.embed.fluent.DocumentImage(svgsize, null, null, "DocumentImage");
        arrembeds.push(emdDocumentImage);
        var emdDocumentJava = new ville.embed.fluent.DocumentJava(svgsize, null, null, "DocumentJava");
        arrembeds.push(emdDocumentJava);
        var emdDocumentJavascript = new ville.embed.fluent.DocumentJavascript(svgsize, null, null, "DocumentJavascript");
        arrembeds.push(emdDocumentJavascript);
        var emdDocumentKey = new ville.embed.fluent.DocumentKey(svgsize, null, null, "DocumentKey");
        arrembeds.push(emdDocumentKey);
        var emdDocumentLandscape = new ville.embed.fluent.DocumentLandscape(svgsize, null, null, "DocumentLandscape");
        arrembeds.push(emdDocumentLandscape);
        var emdDocumentLandscapeData = new ville.embed.fluent.DocumentLandscapeData(svgsize, null, null, "DocumentLandscapeData");
        arrembeds.push(emdDocumentLandscapeData);
        var emdDocumentLandscapeSplit = new ville.embed.fluent.DocumentLandscapeSplit(svgsize, null, null, "DocumentLandscapeSplit");
        arrembeds.push(emdDocumentLandscapeSplit);
        var emdDocumentLandscapeSplitHint = new ville.embed.fluent.DocumentLandscapeSplitHint(svgsize, null, null, "DocumentLandscapeSplitHint");
        arrembeds.push(emdDocumentLandscapeSplitHint);
        var emdDocumentLightning = new ville.embed.fluent.DocumentLightning(svgsize, null, null, "DocumentLightning");
        arrembeds.push(emdDocumentLightning);
        var emdDocumentLink = new ville.embed.fluent.DocumentLink(svgsize, null, null, "DocumentLink");
        arrembeds.push(emdDocumentLink);
        var emdDocumentLock = new ville.embed.fluent.DocumentLock(svgsize, null, null, "DocumentLock");
        arrembeds.push(emdDocumentLock);
        var emdDocumentMargins = new ville.embed.fluent.DocumentMargins(svgsize, null, null, "DocumentMargins");
        arrembeds.push(emdDocumentMargins);
        var emdDocumentMention = new ville.embed.fluent.DocumentMention(svgsize, null, null, "DocumentMention");
        arrembeds.push(emdDocumentMention);
        var emdDocumentMultiple = new ville.embed.fluent.DocumentMultiple(svgsize, null, null, "DocumentMultiple");
        arrembeds.push(emdDocumentMultiple);
        var emdDocumentMultiplePercent = new ville.embed.fluent.DocumentMultiplePercent(svgsize, null, null, "DocumentMultiplePercent");
        arrembeds.push(emdDocumentMultiplePercent);
        var emdDocumentMultipleProhibited = new ville.embed.fluent.DocumentMultipleProhibited(svgsize, null, null, "DocumentMultipleProhibited");
        arrembeds.push(emdDocumentMultipleProhibited);
        var emdDocumentMultipleSync = new ville.embed.fluent.DocumentMultipleSync(svgsize, null, null, "DocumentMultipleSync");
        arrembeds.push(emdDocumentMultipleSync);
        var emdDocumentOnePage = new ville.embed.fluent.DocumentOnePage(svgsize, null, null, "DocumentOnePage");
        arrembeds.push(emdDocumentOnePage);
        var emdDocumentOnePageAdd = new ville.embed.fluent.DocumentOnePageAdd(svgsize, null, null, "DocumentOnePageAdd");
        arrembeds.push(emdDocumentOnePageAdd);
        var emdDocumentOnePageColumns = new ville.embed.fluent.DocumentOnePageColumns(svgsize, null, null, "DocumentOnePageColumns");
        arrembeds.push(emdDocumentOnePageColumns);
        var emdDocumentOnePageLink = new ville.embed.fluent.DocumentOnePageLink(svgsize, null, null, "DocumentOnePageLink");
        arrembeds.push(emdDocumentOnePageLink);
        var emdDocumentOnePageMultiple = new ville.embed.fluent.DocumentOnePageMultiple(svgsize, null, null, "DocumentOnePageMultiple");
        arrembeds.push(emdDocumentOnePageMultiple);
        var emdDocumentOnePageSparkle = new ville.embed.fluent.DocumentOnePageSparkle(svgsize, null, null, "DocumentOnePageSparkle");
        arrembeds.push(emdDocumentOnePageSparkle);
        var emdDocumentPageBottomCenter = new ville.embed.fluent.DocumentPageBottomCenter(svgsize, null, null, "DocumentPageBottomCenter");
        arrembeds.push(emdDocumentPageBottomCenter);
        var emdDocumentPageBottomLeft = new ville.embed.fluent.DocumentPageBottomLeft(svgsize, null, null, "DocumentPageBottomLeft");
        arrembeds.push(emdDocumentPageBottomLeft);
        var emdDocumentPageBottomRight = new ville.embed.fluent.DocumentPageBottomRight(svgsize, null, null, "DocumentPageBottomRight");
        arrembeds.push(emdDocumentPageBottomRight);
        var emdDocumentPageBreak = new ville.embed.fluent.DocumentPageBreak(svgsize, null, null, "DocumentPageBreak");
        arrembeds.push(emdDocumentPageBreak);
        var emdDocumentPageNumber = new ville.embed.fluent.DocumentPageNumber(svgsize, null, null, "DocumentPageNumber");
        arrembeds.push(emdDocumentPageNumber);
        var emdDocumentPageTopCenter = new ville.embed.fluent.DocumentPageTopCenter(svgsize, null, null, "DocumentPageTopCenter");
        arrembeds.push(emdDocumentPageTopCenter);
        var emdDocumentPageTopLeft = new ville.embed.fluent.DocumentPageTopLeft(svgsize, null, null, "DocumentPageTopLeft");
        arrembeds.push(emdDocumentPageTopLeft);
        var emdDocumentPageTopRight = new ville.embed.fluent.DocumentPageTopRight(svgsize, null, null, "DocumentPageTopRight");
        arrembeds.push(emdDocumentPageTopRight);
        var emdDocumentPdf = new ville.embed.fluent.DocumentPdf(svgsize, null, null, "DocumentPdf");
        arrembeds.push(emdDocumentPdf);
        var emdDocumentPercent = new ville.embed.fluent.DocumentPercent(svgsize, null, null, "DocumentPercent");
        arrembeds.push(emdDocumentPercent);
        var emdDocumentPerson = new ville.embed.fluent.DocumentPerson(svgsize, null, null, "DocumentPerson");
        arrembeds.push(emdDocumentPerson);
        var emdDocumentPill = new ville.embed.fluent.DocumentPill(svgsize, null, null, "DocumentPill");
        arrembeds.push(emdDocumentPill);
        var emdDocumentPrint = new ville.embed.fluent.DocumentPrint(svgsize, null, null, "DocumentPrint");
        arrembeds.push(emdDocumentPrint);
        var emdDocumentProhibited = new ville.embed.fluent.DocumentProhibited(svgsize, null, null, "DocumentProhibited");
        arrembeds.push(emdDocumentProhibited);
        var emdDocumentQuestionMark = new ville.embed.fluent.DocumentQuestionMark(svgsize, null, null, "DocumentQuestionMark");
        arrembeds.push(emdDocumentQuestionMark);
        var emdDocumentQueue = new ville.embed.fluent.DocumentQueue(svgsize, null, null, "DocumentQueue");
        arrembeds.push(emdDocumentQueue);
        var emdDocumentQueueAdd = new ville.embed.fluent.DocumentQueueAdd(svgsize, null, null, "DocumentQueueAdd");
        arrembeds.push(emdDocumentQueueAdd);
        var emdDocumentQueueMultiple = new ville.embed.fluent.DocumentQueueMultiple(svgsize, null, null, "DocumentQueueMultiple");
        arrembeds.push(emdDocumentQueueMultiple);
        var emdDocumentRibbon = new ville.embed.fluent.DocumentRibbon(svgsize, null, null, "DocumentRibbon");
        arrembeds.push(emdDocumentRibbon);
        var emdDocumentSass = new ville.embed.fluent.DocumentSass(svgsize, null, null, "DocumentSass");
        arrembeds.push(emdDocumentSass);
        var emdDocumentSave = new ville.embed.fluent.DocumentSave(svgsize, null, null, "DocumentSave");
        arrembeds.push(emdDocumentSave);
        var emdDocumentSearch = new ville.embed.fluent.DocumentSearch(svgsize, null, null, "DocumentSearch");
        arrembeds.push(emdDocumentSearch);
        var emdDocumentSettings = new ville.embed.fluent.DocumentSettings(svgsize, null, null, "DocumentSettings");
        arrembeds.push(emdDocumentSettings);
        var emdDocumentSignature = new ville.embed.fluent.DocumentSignature(svgsize, null, null, "DocumentSignature");
        arrembeds.push(emdDocumentSignature);
        var emdDocumentSplitHint = new ville.embed.fluent.DocumentSplitHint(svgsize, null, null, "DocumentSplitHint");
        arrembeds.push(emdDocumentSplitHint);
        var emdDocumentSplitHintOff = new ville.embed.fluent.DocumentSplitHintOff(svgsize, null, null, "DocumentSplitHintOff");
        arrembeds.push(emdDocumentSplitHintOff);
        var emdDocumentSync = new ville.embed.fluent.DocumentSync(svgsize, null, null, "DocumentSync");
        arrembeds.push(emdDocumentSync);
        var emdDocumentTable = new ville.embed.fluent.DocumentTable(svgsize, null, null, "DocumentTable");
        arrembeds.push(emdDocumentTable);
        var emdDocumentTableArrowRight = new ville.embed.fluent.DocumentTableArrowRight(svgsize, null, null, "DocumentTableArrowRight");
        arrembeds.push(emdDocumentTableArrowRight);
        var emdDocumentTableCheckmark = new ville.embed.fluent.DocumentTableCheckmark(svgsize, null, null, "DocumentTableCheckmark");
        arrembeds.push(emdDocumentTableCheckmark);
        var emdDocumentTableCube = new ville.embed.fluent.DocumentTableCube(svgsize, null, null, "DocumentTableCube");
        arrembeds.push(emdDocumentTableCube);
        var emdDocumentTableSearch = new ville.embed.fluent.DocumentTableSearch(svgsize, null, null, "DocumentTableSearch");
        arrembeds.push(emdDocumentTableSearch);
        var emdDocumentTableTruck = new ville.embed.fluent.DocumentTableTruck(svgsize, null, null, "DocumentTableTruck");
        arrembeds.push(emdDocumentTableTruck);
        var emdDocumentTarget = new ville.embed.fluent.DocumentTarget(svgsize, null, null, "DocumentTarget");
        arrembeds.push(emdDocumentTarget);
        var emdDocumentText = new ville.embed.fluent.DocumentText(svgsize, null, null, "DocumentText");
        arrembeds.push(emdDocumentText);
        var emdDocumentTextClock = new ville.embed.fluent.DocumentTextClock(svgsize, null, null, "DocumentTextClock");
        arrembeds.push(emdDocumentTextClock);
        var emdDocumentTextExtract = new ville.embed.fluent.DocumentTextExtract(svgsize, null, null, "DocumentTextExtract");
        arrembeds.push(emdDocumentTextExtract);
        var emdDocumentTextLink = new ville.embed.fluent.DocumentTextLink(svgsize, null, null, "DocumentTextLink");
        arrembeds.push(emdDocumentTextLink);
        var emdDocumentTextToolbox = new ville.embed.fluent.DocumentTextToolbox(svgsize, null, null, "DocumentTextToolbox");
        arrembeds.push(emdDocumentTextToolbox);
        var emdDocumentToolbox = new ville.embed.fluent.DocumentToolbox(svgsize, null, null, "DocumentToolbox");
        arrembeds.push(emdDocumentToolbox);
        var emdDocumentWidth = new ville.embed.fluent.DocumentWidth(svgsize, null, null, "DocumentWidth");
        arrembeds.push(emdDocumentWidth);
        var emdDocumentYml = new ville.embed.fluent.DocumentYml(svgsize, null, null, "DocumentYml");
        arrembeds.push(emdDocumentYml);
        var emdDoor = new ville.embed.fluent.Door(svgsize, null, null, "Door");
        arrembeds.push(emdDoor);
        var emdDoorArrowLeft = new ville.embed.fluent.DoorArrowLeft(svgsize, null, null, "DoorArrowLeft");
        arrembeds.push(emdDoorArrowLeft);
        var emdDoorArrowRight = new ville.embed.fluent.DoorArrowRight(svgsize, null, null, "DoorArrowRight");
        arrembeds.push(emdDoorArrowRight);
        var emdDoorTag = new ville.embed.fluent.DoorTag(svgsize, null, null, "DoorTag");
        arrembeds.push(emdDoorTag);
        var emdDoubleSwipeDown = new ville.embed.fluent.DoubleSwipeDown(svgsize, null, null, "DoubleSwipeDown");
        arrembeds.push(emdDoubleSwipeDown);
        var emdDoubleSwipeUp = new ville.embed.fluent.DoubleSwipeUp(svgsize, null, null, "DoubleSwipeUp");
        arrembeds.push(emdDoubleSwipeUp);
        var emdDoubleTapSwipeDown = new ville.embed.fluent.DoubleTapSwipeDown(svgsize, null, null, "DoubleTapSwipeDown");
        arrembeds.push(emdDoubleTapSwipeDown);
        var emdDoubleTapSwipeUp = new ville.embed.fluent.DoubleTapSwipeUp(svgsize, null, null, "DoubleTapSwipeUp");
        arrembeds.push(emdDoubleTapSwipeUp);
        var emdDrafts = new ville.embed.fluent.Drafts(svgsize, null, null, "Drafts");
        arrembeds.push(emdDrafts);
        var emdDrag = new ville.embed.fluent.Drag(svgsize, null, null, "Drag");
        arrembeds.push(emdDrag);
        var emdDrawImage = new ville.embed.fluent.DrawImage(svgsize, null, null, "DrawImage");
        arrembeds.push(emdDrawImage);
        var emdDrawShape = new ville.embed.fluent.DrawShape(svgsize, null, null, "DrawShape");
        arrembeds.push(emdDrawShape);
        var emdDrawText = new ville.embed.fluent.DrawText(svgsize, null, null, "DrawText");
        arrembeds.push(emdDrawText);
        var emdDrawer = new ville.embed.fluent.Drawer(svgsize, null, null, "Drawer");
        arrembeds.push(emdDrawer);
        var emdDrawerAdd = new ville.embed.fluent.DrawerAdd(svgsize, null, null, "DrawerAdd");
        arrembeds.push(emdDrawerAdd);
        var emdDrawerArrowDownload = new ville.embed.fluent.DrawerArrowDownload(svgsize, null, null, "DrawerArrowDownload");
        arrembeds.push(emdDrawerArrowDownload);
        var emdDrawerDismiss = new ville.embed.fluent.DrawerDismiss(svgsize, null, null, "DrawerDismiss");
        arrembeds.push(emdDrawerDismiss);
        var emdDrawerPlay = new ville.embed.fluent.DrawerPlay(svgsize, null, null, "DrawerPlay");
        arrembeds.push(emdDrawerPlay);
        var emdDrawerSubtract = new ville.embed.fluent.DrawerSubtract(svgsize, null, null, "DrawerSubtract");
        arrembeds.push(emdDrawerSubtract);
        var emdDrinkBeer = new ville.embed.fluent.DrinkBeer(svgsize, null, null, "DrinkBeer");
        arrembeds.push(emdDrinkBeer);
        var emdDrinkBottle = new ville.embed.fluent.DrinkBottle(svgsize, null, null, "DrinkBottle");
        arrembeds.push(emdDrinkBottle);
        var emdDrinkBottleOff = new ville.embed.fluent.DrinkBottleOff(svgsize, null, null, "DrinkBottleOff");
        arrembeds.push(emdDrinkBottleOff);
        var emdDrinkCoffee = new ville.embed.fluent.DrinkCoffee(svgsize, null, null, "DrinkCoffee");
        arrembeds.push(emdDrinkCoffee);
        var emdDrinkMargarita = new ville.embed.fluent.DrinkMargarita(svgsize, null, null, "DrinkMargarita");
        arrembeds.push(emdDrinkMargarita);
        var emdDrinkToGo = new ville.embed.fluent.DrinkToGo(svgsize, null, null, "DrinkToGo");
        arrembeds.push(emdDrinkToGo);
        var emdDrinkWine = new ville.embed.fluent.DrinkWine(svgsize, null, null, "DrinkWine");
        arrembeds.push(emdDrinkWine);
        var emdDriveTrain = new ville.embed.fluent.DriveTrain(svgsize, null, null, "DriveTrain");
        arrembeds.push(emdDriveTrain);
        var emdDrop = new ville.embed.fluent.Drop(svgsize, null, null, "Drop");
        arrembeds.push(emdDrop);
        var emdDualScreen = new ville.embed.fluent.DualScreen(svgsize, null, null, "DualScreen");
        arrembeds.push(emdDualScreen);
        var emdDualScreenAdd = new ville.embed.fluent.DualScreenAdd(svgsize, null, null, "DualScreenAdd");
        arrembeds.push(emdDualScreenAdd);
        var emdDualScreenArrowRight = new ville.embed.fluent.DualScreenArrowRight(svgsize, null, null, "DualScreenArrowRight");
        arrembeds.push(emdDualScreenArrowRight);
        var emdDualScreenArrowUp = new ville.embed.fluent.DualScreenArrowUp(svgsize, null, null, "DualScreenArrowUp");
        arrembeds.push(emdDualScreenArrowUp);
        var emdDualScreenClock = new ville.embed.fluent.DualScreenClock(svgsize, null, null, "DualScreenClock");
        arrembeds.push(emdDualScreenClock);
        var emdDualScreenClosedAlert = new ville.embed.fluent.DualScreenClosedAlert(svgsize, null, null, "DualScreenClosedAlert");
        arrembeds.push(emdDualScreenClosedAlert);
        var emdDualScreenDesktop = new ville.embed.fluent.DualScreenDesktop(svgsize, null, null, "DualScreenDesktop");
        arrembeds.push(emdDualScreenDesktop);
        var emdDualScreenDismiss = new ville.embed.fluent.DualScreenDismiss(svgsize, null, null, "DualScreenDismiss");
        arrembeds.push(emdDualScreenDismiss);
        var emdDualScreenGroup = new ville.embed.fluent.DualScreenGroup(svgsize, null, null, "DualScreenGroup");
        arrembeds.push(emdDualScreenGroup);
        var emdDualScreenHeader = new ville.embed.fluent.DualScreenHeader(svgsize, null, null, "DualScreenHeader");
        arrembeds.push(emdDualScreenHeader);
        var emdDualScreenLock = new ville.embed.fluent.DualScreenLock(svgsize, null, null, "DualScreenLock");
        arrembeds.push(emdDualScreenLock);
        var emdDualScreenMirror = new ville.embed.fluent.DualScreenMirror(svgsize, null, null, "DualScreenMirror");
        arrembeds.push(emdDualScreenMirror);
        var emdDualScreenPagination = new ville.embed.fluent.DualScreenPagination(svgsize, null, null, "DualScreenPagination");
        arrembeds.push(emdDualScreenPagination);
        var emdDualScreenSettings = new ville.embed.fluent.DualScreenSettings(svgsize, null, null, "DualScreenSettings");
        arrembeds.push(emdDualScreenSettings);
        var emdDualScreenSpan = new ville.embed.fluent.DualScreenSpan(svgsize, null, null, "DualScreenSpan");
        arrembeds.push(emdDualScreenSpan);
        var emdDualScreenSpeaker = new ville.embed.fluent.DualScreenSpeaker(svgsize, null, null, "DualScreenSpeaker");
        arrembeds.push(emdDualScreenSpeaker);
        var emdDualScreenStatusBar = new ville.embed.fluent.DualScreenStatusBar(svgsize, null, null, "DualScreenStatusBar");
        arrembeds.push(emdDualScreenStatusBar);
        var emdDualScreenTablet = new ville.embed.fluent.DualScreenTablet(svgsize, null, null, "DualScreenTablet");
        arrembeds.push(emdDualScreenTablet);
        var emdDualScreenUpdate = new ville.embed.fluent.DualScreenUpdate(svgsize, null, null, "DualScreenUpdate");
        arrembeds.push(emdDualScreenUpdate);
        var emdDualScreenVerticalScroll = new ville.embed.fluent.DualScreenVerticalScroll(svgsize, null, null, "DualScreenVerticalScroll");
        arrembeds.push(emdDualScreenVerticalScroll);
        var emdDualScreenVibrate = new ville.embed.fluent.DualScreenVibrate(svgsize, null, null, "DualScreenVibrate");
        arrembeds.push(emdDualScreenVibrate);
        var emdDumbbell = new ville.embed.fluent.Dumbbell(svgsize, null, null, "Dumbbell");
        arrembeds.push(emdDumbbell);
        var emdDust = new ville.embed.fluent.Dust(svgsize, null, null, "Dust");
        arrembeds.push(emdDust);
        var emdEarth = new ville.embed.fluent.Earth(svgsize, null, null, "Earth");
        arrembeds.push(emdEarth);
        var emdEarthLeaf = new ville.embed.fluent.EarthLeaf(svgsize, null, null, "EarthLeaf");
        arrembeds.push(emdEarthLeaf);
        var emdEdit = new ville.embed.fluent.Edit(svgsize, null, null, "Edit");
        arrembeds.push(emdEdit);
        var emdEditArrowBack = new ville.embed.fluent.EditArrowBack(svgsize, null, null, "EditArrowBack");
        arrembeds.push(emdEditArrowBack);
        var emdEditOff = new ville.embed.fluent.EditOff(svgsize, null, null, "EditOff");
        arrembeds.push(emdEditOff);
        var emdEditPerson = new ville.embed.fluent.EditPerson(svgsize, null, null, "EditPerson");
        arrembeds.push(emdEditPerson);
        var emdEditProhibited = new ville.embed.fluent.EditProhibited(svgsize, null, null, "EditProhibited");
        arrembeds.push(emdEditProhibited);
        var emdEditSettings = new ville.embed.fluent.EditSettings(svgsize, null, null, "EditSettings");
        arrembeds.push(emdEditSettings);
        var emdElevator = new ville.embed.fluent.Elevator(svgsize, null, null, "Elevator");
        arrembeds.push(emdElevator);
        var emdEmoji = new ville.embed.fluent.Emoji(svgsize, null, null, "Emoji");
        arrembeds.push(emdEmoji);
        var emdEmojiAdd = new ville.embed.fluent.EmojiAdd(svgsize, null, null, "EmojiAdd");
        arrembeds.push(emdEmojiAdd);
        var emdEmojiAngry = new ville.embed.fluent.EmojiAngry(svgsize, null, null, "EmojiAngry");
        arrembeds.push(emdEmojiAngry);
        var emdEmojiEdit = new ville.embed.fluent.EmojiEdit(svgsize, null, null, "EmojiEdit");
        arrembeds.push(emdEmojiEdit);
        var emdEmojiHand = new ville.embed.fluent.EmojiHand(svgsize, null, null, "EmojiHand");
        arrembeds.push(emdEmojiHand);
        var emdEmojiHint = new ville.embed.fluent.EmojiHint(svgsize, null, null, "EmojiHint");
        arrembeds.push(emdEmojiHint);
        var emdEmojiLaugh = new ville.embed.fluent.EmojiLaugh(svgsize, null, null, "EmojiLaugh");
        arrembeds.push(emdEmojiLaugh);
        var emdEmojiMeh = new ville.embed.fluent.EmojiMeh(svgsize, null, null, "EmojiMeh");
        arrembeds.push(emdEmojiMeh);
        var emdEmojiMeme = new ville.embed.fluent.EmojiMeme(svgsize, null, null, "EmojiMeme");
        arrembeds.push(emdEmojiMeme);
        var emdEmojiMultiple = new ville.embed.fluent.EmojiMultiple(svgsize, null, null, "EmojiMultiple");
        arrembeds.push(emdEmojiMultiple);
        var emdEmojiSad = new ville.embed.fluent.EmojiSad(svgsize, null, null, "EmojiSad");
        arrembeds.push(emdEmojiSad);
        var emdEmojiSadSlight = new ville.embed.fluent.EmojiSadSlight(svgsize, null, null, "EmojiSadSlight");
        arrembeds.push(emdEmojiSadSlight);
        var emdEmojiSmileSlight = new ville.embed.fluent.EmojiSmileSlight(svgsize, null, null, "EmojiSmileSlight");
        arrembeds.push(emdEmojiSmileSlight);
        var emdEmojiSparkle = new ville.embed.fluent.EmojiSparkle(svgsize, null, null, "EmojiSparkle");
        arrembeds.push(emdEmojiSparkle);
        var emdEmojiSurprise = new ville.embed.fluent.EmojiSurprise(svgsize, null, null, "EmojiSurprise");
        arrembeds.push(emdEmojiSurprise);
        var emdEngine = new ville.embed.fluent.Engine(svgsize, null, null, "Engine");
        arrembeds.push(emdEngine);
        var emdEqualCircle = new ville.embed.fluent.EqualCircle(svgsize, null, null, "EqualCircle");
        arrembeds.push(emdEqualCircle);
        var emdEqualOff = new ville.embed.fluent.EqualOff(svgsize, null, null, "EqualOff");
        arrembeds.push(emdEqualOff);
        var emdEraser = new ville.embed.fluent.Eraser(svgsize, null, null, "Eraser");
        arrembeds.push(emdEraser);
        var emdEraserMedium = new ville.embed.fluent.EraserMedium(svgsize, null, null, "EraserMedium");
        arrembeds.push(emdEraserMedium);
        var emdEraserSegment = new ville.embed.fluent.EraserSegment(svgsize, null, null, "EraserSegment");
        arrembeds.push(emdEraserSegment);
        var emdEraserSmall = new ville.embed.fluent.EraserSmall(svgsize, null, null, "EraserSmall");
        arrembeds.push(emdEraserSmall);
        var emdEraserTool = new ville.embed.fluent.EraserTool(svgsize, null, null, "EraserTool");
        arrembeds.push(emdEraserTool);
        var emdErrorCircle = new ville.embed.fluent.ErrorCircle(svgsize, null, null, "ErrorCircle");
        arrembeds.push(emdErrorCircle);
        var emdErrorCircleSettings = new ville.embed.fluent.ErrorCircleSettings(svgsize, null, null, "ErrorCircleSettings");
        arrembeds.push(emdErrorCircleSettings);
        var emdExpandUpLeft = new ville.embed.fluent.ExpandUpLeft(svgsize, null, null, "ExpandUpLeft");
        arrembeds.push(emdExpandUpLeft);
        var emdExpandUpRight = new ville.embed.fluent.ExpandUpRight(svgsize, null, null, "ExpandUpRight");
        arrembeds.push(emdExpandUpRight);
        var emdExtendedDock = new ville.embed.fluent.ExtendedDock(svgsize, null, null, "ExtendedDock");
        arrembeds.push(emdExtendedDock);
        var emdEye = new ville.embed.fluent.Eye(svgsize, null, null, "Eye");
        arrembeds.push(emdEye);
        var emdEyeLines = new ville.embed.fluent.EyeLines(svgsize, null, null, "EyeLines");
        arrembeds.push(emdEyeLines);
        var emdEyeOff = new ville.embed.fluent.EyeOff(svgsize, null, null, "EyeOff");
        arrembeds.push(emdEyeOff);
        var emdEyeTracking = new ville.embed.fluent.EyeTracking(svgsize, null, null, "EyeTracking");
        arrembeds.push(emdEyeTracking);
        var emdEyeTrackingOff = new ville.embed.fluent.EyeTrackingOff(svgsize, null, null, "EyeTrackingOff");
        arrembeds.push(emdEyeTrackingOff);
        var emdEyedropper = new ville.embed.fluent.Eyedropper(svgsize, null, null, "Eyedropper");
        arrembeds.push(emdEyedropper);
        var emdEyedropperOff = new ville.embed.fluent.EyedropperOff(svgsize, null, null, "EyedropperOff");
        arrembeds.push(emdEyedropperOff);
        var emdFStop = new ville.embed.fluent.FStop(svgsize, null, null, "FStop");
        arrembeds.push(emdFStop);
        var emdFastAcceleration = new ville.embed.fluent.FastAcceleration(svgsize, null, null, "FastAcceleration");
        arrembeds.push(emdFastAcceleration);
        var emdFastForward = new ville.embed.fluent.FastForward(svgsize, null, null, "FastForward");
        arrembeds.push(emdFastForward);
        var emdFax = new ville.embed.fluent.Fax(svgsize, null, null, "Fax");
        arrembeds.push(emdFax);
        var emdFeed = new ville.embed.fluent.Feed(svgsize, null, null, "Feed");
        arrembeds.push(emdFeed);
        var emdFilmstrip = new ville.embed.fluent.Filmstrip(svgsize, null, null, "Filmstrip");
        arrembeds.push(emdFilmstrip);
        var emdFilmstripImage = new ville.embed.fluent.FilmstripImage(svgsize, null, null, "FilmstripImage");
        arrembeds.push(emdFilmstripImage);
        var emdFilmstripPlay = new ville.embed.fluent.FilmstripPlay(svgsize, null, null, "FilmstripPlay");
        arrembeds.push(emdFilmstripPlay);
        var emdFilmstripSplit = new ville.embed.fluent.FilmstripSplit(svgsize, null, null, "FilmstripSplit");
        arrembeds.push(emdFilmstripSplit);
        var emdFilter = new ville.embed.fluent.Filter(svgsize, null, null, "Filter");
        arrembeds.push(emdFilter);
        var emdFilterAdd = new ville.embed.fluent.FilterAdd(svgsize, null, null, "FilterAdd");
        arrembeds.push(emdFilterAdd);
        var emdFilterDismiss = new ville.embed.fluent.FilterDismiss(svgsize, null, null, "FilterDismiss");
        arrembeds.push(emdFilterDismiss);
        var emdFilterSync = new ville.embed.fluent.FilterSync(svgsize, null, null, "FilterSync");
        arrembeds.push(emdFilterSync);
        var emdFingerprint = new ville.embed.fluent.Fingerprint(svgsize, null, null, "Fingerprint");
        arrembeds.push(emdFingerprint);
        var emdFire = new ville.embed.fluent.Fire(svgsize, null, null, "Fire");
        arrembeds.push(emdFire);
        var emdFireplace = new ville.embed.fluent.Fireplace(svgsize, null, null, "Fireplace");
        arrembeds.push(emdFireplace);
        var emdFixedWidth = new ville.embed.fluent.FixedWidth(svgsize, null, null, "FixedWidth");
        arrembeds.push(emdFixedWidth);
        var emdFlag = new ville.embed.fluent.Flag(svgsize, null, null, "Flag");
        arrembeds.push(emdFlag);
        var emdFlagCheckered = new ville.embed.fluent.FlagCheckered(svgsize, null, null, "FlagCheckered");
        arrembeds.push(emdFlagCheckered);
        var emdFlagClock = new ville.embed.fluent.FlagClock(svgsize, null, null, "FlagClock");
        arrembeds.push(emdFlagClock);
        var emdFlagOff = new ville.embed.fluent.FlagOff(svgsize, null, null, "FlagOff");
        arrembeds.push(emdFlagOff);
        var emdFlash = new ville.embed.fluent.Flash(svgsize, null, null, "Flash");
        arrembeds.push(emdFlash);
        var emdFlashAdd = new ville.embed.fluent.FlashAdd(svgsize, null, null, "FlashAdd");
        arrembeds.push(emdFlashAdd);
        var emdFlashAuto = new ville.embed.fluent.FlashAuto(svgsize, null, null, "FlashAuto");
        arrembeds.push(emdFlashAuto);
        var emdFlashCheckmark = new ville.embed.fluent.FlashCheckmark(svgsize, null, null, "FlashCheckmark");
        arrembeds.push(emdFlashCheckmark);
        var emdFlashFlow = new ville.embed.fluent.FlashFlow(svgsize, null, null, "FlashFlow");
        arrembeds.push(emdFlashFlow);
        var emdFlashOff = new ville.embed.fluent.FlashOff(svgsize, null, null, "FlashOff");
        arrembeds.push(emdFlashOff);
        var emdFlashPlay = new ville.embed.fluent.FlashPlay(svgsize, null, null, "FlashPlay");
        arrembeds.push(emdFlashPlay);
        var emdFlashSettings = new ville.embed.fluent.FlashSettings(svgsize, null, null, "FlashSettings");
        arrembeds.push(emdFlashSettings);
        var emdFlashSparkle = new ville.embed.fluent.FlashSparkle(svgsize, null, null, "FlashSparkle");
        arrembeds.push(emdFlashSparkle);
        var emdFlashlight = new ville.embed.fluent.Flashlight(svgsize, null, null, "Flashlight");
        arrembeds.push(emdFlashlight);
        var emdFlashlightOff = new ville.embed.fluent.FlashlightOff(svgsize, null, null, "FlashlightOff");
        arrembeds.push(emdFlashlightOff);
        var emdFlipHorizontal = new ville.embed.fluent.FlipHorizontal(svgsize, null, null, "FlipHorizontal");
        arrembeds.push(emdFlipHorizontal);
        var emdFlipVertical = new ville.embed.fluent.FlipVertical(svgsize, null, null, "FlipVertical");
        arrembeds.push(emdFlipVertical);
        var emdFlow = new ville.embed.fluent.Flow(svgsize, null, null, "Flow");
        arrembeds.push(emdFlow);
        var emdFlowchart = new ville.embed.fluent.Flowchart(svgsize, null, null, "Flowchart");
        arrembeds.push(emdFlowchart);
        var emdFlowchartCircle = new ville.embed.fluent.FlowchartCircle(svgsize, null, null, "FlowchartCircle");
        arrembeds.push(emdFlowchartCircle);
        var emdFluent = new ville.embed.fluent.Fluent(svgsize, null, null, "Fluent");
        arrembeds.push(emdFluent);
        var emdFluid = new ville.embed.fluent.Fluid(svgsize, null, null, "Fluid");
        arrembeds.push(emdFluid);
        var emdFolder = new ville.embed.fluent.Folder(svgsize, null, null, "Folder");
        arrembeds.push(emdFolder);
        var emdFolderAdd = new ville.embed.fluent.FolderAdd(svgsize, null, null, "FolderAdd");
        arrembeds.push(emdFolderAdd);
        var emdFolderArrowLeft = new ville.embed.fluent.FolderArrowLeft(svgsize, null, null, "FolderArrowLeft");
        arrembeds.push(emdFolderArrowLeft);
        var emdFolderArrowRight = new ville.embed.fluent.FolderArrowRight(svgsize, null, null, "FolderArrowRight");
        arrembeds.push(emdFolderArrowRight);
        var emdFolderArrowUp = new ville.embed.fluent.FolderArrowUp(svgsize, null, null, "FolderArrowUp");
        arrembeds.push(emdFolderArrowUp);
        var emdFolderBriefcase = new ville.embed.fluent.FolderBriefcase(svgsize, null, null, "FolderBriefcase");
        arrembeds.push(emdFolderBriefcase);
        var emdFolderGlobe = new ville.embed.fluent.FolderGlobe(svgsize, null, null, "FolderGlobe");
        arrembeds.push(emdFolderGlobe);
        var emdFolderLightning = new ville.embed.fluent.FolderLightning(svgsize, null, null, "FolderLightning");
        arrembeds.push(emdFolderLightning);
        var emdFolderLink = new ville.embed.fluent.FolderLink(svgsize, null, null, "FolderLink");
        arrembeds.push(emdFolderLink);
        var emdFolderList = new ville.embed.fluent.FolderList(svgsize, null, null, "FolderList");
        arrembeds.push(emdFolderList);
        var emdFolderMail = new ville.embed.fluent.FolderMail(svgsize, null, null, "FolderMail");
        arrembeds.push(emdFolderMail);
        var emdFolderOpen = new ville.embed.fluent.FolderOpen(svgsize, null, null, "FolderOpen");
        arrembeds.push(emdFolderOpen);
        var emdFolderOpenVertical = new ville.embed.fluent.FolderOpenVertical(svgsize, null, null, "FolderOpenVertical");
        arrembeds.push(emdFolderOpenVertical);
        var emdFolderPeople = new ville.embed.fluent.FolderPeople(svgsize, null, null, "FolderPeople");
        arrembeds.push(emdFolderPeople);
        var emdFolderPerson = new ville.embed.fluent.FolderPerson(svgsize, null, null, "FolderPerson");
        arrembeds.push(emdFolderPerson);
        var emdFolderProhibited = new ville.embed.fluent.FolderProhibited(svgsize, null, null, "FolderProhibited");
        arrembeds.push(emdFolderProhibited);
        var emdFolderSearch = new ville.embed.fluent.FolderSearch(svgsize, null, null, "FolderSearch");
        arrembeds.push(emdFolderSearch);
        var emdFolderSwap = new ville.embed.fluent.FolderSwap(svgsize, null, null, "FolderSwap");
        arrembeds.push(emdFolderSwap);
        var emdFolderSync = new ville.embed.fluent.FolderSync(svgsize, null, null, "FolderSync");
        arrembeds.push(emdFolderSync);
        var emdFolderZip = new ville.embed.fluent.FolderZip(svgsize, null, null, "FolderZip");
        arrembeds.push(emdFolderZip);
        var emdFontDecrease = new ville.embed.fluent.FontDecrease(svgsize, null, null, "FontDecrease");
        arrembeds.push(emdFontDecrease);
        var emdFontIncrease = new ville.embed.fluent.FontIncrease(svgsize, null, null, "FontIncrease");
        arrembeds.push(emdFontIncrease);
        var emdFontSpaceTrackingIn = new ville.embed.fluent.FontSpaceTrackingIn(svgsize, null, null, "FontSpaceTrackingIn");
        arrembeds.push(emdFontSpaceTrackingIn);
        var emdFontSpaceTrackingOut = new ville.embed.fluent.FontSpaceTrackingOut(svgsize, null, null, "FontSpaceTrackingOut");
        arrembeds.push(emdFontSpaceTrackingOut);
        var emdFood = new ville.embed.fluent.Food(svgsize, null, null, "Food");
        arrembeds.push(emdFood);
        var emdFoodApple = new ville.embed.fluent.FoodApple(svgsize, null, null, "FoodApple");
        arrembeds.push(emdFoodApple);
        var emdFoodCake = new ville.embed.fluent.FoodCake(svgsize, null, null, "FoodCake");
        arrembeds.push(emdFoodCake);
        var emdFoodCarrot = new ville.embed.fluent.FoodCarrot(svgsize, null, null, "FoodCarrot");
        arrembeds.push(emdFoodCarrot);
        var emdFoodChickenLeg = new ville.embed.fluent.FoodChickenLeg(svgsize, null, null, "FoodChickenLeg");
        arrembeds.push(emdFoodChickenLeg);
        var emdFoodEgg = new ville.embed.fluent.FoodEgg(svgsize, null, null, "FoodEgg");
        arrembeds.push(emdFoodEgg);
        var emdFoodFish = new ville.embed.fluent.FoodFish(svgsize, null, null, "FoodFish");
        arrembeds.push(emdFoodFish);
        var emdFoodGrains = new ville.embed.fluent.FoodGrains(svgsize, null, null, "FoodGrains");
        arrembeds.push(emdFoodGrains);
        var emdFoodPizza = new ville.embed.fluent.FoodPizza(svgsize, null, null, "FoodPizza");
        arrembeds.push(emdFoodPizza);
        var emdFoodToast = new ville.embed.fluent.FoodToast(svgsize, null, null, "FoodToast");
        arrembeds.push(emdFoodToast);
        var emdForm = new ville.embed.fluent.Form(svgsize, null, null, "Form");
        arrembeds.push(emdForm);
        var emdFormMultiple = new ville.embed.fluent.FormMultiple(svgsize, null, null, "FormMultiple");
        arrembeds.push(emdFormMultiple);
        var emdFormNew = new ville.embed.fluent.FormNew(svgsize, null, null, "FormNew");
        arrembeds.push(emdFormNew);
        var emdFps120 = new ville.embed.fluent.Fps120(svgsize, null, null, "Fps120");
        arrembeds.push(emdFps120);
        var emdFps240 = new ville.embed.fluent.Fps240(svgsize, null, null, "Fps240");
        arrembeds.push(emdFps240);
        var emdFps30 = new ville.embed.fluent.Fps30(svgsize, null, null, "Fps30");
        arrembeds.push(emdFps30);
        var emdFps60 = new ville.embed.fluent.Fps60(svgsize, null, null, "Fps60");
        arrembeds.push(emdFps60);
        var emdFps960 = new ville.embed.fluent.Fps960(svgsize, null, null, "Fps960");
        arrembeds.push(emdFps960);
        var emdFrame = new ville.embed.fluent.Frame(svgsize, null, null, "Frame");
        arrembeds.push(emdFrame);
        var emdFullScreenMaximize = new ville.embed.fluent.FullScreenMaximize(svgsize, null, null, "FullScreenMaximize");
        arrembeds.push(emdFullScreenMaximize);
        var emdFullScreenMinimize = new ville.embed.fluent.FullScreenMinimize(svgsize, null, null, "FullScreenMinimize");
        arrembeds.push(emdFullScreenMinimize);
        var emdGames = new ville.embed.fluent.Games(svgsize, null, null, "Games");
        arrembeds.push(emdGames);
        var emdGanttChart = new ville.embed.fluent.GanttChart(svgsize, null, null, "GanttChart");
        arrembeds.push(emdGanttChart);
        var emdGas = new ville.embed.fluent.Gas(svgsize, null, null, "Gas");
        arrembeds.push(emdGas);
        var emdGasPump = new ville.embed.fluent.GasPump(svgsize, null, null, "GasPump");
        arrembeds.push(emdGasPump);
        var emdGather = new ville.embed.fluent.Gather(svgsize, null, null, "Gather");
        arrembeds.push(emdGather);
        var emdGauge = new ville.embed.fluent.Gauge(svgsize, null, null, "Gauge");
        arrembeds.push(emdGauge);
        var emdGaugeAdd = new ville.embed.fluent.GaugeAdd(svgsize, null, null, "GaugeAdd");
        arrembeds.push(emdGaugeAdd);
        var emdGavel = new ville.embed.fluent.Gavel(svgsize, null, null, "Gavel");
        arrembeds.push(emdGavel);
        var emdGavelProhibited = new ville.embed.fluent.GavelProhibited(svgsize, null, null, "GavelProhibited");
        arrembeds.push(emdGavelProhibited);
        var emdGesture = new ville.embed.fluent.Gesture(svgsize, null, null, "Gesture");
        arrembeds.push(emdGesture);
        var emdGif = new ville.embed.fluent.Gif(svgsize, null, null, "Gif");
        arrembeds.push(emdGif);
        var emdGift = new ville.embed.fluent.Gift(svgsize, null, null, "Gift");
        arrembeds.push(emdGift);
        var emdGiftCard = new ville.embed.fluent.GiftCard(svgsize, null, null, "GiftCard");
        arrembeds.push(emdGiftCard);
        var emdGiftCardAdd = new ville.embed.fluent.GiftCardAdd(svgsize, null, null, "GiftCardAdd");
        arrembeds.push(emdGiftCardAdd);
        var emdGiftCardArrowRight = new ville.embed.fluent.GiftCardArrowRight(svgsize, null, null, "GiftCardArrowRight");
        arrembeds.push(emdGiftCardArrowRight);
        var emdGiftCardMoney = new ville.embed.fluent.GiftCardMoney(svgsize, null, null, "GiftCardMoney");
        arrembeds.push(emdGiftCardMoney);
        var emdGiftCardMultiple = new ville.embed.fluent.GiftCardMultiple(svgsize, null, null, "GiftCardMultiple");
        arrembeds.push(emdGiftCardMultiple);
        var emdGiftOpen = new ville.embed.fluent.GiftOpen(svgsize, null, null, "GiftOpen");
        arrembeds.push(emdGiftOpen);
        var emdGlance = new ville.embed.fluent.Glance(svgsize, null, null, "Glance");
        arrembeds.push(emdGlance);
        var emdGlanceHorizontal = new ville.embed.fluent.GlanceHorizontal(svgsize, null, null, "GlanceHorizontal");
        arrembeds.push(emdGlanceHorizontal);
        var emdGlanceHorizontalSparkles = new ville.embed.fluent.GlanceHorizontalSparkles(svgsize, null, null, "GlanceHorizontalSparkles");
        arrembeds.push(emdGlanceHorizontalSparkles);
        var emdGlasses = new ville.embed.fluent.Glasses(svgsize, null, null, "Glasses");
        arrembeds.push(emdGlasses);
        var emdGlassesOff = new ville.embed.fluent.GlassesOff(svgsize, null, null, "GlassesOff");
        arrembeds.push(emdGlassesOff);
        var emdGlobe = new ville.embed.fluent.Globe(svgsize, null, null, "Globe");
        arrembeds.push(emdGlobe);
        var emdGlobeAdd = new ville.embed.fluent.GlobeAdd(svgsize, null, null, "GlobeAdd");
        arrembeds.push(emdGlobeAdd);
        var emdGlobeArrowForward = new ville.embed.fluent.GlobeArrowForward(svgsize, null, null, "GlobeArrowForward");
        arrembeds.push(emdGlobeArrowForward);
        var emdGlobeArrowUp = new ville.embed.fluent.GlobeArrowUp(svgsize, null, null, "GlobeArrowUp");
        arrembeds.push(emdGlobeArrowUp);
        var emdGlobeClock = new ville.embed.fluent.GlobeClock(svgsize, null, null, "GlobeClock");
        arrembeds.push(emdGlobeClock);
        var emdGlobeDesktop = new ville.embed.fluent.GlobeDesktop(svgsize, null, null, "GlobeDesktop");
        arrembeds.push(emdGlobeDesktop);
        var emdGlobeError = new ville.embed.fluent.GlobeError(svgsize, null, null, "GlobeError");
        arrembeds.push(emdGlobeError);
        var emdGlobeLocation = new ville.embed.fluent.GlobeLocation(svgsize, null, null, "GlobeLocation");
        arrembeds.push(emdGlobeLocation);
        var emdGlobePerson = new ville.embed.fluent.GlobePerson(svgsize, null, null, "GlobePerson");
        arrembeds.push(emdGlobePerson);
        var emdGlobeProhibited = new ville.embed.fluent.GlobeProhibited(svgsize, null, null, "GlobeProhibited");
        arrembeds.push(emdGlobeProhibited);
        var emdGlobeSearch = new ville.embed.fluent.GlobeSearch(svgsize, null, null, "GlobeSearch");
        arrembeds.push(emdGlobeSearch);
        var emdGlobeShield = new ville.embed.fluent.GlobeShield(svgsize, null, null, "GlobeShield");
        arrembeds.push(emdGlobeShield);
        var emdGlobeStar = new ville.embed.fluent.GlobeStar(svgsize, null, null, "GlobeStar");
        arrembeds.push(emdGlobeStar);
        var emdGlobeSurface = new ville.embed.fluent.GlobeSurface(svgsize, null, null, "GlobeSurface");
        arrembeds.push(emdGlobeSurface);
        var emdGlobeSync = new ville.embed.fluent.GlobeSync(svgsize, null, null, "GlobeSync");
        arrembeds.push(emdGlobeSync);
        var emdGlobeVideo = new ville.embed.fluent.GlobeVideo(svgsize, null, null, "GlobeVideo");
        arrembeds.push(emdGlobeVideo);
        var emdGlobeWarning = new ville.embed.fluent.GlobeWarning(svgsize, null, null, "GlobeWarning");
        arrembeds.push(emdGlobeWarning);
        var emdGrid = new ville.embed.fluent.Grid(svgsize, null, null, "Grid");
        arrembeds.push(emdGrid);
        var emdGridDots = new ville.embed.fluent.GridDots(svgsize, null, null, "GridDots");
        arrembeds.push(emdGridDots);
        var emdGridKanban = new ville.embed.fluent.GridKanban(svgsize, null, null, "GridKanban");
        arrembeds.push(emdGridKanban);
        var emdGroup = new ville.embed.fluent.Group(svgsize, null, null, "Group");
        arrembeds.push(emdGroup);
        var emdGroupDismiss = new ville.embed.fluent.GroupDismiss(svgsize, null, null, "GroupDismiss");
        arrembeds.push(emdGroupDismiss);
        var emdGroupList = new ville.embed.fluent.GroupList(svgsize, null, null, "GroupList");
        arrembeds.push(emdGroupList);
        var emdGroupReturn = new ville.embed.fluent.GroupReturn(svgsize, null, null, "GroupReturn");
        arrembeds.push(emdGroupReturn);
        var emdGuardian = new ville.embed.fluent.Guardian(svgsize, null, null, "Guardian");
        arrembeds.push(emdGuardian);
        var emdGuest = new ville.embed.fluent.Guest(svgsize, null, null, "Guest");
        arrembeds.push(emdGuest);
        var emdGuestAdd = new ville.embed.fluent.GuestAdd(svgsize, null, null, "GuestAdd");
        arrembeds.push(emdGuestAdd);
        var emdGuitar = new ville.embed.fluent.Guitar(svgsize, null, null, "Guitar");
        arrembeds.push(emdGuitar);
        var emdHandDraw = new ville.embed.fluent.HandDraw(svgsize, null, null, "HandDraw");
        arrembeds.push(emdHandDraw);
        var emdHandLeft = new ville.embed.fluent.HandLeft(svgsize, null, null, "HandLeft");
        arrembeds.push(emdHandLeft);
        var emdHandLeftChat = new ville.embed.fluent.HandLeftChat(svgsize, null, null, "HandLeftChat");
        arrembeds.push(emdHandLeftChat);
        var emdHandOpenHeart = new ville.embed.fluent.HandOpenHeart(svgsize, null, null, "HandOpenHeart");
        arrembeds.push(emdHandOpenHeart);
        var emdHandPoint = new ville.embed.fluent.HandPoint(svgsize, null, null, "HandPoint");
        arrembeds.push(emdHandPoint);
        var emdHandRight = new ville.embed.fluent.HandRight(svgsize, null, null, "HandRight");
        arrembeds.push(emdHandRight);
        var emdHandRightOff = new ville.embed.fluent.HandRightOff(svgsize, null, null, "HandRightOff");
        arrembeds.push(emdHandRightOff);
        var emdHandWave = new ville.embed.fluent.HandWave(svgsize, null, null, "HandWave");
        arrembeds.push(emdHandWave);
        var emdHandshake = new ville.embed.fluent.Handshake(svgsize, null, null, "Handshake");
        arrembeds.push(emdHandshake);
        var emdHapticStrong = new ville.embed.fluent.HapticStrong(svgsize, null, null, "HapticStrong");
        arrembeds.push(emdHapticStrong);
        var emdHapticWeak = new ville.embed.fluent.HapticWeak(svgsize, null, null, "HapticWeak");
        arrembeds.push(emdHapticWeak);
        var emdHardDrive = new ville.embed.fluent.HardDrive(svgsize, null, null, "HardDrive");
        arrembeds.push(emdHardDrive);
        var emdHatGraduation = new ville.embed.fluent.HatGraduation(svgsize, null, null, "HatGraduation");
        arrembeds.push(emdHatGraduation);
        var emdHatGraduationAdd = new ville.embed.fluent.HatGraduationAdd(svgsize, null, null, "HatGraduationAdd");
        arrembeds.push(emdHatGraduationAdd);
        var emdHatGraduationSparkle = new ville.embed.fluent.HatGraduationSparkle(svgsize, null, null, "HatGraduationSparkle");
        arrembeds.push(emdHatGraduationSparkle);
        var emdHd = new ville.embed.fluent.Hd(svgsize, null, null, "Hd");
        arrembeds.push(emdHd);
        var emdHdr = new ville.embed.fluent.Hdr(svgsize, null, null, "Hdr");
        arrembeds.push(emdHdr);
        var emdHdrOff = new ville.embed.fluent.HdrOff(svgsize, null, null, "HdrOff");
        arrembeds.push(emdHdrOff);
        var emdHeadphones = new ville.embed.fluent.Headphones(svgsize, null, null, "Headphones");
        arrembeds.push(emdHeadphones);
        var emdHeadphonesSoundWave = new ville.embed.fluent.HeadphonesSoundWave(svgsize, null, null, "HeadphonesSoundWave");
        arrembeds.push(emdHeadphonesSoundWave);
        var emdHeadset = new ville.embed.fluent.Headset(svgsize, null, null, "Headset");
        arrembeds.push(emdHeadset);
        var emdHeadsetAdd = new ville.embed.fluent.HeadsetAdd(svgsize, null, null, "HeadsetAdd");
        arrembeds.push(emdHeadsetAdd);
        var emdHeadsetVr = new ville.embed.fluent.HeadsetVr(svgsize, null, null, "HeadsetVr");
        arrembeds.push(emdHeadsetVr);
        var emdHeart = new ville.embed.fluent.Heart(svgsize, null, null, "Heart");
        arrembeds.push(emdHeart);
        var emdHeartBroken = new ville.embed.fluent.HeartBroken(svgsize, null, null, "HeartBroken");
        arrembeds.push(emdHeartBroken);
        var emdHeartCircle = new ville.embed.fluent.HeartCircle(svgsize, null, null, "HeartCircle");
        arrembeds.push(emdHeartCircle);
        var emdHeartCircleHint = new ville.embed.fluent.HeartCircleHint(svgsize, null, null, "HeartCircleHint");
        arrembeds.push(emdHeartCircleHint);
        var emdHeartOff = new ville.embed.fluent.HeartOff(svgsize, null, null, "HeartOff");
        arrembeds.push(emdHeartOff);
        var emdHeartPulse = new ville.embed.fluent.HeartPulse(svgsize, null, null, "HeartPulse");
        arrembeds.push(emdHeartPulse);
        var emdHeartPulseCheckmark = new ville.embed.fluent.HeartPulseCheckmark(svgsize, null, null, "HeartPulseCheckmark");
        arrembeds.push(emdHeartPulseCheckmark);
        var emdHeartPulseError = new ville.embed.fluent.HeartPulseError(svgsize, null, null, "HeartPulseError");
        arrembeds.push(emdHeartPulseError);
        var emdHeartPulseWarning = new ville.embed.fluent.HeartPulseWarning(svgsize, null, null, "HeartPulseWarning");
        arrembeds.push(emdHeartPulseWarning);
        var emdHexagon = new ville.embed.fluent.Hexagon(svgsize, null, null, "Hexagon");
        arrembeds.push(emdHexagon);
        var emdHexagonSparkle = new ville.embed.fluent.HexagonSparkle(svgsize, null, null, "HexagonSparkle");
        arrembeds.push(emdHexagonSparkle);
        var emdHexagonThree = new ville.embed.fluent.HexagonThree(svgsize, null, null, "HexagonThree");
        arrembeds.push(emdHexagonThree);
        var emdHighlight = new ville.embed.fluent.Highlight(svgsize, null, null, "Highlight");
        arrembeds.push(emdHighlight);
        var emdHighlightLink = new ville.embed.fluent.HighlightLink(svgsize, null, null, "HighlightLink");
        arrembeds.push(emdHighlightLink);
        var emdHighway = new ville.embed.fluent.Highway(svgsize, null, null, "Highway");
        arrembeds.push(emdHighway);
        var emdHistory = new ville.embed.fluent.History(svgsize, null, null, "History");
        arrembeds.push(emdHistory);
        var emdHistoryDismiss = new ville.embed.fluent.HistoryDismiss(svgsize, null, null, "HistoryDismiss");
        arrembeds.push(emdHistoryDismiss);
        var emdHome = new ville.embed.fluent.Home(svgsize, null, null, "Home");
        arrembeds.push(emdHome);
        var emdHomeAdd = new ville.embed.fluent.HomeAdd(svgsize, null, null, "HomeAdd");
        arrembeds.push(emdHomeAdd);
        var emdHomeCheckmark = new ville.embed.fluent.HomeCheckmark(svgsize, null, null, "HomeCheckmark");
        arrembeds.push(emdHomeCheckmark);
        var emdHomeDatabase = new ville.embed.fluent.HomeDatabase(svgsize, null, null, "HomeDatabase");
        arrembeds.push(emdHomeDatabase);
        var emdHomeGarage = new ville.embed.fluent.HomeGarage(svgsize, null, null, "HomeGarage");
        arrembeds.push(emdHomeGarage);
        var emdHomeHeart = new ville.embed.fluent.HomeHeart(svgsize, null, null, "HomeHeart");
        arrembeds.push(emdHomeHeart);
        var emdHomeMore = new ville.embed.fluent.HomeMore(svgsize, null, null, "HomeMore");
        arrembeds.push(emdHomeMore);
        var emdHomePerson = new ville.embed.fluent.HomePerson(svgsize, null, null, "HomePerson");
        arrembeds.push(emdHomePerson);
        var emdHomeSplit = new ville.embed.fluent.HomeSplit(svgsize, null, null, "HomeSplit");
        arrembeds.push(emdHomeSplit);
        var emdHourglass = new ville.embed.fluent.Hourglass(svgsize, null, null, "Hourglass");
        arrembeds.push(emdHourglass);
        var emdHourglassHalf = new ville.embed.fluent.HourglassHalf(svgsize, null, null, "HourglassHalf");
        arrembeds.push(emdHourglassHalf);
        var emdHourglassOneQuarter = new ville.embed.fluent.HourglassOneQuarter(svgsize, null, null, "HourglassOneQuarter");
        arrembeds.push(emdHourglassOneQuarter);
        var emdHourglassThreeQuarter = new ville.embed.fluent.HourglassThreeQuarter(svgsize, null, null, "HourglassThreeQuarter");
        arrembeds.push(emdHourglassThreeQuarter);
        var emdIcons = new ville.embed.fluent.Icons(svgsize, null, null, "Icons");
        arrembeds.push(emdIcons);
        var emdImage = new ville.embed.fluent.Image(svgsize, null, null, "Image");
        arrembeds.push(emdImage);
        var emdImageAdd = new ville.embed.fluent.ImageAdd(svgsize, null, null, "ImageAdd");
        arrembeds.push(emdImageAdd);
        var emdImageAltText = new ville.embed.fluent.ImageAltText(svgsize, null, null, "ImageAltText");
        arrembeds.push(emdImageAltText);
        var emdImageArrowBack = new ville.embed.fluent.ImageArrowBack(svgsize, null, null, "ImageArrowBack");
        arrembeds.push(emdImageArrowBack);
        var emdImageArrowCounterclockwise = new ville.embed.fluent.ImageArrowCounterclockwise(svgsize, null, null, "ImageArrowCounterclockwise");
        arrembeds.push(emdImageArrowCounterclockwise);
        var emdImageArrowForward = new ville.embed.fluent.ImageArrowForward(svgsize, null, null, "ImageArrowForward");
        arrembeds.push(emdImageArrowForward);
        var emdImageBorder = new ville.embed.fluent.ImageBorder(svgsize, null, null, "ImageBorder");
        arrembeds.push(emdImageBorder);
        var emdImageCircle = new ville.embed.fluent.ImageCircle(svgsize, null, null, "ImageCircle");
        arrembeds.push(emdImageCircle);
        var emdImageCopy = new ville.embed.fluent.ImageCopy(svgsize, null, null, "ImageCopy");
        arrembeds.push(emdImageCopy);
        var emdImageEdit = new ville.embed.fluent.ImageEdit(svgsize, null, null, "ImageEdit");
        arrembeds.push(emdImageEdit);
        var emdImageGlobe = new ville.embed.fluent.ImageGlobe(svgsize, null, null, "ImageGlobe");
        arrembeds.push(emdImageGlobe);
        var emdImageMultiple = new ville.embed.fluent.ImageMultiple(svgsize, null, null, "ImageMultiple");
        arrembeds.push(emdImageMultiple);
        var emdImageMultipleOff = new ville.embed.fluent.ImageMultipleOff(svgsize, null, null, "ImageMultipleOff");
        arrembeds.push(emdImageMultipleOff);
        var emdImageOff = new ville.embed.fluent.ImageOff(svgsize, null, null, "ImageOff");
        arrembeds.push(emdImageOff);
        var emdImageProhibited = new ville.embed.fluent.ImageProhibited(svgsize, null, null, "ImageProhibited");
        arrembeds.push(emdImageProhibited);
        var emdImageReflection = new ville.embed.fluent.ImageReflection(svgsize, null, null, "ImageReflection");
        arrembeds.push(emdImageReflection);
        var emdImageSearch = new ville.embed.fluent.ImageSearch(svgsize, null, null, "ImageSearch");
        arrembeds.push(emdImageSearch);
        var emdImageShadow = new ville.embed.fluent.ImageShadow(svgsize, null, null, "ImageShadow");
        arrembeds.push(emdImageShadow);
        var emdImageSparkle = new ville.embed.fluent.ImageSparkle(svgsize, null, null, "ImageSparkle");
        arrembeds.push(emdImageSparkle);
        var emdImageSplit = new ville.embed.fluent.ImageSplit(svgsize, null, null, "ImageSplit");
        arrembeds.push(emdImageSplit);
        var emdImageStack = new ville.embed.fluent.ImageStack(svgsize, null, null, "ImageStack");
        arrembeds.push(emdImageStack);
        var emdImageTable = new ville.embed.fluent.ImageTable(svgsize, null, null, "ImageTable");
        arrembeds.push(emdImageTable);
        var emdImmersiveReader = new ville.embed.fluent.ImmersiveReader(svgsize, null, null, "ImmersiveReader");
        arrembeds.push(emdImmersiveReader);
        var emdImportant = new ville.embed.fluent.Important(svgsize, null, null, "Important");
        arrembeds.push(emdImportant);
        var emdIncognito = new ville.embed.fluent.Incognito(svgsize, null, null, "Incognito");
        arrembeds.push(emdIncognito);
        var emdInfo = new ville.embed.fluent.Info(svgsize, null, null, "Info");
        arrembeds.push(emdInfo);
        var emdInfoShield = new ville.embed.fluent.InfoShield(svgsize, null, null, "InfoShield");
        arrembeds.push(emdInfoShield);
        var emdInkStroke = new ville.embed.fluent.InkStroke(svgsize, null, null, "InkStroke");
        arrembeds.push(emdInkStroke);
        var emdInkStrokeArrowDown = new ville.embed.fluent.InkStrokeArrowDown(svgsize, null, null, "InkStrokeArrowDown");
        arrembeds.push(emdInkStrokeArrowDown);
        var emdInkStrokeArrowUpDown = new ville.embed.fluent.InkStrokeArrowUpDown(svgsize, null, null, "InkStrokeArrowUpDown");
        arrembeds.push(emdInkStrokeArrowUpDown);
        var emdInkingTool = new ville.embed.fluent.InkingTool(svgsize, null, null, "InkingTool");
        arrembeds.push(emdInkingTool);
        var emdInprivateAccount = new ville.embed.fluent.InprivateAccount(svgsize, null, null, "InprivateAccount");
        arrembeds.push(emdInprivateAccount);
        var emdInsert = new ville.embed.fluent.Insert(svgsize, null, null, "Insert");
        arrembeds.push(emdInsert);
        var emdIosChevronRight = new ville.embed.fluent.IosChevronRight(svgsize, null, null, "IosChevronRight");
        arrembeds.push(emdIosChevronRight);
        var emdIot = new ville.embed.fluent.Iot(svgsize, null, null, "Iot");
        arrembeds.push(emdIot);
        var emdIotAlert = new ville.embed.fluent.IotAlert(svgsize, null, null, "IotAlert");
        arrembeds.push(emdIotAlert);
        var emdJavascript = new ville.embed.fluent.Javascript(svgsize, null, null, "Javascript");
        arrembeds.push(emdJavascript);
        var emdJoystick = new ville.embed.fluent.Joystick(svgsize, null, null, "Joystick");
        arrembeds.push(emdJoystick);
        var emdKey = new ville.embed.fluent.Key(svgsize, null, null, "Key");
        arrembeds.push(emdKey);
        var emdKeyCommand = new ville.embed.fluent.KeyCommand(svgsize, null, null, "KeyCommand");
        arrembeds.push(emdKeyCommand);
        var emdKeyMultiple = new ville.embed.fluent.KeyMultiple(svgsize, null, null, "KeyMultiple");
        arrembeds.push(emdKeyMultiple);
        var emdKeyReset = new ville.embed.fluent.KeyReset(svgsize, null, null, "KeyReset");
        arrembeds.push(emdKeyReset);
        var emdKeyboard123 = new ville.embed.fluent.Keyboard123(svgsize, null, null, "Keyboard123");
        arrembeds.push(emdKeyboard123);
        var emdKeyboard = new ville.embed.fluent.Keyboard(svgsize, null, null, "Keyboard");
        arrembeds.push(emdKeyboard);
        var emdKeyboardDock = new ville.embed.fluent.KeyboardDock(svgsize, null, null, "KeyboardDock");
        arrembeds.push(emdKeyboardDock);
        var emdKeyboardLayoutFloat = new ville.embed.fluent.KeyboardLayoutFloat(svgsize, null, null, "KeyboardLayoutFloat");
        arrembeds.push(emdKeyboardLayoutFloat);
        var emdKeyboardLayoutOneHandedLeft = new ville.embed.fluent.KeyboardLayoutOneHandedLeft(svgsize, null, null, "KeyboardLayoutOneHandedLeft");
        arrembeds.push(emdKeyboardLayoutOneHandedLeft);
        var emdKeyboardLayoutResize = new ville.embed.fluent.KeyboardLayoutResize(svgsize, null, null, "KeyboardLayoutResize");
        arrembeds.push(emdKeyboardLayoutResize);
        var emdKeyboardLayoutSplit = new ville.embed.fluent.KeyboardLayoutSplit(svgsize, null, null, "KeyboardLayoutSplit");
        arrembeds.push(emdKeyboardLayoutSplit);
        var emdKeyboardShift = new ville.embed.fluent.KeyboardShift(svgsize, null, null, "KeyboardShift");
        arrembeds.push(emdKeyboardShift);
        var emdKeyboardShiftUppercase = new ville.embed.fluent.KeyboardShiftUppercase(svgsize, null, null, "KeyboardShiftUppercase");
        arrembeds.push(emdKeyboardShiftUppercase);
        var emdKeyboardTab = new ville.embed.fluent.KeyboardTab(svgsize, null, null, "KeyboardTab");
        arrembeds.push(emdKeyboardTab);
        var emdLaptop = new ville.embed.fluent.Laptop(svgsize, null, null, "Laptop");
        arrembeds.push(emdLaptop);
        var emdLaptopBriefcase = new ville.embed.fluent.LaptopBriefcase(svgsize, null, null, "LaptopBriefcase");
        arrembeds.push(emdLaptopBriefcase);
        var emdLaptopDismiss = new ville.embed.fluent.LaptopDismiss(svgsize, null, null, "LaptopDismiss");
        arrembeds.push(emdLaptopDismiss);
        var emdLaptopPerson = new ville.embed.fluent.LaptopPerson(svgsize, null, null, "LaptopPerson");
        arrembeds.push(emdLaptopPerson);
        var emdLaptopSettings = new ville.embed.fluent.LaptopSettings(svgsize, null, null, "LaptopSettings");
        arrembeds.push(emdLaptopSettings);
        var emdLaptopShield = new ville.embed.fluent.LaptopShield(svgsize, null, null, "LaptopShield");
        arrembeds.push(emdLaptopShield);
        var emdLaserTool = new ville.embed.fluent.LaserTool(svgsize, null, null, "LaserTool");
        arrembeds.push(emdLaserTool);
        var emdLasso = new ville.embed.fluent.Lasso(svgsize, null, null, "Lasso");
        arrembeds.push(emdLasso);
        var emdLauncherSettings = new ville.embed.fluent.LauncherSettings(svgsize, null, null, "LauncherSettings");
        arrembeds.push(emdLauncherSettings);
        var emdLayer = new ville.embed.fluent.Layer(svgsize, null, null, "Layer");
        arrembeds.push(emdLayer);
        var emdLayerDiagonal = new ville.embed.fluent.LayerDiagonal(svgsize, null, null, "LayerDiagonal");
        arrembeds.push(emdLayerDiagonal);
        var emdLayerDiagonalAdd = new ville.embed.fluent.LayerDiagonalAdd(svgsize, null, null, "LayerDiagonalAdd");
        arrembeds.push(emdLayerDiagonalAdd);
        var emdLayerDiagonalPerson = new ville.embed.fluent.LayerDiagonalPerson(svgsize, null, null, "LayerDiagonalPerson");
        arrembeds.push(emdLayerDiagonalPerson);
        var emdLayerDiagonalSparkle = new ville.embed.fluent.LayerDiagonalSparkle(svgsize, null, null, "LayerDiagonalSparkle");
        arrembeds.push(emdLayerDiagonalSparkle);
        var emdLayoutCellFour = new ville.embed.fluent.LayoutCellFour(svgsize, null, null, "LayoutCellFour");
        arrembeds.push(emdLayoutCellFour);
        var emdLayoutColumnFour = new ville.embed.fluent.LayoutColumnFour(svgsize, null, null, "LayoutColumnFour");
        arrembeds.push(emdLayoutColumnFour);
        var emdLayoutColumnOneThirdLeft = new ville.embed.fluent.LayoutColumnOneThirdLeft(svgsize, null, null, "LayoutColumnOneThirdLeft");
        arrembeds.push(emdLayoutColumnOneThirdLeft);
        var emdLayoutColumnOneThirdRight = new ville.embed.fluent.LayoutColumnOneThirdRight(svgsize, null, null, "LayoutColumnOneThirdRight");
        arrembeds.push(emdLayoutColumnOneThirdRight);
        var emdLayoutColumnOneThirdRightHint = new ville.embed.fluent.LayoutColumnOneThirdRightHint(svgsize, null, null, "LayoutColumnOneThirdRightHint");
        arrembeds.push(emdLayoutColumnOneThirdRightHint);
        var emdLayoutColumnThree = new ville.embed.fluent.LayoutColumnThree(svgsize, null, null, "LayoutColumnThree");
        arrembeds.push(emdLayoutColumnThree);
        var emdLayoutColumnTwo = new ville.embed.fluent.LayoutColumnTwo(svgsize, null, null, "LayoutColumnTwo");
        arrembeds.push(emdLayoutColumnTwo);
        var emdLayoutColumnTwoSplitLeft = new ville.embed.fluent.LayoutColumnTwoSplitLeft(svgsize, null, null, "LayoutColumnTwoSplitLeft");
        arrembeds.push(emdLayoutColumnTwoSplitLeft);
        var emdLayoutColumnTwoSplitRight = new ville.embed.fluent.LayoutColumnTwoSplitRight(svgsize, null, null, "LayoutColumnTwoSplitRight");
        arrembeds.push(emdLayoutColumnTwoSplitRight);
        var emdLayoutRowFour = new ville.embed.fluent.LayoutRowFour(svgsize, null, null, "LayoutRowFour");
        arrembeds.push(emdLayoutRowFour);
        var emdLayoutRowThree = new ville.embed.fluent.LayoutRowThree(svgsize, null, null, "LayoutRowThree");
        arrembeds.push(emdLayoutRowThree);
        var emdLayoutRowTwo = new ville.embed.fluent.LayoutRowTwo(svgsize, null, null, "LayoutRowTwo");
        arrembeds.push(emdLayoutRowTwo);
        var emdLayoutRowTwoSplitBottom = new ville.embed.fluent.LayoutRowTwoSplitBottom(svgsize, null, null, "LayoutRowTwoSplitBottom");
        arrembeds.push(emdLayoutRowTwoSplitBottom);
        var emdLayoutRowTwoSplitTop = new ville.embed.fluent.LayoutRowTwoSplitTop(svgsize, null, null, "LayoutRowTwoSplitTop");
        arrembeds.push(emdLayoutRowTwoSplitTop);
        var emdLeafOne = new ville.embed.fluent.LeafOne(svgsize, null, null, "LeafOne");
        arrembeds.push(emdLeafOne);
        var emdLeafThree = new ville.embed.fluent.LeafThree(svgsize, null, null, "LeafThree");
        arrembeds.push(emdLeafThree);
        var emdLeafTwo = new ville.embed.fluent.LeafTwo(svgsize, null, null, "LeafTwo");
        arrembeds.push(emdLeafTwo);
        var emdLearningApp = new ville.embed.fluent.LearningApp(svgsize, null, null, "LearningApp");
        arrembeds.push(emdLearningApp);
        var emdLibrary = new ville.embed.fluent.Library(svgsize, null, null, "Library");
        arrembeds.push(emdLibrary);
        var emdLightbulb = new ville.embed.fluent.Lightbulb(svgsize, null, null, "Lightbulb");
        arrembeds.push(emdLightbulb);
        var emdLightbulbCheckmark = new ville.embed.fluent.LightbulbCheckmark(svgsize, null, null, "LightbulbCheckmark");
        arrembeds.push(emdLightbulbCheckmark);
        var emdLightbulbCircle = new ville.embed.fluent.LightbulbCircle(svgsize, null, null, "LightbulbCircle");
        arrembeds.push(emdLightbulbCircle);
        var emdLightbulbFilament = new ville.embed.fluent.LightbulbFilament(svgsize, null, null, "LightbulbFilament");
        arrembeds.push(emdLightbulbFilament);
        var emdLightbulbPerson = new ville.embed.fluent.LightbulbPerson(svgsize, null, null, "LightbulbPerson");
        arrembeds.push(emdLightbulbPerson);
        var emdLikert = new ville.embed.fluent.Likert(svgsize, null, null, "Likert");
        arrembeds.push(emdLikert);
        var emdLine = new ville.embed.fluent.Line(svgsize, null, null, "Line");
        arrembeds.push(emdLine);
        var emdLineDashes = new ville.embed.fluent.LineDashes(svgsize, null, null, "LineDashes");
        arrembeds.push(emdLineDashes);
        var emdLineFlowDiagonalUpRight = new ville.embed.fluent.LineFlowDiagonalUpRight(svgsize, null, null, "LineFlowDiagonalUpRight");
        arrembeds.push(emdLineFlowDiagonalUpRight);
        var emdLineHorizontal1 = new ville.embed.fluent.LineHorizontal1(svgsize, null, null, "LineHorizontal1");
        arrembeds.push(emdLineHorizontal1);
        var emdLineHorizontal1Dashes = new ville.embed.fluent.LineHorizontal1Dashes(svgsize, null, null, "LineHorizontal1Dashes");
        arrembeds.push(emdLineHorizontal1Dashes);
        var emdLineHorizontal2DashesSolid = new ville.embed.fluent.LineHorizontal2DashesSolid(svgsize, null, null, "LineHorizontal2DashesSolid");
        arrembeds.push(emdLineHorizontal2DashesSolid);
        var emdLineHorizontal3 = new ville.embed.fluent.LineHorizontal3(svgsize, null, null, "LineHorizontal3");
        arrembeds.push(emdLineHorizontal3);
        var emdLineHorizontal4 = new ville.embed.fluent.LineHorizontal4(svgsize, null, null, "LineHorizontal4");
        arrembeds.push(emdLineHorizontal4);
        var emdLineHorizontal4Search = new ville.embed.fluent.LineHorizontal4Search(svgsize, null, null, "LineHorizontal4Search");
        arrembeds.push(emdLineHorizontal4Search);
        var emdLineHorizontal5 = new ville.embed.fluent.LineHorizontal5(svgsize, null, null, "LineHorizontal5");
        arrembeds.push(emdLineHorizontal5);
        var emdLineHorizontal5Error = new ville.embed.fluent.LineHorizontal5Error(svgsize, null, null, "LineHorizontal5Error");
        arrembeds.push(emdLineHorizontal5Error);
        var emdLineStyle = new ville.embed.fluent.LineStyle(svgsize, null, null, "LineStyle");
        arrembeds.push(emdLineStyle);
        var emdLineThickness = new ville.embed.fluent.LineThickness(svgsize, null, null, "LineThickness");
        arrembeds.push(emdLineThickness);
        var emdLink = new ville.embed.fluent.Link(svgsize, null, null, "Link");
        arrembeds.push(emdLink);
        var emdLinkAdd = new ville.embed.fluent.LinkAdd(svgsize, null, null, "LinkAdd");
        arrembeds.push(emdLinkAdd);
        var emdLinkDismiss = new ville.embed.fluent.LinkDismiss(svgsize, null, null, "LinkDismiss");
        arrembeds.push(emdLinkDismiss);
        var emdLinkEdit = new ville.embed.fluent.LinkEdit(svgsize, null, null, "LinkEdit");
        arrembeds.push(emdLinkEdit);
        var emdLinkMultiple = new ville.embed.fluent.LinkMultiple(svgsize, null, null, "LinkMultiple");
        arrembeds.push(emdLinkMultiple);
        var emdLinkPerson = new ville.embed.fluent.LinkPerson(svgsize, null, null, "LinkPerson");
        arrembeds.push(emdLinkPerson);
        var emdLinkSquare = new ville.embed.fluent.LinkSquare(svgsize, null, null, "LinkSquare");
        arrembeds.push(emdLinkSquare);
        var emdLinkToolbox = new ville.embed.fluent.LinkToolbox(svgsize, null, null, "LinkToolbox");
        arrembeds.push(emdLinkToolbox);
        var emdList = new ville.embed.fluent.List(svgsize, null, null, "List");
        arrembeds.push(emdList);
        var emdListBar = new ville.embed.fluent.ListBar(svgsize, null, null, "ListBar");
        arrembeds.push(emdListBar);
        var emdListBarTree = new ville.embed.fluent.ListBarTree(svgsize, null, null, "ListBarTree");
        arrembeds.push(emdListBarTree);
        var emdListBarTreeOffset = new ville.embed.fluent.ListBarTreeOffset(svgsize, null, null, "ListBarTreeOffset");
        arrembeds.push(emdListBarTreeOffset);
        var emdListRtl = new ville.embed.fluent.ListRtl(svgsize, null, null, "ListRtl");
        arrembeds.push(emdListRtl);
        var emdLive = new ville.embed.fluent.Live(svgsize, null, null, "Live");
        arrembeds.push(emdLive);
        var emdLiveOff = new ville.embed.fluent.LiveOff(svgsize, null, null, "LiveOff");
        arrembeds.push(emdLiveOff);
        var emdLocalLanguage = new ville.embed.fluent.LocalLanguage(svgsize, null, null, "LocalLanguage");
        arrembeds.push(emdLocalLanguage);
        var emdLocation = new ville.embed.fluent.Location(svgsize, null, null, "Location");
        arrembeds.push(emdLocation);
        var emdLocationAdd = new ville.embed.fluent.LocationAdd(svgsize, null, null, "LocationAdd");
        arrembeds.push(emdLocationAdd);
        var emdLocationAddLeft = new ville.embed.fluent.LocationAddLeft(svgsize, null, null, "LocationAddLeft");
        arrembeds.push(emdLocationAddLeft);
        var emdLocationAddRight = new ville.embed.fluent.LocationAddRight(svgsize, null, null, "LocationAddRight");
        arrembeds.push(emdLocationAddRight);
        var emdLocationAddUp = new ville.embed.fluent.LocationAddUp(svgsize, null, null, "LocationAddUp");
        arrembeds.push(emdLocationAddUp);
        var emdLocationArrow = new ville.embed.fluent.LocationArrow(svgsize, null, null, "LocationArrow");
        arrembeds.push(emdLocationArrow);
        var emdLocationArrowLeft = new ville.embed.fluent.LocationArrowLeft(svgsize, null, null, "LocationArrowLeft");
        arrembeds.push(emdLocationArrowLeft);
        var emdLocationArrowRight = new ville.embed.fluent.LocationArrowRight(svgsize, null, null, "LocationArrowRight");
        arrembeds.push(emdLocationArrowRight);
        var emdLocationArrowUp = new ville.embed.fluent.LocationArrowUp(svgsize, null, null, "LocationArrowUp");
        arrembeds.push(emdLocationArrowUp);
        var emdLocationDismiss = new ville.embed.fluent.LocationDismiss(svgsize, null, null, "LocationDismiss");
        arrembeds.push(emdLocationDismiss);
        var emdLocationLive = new ville.embed.fluent.LocationLive(svgsize, null, null, "LocationLive");
        arrembeds.push(emdLocationLive);
        var emdLocationOff = new ville.embed.fluent.LocationOff(svgsize, null, null, "LocationOff");
        arrembeds.push(emdLocationOff);
        var emdLocationRipple = new ville.embed.fluent.LocationRipple(svgsize, null, null, "LocationRipple");
        arrembeds.push(emdLocationRipple);
        var emdLocationTargetSquare = new ville.embed.fluent.LocationTargetSquare(svgsize, null, null, "LocationTargetSquare");
        arrembeds.push(emdLocationTargetSquare);
        var emdLockClosed = new ville.embed.fluent.LockClosed(svgsize, null, null, "LockClosed");
        arrembeds.push(emdLockClosed);
        var emdLockClosedKey = new ville.embed.fluent.LockClosedKey(svgsize, null, null, "LockClosedKey");
        arrembeds.push(emdLockClosedKey);
        var emdLockMultiple = new ville.embed.fluent.LockMultiple(svgsize, null, null, "LockMultiple");
        arrembeds.push(emdLockMultiple);
        var emdLockOpen = new ville.embed.fluent.LockOpen(svgsize, null, null, "LockOpen");
        arrembeds.push(emdLockOpen);
        var emdLockShield = new ville.embed.fluent.LockShield(svgsize, null, null, "LockShield");
        arrembeds.push(emdLockShield);
        var emdLottery = new ville.embed.fluent.Lottery(svgsize, null, null, "Lottery");
        arrembeds.push(emdLottery);
        var emdLuggage = new ville.embed.fluent.Luggage(svgsize, null, null, "Luggage");
        arrembeds.push(emdLuggage);
        var emdMail = new ville.embed.fluent.Mail(svgsize, null, null, "Mail");
        arrembeds.push(emdMail);
        var emdMailAdd = new ville.embed.fluent.MailAdd(svgsize, null, null, "MailAdd");
        arrembeds.push(emdMailAdd);
        var emdMailAlert = new ville.embed.fluent.MailAlert(svgsize, null, null, "MailAlert");
        arrembeds.push(emdMailAlert);
        var emdMailAllRead = new ville.embed.fluent.MailAllRead(svgsize, null, null, "MailAllRead");
        arrembeds.push(emdMailAllRead);
        var emdMailAllUnread = new ville.embed.fluent.MailAllUnread(svgsize, null, null, "MailAllUnread");
        arrembeds.push(emdMailAllUnread);
        var emdMailArrowClockwise = new ville.embed.fluent.MailArrowClockwise(svgsize, null, null, "MailArrowClockwise");
        arrembeds.push(emdMailArrowClockwise);
        var emdMailArrowDoubleBack = new ville.embed.fluent.MailArrowDoubleBack(svgsize, null, null, "MailArrowDoubleBack");
        arrembeds.push(emdMailArrowDoubleBack);
        var emdMailArrowDown = new ville.embed.fluent.MailArrowDown(svgsize, null, null, "MailArrowDown");
        arrembeds.push(emdMailArrowDown);
        var emdMailArrowForward = new ville.embed.fluent.MailArrowForward(svgsize, null, null, "MailArrowForward");
        arrembeds.push(emdMailArrowForward);
        var emdMailArrowUp = new ville.embed.fluent.MailArrowUp(svgsize, null, null, "MailArrowUp");
        arrembeds.push(emdMailArrowUp);
        var emdMailAttach = new ville.embed.fluent.MailAttach(svgsize, null, null, "MailAttach");
        arrembeds.push(emdMailAttach);
        var emdMailCheckmark = new ville.embed.fluent.MailCheckmark(svgsize, null, null, "MailCheckmark");
        arrembeds.push(emdMailCheckmark);
        var emdMailClock = new ville.embed.fluent.MailClock(svgsize, null, null, "MailClock");
        arrembeds.push(emdMailClock);
        var emdMailCopy = new ville.embed.fluent.MailCopy(svgsize, null, null, "MailCopy");
        arrembeds.push(emdMailCopy);
        var emdMailDismiss = new ville.embed.fluent.MailDismiss(svgsize, null, null, "MailDismiss");
        arrembeds.push(emdMailDismiss);
        var emdMailEdit = new ville.embed.fluent.MailEdit(svgsize, null, null, "MailEdit");
        arrembeds.push(emdMailEdit);
        var emdMailError = new ville.embed.fluent.MailError(svgsize, null, null, "MailError");
        arrembeds.push(emdMailError);
        var emdMailInbox = new ville.embed.fluent.MailInbox(svgsize, null, null, "MailInbox");
        arrembeds.push(emdMailInbox);
        var emdMailInboxAdd = new ville.embed.fluent.MailInboxAdd(svgsize, null, null, "MailInboxAdd");
        arrembeds.push(emdMailInboxAdd);
        var emdMailInboxAll = new ville.embed.fluent.MailInboxAll(svgsize, null, null, "MailInboxAll");
        arrembeds.push(emdMailInboxAll);
        var emdMailInboxArrowDown = new ville.embed.fluent.MailInboxArrowDown(svgsize, null, null, "MailInboxArrowDown");
        arrembeds.push(emdMailInboxArrowDown);
        var emdMailInboxArrowRight = new ville.embed.fluent.MailInboxArrowRight(svgsize, null, null, "MailInboxArrowRight");
        arrembeds.push(emdMailInboxArrowRight);
        var emdMailInboxArrowUp = new ville.embed.fluent.MailInboxArrowUp(svgsize, null, null, "MailInboxArrowUp");
        arrembeds.push(emdMailInboxArrowUp);
        var emdMailInboxCheckmark = new ville.embed.fluent.MailInboxCheckmark(svgsize, null, null, "MailInboxCheckmark");
        arrembeds.push(emdMailInboxCheckmark);
        var emdMailInboxDismiss = new ville.embed.fluent.MailInboxDismiss(svgsize, null, null, "MailInboxDismiss");
        arrembeds.push(emdMailInboxDismiss);
        var emdMailLink = new ville.embed.fluent.MailLink(svgsize, null, null, "MailLink");
        arrembeds.push(emdMailLink);
        var emdMailList = new ville.embed.fluent.MailList(svgsize, null, null, "MailList");
        arrembeds.push(emdMailList);
        var emdMailMultiple = new ville.embed.fluent.MailMultiple(svgsize, null, null, "MailMultiple");
        arrembeds.push(emdMailMultiple);
        var emdMailOff = new ville.embed.fluent.MailOff(svgsize, null, null, "MailOff");
        arrembeds.push(emdMailOff);
        var emdMailOpenPerson = new ville.embed.fluent.MailOpenPerson(svgsize, null, null, "MailOpenPerson");
        arrembeds.push(emdMailOpenPerson);
        var emdMailPause = new ville.embed.fluent.MailPause(svgsize, null, null, "MailPause");
        arrembeds.push(emdMailPause);
        var emdMailProhibited = new ville.embed.fluent.MailProhibited(svgsize, null, null, "MailProhibited");
        arrembeds.push(emdMailProhibited);
        var emdMailRead = new ville.embed.fluent.MailRead(svgsize, null, null, "MailRead");
        arrembeds.push(emdMailRead);
        var emdMailReadMultiple = new ville.embed.fluent.MailReadMultiple(svgsize, null, null, "MailReadMultiple");
        arrembeds.push(emdMailReadMultiple);
        var emdMailRewind = new ville.embed.fluent.MailRewind(svgsize, null, null, "MailRewind");
        arrembeds.push(emdMailRewind);
        var emdMailSettings = new ville.embed.fluent.MailSettings(svgsize, null, null, "MailSettings");
        arrembeds.push(emdMailSettings);
        var emdMailShield = new ville.embed.fluent.MailShield(svgsize, null, null, "MailShield");
        arrembeds.push(emdMailShield);
        var emdMailTemplate = new ville.embed.fluent.MailTemplate(svgsize, null, null, "MailTemplate");
        arrembeds.push(emdMailTemplate);
        var emdMailUnread = new ville.embed.fluent.MailUnread(svgsize, null, null, "MailUnread");
        arrembeds.push(emdMailUnread);
        var emdMailWarning = new ville.embed.fluent.MailWarning(svgsize, null, null, "MailWarning");
        arrembeds.push(emdMailWarning);
        var emdMailbox = new ville.embed.fluent.Mailbox(svgsize, null, null, "Mailbox");
        arrembeds.push(emdMailbox);
        var emdMap = new ville.embed.fluent.Map(svgsize, null, null, "Map");
        arrembeds.push(emdMap);
        var emdMapDrive = new ville.embed.fluent.MapDrive(svgsize, null, null, "MapDrive");
        arrembeds.push(emdMapDrive);
        var emdMarkdown = new ville.embed.fluent.Markdown(svgsize, null, null, "Markdown");
        arrembeds.push(emdMarkdown);
        var emdMatchAppLayout = new ville.embed.fluent.MatchAppLayout(svgsize, null, null, "MatchAppLayout");
        arrembeds.push(emdMatchAppLayout);
        var emdMathFormatLinear = new ville.embed.fluent.MathFormatLinear(svgsize, null, null, "MathFormatLinear");
        arrembeds.push(emdMathFormatLinear);
        var emdMathFormatProfessional = new ville.embed.fluent.MathFormatProfessional(svgsize, null, null, "MathFormatProfessional");
        arrembeds.push(emdMathFormatProfessional);
        var emdMathFormula = new ville.embed.fluent.MathFormula(svgsize, null, null, "MathFormula");
        arrembeds.push(emdMathFormula);
        var emdMathSymbols = new ville.embed.fluent.MathSymbols(svgsize, null, null, "MathSymbols");
        arrembeds.push(emdMathSymbols);
        var emdMaximize = new ville.embed.fluent.Maximize(svgsize, null, null, "Maximize");
        arrembeds.push(emdMaximize);
        var emdMeetNow = new ville.embed.fluent.MeetNow(svgsize, null, null, "MeetNow");
        arrembeds.push(emdMeetNow);
        var emdMegaphone = new ville.embed.fluent.Megaphone(svgsize, null, null, "Megaphone");
        arrembeds.push(emdMegaphone);
        var emdMegaphoneCircle = new ville.embed.fluent.MegaphoneCircle(svgsize, null, null, "MegaphoneCircle");
        arrembeds.push(emdMegaphoneCircle);
        var emdMegaphoneLoud = new ville.embed.fluent.MegaphoneLoud(svgsize, null, null, "MegaphoneLoud");
        arrembeds.push(emdMegaphoneLoud);
        var emdMegaphoneOff = new ville.embed.fluent.MegaphoneOff(svgsize, null, null, "MegaphoneOff");
        arrembeds.push(emdMegaphoneOff);
        var emdMention = new ville.embed.fluent.Mention(svgsize, null, null, "Mention");
        arrembeds.push(emdMention);
        var emdMentionArrowDown = new ville.embed.fluent.MentionArrowDown(svgsize, null, null, "MentionArrowDown");
        arrembeds.push(emdMentionArrowDown);
        var emdMentionBrackets = new ville.embed.fluent.MentionBrackets(svgsize, null, null, "MentionBrackets");
        arrembeds.push(emdMentionBrackets);
        var emdMerge = new ville.embed.fluent.Merge(svgsize, null, null, "Merge");
        arrembeds.push(emdMerge);
        var emdMic = new ville.embed.fluent.Mic(svgsize, null, null, "Mic");
        arrembeds.push(emdMic);
        var emdMicOff = new ville.embed.fluent.MicOff(svgsize, null, null, "MicOff");
        arrembeds.push(emdMicOff);
        var emdMicProhibited = new ville.embed.fluent.MicProhibited(svgsize, null, null, "MicProhibited");
        arrembeds.push(emdMicProhibited);
        var emdMicPulse = new ville.embed.fluent.MicPulse(svgsize, null, null, "MicPulse");
        arrembeds.push(emdMicPulse);
        var emdMicPulseOff = new ville.embed.fluent.MicPulseOff(svgsize, null, null, "MicPulseOff");
        arrembeds.push(emdMicPulseOff);
        var emdMicRecord = new ville.embed.fluent.MicRecord(svgsize, null, null, "MicRecord");
        arrembeds.push(emdMicRecord);
        var emdMicSettings = new ville.embed.fluent.MicSettings(svgsize, null, null, "MicSettings");
        arrembeds.push(emdMicSettings);
        var emdMicSparkle = new ville.embed.fluent.MicSparkle(svgsize, null, null, "MicSparkle");
        arrembeds.push(emdMicSparkle);
        var emdMicSync = new ville.embed.fluent.MicSync(svgsize, null, null, "MicSync");
        arrembeds.push(emdMicSync);
        var emdMicroscope = new ville.embed.fluent.Microscope(svgsize, null, null, "Microscope");
        arrembeds.push(emdMicroscope);
        var emdMidi = new ville.embed.fluent.Midi(svgsize, null, null, "Midi");
        arrembeds.push(emdMidi);
        var emdMobileOptimized = new ville.embed.fluent.MobileOptimized(svgsize, null, null, "MobileOptimized");
        arrembeds.push(emdMobileOptimized);
        var emdMold = new ville.embed.fluent.Mold(svgsize, null, null, "Mold");
        arrembeds.push(emdMold);
        var emdMolecule = new ville.embed.fluent.Molecule(svgsize, null, null, "Molecule");
        arrembeds.push(emdMolecule);
        var emdMoney = new ville.embed.fluent.Money(svgsize, null, null, "Money");
        arrembeds.push(emdMoney);
        var emdMoneyCalculator = new ville.embed.fluent.MoneyCalculator(svgsize, null, null, "MoneyCalculator");
        arrembeds.push(emdMoneyCalculator);
        var emdMoneyDismiss = new ville.embed.fluent.MoneyDismiss(svgsize, null, null, "MoneyDismiss");
        arrembeds.push(emdMoneyDismiss);
        var emdMoneyHand = new ville.embed.fluent.MoneyHand(svgsize, null, null, "MoneyHand");
        arrembeds.push(emdMoneyHand);
        var emdMoneyOff = new ville.embed.fluent.MoneyOff(svgsize, null, null, "MoneyOff");
        arrembeds.push(emdMoneyOff);
        var emdMoneySettings = new ville.embed.fluent.MoneySettings(svgsize, null, null, "MoneySettings");
        arrembeds.push(emdMoneySettings);
        var emdMoreCircle = new ville.embed.fluent.MoreCircle(svgsize, null, null, "MoreCircle");
        arrembeds.push(emdMoreCircle);
        var emdMoreHorizontal = new ville.embed.fluent.MoreHorizontal(svgsize, null, null, "MoreHorizontal");
        arrembeds.push(emdMoreHorizontal);
        var emdMoreVertical = new ville.embed.fluent.MoreVertical(svgsize, null, null, "MoreVertical");
        arrembeds.push(emdMoreVertical);
        var emdMountainLocationBottom = new ville.embed.fluent.MountainLocationBottom(svgsize, null, null, "MountainLocationBottom");
        arrembeds.push(emdMountainLocationBottom);
        var emdMountainLocationTop = new ville.embed.fluent.MountainLocationTop(svgsize, null, null, "MountainLocationTop");
        arrembeds.push(emdMountainLocationTop);
        var emdMountainTrail = new ville.embed.fluent.MountainTrail(svgsize, null, null, "MountainTrail");
        arrembeds.push(emdMountainTrail);
        var emdMoviesAndTv = new ville.embed.fluent.MoviesAndTv(svgsize, null, null, "MoviesAndTv");
        arrembeds.push(emdMoviesAndTv);
        var emdMultiplier12x = new ville.embed.fluent.Multiplier12x(svgsize, null, null, "Multiplier12x");
        arrembeds.push(emdMultiplier12x);
        var emdMultiplier15x = new ville.embed.fluent.Multiplier15x(svgsize, null, null, "Multiplier15x");
        arrembeds.push(emdMultiplier15x);
        var emdMultiplier18x = new ville.embed.fluent.Multiplier18x(svgsize, null, null, "Multiplier18x");
        arrembeds.push(emdMultiplier18x);
        var emdMultiplier1x = new ville.embed.fluent.Multiplier1x(svgsize, null, null, "Multiplier1x");
        arrembeds.push(emdMultiplier1x);
        var emdMultiplier2x = new ville.embed.fluent.Multiplier2x(svgsize, null, null, "Multiplier2x");
        arrembeds.push(emdMultiplier2x);
        var emdMultiplier5x = new ville.embed.fluent.Multiplier5x(svgsize, null, null, "Multiplier5x");
        arrembeds.push(emdMultiplier5x);
        var emdMultiselectLtr = new ville.embed.fluent.MultiselectLtr(svgsize, null, null, "MultiselectLtr");
        arrembeds.push(emdMultiselectLtr);
        var emdMultiselectRtl = new ville.embed.fluent.MultiselectRtl(svgsize, null, null, "MultiselectRtl");
        arrembeds.push(emdMultiselectRtl);
        var emdMusicNote1 = new ville.embed.fluent.MusicNote1(svgsize, null, null, "MusicNote1");
        arrembeds.push(emdMusicNote1);
        var emdMusicNote2 = new ville.embed.fluent.MusicNote2(svgsize, null, null, "MusicNote2");
        arrembeds.push(emdMusicNote2);
        var emdMusicNote2Play = new ville.embed.fluent.MusicNote2Play(svgsize, null, null, "MusicNote2Play");
        arrembeds.push(emdMusicNote2Play);
        var emdMusicNoteOff1 = new ville.embed.fluent.MusicNoteOff1(svgsize, null, null, "MusicNoteOff1");
        arrembeds.push(emdMusicNoteOff1);
        var emdMusicNoteOff2 = new ville.embed.fluent.MusicNoteOff2(svgsize, null, null, "MusicNoteOff2");
        arrembeds.push(emdMusicNoteOff2);
        var emdMyLocation = new ville.embed.fluent.MyLocation(svgsize, null, null, "MyLocation");
        arrembeds.push(emdMyLocation);
        var emdNavigation = new ville.embed.fluent.Navigation(svgsize, null, null, "Navigation");
        arrembeds.push(emdNavigation);
        var emdNavigationLocationTarget = new ville.embed.fluent.NavigationLocationTarget(svgsize, null, null, "NavigationLocationTarget");
        arrembeds.push(emdNavigationLocationTarget);
        var emdNavigationPlay = new ville.embed.fluent.NavigationPlay(svgsize, null, null, "NavigationPlay");
        arrembeds.push(emdNavigationPlay);
        var emdNavigationUnread = new ville.embed.fluent.NavigationUnread(svgsize, null, null, "NavigationUnread");
        arrembeds.push(emdNavigationUnread);
        var emdNetworkCheck = new ville.embed.fluent.NetworkCheck(svgsize, null, null, "NetworkCheck");
        arrembeds.push(emdNetworkCheck);
        var emdNew = new ville.embed.fluent.New(svgsize, null, null, "New");
        arrembeds.push(emdNew);
        var emdNews = new ville.embed.fluent.News(svgsize, null, null, "News");
        arrembeds.push(emdNews);
        var emdNext = new ville.embed.fluent.Next(svgsize, null, null, "Next");
        arrembeds.push(emdNext);
        var emdNextFrame = new ville.embed.fluent.NextFrame(svgsize, null, null, "NextFrame");
        arrembeds.push(emdNextFrame);
        var emdNote = new ville.embed.fluent.Note(svgsize, null, null, "Note");
        arrembeds.push(emdNote);
        var emdNoteAdd = new ville.embed.fluent.NoteAdd(svgsize, null, null, "NoteAdd");
        arrembeds.push(emdNoteAdd);
        var emdNoteEdit = new ville.embed.fluent.NoteEdit(svgsize, null, null, "NoteEdit");
        arrembeds.push(emdNoteEdit);
        var emdNotePin = new ville.embed.fluent.NotePin(svgsize, null, null, "NotePin");
        arrembeds.push(emdNotePin);
        var emdNotebook = new ville.embed.fluent.Notebook(svgsize, null, null, "Notebook");
        arrembeds.push(emdNotebook);
        var emdNotebookAdd = new ville.embed.fluent.NotebookAdd(svgsize, null, null, "NotebookAdd");
        arrembeds.push(emdNotebookAdd);
        var emdNotebookArrowCurveDown = new ville.embed.fluent.NotebookArrowCurveDown(svgsize, null, null, "NotebookArrowCurveDown");
        arrembeds.push(emdNotebookArrowCurveDown);
        var emdNotebookError = new ville.embed.fluent.NotebookError(svgsize, null, null, "NotebookError");
        arrembeds.push(emdNotebookError);
        var emdNotebookEye = new ville.embed.fluent.NotebookEye(svgsize, null, null, "NotebookEye");
        arrembeds.push(emdNotebookEye);
        var emdNotebookLightning = new ville.embed.fluent.NotebookLightning(svgsize, null, null, "NotebookLightning");
        arrembeds.push(emdNotebookLightning);
        var emdNotebookQuestionMark = new ville.embed.fluent.NotebookQuestionMark(svgsize, null, null, "NotebookQuestionMark");
        arrembeds.push(emdNotebookQuestionMark);
        var emdNotebookSection = new ville.embed.fluent.NotebookSection(svgsize, null, null, "NotebookSection");
        arrembeds.push(emdNotebookSection);
        var emdNotebookSectionArrowRight = new ville.embed.fluent.NotebookSectionArrowRight(svgsize, null, null, "NotebookSectionArrowRight");
        arrembeds.push(emdNotebookSectionArrowRight);
        var emdNotebookSubsection = new ville.embed.fluent.NotebookSubsection(svgsize, null, null, "NotebookSubsection");
        arrembeds.push(emdNotebookSubsection);
        var emdNotebookSync = new ville.embed.fluent.NotebookSync(svgsize, null, null, "NotebookSync");
        arrembeds.push(emdNotebookSync);
        var emdNotepad = new ville.embed.fluent.Notepad(svgsize, null, null, "Notepad");
        arrembeds.push(emdNotepad);
        var emdNotepadEdit = new ville.embed.fluent.NotepadEdit(svgsize, null, null, "NotepadEdit");
        arrembeds.push(emdNotepadEdit);
        var emdNotepadPerson = new ville.embed.fluent.NotepadPerson(svgsize, null, null, "NotepadPerson");
        arrembeds.push(emdNotepadPerson);
        var emdNumberCircle0 = new ville.embed.fluent.NumberCircle0(svgsize, null, null, "NumberCircle0");
        arrembeds.push(emdNumberCircle0);
        var emdNumberCircle1 = new ville.embed.fluent.NumberCircle1(svgsize, null, null, "NumberCircle1");
        arrembeds.push(emdNumberCircle1);
        var emdNumberCircle2 = new ville.embed.fluent.NumberCircle2(svgsize, null, null, "NumberCircle2");
        arrembeds.push(emdNumberCircle2);
        var emdNumberCircle3 = new ville.embed.fluent.NumberCircle3(svgsize, null, null, "NumberCircle3");
        arrembeds.push(emdNumberCircle3);
        var emdNumberCircle4 = new ville.embed.fluent.NumberCircle4(svgsize, null, null, "NumberCircle4");
        arrembeds.push(emdNumberCircle4);
        var emdNumberCircle5 = new ville.embed.fluent.NumberCircle5(svgsize, null, null, "NumberCircle5");
        arrembeds.push(emdNumberCircle5);
        var emdNumberCircle6 = new ville.embed.fluent.NumberCircle6(svgsize, null, null, "NumberCircle6");
        arrembeds.push(emdNumberCircle6);
        var emdNumberCircle7 = new ville.embed.fluent.NumberCircle7(svgsize, null, null, "NumberCircle7");
        arrembeds.push(emdNumberCircle7);
        var emdNumberCircle8 = new ville.embed.fluent.NumberCircle8(svgsize, null, null, "NumberCircle8");
        arrembeds.push(emdNumberCircle8);
        var emdNumberCircle9 = new ville.embed.fluent.NumberCircle9(svgsize, null, null, "NumberCircle9");
        arrembeds.push(emdNumberCircle9);
        var emdNumberRow = new ville.embed.fluent.NumberRow(svgsize, null, null, "NumberRow");
        arrembeds.push(emdNumberRow);
        var emdNumberSymbol = new ville.embed.fluent.NumberSymbol(svgsize, null, null, "NumberSymbol");
        arrembeds.push(emdNumberSymbol);
        var emdNumberSymbolDismiss = new ville.embed.fluent.NumberSymbolDismiss(svgsize, null, null, "NumberSymbolDismiss");
        arrembeds.push(emdNumberSymbolDismiss);
        var emdNumberSymbolSquare = new ville.embed.fluent.NumberSymbolSquare(svgsize, null, null, "NumberSymbolSquare");
        arrembeds.push(emdNumberSymbolSquare);
        var emdOpen = new ville.embed.fluent.Open(svgsize, null, null, "Open");
        arrembeds.push(emdOpen);
        var emdOpenFolder = new ville.embed.fluent.OpenFolder(svgsize, null, null, "OpenFolder");
        arrembeds.push(emdOpenFolder);
        var emdOpenOff = new ville.embed.fluent.OpenOff(svgsize, null, null, "OpenOff");
        arrembeds.push(emdOpenOff);
        var emdOptions = new ville.embed.fluent.Options(svgsize, null, null, "Options");
        arrembeds.push(emdOptions);
        var emdOrganization = new ville.embed.fluent.Organization(svgsize, null, null, "Organization");
        arrembeds.push(emdOrganization);
        var emdOrganizationHorizontal = new ville.embed.fluent.OrganizationHorizontal(svgsize, null, null, "OrganizationHorizontal");
        arrembeds.push(emdOrganizationHorizontal);
        var emdOrientation = new ville.embed.fluent.Orientation(svgsize, null, null, "Orientation");
        arrembeds.push(emdOrientation);
        var emdOval = new ville.embed.fluent.Oval(svgsize, null, null, "Oval");
        arrembeds.push(emdOval);
        var emdOven = new ville.embed.fluent.Oven(svgsize, null, null, "Oven");
        arrembeds.push(emdOven);
        var emdPaddingDown = new ville.embed.fluent.PaddingDown(svgsize, null, null, "PaddingDown");
        arrembeds.push(emdPaddingDown);
        var emdPaddingLeft = new ville.embed.fluent.PaddingLeft(svgsize, null, null, "PaddingLeft");
        arrembeds.push(emdPaddingLeft);
        var emdPaddingRight = new ville.embed.fluent.PaddingRight(svgsize, null, null, "PaddingRight");
        arrembeds.push(emdPaddingRight);
        var emdPaddingTop = new ville.embed.fluent.PaddingTop(svgsize, null, null, "PaddingTop");
        arrembeds.push(emdPaddingTop);
        var emdPageFit = new ville.embed.fluent.PageFit(svgsize, null, null, "PageFit");
        arrembeds.push(emdPageFit);
        var emdPaintBrush = new ville.embed.fluent.PaintBrush(svgsize, null, null, "PaintBrush");
        arrembeds.push(emdPaintBrush);
        var emdPaintBrushArrowDown = new ville.embed.fluent.PaintBrushArrowDown(svgsize, null, null, "PaintBrushArrowDown");
        arrembeds.push(emdPaintBrushArrowDown);
        var emdPaintBrushArrowUp = new ville.embed.fluent.PaintBrushArrowUp(svgsize, null, null, "PaintBrushArrowUp");
        arrembeds.push(emdPaintBrushArrowUp);
        var emdPaintBrushSparkle = new ville.embed.fluent.PaintBrushSparkle(svgsize, null, null, "PaintBrushSparkle");
        arrembeds.push(emdPaintBrushSparkle);
        var emdPaintBucket = new ville.embed.fluent.PaintBucket(svgsize, null, null, "PaintBucket");
        arrembeds.push(emdPaintBucket);
        var emdPair = new ville.embed.fluent.Pair(svgsize, null, null, "Pair");
        arrembeds.push(emdPair);
        var emdPanelBottom = new ville.embed.fluent.PanelBottom(svgsize, null, null, "PanelBottom");
        arrembeds.push(emdPanelBottom);
        var emdPanelBottomContract = new ville.embed.fluent.PanelBottomContract(svgsize, null, null, "PanelBottomContract");
        arrembeds.push(emdPanelBottomContract);
        var emdPanelBottomExpand = new ville.embed.fluent.PanelBottomExpand(svgsize, null, null, "PanelBottomExpand");
        arrembeds.push(emdPanelBottomExpand);
        var emdPanelLeft = new ville.embed.fluent.PanelLeft(svgsize, null, null, "PanelLeft");
        arrembeds.push(emdPanelLeft);
        var emdPanelLeftAdd = new ville.embed.fluent.PanelLeftAdd(svgsize, null, null, "PanelLeftAdd");
        arrembeds.push(emdPanelLeftAdd);
        var emdPanelLeftContract = new ville.embed.fluent.PanelLeftContract(svgsize, null, null, "PanelLeftContract");
        arrembeds.push(emdPanelLeftContract);
        var emdPanelLeftExpand = new ville.embed.fluent.PanelLeftExpand(svgsize, null, null, "PanelLeftExpand");
        arrembeds.push(emdPanelLeftExpand);
        var emdPanelLeftHeader = new ville.embed.fluent.PanelLeftHeader(svgsize, null, null, "PanelLeftHeader");
        arrembeds.push(emdPanelLeftHeader);
        var emdPanelLeftHeaderAdd = new ville.embed.fluent.PanelLeftHeaderAdd(svgsize, null, null, "PanelLeftHeaderAdd");
        arrembeds.push(emdPanelLeftHeaderAdd);
        var emdPanelLeftHeaderKey = new ville.embed.fluent.PanelLeftHeaderKey(svgsize, null, null, "PanelLeftHeaderKey");
        arrembeds.push(emdPanelLeftHeaderKey);
        var emdPanelLeftKey = new ville.embed.fluent.PanelLeftKey(svgsize, null, null, "PanelLeftKey");
        arrembeds.push(emdPanelLeftKey);
        var emdPanelLeftText = new ville.embed.fluent.PanelLeftText(svgsize, null, null, "PanelLeftText");
        arrembeds.push(emdPanelLeftText);
        var emdPanelLeftTextAdd = new ville.embed.fluent.PanelLeftTextAdd(svgsize, null, null, "PanelLeftTextAdd");
        arrembeds.push(emdPanelLeftTextAdd);
        var emdPanelLeftTextDismiss = new ville.embed.fluent.PanelLeftTextDismiss(svgsize, null, null, "PanelLeftTextDismiss");
        arrembeds.push(emdPanelLeftTextDismiss);
        var emdPanelRight = new ville.embed.fluent.PanelRight(svgsize, null, null, "PanelRight");
        arrembeds.push(emdPanelRight);
        var emdPanelRightAdd = new ville.embed.fluent.PanelRightAdd(svgsize, null, null, "PanelRightAdd");
        arrembeds.push(emdPanelRightAdd);
        var emdPanelRightContract = new ville.embed.fluent.PanelRightContract(svgsize, null, null, "PanelRightContract");
        arrembeds.push(emdPanelRightContract);
        var emdPanelRightCursor = new ville.embed.fluent.PanelRightCursor(svgsize, null, null, "PanelRightCursor");
        arrembeds.push(emdPanelRightCursor);
        var emdPanelRightExpand = new ville.embed.fluent.PanelRightExpand(svgsize, null, null, "PanelRightExpand");
        arrembeds.push(emdPanelRightExpand);
        var emdPanelRightGallery = new ville.embed.fluent.PanelRightGallery(svgsize, null, null, "PanelRightGallery");
        arrembeds.push(emdPanelRightGallery);
        var emdPanelSeparateWindow = new ville.embed.fluent.PanelSeparateWindow(svgsize, null, null, "PanelSeparateWindow");
        arrembeds.push(emdPanelSeparateWindow);
        var emdPanelTopContract = new ville.embed.fluent.PanelTopContract(svgsize, null, null, "PanelTopContract");
        arrembeds.push(emdPanelTopContract);
        var emdPanelTopExpand = new ville.embed.fluent.PanelTopExpand(svgsize, null, null, "PanelTopExpand");
        arrembeds.push(emdPanelTopExpand);
        var emdPanelTopGallery = new ville.embed.fluent.PanelTopGallery(svgsize, null, null, "PanelTopGallery");
        arrembeds.push(emdPanelTopGallery);
        var emdPassword = new ville.embed.fluent.Password(svgsize, null, null, "Password");
        arrembeds.push(emdPassword);
        var emdPatch = new ville.embed.fluent.Patch(svgsize, null, null, "Patch");
        arrembeds.push(emdPatch);
        var emdPatient = new ville.embed.fluent.Patient(svgsize, null, null, "Patient");
        arrembeds.push(emdPatient);
        var emdPause = new ville.embed.fluent.Pause(svgsize, null, null, "Pause");
        arrembeds.push(emdPause);
        var emdPauseCircle = new ville.embed.fluent.PauseCircle(svgsize, null, null, "PauseCircle");
        arrembeds.push(emdPauseCircle);
        var emdPauseOff = new ville.embed.fluent.PauseOff(svgsize, null, null, "PauseOff");
        arrembeds.push(emdPauseOff);
        var emdPauseSettings = new ville.embed.fluent.PauseSettings(svgsize, null, null, "PauseSettings");
        arrembeds.push(emdPauseSettings);
        var emdPayment = new ville.embed.fluent.Payment(svgsize, null, null, "Payment");
        arrembeds.push(emdPayment);
        var emdPaymentWireless = new ville.embed.fluent.PaymentWireless(svgsize, null, null, "PaymentWireless");
        arrembeds.push(emdPaymentWireless);
        var emdPen = new ville.embed.fluent.Pen(svgsize, null, null, "Pen");
        arrembeds.push(emdPen);
        var emdPenDismiss = new ville.embed.fluent.PenDismiss(svgsize, null, null, "PenDismiss");
        arrembeds.push(emdPenDismiss);
        var emdPenOff = new ville.embed.fluent.PenOff(svgsize, null, null, "PenOff");
        arrembeds.push(emdPenOff);
        var emdPenProhibited = new ville.embed.fluent.PenProhibited(svgsize, null, null, "PenProhibited");
        arrembeds.push(emdPenProhibited);
        var emdPenSparkle = new ville.embed.fluent.PenSparkle(svgsize, null, null, "PenSparkle");
        arrembeds.push(emdPenSparkle);
        var emdPentagon = new ville.embed.fluent.Pentagon(svgsize, null, null, "Pentagon");
        arrembeds.push(emdPentagon);
        var emdPeople = new ville.embed.fluent.People(svgsize, null, null, "People");
        arrembeds.push(emdPeople);
        var emdPeopleAdd = new ville.embed.fluent.PeopleAdd(svgsize, null, null, "PeopleAdd");
        arrembeds.push(emdPeopleAdd);
        var emdPeopleAudience = new ville.embed.fluent.PeopleAudience(svgsize, null, null, "PeopleAudience");
        arrembeds.push(emdPeopleAudience);
        var emdPeopleCall = new ville.embed.fluent.PeopleCall(svgsize, null, null, "PeopleCall");
        arrembeds.push(emdPeopleCall);
        var emdPeopleChat = new ville.embed.fluent.PeopleChat(svgsize, null, null, "PeopleChat");
        arrembeds.push(emdPeopleChat);
        var emdPeopleCheckmark = new ville.embed.fluent.PeopleCheckmark(svgsize, null, null, "PeopleCheckmark");
        arrembeds.push(emdPeopleCheckmark);
        var emdPeopleCommunity = new ville.embed.fluent.PeopleCommunity(svgsize, null, null, "PeopleCommunity");
        arrembeds.push(emdPeopleCommunity);
        var emdPeopleCommunityAdd = new ville.embed.fluent.PeopleCommunityAdd(svgsize, null, null, "PeopleCommunityAdd");
        arrembeds.push(emdPeopleCommunityAdd);
        var emdPeopleEdit = new ville.embed.fluent.PeopleEdit(svgsize, null, null, "PeopleEdit");
        arrembeds.push(emdPeopleEdit);
        var emdPeopleError = new ville.embed.fluent.PeopleError(svgsize, null, null, "PeopleError");
        arrembeds.push(emdPeopleError);
        var emdPeopleEye = new ville.embed.fluent.PeopleEye(svgsize, null, null, "PeopleEye");
        arrembeds.push(emdPeopleEye);
        var emdPeopleList = new ville.embed.fluent.PeopleList(svgsize, null, null, "PeopleList");
        arrembeds.push(emdPeopleList);
        var emdPeopleLock = new ville.embed.fluent.PeopleLock(svgsize, null, null, "PeopleLock");
        arrembeds.push(emdPeopleLock);
        var emdPeopleMoney = new ville.embed.fluent.PeopleMoney(svgsize, null, null, "PeopleMoney");
        arrembeds.push(emdPeopleMoney);
        var emdPeopleProhibited = new ville.embed.fluent.PeopleProhibited(svgsize, null, null, "PeopleProhibited");
        arrembeds.push(emdPeopleProhibited);
        var emdPeopleQueue = new ville.embed.fluent.PeopleQueue(svgsize, null, null, "PeopleQueue");
        arrembeds.push(emdPeopleQueue);
        var emdPeopleSearch = new ville.embed.fluent.PeopleSearch(svgsize, null, null, "PeopleSearch");
        arrembeds.push(emdPeopleSearch);
        var emdPeopleSettings = new ville.embed.fluent.PeopleSettings(svgsize, null, null, "PeopleSettings");
        arrembeds.push(emdPeopleSettings);
        var emdPeopleStar = new ville.embed.fluent.PeopleStar(svgsize, null, null, "PeopleStar");
        arrembeds.push(emdPeopleStar);
        var emdPeopleSubtract = new ville.embed.fluent.PeopleSubtract(svgsize, null, null, "PeopleSubtract");
        arrembeds.push(emdPeopleSubtract);
        var emdPeopleSwap = new ville.embed.fluent.PeopleSwap(svgsize, null, null, "PeopleSwap");
        arrembeds.push(emdPeopleSwap);
        var emdPeopleSync = new ville.embed.fluent.PeopleSync(svgsize, null, null, "PeopleSync");
        arrembeds.push(emdPeopleSync);
        var emdPeopleTeam = new ville.embed.fluent.PeopleTeam(svgsize, null, null, "PeopleTeam");
        arrembeds.push(emdPeopleTeam);
        var emdPeopleTeamAdd = new ville.embed.fluent.PeopleTeamAdd(svgsize, null, null, "PeopleTeamAdd");
        arrembeds.push(emdPeopleTeamAdd);
        var emdPeopleTeamDelete = new ville.embed.fluent.PeopleTeamDelete(svgsize, null, null, "PeopleTeamDelete");
        arrembeds.push(emdPeopleTeamDelete);
        var emdPeopleTeamToolbox = new ville.embed.fluent.PeopleTeamToolbox(svgsize, null, null, "PeopleTeamToolbox");
        arrembeds.push(emdPeopleTeamToolbox);
        var emdPeopleToolbox = new ville.embed.fluent.PeopleToolbox(svgsize, null, null, "PeopleToolbox");
        arrembeds.push(emdPeopleToolbox);
        var emdPerson = new ville.embed.fluent.Person(svgsize, null, null, "Person");
        arrembeds.push(emdPerson);
        var emdPerson5 = new ville.embed.fluent.Person5(svgsize, null, null, "Person5");
        arrembeds.push(emdPerson5);
        var emdPerson6 = new ville.embed.fluent.Person6(svgsize, null, null, "Person6");
        arrembeds.push(emdPerson6);
        var emdPersonAccounts = new ville.embed.fluent.PersonAccounts(svgsize, null, null, "PersonAccounts");
        arrembeds.push(emdPersonAccounts);
        var emdPersonAdd = new ville.embed.fluent.PersonAdd(svgsize, null, null, "PersonAdd");
        arrembeds.push(emdPersonAdd);
        var emdPersonAlert = new ville.embed.fluent.PersonAlert(svgsize, null, null, "PersonAlert");
        arrembeds.push(emdPersonAlert);
        var emdPersonAlertOff = new ville.embed.fluent.PersonAlertOff(svgsize, null, null, "PersonAlertOff");
        arrembeds.push(emdPersonAlertOff);
        var emdPersonArrowBack = new ville.embed.fluent.PersonArrowBack(svgsize, null, null, "PersonArrowBack");
        arrembeds.push(emdPersonArrowBack);
        var emdPersonArrowLeft = new ville.embed.fluent.PersonArrowLeft(svgsize, null, null, "PersonArrowLeft");
        arrembeds.push(emdPersonArrowLeft);
        var emdPersonArrowRight = new ville.embed.fluent.PersonArrowRight(svgsize, null, null, "PersonArrowRight");
        arrembeds.push(emdPersonArrowRight);
        var emdPersonAvailable = new ville.embed.fluent.PersonAvailable(svgsize, null, null, "PersonAvailable");
        arrembeds.push(emdPersonAvailable);
        var emdPersonBoard = new ville.embed.fluent.PersonBoard(svgsize, null, null, "PersonBoard");
        arrembeds.push(emdPersonBoard);
        var emdPersonCall = new ville.embed.fluent.PersonCall(svgsize, null, null, "PersonCall");
        arrembeds.push(emdPersonCall);
        var emdPersonChat = new ville.embed.fluent.PersonChat(svgsize, null, null, "PersonChat");
        arrembeds.push(emdPersonChat);
        var emdPersonCircle = new ville.embed.fluent.PersonCircle(svgsize, null, null, "PersonCircle");
        arrembeds.push(emdPersonCircle);
        var emdPersonClock = new ville.embed.fluent.PersonClock(svgsize, null, null, "PersonClock");
        arrembeds.push(emdPersonClock);
        var emdPersonDelete = new ville.embed.fluent.PersonDelete(svgsize, null, null, "PersonDelete");
        arrembeds.push(emdPersonDelete);
        var emdPersonDesktop = new ville.embed.fluent.PersonDesktop(svgsize, null, null, "PersonDesktop");
        arrembeds.push(emdPersonDesktop);
        var emdPersonEdit = new ville.embed.fluent.PersonEdit(svgsize, null, null, "PersonEdit");
        arrembeds.push(emdPersonEdit);
        var emdPersonFeedback = new ville.embed.fluent.PersonFeedback(svgsize, null, null, "PersonFeedback");
        arrembeds.push(emdPersonFeedback);
        var emdPersonHeart = new ville.embed.fluent.PersonHeart(svgsize, null, null, "PersonHeart");
        arrembeds.push(emdPersonHeart);
        var emdPersonInfo = new ville.embed.fluent.PersonInfo(svgsize, null, null, "PersonInfo");
        arrembeds.push(emdPersonInfo);
        var emdPersonKey = new ville.embed.fluent.PersonKey(svgsize, null, null, "PersonKey");
        arrembeds.push(emdPersonKey);
        var emdPersonLightbulb = new ville.embed.fluent.PersonLightbulb(svgsize, null, null, "PersonLightbulb");
        arrembeds.push(emdPersonLightbulb);
        var emdPersonLightning = new ville.embed.fluent.PersonLightning(svgsize, null, null, "PersonLightning");
        arrembeds.push(emdPersonLightning);
        var emdPersonLink = new ville.embed.fluent.PersonLink(svgsize, null, null, "PersonLink");
        arrembeds.push(emdPersonLink);
        var emdPersonLock = new ville.embed.fluent.PersonLock(svgsize, null, null, "PersonLock");
        arrembeds.push(emdPersonLock);
        var emdPersonMail = new ville.embed.fluent.PersonMail(svgsize, null, null, "PersonMail");
        arrembeds.push(emdPersonMail);
        var emdPersonMoney = new ville.embed.fluent.PersonMoney(svgsize, null, null, "PersonMoney");
        arrembeds.push(emdPersonMoney);
        var emdPersonNote = new ville.embed.fluent.PersonNote(svgsize, null, null, "PersonNote");
        arrembeds.push(emdPersonNote);
        var emdPersonPasskey = new ville.embed.fluent.PersonPasskey(svgsize, null, null, "PersonPasskey");
        arrembeds.push(emdPersonPasskey);
        var emdPersonPill = new ville.embed.fluent.PersonPill(svgsize, null, null, "PersonPill");
        arrembeds.push(emdPersonPill);
        var emdPersonProhibited = new ville.embed.fluent.PersonProhibited(svgsize, null, null, "PersonProhibited");
        arrembeds.push(emdPersonProhibited);
        var emdPersonQuestionMark = new ville.embed.fluent.PersonQuestionMark(svgsize, null, null, "PersonQuestionMark");
        arrembeds.push(emdPersonQuestionMark);
        var emdPersonRibbon = new ville.embed.fluent.PersonRibbon(svgsize, null, null, "PersonRibbon");
        arrembeds.push(emdPersonRibbon);
        var emdPersonRunning = new ville.embed.fluent.PersonRunning(svgsize, null, null, "PersonRunning");
        arrembeds.push(emdPersonRunning);
        var emdPersonSearch = new ville.embed.fluent.PersonSearch(svgsize, null, null, "PersonSearch");
        arrembeds.push(emdPersonSearch);
        var emdPersonSettings = new ville.embed.fluent.PersonSettings(svgsize, null, null, "PersonSettings");
        arrembeds.push(emdPersonSettings);
        var emdPersonSquare = new ville.embed.fluent.PersonSquare(svgsize, null, null, "PersonSquare");
        arrembeds.push(emdPersonSquare);
        var emdPersonSquareCheckmark = new ville.embed.fluent.PersonSquareCheckmark(svgsize, null, null, "PersonSquareCheckmark");
        arrembeds.push(emdPersonSquareCheckmark);
        var emdPersonStar = new ville.embed.fluent.PersonStar(svgsize, null, null, "PersonStar");
        arrembeds.push(emdPersonStar);
        var emdPersonStarburst = new ville.embed.fluent.PersonStarburst(svgsize, null, null, "PersonStarburst");
        arrembeds.push(emdPersonStarburst);
        var emdPersonSubtract = new ville.embed.fluent.PersonSubtract(svgsize, null, null, "PersonSubtract");
        arrembeds.push(emdPersonSubtract);
        var emdPersonSupport = new ville.embed.fluent.PersonSupport(svgsize, null, null, "PersonSupport");
        arrembeds.push(emdPersonSupport);
        var emdPersonSwap = new ville.embed.fluent.PersonSwap(svgsize, null, null, "PersonSwap");
        arrembeds.push(emdPersonSwap);
        var emdPersonSync = new ville.embed.fluent.PersonSync(svgsize, null, null, "PersonSync");
        arrembeds.push(emdPersonSync);
        var emdPersonTag = new ville.embed.fluent.PersonTag(svgsize, null, null, "PersonTag");
        arrembeds.push(emdPersonTag);
        var emdPersonTentative = new ville.embed.fluent.PersonTentative(svgsize, null, null, "PersonTentative");
        arrembeds.push(emdPersonTentative);
        var emdPersonVoice = new ville.embed.fluent.PersonVoice(svgsize, null, null, "PersonVoice");
        arrembeds.push(emdPersonVoice);
        var emdPersonWalking = new ville.embed.fluent.PersonWalking(svgsize, null, null, "PersonWalking");
        arrembeds.push(emdPersonWalking);
        var emdPersonWarning = new ville.embed.fluent.PersonWarning(svgsize, null, null, "PersonWarning");
        arrembeds.push(emdPersonWarning);
        var emdPersonWrench = new ville.embed.fluent.PersonWrench(svgsize, null, null, "PersonWrench");
        arrembeds.push(emdPersonWrench);
        var emdPhone = new ville.embed.fluent.Phone(svgsize, null, null, "Phone");
        arrembeds.push(emdPhone);
        var emdPhoneAdd = new ville.embed.fluent.PhoneAdd(svgsize, null, null, "PhoneAdd");
        arrembeds.push(emdPhoneAdd);
        var emdPhoneArrowRight = new ville.embed.fluent.PhoneArrowRight(svgsize, null, null, "PhoneArrowRight");
        arrembeds.push(emdPhoneArrowRight);
        var emdPhoneChat = new ville.embed.fluent.PhoneChat(svgsize, null, null, "PhoneChat");
        arrembeds.push(emdPhoneChat);
        var emdPhoneCheckmark = new ville.embed.fluent.PhoneCheckmark(svgsize, null, null, "PhoneCheckmark");
        arrembeds.push(emdPhoneCheckmark);
        var emdPhoneDesktop = new ville.embed.fluent.PhoneDesktop(svgsize, null, null, "PhoneDesktop");
        arrembeds.push(emdPhoneDesktop);
        var emdPhoneDesktopAdd = new ville.embed.fluent.PhoneDesktopAdd(svgsize, null, null, "PhoneDesktopAdd");
        arrembeds.push(emdPhoneDesktopAdd);
        var emdPhoneDismiss = new ville.embed.fluent.PhoneDismiss(svgsize, null, null, "PhoneDismiss");
        arrembeds.push(emdPhoneDismiss);
        var emdPhoneEdit = new ville.embed.fluent.PhoneEdit(svgsize, null, null, "PhoneEdit");
        arrembeds.push(emdPhoneEdit);
        var emdPhoneEraser = new ville.embed.fluent.PhoneEraser(svgsize, null, null, "PhoneEraser");
        arrembeds.push(emdPhoneEraser);
        var emdPhoneFooterArrowDown = new ville.embed.fluent.PhoneFooterArrowDown(svgsize, null, null, "PhoneFooterArrowDown");
        arrembeds.push(emdPhoneFooterArrowDown);
        var emdPhoneHeaderArrowUp = new ville.embed.fluent.PhoneHeaderArrowUp(svgsize, null, null, "PhoneHeaderArrowUp");
        arrembeds.push(emdPhoneHeaderArrowUp);
        var emdPhoneKey = new ville.embed.fluent.PhoneKey(svgsize, null, null, "PhoneKey");
        arrembeds.push(emdPhoneKey);
        var emdPhoneLaptop = new ville.embed.fluent.PhoneLaptop(svgsize, null, null, "PhoneLaptop");
        arrembeds.push(emdPhoneLaptop);
        var emdPhoneLinkSetup = new ville.embed.fluent.PhoneLinkSetup(svgsize, null, null, "PhoneLinkSetup");
        arrembeds.push(emdPhoneLinkSetup);
        var emdPhoneLock = new ville.embed.fluent.PhoneLock(svgsize, null, null, "PhoneLock");
        arrembeds.push(emdPhoneLock);
        var emdPhonePageHeader = new ville.embed.fluent.PhonePageHeader(svgsize, null, null, "PhonePageHeader");
        arrembeds.push(emdPhonePageHeader);
        var emdPhonePagination = new ville.embed.fluent.PhonePagination(svgsize, null, null, "PhonePagination");
        arrembeds.push(emdPhonePagination);
        var emdPhoneScreenTime = new ville.embed.fluent.PhoneScreenTime(svgsize, null, null, "PhoneScreenTime");
        arrembeds.push(emdPhoneScreenTime);
        var emdPhoneShake = new ville.embed.fluent.PhoneShake(svgsize, null, null, "PhoneShake");
        arrembeds.push(emdPhoneShake);
        var emdPhoneSpanIn = new ville.embed.fluent.PhoneSpanIn(svgsize, null, null, "PhoneSpanIn");
        arrembeds.push(emdPhoneSpanIn);
        var emdPhoneSpanOut = new ville.embed.fluent.PhoneSpanOut(svgsize, null, null, "PhoneSpanOut");
        arrembeds.push(emdPhoneSpanOut);
        var emdPhoneSpeaker = new ville.embed.fluent.PhoneSpeaker(svgsize, null, null, "PhoneSpeaker");
        arrembeds.push(emdPhoneSpeaker);
        var emdPhoneStatusBar = new ville.embed.fluent.PhoneStatusBar(svgsize, null, null, "PhoneStatusBar");
        arrembeds.push(emdPhoneStatusBar);
        var emdPhoneTablet = new ville.embed.fluent.PhoneTablet(svgsize, null, null, "PhoneTablet");
        arrembeds.push(emdPhoneTablet);
        var emdPhoneUpdate = new ville.embed.fluent.PhoneUpdate(svgsize, null, null, "PhoneUpdate");
        arrembeds.push(emdPhoneUpdate);
        var emdPhoneUpdateCheckmark = new ville.embed.fluent.PhoneUpdateCheckmark(svgsize, null, null, "PhoneUpdateCheckmark");
        arrembeds.push(emdPhoneUpdateCheckmark);
        var emdPhoneVerticalScroll = new ville.embed.fluent.PhoneVerticalScroll(svgsize, null, null, "PhoneVerticalScroll");
        arrembeds.push(emdPhoneVerticalScroll);
        var emdPhoneVibrate = new ville.embed.fluent.PhoneVibrate(svgsize, null, null, "PhoneVibrate");
        arrembeds.push(emdPhoneVibrate);
        var emdPhotoFilter = new ville.embed.fluent.PhotoFilter(svgsize, null, null, "PhotoFilter");
        arrembeds.push(emdPhotoFilter);
        var emdPi = new ville.embed.fluent.Pi(svgsize, null, null, "Pi");
        arrembeds.push(emdPi);
        var emdPictureInPicture = new ville.embed.fluent.PictureInPicture(svgsize, null, null, "PictureInPicture");
        arrembeds.push(emdPictureInPicture);
        var emdPictureInPictureEnter = new ville.embed.fluent.PictureInPictureEnter(svgsize, null, null, "PictureInPictureEnter");
        arrembeds.push(emdPictureInPictureEnter);
        var emdPictureInPictureExit = new ville.embed.fluent.PictureInPictureExit(svgsize, null, null, "PictureInPictureExit");
        arrembeds.push(emdPictureInPictureExit);
        var emdPill = new ville.embed.fluent.Pill(svgsize, null, null, "Pill");
        arrembeds.push(emdPill);
        var emdPin = new ville.embed.fluent.Pin(svgsize, null, null, "Pin");
        arrembeds.push(emdPin);
        var emdPinGlobe = new ville.embed.fluent.PinGlobe(svgsize, null, null, "PinGlobe");
        arrembeds.push(emdPinGlobe);
        var emdPinOff = new ville.embed.fluent.PinOff(svgsize, null, null, "PinOff");
        arrembeds.push(emdPinOff);
        var emdPipeline = new ville.embed.fluent.Pipeline(svgsize, null, null, "Pipeline");
        arrembeds.push(emdPipeline);
        var emdPipelineAdd = new ville.embed.fluent.PipelineAdd(svgsize, null, null, "PipelineAdd");
        arrembeds.push(emdPipelineAdd);
        var emdPipelineArrowCurveDown = new ville.embed.fluent.PipelineArrowCurveDown(svgsize, null, null, "PipelineArrowCurveDown");
        arrembeds.push(emdPipelineArrowCurveDown);
        var emdPipelinePlay = new ville.embed.fluent.PipelinePlay(svgsize, null, null, "PipelinePlay");
        arrembeds.push(emdPipelinePlay);
        var emdPivot = new ville.embed.fluent.Pivot(svgsize, null, null, "Pivot");
        arrembeds.push(emdPivot);
        var emdPlantCattail = new ville.embed.fluent.PlantCattail(svgsize, null, null, "PlantCattail");
        arrembeds.push(emdPlantCattail);
        var emdPlantGrass = new ville.embed.fluent.PlantGrass(svgsize, null, null, "PlantGrass");
        arrembeds.push(emdPlantGrass);
        var emdPlantRagweed = new ville.embed.fluent.PlantRagweed(svgsize, null, null, "PlantRagweed");
        arrembeds.push(emdPlantRagweed);
        var emdPlay = new ville.embed.fluent.Play(svgsize, null, null, "Play");
        arrembeds.push(emdPlay);
        var emdPlayCircle = new ville.embed.fluent.PlayCircle(svgsize, null, null, "PlayCircle");
        arrembeds.push(emdPlayCircle);
        var emdPlayCircleHint = new ville.embed.fluent.PlayCircleHint(svgsize, null, null, "PlayCircleHint");
        arrembeds.push(emdPlayCircleHint);
        var emdPlaySettings = new ville.embed.fluent.PlaySettings(svgsize, null, null, "PlaySettings");
        arrembeds.push(emdPlaySettings);
        var emdPlayingCards = new ville.embed.fluent.PlayingCards(svgsize, null, null, "PlayingCards");
        arrembeds.push(emdPlayingCards);
        var emdPlugConnected = new ville.embed.fluent.PlugConnected(svgsize, null, null, "PlugConnected");
        arrembeds.push(emdPlugConnected);
        var emdPlugConnectedAdd = new ville.embed.fluent.PlugConnectedAdd(svgsize, null, null, "PlugConnectedAdd");
        arrembeds.push(emdPlugConnectedAdd);
        var emdPlugConnectedCheckmark = new ville.embed.fluent.PlugConnectedCheckmark(svgsize, null, null, "PlugConnectedCheckmark");
        arrembeds.push(emdPlugConnectedCheckmark);
        var emdPlugConnectedSettings = new ville.embed.fluent.PlugConnectedSettings(svgsize, null, null, "PlugConnectedSettings");
        arrembeds.push(emdPlugConnectedSettings);
        var emdPlugDisconnected = new ville.embed.fluent.PlugDisconnected(svgsize, null, null, "PlugDisconnected");
        arrembeds.push(emdPlugDisconnected);
        var emdPointScan = new ville.embed.fluent.PointScan(svgsize, null, null, "PointScan");
        arrembeds.push(emdPointScan);
        var emdPoll = new ville.embed.fluent.Poll(svgsize, null, null, "Poll");
        arrembeds.push(emdPoll);
        var emdPollHorizontal = new ville.embed.fluent.PollHorizontal(svgsize, null, null, "PollHorizontal");
        arrembeds.push(emdPollHorizontal);
        var emdPollOff = new ville.embed.fluent.PollOff(svgsize, null, null, "PollOff");
        arrembeds.push(emdPollOff);
        var emdPortHdmi = new ville.embed.fluent.PortHdmi(svgsize, null, null, "PortHdmi");
        arrembeds.push(emdPortHdmi);
        var emdPortMicroUsb = new ville.embed.fluent.PortMicroUsb(svgsize, null, null, "PortMicroUsb");
        arrembeds.push(emdPortMicroUsb);
        var emdPortUsbA = new ville.embed.fluent.PortUsbA(svgsize, null, null, "PortUsbA");
        arrembeds.push(emdPortUsbA);
        var emdPortUsbC = new ville.embed.fluent.PortUsbC(svgsize, null, null, "PortUsbC");
        arrembeds.push(emdPortUsbC);
        var emdPositionBackward = new ville.embed.fluent.PositionBackward(svgsize, null, null, "PositionBackward");
        arrembeds.push(emdPositionBackward);
        var emdPositionForward = new ville.embed.fluent.PositionForward(svgsize, null, null, "PositionForward");
        arrembeds.push(emdPositionForward);
        var emdPositionToBack = new ville.embed.fluent.PositionToBack(svgsize, null, null, "PositionToBack");
        arrembeds.push(emdPositionToBack);
        var emdPositionToFront = new ville.embed.fluent.PositionToFront(svgsize, null, null, "PositionToFront");
        arrembeds.push(emdPositionToFront);
        var emdPower = new ville.embed.fluent.Power(svgsize, null, null, "Power");
        arrembeds.push(emdPower);
        var emdPredictions = new ville.embed.fluent.Predictions(svgsize, null, null, "Predictions");
        arrembeds.push(emdPredictions);
        var emdPremium = new ville.embed.fluent.Premium(svgsize, null, null, "Premium");
        arrembeds.push(emdPremium);
        var emdPremiumPerson = new ville.embed.fluent.PremiumPerson(svgsize, null, null, "PremiumPerson");
        arrembeds.push(emdPremiumPerson);
        var emdPresenceAvailable = new ville.embed.fluent.PresenceAvailable(svgsize, null, null, "PresenceAvailable");
        arrembeds.push(emdPresenceAvailable);
        var emdPresenceAway = new ville.embed.fluent.PresenceAway(svgsize, null, null, "PresenceAway");
        arrembeds.push(emdPresenceAway);
        var emdPresenceBlocked = new ville.embed.fluent.PresenceBlocked(svgsize, null, null, "PresenceBlocked");
        arrembeds.push(emdPresenceBlocked);
        var emdPresenceDnd = new ville.embed.fluent.PresenceDnd(svgsize, null, null, "PresenceDnd");
        arrembeds.push(emdPresenceDnd);
        var emdPresenceOffline = new ville.embed.fluent.PresenceOffline(svgsize, null, null, "PresenceOffline");
        arrembeds.push(emdPresenceOffline);
        var emdPresenceOof = new ville.embed.fluent.PresenceOof(svgsize, null, null, "PresenceOof");
        arrembeds.push(emdPresenceOof);
        var emdPresenceUnknown = new ville.embed.fluent.PresenceUnknown(svgsize, null, null, "PresenceUnknown");
        arrembeds.push(emdPresenceUnknown);
        var emdPresenter = new ville.embed.fluent.Presenter(svgsize, null, null, "Presenter");
        arrembeds.push(emdPresenter);
        var emdPresenterOff = new ville.embed.fluent.PresenterOff(svgsize, null, null, "PresenterOff");
        arrembeds.push(emdPresenterOff);
        var emdPreviewLink = new ville.embed.fluent.PreviewLink(svgsize, null, null, "PreviewLink");
        arrembeds.push(emdPreviewLink);
        var emdPrevious = new ville.embed.fluent.Previous(svgsize, null, null, "Previous");
        arrembeds.push(emdPrevious);
        var emdPreviousFrame = new ville.embed.fluent.PreviousFrame(svgsize, null, null, "PreviousFrame");
        arrembeds.push(emdPreviousFrame);
        var emdPrint = new ville.embed.fluent.Print(svgsize, null, null, "Print");
        arrembeds.push(emdPrint);
        var emdPrintAdd = new ville.embed.fluent.PrintAdd(svgsize, null, null, "PrintAdd");
        arrembeds.push(emdPrintAdd);
        var emdProduction = new ville.embed.fluent.Production(svgsize, null, null, "Production");
        arrembeds.push(emdProduction);
        var emdProductionCheckmark = new ville.embed.fluent.ProductionCheckmark(svgsize, null, null, "ProductionCheckmark");
        arrembeds.push(emdProductionCheckmark);
        var emdProhibited = new ville.embed.fluent.Prohibited(svgsize, null, null, "Prohibited");
        arrembeds.push(emdProhibited);
        var emdProhibitedMultiple = new ville.embed.fluent.ProhibitedMultiple(svgsize, null, null, "ProhibitedMultiple");
        arrembeds.push(emdProhibitedMultiple);
        var emdProhibitedNote = new ville.embed.fluent.ProhibitedNote(svgsize, null, null, "ProhibitedNote");
        arrembeds.push(emdProhibitedNote);
        var emdProjectionScreen = new ville.embed.fluent.ProjectionScreen(svgsize, null, null, "ProjectionScreen");
        arrembeds.push(emdProjectionScreen);
        var emdProjectionScreenDismiss = new ville.embed.fluent.ProjectionScreenDismiss(svgsize, null, null, "ProjectionScreenDismiss");
        arrembeds.push(emdProjectionScreenDismiss);
        var emdProjectionScreenText = new ville.embed.fluent.ProjectionScreenText(svgsize, null, null, "ProjectionScreenText");
        arrembeds.push(emdProjectionScreenText);
        var emdProtocolHandler = new ville.embed.fluent.ProtocolHandler(svgsize, null, null, "ProtocolHandler");
        arrembeds.push(emdProtocolHandler);
        var emdPulse = new ville.embed.fluent.Pulse(svgsize, null, null, "Pulse");
        arrembeds.push(emdPulse);
        var emdPulseSquare = new ville.embed.fluent.PulseSquare(svgsize, null, null, "PulseSquare");
        arrembeds.push(emdPulseSquare);
        var emdPuzzleCube = new ville.embed.fluent.PuzzleCube(svgsize, null, null, "PuzzleCube");
        arrembeds.push(emdPuzzleCube);
        var emdPuzzleCubePiece = new ville.embed.fluent.PuzzleCubePiece(svgsize, null, null, "PuzzleCubePiece");
        arrembeds.push(emdPuzzleCubePiece);
        var emdPuzzlePiece = new ville.embed.fluent.PuzzlePiece(svgsize, null, null, "PuzzlePiece");
        arrembeds.push(emdPuzzlePiece);
        var emdPuzzlePieceShield = new ville.embed.fluent.PuzzlePieceShield(svgsize, null, null, "PuzzlePieceShield");
        arrembeds.push(emdPuzzlePieceShield);
        var emdQrCode = new ville.embed.fluent.QrCode(svgsize, null, null, "QrCode");
        arrembeds.push(emdQrCode);
        var emdQuestion = new ville.embed.fluent.Question(svgsize, null, null, "Question");
        arrembeds.push(emdQuestion);
        var emdQuestionCircle = new ville.embed.fluent.QuestionCircle(svgsize, null, null, "QuestionCircle");
        arrembeds.push(emdQuestionCircle);
        var emdQuizNew = new ville.embed.fluent.QuizNew(svgsize, null, null, "QuizNew");
        arrembeds.push(emdQuizNew);
        var emdRadar = new ville.embed.fluent.Radar(svgsize, null, null, "Radar");
        arrembeds.push(emdRadar);
        var emdRadarCheckmark = new ville.embed.fluent.RadarCheckmark(svgsize, null, null, "RadarCheckmark");
        arrembeds.push(emdRadarCheckmark);
        var emdRadarRectangleMultiple = new ville.embed.fluent.RadarRectangleMultiple(svgsize, null, null, "RadarRectangleMultiple");
        arrembeds.push(emdRadarRectangleMultiple);
        var emdRadioButton = new ville.embed.fluent.RadioButton(svgsize, null, null, "RadioButton");
        arrembeds.push(emdRadioButton);
        var emdRam = new ville.embed.fluent.Ram(svgsize, null, null, "Ram");
        arrembeds.push(emdRam);
        var emdRatingMature = new ville.embed.fluent.RatingMature(svgsize, null, null, "RatingMature");
        arrembeds.push(emdRatingMature);
        var emdRatioOneToOne = new ville.embed.fluent.RatioOneToOne(svgsize, null, null, "RatioOneToOne");
        arrembeds.push(emdRatioOneToOne);
        var emdReOrder = new ville.embed.fluent.ReOrder(svgsize, null, null, "ReOrder");
        arrembeds.push(emdReOrder);
        var emdReOrderDotsHorizontal = new ville.embed.fluent.ReOrderDotsHorizontal(svgsize, null, null, "ReOrderDotsHorizontal");
        arrembeds.push(emdReOrderDotsHorizontal);
        var emdReOrderDotsVertical = new ville.embed.fluent.ReOrderDotsVertical(svgsize, null, null, "ReOrderDotsVertical");
        arrembeds.push(emdReOrderDotsVertical);
        var emdReadAloud = new ville.embed.fluent.ReadAloud(svgsize, null, null, "ReadAloud");
        arrembeds.push(emdReadAloud);
        var emdReadingList = new ville.embed.fluent.ReadingList(svgsize, null, null, "ReadingList");
        arrembeds.push(emdReadingList);
        var emdReadingListAdd = new ville.embed.fluent.ReadingListAdd(svgsize, null, null, "ReadingListAdd");
        arrembeds.push(emdReadingListAdd);
        var emdReadingModeMobile = new ville.embed.fluent.ReadingModeMobile(svgsize, null, null, "ReadingModeMobile");
        arrembeds.push(emdReadingModeMobile);
        var emdRealEstate = new ville.embed.fluent.RealEstate(svgsize, null, null, "RealEstate");
        arrembeds.push(emdRealEstate);
        var emdReceipt = new ville.embed.fluent.Receipt(svgsize, null, null, "Receipt");
        arrembeds.push(emdReceipt);
        var emdReceiptAdd = new ville.embed.fluent.ReceiptAdd(svgsize, null, null, "ReceiptAdd");
        arrembeds.push(emdReceiptAdd);
        var emdReceiptBag = new ville.embed.fluent.ReceiptBag(svgsize, null, null, "ReceiptBag");
        arrembeds.push(emdReceiptBag);
        var emdReceiptCube = new ville.embed.fluent.ReceiptCube(svgsize, null, null, "ReceiptCube");
        arrembeds.push(emdReceiptCube);
        var emdReceiptMoney = new ville.embed.fluent.ReceiptMoney(svgsize, null, null, "ReceiptMoney");
        arrembeds.push(emdReceiptMoney);
        var emdReceiptPlay = new ville.embed.fluent.ReceiptPlay(svgsize, null, null, "ReceiptPlay");
        arrembeds.push(emdReceiptPlay);
        var emdReceiptSearch = new ville.embed.fluent.ReceiptSearch(svgsize, null, null, "ReceiptSearch");
        arrembeds.push(emdReceiptSearch);
        var emdReceiptSparkles = new ville.embed.fluent.ReceiptSparkles(svgsize, null, null, "ReceiptSparkles");
        arrembeds.push(emdReceiptSparkles);
        var emdRecord = new ville.embed.fluent.Record(svgsize, null, null, "Record");
        arrembeds.push(emdRecord);
        var emdRecordStop = new ville.embed.fluent.RecordStop(svgsize, null, null, "RecordStop");
        arrembeds.push(emdRecordStop);
        var emdRectangleLandscape = new ville.embed.fluent.RectangleLandscape(svgsize, null, null, "RectangleLandscape");
        arrembeds.push(emdRectangleLandscape);
        var emdRectangleLandscapeHintCopy = new ville.embed.fluent.RectangleLandscapeHintCopy(svgsize, null, null, "RectangleLandscapeHintCopy");
        arrembeds.push(emdRectangleLandscapeHintCopy);
        var emdRectangleLandscapeSparkle = new ville.embed.fluent.RectangleLandscapeSparkle(svgsize, null, null, "RectangleLandscapeSparkle");
        arrembeds.push(emdRectangleLandscapeSparkle);
        var emdRectangleLandscapeSync = new ville.embed.fluent.RectangleLandscapeSync(svgsize, null, null, "RectangleLandscapeSync");
        arrembeds.push(emdRectangleLandscapeSync);
        var emdRectangleLandscapeSyncOff = new ville.embed.fluent.RectangleLandscapeSyncOff(svgsize, null, null, "RectangleLandscapeSyncOff");
        arrembeds.push(emdRectangleLandscapeSyncOff);
        var emdRectanglePortraitLocationTarget = new ville.embed.fluent.RectanglePortraitLocationTarget(svgsize, null, null, "RectanglePortraitLocationTarget");
        arrembeds.push(emdRectanglePortraitLocationTarget);
        var emdRecycle = new ville.embed.fluent.Recycle(svgsize, null, null, "Recycle");
        arrembeds.push(emdRecycle);
        var emdRemixAdd = new ville.embed.fluent.RemixAdd(svgsize, null, null, "RemixAdd");
        arrembeds.push(emdRemixAdd);
        var emdRemote = new ville.embed.fluent.Remote(svgsize, null, null, "Remote");
        arrembeds.push(emdRemote);
        var emdRename = new ville.embed.fluent.Rename(svgsize, null, null, "Rename");
        arrembeds.push(emdRename);
        var emdReorder = new ville.embed.fluent.ReOrder(svgsize, null, null, "ReOrder");
        arrembeds.push(emdReorder);
        var emdReplay = new ville.embed.fluent.Replay(svgsize, null, null, "Replay");
        arrembeds.push(emdReplay);
        var emdResize = new ville.embed.fluent.Resize(svgsize, null, null, "Resize");
        arrembeds.push(emdResize);
        var emdResizeImage = new ville.embed.fluent.ResizeImage(svgsize, null, null, "ResizeImage");
        arrembeds.push(emdResizeImage);
        var emdResizeLarge = new ville.embed.fluent.ResizeLarge(svgsize, null, null, "ResizeLarge");
        arrembeds.push(emdResizeLarge);
        var emdResizeSmall = new ville.embed.fluent.ResizeSmall(svgsize, null, null, "ResizeSmall");
        arrembeds.push(emdResizeSmall);
        var emdResizeTable = new ville.embed.fluent.ResizeTable(svgsize, null, null, "ResizeTable");
        arrembeds.push(emdResizeTable);
        var emdResizeVideo = new ville.embed.fluent.ResizeVideo(svgsize, null, null, "ResizeVideo");
        arrembeds.push(emdResizeVideo);
        var emdReward = new ville.embed.fluent.Reward(svgsize, null, null, "Reward");
        arrembeds.push(emdReward);
        var emdRewind = new ville.embed.fluent.Rewind(svgsize, null, null, "Rewind");
        arrembeds.push(emdRewind);
        var emdRhombus = new ville.embed.fluent.Rhombus(svgsize, null, null, "Rhombus");
        arrembeds.push(emdRhombus);
        var emdRibbon = new ville.embed.fluent.Ribbon(svgsize, null, null, "Ribbon");
        arrembeds.push(emdRibbon);
        var emdRibbonAdd = new ville.embed.fluent.RibbonAdd(svgsize, null, null, "RibbonAdd");
        arrembeds.push(emdRibbonAdd);
        var emdRibbonOff = new ville.embed.fluent.RibbonOff(svgsize, null, null, "RibbonOff");
        arrembeds.push(emdRibbonOff);
        var emdRibbonStar = new ville.embed.fluent.RibbonStar(svgsize, null, null, "RibbonStar");
        arrembeds.push(emdRibbonStar);
        var emdRoad = new ville.embed.fluent.Road(svgsize, null, null, "Road");
        arrembeds.push(emdRoad);
        var emdRoadCone = new ville.embed.fluent.RoadCone(svgsize, null, null, "RoadCone");
        arrembeds.push(emdRoadCone);
        var emdRocket = new ville.embed.fluent.Rocket(svgsize, null, null, "Rocket");
        arrembeds.push(emdRocket);
        var emdRotateLeft = new ville.embed.fluent.RotateLeft(svgsize, null, null, "RotateLeft");
        arrembeds.push(emdRotateLeft);
        var emdRotateRight = new ville.embed.fluent.RotateRight(svgsize, null, null, "RotateRight");
        arrembeds.push(emdRotateRight);
        var emdRouter = new ville.embed.fluent.Router(svgsize, null, null, "Router");
        arrembeds.push(emdRouter);
        var emdRowTriple = new ville.embed.fluent.RowTriple(svgsize, null, null, "RowTriple");
        arrembeds.push(emdRowTriple);
        var emdRss = new ville.embed.fluent.Rss(svgsize, null, null, "Rss");
        arrembeds.push(emdRss);
        var emdRuler = new ville.embed.fluent.Ruler(svgsize, null, null, "Ruler");
        arrembeds.push(emdRuler);
        var emdRun = new ville.embed.fluent.Run(svgsize, null, null, "Run");
        arrembeds.push(emdRun);
        var emdSanitize = new ville.embed.fluent.Sanitize(svgsize, null, null, "Sanitize");
        arrembeds.push(emdSanitize);
        var emdSave = new ville.embed.fluent.Save(svgsize, null, null, "Save");
        arrembeds.push(emdSave);
        var emdSaveArrowRight = new ville.embed.fluent.SaveArrowRight(svgsize, null, null, "SaveArrowRight");
        arrembeds.push(emdSaveArrowRight);
        var emdSaveCopy = new ville.embed.fluent.SaveCopy(svgsize, null, null, "SaveCopy");
        arrembeds.push(emdSaveCopy);
        var emdSaveEdit = new ville.embed.fluent.SaveEdit(svgsize, null, null, "SaveEdit");
        arrembeds.push(emdSaveEdit);
        var emdSaveImage = new ville.embed.fluent.SaveImage(svgsize, null, null, "SaveImage");
        arrembeds.push(emdSaveImage);
        var emdSaveMultiple = new ville.embed.fluent.SaveMultiple(svgsize, null, null, "SaveMultiple");
        arrembeds.push(emdSaveMultiple);
        var emdSaveSearch = new ville.embed.fluent.SaveSearch(svgsize, null, null, "SaveSearch");
        arrembeds.push(emdSaveSearch);
        var emdSaveSync = new ville.embed.fluent.SaveSync(svgsize, null, null, "SaveSync");
        arrembeds.push(emdSaveSync);
        var emdSavings = new ville.embed.fluent.Savings(svgsize, null, null, "Savings");
        arrembeds.push(emdSavings);
        var emdScaleFill = new ville.embed.fluent.ScaleFill(svgsize, null, null, "ScaleFill");
        arrembeds.push(emdScaleFill);
        var emdScaleFit = new ville.embed.fluent.ScaleFit(svgsize, null, null, "ScaleFit");
        arrembeds.push(emdScaleFit);
        var emdScales = new ville.embed.fluent.Scales(svgsize, null, null, "Scales");
        arrembeds.push(emdScales);
        var emdScan = new ville.embed.fluent.Scan(svgsize, null, null, "Scan");
        arrembeds.push(emdScan);
        var emdScanCamera = new ville.embed.fluent.ScanCamera(svgsize, null, null, "ScanCamera");
        arrembeds.push(emdScanCamera);
        var emdScanDash = new ville.embed.fluent.ScanDash(svgsize, null, null, "ScanDash");
        arrembeds.push(emdScanDash);
        var emdScanObject = new ville.embed.fluent.ScanObject(svgsize, null, null, "ScanObject");
        arrembeds.push(emdScanObject);
        var emdScanPerson = new ville.embed.fluent.ScanPerson(svgsize, null, null, "ScanPerson");
        arrembeds.push(emdScanPerson);
        var emdScanTable = new ville.embed.fluent.ScanTable(svgsize, null, null, "ScanTable");
        arrembeds.push(emdScanTable);
        var emdScanText = new ville.embed.fluent.ScanText(svgsize, null, null, "ScanText");
        arrembeds.push(emdScanText);
        var emdScanThumbUp = new ville.embed.fluent.ScanThumbUp(svgsize, null, null, "ScanThumbUp");
        arrembeds.push(emdScanThumbUp);
        var emdScanThumbUpOff = new ville.embed.fluent.ScanThumbUpOff(svgsize, null, null, "ScanThumbUpOff");
        arrembeds.push(emdScanThumbUpOff);
        var emdScanType = new ville.embed.fluent.ScanType(svgsize, null, null, "ScanType");
        arrembeds.push(emdScanType);
        var emdScanTypeCheckmark = new ville.embed.fluent.ScanTypeCheckmark(svgsize, null, null, "ScanTypeCheckmark");
        arrembeds.push(emdScanTypeCheckmark);
        var emdScanTypeOff = new ville.embed.fluent.ScanTypeOff(svgsize, null, null, "ScanTypeOff");
        arrembeds.push(emdScanTypeOff);
        var emdScratchpad = new ville.embed.fluent.Scratchpad(svgsize, null, null, "Scratchpad");
        arrembeds.push(emdScratchpad);
        var emdScreenCut = new ville.embed.fluent.ScreenCut(svgsize, null, null, "ScreenCut");
        arrembeds.push(emdScreenCut);
        var emdScreenPerson = new ville.embed.fluent.ScreenPerson(svgsize, null, null, "ScreenPerson");
        arrembeds.push(emdScreenPerson);
        var emdScreenSearch = new ville.embed.fluent.ScreenSearch(svgsize, null, null, "ScreenSearch");
        arrembeds.push(emdScreenSearch);
        var emdScreenshot = new ville.embed.fluent.Screenshot(svgsize, null, null, "Screenshot");
        arrembeds.push(emdScreenshot);
        var emdScreenshotRecord = new ville.embed.fluent.ScreenshotRecord(svgsize, null, null, "ScreenshotRecord");
        arrembeds.push(emdScreenshotRecord);
        var emdScript = new ville.embed.fluent.Script(svgsize, null, null, "Script");
        arrembeds.push(emdScript);
        var emdSearch = new ville.embed.fluent.Search(svgsize, null, null, "Search");
        arrembeds.push(emdSearch);
        var emdSearchInfo = new ville.embed.fluent.SearchInfo(svgsize, null, null, "SearchInfo");
        arrembeds.push(emdSearchInfo);
        var emdSearchSettings = new ville.embed.fluent.SearchSettings(svgsize, null, null, "SearchSettings");
        arrembeds.push(emdSearchSettings);
        var emdSearchShield = new ville.embed.fluent.SearchShield(svgsize, null, null, "SearchShield");
        arrembeds.push(emdSearchShield);
        var emdSearchSquare = new ville.embed.fluent.SearchSquare(svgsize, null, null, "SearchSquare");
        arrembeds.push(emdSearchSquare);
        var emdSearchVisual = new ville.embed.fluent.SearchVisual(svgsize, null, null, "SearchVisual");
        arrembeds.push(emdSearchVisual);
        var emdSeat = new ville.embed.fluent.Seat(svgsize, null, null, "Seat");
        arrembeds.push(emdSeat);
        var emdSeatAdd = new ville.embed.fluent.SeatAdd(svgsize, null, null, "SeatAdd");
        arrembeds.push(emdSeatAdd);
        var emdSelectAllOff = new ville.embed.fluent.SelectAllOff(svgsize, null, null, "SelectAllOff");
        arrembeds.push(emdSelectAllOff);
        var emdSelectAllOn = new ville.embed.fluent.SelectAllOn(svgsize, null, null, "SelectAllOn");
        arrembeds.push(emdSelectAllOn);
        var emdSelectObject = new ville.embed.fluent.SelectObject(svgsize, null, null, "SelectObject");
        arrembeds.push(emdSelectObject);
        var emdSelectObjectSkew = new ville.embed.fluent.SelectObjectSkew(svgsize, null, null, "SelectObjectSkew");
        arrembeds.push(emdSelectObjectSkew);
        var emdSelectObjectSkewDismiss = new ville.embed.fluent.SelectObjectSkewDismiss(svgsize, null, null, "SelectObjectSkewDismiss");
        arrembeds.push(emdSelectObjectSkewDismiss);
        var emdSelectObjectSkewEdit = new ville.embed.fluent.SelectObjectSkewEdit(svgsize, null, null, "SelectObjectSkewEdit");
        arrembeds.push(emdSelectObjectSkewEdit);
        var emdSend = new ville.embed.fluent.Send(svgsize, null, null, "Send");
        arrembeds.push(emdSend);
        var emdSendBeaker = new ville.embed.fluent.SendBeaker(svgsize, null, null, "SendBeaker");
        arrembeds.push(emdSendBeaker);
        var emdSendClock = new ville.embed.fluent.SendClock(svgsize, null, null, "SendClock");
        arrembeds.push(emdSendClock);
        var emdSendCopy = new ville.embed.fluent.SendCopy(svgsize, null, null, "SendCopy");
        arrembeds.push(emdSendCopy);
        var emdSerialPort = new ville.embed.fluent.SerialPort(svgsize, null, null, "SerialPort");
        arrembeds.push(emdSerialPort);
        var emdServer = new ville.embed.fluent.Server(svgsize, null, null, "Server");
        arrembeds.push(emdServer);
        var emdServerLink = new ville.embed.fluent.ServerLink(svgsize, null, null, "ServerLink");
        arrembeds.push(emdServerLink);
        var emdServerMultiple = new ville.embed.fluent.ServerMultiple(svgsize, null, null, "ServerMultiple");
        arrembeds.push(emdServerMultiple);
        var emdServerPlay = new ville.embed.fluent.ServerPlay(svgsize, null, null, "ServerPlay");
        arrembeds.push(emdServerPlay);
        var emdServiceBell = new ville.embed.fluent.ServiceBell(svgsize, null, null, "ServiceBell");
        arrembeds.push(emdServiceBell);
        var emdSettings = new ville.embed.fluent.Settings(svgsize, null, null, "Settings");
        arrembeds.push(emdSettings);
        var emdSettingsChat = new ville.embed.fluent.SettingsChat(svgsize, null, null, "SettingsChat");
        arrembeds.push(emdSettingsChat);
        var emdSettingsCogMultiple = new ville.embed.fluent.SettingsCogMultiple(svgsize, null, null, "SettingsCogMultiple");
        arrembeds.push(emdSettingsCogMultiple);
        var emdShapeExclude = new ville.embed.fluent.ShapeExclude(svgsize, null, null, "ShapeExclude");
        arrembeds.push(emdShapeExclude);
        var emdShapeIntersect = new ville.embed.fluent.ShapeIntersect(svgsize, null, null, "ShapeIntersect");
        arrembeds.push(emdShapeIntersect);
        var emdShapeOrganic = new ville.embed.fluent.ShapeOrganic(svgsize, null, null, "ShapeOrganic");
        arrembeds.push(emdShapeOrganic);
        var emdShapeSubtract = new ville.embed.fluent.ShapeSubtract(svgsize, null, null, "ShapeSubtract");
        arrembeds.push(emdShapeSubtract);
        var emdShapeUnion = new ville.embed.fluent.ShapeUnion(svgsize, null, null, "ShapeUnion");
        arrembeds.push(emdShapeUnion);
        var emdShapes = new ville.embed.fluent.Shapes(svgsize, null, null, "Shapes");
        arrembeds.push(emdShapes);
        var emdShare = new ville.embed.fluent.Share(svgsize, null, null, "Share");
        arrembeds.push(emdShare);
        var emdShareAndroid = new ville.embed.fluent.ShareAndroid(svgsize, null, null, "ShareAndroid");
        arrembeds.push(emdShareAndroid);
        var emdShareCloseTray = new ville.embed.fluent.ShareCloseTray(svgsize, null, null, "ShareCloseTray");
        arrembeds.push(emdShareCloseTray);
        var emdShareIos = new ville.embed.fluent.ShareIos(svgsize, null, null, "ShareIos");
        arrembeds.push(emdShareIos);
        var emdShareMultiple = new ville.embed.fluent.ShareMultiple(svgsize, null, null, "ShareMultiple");
        arrembeds.push(emdShareMultiple);
        var emdShareScreenPerson = new ville.embed.fluent.ShareScreenPerson(svgsize, null, null, "ShareScreenPerson");
        arrembeds.push(emdShareScreenPerson);
        var emdShareScreenPersonOverlay = new ville.embed.fluent.ShareScreenPersonOverlay(svgsize, null, null, "ShareScreenPersonOverlay");
        arrembeds.push(emdShareScreenPersonOverlay);
        var emdShareScreenPersonOverlayInside = new ville.embed.fluent.ShareScreenPersonOverlayInside(svgsize, null, null, "ShareScreenPersonOverlayInside");
        arrembeds.push(emdShareScreenPersonOverlayInside);
        var emdShareScreenPersonP = new ville.embed.fluent.ShareScreenPersonP(svgsize, null, null, "ShareScreenPersonP");
        arrembeds.push(emdShareScreenPersonP);
        var emdShareScreenStart = new ville.embed.fluent.ShareScreenStart(svgsize, null, null, "ShareScreenStart");
        arrembeds.push(emdShareScreenStart);
        var emdShareScreenStop = new ville.embed.fluent.ShareScreenStop(svgsize, null, null, "ShareScreenStop");
        arrembeds.push(emdShareScreenStop);
        var emdShield = new ville.embed.fluent.Shield(svgsize, null, null, "Shield");
        arrembeds.push(emdShield);
        var emdShieldAdd = new ville.embed.fluent.ShieldAdd(svgsize, null, null, "ShieldAdd");
        arrembeds.push(emdShieldAdd);
        var emdShieldBadge = new ville.embed.fluent.ShieldBadge(svgsize, null, null, "ShieldBadge");
        arrembeds.push(emdShieldBadge);
        var emdShieldCheckmark = new ville.embed.fluent.ShieldCheckmark(svgsize, null, null, "ShieldCheckmark");
        arrembeds.push(emdShieldCheckmark);
        var emdShieldDismiss = new ville.embed.fluent.ShieldDismiss(svgsize, null, null, "ShieldDismiss");
        arrembeds.push(emdShieldDismiss);
        var emdShieldDismissShield = new ville.embed.fluent.ShieldDismissShield(svgsize, null, null, "ShieldDismissShield");
        arrembeds.push(emdShieldDismissShield);
        var emdShieldError = new ville.embed.fluent.ShieldError(svgsize, null, null, "ShieldError");
        arrembeds.push(emdShieldError);
        var emdShieldGlobe = new ville.embed.fluent.ShieldGlobe(svgsize, null, null, "ShieldGlobe");
        arrembeds.push(emdShieldGlobe);
        var emdShieldKeyhole = new ville.embed.fluent.ShieldKeyhole(svgsize, null, null, "ShieldKeyhole");
        arrembeds.push(emdShieldKeyhole);
        var emdShieldLock = new ville.embed.fluent.ShieldLock(svgsize, null, null, "ShieldLock");
        arrembeds.push(emdShieldLock);
        var emdShieldPerson = new ville.embed.fluent.ShieldPerson(svgsize, null, null, "ShieldPerson");
        arrembeds.push(emdShieldPerson);
        var emdShieldPersonAdd = new ville.embed.fluent.ShieldPersonAdd(svgsize, null, null, "ShieldPersonAdd");
        arrembeds.push(emdShieldPersonAdd);
        var emdShieldProhibited = new ville.embed.fluent.ShieldProhibited(svgsize, null, null, "ShieldProhibited");
        arrembeds.push(emdShieldProhibited);
        var emdShieldQuestion = new ville.embed.fluent.ShieldQuestion(svgsize, null, null, "ShieldQuestion");
        arrembeds.push(emdShieldQuestion);
        var emdShieldTask = new ville.embed.fluent.ShieldTask(svgsize, null, null, "ShieldTask");
        arrembeds.push(emdShieldTask);
        var emdShifts = new ville.embed.fluent.Shifts(svgsize, null, null, "Shifts");
        arrembeds.push(emdShifts);
        var emdShifts30Minutes = new ville.embed.fluent.Shifts30Minutes(svgsize, null, null, "Shifts30Minutes");
        arrembeds.push(emdShifts30Minutes);
        var emdShiftsActivity = new ville.embed.fluent.ShiftsActivity(svgsize, null, null, "ShiftsActivity");
        arrembeds.push(emdShiftsActivity);
        var emdShiftsAdd = new ville.embed.fluent.ShiftsAdd(svgsize, null, null, "ShiftsAdd");
        arrembeds.push(emdShiftsAdd);
        var emdShiftsAvailability = new ville.embed.fluent.ShiftsAvailability(svgsize, null, null, "ShiftsAvailability");
        arrembeds.push(emdShiftsAvailability);
        var emdShiftsCheckmark = new ville.embed.fluent.ShiftsCheckmark(svgsize, null, null, "ShiftsCheckmark");
        arrembeds.push(emdShiftsCheckmark);
        var emdShiftsDay = new ville.embed.fluent.ShiftsDay(svgsize, null, null, "ShiftsDay");
        arrembeds.push(emdShiftsDay);
        var emdShiftsOpen = new ville.embed.fluent.ShiftsOpen(svgsize, null, null, "ShiftsOpen");
        arrembeds.push(emdShiftsOpen);
        var emdShiftsProhibited = new ville.embed.fluent.ShiftsProhibited(svgsize, null, null, "ShiftsProhibited");
        arrembeds.push(emdShiftsProhibited);
        var emdShiftsQuestionMark = new ville.embed.fluent.ShiftsQuestionMark(svgsize, null, null, "ShiftsQuestionMark");
        arrembeds.push(emdShiftsQuestionMark);
        var emdShiftsTeam = new ville.embed.fluent.ShiftsTeam(svgsize, null, null, "ShiftsTeam");
        arrembeds.push(emdShiftsTeam);
        var emdShoppingBag = new ville.embed.fluent.ShoppingBag(svgsize, null, null, "ShoppingBag");
        arrembeds.push(emdShoppingBag);
        var emdShoppingBagAdd = new ville.embed.fluent.ShoppingBagAdd(svgsize, null, null, "ShoppingBagAdd");
        arrembeds.push(emdShoppingBagAdd);
        var emdShoppingBagArrowLeft = new ville.embed.fluent.ShoppingBagArrowLeft(svgsize, null, null, "ShoppingBagArrowLeft");
        arrembeds.push(emdShoppingBagArrowLeft);
        var emdShoppingBagDismiss = new ville.embed.fluent.ShoppingBagDismiss(svgsize, null, null, "ShoppingBagDismiss");
        arrembeds.push(emdShoppingBagDismiss);
        var emdShoppingBagPause = new ville.embed.fluent.ShoppingBagPause(svgsize, null, null, "ShoppingBagPause");
        arrembeds.push(emdShoppingBagPause);
        var emdShoppingBagPercent = new ville.embed.fluent.ShoppingBagPercent(svgsize, null, null, "ShoppingBagPercent");
        arrembeds.push(emdShoppingBagPercent);
        var emdShoppingBagPlay = new ville.embed.fluent.ShoppingBagPlay(svgsize, null, null, "ShoppingBagPlay");
        arrembeds.push(emdShoppingBagPlay);
        var emdShoppingBagTag = new ville.embed.fluent.ShoppingBagTag(svgsize, null, null, "ShoppingBagTag");
        arrembeds.push(emdShoppingBagTag);
        var emdShortpick = new ville.embed.fluent.Shortpick(svgsize, null, null, "Shortpick");
        arrembeds.push(emdShortpick);
        var emdShowerhead = new ville.embed.fluent.Showerhead(svgsize, null, null, "Showerhead");
        arrembeds.push(emdShowerhead);
        var emdSidebarSearchLtr = new ville.embed.fluent.SidebarSearchLtr(svgsize, null, null, "SidebarSearchLtr");
        arrembeds.push(emdSidebarSearchLtr);
        var emdSidebarSearchRtl = new ville.embed.fluent.SidebarSearchRtl(svgsize, null, null, "SidebarSearchRtl");
        arrembeds.push(emdSidebarSearchRtl);
        var emdSignOut = new ville.embed.fluent.SignOut(svgsize, null, null, "SignOut");
        arrembeds.push(emdSignOut);
        var emdSignature = new ville.embed.fluent.Signature(svgsize, null, null, "Signature");
        arrembeds.push(emdSignature);
        var emdSim = new ville.embed.fluent.Sim(svgsize, null, null, "Sim");
        arrembeds.push(emdSim);
        var emdSkipBack10 = new ville.embed.fluent.SkipBack10(svgsize, null, null, "SkipBack10");
        arrembeds.push(emdSkipBack10);
        var emdSkipForward10 = new ville.embed.fluent.SkipForward10(svgsize, null, null, "SkipForward10");
        arrembeds.push(emdSkipForward10);
        var emdSkipForward30 = new ville.embed.fluent.SkipForward30(svgsize, null, null, "SkipForward30");
        arrembeds.push(emdSkipForward30);
        var emdSkipForwardTab = new ville.embed.fluent.SkipForwardTab(svgsize, null, null, "SkipForwardTab");
        arrembeds.push(emdSkipForwardTab);
        var emdSlashForward = new ville.embed.fluent.SlashForward(svgsize, null, null, "SlashForward");
        arrembeds.push(emdSlashForward);
        var emdSleep = new ville.embed.fluent.Sleep(svgsize, null, null, "Sleep");
        arrembeds.push(emdSleep);
        var emdSlideAdd = new ville.embed.fluent.SlideAdd(svgsize, null, null, "SlideAdd");
        arrembeds.push(emdSlideAdd);
        var emdSlideArrowRight = new ville.embed.fluent.SlideArrowRight(svgsize, null, null, "SlideArrowRight");
        arrembeds.push(emdSlideArrowRight);
        var emdSlideEraser = new ville.embed.fluent.SlideEraser(svgsize, null, null, "SlideEraser");
        arrembeds.push(emdSlideEraser);
        var emdSlideGrid = new ville.embed.fluent.SlideGrid(svgsize, null, null, "SlideGrid");
        arrembeds.push(emdSlideGrid);
        var emdSlideHide = new ville.embed.fluent.SlideHide(svgsize, null, null, "SlideHide");
        arrembeds.push(emdSlideHide);
        var emdSlideLayout = new ville.embed.fluent.SlideLayout(svgsize, null, null, "SlideLayout");
        arrembeds.push(emdSlideLayout);
        var emdSlideLink = new ville.embed.fluent.SlideLink(svgsize, null, null, "SlideLink");
        arrembeds.push(emdSlideLink);
        var emdSlideMicrophone = new ville.embed.fluent.SlideMicrophone(svgsize, null, null, "SlideMicrophone");
        arrembeds.push(emdSlideMicrophone);
        var emdSlideMultiple = new ville.embed.fluent.SlideMultiple(svgsize, null, null, "SlideMultiple");
        arrembeds.push(emdSlideMultiple);
        var emdSlideMultipleArrowRight = new ville.embed.fluent.SlideMultipleArrowRight(svgsize, null, null, "SlideMultipleArrowRight");
        arrembeds.push(emdSlideMultipleArrowRight);
        var emdSlideMultipleSearch = new ville.embed.fluent.SlideMultipleSearch(svgsize, null, null, "SlideMultipleSearch");
        arrembeds.push(emdSlideMultipleSearch);
        var emdSlidePlay = new ville.embed.fluent.SlidePlay(svgsize, null, null, "SlidePlay");
        arrembeds.push(emdSlidePlay);
        var emdSlideRecord = new ville.embed.fluent.SlideRecord(svgsize, null, null, "SlideRecord");
        arrembeds.push(emdSlideRecord);
        var emdSlideSearch = new ville.embed.fluent.SlideSearch(svgsize, null, null, "SlideSearch");
        arrembeds.push(emdSlideSearch);
        var emdSlideSettings = new ville.embed.fluent.SlideSettings(svgsize, null, null, "SlideSettings");
        arrembeds.push(emdSlideSettings);
        var emdSlideSize = new ville.embed.fluent.SlideSize(svgsize, null, null, "SlideSize");
        arrembeds.push(emdSlideSize);
        var emdSlideText = new ville.embed.fluent.SlideText(svgsize, null, null, "SlideText");
        arrembeds.push(emdSlideText);
        var emdSlideTextEdit = new ville.embed.fluent.SlideTextEdit(svgsize, null, null, "SlideTextEdit");
        arrembeds.push(emdSlideTextEdit);
        var emdSlideTextMultiple = new ville.embed.fluent.SlideTextMultiple(svgsize, null, null, "SlideTextMultiple");
        arrembeds.push(emdSlideTextMultiple);
        var emdSlideTextPerson = new ville.embed.fluent.SlideTextPerson(svgsize, null, null, "SlideTextPerson");
        arrembeds.push(emdSlideTextPerson);
        var emdSlideTextSparkle = new ville.embed.fluent.SlideTextSparkle(svgsize, null, null, "SlideTextSparkle");
        arrembeds.push(emdSlideTextSparkle);
        var emdSlideTransition = new ville.embed.fluent.SlideTransition(svgsize, null, null, "SlideTransition");
        arrembeds.push(emdSlideTransition);
        var emdSmartwatch = new ville.embed.fluent.Smartwatch(svgsize, null, null, "Smartwatch");
        arrembeds.push(emdSmartwatch);
        var emdSmartwatchDot = new ville.embed.fluent.SmartwatchDot(svgsize, null, null, "SmartwatchDot");
        arrembeds.push(emdSmartwatchDot);
        var emdSnooze = new ville.embed.fluent.Snooze(svgsize, null, null, "Snooze");
        arrembeds.push(emdSnooze);
        var emdSoundSource = new ville.embed.fluent.SoundSource(svgsize, null, null, "SoundSource");
        arrembeds.push(emdSoundSource);
        var emdSoundWaveCircle = new ville.embed.fluent.SoundWaveCircle(svgsize, null, null, "SoundWaveCircle");
        arrembeds.push(emdSoundWaveCircle);
        var emdSpace3d = new ville.embed.fluent.Space3d(svgsize, null, null, "Space3d");
        arrembeds.push(emdSpace3d);
        var emdSpacebar = new ville.embed.fluent.Spacebar(svgsize, null, null, "Spacebar");
        arrembeds.push(emdSpacebar);
        var emdSparkle = new ville.embed.fluent.Sparkle(svgsize, null, null, "Sparkle");
        arrembeds.push(emdSparkle);
        var emdSparkleCircle = new ville.embed.fluent.SparkleCircle(svgsize, null, null, "SparkleCircle");
        arrembeds.push(emdSparkleCircle);
        var emdSpatulaSpoon = new ville.embed.fluent.SpatulaSpoon(svgsize, null, null, "SpatulaSpoon");
        arrembeds.push(emdSpatulaSpoon);
        var emdSpeaker0 = new ville.embed.fluent.Speaker0(svgsize, null, null, "Speaker0");
        arrembeds.push(emdSpeaker0);
        var emdSpeaker1 = new ville.embed.fluent.Speaker1(svgsize, null, null, "Speaker1");
        arrembeds.push(emdSpeaker1);
        var emdSpeaker2 = new ville.embed.fluent.Speaker2(svgsize, null, null, "Speaker2");
        arrembeds.push(emdSpeaker2);
        var emdSpeakerBluetooth = new ville.embed.fluent.SpeakerBluetooth(svgsize, null, null, "SpeakerBluetooth");
        arrembeds.push(emdSpeakerBluetooth);
        var emdSpeakerBox = new ville.embed.fluent.SpeakerBox(svgsize, null, null, "SpeakerBox");
        arrembeds.push(emdSpeakerBox);
        var emdSpeakerEdit = new ville.embed.fluent.SpeakerEdit(svgsize, null, null, "SpeakerEdit");
        arrembeds.push(emdSpeakerEdit);
        var emdSpeakerMute = new ville.embed.fluent.SpeakerMute(svgsize, null, null, "SpeakerMute");
        arrembeds.push(emdSpeakerMute);
        var emdSpeakerOff = new ville.embed.fluent.SpeakerOff(svgsize, null, null, "SpeakerOff");
        arrembeds.push(emdSpeakerOff);
        var emdSpeakerSettings = new ville.embed.fluent.SpeakerSettings(svgsize, null, null, "SpeakerSettings");
        arrembeds.push(emdSpeakerSettings);
        var emdSpeakerUsb = new ville.embed.fluent.SpeakerUsb(svgsize, null, null, "SpeakerUsb");
        arrembeds.push(emdSpeakerUsb);
        var emdSpinnerIos = new ville.embed.fluent.SpinnerIos(svgsize, null, null, "SpinnerIos");
        arrembeds.push(emdSpinnerIos);
        var emdSplitHint = new ville.embed.fluent.SplitHint(svgsize, null, null, "SplitHint");
        arrembeds.push(emdSplitHint);
        var emdSplitHorizontal = new ville.embed.fluent.SplitHorizontal(svgsize, null, null, "SplitHorizontal");
        arrembeds.push(emdSplitHorizontal);
        var emdSplitVertical = new ville.embed.fluent.SplitVertical(svgsize, null, null, "SplitVertical");
        arrembeds.push(emdSplitVertical);
        var emdSport = new ville.embed.fluent.Sport(svgsize, null, null, "Sport");
        arrembeds.push(emdSport);
        var emdSportAmericanFootball = new ville.embed.fluent.SportAmericanFootball(svgsize, null, null, "SportAmericanFootball");
        arrembeds.push(emdSportAmericanFootball);
        var emdSportBaseball = new ville.embed.fluent.SportBaseball(svgsize, null, null, "SportBaseball");
        arrembeds.push(emdSportBaseball);
        var emdSportBasketball = new ville.embed.fluent.SportBasketball(svgsize, null, null, "SportBasketball");
        arrembeds.push(emdSportBasketball);
        var emdSportHockey = new ville.embed.fluent.SportHockey(svgsize, null, null, "SportHockey");
        arrembeds.push(emdSportHockey);
        var emdSportSoccer = new ville.embed.fluent.SportSoccer(svgsize, null, null, "SportSoccer");
        arrembeds.push(emdSportSoccer);
        var emdSquare = new ville.embed.fluent.Square(svgsize, null, null, "Square");
        arrembeds.push(emdSquare);
        var emdSquareAdd = new ville.embed.fluent.SquareAdd(svgsize, null, null, "SquareAdd");
        arrembeds.push(emdSquareAdd);
        var emdSquareArrowForward = new ville.embed.fluent.SquareArrowForward(svgsize, null, null, "SquareArrowForward");
        arrembeds.push(emdSquareArrowForward);
        var emdSquareDismiss = new ville.embed.fluent.SquareDismiss(svgsize, null, null, "SquareDismiss");
        arrembeds.push(emdSquareDismiss);
        var emdSquareEraser = new ville.embed.fluent.SquareEraser(svgsize, null, null, "SquareEraser");
        arrembeds.push(emdSquareEraser);
        var emdSquareHint = new ville.embed.fluent.SquareHint(svgsize, null, null, "SquareHint");
        arrembeds.push(emdSquareHint);
        var emdSquareHintApps = new ville.embed.fluent.SquareHintApps(svgsize, null, null, "SquareHintApps");
        arrembeds.push(emdSquareHintApps);
        var emdSquareHintArrowBack = new ville.embed.fluent.SquareHintArrowBack(svgsize, null, null, "SquareHintArrowBack");
        arrembeds.push(emdSquareHintArrowBack);
        var emdSquareHintHexagon = new ville.embed.fluent.SquareHintHexagon(svgsize, null, null, "SquareHintHexagon");
        arrembeds.push(emdSquareHintHexagon);
        var emdSquareHintSparkles = new ville.embed.fluent.SquareHintSparkles(svgsize, null, null, "SquareHintSparkles");
        arrembeds.push(emdSquareHintSparkles);
        var emdSquareMultiple = new ville.embed.fluent.SquareMultiple(svgsize, null, null, "SquareMultiple");
        arrembeds.push(emdSquareMultiple);
        var emdSquareShadow = new ville.embed.fluent.SquareShadow(svgsize, null, null, "SquareShadow");
        arrembeds.push(emdSquareShadow);
        var emdSquaresNested = new ville.embed.fluent.SquaresNested(svgsize, null, null, "SquaresNested");
        arrembeds.push(emdSquaresNested);
        var emdStack = new ville.embed.fluent.Stack(svgsize, null, null, "Stack");
        arrembeds.push(emdStack);
        var emdStackAdd = new ville.embed.fluent.StackAdd(svgsize, null, null, "StackAdd");
        arrembeds.push(emdStackAdd);
        var emdStackArrowForward = new ville.embed.fluent.StackArrowForward(svgsize, null, null, "StackArrowForward");
        arrembeds.push(emdStackArrowForward);
        var emdStackStar = new ville.embed.fluent.StackStar(svgsize, null, null, "StackStar");
        arrembeds.push(emdStackStar);
        var emdStackVertical = new ville.embed.fluent.StackVertical(svgsize, null, null, "StackVertical");
        arrembeds.push(emdStackVertical);
        var emdStar = new ville.embed.fluent.Star(svgsize, null, null, "Star");
        arrembeds.push(emdStar);
        var emdStarAdd = new ville.embed.fluent.StarAdd(svgsize, null, null, "StarAdd");
        arrembeds.push(emdStarAdd);
        var emdStarArrowBack = new ville.embed.fluent.StarArrowBack(svgsize, null, null, "StarArrowBack");
        arrembeds.push(emdStarArrowBack);
        var emdStarArrowRightEnd = new ville.embed.fluent.StarArrowRightEnd(svgsize, null, null, "StarArrowRightEnd");
        arrembeds.push(emdStarArrowRightEnd);
        var emdStarArrowRightStart = new ville.embed.fluent.StarArrowRightStart(svgsize, null, null, "StarArrowRightStart");
        arrembeds.push(emdStarArrowRightStart);
        var emdStarCheckmark = new ville.embed.fluent.StarCheckmark(svgsize, null, null, "StarCheckmark");
        arrembeds.push(emdStarCheckmark);
        var emdStarDismiss = new ville.embed.fluent.StarDismiss(svgsize, null, null, "StarDismiss");
        arrembeds.push(emdStarDismiss);
        var emdStarEdit = new ville.embed.fluent.StarEdit(svgsize, null, null, "StarEdit");
        arrembeds.push(emdStarEdit);
        var emdStarEmphasis = new ville.embed.fluent.StarEmphasis(svgsize, null, null, "StarEmphasis");
        arrembeds.push(emdStarEmphasis);
        var emdStarHalf = new ville.embed.fluent.StarHalf(svgsize, null, null, "StarHalf");
        arrembeds.push(emdStarHalf);
        var emdStarLineHorizontal3 = new ville.embed.fluent.StarLineHorizontal3(svgsize, null, null, "StarLineHorizontal3");
        arrembeds.push(emdStarLineHorizontal3);
        var emdStarOff = new ville.embed.fluent.StarOff(svgsize, null, null, "StarOff");
        arrembeds.push(emdStarOff);
        var emdStarOneQuarter = new ville.embed.fluent.StarOneQuarter(svgsize, null, null, "StarOneQuarter");
        arrembeds.push(emdStarOneQuarter);
        var emdStarProhibited = new ville.embed.fluent.StarProhibited(svgsize, null, null, "StarProhibited");
        arrembeds.push(emdStarProhibited);
        var emdStarSettings = new ville.embed.fluent.StarSettings(svgsize, null, null, "StarSettings");
        arrembeds.push(emdStarSettings);
        var emdStarThreeQuarter = new ville.embed.fluent.StarThreeQuarter(svgsize, null, null, "StarThreeQuarter");
        arrembeds.push(emdStarThreeQuarter);
        var emdStatus = new ville.embed.fluent.Status(svgsize, null, null, "Status");
        arrembeds.push(emdStatus);
        var emdStep = new ville.embed.fluent.Step(svgsize, null, null, "Step");
        arrembeds.push(emdStep);
        var emdSteps = new ville.embed.fluent.Steps(svgsize, null, null, "Steps");
        arrembeds.push(emdSteps);
        var emdStethoscope = new ville.embed.fluent.Stethoscope(svgsize, null, null, "Stethoscope");
        arrembeds.push(emdStethoscope);
        var emdSticker = new ville.embed.fluent.Sticker(svgsize, null, null, "Sticker");
        arrembeds.push(emdSticker);
        var emdStickerAdd = new ville.embed.fluent.StickerAdd(svgsize, null, null, "StickerAdd");
        arrembeds.push(emdStickerAdd);
        var emdStop = new ville.embed.fluent.Stop(svgsize, null, null, "Stop");
        arrembeds.push(emdStop);
        var emdStorage = new ville.embed.fluent.Storage(svgsize, null, null, "Storage");
        arrembeds.push(emdStorage);
        var emdStoreMicrosoft = new ville.embed.fluent.StoreMicrosoft(svgsize, null, null, "StoreMicrosoft");
        arrembeds.push(emdStoreMicrosoft);
        var emdStream = new ville.embed.fluent.Stream(svgsize, null, null, "Stream");
        arrembeds.push(emdStream);
        var emdStreamInput = new ville.embed.fluent.StreamInput(svgsize, null, null, "StreamInput");
        arrembeds.push(emdStreamInput);
        var emdStreamInputOutput = new ville.embed.fluent.StreamInputOutput(svgsize, null, null, "StreamInputOutput");
        arrembeds.push(emdStreamInputOutput);
        var emdStreamOutput = new ville.embed.fluent.StreamOutput(svgsize, null, null, "StreamOutput");
        arrembeds.push(emdStreamOutput);
        var emdStreetSign = new ville.embed.fluent.StreetSign(svgsize, null, null, "StreetSign");
        arrembeds.push(emdStreetSign);
        var emdStyleGuide = new ville.embed.fluent.StyleGuide(svgsize, null, null, "StyleGuide");
        arrembeds.push(emdStyleGuide);
        var emdSubGrid = new ville.embed.fluent.SubGrid(svgsize, null, null, "SubGrid");
        arrembeds.push(emdSubGrid);
        var emdSubtitles = new ville.embed.fluent.Subtitles(svgsize, null, null, "Subtitles");
        arrembeds.push(emdSubtitles);
        var emdSubtract = new ville.embed.fluent.Subtract(svgsize, null, null, "Subtract");
        arrembeds.push(emdSubtract);
        var emdSubtractCircle = new ville.embed.fluent.SubtractCircle(svgsize, null, null, "SubtractCircle");
        arrembeds.push(emdSubtractCircle);
        var emdSubtractCircleArrowBack = new ville.embed.fluent.SubtractCircleArrowBack(svgsize, null, null, "SubtractCircleArrowBack");
        arrembeds.push(emdSubtractCircleArrowBack);
        var emdSubtractCircleArrowForward = new ville.embed.fluent.SubtractCircleArrowForward(svgsize, null, null, "SubtractCircleArrowForward");
        arrembeds.push(emdSubtractCircleArrowForward);
        var emdSubtractParentheses = new ville.embed.fluent.SubtractParentheses(svgsize, null, null, "SubtractParentheses");
        arrembeds.push(emdSubtractParentheses);
        var emdSubtractSquare = new ville.embed.fluent.SubtractSquare(svgsize, null, null, "SubtractSquare");
        arrembeds.push(emdSubtractSquare);
        var emdSubtractSquareMultiple = new ville.embed.fluent.SubtractSquareMultiple(svgsize, null, null, "SubtractSquareMultiple");
        arrembeds.push(emdSubtractSquareMultiple);
        var emdSurfaceEarbuds = new ville.embed.fluent.SurfaceEarbuds(svgsize, null, null, "SurfaceEarbuds");
        arrembeds.push(emdSurfaceEarbuds);
        var emdSurfaceHub = new ville.embed.fluent.SurfaceHub(svgsize, null, null, "SurfaceHub");
        arrembeds.push(emdSurfaceHub);
        var emdSwimmingPool = new ville.embed.fluent.SwimmingPool(svgsize, null, null, "SwimmingPool");
        arrembeds.push(emdSwimmingPool);
        var emdSwipeDown = new ville.embed.fluent.SwipeDown(svgsize, null, null, "SwipeDown");
        arrembeds.push(emdSwipeDown);
        var emdSwipeRight = new ville.embed.fluent.SwipeRight(svgsize, null, null, "SwipeRight");
        arrembeds.push(emdSwipeRight);
        var emdSwipeUp = new ville.embed.fluent.SwipeUp(svgsize, null, null, "SwipeUp");
        arrembeds.push(emdSwipeUp);
        var emdSymbols = new ville.embed.fluent.Symbols(svgsize, null, null, "Symbols");
        arrembeds.push(emdSymbols);
        var emdSyncOff = new ville.embed.fluent.SyncOff(svgsize, null, null, "SyncOff");
        arrembeds.push(emdSyncOff);
        var emdSyringe = new ville.embed.fluent.Syringe(svgsize, null, null, "Syringe");
        arrembeds.push(emdSyringe);
        var emdSystem = new ville.embed.fluent.System(svgsize, null, null, "System");
        arrembeds.push(emdSystem);
        var emdTab = new ville.embed.fluent.Tab(svgsize, null, null, "Tab");
        arrembeds.push(emdTab);
        var emdTabAdd = new ville.embed.fluent.TabAdd(svgsize, null, null, "TabAdd");
        arrembeds.push(emdTabAdd);
        var emdTabArrowLeft = new ville.embed.fluent.TabArrowLeft(svgsize, null, null, "TabArrowLeft");
        arrembeds.push(emdTabArrowLeft);
        var emdTabDesktop = new ville.embed.fluent.TabDesktop(svgsize, null, null, "TabDesktop");
        arrembeds.push(emdTabDesktop);
        var emdTabDesktopArrowClockwise = new ville.embed.fluent.TabDesktopArrowClockwise(svgsize, null, null, "TabDesktopArrowClockwise");
        arrembeds.push(emdTabDesktopArrowClockwise);
        var emdTabDesktopArrowLeft = new ville.embed.fluent.TabDesktopArrowLeft(svgsize, null, null, "TabDesktopArrowLeft");
        arrembeds.push(emdTabDesktopArrowLeft);
        var emdTabDesktopBottom = new ville.embed.fluent.TabDesktopBottom(svgsize, null, null, "TabDesktopBottom");
        arrembeds.push(emdTabDesktopBottom);
        var emdTabDesktopClock = new ville.embed.fluent.TabDesktopClock(svgsize, null, null, "TabDesktopClock");
        arrembeds.push(emdTabDesktopClock);
        var emdTabDesktopCopy = new ville.embed.fluent.TabDesktopCopy(svgsize, null, null, "TabDesktopCopy");
        arrembeds.push(emdTabDesktopCopy);
        var emdTabDesktopImage = new ville.embed.fluent.TabDesktopImage(svgsize, null, null, "TabDesktopImage");
        arrembeds.push(emdTabDesktopImage);
        var emdTabDesktopLink = new ville.embed.fluent.TabDesktopLink(svgsize, null, null, "TabDesktopLink");
        arrembeds.push(emdTabDesktopLink);
        var emdTabDesktopMultiple = new ville.embed.fluent.TabDesktopMultiple(svgsize, null, null, "TabDesktopMultiple");
        arrembeds.push(emdTabDesktopMultiple);
        var emdTabDesktopMultipleAdd = new ville.embed.fluent.TabDesktopMultipleAdd(svgsize, null, null, "TabDesktopMultipleAdd");
        arrembeds.push(emdTabDesktopMultipleAdd);
        var emdTabDesktopMultipleBottom = new ville.embed.fluent.TabDesktopMultipleBottom(svgsize, null, null, "TabDesktopMultipleBottom");
        arrembeds.push(emdTabDesktopMultipleBottom);
        var emdTabDesktopMultipleSparkle = new ville.embed.fluent.TabDesktopMultipleSparkle(svgsize, null, null, "TabDesktopMultipleSparkle");
        arrembeds.push(emdTabDesktopMultipleSparkle);
        var emdTabDesktopNewPage = new ville.embed.fluent.TabDesktopNewPage(svgsize, null, null, "TabDesktopNewPage");
        arrembeds.push(emdTabDesktopNewPage);
        var emdTabDesktopSearch = new ville.embed.fluent.TabDesktopSearch(svgsize, null, null, "TabDesktopSearch");
        arrembeds.push(emdTabDesktopSearch);
        var emdTabGroup = new ville.embed.fluent.TabGroup(svgsize, null, null, "TabGroup");
        arrembeds.push(emdTabGroup);
        var emdTabInPrivate = new ville.embed.fluent.TabInPrivate(svgsize, null, null, "TabInPrivate");
        arrembeds.push(emdTabInPrivate);
        var emdTabInprivateAccount = new ville.embed.fluent.TabInprivateAccount(svgsize, null, null, "TabInprivateAccount");
        arrembeds.push(emdTabInprivateAccount);
        var emdTabProhibited = new ville.embed.fluent.TabProhibited(svgsize, null, null, "TabProhibited");
        arrembeds.push(emdTabProhibited);
        var emdTabShieldDismiss = new ville.embed.fluent.TabShieldDismiss(svgsize, null, null, "TabShieldDismiss");
        arrembeds.push(emdTabShieldDismiss);
        var emdTable = new ville.embed.fluent.Table(svgsize, null, null, "Table");
        arrembeds.push(emdTable);
        var emdTableAdd = new ville.embed.fluent.TableAdd(svgsize, null, null, "TableAdd");
        arrembeds.push(emdTableAdd);
        var emdTableArrowUp = new ville.embed.fluent.TableArrowUp(svgsize, null, null, "TableArrowUp");
        arrembeds.push(emdTableArrowUp);
        var emdTableBottomRow = new ville.embed.fluent.TableBottomRow(svgsize, null, null, "TableBottomRow");
        arrembeds.push(emdTableBottomRow);
        var emdTableCalculator = new ville.embed.fluent.TableCalculator(svgsize, null, null, "TableCalculator");
        arrembeds.push(emdTableCalculator);
        var emdTableCellEdit = new ville.embed.fluent.TableCellEdit(svgsize, null, null, "TableCellEdit");
        arrembeds.push(emdTableCellEdit);
        var emdTableCellsMerge = new ville.embed.fluent.TableCellsMerge(svgsize, null, null, "TableCellsMerge");
        arrembeds.push(emdTableCellsMerge);
        var emdTableCellsSplit = new ville.embed.fluent.TableCellsSplit(svgsize, null, null, "TableCellsSplit");
        arrembeds.push(emdTableCellsSplit);
        var emdTableChecker = new ville.embed.fluent.TableChecker(svgsize, null, null, "TableChecker");
        arrembeds.push(emdTableChecker);
        var emdTableColumnTopBottom = new ville.embed.fluent.TableColumnTopBottom(svgsize, null, null, "TableColumnTopBottom");
        arrembeds.push(emdTableColumnTopBottom);
        var emdTableCopy = new ville.embed.fluent.TableCopy(svgsize, null, null, "TableCopy");
        arrembeds.push(emdTableCopy);
        var emdTableDeleteColumn = new ville.embed.fluent.TableDeleteColumn(svgsize, null, null, "TableDeleteColumn");
        arrembeds.push(emdTableDeleteColumn);
        var emdTableDeleteRow = new ville.embed.fluent.TableDeleteRow(svgsize, null, null, "TableDeleteRow");
        arrembeds.push(emdTableDeleteRow);
        var emdTableDismiss = new ville.embed.fluent.TableDismiss(svgsize, null, null, "TableDismiss");
        arrembeds.push(emdTableDismiss);
        var emdTableEdit = new ville.embed.fluent.TableEdit(svgsize, null, null, "TableEdit");
        arrembeds.push(emdTableEdit);
        var emdTableFreezeColumn = new ville.embed.fluent.TableFreezeColumn(svgsize, null, null, "TableFreezeColumn");
        arrembeds.push(emdTableFreezeColumn);
        var emdTableFreezeColumnAndRow = new ville.embed.fluent.TableFreezeColumnAndRow(svgsize, null, null, "TableFreezeColumnAndRow");
        arrembeds.push(emdTableFreezeColumnAndRow);
        var emdTableFreezeRow = new ville.embed.fluent.TableFreezeRow(svgsize, null, null, "TableFreezeRow");
        arrembeds.push(emdTableFreezeRow);
        var emdTableImage = new ville.embed.fluent.TableImage(svgsize, null, null, "TableImage");
        arrembeds.push(emdTableImage);
        var emdTableInsertColumn = new ville.embed.fluent.TableInsertColumn(svgsize, null, null, "TableInsertColumn");
        arrembeds.push(emdTableInsertColumn);
        var emdTableInsertRow = new ville.embed.fluent.TableInsertRow(svgsize, null, null, "TableInsertRow");
        arrembeds.push(emdTableInsertRow);
        var emdTableLightning = new ville.embed.fluent.TableLightning(svgsize, null, null, "TableLightning");
        arrembeds.push(emdTableLightning);
        var emdTableLink = new ville.embed.fluent.TableLink(svgsize, null, null, "TableLink");
        arrembeds.push(emdTableLink);
        var emdTableLock = new ville.embed.fluent.TableLock(svgsize, null, null, "TableLock");
        arrembeds.push(emdTableLock);
        var emdTableMoveAbove = new ville.embed.fluent.TableMoveAbove(svgsize, null, null, "TableMoveAbove");
        arrembeds.push(emdTableMoveAbove);
        var emdTableMoveBelow = new ville.embed.fluent.TableMoveBelow(svgsize, null, null, "TableMoveBelow");
        arrembeds.push(emdTableMoveBelow);
        var emdTableMoveLeft = new ville.embed.fluent.TableMoveLeft(svgsize, null, null, "TableMoveLeft");
        arrembeds.push(emdTableMoveLeft);
        var emdTableMoveRight = new ville.embed.fluent.TableMoveRight(svgsize, null, null, "TableMoveRight");
        arrembeds.push(emdTableMoveRight);
        var emdTableMultiple = new ville.embed.fluent.TableMultiple(svgsize, null, null, "TableMultiple");
        arrembeds.push(emdTableMultiple);
        var emdTableOffset = new ville.embed.fluent.TableOffset(svgsize, null, null, "TableOffset");
        arrembeds.push(emdTableOffset);
        var emdTableOffsetAdd = new ville.embed.fluent.TableOffsetAdd(svgsize, null, null, "TableOffsetAdd");
        arrembeds.push(emdTableOffsetAdd);
        var emdTableOffsetLessThanOrEqualTo = new ville.embed.fluent.TableOffsetLessThanOrEqualTo(svgsize, null, null, "TableOffsetLessThanOrEqualTo");
        arrembeds.push(emdTableOffsetLessThanOrEqualTo);
        var emdTableOffsetSettings = new ville.embed.fluent.TableOffsetSettings(svgsize, null, null, "TableOffsetSettings");
        arrembeds.push(emdTableOffsetSettings);
        var emdTableResizeColumn = new ville.embed.fluent.TableResizeColumn(svgsize, null, null, "TableResizeColumn");
        arrembeds.push(emdTableResizeColumn);
        var emdTableResizeRow = new ville.embed.fluent.TableResizeRow(svgsize, null, null, "TableResizeRow");
        arrembeds.push(emdTableResizeRow);
        var emdTableSearch = new ville.embed.fluent.TableSearch(svgsize, null, null, "TableSearch");
        arrembeds.push(emdTableSearch);
        var emdTableSettings = new ville.embed.fluent.TableSettings(svgsize, null, null, "TableSettings");
        arrembeds.push(emdTableSettings);
        var emdTableSimple = new ville.embed.fluent.TableSimple(svgsize, null, null, "TableSimple");
        arrembeds.push(emdTableSimple);
        var emdTableSimpleCheckmark = new ville.embed.fluent.TableSimpleCheckmark(svgsize, null, null, "TableSimpleCheckmark");
        arrembeds.push(emdTableSimpleCheckmark);
        var emdTableSimpleExclude = new ville.embed.fluent.TableSimpleExclude(svgsize, null, null, "TableSimpleExclude");
        arrembeds.push(emdTableSimpleExclude);
        var emdTableSimpleInclude = new ville.embed.fluent.TableSimpleInclude(svgsize, null, null, "TableSimpleInclude");
        arrembeds.push(emdTableSimpleInclude);
        var emdTableSimpleMultiple = new ville.embed.fluent.TableSimpleMultiple(svgsize, null, null, "TableSimpleMultiple");
        arrembeds.push(emdTableSimpleMultiple);
        var emdTableSparkle = new ville.embed.fluent.TableSparkle(svgsize, null, null, "TableSparkle");
        arrembeds.push(emdTableSparkle);
        var emdTableSplit = new ville.embed.fluent.TableSplit(svgsize, null, null, "TableSplit");
        arrembeds.push(emdTableSplit);
        var emdTableStackAbove = new ville.embed.fluent.TableStackAbove(svgsize, null, null, "TableStackAbove");
        arrembeds.push(emdTableStackAbove);
        var emdTableStackBelow = new ville.embed.fluent.TableStackBelow(svgsize, null, null, "TableStackBelow");
        arrembeds.push(emdTableStackBelow);
        var emdTableStackLeft = new ville.embed.fluent.TableStackLeft(svgsize, null, null, "TableStackLeft");
        arrembeds.push(emdTableStackLeft);
        var emdTableStackRight = new ville.embed.fluent.TableStackRight(svgsize, null, null, "TableStackRight");
        arrembeds.push(emdTableStackRight);
        var emdTableSwitch = new ville.embed.fluent.TableSwitch(svgsize, null, null, "TableSwitch");
        arrembeds.push(emdTableSwitch);
        var emdTablet = new ville.embed.fluent.Tablet(svgsize, null, null, "Tablet");
        arrembeds.push(emdTablet);
        var emdTabletLaptop = new ville.embed.fluent.TabletLaptop(svgsize, null, null, "TabletLaptop");
        arrembeds.push(emdTabletLaptop);
        var emdTabletSpeaker = new ville.embed.fluent.TabletSpeaker(svgsize, null, null, "TabletSpeaker");
        arrembeds.push(emdTabletSpeaker);
        var emdTabs = new ville.embed.fluent.Tabs(svgsize, null, null, "Tabs");
        arrembeds.push(emdTabs);
        var emdTag = new ville.embed.fluent.Tag(svgsize, null, null, "Tag");
        arrembeds.push(emdTag);
        var emdTagCircle = new ville.embed.fluent.TagCircle(svgsize, null, null, "TagCircle");
        arrembeds.push(emdTagCircle);
        var emdTagDismiss = new ville.embed.fluent.TagDismiss(svgsize, null, null, "TagDismiss");
        arrembeds.push(emdTagDismiss);
        var emdTagError = new ville.embed.fluent.TagError(svgsize, null, null, "TagError");
        arrembeds.push(emdTagError);
        var emdTagLock = new ville.embed.fluent.TagLock(svgsize, null, null, "TagLock");
        arrembeds.push(emdTagLock);
        var emdTagMultiple = new ville.embed.fluent.TagMultiple(svgsize, null, null, "TagMultiple");
        arrembeds.push(emdTagMultiple);
        var emdTagOff = new ville.embed.fluent.TagOff(svgsize, null, null, "TagOff");
        arrembeds.push(emdTagOff);
        var emdTagQuestionMark = new ville.embed.fluent.TagQuestionMark(svgsize, null, null, "TagQuestionMark");
        arrembeds.push(emdTagQuestionMark);
        var emdTagReset = new ville.embed.fluent.TagReset(svgsize, null, null, "TagReset");
        arrembeds.push(emdTagReset);
        var emdTagSearch = new ville.embed.fluent.TagSearch(svgsize, null, null, "TagSearch");
        arrembeds.push(emdTagSearch);
        var emdTapDouble = new ville.embed.fluent.TapDouble(svgsize, null, null, "TapDouble");
        arrembeds.push(emdTapDouble);
        var emdTapSingle = new ville.embed.fluent.TapSingle(svgsize, null, null, "TapSingle");
        arrembeds.push(emdTapSingle);
        var emdTarget = new ville.embed.fluent.Target(svgsize, null, null, "Target");
        arrembeds.push(emdTarget);
        var emdTargetAdd = new ville.embed.fluent.TargetAdd(svgsize, null, null, "TargetAdd");
        arrembeds.push(emdTargetAdd);
        var emdTargetArrow = new ville.embed.fluent.TargetArrow(svgsize, null, null, "TargetArrow");
        arrembeds.push(emdTargetArrow);
        var emdTargetDismiss = new ville.embed.fluent.TargetDismiss(svgsize, null, null, "TargetDismiss");
        arrembeds.push(emdTargetDismiss);
        var emdTargetEdit = new ville.embed.fluent.TargetEdit(svgsize, null, null, "TargetEdit");
        arrembeds.push(emdTargetEdit);
        var emdTaskListAdd = new ville.embed.fluent.TaskListAdd(svgsize, null, null, "TaskListAdd");
        arrembeds.push(emdTaskListAdd);
        var emdTaskListLtr = new ville.embed.fluent.TaskListLtr(svgsize, null, null, "TaskListLtr");
        arrembeds.push(emdTaskListLtr);
        var emdTaskListRtl = new ville.embed.fluent.TaskListRtl(svgsize, null, null, "TaskListRtl");
        arrembeds.push(emdTaskListRtl);
        var emdTaskListSquareAdd = new ville.embed.fluent.TaskListSquareAdd(svgsize, null, null, "TaskListSquareAdd");
        arrembeds.push(emdTaskListSquareAdd);
        var emdTaskListSquareDatabase = new ville.embed.fluent.TaskListSquareDatabase(svgsize, null, null, "TaskListSquareDatabase");
        arrembeds.push(emdTaskListSquareDatabase);
        var emdTaskListSquareLtr = new ville.embed.fluent.TaskListSquareLtr(svgsize, null, null, "TaskListSquareLtr");
        arrembeds.push(emdTaskListSquareLtr);
        var emdTaskListSquarePerson = new ville.embed.fluent.TaskListSquarePerson(svgsize, null, null, "TaskListSquarePerson");
        arrembeds.push(emdTaskListSquarePerson);
        var emdTaskListSquareRtl = new ville.embed.fluent.TaskListSquareRtl(svgsize, null, null, "TaskListSquareRtl");
        arrembeds.push(emdTaskListSquareRtl);
        var emdTaskListSquareSettings = new ville.embed.fluent.TaskListSquareSettings(svgsize, null, null, "TaskListSquareSettings");
        arrembeds.push(emdTaskListSquareSettings);
        var emdTasksApp = new ville.embed.fluent.TasksApp(svgsize, null, null, "TasksApp");
        arrembeds.push(emdTasksApp);
        var emdTeardropBottomRight = new ville.embed.fluent.TeardropBottomRight(svgsize, null, null, "TeardropBottomRight");
        arrembeds.push(emdTeardropBottomRight);
        var emdTeddy = new ville.embed.fluent.Teddy(svgsize, null, null, "Teddy");
        arrembeds.push(emdTeddy);
        var emdTemperature = new ville.embed.fluent.Temperature(svgsize, null, null, "Temperature");
        arrembeds.push(emdTemperature);
        var emdTent = new ville.embed.fluent.Tent(svgsize, null, null, "Tent");
        arrembeds.push(emdTent);
        var emdTetrisApp = new ville.embed.fluent.TetrisApp(svgsize, null, null, "TetrisApp");
        arrembeds.push(emdTetrisApp);
        var emdTextAdd = new ville.embed.fluent.TextAdd(svgsize, null, null, "TextAdd");
        arrembeds.push(emdTextAdd);
        var emdTextAddSpaceAfter = new ville.embed.fluent.TextAddSpaceAfter(svgsize, null, null, "TextAddSpaceAfter");
        arrembeds.push(emdTextAddSpaceAfter);
        var emdTextAddSpaceBefore = new ville.embed.fluent.TextAddSpaceBefore(svgsize, null, null, "TextAddSpaceBefore");
        arrembeds.push(emdTextAddSpaceBefore);
        var emdTextAddT = new ville.embed.fluent.TextAddT(svgsize, null, null, "TextAddT");
        arrembeds.push(emdTextAddT);
        var emdTextAlignCenter = new ville.embed.fluent.TextAlignCenter(svgsize, null, null, "TextAlignCenter");
        arrembeds.push(emdTextAlignCenter);
        var emdTextAlignCenterRotate270 = new ville.embed.fluent.TextAlignCenterRotate270(svgsize, null, null, "TextAlignCenterRotate270");
        arrembeds.push(emdTextAlignCenterRotate270);
        var emdTextAlignCenterRotate90 = new ville.embed.fluent.TextAlignCenterRotate90(svgsize, null, null, "TextAlignCenterRotate90");
        arrembeds.push(emdTextAlignCenterRotate90);
        var emdTextAlignDistributed = new ville.embed.fluent.TextAlignDistributed(svgsize, null, null, "TextAlignDistributed");
        arrembeds.push(emdTextAlignDistributed);
        var emdTextAlignDistributedEvenly = new ville.embed.fluent.TextAlignDistributedEvenly(svgsize, null, null, "TextAlignDistributedEvenly");
        arrembeds.push(emdTextAlignDistributedEvenly);
        var emdTextAlignDistributedVertical = new ville.embed.fluent.TextAlignDistributedVertical(svgsize, null, null, "TextAlignDistributedVertical");
        arrembeds.push(emdTextAlignDistributedVertical);
        var emdTextAlignJustify = new ville.embed.fluent.TextAlignJustify(svgsize, null, null, "TextAlignJustify");
        arrembeds.push(emdTextAlignJustify);
        var emdTextAlignJustifyLow = new ville.embed.fluent.TextAlignJustifyLow(svgsize, null, null, "TextAlignJustifyLow");
        arrembeds.push(emdTextAlignJustifyLow);
        var emdTextAlignJustifyLow90 = new ville.embed.fluent.TextAlignJustifyLow90(svgsize, null, null, "TextAlignJustifyLow90");
        arrembeds.push(emdTextAlignJustifyLow90);
        var emdTextAlignJustifyLowRotate270 = new ville.embed.fluent.TextAlignJustifyLowRotate270(svgsize, null, null, "TextAlignJustifyLowRotate270");
        arrembeds.push(emdTextAlignJustifyLowRotate270);
        var emdTextAlignJustifyLowRotate90 = new ville.embed.fluent.TextAlignJustifyLowRotate90(svgsize, null, null, "TextAlignJustifyLowRotate90");
        arrembeds.push(emdTextAlignJustifyLowRotate90);
        var emdTextAlignJustifyRotate270 = new ville.embed.fluent.TextAlignJustifyRotate270(svgsize, null, null, "TextAlignJustifyRotate270");
        arrembeds.push(emdTextAlignJustifyRotate270);
        var emdTextAlignJustifyRotate90 = new ville.embed.fluent.TextAlignJustifyRotate90(svgsize, null, null, "TextAlignJustifyRotate90");
        arrembeds.push(emdTextAlignJustifyRotate90);
        var emdTextAlignLeft = new ville.embed.fluent.TextAlignLeft(svgsize, null, null, "TextAlignLeft");
        arrembeds.push(emdTextAlignLeft);
        var emdTextAlignLeftRotate270 = new ville.embed.fluent.TextAlignLeftRotate270(svgsize, null, null, "TextAlignLeftRotate270");
        arrembeds.push(emdTextAlignLeftRotate270);
        var emdTextAlignLeftRotate90 = new ville.embed.fluent.TextAlignLeftRotate90(svgsize, null, null, "TextAlignLeftRotate90");
        arrembeds.push(emdTextAlignLeftRotate90);
        var emdTextAlignRight = new ville.embed.fluent.TextAlignRight(svgsize, null, null, "TextAlignRight");
        arrembeds.push(emdTextAlignRight);
        var emdTextAlignRightRotate270 = new ville.embed.fluent.TextAlignRightRotate270(svgsize, null, null, "TextAlignRightRotate270");
        arrembeds.push(emdTextAlignRightRotate270);
        var emdTextAlignRightRotate90 = new ville.embed.fluent.TextAlignRightRotate90(svgsize, null, null, "TextAlignRightRotate90");
        arrembeds.push(emdTextAlignRightRotate90);
        var emdTextArrowDownRightColumn = new ville.embed.fluent.TextArrowDownRightColumn(svgsize, null, null, "TextArrowDownRightColumn");
        arrembeds.push(emdTextArrowDownRightColumn);
        var emdTextAsterisk = new ville.embed.fluent.TextAsterisk(svgsize, null, null, "TextAsterisk");
        arrembeds.push(emdTextAsterisk);
        var emdTextBaseline = new ville.embed.fluent.TextBaseline(svgsize, null, null, "TextBaseline");
        arrembeds.push(emdTextBaseline);
        var emdTextBold = new ville.embed.fluent.TextBold(svgsize, null, null, "TextBold");
        arrembeds.push(emdTextBold);
        var emdTextBoxSettings = new ville.embed.fluent.TextBoxSettings(svgsize, null, null, "TextBoxSettings");
        arrembeds.push(emdTextBoxSettings);
        var emdTextBulletList = new ville.embed.fluent.TextBulletList(svgsize, null, null, "TextBulletList");
        arrembeds.push(emdTextBulletList);
        var emdTextBulletList90 = new ville.embed.fluent.TextBulletList90(svgsize, null, null, "TextBulletList90");
        arrembeds.push(emdTextBulletList90);
        var emdTextBulletListAdd = new ville.embed.fluent.TextBulletListAdd(svgsize, null, null, "TextBulletListAdd");
        arrembeds.push(emdTextBulletListAdd);
        var emdTextBulletListCheckmark = new ville.embed.fluent.TextBulletListCheckmark(svgsize, null, null, "TextBulletListCheckmark");
        arrembeds.push(emdTextBulletListCheckmark);
        var emdTextBulletListDismiss = new ville.embed.fluent.TextBulletListDismiss(svgsize, null, null, "TextBulletListDismiss");
        arrembeds.push(emdTextBulletListDismiss);
        var emdTextBulletListLtr = new ville.embed.fluent.TextBulletListLtr(svgsize, null, null, "TextBulletListLtr");
        arrembeds.push(emdTextBulletListLtr);
        var emdTextBulletListLtr90 = new ville.embed.fluent.TextBulletListLtr90(svgsize, null, null, "TextBulletListLtr90");
        arrembeds.push(emdTextBulletListLtr90);
        var emdTextBulletListRtl = new ville.embed.fluent.TextBulletListRtl(svgsize, null, null, "TextBulletListRtl");
        arrembeds.push(emdTextBulletListRtl);
        var emdTextBulletListRtl90 = new ville.embed.fluent.TextBulletListRtl90(svgsize, null, null, "TextBulletListRtl90");
        arrembeds.push(emdTextBulletListRtl90);
        var emdTextBulletListSquare = new ville.embed.fluent.TextBulletListSquare(svgsize, null, null, "TextBulletListSquare");
        arrembeds.push(emdTextBulletListSquare);
        var emdTextBulletListSquareClock = new ville.embed.fluent.TextBulletListSquareClock(svgsize, null, null, "TextBulletListSquareClock");
        arrembeds.push(emdTextBulletListSquareClock);
        var emdTextBulletListSquareEdit = new ville.embed.fluent.TextBulletListSquareEdit(svgsize, null, null, "TextBulletListSquareEdit");
        arrembeds.push(emdTextBulletListSquareEdit);
        var emdTextBulletListSquarePerson = new ville.embed.fluent.TextBulletListSquarePerson(svgsize, null, null, "TextBulletListSquarePerson");
        arrembeds.push(emdTextBulletListSquarePerson);
        var emdTextBulletListSquareSearch = new ville.embed.fluent.TextBulletListSquareSearch(svgsize, null, null, "TextBulletListSquareSearch");
        arrembeds.push(emdTextBulletListSquareSearch);
        var emdTextBulletListSquareSettings = new ville.embed.fluent.TextBulletListSquareSettings(svgsize, null, null, "TextBulletListSquareSettings");
        arrembeds.push(emdTextBulletListSquareSettings);
        var emdTextBulletListSquareShield = new ville.embed.fluent.TextBulletListSquareShield(svgsize, null, null, "TextBulletListSquareShield");
        arrembeds.push(emdTextBulletListSquareShield);
        var emdTextBulletListSquareSparkle = new ville.embed.fluent.TextBulletListSquareSparkle(svgsize, null, null, "TextBulletListSquareSparkle");
        arrembeds.push(emdTextBulletListSquareSparkle);
        var emdTextBulletListSquareToolbox = new ville.embed.fluent.TextBulletListSquareToolbox(svgsize, null, null, "TextBulletListSquareToolbox");
        arrembeds.push(emdTextBulletListSquareToolbox);
        var emdTextBulletListSquareWarning = new ville.embed.fluent.TextBulletListSquareWarning(svgsize, null, null, "TextBulletListSquareWarning");
        arrembeds.push(emdTextBulletListSquareWarning);
        var emdTextBulletListTree = new ville.embed.fluent.TextBulletListTree(svgsize, null, null, "TextBulletListTree");
        arrembeds.push(emdTextBulletListTree);
        var emdTextCaseLowercase = new ville.embed.fluent.TextCaseLowercase(svgsize, null, null, "TextCaseLowercase");
        arrembeds.push(emdTextCaseLowercase);
        var emdTextCaseTitle = new ville.embed.fluent.TextCaseTitle(svgsize, null, null, "TextCaseTitle");
        arrembeds.push(emdTextCaseTitle);
        var emdTextCaseUppercase = new ville.embed.fluent.TextCaseUppercase(svgsize, null, null, "TextCaseUppercase");
        arrembeds.push(emdTextCaseUppercase);
        var emdTextChangeCase = new ville.embed.fluent.TextChangeCase(svgsize, null, null, "TextChangeCase");
        arrembeds.push(emdTextChangeCase);
        var emdTextClearFormatting = new ville.embed.fluent.TextClearFormatting(svgsize, null, null, "TextClearFormatting");
        arrembeds.push(emdTextClearFormatting);
        var emdTextCollapse = new ville.embed.fluent.TextCollapse(svgsize, null, null, "TextCollapse");
        arrembeds.push(emdTextCollapse);
        var emdTextColor = new ville.embed.fluent.TextColor(svgsize, null, null, "TextColor");
        arrembeds.push(emdTextColor);
        var emdTextColumnOne = new ville.embed.fluent.TextColumnOne(svgsize, null, null, "TextColumnOne");
        arrembeds.push(emdTextColumnOne);
        var emdTextColumnOneNarrow = new ville.embed.fluent.TextColumnOneNarrow(svgsize, null, null, "TextColumnOneNarrow");
        arrembeds.push(emdTextColumnOneNarrow);
        var emdTextColumnOneSemiNarrow = new ville.embed.fluent.TextColumnOneSemiNarrow(svgsize, null, null, "TextColumnOneSemiNarrow");
        arrembeds.push(emdTextColumnOneSemiNarrow);
        var emdTextColumnOneWide = new ville.embed.fluent.TextColumnOneWide(svgsize, null, null, "TextColumnOneWide");
        arrembeds.push(emdTextColumnOneWide);
        var emdTextColumnOneWideLightning = new ville.embed.fluent.TextColumnOneWideLightning(svgsize, null, null, "TextColumnOneWideLightning");
        arrembeds.push(emdTextColumnOneWideLightning);
        var emdTextColumnThree = new ville.embed.fluent.TextColumnThree(svgsize, null, null, "TextColumnThree");
        arrembeds.push(emdTextColumnThree);
        var emdTextColumnTwo = new ville.embed.fluent.TextColumnTwo(svgsize, null, null, "TextColumnTwo");
        arrembeds.push(emdTextColumnTwo);
        var emdTextColumnTwoLeft = new ville.embed.fluent.TextColumnTwoLeft(svgsize, null, null, "TextColumnTwoLeft");
        arrembeds.push(emdTextColumnTwoLeft);
        var emdTextColumnTwoRight = new ville.embed.fluent.TextColumnTwoRight(svgsize, null, null, "TextColumnTwoRight");
        arrembeds.push(emdTextColumnTwoRight);
        var emdTextColumnWide = new ville.embed.fluent.TextColumnWide(svgsize, null, null, "TextColumnWide");
        arrembeds.push(emdTextColumnWide);
        var emdTextContinuous = new ville.embed.fluent.TextContinuous(svgsize, null, null, "TextContinuous");
        arrembeds.push(emdTextContinuous);
        var emdTextDensity = new ville.embed.fluent.TextDensity(svgsize, null, null, "TextDensity");
        arrembeds.push(emdTextDensity);
        var emdTextDescription = new ville.embed.fluent.TextDescription(svgsize, null, null, "TextDescription");
        arrembeds.push(emdTextDescription);
        var emdTextDescriptionLtr = new ville.embed.fluent.TextDescriptionLtr(svgsize, null, null, "TextDescriptionLtr");
        arrembeds.push(emdTextDescriptionLtr);
        var emdTextDescriptionRtl = new ville.embed.fluent.TextDescriptionRtl(svgsize, null, null, "TextDescriptionRtl");
        arrembeds.push(emdTextDescriptionRtl);
        var emdTextDirectionHorizontalLeft = new ville.embed.fluent.TextDirectionHorizontalLeft(svgsize, null, null, "TextDirectionHorizontalLeft");
        arrembeds.push(emdTextDirectionHorizontalLeft);
        var emdTextDirectionHorizontalLtr = new ville.embed.fluent.TextDirectionHorizontalLtr(svgsize, null, null, "TextDirectionHorizontalLtr");
        arrembeds.push(emdTextDirectionHorizontalLtr);
        var emdTextDirectionHorizontalRight = new ville.embed.fluent.TextDirectionHorizontalRight(svgsize, null, null, "TextDirectionHorizontalRight");
        arrembeds.push(emdTextDirectionHorizontalRight);
        var emdTextDirectionHorizontalRtl = new ville.embed.fluent.TextDirectionHorizontalRtl(svgsize, null, null, "TextDirectionHorizontalRtl");
        arrembeds.push(emdTextDirectionHorizontalRtl);
        var emdTextDirectionRotate270Right = new ville.embed.fluent.TextDirectionRotate270Right(svgsize, null, null, "TextDirectionRotate270Right");
        arrembeds.push(emdTextDirectionRotate270Right);
        var emdTextDirectionRotate315Right = new ville.embed.fluent.TextDirectionRotate315Right(svgsize, null, null, "TextDirectionRotate315Right");
        arrembeds.push(emdTextDirectionRotate315Right);
        var emdTextDirectionRotate45Right = new ville.embed.fluent.TextDirectionRotate45Right(svgsize, null, null, "TextDirectionRotate45Right");
        arrembeds.push(emdTextDirectionRotate45Right);
        var emdTextDirectionRotate90Left = new ville.embed.fluent.TextDirectionRotate90Left(svgsize, null, null, "TextDirectionRotate90Left");
        arrembeds.push(emdTextDirectionRotate90Left);
        var emdTextDirectionRotate90Ltr = new ville.embed.fluent.TextDirectionRotate90Ltr(svgsize, null, null, "TextDirectionRotate90Ltr");
        arrembeds.push(emdTextDirectionRotate90Ltr);
        var emdTextDirectionRotate90Right = new ville.embed.fluent.TextDirectionRotate90Right(svgsize, null, null, "TextDirectionRotate90Right");
        arrembeds.push(emdTextDirectionRotate90Right);
        var emdTextDirectionRotate90Rtl = new ville.embed.fluent.TextDirectionRotate90Rtl(svgsize, null, null, "TextDirectionRotate90Rtl");
        arrembeds.push(emdTextDirectionRotate90Rtl);
        var emdTextDirectionVertical = new ville.embed.fluent.TextDirectionVertical(svgsize, null, null, "TextDirectionVertical");
        arrembeds.push(emdTextDirectionVertical);
        var emdTextEditStyle = new ville.embed.fluent.TextEditStyle(svgsize, null, null, "TextEditStyle");
        arrembeds.push(emdTextEditStyle);
        var emdTextEffects = new ville.embed.fluent.TextEffects(svgsize, null, null, "TextEffects");
        arrembeds.push(emdTextEffects);
        var emdTextEffectsSparkle = new ville.embed.fluent.TextEffectsSparkle(svgsize, null, null, "TextEffectsSparkle");
        arrembeds.push(emdTextEffectsSparkle);
        var emdTextExpand = new ville.embed.fluent.TextExpand(svgsize, null, null, "TextExpand");
        arrembeds.push(emdTextExpand);
        var emdTextField = new ville.embed.fluent.TextField(svgsize, null, null, "TextField");
        arrembeds.push(emdTextField);
        var emdTextFirstLine = new ville.embed.fluent.TextFirstLine(svgsize, null, null, "TextFirstLine");
        arrembeds.push(emdTextFirstLine);
        var emdTextFont = new ville.embed.fluent.TextFont(svgsize, null, null, "TextFont");
        arrembeds.push(emdTextFont);
        var emdTextFontInfo = new ville.embed.fluent.TextFontInfo(svgsize, null, null, "TextFontInfo");
        arrembeds.push(emdTextFontInfo);
        var emdTextFontSize = new ville.embed.fluent.TextFontSize(svgsize, null, null, "TextFontSize");
        arrembeds.push(emdTextFontSize);
        var emdTextFootnote = new ville.embed.fluent.TextFootnote(svgsize, null, null, "TextFootnote");
        arrembeds.push(emdTextFootnote);
        var emdTextGrammarArrowLeft = new ville.embed.fluent.TextGrammarArrowLeft(svgsize, null, null, "TextGrammarArrowLeft");
        arrembeds.push(emdTextGrammarArrowLeft);
        var emdTextGrammarArrowRight = new ville.embed.fluent.TextGrammarArrowRight(svgsize, null, null, "TextGrammarArrowRight");
        arrembeds.push(emdTextGrammarArrowRight);
        var emdTextGrammarCheckmark = new ville.embed.fluent.TextGrammarCheckmark(svgsize, null, null, "TextGrammarCheckmark");
        arrembeds.push(emdTextGrammarCheckmark);
        var emdTextGrammarDismiss = new ville.embed.fluent.TextGrammarDismiss(svgsize, null, null, "TextGrammarDismiss");
        arrembeds.push(emdTextGrammarDismiss);
        var emdTextGrammarError = new ville.embed.fluent.TextGrammarError(svgsize, null, null, "TextGrammarError");
        arrembeds.push(emdTextGrammarError);
        var emdTextGrammarLightning = new ville.embed.fluent.TextGrammarLightning(svgsize, null, null, "TextGrammarLightning");
        arrembeds.push(emdTextGrammarLightning);
        var emdTextGrammarSettings = new ville.embed.fluent.TextGrammarSettings(svgsize, null, null, "TextGrammarSettings");
        arrembeds.push(emdTextGrammarSettings);
        var emdTextGrammarWand = new ville.embed.fluent.TextGrammarWand(svgsize, null, null, "TextGrammarWand");
        arrembeds.push(emdTextGrammarWand);
        var emdTextHanging = new ville.embed.fluent.TextHanging(svgsize, null, null, "TextHanging");
        arrembeds.push(emdTextHanging);
        var emdTextHeader1 = new ville.embed.fluent.TextHeader1(svgsize, null, null, "TextHeader1");
        arrembeds.push(emdTextHeader1);
        var emdTextHeader1Lines = new ville.embed.fluent.TextHeader1Lines(svgsize, null, null, "TextHeader1Lines");
        arrembeds.push(emdTextHeader1Lines);
        var emdTextHeader1LinesCaret = new ville.embed.fluent.TextHeader1LinesCaret(svgsize, null, null, "TextHeader1LinesCaret");
        arrembeds.push(emdTextHeader1LinesCaret);
        var emdTextHeader2 = new ville.embed.fluent.TextHeader2(svgsize, null, null, "TextHeader2");
        arrembeds.push(emdTextHeader2);
        var emdTextHeader2Lines = new ville.embed.fluent.TextHeader2Lines(svgsize, null, null, "TextHeader2Lines");
        arrembeds.push(emdTextHeader2Lines);
        var emdTextHeader2LinesCaret = new ville.embed.fluent.TextHeader2LinesCaret(svgsize, null, null, "TextHeader2LinesCaret");
        arrembeds.push(emdTextHeader2LinesCaret);
        var emdTextHeader3 = new ville.embed.fluent.TextHeader3(svgsize, null, null, "TextHeader3");
        arrembeds.push(emdTextHeader3);
        var emdTextHeader3Lines = new ville.embed.fluent.TextHeader3Lines(svgsize, null, null, "TextHeader3Lines");
        arrembeds.push(emdTextHeader3Lines);
        var emdTextHeader3LinesCaret = new ville.embed.fluent.TextHeader3LinesCaret(svgsize, null, null, "TextHeader3LinesCaret");
        arrembeds.push(emdTextHeader3LinesCaret);
        var emdTextIndentDecrease = new ville.embed.fluent.TextIndentDecrease(svgsize, null, null, "TextIndentDecrease");
        arrembeds.push(emdTextIndentDecrease);
        var emdTextIndentDecreaseLtr = new ville.embed.fluent.TextIndentDecreaseLtr(svgsize, null, null, "TextIndentDecreaseLtr");
        arrembeds.push(emdTextIndentDecreaseLtr);
        var emdTextIndentDecreaseLtr90 = new ville.embed.fluent.TextIndentDecreaseLtr90(svgsize, null, null, "TextIndentDecreaseLtr90");
        arrembeds.push(emdTextIndentDecreaseLtr90);
        var emdTextIndentDecreaseLtrRotate270 = new ville.embed.fluent.TextIndentDecreaseLtrRotate270(svgsize, null, null, "TextIndentDecreaseLtrRotate270");
        arrembeds.push(emdTextIndentDecreaseLtrRotate270);
        var emdTextIndentDecreaseRotate270 = new ville.embed.fluent.TextIndentDecreaseRotate270(svgsize, null, null, "TextIndentDecreaseRotate270");
        arrembeds.push(emdTextIndentDecreaseRotate270);
        var emdTextIndentDecreaseRotate90 = new ville.embed.fluent.TextIndentDecreaseRotate90(svgsize, null, null, "TextIndentDecreaseRotate90");
        arrembeds.push(emdTextIndentDecreaseRotate90);
        var emdTextIndentDecreaseRtl = new ville.embed.fluent.TextIndentDecreaseRtl(svgsize, null, null, "TextIndentDecreaseRtl");
        arrembeds.push(emdTextIndentDecreaseRtl);
        var emdTextIndentDecreaseRtl90 = new ville.embed.fluent.TextIndentDecreaseRtl90(svgsize, null, null, "TextIndentDecreaseRtl90");
        arrembeds.push(emdTextIndentDecreaseRtl90);
        var emdTextIndentDecreaseRtlRotate270 = new ville.embed.fluent.TextIndentDecreaseRtlRotate270(svgsize, null, null, "TextIndentDecreaseRtlRotate270");
        arrembeds.push(emdTextIndentDecreaseRtlRotate270);
        var emdTextIndentIncrease = new ville.embed.fluent.TextIndentIncrease(svgsize, null, null, "TextIndentIncrease");
        arrembeds.push(emdTextIndentIncrease);
        var emdTextIndentIncreaseLtr = new ville.embed.fluent.TextIndentIncreaseLtr(svgsize, null, null, "TextIndentIncreaseLtr");
        arrembeds.push(emdTextIndentIncreaseLtr);
        var emdTextIndentIncreaseLtr90 = new ville.embed.fluent.TextIndentIncreaseLtr90(svgsize, null, null, "TextIndentIncreaseLtr90");
        arrembeds.push(emdTextIndentIncreaseLtr90);
        var emdTextIndentIncreaseLtrRotate270 = new ville.embed.fluent.TextIndentIncreaseLtrRotate270(svgsize, null, null, "TextIndentIncreaseLtrRotate270");
        arrembeds.push(emdTextIndentIncreaseLtrRotate270);
        var emdTextIndentIncreaseRotate270 = new ville.embed.fluent.TextIndentIncreaseRotate270(svgsize, null, null, "TextIndentIncreaseRotate270");
        arrembeds.push(emdTextIndentIncreaseRotate270);
        var emdTextIndentIncreaseRotate90 = new ville.embed.fluent.TextIndentIncreaseRotate90(svgsize, null, null, "TextIndentIncreaseRotate90");
        arrembeds.push(emdTextIndentIncreaseRotate90);
        var emdTextIndentIncreaseRtl = new ville.embed.fluent.TextIndentIncreaseRtl(svgsize, null, null, "TextIndentIncreaseRtl");
        arrembeds.push(emdTextIndentIncreaseRtl);
        var emdTextIndentIncreaseRtl90 = new ville.embed.fluent.TextIndentIncreaseRtl90(svgsize, null, null, "TextIndentIncreaseRtl90");
        arrembeds.push(emdTextIndentIncreaseRtl90);
        var emdTextIndentIncreaseRtlRotate270 = new ville.embed.fluent.TextIndentIncreaseRtlRotate270(svgsize, null, null, "TextIndentIncreaseRtlRotate270");
        arrembeds.push(emdTextIndentIncreaseRtlRotate270);
        var emdTextItalic = new ville.embed.fluent.TextItalic(svgsize, null, null, "TextItalic");
        arrembeds.push(emdTextItalic);
        var emdTextLineSpacing = new ville.embed.fluent.TextLineSpacing(svgsize, null, null, "TextLineSpacing");
        arrembeds.push(emdTextLineSpacing);
        var emdTextMore = new ville.embed.fluent.TextMore(svgsize, null, null, "TextMore");
        arrembeds.push(emdTextMore);
        var emdTextNumberFormat = new ville.embed.fluent.TextNumberFormat(svgsize, null, null, "TextNumberFormat");
        arrembeds.push(emdTextNumberFormat);
        var emdTextNumberListLtr = new ville.embed.fluent.TextNumberListLtr(svgsize, null, null, "TextNumberListLtr");
        arrembeds.push(emdTextNumberListLtr);
        var emdTextNumberListLtr90 = new ville.embed.fluent.TextNumberListLtr90(svgsize, null, null, "TextNumberListLtr90");
        arrembeds.push(emdTextNumberListLtr90);
        var emdTextNumberListLtrRotate270 = new ville.embed.fluent.TextNumberListLtrRotate270(svgsize, null, null, "TextNumberListLtrRotate270");
        arrembeds.push(emdTextNumberListLtrRotate270);
        var emdTextNumberListRotate270 = new ville.embed.fluent.TextNumberListRotate270(svgsize, null, null, "TextNumberListRotate270");
        arrembeds.push(emdTextNumberListRotate270);
        var emdTextNumberListRotate90 = new ville.embed.fluent.TextNumberListRotate90(svgsize, null, null, "TextNumberListRotate90");
        arrembeds.push(emdTextNumberListRotate90);
        var emdTextNumberListRtl = new ville.embed.fluent.TextNumberListRtl(svgsize, null, null, "TextNumberListRtl");
        arrembeds.push(emdTextNumberListRtl);
        var emdTextNumberListRtl90 = new ville.embed.fluent.TextNumberListRtl90(svgsize, null, null, "TextNumberListRtl90");
        arrembeds.push(emdTextNumberListRtl90);
        var emdTextNumberListRtlRotate270 = new ville.embed.fluent.TextNumberListRtlRotate270(svgsize, null, null, "TextNumberListRtlRotate270");
        arrembeds.push(emdTextNumberListRtlRotate270);
        var emdTextParagraph = new ville.embed.fluent.TextParagraph(svgsize, null, null, "TextParagraph");
        arrembeds.push(emdTextParagraph);
        var emdTextParagraphDirection = new ville.embed.fluent.TextParagraphDirection(svgsize, null, null, "TextParagraphDirection");
        arrembeds.push(emdTextParagraphDirection);
        var emdTextParagraphDirectionLeft = new ville.embed.fluent.TextParagraphDirectionLeft(svgsize, null, null, "TextParagraphDirectionLeft");
        arrembeds.push(emdTextParagraphDirectionLeft);
        var emdTextParagraphDirectionRight = new ville.embed.fluent.TextParagraphDirectionRight(svgsize, null, null, "TextParagraphDirectionRight");
        arrembeds.push(emdTextParagraphDirectionRight);
        var emdTextPeriodAsterisk = new ville.embed.fluent.TextPeriodAsterisk(svgsize, null, null, "TextPeriodAsterisk");
        arrembeds.push(emdTextPeriodAsterisk);
        var emdTextPositionBehind = new ville.embed.fluent.TextPositionBehind(svgsize, null, null, "TextPositionBehind");
        arrembeds.push(emdTextPositionBehind);
        var emdTextPositionFront = new ville.embed.fluent.TextPositionFront(svgsize, null, null, "TextPositionFront");
        arrembeds.push(emdTextPositionFront);
        var emdTextPositionLine = new ville.embed.fluent.TextPositionLine(svgsize, null, null, "TextPositionLine");
        arrembeds.push(emdTextPositionLine);
        var emdTextPositionSquare = new ville.embed.fluent.TextPositionSquare(svgsize, null, null, "TextPositionSquare");
        arrembeds.push(emdTextPositionSquare);
        var emdTextPositionSquareLeft = new ville.embed.fluent.TextPositionSquareLeft(svgsize, null, null, "TextPositionSquareLeft");
        arrembeds.push(emdTextPositionSquareLeft);
        var emdTextPositionSquareRight = new ville.embed.fluent.TextPositionSquareRight(svgsize, null, null, "TextPositionSquareRight");
        arrembeds.push(emdTextPositionSquareRight);
        var emdTextPositionThrough = new ville.embed.fluent.TextPositionThrough(svgsize, null, null, "TextPositionThrough");
        arrembeds.push(emdTextPositionThrough);
        var emdTextPositionTight = new ville.embed.fluent.TextPositionTight(svgsize, null, null, "TextPositionTight");
        arrembeds.push(emdTextPositionTight);
        var emdTextPositionTopBottom = new ville.embed.fluent.TextPositionTopBottom(svgsize, null, null, "TextPositionTopBottom");
        arrembeds.push(emdTextPositionTopBottom);
        var emdTextProofingTools = new ville.embed.fluent.TextProofingTools(svgsize, null, null, "TextProofingTools");
        arrembeds.push(emdTextProofingTools);
        var emdTextQuote = new ville.embed.fluent.TextQuote(svgsize, null, null, "TextQuote");
        arrembeds.push(emdTextQuote);
        var emdTextSortAscending = new ville.embed.fluent.TextSortAscending(svgsize, null, null, "TextSortAscending");
        arrembeds.push(emdTextSortAscending);
        var emdTextSortDescending = new ville.embed.fluent.TextSortDescending(svgsize, null, null, "TextSortDescending");
        arrembeds.push(emdTextSortDescending);
        var emdTextStrikethrough = new ville.embed.fluent.TextStrikethrough(svgsize, null, null, "TextStrikethrough");
        arrembeds.push(emdTextStrikethrough);
        var emdTextSubscript = new ville.embed.fluent.TextSubscript(svgsize, null, null, "TextSubscript");
        arrembeds.push(emdTextSubscript);
        var emdTextSuperscript = new ville.embed.fluent.TextSuperscript(svgsize, null, null, "TextSuperscript");
        arrembeds.push(emdTextSuperscript);
        var emdTextT = new ville.embed.fluent.TextT(svgsize, null, null, "TextT");
        arrembeds.push(emdTextT);
        var emdTextUnderline = new ville.embed.fluent.TextUnderline(svgsize, null, null, "TextUnderline");
        arrembeds.push(emdTextUnderline);
        var emdTextUnderlineCharacterU = new ville.embed.fluent.TextUnderlineCharacterU(svgsize, null, null, "TextUnderlineCharacterU");
        arrembeds.push(emdTextUnderlineCharacterU);
        var emdTextUnderlineDouble = new ville.embed.fluent.TextUnderlineDouble(svgsize, null, null, "TextUnderlineDouble");
        arrembeds.push(emdTextUnderlineDouble);
        var emdTextWholeWord = new ville.embed.fluent.TextWholeWord(svgsize, null, null, "TextWholeWord");
        arrembeds.push(emdTextWholeWord);
        var emdTextWordCount = new ville.embed.fluent.TextWordCount(svgsize, null, null, "TextWordCount");
        arrembeds.push(emdTextWordCount);
        var emdTextWrap = new ville.embed.fluent.TextWrap(svgsize, null, null, "TextWrap");
        arrembeds.push(emdTextWrap);
        var emdTextWrapOff = new ville.embed.fluent.TextWrapOff(svgsize, null, null, "TextWrapOff");
        arrembeds.push(emdTextWrapOff);
        var emdTextbox = new ville.embed.fluent.Textbox(svgsize, null, null, "Textbox");
        arrembeds.push(emdTextbox);
        var emdTextboxAlignBottom = new ville.embed.fluent.TextboxAlignBottom(svgsize, null, null, "TextboxAlignBottom");
        arrembeds.push(emdTextboxAlignBottom);
        var emdTextboxAlignBottomCenter = new ville.embed.fluent.TextboxAlignBottomCenter(svgsize, null, null, "TextboxAlignBottomCenter");
        arrembeds.push(emdTextboxAlignBottomCenter);
        var emdTextboxAlignBottomLeft = new ville.embed.fluent.TextboxAlignBottomLeft(svgsize, null, null, "TextboxAlignBottomLeft");
        arrembeds.push(emdTextboxAlignBottomLeft);
        var emdTextboxAlignBottomRight = new ville.embed.fluent.TextboxAlignBottomRight(svgsize, null, null, "TextboxAlignBottomRight");
        arrembeds.push(emdTextboxAlignBottomRight);
        var emdTextboxAlignBottomRotate90 = new ville.embed.fluent.TextboxAlignBottomRotate90(svgsize, null, null, "TextboxAlignBottomRotate90");
        arrembeds.push(emdTextboxAlignBottomRotate90);
        var emdTextboxAlignCenter = new ville.embed.fluent.TextboxAlignCenter(svgsize, null, null, "TextboxAlignCenter");
        arrembeds.push(emdTextboxAlignCenter);
        var emdTextboxAlignMiddle = new ville.embed.fluent.TextboxAlignMiddle(svgsize, null, null, "TextboxAlignMiddle");
        arrembeds.push(emdTextboxAlignMiddle);
        var emdTextboxAlignMiddleLeft = new ville.embed.fluent.TextboxAlignMiddleLeft(svgsize, null, null, "TextboxAlignMiddleLeft");
        arrembeds.push(emdTextboxAlignMiddleLeft);
        var emdTextboxAlignMiddleRight = new ville.embed.fluent.TextboxAlignMiddleRight(svgsize, null, null, "TextboxAlignMiddleRight");
        arrembeds.push(emdTextboxAlignMiddleRight);
        var emdTextboxAlignMiddleRotate90 = new ville.embed.fluent.TextboxAlignMiddleRotate90(svgsize, null, null, "TextboxAlignMiddleRotate90");
        arrembeds.push(emdTextboxAlignMiddleRotate90);
        var emdTextboxAlignTop = new ville.embed.fluent.TextboxAlignTop(svgsize, null, null, "TextboxAlignTop");
        arrembeds.push(emdTextboxAlignTop);
        var emdTextboxAlignTopCenter = new ville.embed.fluent.TextboxAlignTopCenter(svgsize, null, null, "TextboxAlignTopCenter");
        arrembeds.push(emdTextboxAlignTopCenter);
        var emdTextboxAlignTopLeft = new ville.embed.fluent.TextboxAlignTopLeft(svgsize, null, null, "TextboxAlignTopLeft");
        arrembeds.push(emdTextboxAlignTopLeft);
        var emdTextboxAlignTopRight = new ville.embed.fluent.TextboxAlignTopRight(svgsize, null, null, "TextboxAlignTopRight");
        arrembeds.push(emdTextboxAlignTopRight);
        var emdTextboxAlignTopRotate90 = new ville.embed.fluent.TextboxAlignTopRotate90(svgsize, null, null, "TextboxAlignTopRotate90");
        arrembeds.push(emdTextboxAlignTopRotate90);
        var emdTextboxMore = new ville.embed.fluent.TextboxMore(svgsize, null, null, "TextboxMore");
        arrembeds.push(emdTextboxMore);
        var emdTextboxRotate90 = new ville.embed.fluent.TextboxRotate90(svgsize, null, null, "TextboxRotate90");
        arrembeds.push(emdTextboxRotate90);
        var emdTextboxSettings = new ville.embed.fluent.TextBoxSettings(svgsize, null, null, "TextBoxSettings");
        arrembeds.push(emdTextboxSettings);
        var emdThinking = new ville.embed.fluent.Thinking(svgsize, null, null, "Thinking");
        arrembeds.push(emdThinking);
        var emdThumbDislike = new ville.embed.fluent.ThumbDislike(svgsize, null, null, "ThumbDislike");
        arrembeds.push(emdThumbDislike);
        var emdThumbLike = new ville.embed.fluent.ThumbLike(svgsize, null, null, "ThumbLike");
        arrembeds.push(emdThumbLike);
        var emdThumbLikeDislike = new ville.embed.fluent.ThumbLikeDislike(svgsize, null, null, "ThumbLikeDislike");
        arrembeds.push(emdThumbLikeDislike);
        var emdTicketDiagonal = new ville.embed.fluent.TicketDiagonal(svgsize, null, null, "TicketDiagonal");
        arrembeds.push(emdTicketDiagonal);
        var emdTicketHorizontal = new ville.embed.fluent.TicketHorizontal(svgsize, null, null, "TicketHorizontal");
        arrembeds.push(emdTicketHorizontal);
        var emdTimeAndWeather = new ville.embed.fluent.TimeAndWeather(svgsize, null, null, "TimeAndWeather");
        arrembeds.push(emdTimeAndWeather);
        var emdTimePicker = new ville.embed.fluent.TimePicker(svgsize, null, null, "TimePicker");
        arrembeds.push(emdTimePicker);
        var emdTimeline = new ville.embed.fluent.Timeline(svgsize, null, null, "Timeline");
        arrembeds.push(emdTimeline);
        var emdTimer10 = new ville.embed.fluent.Timer10(svgsize, null, null, "Timer10");
        arrembeds.push(emdTimer10);
        var emdTimer = new ville.embed.fluent.Timer(svgsize, null, null, "Timer");
        arrembeds.push(emdTimer);
        var emdTimer2 = new ville.embed.fluent.Timer2(svgsize, null, null, "Timer2");
        arrembeds.push(emdTimer2);
        var emdTimer3 = new ville.embed.fluent.Timer3(svgsize, null, null, "Timer3");
        arrembeds.push(emdTimer3);
        var emdTimerOff = new ville.embed.fluent.TimerOff(svgsize, null, null, "TimerOff");
        arrembeds.push(emdTimerOff);
        var emdToggleLeft = new ville.embed.fluent.ToggleLeft(svgsize, null, null, "ToggleLeft");
        arrembeds.push(emdToggleLeft);
        var emdToggleMultiple = new ville.embed.fluent.ToggleMultiple(svgsize, null, null, "ToggleMultiple");
        arrembeds.push(emdToggleMultiple);
        var emdToggleRight = new ville.embed.fluent.ToggleRight(svgsize, null, null, "ToggleRight");
        arrembeds.push(emdToggleRight);
        var emdToolbox = new ville.embed.fluent.Toolbox(svgsize, null, null, "Toolbox");
        arrembeds.push(emdToolbox);
        var emdTooltipQuote = new ville.embed.fluent.TooltipQuote(svgsize, null, null, "TooltipQuote");
        arrembeds.push(emdTooltipQuote);
        var emdTopSpeed = new ville.embed.fluent.TopSpeed(svgsize, null, null, "TopSpeed");
        arrembeds.push(emdTopSpeed);
        var emdTranslate = new ville.embed.fluent.Translate(svgsize, null, null, "Translate");
        arrembeds.push(emdTranslate);
        var emdTranslateAuto = new ville.embed.fluent.TranslateAuto(svgsize, null, null, "TranslateAuto");
        arrembeds.push(emdTranslateAuto);
        var emdTranslateOff = new ville.embed.fluent.TranslateOff(svgsize, null, null, "TranslateOff");
        arrembeds.push(emdTranslateOff);
        var emdTransmission = new ville.embed.fluent.Transmission(svgsize, null, null, "Transmission");
        arrembeds.push(emdTransmission);
        var emdTrayItemAdd = new ville.embed.fluent.TrayItemAdd(svgsize, null, null, "TrayItemAdd");
        arrembeds.push(emdTrayItemAdd);
        var emdTrayItemRemove = new ville.embed.fluent.TrayItemRemove(svgsize, null, null, "TrayItemRemove");
        arrembeds.push(emdTrayItemRemove);
        var emdTreeDeciduous = new ville.embed.fluent.TreeDeciduous(svgsize, null, null, "TreeDeciduous");
        arrembeds.push(emdTreeDeciduous);
        var emdTreeEvergreen = new ville.embed.fluent.TreeEvergreen(svgsize, null, null, "TreeEvergreen");
        arrembeds.push(emdTreeEvergreen);
        var emdTriangle = new ville.embed.fluent.Triangle(svgsize, null, null, "Triangle");
        arrembeds.push(emdTriangle);
        var emdTriangleDown = new ville.embed.fluent.TriangleDown(svgsize, null, null, "TriangleDown");
        arrembeds.push(emdTriangleDown);
        var emdTriangleLeft = new ville.embed.fluent.TriangleLeft(svgsize, null, null, "TriangleLeft");
        arrembeds.push(emdTriangleLeft);
        var emdTriangleRight = new ville.embed.fluent.TriangleRight(svgsize, null, null, "TriangleRight");
        arrembeds.push(emdTriangleRight);
        var emdTriangleUp = new ville.embed.fluent.TriangleUp(svgsize, null, null, "TriangleUp");
        arrembeds.push(emdTriangleUp);
        var emdTrophy = new ville.embed.fluent.Trophy(svgsize, null, null, "Trophy");
        arrembeds.push(emdTrophy);
        var emdTrophyLock = new ville.embed.fluent.TrophyLock(svgsize, null, null, "TrophyLock");
        arrembeds.push(emdTrophyLock);
        var emdTrophyOff = new ville.embed.fluent.TrophyOff(svgsize, null, null, "TrophyOff");
        arrembeds.push(emdTrophyOff);
        var emdTv = new ville.embed.fluent.Tv(svgsize, null, null, "Tv");
        arrembeds.push(emdTv);
        var emdTvArrowRight = new ville.embed.fluent.TvArrowRight(svgsize, null, null, "TvArrowRight");
        arrembeds.push(emdTvArrowRight);
        var emdTvUsb = new ville.embed.fluent.TvUsb(svgsize, null, null, "TvUsb");
        arrembeds.push(emdTvUsb);
        var emdUmbrella = new ville.embed.fluent.Umbrella(svgsize, null, null, "Umbrella");
        arrembeds.push(emdUmbrella);
        var emdUninstallApp = new ville.embed.fluent.UninstallApp(svgsize, null, null, "UninstallApp");
        arrembeds.push(emdUninstallApp);
        var emdUsbPlug = new ville.embed.fluent.UsbPlug(svgsize, null, null, "UsbPlug");
        arrembeds.push(emdUsbPlug);
        var emdUsbStick = new ville.embed.fluent.UsbStick(svgsize, null, null, "UsbStick");
        arrembeds.push(emdUsbStick);
        var emdVault = new ville.embed.fluent.Vault(svgsize, null, null, "Vault");
        arrembeds.push(emdVault);
        var emdVehicleBicycle = new ville.embed.fluent.VehicleBicycle(svgsize, null, null, "VehicleBicycle");
        arrembeds.push(emdVehicleBicycle);
        var emdVehicleBus = new ville.embed.fluent.VehicleBus(svgsize, null, null, "VehicleBus");
        arrembeds.push(emdVehicleBus);
        var emdVehicleCab = new ville.embed.fluent.VehicleCab(svgsize, null, null, "VehicleCab");
        arrembeds.push(emdVehicleCab);
        var emdVehicleCableCar = new ville.embed.fluent.VehicleCableCar(svgsize, null, null, "VehicleCableCar");
        arrembeds.push(emdVehicleCableCar);
        var emdVehicleCar = new ville.embed.fluent.VehicleCar(svgsize, null, null, "VehicleCar");
        arrembeds.push(emdVehicleCar);
        var emdVehicleCarCollision = new ville.embed.fluent.VehicleCarCollision(svgsize, null, null, "VehicleCarCollision");
        arrembeds.push(emdVehicleCarCollision);
        var emdVehicleCarParking = new ville.embed.fluent.VehicleCarParking(svgsize, null, null, "VehicleCarParking");
        arrembeds.push(emdVehicleCarParking);
        var emdVehicleCarProfile = new ville.embed.fluent.VehicleCarProfile(svgsize, null, null, "VehicleCarProfile");
        arrembeds.push(emdVehicleCarProfile);
        var emdVehicleCarProfileLtr = new ville.embed.fluent.VehicleCarProfileLtr(svgsize, null, null, "VehicleCarProfileLtr");
        arrembeds.push(emdVehicleCarProfileLtr);
        var emdVehicleCarProfileLtrClock = new ville.embed.fluent.VehicleCarProfileLtrClock(svgsize, null, null, "VehicleCarProfileLtrClock");
        arrembeds.push(emdVehicleCarProfileLtrClock);
        var emdVehicleCarProfileRtl = new ville.embed.fluent.VehicleCarProfileRtl(svgsize, null, null, "VehicleCarProfileRtl");
        arrembeds.push(emdVehicleCarProfileRtl);
        var emdVehicleShip = new ville.embed.fluent.VehicleShip(svgsize, null, null, "VehicleShip");
        arrembeds.push(emdVehicleShip);
        var emdVehicleSubway = new ville.embed.fluent.VehicleSubway(svgsize, null, null, "VehicleSubway");
        arrembeds.push(emdVehicleSubway);
        var emdVehicleSubwayClock = new ville.embed.fluent.VehicleSubwayClock(svgsize, null, null, "VehicleSubwayClock");
        arrembeds.push(emdVehicleSubwayClock);
        var emdVehicleTractor = new ville.embed.fluent.VehicleTractor(svgsize, null, null, "VehicleTractor");
        arrembeds.push(emdVehicleTractor);
        var emdVehicleTruck = new ville.embed.fluent.VehicleTruck(svgsize, null, null, "VehicleTruck");
        arrembeds.push(emdVehicleTruck);
        var emdVehicleTruckBag = new ville.embed.fluent.VehicleTruckBag(svgsize, null, null, "VehicleTruckBag");
        arrembeds.push(emdVehicleTruckBag);
        var emdVehicleTruckCube = new ville.embed.fluent.VehicleTruckCube(svgsize, null, null, "VehicleTruckCube");
        arrembeds.push(emdVehicleTruckCube);
        var emdVehicleTruckProfile = new ville.embed.fluent.VehicleTruckProfile(svgsize, null, null, "VehicleTruckProfile");
        arrembeds.push(emdVehicleTruckProfile);
        var emdVideo = new ville.embed.fluent.Video(svgsize, null, null, "Video");
        arrembeds.push(emdVideo);
        var emdVideo360 = new ville.embed.fluent.Video360(svgsize, null, null, "Video360");
        arrembeds.push(emdVideo360);
        var emdVideo360Off = new ville.embed.fluent.Video360Off(svgsize, null, null, "Video360Off");
        arrembeds.push(emdVideo360Off);
        var emdVideoAdd = new ville.embed.fluent.VideoAdd(svgsize, null, null, "VideoAdd");
        arrembeds.push(emdVideoAdd);
        var emdVideoBackgroundEffect = new ville.embed.fluent.VideoBackgroundEffect(svgsize, null, null, "VideoBackgroundEffect");
        arrembeds.push(emdVideoBackgroundEffect);
        var emdVideoBackgroundEffectHorizontal = new ville.embed.fluent.VideoBackgroundEffectHorizontal(svgsize, null, null, "VideoBackgroundEffectHorizontal");
        arrembeds.push(emdVideoBackgroundEffectHorizontal);
        var emdVideoChat = new ville.embed.fluent.VideoChat(svgsize, null, null, "VideoChat");
        arrembeds.push(emdVideoChat);
        var emdVideoClip = new ville.embed.fluent.VideoClip(svgsize, null, null, "VideoClip");
        arrembeds.push(emdVideoClip);
        var emdVideoClipMultiple = new ville.embed.fluent.VideoClipMultiple(svgsize, null, null, "VideoClipMultiple");
        arrembeds.push(emdVideoClipMultiple);
        var emdVideoClipOff = new ville.embed.fluent.VideoClipOff(svgsize, null, null, "VideoClipOff");
        arrembeds.push(emdVideoClipOff);
        var emdVideoClipOptimize = new ville.embed.fluent.VideoClipOptimize(svgsize, null, null, "VideoClipOptimize");
        arrembeds.push(emdVideoClipOptimize);
        var emdVideoClipWand = new ville.embed.fluent.VideoClipWand(svgsize, null, null, "VideoClipWand");
        arrembeds.push(emdVideoClipWand);
        var emdVideoOff = new ville.embed.fluent.VideoOff(svgsize, null, null, "VideoOff");
        arrembeds.push(emdVideoOff);
        var emdVideoPerson = new ville.embed.fluent.VideoPerson(svgsize, null, null, "VideoPerson");
        arrembeds.push(emdVideoPerson);
        var emdVideoPersonCall = new ville.embed.fluent.VideoPersonCall(svgsize, null, null, "VideoPersonCall");
        arrembeds.push(emdVideoPersonCall);
        var emdVideoPersonClock = new ville.embed.fluent.VideoPersonClock(svgsize, null, null, "VideoPersonClock");
        arrembeds.push(emdVideoPersonClock);
        var emdVideoPersonOff = new ville.embed.fluent.VideoPersonOff(svgsize, null, null, "VideoPersonOff");
        arrembeds.push(emdVideoPersonOff);
        var emdVideoPersonPulse = new ville.embed.fluent.VideoPersonPulse(svgsize, null, null, "VideoPersonPulse");
        arrembeds.push(emdVideoPersonPulse);
        var emdVideoPersonSparkle = new ville.embed.fluent.VideoPersonSparkle(svgsize, null, null, "VideoPersonSparkle");
        arrembeds.push(emdVideoPersonSparkle);
        var emdVideoPersonSparkleOff = new ville.embed.fluent.VideoPersonSparkleOff(svgsize, null, null, "VideoPersonSparkleOff");
        arrembeds.push(emdVideoPersonSparkleOff);
        var emdVideoPersonStar = new ville.embed.fluent.VideoPersonStar(svgsize, null, null, "VideoPersonStar");
        arrembeds.push(emdVideoPersonStar);
        var emdVideoPersonStarOff = new ville.embed.fluent.VideoPersonStarOff(svgsize, null, null, "VideoPersonStarOff");
        arrembeds.push(emdVideoPersonStarOff);
        var emdVideoPlayPause = new ville.embed.fluent.VideoPlayPause(svgsize, null, null, "VideoPlayPause");
        arrembeds.push(emdVideoPlayPause);
        var emdVideoProhibited = new ville.embed.fluent.VideoProhibited(svgsize, null, null, "VideoProhibited");
        arrembeds.push(emdVideoProhibited);
        var emdVideoRecording = new ville.embed.fluent.VideoRecording(svgsize, null, null, "VideoRecording");
        arrembeds.push(emdVideoRecording);
        var emdVideoSecurity = new ville.embed.fluent.VideoSecurity(svgsize, null, null, "VideoSecurity");
        arrembeds.push(emdVideoSecurity);
        var emdVideoSwitch = new ville.embed.fluent.VideoSwitch(svgsize, null, null, "VideoSwitch");
        arrembeds.push(emdVideoSwitch);
        var emdVideoSync = new ville.embed.fluent.VideoSync(svgsize, null, null, "VideoSync");
        arrembeds.push(emdVideoSync);
        var emdViewDesktop = new ville.embed.fluent.ViewDesktop(svgsize, null, null, "ViewDesktop");
        arrembeds.push(emdViewDesktop);
        var emdViewDesktopMobile = new ville.embed.fluent.ViewDesktopMobile(svgsize, null, null, "ViewDesktopMobile");
        arrembeds.push(emdViewDesktopMobile);
        var emdVirtualNetwork = new ville.embed.fluent.VirtualNetwork(svgsize, null, null, "VirtualNetwork");
        arrembeds.push(emdVirtualNetwork);
        var emdVirtualNetworkToolbox = new ville.embed.fluent.VirtualNetworkToolbox(svgsize, null, null, "VirtualNetworkToolbox");
        arrembeds.push(emdVirtualNetworkToolbox);
        var emdVoicemail = new ville.embed.fluent.Voicemail(svgsize, null, null, "Voicemail");
        arrembeds.push(emdVoicemail);
        var emdVoicemailArrowBack = new ville.embed.fluent.VoicemailArrowBack(svgsize, null, null, "VoicemailArrowBack");
        arrembeds.push(emdVoicemailArrowBack);
        var emdVoicemailArrowForward = new ville.embed.fluent.VoicemailArrowForward(svgsize, null, null, "VoicemailArrowForward");
        arrembeds.push(emdVoicemailArrowForward);
        var emdVoicemailArrowSubtract = new ville.embed.fluent.VoicemailArrowSubtract(svgsize, null, null, "VoicemailArrowSubtract");
        arrembeds.push(emdVoicemailArrowSubtract);
        var emdVoicemailShield = new ville.embed.fluent.VoicemailShield(svgsize, null, null, "VoicemailShield");
        arrembeds.push(emdVoicemailShield);
        var emdVoicemailSubtract = new ville.embed.fluent.VoicemailSubtract(svgsize, null, null, "VoicemailSubtract");
        arrembeds.push(emdVoicemailSubtract);
        var emdVote = new ville.embed.fluent.Vote(svgsize, null, null, "Vote");
        arrembeds.push(emdVote);
        var emdWalkieTalkie = new ville.embed.fluent.WalkieTalkie(svgsize, null, null, "WalkieTalkie");
        arrembeds.push(emdWalkieTalkie);
        var emdWallet = new ville.embed.fluent.Wallet(svgsize, null, null, "Wallet");
        arrembeds.push(emdWallet);
        var emdWalletCreditCard = new ville.embed.fluent.WalletCreditCard(svgsize, null, null, "WalletCreditCard");
        arrembeds.push(emdWalletCreditCard);
        var emdWallpaper = new ville.embed.fluent.Wallpaper(svgsize, null, null, "Wallpaper");
        arrembeds.push(emdWallpaper);
        var emdWand = new ville.embed.fluent.Wand(svgsize, null, null, "Wand");
        arrembeds.push(emdWand);
        var emdWarning = new ville.embed.fluent.Warning(svgsize, null, null, "Warning");
        arrembeds.push(emdWarning);
        var emdWarningShield = new ville.embed.fluent.WarningShield(svgsize, null, null, "WarningShield");
        arrembeds.push(emdWarningShield);
        var emdWasher = new ville.embed.fluent.Washer(svgsize, null, null, "Washer");
        arrembeds.push(emdWasher);
        var emdWater = new ville.embed.fluent.Water(svgsize, null, null, "Water");
        arrembeds.push(emdWater);
        var emdWeatherBlowingSnow = new ville.embed.fluent.WeatherBlowingSnow(svgsize, null, null, "WeatherBlowingSnow");
        arrembeds.push(emdWeatherBlowingSnow);
        var emdWeatherCloudy = new ville.embed.fluent.WeatherCloudy(svgsize, null, null, "WeatherCloudy");
        arrembeds.push(emdWeatherCloudy);
        var emdWeatherDrizzle = new ville.embed.fluent.WeatherDrizzle(svgsize, null, null, "WeatherDrizzle");
        arrembeds.push(emdWeatherDrizzle);
        var emdWeatherDuststorm = new ville.embed.fluent.WeatherDuststorm(svgsize, null, null, "WeatherDuststorm");
        arrembeds.push(emdWeatherDuststorm);
        var emdWeatherFog = new ville.embed.fluent.WeatherFog(svgsize, null, null, "WeatherFog");
        arrembeds.push(emdWeatherFog);
        var emdWeatherHailDay = new ville.embed.fluent.WeatherHailDay(svgsize, null, null, "WeatherHailDay");
        arrembeds.push(emdWeatherHailDay);
        var emdWeatherHailNight = new ville.embed.fluent.WeatherHailNight(svgsize, null, null, "WeatherHailNight");
        arrembeds.push(emdWeatherHailNight);
        var emdWeatherHaze = new ville.embed.fluent.WeatherHaze(svgsize, null, null, "WeatherHaze");
        arrembeds.push(emdWeatherHaze);
        var emdWeatherMoon = new ville.embed.fluent.WeatherMoon(svgsize, null, null, "WeatherMoon");
        arrembeds.push(emdWeatherMoon);
        var emdWeatherMoonOff = new ville.embed.fluent.WeatherMoonOff(svgsize, null, null, "WeatherMoonOff");
        arrembeds.push(emdWeatherMoonOff);
        var emdWeatherPartlyCloudyDay = new ville.embed.fluent.WeatherPartlyCloudyDay(svgsize, null, null, "WeatherPartlyCloudyDay");
        arrembeds.push(emdWeatherPartlyCloudyDay);
        var emdWeatherPartlyCloudyNight = new ville.embed.fluent.WeatherPartlyCloudyNight(svgsize, null, null, "WeatherPartlyCloudyNight");
        arrembeds.push(emdWeatherPartlyCloudyNight);
        var emdWeatherRain = new ville.embed.fluent.WeatherRain(svgsize, null, null, "WeatherRain");
        arrembeds.push(emdWeatherRain);
        var emdWeatherRainShowersDay = new ville.embed.fluent.WeatherRainShowersDay(svgsize, null, null, "WeatherRainShowersDay");
        arrembeds.push(emdWeatherRainShowersDay);
        var emdWeatherRainShowersNight = new ville.embed.fluent.WeatherRainShowersNight(svgsize, null, null, "WeatherRainShowersNight");
        arrembeds.push(emdWeatherRainShowersNight);
        var emdWeatherRainSnow = new ville.embed.fluent.WeatherRainSnow(svgsize, null, null, "WeatherRainSnow");
        arrembeds.push(emdWeatherRainSnow);
        var emdWeatherSnow = new ville.embed.fluent.WeatherSnow(svgsize, null, null, "WeatherSnow");
        arrembeds.push(emdWeatherSnow);
        var emdWeatherSnowShowerDay = new ville.embed.fluent.WeatherSnowShowerDay(svgsize, null, null, "WeatherSnowShowerDay");
        arrembeds.push(emdWeatherSnowShowerDay);
        var emdWeatherSnowShowerNight = new ville.embed.fluent.WeatherSnowShowerNight(svgsize, null, null, "WeatherSnowShowerNight");
        arrembeds.push(emdWeatherSnowShowerNight);
        var emdWeatherSnowflake = new ville.embed.fluent.WeatherSnowflake(svgsize, null, null, "WeatherSnowflake");
        arrembeds.push(emdWeatherSnowflake);
        var emdWeatherSqualls = new ville.embed.fluent.WeatherSqualls(svgsize, null, null, "WeatherSqualls");
        arrembeds.push(emdWeatherSqualls);
        var emdWeatherSunny = new ville.embed.fluent.WeatherSunny(svgsize, null, null, "WeatherSunny");
        arrembeds.push(emdWeatherSunny);
        var emdWeatherSunnyHigh = new ville.embed.fluent.WeatherSunnyHigh(svgsize, null, null, "WeatherSunnyHigh");
        arrembeds.push(emdWeatherSunnyHigh);
        var emdWeatherSunnyLow = new ville.embed.fluent.WeatherSunnyLow(svgsize, null, null, "WeatherSunnyLow");
        arrembeds.push(emdWeatherSunnyLow);
        var emdWeatherThunderstorm = new ville.embed.fluent.WeatherThunderstorm(svgsize, null, null, "WeatherThunderstorm");
        arrembeds.push(emdWeatherThunderstorm);
        var emdWebAsset = new ville.embed.fluent.WebAsset(svgsize, null, null, "WebAsset");
        arrembeds.push(emdWebAsset);
        var emdWhiteboard = new ville.embed.fluent.Whiteboard(svgsize, null, null, "Whiteboard");
        arrembeds.push(emdWhiteboard);
        var emdWhiteboardOff = new ville.embed.fluent.WhiteboardOff(svgsize, null, null, "WhiteboardOff");
        arrembeds.push(emdWhiteboardOff);
        var emdWifi1 = new ville.embed.fluent.Wifi1(svgsize, null, null, "Wifi1");
        arrembeds.push(emdWifi1);
        var emdWifi2 = new ville.embed.fluent.Wifi2(svgsize, null, null, "Wifi2");
        arrembeds.push(emdWifi2);
        var emdWifi3 = new ville.embed.fluent.Wifi3(svgsize, null, null, "Wifi3");
        arrembeds.push(emdWifi3);
        var emdWifi4 = new ville.embed.fluent.Wifi4(svgsize, null, null, "Wifi4");
        arrembeds.push(emdWifi4);
        var emdWifiLock = new ville.embed.fluent.WifiLock(svgsize, null, null, "WifiLock");
        arrembeds.push(emdWifiLock);
        var emdWifiOff = new ville.embed.fluent.WifiOff(svgsize, null, null, "WifiOff");
        arrembeds.push(emdWifiOff);
        var emdWifiSettings = new ville.embed.fluent.WifiSettings(svgsize, null, null, "WifiSettings");
        arrembeds.push(emdWifiSettings);
        var emdWifiWarning = new ville.embed.fluent.WifiWarning(svgsize, null, null, "WifiWarning");
        arrembeds.push(emdWifiWarning);
        var emdWindow = new ville.embed.fluent.Window(svgsize, null, null, "Window");
        arrembeds.push(emdWindow);
        var emdWindowAd = new ville.embed.fluent.WindowAd(svgsize, null, null, "WindowAd");
        arrembeds.push(emdWindowAd);
        var emdWindowAdOff = new ville.embed.fluent.WindowAdOff(svgsize, null, null, "WindowAdOff");
        arrembeds.push(emdWindowAdOff);
        var emdWindowAdPerson = new ville.embed.fluent.WindowAdPerson(svgsize, null, null, "WindowAdPerson");
        arrembeds.push(emdWindowAdPerson);
        var emdWindowApps = new ville.embed.fluent.WindowApps(svgsize, null, null, "WindowApps");
        arrembeds.push(emdWindowApps);
        var emdWindowArrowUp = new ville.embed.fluent.WindowArrowUp(svgsize, null, null, "WindowArrowUp");
        arrembeds.push(emdWindowArrowUp);
        var emdWindowBulletList = new ville.embed.fluent.WindowBulletList(svgsize, null, null, "WindowBulletList");
        arrembeds.push(emdWindowBulletList);
        var emdWindowBulletListAdd = new ville.embed.fluent.WindowBulletListAdd(svgsize, null, null, "WindowBulletListAdd");
        arrembeds.push(emdWindowBulletListAdd);
        var emdWindowConsole = new ville.embed.fluent.WindowConsole(svgsize, null, null, "WindowConsole");
        arrembeds.push(emdWindowConsole);
        var emdWindowDatabase = new ville.embed.fluent.WindowDatabase(svgsize, null, null, "WindowDatabase");
        arrembeds.push(emdWindowDatabase);
        var emdWindowDevEdit = new ville.embed.fluent.WindowDevEdit(svgsize, null, null, "WindowDevEdit");
        arrembeds.push(emdWindowDevEdit);
        var emdWindowDevTools = new ville.embed.fluent.WindowDevTools(svgsize, null, null, "WindowDevTools");
        arrembeds.push(emdWindowDevTools);
        var emdWindowEdit = new ville.embed.fluent.WindowEdit(svgsize, null, null, "WindowEdit");
        arrembeds.push(emdWindowEdit);
        var emdWindowFingerprint = new ville.embed.fluent.WindowFingerprint(svgsize, null, null, "WindowFingerprint");
        arrembeds.push(emdWindowFingerprint);
        var emdWindowHeaderHorizontal = new ville.embed.fluent.WindowHeaderHorizontal(svgsize, null, null, "WindowHeaderHorizontal");
        arrembeds.push(emdWindowHeaderHorizontal);
        var emdWindowHeaderHorizontalOff = new ville.embed.fluent.WindowHeaderHorizontalOff(svgsize, null, null, "WindowHeaderHorizontalOff");
        arrembeds.push(emdWindowHeaderHorizontalOff);
        var emdWindowHeaderVertical = new ville.embed.fluent.WindowHeaderVertical(svgsize, null, null, "WindowHeaderVertical");
        arrembeds.push(emdWindowHeaderVertical);
        var emdWindowInprivate = new ville.embed.fluent.WindowInprivate(svgsize, null, null, "WindowInprivate");
        arrembeds.push(emdWindowInprivate);
        var emdWindowInprivateAccount = new ville.embed.fluent.WindowInprivateAccount(svgsize, null, null, "WindowInprivateAccount");
        arrembeds.push(emdWindowInprivateAccount);
        var emdWindowLocationTarget = new ville.embed.fluent.WindowLocationTarget(svgsize, null, null, "WindowLocationTarget");
        arrembeds.push(emdWindowLocationTarget);
        var emdWindowMultiple = new ville.embed.fluent.WindowMultiple(svgsize, null, null, "WindowMultiple");
        arrembeds.push(emdWindowMultiple);
        var emdWindowMultipleSwap = new ville.embed.fluent.WindowMultipleSwap(svgsize, null, null, "WindowMultipleSwap");
        arrembeds.push(emdWindowMultipleSwap);
        var emdWindowNew = new ville.embed.fluent.WindowNew(svgsize, null, null, "WindowNew");
        arrembeds.push(emdWindowNew);
        var emdWindowPlay = new ville.embed.fluent.WindowPlay(svgsize, null, null, "WindowPlay");
        arrembeds.push(emdWindowPlay);
        var emdWindowSettings = new ville.embed.fluent.WindowSettings(svgsize, null, null, "WindowSettings");
        arrembeds.push(emdWindowSettings);
        var emdWindowShield = new ville.embed.fluent.WindowShield(svgsize, null, null, "WindowShield");
        arrembeds.push(emdWindowShield);
        var emdWindowText = new ville.embed.fluent.WindowText(svgsize, null, null, "WindowText");
        arrembeds.push(emdWindowText);
        var emdWindowWrench = new ville.embed.fluent.WindowWrench(svgsize, null, null, "WindowWrench");
        arrembeds.push(emdWindowWrench);
        var emdWrench = new ville.embed.fluent.Wrench(svgsize, null, null, "Wrench");
        arrembeds.push(emdWrench);
        var emdWrenchScrewdriver = new ville.embed.fluent.WrenchScrewdriver(svgsize, null, null, "WrenchScrewdriver");
        arrembeds.push(emdWrenchScrewdriver);
        var emdWrenchSettings = new ville.embed.fluent.WrenchSettings(svgsize, null, null, "WrenchSettings");
        arrembeds.push(emdWrenchSettings);
        var emdXboxConsole = new ville.embed.fluent.XboxConsole(svgsize, null, null, "XboxConsole");
        arrembeds.push(emdXboxConsole);
        var emdXboxController = new ville.embed.fluent.XboxController(svgsize, null, null, "XboxController");
        arrembeds.push(emdXboxController);
        var emdXboxControllerError = new ville.embed.fluent.XboxControllerError(svgsize, null, null, "XboxControllerError");
        arrembeds.push(emdXboxControllerError);
        var emdXray = new ville.embed.fluent.Xray(svgsize, null, null, "Xray");
        arrembeds.push(emdXray);
        var emdZoomFit = new ville.embed.fluent.ZoomFit(svgsize, null, null, "ZoomFit");
        arrembeds.push(emdZoomFit);
        var emdZoomIn = new ville.embed.fluent.ZoomIn(svgsize, null, null, "ZoomIn");
        arrembeds.push(emdZoomIn);
        var emdZoomOut = new ville.embed.fluent.ZoomOut(svgsize, null, null, "ZoomOut");
        arrembeds.push(emdZoomOut);

        // loop
        arrembeds.forEach(function (embed) {
          var atmlabel = embed.getTitle().replace("<title>", "").replace("</title>", "");
          var atmembed = new qx.ui.basic.Atom(atmlabel).set(atmprops);
          atmembed.setEmbed(embed);
          fuiiconflow.add(atmembed);
        });
        overviewpage.add(lblfluentuiheader);
        overviewpage.add(lblfluentsimpledesc);
        overviewpage.add(lblsubheadfuisimple);
        overviewpage.add(lblfuisimpleembed);
        overviewpage.add(embedfuiairplanetakeoffalone);
        overviewpage.add(lblsimplefuiembedcode);
        overviewpage.add(lblsubheadfuibutton);
        overviewpage.add(lblmorefuiembed);
        overviewpage.add(btnembedfuiairplanebutton);
        overviewpage.add(lblbuttonfuiembedcode);
        overviewpage.add(lblsubheaderfuiFavs);
        overviewpage.add(fuiiconflow);

        // Carbon testing
        /*var emdcarbon = new ville.embed.carbon.Carbon(40);
        var atmcarbon = new qx.ui.basic.Atom("Carbon").set({ iconPosition: "top", appearance: "icss-atom", embed: emdcarbon });
        var emdbee = new ville.embed.carbon.Warning(40);
        var atmbee = new qx.ui.basic.Atom("Warning").set({ iconPosition: "top", appearance: "icss-atom", embed: emdbee });
        */

        // Third page marker
        var tablelistvbox = new qx.ui.layout.VBox(10);
        tablelistpage.setLayout(tablelistvbox);
        var tablelistscrollstackpage = new qx.ui.container.Scroll().set({
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 0]
        });
        tablelistscrollstackpage.add(tablelistpage);

        // Third page marker  
        var lblmaterialheader = new qx.ui.basic.Label("Material Design Icons (SVG)").set({
          font: "control-header"
        });

        //simple description
        var lblmaterialsimpledesc = new qx.ui.basic.Label("Material Design icons: <b><a href='https://material.io/resources/icons/?style=baseline' target='_blank'>Material Design Icons</a></b> for the full list of available icons.").set({
          rich: true,
          wrap: true
        });

        // Basic usage
        var lblsubheadmaterialsimple = new qx.ui.basic.Label("Basic usage:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblmaterialsimpleembed = new qx.ui.basic.Label("Same as Fluent UI Web Icons, just with different named embeds.").set({
          rich: true,
          wrap: true
        });

        // Use in a Button (requires patching)
        var lblsubheadmaterialbutton = new qx.ui.basic.Label("Use in another widget:").set({
          font: "headeratom",
          marginTop: 40
        });
        var lblmorematerialembed = new qx.ui.basic.Label("Same as Fluent UI Web Icons, just with different named embeds.").set({
          rich: true,
          wrap: true
        });

        // Some of my Favorite Icons
        var lblsubheadermaterialFavs = new qx.ui.basic.Label("A few examples:").set({
          font: "headeratom",
          marginTop: 40
        });
        var materialiconflow = new qx.ui.container.Composite();
        var materialiconflowlayout = new qx.ui.layout.Flow(16, 20, "left");
        materialiconflow.setLayout(materialiconflowlayout);
        var embedmuiacctcircle = new ville.embed.material.AccountCircle().set({
          width: 40,
          height: 40
        });
        var atmacctcircle = new qx.ui.basic.Atom("Account Circle").set({
          iconPosition: "top",
          appearance: "icss-atom",
          embed: embedmuiacctcircle
        });
        /*
              var atmbusiness = new qx.ui.basic.Atom("Business", 'data:text/json;{ "name": "material-business", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
        var atmbiotech = new qx.ui.basic.Atom("Biotech", 'data:text/json;{ "name": "material-biotech", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
        var atmbolt = new qx.ui.basic.Atom("Bolt", 'data:text/json;{ "name": "material-bolt", "width": 60, "height": 60 }').set({iconPosition: "top", appearance: "icss-atom"});
        
        
        materialiconflow.add(atmbusiness);
        materialiconflow.add(atmbiotech);
        materialiconflow.add(atmbolt);
        */
        materialiconflow.add(atmacctcircle);
        tablelistpage.add(lblmaterialheader);
        tablelistpage.add(lblmaterialsimpledesc);
        tablelistpage.add(lblsubheadmaterialsimple);
        tablelistpage.add(lblmaterialsimpleembed);
        tablelistpage.add(lblsubheadmaterialbutton);
        tablelistpage.add(lblmorematerialembed);
        tablelistpage.add(lblsubheadermaterialFavs);
        tablelistpage.add(materialiconflow);

        // Menu Page for phonegap only
        var menupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10, null, "separator-vertical")).set({
          padding: [60, 0, 0, 0]
        });
        var btnAbout = new qx.ui.form.Button("About Wax", "wax/demo/info-24px.svg").set({
          appearance: "hym-page-button"
        });
        var btnSwitchBack = new qx.ui.form.Button("Switch to Desktop", "wax/demo/desktop_windows-24px.svg").set({
          appearance: "hym-page-button"
        });
        var btnProfile = new qx.ui.form.Button("Profile", "wax/demo/edit-24px.svg").set({
          appearance: "hym-page-button"
        });
        var btnSettings = new qx.ui.form.Button("Settings", "wax/demo/outline-settings-24px.svg").set({
          appearance: "hym-page-button"
        });
        var btnLogout = new qx.ui.form.Button("Logout", "wax/demo/exit_to_app-24px.svg").set({
          appearance: "hym-page-button"
        });
        menupage.add(new qx.ui.basic.Label("WAX DEMO").set({
          paddingLeft: 20,
          textColor: "gray"
        }));
        menupage.add(btnSwitchBack);
        menupage.add(btnAbout);
        menupage.add(new qx.ui.basic.Label("ADDITIONAL FEATURES").set({
          paddingLeft: 20,
          paddingTop: 38,
          textColor: "gray"
        }));
        menupage.add(btnProfile);
        menupage.add(btnSettings);
        menupage.add(btnLogout);
        var menuscrollstackpage = new qx.ui.container.Scroll().set({
          padding: 0,
          margin: 0,
          contentPadding: [0, 0, 0, 0]
        });
        menuscrollstackpage.add(menupage);

        // Assemble - THE STACK 
        centerbox.add(overviewscrollstackpage);
        centerbox.add(dashboardscrollstackpage);
        centerbox.add(tablelistscrollstackpage);
        centerbox.add(menuscrollstackpage);

        // Show the default page
        centerbox.setSelection([overviewscrollstackpage]);
        btnAbout.addListener("execute", function (e) {
          winAboutWax.restore();
          winAboutWax.maximize();
          winAboutWax.center();
          winAboutWax.show();
        }, this);

        // <<< END of THE STACK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        // >>> Populate the Main Menu and Popup Main Menu with content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Create Menu Buttons that will navigate the user through THE STACK Pages 
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Populate westBox with content
        var atmleftnavheader = new qx.ui.basic.Atom("Wax Demo", "wax/demo/Wax_demo_logo.png").set({
          appearance: "header-atom",
          anonymous: true,
          focusable: false,
          selectable: false
        });
        atmleftnavheader.setShow("label");
        //atmleftnavheader.getChildControl("icon").set({ scale : true });
        westbox.add(atmleftnavheader);
        var tbtnSecondPage = new wax.demo.MenuButton("Fluent UI (SVG)", "wax/demo/fluent_globe.svg", true);
        westbox.add(tbtnSecondPage);
        var tbtndashboardpage = new wax.demo.MenuButton("iConicss", "wax/demo/Css3_logo.svg", true);
        westbox.add(tbtndashboardpage);
        var tbtnThirdPage = new wax.demo.MenuButton("Material (SVG)", "wax/demo/material_logo.svg", true);
        westbox.add(tbtnThirdPage);
        var westboxbuttongroup = new qx.ui.form.RadioGroup();
        westboxbuttongroup.add(tbtnSecondPage, tbtndashboardpage, tbtnThirdPage);

        // CLONE the above controls
        var atmmenuleftnavheader = atmleftnavheader.clone();
        //atmmenuleftnavheader.getChildControl("icon").set({ scale : true });
        var tbtnmenudashboardpage = tbtndashboardpage.clone();
        tbtnmenudashboardpage.getChildControl("icon").set({
          scale: true
        });
        var tbtnmenuSecondPage = tbtnSecondPage.clone();
        tbtnmenuSecondPage.getChildControl("icon").set({
          scale: true
        });
        var tbtnmenuThirdPage = tbtnThirdPage.clone();
        tbtnmenuThirdPage.getChildControl("icon").set({
          scale: true
        });

        // Add the clones to the Main Menu Popup
        mainmenupopup.add(atmmenuleftnavheader);
        mainmenupopup.add(tbtnmenuSecondPage);
        mainmenupopup.add(tbtnmenudashboardpage);
        mainmenupopup.add(tbtnmenuThirdPage);

        // Assign all the clones their own RadioGroup
        var mainmenubuttongroup = new qx.ui.form.RadioGroup();
        mainmenubuttongroup.add(tbtnmenuSecondPage, tbtnmenudashboardpage, tbtnmenuThirdPage);

        //***  CODE for applying popup fading in and out  ***//
        var fadeinleft = {
          duration: 300,
          timing: "ease-out",
          origin: "left top",
          keyFrames: {
            0: {
              opacity: 0,
              left: "-300px"
            },
            100: {
              opacity: 1,
              left: "0px"
            }
          }
        };
        mainmenupopup.addListener("appear", function (e) {
          var domtable = mainmenupopup.getContentElement().getDomElement();
          qx.bom.element.Animation.animate(domtable, fadeinleft);
        }, this);

        // <<< END of Main Menu and Main Menu Popup <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        // >>> Populate the Hybrid Mobile (hym) Main Menu  content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Create Menu Buttons that will navigate the user through THE STACK Pages 
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Populate southbox with content
        var tbtndashboardpagehym = new wax.demo.MenuButton("iConicss", "wax/demo/Css3_logo.svg", true).set({
          appearance: "mainmenubutton-hym",
          iconPosition: "top"
        });
        var tbtnoverviewpagehym = new wax.demo.MenuButton("Fluent UI", "wax/demo/fluent_globe.svg", true).set({
          appearance: "mainmenubutton-hym",
          iconPosition: "top"
        });
        var tbtnlistofitemspagehym = new wax.demo.MenuButton("Material", "wax/demo/material_logo.svg", true).set({
          appearance: "mainmenubutton-hym",
          iconPosition: "top"
        });
        var tbtnmenuhym = new wax.demo.MenuButton("Menu", menuimage, true).set({
          appearance: "mainmenubutton-hym",
          iconPosition: "top"
        });
        southbox.add(tbtnoverviewpagehym, {
          flex: 1
        });
        southbox.add(tbtndashboardpagehym, {
          flex: 1
        });
        southbox.add(tbtnlistofitemspagehym, {
          flex: 1
        });
        southbox.add(tbtnmenuhym, {
          flex: 1
        });
        southbox.setVisibility("excluded");

        // Assign all the clones their own RadioGroup
        var mainmenubuttongrouphym = new qx.ui.form.RadioGroup();
        mainmenubuttongrouphym.add(tbtnoverviewpagehym, tbtndashboardpagehym, tbtnlistofitemspagehym, tbtnmenuhym);

        // <<< END of Hybrid Mobil (hym) Main Menu and Main Menu Popup <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        // >>> Wire all the Main Menu Buttons to THE STACK Pages (via Listeners) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // Turn on all wax.demo.MenuButton listeners
        tbtndashboardpage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([dashboardscrollstackpage]);
            mainmenubuttongroup.setSelection([tbtnmenudashboardpage]);
          }
        }, this);
        tbtnSecondPage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([overviewscrollstackpage]);
            mainmenubuttongroup.setSelection([tbtnmenuSecondPage]);
          }
        }, this);
        tbtnThirdPage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([tablelistscrollstackpage]);
            mainmenubuttongroup.setSelection([tbtnmenuThirdPage]);
          }
        }, this);

        // Popup menu buttons
        tbtnmenudashboardpage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([dashboardscrollstackpage]);
            westboxbuttongroup.setSelection([tbtndashboardpage]);
            mainmenupopup.hide();
          }
        }, this);
        tbtnmenuSecondPage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([overviewscrollstackpage]);
            westboxbuttongroup.setSelection([tbtnSecondPage]);

            //dashboardpage.setVisibility("excluded");

            mainmenupopup.hide();
          }
        }, this);
        tbtnmenuThirdPage.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([tablelistscrollstackpage]);
            westboxbuttongroup.setSelection([tbtnThirdPage]);

            //dashboardpage.setVisibility("excluded");

            mainmenupopup.hide();
          }
        }, this);

        // if Hybrid Mobile
        tbtndashboardpagehym.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([dashboardscrollstackpage]);
            atmlogocurrentpage.set({
              show: "both",
              label: "iConicss"
            });
          }
        }, this);
        tbtnoverviewpagehym.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([overviewscrollstackpage]);
            atmlogocurrentpage.set({
              show: "both",
              label: "Fluent UI"
            });
          }
        }, this);
        tbtnlistofitemspagehym.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([tablelistscrollstackpage]);
            atmlogocurrentpage.set({
              show: "both",
              label: "Material"
            });
          }
        }, this);
        tbtnmenuhym.addListener("changeValue", function (e) {
          if (e.getData()) {
            centerbox.setSelection([menupage]);
            atmlogocurrentpage.set({
              show: "both",
              label: "Menu"
            });
          }
        }, this);

        // Demo mode switching to Mobile
        switchmenubutton1.addListener("execute", function (e) {
          this.setDemoMode("mobile");
          southbox.setVisibility("visible");
          scrollwest.setVisibility("excluded");
          profilemenubutton.setVisibility("hidden");
          mainmenupart.setVisibility("hidden");
          centerbox.setSelection([menuscrollstackpage]);
          atmlogocurrentpage.set({
            visibility: "visible",
            label: "Menu"
          });
          mainmenubuttongrouphym.setSelection([tbtnmenuhym]);
        }, this);

        // Demo mode switching back to desktop
        btnSwitchBack.addListener("execute", function (e) {
          this.setDemoMode("desktop");
          southbox.setVisibility("excluded");
          profilemenubutton.setVisibility("visible");
          atmlogocurrentpage.setVisibility("hidden");
          mainmenupart.setVisibility("visible");
          centerbox.setSelection([dashboardscrollstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenudashboardpage]);
          westboxbuttongroup.setSelection([tbtndashboardpage]);
        }, this);

        // *** END of Wiring *************************************************************************

        // ====================================
        // =======  MediaQuery code  ========== 
        // ====================================

        var mq1 = new qx.bom.MediaQuery("screen and (min-width: 1024px)");
        mq1.on("change", function (e) {
          if (mq1.isMatching() && this.getDemoMode() == "desktop") {
            scrollwest.setVisibility("visible");
            mainmenupart.setVisibility("excluded");
          } else {
            scrollwest.addListener("appear", function (e) {
              var domtable = scrollwest.getContentElement().getDomElement();
              qx.bom.element.Animation.animate(domtable, fadeinleft);
            }, this);
            scrollwest.setVisibility("excluded");
            if (this.getDemoMode() == "desktop") mainmenupart.setVisibility("visible");
          }
        }, this);
        if (mq1.isMatching()) {
          scrollwest.setVisibility("visible");
          mainmenupart.setVisibility("excluded");
        } else {
          scrollwest.addListener("appear", function (e) {
            var domtable = scrollwest.getContentElement().getDomElement();
            qx.bom.element.Animation.animate(domtable, fadeinleft);
          }, this);
          scrollwest.setVisibility("excluded");
          mainmenupart.setVisibility("visible");
        }
        var mq2 = new qx.bom.MediaQuery("screen and (min-width: 767px)");
        mq2.on("change", function (e) {
          if (mq2.isMatching()) {} else {}
        });
        if (mq2.isMatching()) {} else {}
      },
      __P_2_0: function __P_2_0() {
        // Create the Window
        var win = new qx.ui.window.Window().set({
          appearance: "wax-window",
          allowMaximize: true,
          allowMinimize: false,
          modal: true,
          movable: true
        });
        win.setLayout(new qx.ui.layout.VBox(4));
        //win.getChildControl("title").set({padding: [10,0,0,10]});

        return win;
      }
    }
  });
  wax.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();