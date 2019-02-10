(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('emitter'), require('string_decoder'), require('events'), require('utf8')) :
  typeof define === 'function' && define.amd ? define('emdi', ['exports', 'rxjs', 'rxjs/operators', 'emitter', 'string_decoder', 'events', 'utf8'], factory) :
  (global = global || self, factory(global.emdi = {}, global.rxjs, global.rxjs.operators, global.emitter, global.string_decoder, global.events, global.utf8));
}(this, function (exports, rxjs, operators, emitter, string_decoder, events, utf8) { 'use strict';

  emitter = emitter && emitter.hasOwnProperty('default') ? emitter['default'] : emitter;
  string_decoder = string_decoder && string_decoder.hasOwnProperty('default') ? string_decoder['default'] : string_decoder;
  events = events && events.hasOwnProperty('default') ? events['default'] : events;

  (function (EmdiClasses) {
      EmdiClasses[EmdiClasses["Comms"] = 0] = "Comms";
      EmdiClasses[EmdiClasses["EventHandler"] = 1] = "EventHandler";
      EmdiClasses[EmdiClasses["Cabinet"] = 2] = "Cabinet";
      EmdiClasses[EmdiClasses["Meters"] = 3] = "Meters";
      EmdiClasses[EmdiClasses["ContentToContent"] = 4] = "ContentToContent";
      EmdiClasses[EmdiClasses["Host"] = 5] = "Host";
      EmdiClasses[EmdiClasses["Client"] = 6] = "Client";
  })(exports.EmdiClasses || (exports.EmdiClasses = {}));
  (function (EmdiEvents) {
      EmdiEvents[EmdiEvents["MeterReport"] = 0] = "MeterReport";
      EmdiEvents[EmdiEvents["EventReport"] = 1] = "EventReport";
      EmdiEvents[EmdiEvents["ContentMessage"] = 2] = "ContentMessage";
      EmdiEvents[EmdiEvents["HostToContentMessage"] = 3] = "HostToContentMessage";
  })(exports.EmdiEvents || (exports.EmdiEvents = {}));
  (function (EmdiResponses) {
      EmdiResponses[EmdiResponses["HeartbeatAck"] = 0] = "HeartbeatAck";
      EmdiResponses[EmdiResponses["CommsOnLineAck"] = 1] = "CommsOnLineAck";
      EmdiResponses[EmdiResponses["FunctionalGroupList"] = 2] = "FunctionalGroupList";
      EmdiResponses[EmdiResponses["EventSubList"] = 3] = "EventSubList";
      EmdiResponses[EmdiResponses["MeterSubList"] = 4] = "MeterSubList";
      EmdiResponses[EmdiResponses["ClearEventSubAck"] = 5] = "ClearEventSubAck";
      EmdiResponses[EmdiResponses["ContentMessageAck"] = 6] = "ContentMessageAck";
      EmdiResponses[EmdiResponses["ContentToHostMessageAck"] = 7] = "ContentToHostMessageAck";
      EmdiResponses[EmdiResponses["ActiveContentList"] = 8] = "ActiveContentList";
      EmdiResponses[EmdiResponses["CabinetStatus"] = 9] = "CabinetStatus";
      EmdiResponses[EmdiResponses["CallAttendantStatus"] = 10] = "CallAttendantStatus";
      EmdiResponses[EmdiResponses["CardStatus"] = 11] = "CardStatus";
      EmdiResponses[EmdiResponses["DeviceVisibleStatus"] = 12] = "DeviceVisibleStatus";
      EmdiResponses[EmdiResponses["SupportedEventList"] = 13] = "SupportedEventList";
      EmdiResponses[EmdiResponses["SupportedMeterList"] = 14] = "SupportedMeterList";
      EmdiResponses[EmdiResponses["LogContentEventAck"] = 15] = "LogContentEventAck";
      EmdiResponses[EmdiResponses["MeterReport"] = 16] = "MeterReport";
      EmdiResponses[EmdiResponses["EgmId"] = 17] = "EgmId";
  })(exports.EmdiResponses || (exports.EmdiResponses = {}));
  (function (EmdiCommands) {
      EmdiCommands[EmdiCommands["ClearEventSub"] = 0] = "ClearEventSub";
      EmdiCommands[EmdiCommands["ClearMeterSub"] = 1] = "ClearMeterSub";
      EmdiCommands[EmdiCommands["CommsOnLine"] = 2] = "CommsOnLine";
      EmdiCommands[EmdiCommands["ContentMessage"] = 3] = "ContentMessage";
      EmdiCommands[EmdiCommands["ContentToHostMessage"] = 4] = "ContentToHostMessage";
      EmdiCommands[EmdiCommands["GetActiveContent"] = 5] = "GetActiveContent";
      EmdiCommands[EmdiCommands["GetCardState"] = 6] = "GetCardState";
      EmdiCommands[EmdiCommands["GetCabinetStatus"] = 7] = "GetCabinetStatus";
      EmdiCommands[EmdiCommands["GetCallAttendantState"] = 8] = "GetCallAttendantState";
      EmdiCommands[EmdiCommands["GetDeviceVisibleState"] = 9] = "GetDeviceVisibleState";
      EmdiCommands[EmdiCommands["GetEventSubList"] = 10] = "GetEventSubList";
      EmdiCommands[EmdiCommands["GetFunctionalGroups"] = 11] = "GetFunctionalGroups";
      EmdiCommands[EmdiCommands["GetEgmId"] = 12] = "GetEgmId";
      EmdiCommands[EmdiCommands["GetMeterSub"] = 13] = "GetMeterSub";
      EmdiCommands[EmdiCommands["GetMeterInfo"] = 14] = "GetMeterInfo";
      EmdiCommands[EmdiCommands["GetSupportedMeterList"] = 15] = "GetSupportedMeterList";
      EmdiCommands[EmdiCommands["GetSupportedEventList"] = 16] = "GetSupportedEventList";
      EmdiCommands[EmdiCommands["Heartbeat"] = 17] = "Heartbeat";
      EmdiCommands[EmdiCommands["LogContentEvent"] = 18] = "LogContentEvent";
      EmdiCommands[EmdiCommands["SetCallAttendantState"] = 19] = "SetCallAttendantState";
      EmdiCommands[EmdiCommands["SetCardRemoved"] = 20] = "SetCardRemoved";
      EmdiCommands[EmdiCommands["SetDeviceVisibleState"] = 21] = "SetDeviceVisibleState";
      EmdiCommands[EmdiCommands["SetEventSub"] = 22] = "SetEventSub";
      EmdiCommands[EmdiCommands["SetMeterSub"] = 23] = "SetMeterSub";
      EmdiCommands[EmdiCommands["ContentMessageAck"] = 24] = "ContentMessageAck";
      EmdiCommands[EmdiCommands["EventAck"] = 25] = "EventAck";
      EmdiCommands[EmdiCommands["HostToContentMessageAck"] = 26] = "HostToContentMessageAck";
      EmdiCommands[EmdiCommands["MeterReportAck"] = 27] = "MeterReportAck";
  })(exports.EmdiCommands || (exports.EmdiCommands = {}));
  var EmdiError = /** @class */ (function () {
      function EmdiError(error, cls) {
          this.error = error;
          this.class = exports.EmdiClasses[cls];
      }
      return EmdiError;
  }());
  var availableMeters = [
      { name: 'IGT_playerPointBalance', type: 'IGT_count', display: 'Player Point Balance' },
      { name: 'IGT_playerPointCountdown', type: 'IGT_count', display: 'Player Point Countdown' },
      { name: 'IGT_playerSessionPoints', type: 'IGT_count', display: 'Player Session Points' },
      { name: 'IGT_wagerMatchBalance', type: 'IGT_count', display: 'Total Wager Match' },
      { name: 'G2S_playerCashableAmt', type: 'IGT_amount', display: 'Player Cash Amount' },
      { name: 'G2S_playerPromoAmt', type: 'IGT_amount', display: 'Player Promo Amount' },
      { name: 'G2S_playerNonCashAmt', type: 'IGT_amount', display: 'Player Non-Cash Amount' },
  ];

  var HeartbeatCommand = /** @class */ (function () {
      function HeartbeatCommand() {
          this.name = 'Heartbeat';
          this.commandType = exports.EmdiCommands.Heartbeat;
          this.class = exports.EmdiClasses.Comms;
      }
      HeartbeatCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:heartbeat />\n           </md:mdComms>\n        </md:mdMsg>";
      };
      return HeartbeatCommand;
  }());

  var HeartbeatAckResponse = /** @class */ (function () {
      function HeartbeatAckResponse() {
          this.name = 'HeartbeatAck';
          this.responseType = exports.EmdiResponses.HeartbeatAck;
          this.class = exports.EmdiClasses.Comms;
      }
      return HeartbeatAckResponse;
  }());

  var CommsOnLineCommand = /** @class */ (function () {
      function CommsOnLineCommand() {
          this.name = 'CommsOnLine';
          this.commandType = exports.EmdiCommands.CommsOnLine;
          this.class = exports.EmdiClasses.Comms;
          this.requiresInput = true;
      }
      CommsOnLineCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:commsOnLine md:mdAccessToken=\"" + this.accessToken + "\" />\n           </md:mdComms>\n        </md:mdMsg>";
      };
      return CommsOnLineCommand;
  }());

  var CommsOnLineAckResponse = /** @class */ (function () {
      function CommsOnLineAckResponse(data) {
          this.name = 'CommsOnLineAck';
          this.responseType = exports.EmdiResponses.CommsOnLineAck;
          this.class = exports.EmdiClasses.Comms;
          this.sessionValid = false;
          console.log('CommsOnLineAck: data =', data);
          this.sessionValid = data['$']['md:sessionValid'] === 'true';
      }
      return CommsOnLineAckResponse;
  }());

  var GetFunctionalGroupsCommand = /** @class */ (function () {
      function GetFunctionalGroupsCommand() {
          this.name = 'GetFunctionalGroups';
          this.commandType = exports.EmdiCommands.GetFunctionalGroups;
          this.class = exports.EmdiClasses.Comms;
          this.includeCommands = false;
      }
      GetFunctionalGroupsCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getFunctionalGroups md:includeCommands=\"" + this.includeCommands + "\" />\n           </md:mdComms>\n        </md:mdMsg>";
      };
      return GetFunctionalGroupsCommand;
  }());

  var FunctionalGroupListResponse = /** @class */ (function () {
      function FunctionalGroupListResponse(data) {
          this.name = 'FunctionalGroupList';
          this.responseType = exports.EmdiResponses.FunctionalGroupList;
          this.class = exports.EmdiClasses.Comms;
          this.groups = [];
          console.log('FunctionalGroupList =', data);
          for (var _i = 0, _a = data['md:functionalGroup']; _i < _a.length; _i++) {
              var group = _a[_i];
              console.log('group =', group);
              var groupItem = {
                  name: group['$']['md:groupName'],
              };
              this.groups.push(groupItem);
              if (group['md:commandItem'] === undefined) {
                  continue;
              }
              for (var _b = 0, _c = group['md:commandItem']; _b < _c.length; _b++) {
                  var command = _c[_b];
                  console.log('command =', command);
                  groupItem.commands.push({
                      name: command['$']['md:commandName'],
                  });
              }
          }
      }
      return FunctionalGroupListResponse;
  }());

  var EventAckCommand = /** @class */ (function () {
      function EventAckCommand() {
          this.name = 'ContentMessageAck';
          this.commandType = exports.EmdiCommands.EventAck;
          this.class = exports.EmdiClasses.EventHandler;
      }
      EventAckCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <md:eventAck />\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      return EventAckCommand;
  }());

  var EventReportEvent = /** @class */ (function () {
      function EventReportEvent(data) {
          this.name = 'EventReport';
          this.eventType = exports.EmdiEvents.EventReport;
          this.class = exports.EmdiClasses.EventHandler;
          this.ack = new EventAckCommand();
          this.eventItems = [];
          console.log('EventReportEvent =', data);
          if (data['md:eventItem'] === undefined) {
              return;
          }
          for (var _i = 0, _a = data['md:eventItem']; _i < _a.length; _i++) {
              var item = _a[_i];
              console.log('item =', item);
              var eventItem = {
                  code: item['$']['md:eventCode'],
              };
              if (eventItem.code === 'G2S_CBE101') {
                  if (item['md:cabinetStatus'][0]['$']['plc:localeId']) {
                      eventItem.item = { localeId: item['md:cabinetStatus'][0]['$']['plc:localeId'] };
                  }
                  else {
                      eventItem.item = { localeId: 'en_US' };
                  }
              }
              this.eventItems.push(eventItem);
          }
      }
      return EventReportEvent;
  }());

  var HostToContentMessageAckCommand = /** @class */ (function () {
      function HostToContentMessageAckCommand() {
          this.name = 'HostToContentMessageAck';
          this.commandType = exports.EmdiCommands.HostToContentMessageAck;
          this.class = exports.EmdiClasses.Cabinet;
      }
      HostToContentMessageAckCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <hci:hostToContentMessageAck xmlns:hci=\"http://www.gamingstandards.com/emdi/schemas/v1b/HCI\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return HostToContentMessageAckCommand;
  }());

  var HostToContentMessageEvent = /** @class */ (function () {
      function HostToContentMessageEvent(data) {
          this.name = 'HostToContentMessage';
          this.eventType = exports.EmdiEvents.HostToContentMessage;
          this.class = exports.EmdiClasses.Cabinet;
          this.ack = new HostToContentMessageAckCommand();
          this.instructionData = [];
          console.log("HostToContentMessageEvent = " + JSON.stringify(data));
          for (var _i = 0, _a = data['hci:instructionData']; _i < _a.length; _i++) {
              var instructionData = _a[_i];
              var d = atob(instructionData);
              console.log("instructionData = " + d);
              this.instructionData.push(d);
          }
      }
      return HostToContentMessageEvent;
  }());

  var MeterReportAckCommand = /** @class */ (function () {
      function MeterReportAckCommand() {
          this.name = 'MeterReportAck';
          this.commandType = exports.EmdiCommands.MeterReportAck;
          this.class = exports.EmdiClasses.Meters;
      }
      MeterReportAckCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <md:meterReportAck />\n           </md:mdMeters>\n        </md:mdMsg>";
      };
      return MeterReportAckCommand;
  }());

  var MeterReportEvent = /** @class */ (function () {
      function MeterReportEvent(data) {
          this.name = 'MeterReport';
          this.eventType = exports.EmdiEvents.MeterReport;
          this.class = exports.EmdiClasses.Meters;
          this.ack = new MeterReportAckCommand();
      }
      return MeterReportEvent;
  }());
  var MeterReportResponse = /** @class */ (function () {
      function MeterReportResponse(data) {
          this.name = 'MeterReport';
          this.responseType = exports.EmdiResponses.MeterReport;
          this.class = exports.EmdiClasses.Meters;
          console.log('MeterReportResponse =', data);
      }
      return MeterReportResponse;
  }());

  var ClearEventSubCommand = /** @class */ (function () {
      function ClearEventSubCommand() {
          this.name = 'ClearEventSub';
          this.commandType = exports.EmdiCommands.ClearEventSub;
          this.class = exports.EmdiClasses.Comms;
          this.eventSubscriptions = [];
      }
      ClearEventSubCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:clearEventSub>\n                    " + this.getEventSubs() + "\n                </md:clearEventSub>\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      ClearEventSubCommand.prototype.getEventSubs = function () {
          var xml = '';
          for (var _i = 0, _a = this.eventSubscriptions; _i < _a.length; _i++) {
              var subs = _a[_i];
              xml += "<md:eventSubscription md:eventCode=\"" + subs.code + "\" />";
          }
          return xml;
      };
      return ClearEventSubCommand;
  }());

  var ClearEventSubAckResponse = /** @class */ (function () {
      function ClearEventSubAckResponse() {
          this.name = 'ClearEventSubAck';
          this.responseType = exports.EmdiResponses.ClearEventSubAck;
          this.class = exports.EmdiClasses.EventHandler;
      }
      return ClearEventSubAckResponse;
  }());

  var ClearMeterSubCommand = /** @class */ (function () {
      function ClearMeterSubCommand() {
          this.name = 'ClearMeterSub';
          this.commandType = exports.EmdiCommands.ClearMeterSub;
          this.class = exports.EmdiClasses.Meters;
          this.meterSubscriptions = [];
      }
      ClearMeterSubCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:clearMeterSub>\n                    " + this.getMeterSubs() + "\n                </md:clearMeterSub>\n           </md:mdMeters>' +\n        </md:mdMsg>";
      };
      ClearMeterSubCommand.prototype.getMeterSubs = function () {
          var xml = '';
          for (var _i = 0, _a = this.meterSubscriptions; _i < _a.length; _i++) {
              var subs = _a[_i];
              xml += "<md:meterSubscription md:meterName=\"" + subs.name + "\" md:meterType=\"" + subs.type + "\" />";
          }
          return xml;
      };
      return ClearMeterSubCommand;
  }());

  var ContentMessageAckCommand = /** @class */ (function () {
      function ContentMessageAckCommand() {
          this.name = 'ContentMessageAck';
          this.commandType = exports.EmdiCommands.ContentMessageAck;
          this.class = exports.EmdiClasses.ContentToContent;
      }
      ContentMessageAckCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <cci:contentMessageAck />\n           </cci:mdContentToContent>\n        </md:mdMsg>";
      };
      return ContentMessageAckCommand;
  }());
  var ContentMessageAckResponse = /** @class */ (function () {
      function ContentMessageAckResponse(data) {
          this.name = 'ContentMessageAck';
          this.responseType = exports.EmdiResponses.ContentMessageAck;
          this.class = exports.EmdiClasses.ContentToContent;
          this.sessionId = 0;
          console.log('ContentMessageAckResponse: data =', data);
      }
      return ContentMessageAckResponse;
  }());

  var ContentMessageCommand = /** @class */ (function () {
      function ContentMessageCommand() {
          this.name = 'ContentMessage';
          this.commandType = exports.EmdiCommands.ContentMessage;
          this.class = exports.EmdiClasses.ContentToContent;
      }
      ContentMessageCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <cci:contentMessage cci:mediaDisplayId=\"" + this.mediaDisplayId + "\" cci:contentId=\"" + this.contentId + "\">\n                    <cci:contentData>" + btoa(this.contentData) + "</cci:contentData>\n                </cci:contentMessage>\n           </cci:mdContentToContent>\n        </md:mdMsg>";
      };
      return ContentMessageCommand;
  }());
  var ContentMessageEvent = /** @class */ (function () {
      function ContentMessageEvent(data) {
          this.name = 'ContentMessage';
          this.eventType = exports.EmdiEvents.ContentMessage;
          this.class = exports.EmdiClasses.ContentToContent;
          this.sessionId = 0;
          this.ack = new ContentMessageAckCommand();
          this.contentData = [];
          console.log('ContentMessageEvent =', data);
          this.mediaDisplayId = +data['cci:mediaDisplayId'];
          this.contentId = +data['cci:contentId'];
          for (var _i = 0, _a = data['cci:contentData']; _i < _a.length; _i++) {
              var contentData = _a[_i];
              console.log('contentData =', atob(contentData));
              this.contentData.push(atob(contentData));
          }
      }
      return ContentMessageEvent;
  }());

  var ContentToHostMessageCommand = /** @class */ (function () {
      function ContentToHostMessageCommand() {
          this.name = 'ContentToHostMessage';
          this.commandType = exports.EmdiCommands.ContentToHostMessage;
          this.class = exports.EmdiClasses.Cabinet;
      }
      ContentToHostMessageCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:hci=\"http://www.gamingstandards.com/emdi/schemas/v1b/HCI\">\n            <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <hci:contentToHostMessage>\n                    <hci:instructionData>" + btoa(this.instructionData) + "</hci:instructionData>\n                </hci:contentToHostMessage>\n            </md:mdCabinet>\n        </md:mdMsg>";
      };
      return ContentToHostMessageCommand;
  }());

  var GetActiveContentCommand = /** @class */ (function () {
      function GetActiveContentCommand() {
          this.name = 'GetActiveContent';
          this.commandType = exports.EmdiCommands.GetActiveContent;
          this.class = exports.EmdiClasses.ContentToContent;
      }
      GetActiveContentCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <cci:getActiveContent />\n           </cci:mdContentToContent>\n        </md:mdMsg>";
      };
      return GetActiveContentCommand;
  }());

  var GetCabinetStatusCommand = /** @class */ (function () {
      function GetCabinetStatusCommand() {
          this.name = 'GetCabinetStatus';
          this.commandType = exports.EmdiCommands.GetCabinetStatus;
          this.class = exports.EmdiClasses.Cabinet;
      }
      GetCabinetStatusCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:plc=\"http://www.gamingstandards.com/emdi/schemas/v1b/PLC\">\n           <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <plc:getCabinetStatus />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return GetCabinetStatusCommand;
  }());

  var GetCallAttendantStateCommand = /** @class */ (function () {
      function GetCallAttendantStateCommand() {
          this.name = 'GetCallAttendantState';
          this.commandType = exports.EmdiCommands.GetCallAttendantState;
          this.class = exports.EmdiClasses.Cabinet;
      }
      GetCallAttendantStateCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getCallAttendantState />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return GetCallAttendantStateCommand;
  }());

  var GetCardStateCommand = /** @class */ (function () {
      function GetCardStateCommand() {
          this.name = 'GetCardState';
          this.commandType = exports.EmdiCommands.GetCardState;
          this.class = exports.EmdiClasses.Cabinet;
      }
      GetCardStateCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:getCardState />\n            </md:mdCabinet>\n        </md:mdMsg>";
      };
      return GetCardStateCommand;
  }());

  var GetDeviceVisibleStateCommand = /** @class */ (function () {
      function GetDeviceVisibleStateCommand() {
          this.name = 'GetDeviceVisibleState';
          this.commandType = exports.EmdiCommands.GetDeviceVisibleState;
          this.class = exports.EmdiClasses.Cabinet;
      }
      GetDeviceVisibleStateCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getDeviceVisibleState />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return GetDeviceVisibleStateCommand;
  }());

  var GetEventSubListCommand = /** @class */ (function () {
      function GetEventSubListCommand() {
          this.name = 'GetEventSubList';
          this.commandType = exports.EmdiCommands.GetEventSubList;
          this.class = exports.EmdiClasses.EventHandler;
      }
      GetEventSubListCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getEventSubList />\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      return GetEventSubListCommand;
  }());

  var EventSubListResponse = /** @class */ (function () {
      function EventSubListResponse(data) {
          this.name = 'EventSubList';
          this.responseType = exports.EmdiResponses.EventSubList;
          this.class = exports.EmdiClasses.EventHandler;
          this.eventSubscriptions = [];
          console.log('EventSubListResponse =', data);
          if (data['md:eventSubscription'] === undefined) {
              return;
          }
          for (var _i = 0, _a = data['md:eventSubscription']; _i < _a.length; _i++) {
              var subs = _a[_i];
              console.log('subscription =', subs);
              this.eventSubscriptions.push({
                  code: subs['$']['md:eventCode'],
              });
          }
      }
      return EventSubListResponse;
  }());

  var GetMeterInfoCommand = /** @class */ (function () {
      function GetMeterInfoCommand() {
          this.name = 'GetMeterInfo';
          this.commandType = exports.EmdiCommands.GetMeterInfo;
          this.class = exports.EmdiClasses.Comms;
          this.meterSubscriptions = [];
      }
      GetMeterInfoCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:getMeterInfo>\n                    " + this.getMeterSubs() + "\n                </md:getMeterInfo>\n            </md:mdMeters>\n        </md:mdMsg>";
      };
      GetMeterInfoCommand.prototype.getMeterSubs = function () {
          var xml = '';
          for (var _i = 0, _a = this.meterSubscriptions; _i < _a.length; _i++) {
              var subs = _a[_i];
              xml += "<md:meterSubscription md:meterName=\"" + subs.name + "\" md:meterType=\"" + subs.type + "\" />";
          }
          return xml;
      };
      return GetMeterInfoCommand;
  }());

  var GetMeterSubCommand = /** @class */ (function () {
      function GetMeterSubCommand() {
          this.name = 'GetMeterSub';
          this.commandType = exports.EmdiCommands.GetMeterSub;
          this.class = exports.EmdiClasses.Meters;
      }
      GetMeterSubCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getMeterSub />\n           </md:mdMeters>\n        </md:mdMsg>";
      };
      return GetMeterSubCommand;
  }());

  var GetSupportedEventListCommand = /** @class */ (function () {
      function GetSupportedEventListCommand() {
          this.name = 'GetSupportedEventList';
          this.commandType = exports.EmdiCommands.GetSupportedEventList;
          this.class = exports.EmdiClasses.EventHandler;
      }
      GetSupportedEventListCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getSupportedEventList />\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      return GetSupportedEventListCommand;
  }());

  var GetSupportedMeterListCommand = /** @class */ (function () {
      function GetSupportedMeterListCommand() {
          this.name = 'GetSupportedMeterList';
          this.commandType = exports.EmdiCommands.GetSupportedMeterList;
          this.class = exports.EmdiClasses.Meters;
      }
      GetSupportedMeterListCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getSupportedMeterList />\n           </md:mdMeters>\n        </md:mdMsg>";
      };
      return GetSupportedMeterListCommand;
  }());

  var LogContentEventCommand = /** @class */ (function () {
      function LogContentEventCommand() {
          this.name = 'LogContentEvent';
          this.commandType = exports.EmdiCommands.LogContentEvent;
          this.class = exports.EmdiClasses.EventHandler;
      }
      LogContentEventCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:logContentEvent md:contentName=\"" + this.contentName + "\" md:eventName=\"" + this.eventName + "\" md:eventDescription=\"" + this.eventDescription + "\" />\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      return LogContentEventCommand;
  }());

  var LogContentEventAckResponse = /** @class */ (function () {
      function LogContentEventAckResponse() {
          this.name = 'LogContentEventAck';
          this.responseType = exports.EmdiResponses.LogContentEventAck;
          this.class = exports.EmdiClasses.EventHandler;
      }
      return LogContentEventAckResponse;
  }());

  var SetCallAttendantStateCommand = /** @class */ (function () {
      function SetCallAttendantStateCommand() {
          this.name = 'SetCallAttendantState';
          this.commandType = exports.EmdiCommands.SetCallAttendantState;
          this.class = exports.EmdiClasses.Cabinet;
          this.enable = false;
      }
      SetCallAttendantStateCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:setCallAttendantState md:enable=\"" + this.enable + "\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return SetCallAttendantStateCommand;
  }());

  var CallAttendantStatusResponse = /** @class */ (function () {
      function CallAttendantStatusResponse(data) {
          this.name = 'CallAttendantStatus';
          this.responseType = exports.EmdiResponses.CallAttendantStatus;
          this.class = exports.EmdiClasses.Cabinet;
          this.callAttendantActive = false;
          console.log('CallAttendantStatusResponse =', data);
          this.callAttendantActive = data['$']['md:callAttendantActive'] === 'true';
      }
      return CallAttendantStatusResponse;
  }());

  var SetCardRemovedCommand = /** @class */ (function () {
      function SetCardRemovedCommand() {
          this.name = 'SetCardRemoved';
          this.commandType = exports.EmdiCommands.SetCardRemoved;
          this.class = exports.EmdiClasses.Comms;
          this.idReaderId = 1;
      }
      SetCardRemovedCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:cpc=\"http://www.gamingstandards.com/emdi/schemas/v1b/CPC\">\n            <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <cpc:setCardRemoved cpc:idReaderId=\"" + this.idReaderId + "\" />\n            </md:mdCabinet>\n        </md:mdMsg>";
      };
      return SetCardRemovedCommand;
  }());

  var SetDeviceVisibleStateCommand = /** @class */ (function () {
      function SetDeviceVisibleStateCommand() {
          this.name = 'SetDeviceVisibleState';
          this.commandType = exports.EmdiCommands.SetDeviceVisibleState;
          this.class = exports.EmdiClasses.Cabinet;
          this.deviceVisibleState = false;
      }
      SetDeviceVisibleStateCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:setDeviceVisibleState md:deviceVisibleState=\"" + this.deviceVisibleState + "\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
      };
      return SetDeviceVisibleStateCommand;
  }());

  var SetEventSubCommand = /** @class */ (function () {
      function SetEventSubCommand() {
          this.name = 'SetEventSub';
          this.commandType = exports.EmdiCommands.SetEventSub;
          this.class = exports.EmdiClasses.Comms;
          this.eventSubscriptions = [];
      }
      SetEventSubCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:setEventSub>\n                    " + this.getEventSubs() + "\n                </md:setEventSub>\n           </md:mdEventHandler>\n        </md:mdMsg>";
      };
      SetEventSubCommand.prototype.getEventSubs = function () {
          var xml = '';
          for (var _i = 0, _a = this.eventSubscriptions; _i < _a.length; _i++) {
              var subs = _a[_i];
              xml += "<md:eventSubscription md:eventCode=\"" + subs.code + "\" />";
          }
          return xml;
      };
      return SetEventSubCommand;
  }());

  var SetMeterSubCommand = /** @class */ (function () {
      function SetMeterSubCommand() {
          this.name = 'SetMeterSub';
          this.commandType = exports.EmdiCommands.SetMeterSub;
          this.class = exports.EmdiClasses.Meters;
          this.meterSubscriptions = [];
      }
      SetMeterSubCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:setMeterSub>\n                    " + this.getMeterSubs() + "\n                </md:setMeterSub>\n            </md:mdMeters>\n        </md:mdMsg>";
      };
      SetMeterSubCommand.prototype.getMeterSubs = function () {
          var xml = '';
          for (var _i = 0, _a = this.meterSubscriptions; _i < _a.length; _i++) {
              var subs = _a[_i];
              xml += "<md:meterSubscription md:meterName=\"" + subs.name + "\" md:meterType=\"" + subs.type + "\" />";
          }
          return xml;
      };
      return SetMeterSubCommand;
  }());

  var MeterSubListResponse = /** @class */ (function () {
      function MeterSubListResponse(data) {
          this.name = 'MeterSubList';
          this.responseType = exports.EmdiResponses.MeterSubList;
          this.class = exports.EmdiClasses.Meters;
          this.meterSubscriptions = [];
          console.log('MeterSubListResponse =', data);
          if (data['md:meterSubscription'] === undefined) {
              return;
          }
          for (var _i = 0, _a = data['md:meterSubscription']; _i < _a.length; _i++) {
              var subs = _a[_i];
              console.log('subscription =', subs);
              this.meterSubscriptions.push({
                  name: subs['$']['md:meterName'],
                  text: subs['$']['md:meterType'],
              });
          }
      }
      return MeterSubListResponse;
  }());

  var ContentToHostMessageAckResponse = /** @class */ (function () {
      function ContentToHostMessageAckResponse() {
          this.name = 'ContentToHostMessageAck';
          this.responseType = exports.EmdiResponses.ContentToHostMessageAck;
          this.class = exports.EmdiClasses.Cabinet;
      }
      return ContentToHostMessageAckResponse;
  }());

  var ActiveContentListResponse = /** @class */ (function () {
      function ActiveContentListResponse(data) {
          this.name = 'ActiveContentList';
          this.responseType = exports.EmdiResponses.ActiveContentList;
          this.class = exports.EmdiClasses.ContentToContent;
          this.contentList = [];
          console.log('ActiveContentListResponse =', data);
          if (data['cci:activeContent'] === undefined) {
              return;
          }
          for (var _i = 0, _a = data['cci:activeContent']; _i < _a.length; _i++) {
              var content = _a[_i];
              console.log('content =', content);
              this.contentList.push({
                  contentId: content['$']['cci:contentId'],
                  displayId: content['$']['cci:mediaDisplayId'],
              });
          }
      }
      return ActiveContentListResponse;
  }());

  var CabinetStatusResponse = /** @class */ (function () {
      function CabinetStatusResponse(data) {
          this.name = 'CabinetStatus';
          this.responseType = exports.EmdiResponses.CabinetStatus;
          this.class = exports.EmdiClasses.Cabinet;
          console.log('CabinetStatusResponse =', data);
          this.egmState = data['$']['md:egmState'];
          this.deviceClass = data['$']['md:deviceClass'];
      }
      return CabinetStatusResponse;
  }());

  var SupportedMeterListResponse = /** @class */ (function () {
      function SupportedMeterListResponse(data) {
          this.name = 'SupportedMeterList';
          this.responseType = exports.EmdiResponses.SupportedMeterList;
          this.class = exports.EmdiClasses.Meters;
          this.supportedMeters = [];
          console.log('SupportedMeterListResponse =', data);
          for (var _i = 0, _a = data['md:supportedMeter']; _i < _a.length; _i++) {
              var meter = _a[_i];
              console.log('meter =', meter);
              this.supportedMeters.push({
                  name: meter['$']['md:meterName'],
                  type: meter['$']['md:meterType'],
              });
          }
      }
      return SupportedMeterListResponse;
  }());

  var SupportedEventListResponse = /** @class */ (function () {
      function SupportedEventListResponse(data) {
          this.name = 'SupportedEventList';
          this.responseType = exports.EmdiResponses.SupportedEventList;
          this.class = exports.EmdiClasses.EventHandler;
          this.supportedEvents = [];
          console.log('SupportedEventListResponse =', data);
          for (var _i = 0, _a = data['md:supportedEvent']; _i < _a.length; _i++) {
              var event_1 = _a[_i];
              console.log('event =', event_1);
              this.supportedEvents.push({
                  code: event_1['$']['md:eventCode'],
                  text: event_1['$']['md:eventText'],
              });
          }
      }
      return SupportedEventListResponse;
  }());

  var CardStatusResponse = /** @class */ (function () {
      function CardStatusResponse(data) {
          this.name = 'CardStatus';
          this.responseType = exports.EmdiResponses.CardStatus;
          this.class = exports.EmdiClasses.Cabinet;
          this.cardIn = false;
          console.log('CardStatusResponse =', data);
          this.cardIn = data['$']['md:cardIn'] === 'true';
          this.idReaderType = data['$']['md:idReaderType'];
          this.idNumber = data['$']['md:idNumber'];
          this.idValidExpired = data['$']['md:idValidExpired'] !== 'false'; // Defaults to true
      }
      return CardStatusResponse;
  }());

  var DeviceVisibleStatusResponse = /** @class */ (function () {
      function DeviceVisibleStatusResponse(data) {
          this.name = 'DeviceVisibleStatus';
          this.responseType = exports.EmdiResponses.DeviceVisibleStatus;
          this.class = exports.EmdiClasses.Cabinet;
          this.deviceVisibleState = false;
          console.log('DeviceVisibleStatusResponse =', data);
          if (data['$']) {
              this.deviceVisibleState = data['$']['md:deviceVisibleState'] !== 'false'; // Defaults to true
          }
          else {
              this.deviceVisibleState = true;
          }
      }
      return DeviceVisibleStatusResponse;
  }());

  var GetEgmIdCommand = /** @class */ (function () {
      function GetEgmIdCommand() {
          this.name = 'GetEgmId';
          this.commandType = exports.EmdiCommands.GetEgmId;
          this.class = exports.EmdiClasses.Host;
      }
      GetEgmIdCommand.prototype.getXml = function (sessionId) {
          return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <hst:mdHost xmlns:hst=\"http://www.aristocrat.com/emdi/schemas/v1b/HST\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <hst:getEgmId />\n           </hst:mdHost>\n        </md:mdMsg>";
      };
      return GetEgmIdCommand;
  }());

  var EgmIdResponse = /** @class */ (function () {
      function EgmIdResponse(data) {
          this.name = 'EgmId';
          this.responseType = exports.EmdiResponses.EgmId;
          this.class = exports.EmdiClasses.Host;
          console.log('EgmIdResponse: data =', data);
          this.egmId = data['$']['hst:egmId'];
      }
      return EgmIdResponse;
  }());

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  var RetryWebSocket = /** @class */ (function () {
      function RetryWebSocket(url, timeout, retries, interval) {
          if (timeout === void 0) { timeout = 1500; }
          if (retries === void 0) { retries = 30; }
          if (interval === void 0) { interval = 1000; }
          this.url = url;
          this.timeout = timeout;
          this.retries = retries;
          this.interval = interval;
          this._message = new rxjs.BehaviorSubject(null);
          this._close = new rxjs.BehaviorSubject(null);
          this._error = new rxjs.BehaviorSubject(null);
          timeout = timeout || 1500;
          retries = retries || 0;
          interval = interval || 0;
      }
      Object.defineProperty(RetryWebSocket.prototype, "message", {
          get: function () {
              return this._message.asObservable().pipe(operators.filter(function (event) { return event != null; }), operators.map(function (event) { return event; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RetryWebSocket.prototype, "close", {
          get: function () {
              return this._close.asObservable().pipe(operators.filter(function (event) { return event != null; }), operators.map(function (event) { return event; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RetryWebSocket.prototype, "error", {
          get: function () {
              return this._error.asObservable().pipe(operators.filter(function (event) { return event != null; }), operators.map(function (event) { return event; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(RetryWebSocket.prototype, "readyState", {
          get: function () {
              return this.socket.readyState;
          },
          enumerable: true,
          configurable: true
      });
      RetryWebSocket.prototype.open = function () {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this;
                          return [4 /*yield*/, this.openInternal(this.retries)];
                      case 1:
                          _a.socket = _b.sent();
                          return [2 /*return*/];
                  }
              });
          });
      };
      RetryWebSocket.prototype.openInternal = function (retries) {
          var _this = this;
          console.log('connecting to websocket! url: ' + this.url + ', remaining retries: ' + retries);
          var socket;
          return new Promise(function (resolve, reject) {
              try {
                  var timer_1 = setTimeout(function () {
                      console.log('opening websocket timed out connecting to ' + _this.url);
                      rejectPromise();
                  }, _this.timeout);
                  socket = new WebSocket(_this.url);
                  var opened_1 = false;
                  socket.onopen = function () {
                      clearTimeout(timer_1);
                      opened_1 = true;
                      console.log('websocket opened', _this.url);
                      resolve(socket);
                  };
                  socket.onerror = function (event) {
                      if (opened_1) {
                          console.log('websocket error on connection to ' + _this.url);
                          _this._error.next(event);
                      }
                  };
                  socket.onmessage = function (event) {
                      if (opened_1) {
                          _this._message.next(event);
                      }
                  };
                  socket.onclose = function (event) {
                      if (opened_1) {
                          console.log('websocket closed to ', _this.url);
                          _this._close.next(event);
                      }
                  };
              }
              catch (err) {
                  reject(err);
              }
              var rejectPromise = function () {
                  try {
                      if (socket) {
                          console.log('closing websocket connection to ' + _this.url);
                          socket.close();
                      }
                      if (retries <= 0) {
                          reject(new Error('retries exhasuted'));
                      }
                      else {
                          setTimeout(function () {
                              _this.openInternal(retries - 1).then(resolve, reject);
                          }, _this.interval);
                      }
                  }
                  catch (err) {
                      reject(err);
                  }
              };
          });
      };
      RetryWebSocket.prototype.send = function (data) {
          this.socket.send(data);
      };
      RetryWebSocket.prototype.dispose = function () {
          if (this.socket && this.socket.readyState === WebSocket.OPEN) {
              this.socket.close();
          }
      };
      return RetryWebSocket;
  }());

  var BASE_PORT = 1023;
  var EmdiService = /** @class */ (function () {
      function EmdiService() {
      }
      EmdiService.prototype.connect = function (id) {
          var port = BASE_PORT + id;
          var url = "ws://127.0.0.1:" + port;
          console.log("connecting to " + url + "...");
          return this.createSocketSubject(url);
      };
      EmdiService.prototype.createSocketSubject = function (url) {
          var replay = new rxjs.ReplaySubject();
          var observable = rxjs.Observable.create(function (obs) {
              var socket = new RetryWebSocket(url);
              socket.message.subscribe(function (e) { return obs.next(e); });
              socket.error.subscribe(function (e) { return obs.error(e); });
              socket.close.subscribe(function (e) {
                  if (e.wasClean) {
                      obs.complete();
                  }
                  else {
                      obs.error(e);
                  }
              });
              var subscription;
              socket.open().then(function () {
                  subscription = replay.subscribe(function (data) {
                      console.log('send', data);
                      if (socket.readyState === WebSocket.OPEN) {
                          socket.send(JSON.stringify(data));
                      }
                  });
              });
              return function () {
                  if (socket && socket.readyState === 1) {
                      socket.dispose();
                  }
                  if (subscription) {
                      subscription.unsubscribe();
                  }
              };
          });
          return rxjs.Subject.create(replay, observable);
      };
      return EmdiService;
  }());
  var service = new EmdiService();

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var defaults = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    exports.defaults = {
      "0.1": {
        explicitCharkey: false,
        trim: true,
        normalize: true,
        normalizeTags: false,
        attrkey: "@",
        charkey: "#",
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: false,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        childkey: '@@',
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        emptyTag: ''
      },
      "0.2": {
        explicitCharkey: false,
        trim: false,
        normalize: false,
        normalizeTags: false,
        attrkey: "$",
        charkey: "_",
        explicitArray: true,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: true,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        preserveChildrenOrder: false,
        childkey: '$$',
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        rootName: 'root',
        xmldec: {
          'version': '1.0',
          'encoding': 'UTF-8',
          'standalone': true
        },
        doctype: null,
        renderOpts: {
          'pretty': true,
          'indent': '  ',
          'newline': '\n'
        },
        headless: false,
        chunkSize: 10000,
        emptyTag: '',
        cdata: false
      }
    };

  }).call(commonjsGlobal);
  });
  var defaults_1 = defaults.defaults;

  var Utility = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject,
      slice = [].slice,
      hasProp = {}.hasOwnProperty;

    assign = function() {
      var i, key, len, source, sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length; i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key)) continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };

    isFunction = function(val) {
      return !!val && Object.prototype.toString.call(val) === '[object Function]';
    };

    isObject = function(val) {
      var ref;
      return !!val && ((ref = typeof val) === 'function' || ref === 'object');
    };

    isArray = function(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === '[object Array]';
      }
    };

    isEmpty = function(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key)) continue;
          return false;
        }
        return true;
      }
    };

    isPlainObject = function(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && (typeof ctor === 'function') && (ctor instanceof ctor) && (Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object));
    };

    getValue = function(obj) {
      if (isFunction(obj.valueOf)) {
        return obj.valueOf();
      } else {
        return obj;
      }
    };

    module.exports.assign = assign;

    module.exports.isFunction = isFunction;

    module.exports.isObject = isObject;

    module.exports.isArray = isArray;

    module.exports.isEmpty = isEmpty;

    module.exports.isPlainObject = isPlainObject;

    module.exports.getValue = getValue;

  }).call(commonjsGlobal);
  });
  var Utility_1 = Utility.assign;
  var Utility_2 = Utility.isFunction;
  var Utility_3 = Utility.isObject;
  var Utility_4 = Utility.isArray;
  var Utility_5 = Utility.isEmpty;
  var Utility_6 = Utility.isPlainObject;
  var Utility_7 = Utility.getValue;

  var XMLAttribute = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLAttribute;

    module.exports = XMLAttribute = (function() {
      function XMLAttribute(parent, name, value) {
        this.options = parent.options;
        this.stringify = parent.stringify;
        this.parent = parent;
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo(name));
        }
        if (value == null) {
          throw new Error("Missing attribute value. " + this.debugInfo(name));
        }
        this.name = this.stringify.attName(name);
        this.value = this.stringify.attValue(value);
      }

      XMLAttribute.prototype.clone = function() {
        return Object.create(this);
      };

      XMLAttribute.prototype.toString = function(options) {
        return this.options.writer.set(options).attribute(this);
      };

      XMLAttribute.prototype.debugInfo = function(name) {
        var ref, ref1;
        name = name || this.name;
        if ((name == null) && !((ref = this.parent) != null ? ref.name : void 0)) {
          return "";
        } else if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else if (!((ref1 = this.parent) != null ? ref1.name : void 0)) {
          return "attribute: {" + name + "}";
        } else {
          return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
        }
      };

      return XMLAttribute;

    })();

  }).call(commonjsGlobal);
  });

  var XMLElement = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLAttribute$$1, XMLElement, XMLNode$$1, getValue, isFunction, isObject, ref,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    ref = Utility, isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;

    XMLNode$$1 = XMLNode;

    XMLAttribute$$1 = XMLAttribute;

    module.exports = XMLElement = (function(superClass) {
      extend(XMLElement, superClass);

      function XMLElement(parent, name, attributes) {
        XMLElement.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing element name. " + this.debugInfo());
        }
        this.name = this.stringify.eleName(name);
        this.attributes = {};
        if (attributes != null) {
          this.attribute(attributes);
        }
        if (parent.isDocument) {
          this.isRoot = true;
          this.documentObject = parent;
          parent.rootObject = this;
        }
      }

      XMLElement.prototype.clone = function() {
        var att, attName, clonedSelf, ref1;
        clonedSelf = Object.create(this);
        if (clonedSelf.isRoot) {
          clonedSelf.documentObject = null;
        }
        clonedSelf.attributes = {};
        ref1 = this.attributes;
        for (attName in ref1) {
          if (!hasProp.call(ref1, attName)) continue;
          att = ref1[attName];
          clonedSelf.attributes[attName] = att.clone();
        }
        clonedSelf.children = [];
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone();
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
        return clonedSelf;
      };

      XMLElement.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || (value != null)) {
            this.attributes[name] = new XMLAttribute$$1(this, name, value);
          }
        }
        return this;
      };

      XMLElement.prototype.removeAttribute = function(name) {
        var attName, i, len;
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo());
        }
        name = getValue(name);
        if (Array.isArray(name)) {
          for (i = 0, len = name.length; i < len; i++) {
            attName = name[i];
            delete this.attributes[attName];
          }
        } else {
          delete this.attributes[name];
        }
        return this;
      };

      XMLElement.prototype.toString = function(options) {
        return this.options.writer.set(options).element(this);
      };

      XMLElement.prototype.att = function(name, value) {
        return this.attribute(name, value);
      };

      XMLElement.prototype.a = function(name, value) {
        return this.attribute(name, value);
      };

      return XMLElement;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLCData = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLCData, XMLNode$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLCData = (function(superClass) {
      extend(XMLCData, superClass);

      function XMLCData(parent, text) {
        XMLCData.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing CDATA text. " + this.debugInfo());
        }
        this.text = this.stringify.cdata(text);
      }

      XMLCData.prototype.clone = function() {
        return Object.create(this);
      };

      XMLCData.prototype.toString = function(options) {
        return this.options.writer.set(options).cdata(this);
      };

      return XMLCData;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLComment = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLComment, XMLNode$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLComment = (function(superClass) {
      extend(XMLComment, superClass);

      function XMLComment(parent, text) {
        XMLComment.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing comment text. " + this.debugInfo());
        }
        this.text = this.stringify.comment(text);
      }

      XMLComment.prototype.clone = function() {
        return Object.create(this);
      };

      XMLComment.prototype.toString = function(options) {
        return this.options.writer.set(options).comment(this);
      };

      return XMLComment;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDeclaration = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDeclaration, XMLNode$$1, isObject,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    isObject = Utility.isObject;

    XMLNode$$1 = XMLNode;

    module.exports = XMLDeclaration = (function(superClass) {
      extend(XMLDeclaration, superClass);

      function XMLDeclaration(parent, version, encoding, standalone) {
        var ref;
        XMLDeclaration.__super__.constructor.call(this, parent);
        if (isObject(version)) {
          ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
        }
        if (!version) {
          version = '1.0';
        }
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }

      XMLDeclaration.prototype.toString = function(options) {
        return this.options.writer.set(options).declaration(this);
      };

      return XMLDeclaration;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDTDAttList = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDTDAttList, XMLNode$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLDTDAttList = (function(superClass) {
      extend(XMLDTDAttList, superClass);

      function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        XMLDTDAttList.__super__.constructor.call(this, parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
        }
        if (defaultValueType.indexOf('#') !== 0) {
          defaultValueType = '#' + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        this.elementName = this.stringify.eleName(elementName);
        this.attributeName = this.stringify.attName(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        this.defaultValueType = defaultValueType;
      }

      XMLDTDAttList.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdAttList(this);
      };

      return XMLDTDAttList;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDTDEntity = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDTDEntity, XMLNode$$1, isObject,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    isObject = Utility.isObject;

    XMLNode$$1 = XMLNode;

    module.exports = XMLDTDEntity = (function(superClass) {
      extend(XMLDTDEntity, superClass);

      function XMLDTDEntity(parent, pe, name, value) {
        XMLDTDEntity.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD entity name. " + this.debugInfo(name));
        }
        if (value == null) {
          throw new Error("Missing DTD entity value. " + this.debugInfo(name));
        }
        this.pe = !!pe;
        this.name = this.stringify.eleName(name);
        if (!isObject(value)) {
          this.value = this.stringify.dtdEntityValue(value);
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
          }
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
          if (value.nData != null) {
            this.nData = this.stringify.dtdNData(value.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
          }
        }
      }

      XMLDTDEntity.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdEntity(this);
      };

      return XMLDTDEntity;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDTDElement = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDTDElement, XMLNode$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLDTDElement = (function(superClass) {
      extend(XMLDTDElement, superClass);

      function XMLDTDElement(parent, name, value) {
        XMLDTDElement.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (!value) {
          value = '(#PCDATA)';
        }
        if (Array.isArray(value)) {
          value = '(' + value.join(',') + ')';
        }
        this.name = this.stringify.eleName(name);
        this.value = this.stringify.dtdElementValue(value);
      }

      XMLDTDElement.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdElement(this);
      };

      return XMLDTDElement;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDTDNotation = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDTDNotation, XMLNode$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLDTDNotation = (function(superClass) {
      extend(XMLDTDNotation, superClass);

      function XMLDTDNotation(parent, name, value) {
        XMLDTDNotation.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD notation name. " + this.debugInfo(name));
        }
        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
        }
        this.name = this.stringify.eleName(name);
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
      }

      XMLDTDNotation.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdNotation(this);
      };

      return XMLDTDNotation;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDocType = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDTDAttList$$1, XMLDTDElement$$1, XMLDTDEntity$$1, XMLDTDNotation$$1, XMLDocType, XMLNode$$1, isObject,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    isObject = Utility.isObject;

    XMLNode$$1 = XMLNode;

    XMLDTDAttList$$1 = XMLDTDAttList;

    XMLDTDEntity$$1 = XMLDTDEntity;

    XMLDTDElement$$1 = XMLDTDElement;

    XMLDTDNotation$$1 = XMLDTDNotation;

    module.exports = XMLDocType = (function(superClass) {
      extend(XMLDocType, superClass);

      function XMLDocType(parent, pubID, sysID) {
        var ref, ref1;
        XMLDocType.__super__.constructor.call(this, parent);
        this.name = "!DOCTYPE";
        this.documentObject = parent;
        if (isObject(pubID)) {
          ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
        }
        if (sysID == null) {
          ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
        }
        if (pubID != null) {
          this.pubID = this.stringify.dtdPubID(pubID);
        }
        if (sysID != null) {
          this.sysID = this.stringify.dtdSysID(sysID);
        }
      }

      XMLDocType.prototype.element = function(name, value) {
        var child;
        child = new XMLDTDElement$$1(this, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var child;
        child = new XMLDTDAttList$$1(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.entity = function(name, value) {
        var child;
        child = new XMLDTDEntity$$1(this, false, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.pEntity = function(name, value) {
        var child;
        child = new XMLDTDEntity$$1(this, true, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.notation = function(name, value) {
        var child;
        child = new XMLDTDNotation$$1(this, name, value);
        this.children.push(child);
        return this;
      };

      XMLDocType.prototype.toString = function(options) {
        return this.options.writer.set(options).docType(this);
      };

      XMLDocType.prototype.ele = function(name, value) {
        return this.element(name, value);
      };

      XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
      };

      XMLDocType.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };

      XMLDocType.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };

      XMLDocType.prototype.not = function(name, value) {
        return this.notation(name, value);
      };

      XMLDocType.prototype.up = function() {
        return this.root() || this.documentObject;
      };

      return XMLDocType;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLRaw = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLNode$$1, XMLRaw,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLRaw = (function(superClass) {
      extend(XMLRaw, superClass);

      function XMLRaw(parent, text) {
        XMLRaw.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing raw text. " + this.debugInfo());
        }
        this.value = this.stringify.raw(text);
      }

      XMLRaw.prototype.clone = function() {
        return Object.create(this);
      };

      XMLRaw.prototype.toString = function(options) {
        return this.options.writer.set(options).raw(this);
      };

      return XMLRaw;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLText = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLNode$$1, XMLText,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLText = (function(superClass) {
      extend(XMLText, superClass);

      function XMLText(parent, text) {
        XMLText.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing element text. " + this.debugInfo());
        }
        this.value = this.stringify.eleText(text);
      }

      XMLText.prototype.clone = function() {
        return Object.create(this);
      };

      XMLText.prototype.toString = function(options) {
        return this.options.writer.set(options).text(this);
      };

      return XMLText;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLProcessingInstruction = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLNode$$1, XMLProcessingInstruction,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLNode$$1 = XMLNode;

    module.exports = XMLProcessingInstruction = (function(superClass) {
      extend(XMLProcessingInstruction, superClass);

      function XMLProcessingInstruction(parent, target, value) {
        XMLProcessingInstruction.__super__.constructor.call(this, parent);
        if (target == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.target = this.stringify.insTarget(target);
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }

      XMLProcessingInstruction.prototype.clone = function() {
        return Object.create(this);
      };

      XMLProcessingInstruction.prototype.toString = function(options) {
        return this.options.writer.set(options).processingInstruction(this);
      };

      return XMLProcessingInstruction;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLNode = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLCData$$1, XMLComment$$1, XMLDeclaration$$1, XMLDocType$$1, XMLElement$$1, XMLNode, XMLProcessingInstruction$$1, XMLRaw$$1, XMLText$$1, getValue, isEmpty, isFunction, isObject, ref,
      hasProp = {}.hasOwnProperty;

    ref = Utility, isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty, getValue = ref.getValue;

    XMLElement$$1 = null;

    XMLCData$$1 = null;

    XMLComment$$1 = null;

    XMLDeclaration$$1 = null;

    XMLDocType$$1 = null;

    XMLRaw$$1 = null;

    XMLText$$1 = null;

    XMLProcessingInstruction$$1 = null;

    module.exports = XMLNode = (function() {
      function XMLNode(parent) {
        this.parent = parent;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.children = [];
        if (!XMLElement$$1) {
          XMLElement$$1 = XMLElement;
          XMLCData$$1 = XMLCData;
          XMLComment$$1 = XMLComment;
          XMLDeclaration$$1 = XMLDeclaration;
          XMLDocType$$1 = XMLDocType;
          XMLRaw$$1 = XMLRaw;
          XMLText$$1 = XMLText;
          XMLProcessingInstruction$$1 = XMLProcessingInstruction;
        }
      }

      XMLNode.prototype.element = function(name, attributes, text) {
        var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
        lastChild = null;
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        if (name != null) {
          name = getValue(name);
        }
        if (Array.isArray(name)) {
          for (j = 0, len = name.length; j < len; j++) {
            item = name[j];
            lastChild = this.element(item);
          }
        } else if (isFunction(name)) {
          lastChild = this.element(name.apply());
        } else if (isObject(name)) {
          for (key in name) {
            if (!hasProp.call(name, key)) continue;
            val = name[key];
            if (isFunction(val)) {
              val = val.apply();
            }
            if ((isObject(val)) && (isEmpty(val))) {
              val = null;
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
              lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
            } else if (!this.options.separateArrayItems && Array.isArray(val)) {
              for (k = 0, len1 = val.length; k < len1; k++) {
                item = val[k];
                childNode = {};
                childNode[key] = item;
                lastChild = this.element(childNode);
              }
            } else if (isObject(val)) {
              lastChild = this.element(key);
              lastChild.element(val);
            } else {
              lastChild = this.element(key, val);
            }
          }
        } else {
          if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
            lastChild = this.text(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
            lastChild = this.cdata(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
            lastChild = this.comment(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
            lastChild = this.raw(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
          } else {
            lastChild = this.node(name, attributes, text);
          }
        }
        if (lastChild == null) {
          throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
        }
        return lastChild;
      };

      XMLNode.prototype.insertBefore = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };

      XMLNode.prototype.insertAfter = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };

      XMLNode.prototype.remove = function() {
        var i, ref1;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        }
        i = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
        return this.parent;
      };

      XMLNode.prototype.node = function(name, attributes, text) {
        var child, ref1;
        if (name != null) {
          name = getValue(name);
        }
        attributes || (attributes = {});
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        child = new XMLElement$$1(this, name, attributes);
        if (text != null) {
          child.text(text);
        }
        this.children.push(child);
        return child;
      };

      XMLNode.prototype.text = function(value) {
        var child;
        child = new XMLText$$1(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.cdata = function(value) {
        var child;
        child = new XMLCData$$1(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.comment = function(value) {
        var child;
        child = new XMLComment$$1(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.commentBefore = function(value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.commentAfter = function(value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.raw = function(value) {
        var child;
        child = new XMLRaw$$1(this, value);
        this.children.push(child);
        return this;
      };

      XMLNode.prototype.instruction = function(target, value) {
        var insTarget, insValue, instruction, j, len;
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (j = 0, len = target.length; j < len; j++) {
            insTarget = target[j];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          instruction = new XMLProcessingInstruction$$1(this, target, value);
          this.children.push(instruction);
        }
        return this;
      };

      XMLNode.prototype.instructionBefore = function(target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.instructionAfter = function(target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };

      XMLNode.prototype.declaration = function(version, encoding, standalone) {
        var doc, xmldec;
        doc = this.document();
        xmldec = new XMLDeclaration$$1(doc, version, encoding, standalone);
        if (doc.children[0] instanceof XMLDeclaration$$1) {
          doc.children[0] = xmldec;
        } else {
          doc.children.unshift(xmldec);
        }
        return doc.root() || doc;
      };

      XMLNode.prototype.doctype = function(pubID, sysID) {
        var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
        doc = this.document();
        doctype = new XMLDocType$$1(doc, pubID, sysID);
        ref1 = doc.children;
        for (i = j = 0, len = ref1.length; j < len; i = ++j) {
          child = ref1[i];
          if (child instanceof XMLDocType$$1) {
            doc.children[i] = doctype;
            return doctype;
          }
        }
        ref2 = doc.children;
        for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
          child = ref2[i];
          if (child.isRoot) {
            doc.children.splice(i, 0, doctype);
            return doctype;
          }
        }
        doc.children.push(doctype);
        return doctype;
      };

      XMLNode.prototype.up = function() {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };

      XMLNode.prototype.root = function() {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node.rootObject;
          } else if (node.isRoot) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };

      XMLNode.prototype.document = function() {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };

      XMLNode.prototype.end = function(options) {
        return this.document().end(options);
      };

      XMLNode.prototype.prev = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i < 1) {
          throw new Error("Already at the first node. " + this.debugInfo());
        }
        return this.parent.children[i - 1];
      };

      XMLNode.prototype.next = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i === -1 || i === this.parent.children.length - 1) {
          throw new Error("Already at the last node. " + this.debugInfo());
        }
        return this.parent.children[i + 1];
      };

      XMLNode.prototype.importDocument = function(doc) {
        var clonedRoot;
        clonedRoot = doc.root().clone();
        clonedRoot.parent = this;
        clonedRoot.isRoot = false;
        this.children.push(clonedRoot);
        return this;
      };

      XMLNode.prototype.debugInfo = function(name) {
        var ref1, ref2;
        name = name || this.name;
        if ((name == null) && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
          return "";
        } else if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
          return "node: <" + name + ">";
        } else {
          return "node: <" + name + ">, parent: <" + this.parent.name + ">";
        }
      };

      XMLNode.prototype.ele = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLNode.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLNode.prototype.txt = function(value) {
        return this.text(value);
      };

      XMLNode.prototype.dat = function(value) {
        return this.cdata(value);
      };

      XMLNode.prototype.com = function(value) {
        return this.comment(value);
      };

      XMLNode.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };

      XMLNode.prototype.doc = function() {
        return this.document();
      };

      XMLNode.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };

      XMLNode.prototype.dtd = function(pubID, sysID) {
        return this.doctype(pubID, sysID);
      };

      XMLNode.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLNode.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLNode.prototype.t = function(value) {
        return this.text(value);
      };

      XMLNode.prototype.d = function(value) {
        return this.cdata(value);
      };

      XMLNode.prototype.c = function(value) {
        return this.comment(value);
      };

      XMLNode.prototype.r = function(value) {
        return this.raw(value);
      };

      XMLNode.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };

      XMLNode.prototype.u = function() {
        return this.up();
      };

      XMLNode.prototype.importXMLBuilder = function(doc) {
        return this.importDocument(doc);
      };

      return XMLNode;

    })();

  }).call(commonjsGlobal);
  });

  var XMLStringifier = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLStringifier,
      bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
      hasProp = {}.hasOwnProperty;

    module.exports = XMLStringifier = (function() {
      function XMLStringifier(options) {
        this.assertLegalChar = bind(this.assertLegalChar, this);
        var key, ref, value;
        options || (options = {});
        this.noDoubleEncoding = options.noDoubleEncoding;
        ref = options.stringify || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
      }

      XMLStringifier.prototype.eleName = function(val) {
        val = '' + val || '';
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.eleText = function(val) {
        val = '' + val || '';
        return this.assertLegalChar(this.elEscape(val));
      };

      XMLStringifier.prototype.cdata = function(val) {
        val = '' + val || '';
        val = val.replace(']]>', ']]]]><![CDATA[>');
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.comment = function(val) {
        val = '' + val || '';
        if (val.match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + val);
        }
        return this.assertLegalChar(val);
      };

      XMLStringifier.prototype.raw = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.attName = function(val) {
        return val = '' + val || '';
      };

      XMLStringifier.prototype.attValue = function(val) {
        val = '' + val || '';
        return this.attEscape(val);
      };

      XMLStringifier.prototype.insTarget = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.insValue = function(val) {
        val = '' + val || '';
        if (val.match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlVersion = function(val) {
        val = '' + val || '';
        if (!val.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlEncoding = function(val) {
        val = '' + val || '';
        if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
          throw new Error("Invalid encoding: " + val);
        }
        return val;
      };

      XMLStringifier.prototype.xmlStandalone = function(val) {
        if (val) {
          return "yes";
        } else {
          return "no";
        }
      };

      XMLStringifier.prototype.dtdPubID = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdSysID = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdElementValue = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdAttType = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdAttDefault = function(val) {
        if (val != null) {
          return '' + val || '';
        } else {
          return val;
        }
      };

      XMLStringifier.prototype.dtdEntityValue = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.dtdNData = function(val) {
        return '' + val || '';
      };

      XMLStringifier.prototype.convertAttKey = '@';

      XMLStringifier.prototype.convertPIKey = '?';

      XMLStringifier.prototype.convertTextKey = '#text';

      XMLStringifier.prototype.convertCDataKey = '#cdata';

      XMLStringifier.prototype.convertCommentKey = '#comment';

      XMLStringifier.prototype.convertRawKey = '#raw';

      XMLStringifier.prototype.assertLegalChar = function(str) {
        var res;
        res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
        if (res) {
          throw new Error("Invalid character in string: " + str + " at index " + res.index);
        }
        return str;
      };

      XMLStringifier.prototype.elEscape = function(str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
      };

      XMLStringifier.prototype.attEscape = function(str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
      };

      return XMLStringifier;

    })();

  }).call(commonjsGlobal);
  });

  var XMLWriterBase = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLWriterBase,
      hasProp = {}.hasOwnProperty;

    module.exports = XMLWriterBase = (function() {
      function XMLWriterBase(options) {
        var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
        options || (options = {});
        this.pretty = options.pretty || false;
        this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
        if (this.pretty) {
          this.indent = (ref1 = options.indent) != null ? ref1 : '  ';
          this.newline = (ref2 = options.newline) != null ? ref2 : '\n';
          this.offset = (ref3 = options.offset) != null ? ref3 : 0;
          this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
        } else {
          this.indent = '';
          this.newline = '';
          this.offset = 0;
          this.dontprettytextnodes = 0;
        }
        this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : '';
        if (this.spacebeforeslash === true) {
          this.spacebeforeslash = ' ';
        }
        this.newlinedefault = this.newline;
        this.prettydefault = this.pretty;
        ref6 = options.writer || {};
        for (key in ref6) {
          if (!hasProp.call(ref6, key)) continue;
          value = ref6[key];
          this[key] = value;
        }
      }

      XMLWriterBase.prototype.set = function(options) {
        var key, ref, value;
        options || (options = {});
        if ("pretty" in options) {
          this.pretty = options.pretty;
        }
        if ("allowEmpty" in options) {
          this.allowEmpty = options.allowEmpty;
        }
        if (this.pretty) {
          this.indent = "indent" in options ? options.indent : '  ';
          this.newline = "newline" in options ? options.newline : '\n';
          this.offset = "offset" in options ? options.offset : 0;
          this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
        } else {
          this.indent = '';
          this.newline = '';
          this.offset = 0;
          this.dontprettytextnodes = 0;
        }
        this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : '';
        if (this.spacebeforeslash === true) {
          this.spacebeforeslash = ' ';
        }
        this.newlinedefault = this.newline;
        this.prettydefault = this.pretty;
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
        return this;
      };

      XMLWriterBase.prototype.space = function(level) {
        var indent;
        if (this.pretty) {
          indent = (level || 0) + this.offset + 1;
          if (indent > 0) {
            return new Array(indent).join(this.indent);
          } else {
            return '';
          }
        } else {
          return '';
        }
      };

      return XMLWriterBase;

    })();

  }).call(commonjsGlobal);
  });

  var XMLStringWriter = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLCData$$1, XMLComment$$1, XMLDTDAttList$$1, XMLDTDElement$$1, XMLDTDEntity$$1, XMLDTDNotation$$1, XMLDeclaration$$1, XMLDocType$$1, XMLElement$$1, XMLProcessingInstruction$$1, XMLRaw$$1, XMLStringWriter, XMLText$$1, XMLWriterBase$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLDeclaration$$1 = XMLDeclaration;

    XMLDocType$$1 = XMLDocType;

    XMLCData$$1 = XMLCData;

    XMLComment$$1 = XMLComment;

    XMLElement$$1 = XMLElement;

    XMLRaw$$1 = XMLRaw;

    XMLText$$1 = XMLText;

    XMLProcessingInstruction$$1 = XMLProcessingInstruction;

    XMLDTDAttList$$1 = XMLDTDAttList;

    XMLDTDElement$$1 = XMLDTDElement;

    XMLDTDEntity$$1 = XMLDTDEntity;

    XMLDTDNotation$$1 = XMLDTDNotation;

    XMLWriterBase$$1 = XMLWriterBase;

    module.exports = XMLStringWriter = (function(superClass) {
      extend(XMLStringWriter, superClass);

      function XMLStringWriter(options) {
        XMLStringWriter.__super__.constructor.call(this, options);
      }

      XMLStringWriter.prototype.document = function(doc) {
        var child, i, len, r, ref;
        this.textispresent = false;
        r = '';
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += (function() {
            switch (false) {
              case !(child instanceof XMLDeclaration$$1):
                return this.declaration(child);
              case !(child instanceof XMLDocType$$1):
                return this.docType(child);
              case !(child instanceof XMLComment$$1):
                return this.comment(child);
              case !(child instanceof XMLProcessingInstruction$$1):
                return this.processingInstruction(child);
              default:
                return this.element(child, 0);
            }
          }).call(this);
        }
        if (this.pretty && r.slice(-this.newline.length) === this.newline) {
          r = r.slice(0, -this.newline.length);
        }
        return r;
      };

      XMLStringWriter.prototype.attribute = function(att) {
        return ' ' + att.name + '="' + att.value + '"';
      };

      XMLStringWriter.prototype.cdata = function(node, level) {
        return this.space(level) + '<![CDATA[' + node.text + ']]>' + this.newline;
      };

      XMLStringWriter.prototype.comment = function(node, level) {
        return this.space(level) + '<!-- ' + node.text + ' -->' + this.newline;
      };

      XMLStringWriter.prototype.declaration = function(node, level) {
        var r;
        r = this.space(level);
        r += '<?xml version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        r += this.spacebeforeslash + '?>';
        r += this.newline;
        return r;
      };

      XMLStringWriter.prototype.docType = function(node, level) {
        var child, i, len, r, ref;
        level || (level = 0);
        r = this.space(level);
        r += '<!DOCTYPE ' + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += ' [';
          r += this.newline;
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += (function() {
              switch (false) {
                case !(child instanceof XMLDTDAttList$$1):
                  return this.dtdAttList(child, level + 1);
                case !(child instanceof XMLDTDElement$$1):
                  return this.dtdElement(child, level + 1);
                case !(child instanceof XMLDTDEntity$$1):
                  return this.dtdEntity(child, level + 1);
                case !(child instanceof XMLDTDNotation$$1):
                  return this.dtdNotation(child, level + 1);
                case !(child instanceof XMLCData$$1):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment$$1):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLProcessingInstruction$$1):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown DTD node type: " + child.constructor.name);
              }
            }).call(this);
          }
          r += ']';
        }
        r += this.spacebeforeslash + '>';
        r += this.newline;
        return r;
      };

      XMLStringWriter.prototype.element = function(node, level) {
        var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
        level || (level = 0);
        textispresentwasset = false;
        if (this.textispresent) {
          this.newline = '';
          this.pretty = false;
        } else {
          this.newline = this.newlinedefault;
          this.pretty = this.prettydefault;
        }
        space = this.space(level);
        r = '';
        r += space + '<' + node.name;
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          r += this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function(e) {
          return e.value === '';
        })) {
          if (this.allowEmpty) {
            r += '></' + node.name + '>' + this.newline;
          } else {
            r += this.spacebeforeslash + '/>' + this.newline;
          }
        } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
          r += '>';
          r += node.children[0].value;
          r += '</' + node.name + '>' + this.newline;
        } else {
          if (this.dontprettytextnodes) {
            ref1 = node.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              if (child.value != null) {
                this.textispresent++;
                textispresentwasset = true;
                break;
              }
            }
          }
          if (this.textispresent) {
            this.newline = '';
            this.pretty = false;
            space = this.space(level);
          }
          r += '>' + this.newline;
          ref2 = node.children;
          for (j = 0, len1 = ref2.length; j < len1; j++) {
            child = ref2[j];
            r += (function() {
              switch (false) {
                case !(child instanceof XMLCData$$1):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment$$1):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLElement$$1):
                  return this.element(child, level + 1);
                case !(child instanceof XMLRaw$$1):
                  return this.raw(child, level + 1);
                case !(child instanceof XMLText$$1):
                  return this.text(child, level + 1);
                case !(child instanceof XMLProcessingInstruction$$1):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown XML node type: " + child.constructor.name);
              }
            }).call(this);
          }
          if (textispresentwasset) {
            this.textispresent--;
          }
          if (!this.textispresent) {
            this.newline = this.newlinedefault;
            this.pretty = this.prettydefault;
          }
          r += space + '</' + node.name + '>' + this.newline;
        }
        return r;
      };

      XMLStringWriter.prototype.processingInstruction = function(node, level) {
        var r;
        r = this.space(level) + '<?' + node.target;
        if (node.value) {
          r += ' ' + node.value;
        }
        r += this.spacebeforeslash + '?>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.raw = function(node, level) {
        return this.space(level) + node.value + this.newline;
      };

      XMLStringWriter.prototype.text = function(node, level) {
        return this.space(level) + node.value + this.newline;
      };

      XMLStringWriter.prototype.dtdAttList = function(node, level) {
        var r;
        r = this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
        if (node.defaultValueType !== '#DEFAULT') {
          r += ' ' + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.dtdElement = function(node, level) {
        return this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value + this.spacebeforeslash + '>' + this.newline;
      };

      XMLStringWriter.prototype.dtdEntity = function(node, level) {
        var r;
        r = this.space(level) + '<!ENTITY';
        if (node.pe) {
          r += ' %';
        }
        r += ' ' + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += ' NDATA ' + node.nData;
          }
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.dtdNotation = function(node, level) {
        var r;
        r = this.space(level) + '<!NOTATION ' + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        r += this.spacebeforeslash + '>' + this.newline;
        return r;
      };

      XMLStringWriter.prototype.openNode = function(node, level) {
        var att, name, r, ref;
        level || (level = 0);
        if (node instanceof XMLElement$$1) {
          r = this.space(level) + '<' + node.name;
          ref = node.attributes;
          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            r += this.attribute(att);
          }
          r += (node.children ? '>' : '/>') + this.newline;
          return r;
        } else {
          r = this.space(level) + '<!DOCTYPE ' + node.rootNodeName;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          r += (node.children ? ' [' : '>') + this.newline;
          return r;
        }
      };

      XMLStringWriter.prototype.closeNode = function(node, level) {
        level || (level = 0);
        switch (false) {
          case !(node instanceof XMLElement$$1):
            return this.space(level) + '</' + node.name + '>' + this.newline;
          case !(node instanceof XMLDocType$$1):
            return this.space(level) + ']>' + this.newline;
        }
      };

      return XMLStringWriter;

    })(XMLWriterBase$$1);

  }).call(commonjsGlobal);
  });

  var XMLDocument = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDocument, XMLNode$$1, XMLStringWriter$$1, XMLStringifier$$1, isPlainObject,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    isPlainObject = Utility.isPlainObject;

    XMLNode$$1 = XMLNode;

    XMLStringifier$$1 = XMLStringifier;

    XMLStringWriter$$1 = XMLStringWriter;

    module.exports = XMLDocument = (function(superClass) {
      extend(XMLDocument, superClass);

      function XMLDocument(options) {
        XMLDocument.__super__.constructor.call(this, null);
        this.name = "?xml";
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter$$1();
        }
        this.options = options;
        this.stringify = new XMLStringifier$$1(options);
        this.isDocument = true;
      }

      XMLDocument.prototype.end = function(writer) {
        var writerOptions;
        if (!writer) {
          writer = this.options.writer;
        } else if (isPlainObject(writer)) {
          writerOptions = writer;
          writer = this.options.writer.set(writerOptions);
        }
        return writer.document(this);
      };

      XMLDocument.prototype.toString = function(options) {
        return this.options.writer.set(options).document(this);
      };

      return XMLDocument;

    })(XMLNode$$1);

  }).call(commonjsGlobal);
  });

  var XMLDocumentCB = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLAttribute$$1, XMLCData$$1, XMLComment$$1, XMLDTDAttList$$1, XMLDTDElement$$1, XMLDTDEntity$$1, XMLDTDNotation$$1, XMLDeclaration$$1, XMLDocType$$1, XMLDocumentCB, XMLElement$$1, XMLProcessingInstruction$$1, XMLRaw$$1, XMLStringWriter$$1, XMLStringifier$$1, XMLText$$1, getValue, isFunction, isObject, isPlainObject, ref,
      hasProp = {}.hasOwnProperty;

    ref = Utility, isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;

    XMLElement$$1 = XMLElement;

    XMLCData$$1 = XMLCData;

    XMLComment$$1 = XMLComment;

    XMLRaw$$1 = XMLRaw;

    XMLText$$1 = XMLText;

    XMLProcessingInstruction$$1 = XMLProcessingInstruction;

    XMLDeclaration$$1 = XMLDeclaration;

    XMLDocType$$1 = XMLDocType;

    XMLDTDAttList$$1 = XMLDTDAttList;

    XMLDTDEntity$$1 = XMLDTDEntity;

    XMLDTDElement$$1 = XMLDTDElement;

    XMLDTDNotation$$1 = XMLDTDNotation;

    XMLAttribute$$1 = XMLAttribute;

    XMLStringifier$$1 = XMLStringifier;

    XMLStringWriter$$1 = XMLStringWriter;

    module.exports = XMLDocumentCB = (function() {
      function XMLDocumentCB(options, onData, onEnd) {
        var writerOptions;
        this.name = "?xml";
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter$$1(options);
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter$$1(writerOptions);
        }
        this.options = options;
        this.writer = options.writer;
        this.stringify = new XMLStringifier$$1(options);
        this.onDataCallback = onData || function() {};
        this.onEndCallback = onEnd || function() {};
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }

      XMLDocumentCB.prototype.node = function(name, attributes, text) {
        var ref1;
        if (name == null) {
          throw new Error("Missing node name.");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(name));
        }
        this.openCurrent();
        name = getValue(name);
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        this.currentNode = new XMLElement$$1(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      };

      XMLDocumentCB.prototype.element = function(name, attributes, text) {
        if (this.currentNode && this.currentNode instanceof XMLDocType$$1) {
          return this.dtdElement.apply(this, arguments);
        } else {
          return this.node(name, attributes, text);
        }
      };

      XMLDocumentCB.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
        }
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || (value != null)) {
            this.currentNode.attributes[name] = new XMLAttribute$$1(this, name, value);
          }
        }
        return this;
      };

      XMLDocumentCB.prototype.text = function(value) {
        var node;
        this.openCurrent();
        node = new XMLText$$1(this, value);
        this.onData(this.writer.text(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.cdata = function(value) {
        var node;
        this.openCurrent();
        node = new XMLCData$$1(this, value);
        this.onData(this.writer.cdata(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.comment = function(value) {
        var node;
        this.openCurrent();
        node = new XMLComment$$1(this, value);
        this.onData(this.writer.comment(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.raw = function(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw$$1(this, value);
        this.onData(this.writer.raw(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.instruction = function(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length; i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction$$1(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      };

      XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        node = new XMLDeclaration$$1(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name.");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }
        this.currentNode = new XMLDocType$$1(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };

      XMLDocumentCB.prototype.dtdElement = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement$$1(this, name, value);
        this.onData(this.writer.dtdElement(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList$$1(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.entity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity$$1(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.pEntity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity$$1(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.notation = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation$$1(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };

      XMLDocumentCB.prototype.up = function() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };

      XMLDocumentCB.prototype.end = function() {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };

      XMLDocumentCB.prototype.openCurrent = function() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };

      XMLDocumentCB.prototype.openNode = function(node) {
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node instanceof XMLElement$$1) {
            this.root = node;
          }
          this.onData(this.writer.openNode(node, this.currentLevel), this.currentLevel);
          return node.isOpen = true;
        }
      };

      XMLDocumentCB.prototype.closeNode = function(node) {
        if (!node.isClosed) {
          this.onData(this.writer.closeNode(node, this.currentLevel), this.currentLevel);
          return node.isClosed = true;
        }
      };

      XMLDocumentCB.prototype.onData = function(chunk, level) {
        this.documentStarted = true;
        return this.onDataCallback(chunk, level + 1);
      };

      XMLDocumentCB.prototype.onEnd = function() {
        this.documentCompleted = true;
        return this.onEndCallback();
      };

      XMLDocumentCB.prototype.debugInfo = function(name) {
        if (name == null) {
          return "";
        } else {
          return "node: <" + name + ">";
        }
      };

      XMLDocumentCB.prototype.ele = function() {
        return this.element.apply(this, arguments);
      };

      XMLDocumentCB.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLDocumentCB.prototype.txt = function(value) {
        return this.text(value);
      };

      XMLDocumentCB.prototype.dat = function(value) {
        return this.cdata(value);
      };

      XMLDocumentCB.prototype.com = function(value) {
        return this.comment(value);
      };

      XMLDocumentCB.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };

      XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };

      XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      };

      XMLDocumentCB.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };

      XMLDocumentCB.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };

      XMLDocumentCB.prototype.t = function(value) {
        return this.text(value);
      };

      XMLDocumentCB.prototype.d = function(value) {
        return this.cdata(value);
      };

      XMLDocumentCB.prototype.c = function(value) {
        return this.comment(value);
      };

      XMLDocumentCB.prototype.r = function(value) {
        return this.raw(value);
      };

      XMLDocumentCB.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };

      XMLDocumentCB.prototype.att = function() {
        if (this.currentNode && this.currentNode instanceof XMLDocType$$1) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };

      XMLDocumentCB.prototype.a = function() {
        if (this.currentNode && this.currentNode instanceof XMLDocType$$1) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };

      XMLDocumentCB.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };

      XMLDocumentCB.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };

      XMLDocumentCB.prototype.not = function(name, value) {
        return this.notation(name, value);
      };

      return XMLDocumentCB;

    })();

  }).call(commonjsGlobal);
  });

  var XMLStreamWriter = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLCData$$1, XMLComment$$1, XMLDTDAttList$$1, XMLDTDElement$$1, XMLDTDEntity$$1, XMLDTDNotation$$1, XMLDeclaration$$1, XMLDocType$$1, XMLElement$$1, XMLProcessingInstruction$$1, XMLRaw$$1, XMLStreamWriter, XMLText$$1, XMLWriterBase$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    XMLDeclaration$$1 = XMLDeclaration;

    XMLDocType$$1 = XMLDocType;

    XMLCData$$1 = XMLCData;

    XMLComment$$1 = XMLComment;

    XMLElement$$1 = XMLElement;

    XMLRaw$$1 = XMLRaw;

    XMLText$$1 = XMLText;

    XMLProcessingInstruction$$1 = XMLProcessingInstruction;

    XMLDTDAttList$$1 = XMLDTDAttList;

    XMLDTDElement$$1 = XMLDTDElement;

    XMLDTDEntity$$1 = XMLDTDEntity;

    XMLDTDNotation$$1 = XMLDTDNotation;

    XMLWriterBase$$1 = XMLWriterBase;

    module.exports = XMLStreamWriter = (function(superClass) {
      extend(XMLStreamWriter, superClass);

      function XMLStreamWriter(stream, options) {
        XMLStreamWriter.__super__.constructor.call(this, options);
        this.stream = stream;
      }

      XMLStreamWriter.prototype.document = function(doc) {
        var child, i, j, len, len1, ref, ref1, results;
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          child.isLastRootNode = false;
        }
        doc.children[doc.children.length - 1].isLastRootNode = true;
        ref1 = doc.children;
        results = [];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          child = ref1[j];
          switch (false) {
            case !(child instanceof XMLDeclaration$$1):
              results.push(this.declaration(child));
              break;
            case !(child instanceof XMLDocType$$1):
              results.push(this.docType(child));
              break;
            case !(child instanceof XMLComment$$1):
              results.push(this.comment(child));
              break;
            case !(child instanceof XMLProcessingInstruction$$1):
              results.push(this.processingInstruction(child));
              break;
            default:
              results.push(this.element(child));
          }
        }
        return results;
      };

      XMLStreamWriter.prototype.attribute = function(att) {
        return this.stream.write(' ' + att.name + '="' + att.value + '"');
      };

      XMLStreamWriter.prototype.cdata = function(node, level) {
        return this.stream.write(this.space(level) + '<![CDATA[' + node.text + ']]>' + this.endline(node));
      };

      XMLStreamWriter.prototype.comment = function(node, level) {
        return this.stream.write(this.space(level) + '<!-- ' + node.text + ' -->' + this.endline(node));
      };

      XMLStreamWriter.prototype.declaration = function(node, level) {
        this.stream.write(this.space(level));
        this.stream.write('<?xml version="' + node.version + '"');
        if (node.encoding != null) {
          this.stream.write(' encoding="' + node.encoding + '"');
        }
        if (node.standalone != null) {
          this.stream.write(' standalone="' + node.standalone + '"');
        }
        this.stream.write(this.spacebeforeslash + '?>');
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.docType = function(node, level) {
        var child, i, len, ref;
        level || (level = 0);
        this.stream.write(this.space(level));
        this.stream.write('<!DOCTYPE ' + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(' [');
          this.stream.write(this.endline(node));
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            switch (false) {
              case !(child instanceof XMLDTDAttList$$1):
                this.dtdAttList(child, level + 1);
                break;
              case !(child instanceof XMLDTDElement$$1):
                this.dtdElement(child, level + 1);
                break;
              case !(child instanceof XMLDTDEntity$$1):
                this.dtdEntity(child, level + 1);
                break;
              case !(child instanceof XMLDTDNotation$$1):
                this.dtdNotation(child, level + 1);
                break;
              case !(child instanceof XMLCData$$1):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment$$1):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction$$1):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + child.constructor.name);
            }
          }
          this.stream.write(']');
        }
        this.stream.write(this.spacebeforeslash + '>');
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.element = function(node, level) {
        var att, child, i, len, name, ref, ref1, space;
        level || (level = 0);
        space = this.space(level);
        this.stream.write(space + '<' + node.name);
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function(e) {
          return e.value === '';
        })) {
          if (this.allowEmpty) {
            this.stream.write('></' + node.name + '>');
          } else {
            this.stream.write(this.spacebeforeslash + '/>');
          }
        } else if (this.pretty && node.children.length === 1 && (node.children[0].value != null)) {
          this.stream.write('>');
          this.stream.write(node.children[0].value);
          this.stream.write('</' + node.name + '>');
        } else {
          this.stream.write('>' + this.newline);
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            switch (false) {
              case !(child instanceof XMLCData$$1):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment$$1):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLElement$$1):
                this.element(child, level + 1);
                break;
              case !(child instanceof XMLRaw$$1):
                this.raw(child, level + 1);
                break;
              case !(child instanceof XMLText$$1):
                this.text(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction$$1):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown XML node type: " + child.constructor.name);
            }
          }
          this.stream.write(space + '</' + node.name + '>');
        }
        return this.stream.write(this.endline(node));
      };

      XMLStreamWriter.prototype.processingInstruction = function(node, level) {
        this.stream.write(this.space(level) + '<?' + node.target);
        if (node.value) {
          this.stream.write(' ' + node.value);
        }
        return this.stream.write(this.spacebeforeslash + '?>' + this.endline(node));
      };

      XMLStreamWriter.prototype.raw = function(node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };

      XMLStreamWriter.prototype.text = function(node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdAttList = function(node, level) {
        this.stream.write(this.space(level) + '<!ATTLIST ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType);
        if (node.defaultValueType !== '#DEFAULT') {
          this.stream.write(' ' + node.defaultValueType);
        }
        if (node.defaultValue) {
          this.stream.write(' "' + node.defaultValue + '"');
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdElement = function(node, level) {
        this.stream.write(this.space(level) + '<!ELEMENT ' + node.name + ' ' + node.value);
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdEntity = function(node, level) {
        this.stream.write(this.space(level) + '<!ENTITY');
        if (node.pe) {
          this.stream.write(' %');
        }
        this.stream.write(' ' + node.name);
        if (node.value) {
          this.stream.write(' "' + node.value + '"');
        } else {
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.nData) {
            this.stream.write(' NDATA ' + node.nData);
          }
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.dtdNotation = function(node, level) {
        this.stream.write(this.space(level) + '<!NOTATION ' + node.name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.pubID) {
          this.stream.write(' PUBLIC "' + node.pubID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        return this.stream.write(this.spacebeforeslash + '>' + this.endline(node));
      };

      XMLStreamWriter.prototype.endline = function(node) {
        if (!node.isLastRootNode) {
          return this.newline;
        } else {
          return '';
        }
      };

      return XMLStreamWriter;

    })(XMLWriterBase$$1);

  }).call(commonjsGlobal);
  });

  var C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var XMLDocument$$1, XMLDocumentCB$$1, XMLStreamWriter$$1, XMLStringWriter$$1, assign, isFunction, ref;

    ref = Utility, assign = ref.assign, isFunction = ref.isFunction;

    XMLDocument$$1 = XMLDocument;

    XMLDocumentCB$$1 = XMLDocumentCB;

    XMLStringWriter$$1 = XMLStringWriter;

    XMLStreamWriter$$1 = XMLStreamWriter;

    module.exports.create = function(name, xmldec, doctype, options) {
      var doc, root;
      if (name == null) {
        throw new Error("Root element needs a name.");
      }
      options = assign({}, xmldec, doctype, options);
      doc = new XMLDocument$$1(options);
      root = doc.element(name);
      if (!options.headless) {
        doc.declaration(options);
        if ((options.pubID != null) || (options.sysID != null)) {
          doc.doctype(options);
        }
      }
      return root;
    };

    module.exports.begin = function(options, onData, onEnd) {
      var ref1;
      if (isFunction(options)) {
        ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
        options = {};
      }
      if (onData) {
        return new XMLDocumentCB$$1(options, onData, onEnd);
      } else {
        return new XMLDocument$$1(options);
      }
    };

    module.exports.stringWriter = function(options) {
      return new XMLStringWriter$$1(options);
    };

    module.exports.streamWriter = function(stream, options) {
      return new XMLStreamWriter$$1(stream, options);
    };

  }).call(commonjsGlobal);
  });
  var C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib_1 = C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib.create;
  var C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib_2 = C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib.begin;
  var C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib_3 = C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib.stringWriter;
  var C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib_4 = C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib.streamWriter;

  var builder = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var builder, defaults$$1, escapeCDATA, requiresCDATA, wrapCDATA,
      hasProp = {}.hasOwnProperty;

    builder = C__Aristocrat_Projects_emdijs_node_modules_xmlbuilder_lib;

    defaults$$1 = defaults.defaults;

    requiresCDATA = function(entry) {
      return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
    };

    wrapCDATA = function(entry) {
      return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
    };

    escapeCDATA = function(entry) {
      return entry.replace(']]>', ']]]]><![CDATA[>');
    };

    exports.Builder = (function() {
      function Builder(opts) {
        var key, ref, value;
        this.options = {};
        ref = defaults$$1["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key)) continue;
          value = opts[key];
          this.options[key] = value;
        }
      }

      Builder.prototype.buildObject = function(rootObj) {
        var attrkey, charkey, render, rootElement, rootName;
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        if ((Object.keys(rootObj).length === 1) && (this.options.rootName === defaults$$1['0.2'].rootName)) {
          rootName = Object.keys(rootObj)[0];
          rootObj = rootObj[rootName];
        } else {
          rootName = this.options.rootName;
        }
        render = (function(_this) {
          return function(element, obj) {
            var attr, child, entry, index, key, value;
            if (typeof obj !== 'object') {
              if (_this.options.cdata && requiresCDATA(obj)) {
                element.raw(wrapCDATA(obj));
              } else {
                element.txt(obj);
              }
            } else if (Array.isArray(obj)) {
              for (index in obj) {
                if (!hasProp.call(obj, index)) continue;
                child = obj[index];
                for (key in child) {
                  entry = child[key];
                  element = render(element.ele(key), entry).up();
                }
              }
            } else {
              for (key in obj) {
                if (!hasProp.call(obj, key)) continue;
                child = obj[key];
                if (key === attrkey) {
                  if (typeof child === "object") {
                    for (attr in child) {
                      value = child[attr];
                      element = element.att(attr, value);
                    }
                  }
                } else if (key === charkey) {
                  if (_this.options.cdata && requiresCDATA(child)) {
                    element = element.raw(wrapCDATA(child));
                  } else {
                    element = element.txt(child);
                  }
                } else if (Array.isArray(child)) {
                  for (index in child) {
                    if (!hasProp.call(child, index)) continue;
                    entry = child[index];
                    if (typeof entry === 'string') {
                      if (_this.options.cdata && requiresCDATA(entry)) {
                        element = element.ele(key).raw(wrapCDATA(entry)).up();
                      } else {
                        element = element.ele(key, entry).up();
                      }
                    } else {
                      element = render(element.ele(key), entry).up();
                    }
                  }
                } else if (typeof child === "object") {
                  element = render(element.ele(key), child).up();
                } else {
                  if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                    element = element.ele(key).raw(wrapCDATA(child)).up();
                  } else {
                    if (child == null) {
                      child = '';
                    }
                    element = element.ele(key, child.toString()).up();
                  }
                }
              }
            }
            return element;
          };
        })(this);
        rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        });
        return render(rootElement, rootObj).end(this.options.renderOpts);
      };

      return Builder;

    })();

  }).call(commonjsGlobal);
  });
  var builder_1 = builder.Builder;

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.



  function Stream() {
    emitter.call(this);
  }
  Stream.prototype = new emitter();
  var C__Aristocrat_Projects_emdijs_node_modules_stream = Stream;
  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;

  Stream.prototype.pipe = function(dest, options) {
    var source = this;

    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }

    source.on('data', ondata);

    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }

    dest.on('drain', ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }

    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;

      dest.end();
    }


    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;

      if (typeof dest.destroy === 'function') dest.destroy();
    }

    // don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (!this.hasListeners('error')) {
        throw er; // Unhandled stream error in pipe.
      }
    }

    source.on('error', onerror);
    dest.on('error', onerror);

    // remove all the event listeners that were added.
    function cleanup() {
      source.off('data', ondata);
      dest.off('drain', ondrain);

      source.off('end', onend);
      source.off('close', onclose);

      source.off('error', onerror);
      dest.off('error', onerror);

      source.off('end', cleanup);
      source.off('close', cleanup);

      dest.off('end', cleanup);
      dest.off('close', cleanup);
    }

    source.on('end', cleanup);
    source.on('close', cleanup);

    dest.on('end', cleanup);
    dest.on('close', cleanup);

    dest.emit('pipe', source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };

  var sax = createCommonjsModule(function (module, exports) {
  (function (sax) { // wrapper for non-node envs
    sax.parser = function (strict, opt) { return new SAXParser(strict, opt) };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;

    // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
    // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
    // since that's the earliest that a buffer overrun could occur.  This way, checks are
    // as rare as required, but as often as necessary to ensure never crossing this bound.
    // Furthermore, buffers are only tested at most once per write(), so passing a very
    // large string into write() might have undesirable effects, but this is manageable by
    // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
    // edge case, result in creating at most one complete copy of the string passed in.
    // Set to Infinity to have unlimited buffers.
    sax.MAX_BUFFER_LENGTH = 64 * 1024;

    var buffers = [
      'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
      'procInstName', 'procInstBody', 'entity', 'attribName',
      'attribValue', 'cdata', 'script'
    ];

    sax.EVENTS = [
      'text',
      'processinginstruction',
      'sgmldeclaration',
      'doctype',
      'comment',
      'opentagstart',
      'attribute',
      'opentag',
      'closetag',
      'opencdata',
      'cdata',
      'closecdata',
      'error',
      'end',
      'ready',
      'script',
      'opennamespace',
      'closenamespace'
    ];

    function SAXParser (strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt)
      }

      var parser = this;
      clearBuffers(parser);
      parser.q = parser.c = '';
      parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
      parser.opt = opt || {};
      parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
      parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
      parser.tags = [];
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.strict = !!strict;
      parser.noscript = !!(strict || parser.opt.noscript);
      parser.state = S.BEGIN;
      parser.strictEntities = parser.opt.strictEntities;
      parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
      parser.attribList = [];

      // namespaces form a prototype chain.
      // it always points at the current tag,
      // which protos to its parent tag.
      if (parser.opt.xmlns) {
        parser.ns = Object.create(rootNS);
      }

      // mostly just for error reporting
      parser.trackPosition = parser.opt.position !== false;
      if (parser.trackPosition) {
        parser.position = parser.line = parser.column = 0;
      }
      emit(parser, 'onready');
    }

    if (!Object.create) {
      Object.create = function (o) {
        function F () {}
        F.prototype = o;
        var newf = new F();
        return newf
      };
    }

    if (!Object.keys) {
      Object.keys = function (o) {
        var a = [];
        for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
        return a
      };
    }

    function checkBufferLength (parser) {
      var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i = 0, l = buffers.length; i < l; i++) {
        var len = parser[buffers[i]].length;
        if (len > maxAllowed) {
          // Text/cdata nodes can get big, and since they're buffered,
          // we can get here under normal conditions.
          // Avoid issues by emitting the text node now,
          // so at least it won't get any bigger.
          switch (buffers[i]) {
            case 'textNode':
              closeText(parser);
              break

            case 'cdata':
              emitNode(parser, 'oncdata', parser.cdata);
              parser.cdata = '';
              break

            case 'script':
              emitNode(parser, 'onscript', parser.script);
              parser.script = '';
              break

            default:
              error(parser, 'Max buffer length exceeded: ' + buffers[i]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      // schedule the next check for the earliest possible buffer overrun.
      var m = sax.MAX_BUFFER_LENGTH - maxActual;
      parser.bufferCheckPosition = m + parser.position;
    }

    function clearBuffers (parser) {
      for (var i = 0, l = buffers.length; i < l; i++) {
        parser[buffers[i]] = '';
      }
    }

    function flushBuffers (parser) {
      closeText(parser);
      if (parser.cdata !== '') {
        emitNode(parser, 'oncdata', parser.cdata);
        parser.cdata = '';
      }
      if (parser.script !== '') {
        emitNode(parser, 'onscript', parser.script);
        parser.script = '';
      }
    }

    SAXParser.prototype = {
      end: function () { end(this); },
      write: write,
      resume: function () { this.error = null; return this },
      close: function () { return this.write(null) },
      flush: function () { flushBuffers(this); }
    };

    var Stream;
    try {
      Stream = C__Aristocrat_Projects_emdijs_node_modules_stream.Stream;
    } catch (ex) {
      Stream = function () {};
    }

    var streamWraps = sax.EVENTS.filter(function (ev) {
      return ev !== 'error' && ev !== 'end'
    });

    function createStream (strict, opt) {
      return new SAXStream(strict, opt)
    }

    function SAXStream (strict, opt) {
      if (!(this instanceof SAXStream)) {
        return new SAXStream(strict, opt)
      }

      Stream.apply(this);

      this._parser = new SAXParser(strict, opt);
      this.writable = true;
      this.readable = true;

      var me = this;

      this._parser.onend = function () {
        me.emit('end');
      };

      this._parser.onerror = function (er) {
        me.emit('error', er);

        // if didn't throw, then means error was handled.
        // go ahead and clear error, so we can write again.
        me._parser.error = null;
      };

      this._decoder = null;

      streamWraps.forEach(function (ev) {
        Object.defineProperty(me, 'on' + ev, {
          get: function () {
            return me._parser['on' + ev]
          },
          set: function (h) {
            if (!h) {
              me.removeAllListeners(ev);
              me._parser['on' + ev] = h;
              return h
            }
            me.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }

    SAXStream.prototype = Object.create(Stream.prototype, {
      constructor: {
        value: SAXStream
      }
    });

    SAXStream.prototype.write = function (data) {
      if (typeof Buffer === 'function' &&
        typeof Buffer.isBuffer === 'function' &&
        Buffer.isBuffer(data)) {
        if (!this._decoder) {
          var SD = string_decoder.StringDecoder;
          this._decoder = new SD('utf8');
        }
        data = this._decoder.write(data);
      }

      this._parser.write(data.toString());
      this.emit('data', data);
      return true
    };

    SAXStream.prototype.end = function (chunk) {
      if (chunk && chunk.length) {
        this.write(chunk);
      }
      this._parser.end();
      return true
    };

    SAXStream.prototype.on = function (ev, handler) {
      var me = this;
      if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
        me._parser['on' + ev] = function () {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me.emit.apply(me, args);
        };
      }

      return Stream.prototype.on.call(me, ev, handler)
    };

    // this really needs to be replaced with character classes.
    // XML allows all manner of ridiculous numbers and digits.
    var CDATA = '[CDATA[';
    var DOCTYPE = 'DOCTYPE';
    var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
    var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };

    // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
    // This implementation works on strings, a single character at a time
    // as such, it cannot ever support astral-plane characters (10000-EFFFF)
    // without a significant breaking change to either this  parser, or the
    // JavaScript language.  Implementation of an emoji-capable xml parser
    // is left as an exercise for the reader.
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

    function isWhitespace (c) {
      return c === ' ' || c === '\n' || c === '\r' || c === '\t'
    }

    function isQuote (c) {
      return c === '"' || c === '\''
    }

    function isAttribEnd (c) {
      return c === '>' || isWhitespace(c)
    }

    function isMatch (regex, c) {
      return regex.test(c)
    }

    function notMatch (regex, c) {
      return !isMatch(regex, c)
    }

    var S = 0;
    sax.STATE = {
      BEGIN: S++, // leading byte order mark or whitespace
      BEGIN_WHITESPACE: S++, // leading whitespace
      TEXT: S++, // general stuff
      TEXT_ENTITY: S++, // &amp and such.
      OPEN_WAKA: S++, // <
      SGML_DECL: S++, // <!BLARG
      SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
      DOCTYPE: S++, // <!DOCTYPE
      DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
      DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: S++, // <!-
      COMMENT: S++, // <!--
      COMMENT_ENDING: S++, // <!-- blah -
      COMMENT_ENDED: S++, // <!-- blah --
      CDATA: S++, // <![CDATA[ something
      CDATA_ENDING: S++, // ]
      CDATA_ENDING_2: S++, // ]]
      PROC_INST: S++, // <?hi
      PROC_INST_BODY: S++, // <?hi there
      PROC_INST_ENDING: S++, // <?hi "there" ?
      OPEN_TAG: S++, // <strong
      OPEN_TAG_SLASH: S++, // <strong /
      ATTRIB: S++, // <a
      ATTRIB_NAME: S++, // <a foo
      ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
      ATTRIB_VALUE: S++, // <a foo=
      ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
      ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
      CLOSE_TAG: S++, // </a
      CLOSE_TAG_SAW_WHITE: S++, // </a   >
      SCRIPT: S++, // <script> ...
      SCRIPT_ENDING: S++ // <script> ... <
    };

    sax.XML_ENTITIES = {
      'amp': '&',
      'gt': '>',
      'lt': '<',
      'quot': '"',
      'apos': "'"
    };

    sax.ENTITIES = {
      'amp': '&',
      'gt': '>',
      'lt': '<',
      'quot': '"',
      'apos': "'",
      'AElig': 198,
      'Aacute': 193,
      'Acirc': 194,
      'Agrave': 192,
      'Aring': 197,
      'Atilde': 195,
      'Auml': 196,
      'Ccedil': 199,
      'ETH': 208,
      'Eacute': 201,
      'Ecirc': 202,
      'Egrave': 200,
      'Euml': 203,
      'Iacute': 205,
      'Icirc': 206,
      'Igrave': 204,
      'Iuml': 207,
      'Ntilde': 209,
      'Oacute': 211,
      'Ocirc': 212,
      'Ograve': 210,
      'Oslash': 216,
      'Otilde': 213,
      'Ouml': 214,
      'THORN': 222,
      'Uacute': 218,
      'Ucirc': 219,
      'Ugrave': 217,
      'Uuml': 220,
      'Yacute': 221,
      'aacute': 225,
      'acirc': 226,
      'aelig': 230,
      'agrave': 224,
      'aring': 229,
      'atilde': 227,
      'auml': 228,
      'ccedil': 231,
      'eacute': 233,
      'ecirc': 234,
      'egrave': 232,
      'eth': 240,
      'euml': 235,
      'iacute': 237,
      'icirc': 238,
      'igrave': 236,
      'iuml': 239,
      'ntilde': 241,
      'oacute': 243,
      'ocirc': 244,
      'ograve': 242,
      'oslash': 248,
      'otilde': 245,
      'ouml': 246,
      'szlig': 223,
      'thorn': 254,
      'uacute': 250,
      'ucirc': 251,
      'ugrave': 249,
      'uuml': 252,
      'yacute': 253,
      'yuml': 255,
      'copy': 169,
      'reg': 174,
      'nbsp': 160,
      'iexcl': 161,
      'cent': 162,
      'pound': 163,
      'curren': 164,
      'yen': 165,
      'brvbar': 166,
      'sect': 167,
      'uml': 168,
      'ordf': 170,
      'laquo': 171,
      'not': 172,
      'shy': 173,
      'macr': 175,
      'deg': 176,
      'plusmn': 177,
      'sup1': 185,
      'sup2': 178,
      'sup3': 179,
      'acute': 180,
      'micro': 181,
      'para': 182,
      'middot': 183,
      'cedil': 184,
      'ordm': 186,
      'raquo': 187,
      'frac14': 188,
      'frac12': 189,
      'frac34': 190,
      'iquest': 191,
      'times': 215,
      'divide': 247,
      'OElig': 338,
      'oelig': 339,
      'Scaron': 352,
      'scaron': 353,
      'Yuml': 376,
      'fnof': 402,
      'circ': 710,
      'tilde': 732,
      'Alpha': 913,
      'Beta': 914,
      'Gamma': 915,
      'Delta': 916,
      'Epsilon': 917,
      'Zeta': 918,
      'Eta': 919,
      'Theta': 920,
      'Iota': 921,
      'Kappa': 922,
      'Lambda': 923,
      'Mu': 924,
      'Nu': 925,
      'Xi': 926,
      'Omicron': 927,
      'Pi': 928,
      'Rho': 929,
      'Sigma': 931,
      'Tau': 932,
      'Upsilon': 933,
      'Phi': 934,
      'Chi': 935,
      'Psi': 936,
      'Omega': 937,
      'alpha': 945,
      'beta': 946,
      'gamma': 947,
      'delta': 948,
      'epsilon': 949,
      'zeta': 950,
      'eta': 951,
      'theta': 952,
      'iota': 953,
      'kappa': 954,
      'lambda': 955,
      'mu': 956,
      'nu': 957,
      'xi': 958,
      'omicron': 959,
      'pi': 960,
      'rho': 961,
      'sigmaf': 962,
      'sigma': 963,
      'tau': 964,
      'upsilon': 965,
      'phi': 966,
      'chi': 967,
      'psi': 968,
      'omega': 969,
      'thetasym': 977,
      'upsih': 978,
      'piv': 982,
      'ensp': 8194,
      'emsp': 8195,
      'thinsp': 8201,
      'zwnj': 8204,
      'zwj': 8205,
      'lrm': 8206,
      'rlm': 8207,
      'ndash': 8211,
      'mdash': 8212,
      'lsquo': 8216,
      'rsquo': 8217,
      'sbquo': 8218,
      'ldquo': 8220,
      'rdquo': 8221,
      'bdquo': 8222,
      'dagger': 8224,
      'Dagger': 8225,
      'bull': 8226,
      'hellip': 8230,
      'permil': 8240,
      'prime': 8242,
      'Prime': 8243,
      'lsaquo': 8249,
      'rsaquo': 8250,
      'oline': 8254,
      'frasl': 8260,
      'euro': 8364,
      'image': 8465,
      'weierp': 8472,
      'real': 8476,
      'trade': 8482,
      'alefsym': 8501,
      'larr': 8592,
      'uarr': 8593,
      'rarr': 8594,
      'darr': 8595,
      'harr': 8596,
      'crarr': 8629,
      'lArr': 8656,
      'uArr': 8657,
      'rArr': 8658,
      'dArr': 8659,
      'hArr': 8660,
      'forall': 8704,
      'part': 8706,
      'exist': 8707,
      'empty': 8709,
      'nabla': 8711,
      'isin': 8712,
      'notin': 8713,
      'ni': 8715,
      'prod': 8719,
      'sum': 8721,
      'minus': 8722,
      'lowast': 8727,
      'radic': 8730,
      'prop': 8733,
      'infin': 8734,
      'ang': 8736,
      'and': 8743,
      'or': 8744,
      'cap': 8745,
      'cup': 8746,
      'int': 8747,
      'there4': 8756,
      'sim': 8764,
      'cong': 8773,
      'asymp': 8776,
      'ne': 8800,
      'equiv': 8801,
      'le': 8804,
      'ge': 8805,
      'sub': 8834,
      'sup': 8835,
      'nsub': 8836,
      'sube': 8838,
      'supe': 8839,
      'oplus': 8853,
      'otimes': 8855,
      'perp': 8869,
      'sdot': 8901,
      'lceil': 8968,
      'rceil': 8969,
      'lfloor': 8970,
      'rfloor': 8971,
      'lang': 9001,
      'rang': 9002,
      'loz': 9674,
      'spades': 9824,
      'clubs': 9827,
      'hearts': 9829,
      'diams': 9830
    };

    Object.keys(sax.ENTITIES).forEach(function (key) {
      var e = sax.ENTITIES[key];
      var s = typeof e === 'number' ? String.fromCharCode(e) : e;
      sax.ENTITIES[key] = s;
    });

    for (var s in sax.STATE) {
      sax.STATE[sax.STATE[s]] = s;
    }

    // shorthand
    S = sax.STATE;

    function emit (parser, event, data) {
      parser[event] && parser[event](data);
    }

    function emitNode (parser, nodeType, data) {
      if (parser.textNode) closeText(parser);
      emit(parser, nodeType, data);
    }

    function closeText (parser) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode) emit(parser, 'ontext', parser.textNode);
      parser.textNode = '';
    }

    function textopts (opt, text) {
      if (opt.trim) text = text.trim();
      if (opt.normalize) text = text.replace(/\s+/g, ' ');
      return text
    }

    function error (parser, er) {
      closeText(parser);
      if (parser.trackPosition) {
        er += '\nLine: ' + parser.line +
          '\nColumn: ' + parser.column +
          '\nChar: ' + parser.c;
      }
      er = new Error(er);
      parser.error = er;
      emit(parser, 'onerror', er);
      return parser
    }

    function end (parser) {
      if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
      if ((parser.state !== S.BEGIN) &&
        (parser.state !== S.BEGIN_WHITESPACE) &&
        (parser.state !== S.TEXT)) {
        error(parser, 'Unexpected end');
      }
      closeText(parser);
      parser.c = '';
      parser.closed = true;
      emit(parser, 'onend');
      SAXParser.call(parser, parser.strict, parser.opt);
      return parser
    }

    function strictFail (parser, message) {
      if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
        throw new Error('bad call to strictFail')
      }
      if (parser.strict) {
        error(parser, message);
      }
    }

    function newTag (parser) {
      if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
      var parent = parser.tags[parser.tags.length - 1] || parser;
      var tag = parser.tag = { name: parser.tagName, attributes: {} };

      // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
      if (parser.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser.attribList.length = 0;
      emitNode(parser, 'onopentagstart', tag);
    }

    function qname (name, attribute) {
      var i = name.indexOf(':');
      var qualName = i < 0 ? [ '', name ] : name.split(':');
      var prefix = qualName[0];
      var local = qualName[1];

      // <x "xmlns"="http://foo">
      if (attribute && name === 'xmlns') {
        prefix = 'xmlns';
        local = '';
      }

      return { prefix: prefix, local: local }
    }

    function attrib (parser) {
      if (!parser.strict) {
        parser.attribName = parser.attribName[parser.looseCase]();
      }

      if (parser.attribList.indexOf(parser.attribName) !== -1 ||
        parser.tag.attributes.hasOwnProperty(parser.attribName)) {
        parser.attribName = parser.attribValue = '';
        return
      }

      if (parser.opt.xmlns) {
        var qn = qname(parser.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;

        if (prefix === 'xmlns') {
          // namespace binding attribute. push the binding into scope
          if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
            strictFail(parser,
              'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
              'Actual: ' + parser.attribValue);
          } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
            strictFail(parser,
              'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
              'Actual: ' + parser.attribValue);
          } else {
            var tag = parser.tag;
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser.attribValue;
          }
        }

        // defer onattribute events until all attributes have been seen
        // so any new bindings can take effect. preserve attribute order
        // so deferred events can be emitted in document order
        parser.attribList.push([parser.attribName, parser.attribValue]);
      } else {
        // in non-xmlns mode, we can emit the event right away
        parser.tag.attributes[parser.attribName] = parser.attribValue;
        emitNode(parser, 'onattribute', {
          name: parser.attribName,
          value: parser.attribValue
        });
      }

      parser.attribName = parser.attribValue = '';
    }

    function openTag (parser, selfClosing) {
      if (parser.opt.xmlns) {
        // emit namespace binding events
        var tag = parser.tag;

        // add namespace info to tag
        var qn = qname(parser.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || '';

        if (tag.prefix && !tag.uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(parser.tagName));
          tag.uri = qn.prefix;
        }

        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach(function (p) {
            emitNode(parser, 'onopennamespace', {
              prefix: p,
              uri: tag.ns[p]
            });
          });
        }

        // handle deferred onattribute events
        // Note: do not apply default ns to attributes:
        //   http://www.w3.org/TR/REC-xml-names/#defaulting
        for (var i = 0, l = parser.attribList.length; i < l; i++) {
          var nv = parser.attribList[i];
          var name = nv[0];
          var value = nv[1];
          var qualName = qname(name, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === '' ? '' : (tag.ns[prefix] || '');
          var a = {
            name: name,
            value: value,
            prefix: prefix,
            local: local,
            uri: uri
          };

          // if there's any attributes with an undefined namespace,
          // then fail on them now.
          if (prefix && prefix !== 'xmlns' && !uri) {
            strictFail(parser, 'Unbound namespace prefix: ' +
              JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser.tag.attributes[name] = a;
          emitNode(parser, 'onattribute', a);
        }
        parser.attribList.length = 0;
      }

      parser.tag.isSelfClosing = !!selfClosing;

      // process the tag
      parser.sawRoot = true;
      parser.tags.push(parser.tag);
      emitNode(parser, 'onopentag', parser.tag);
      if (!selfClosing) {
        // special case for <script> in non-strict mode.
        if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
          parser.state = S.SCRIPT;
        } else {
          parser.state = S.TEXT;
        }
        parser.tag = null;
        parser.tagName = '';
      }
      parser.attribName = parser.attribValue = '';
      parser.attribList.length = 0;
    }

    function closeTag (parser) {
      if (!parser.tagName) {
        strictFail(parser, 'Weird empty close tag.');
        parser.textNode += '</>';
        parser.state = S.TEXT;
        return
      }

      if (parser.script) {
        if (parser.tagName !== 'script') {
          parser.script += '</' + parser.tagName + '>';
          parser.tagName = '';
          parser.state = S.SCRIPT;
          return
        }
        emitNode(parser, 'onscript', parser.script);
        parser.script = '';
      }

      // first make sure that the closing tag actually exists.
      // <a><b></c></b></a> will close everything, otherwise.
      var t = parser.tags.length;
      var tagName = parser.tagName;
      if (!parser.strict) {
        tagName = tagName[parser.looseCase]();
      }
      var closeTo = tagName;
      while (t--) {
        var close = parser.tags[t];
        if (close.name !== closeTo) {
          // fail the first time in strict mode
          strictFail(parser, 'Unexpected close tag');
        } else {
          break
        }
      }

      // didn't find it.  we already failed for strict, so just abort.
      if (t < 0) {
        strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
        parser.textNode += '</' + parser.tagName + '>';
        parser.state = S.TEXT;
        return
      }
      parser.tagName = tagName;
      var s = parser.tags.length;
      while (s-- > t) {
        var tag = parser.tag = parser.tags.pop();
        parser.tagName = parser.tag.name;
        emitNode(parser, 'onclosetag', parser.tagName);

        var x = {};
        for (var i in tag.ns) {
          x[i] = tag.ns[i];
        }

        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (parser.opt.xmlns && tag.ns !== parent.ns) {
          // remove namespace bindings introduced by tag
          Object.keys(tag.ns).forEach(function (p) {
            var n = tag.ns[p];
            emitNode(parser, 'onclosenamespace', { prefix: p, uri: n });
          });
        }
      }
      if (t === 0) parser.closedRoot = true;
      parser.tagName = parser.attribValue = parser.attribName = '';
      parser.attribList.length = 0;
      parser.state = S.TEXT;
    }

    function parseEntity (parser) {
      var entity = parser.entity;
      var entityLC = entity.toLowerCase();
      var num;
      var numStr = '';

      if (parser.ENTITIES[entity]) {
        return parser.ENTITIES[entity]
      }
      if (parser.ENTITIES[entityLC]) {
        return parser.ENTITIES[entityLC]
      }
      entity = entityLC;
      if (entity.charAt(0) === '#') {
        if (entity.charAt(1) === 'x') {
          entity = entity.slice(2);
          num = parseInt(entity, 16);
          numStr = num.toString(16);
        } else {
          entity = entity.slice(1);
          num = parseInt(entity, 10);
          numStr = num.toString(10);
        }
      }
      entity = entity.replace(/^0+/, '');
      if (isNaN(num) || numStr.toLowerCase() !== entity) {
        strictFail(parser, 'Invalid character entity');
        return '&' + parser.entity + ';'
      }

      return String.fromCodePoint(num)
    }

    function beginWhiteSpace (parser, c) {
      if (c === '<') {
        parser.state = S.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c)) {
        // have to process this as a text node.
        // weird, but happens.
        strictFail(parser, 'Non-whitespace before first tag.');
        parser.textNode = c;
        parser.state = S.TEXT;
      }
    }

    function charAt (chunk, i) {
      var result = '';
      if (i < chunk.length) {
        result = chunk.charAt(i);
      }
      return result
    }

    function write (chunk) {
      var parser = this;
      if (this.error) {
        throw this.error
      }
      if (parser.closed) {
        return error(parser,
          'Cannot write after close. Assign an onready handler.')
      }
      if (chunk === null) {
        return end(parser)
      }
      if (typeof chunk === 'object') {
        chunk = chunk.toString();
      }
      var i = 0;
      var c = '';
      while (true) {
        c = charAt(chunk, i++);
        parser.c = c;

        if (!c) {
          break
        }

        if (parser.trackPosition) {
          parser.position++;
          if (c === '\n') {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }

        switch (parser.state) {
          case S.BEGIN:
            parser.state = S.BEGIN_WHITESPACE;
            if (c === '\uFEFF') {
              continue
            }
            beginWhiteSpace(parser, c);
            continue

          case S.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c);
            continue

          case S.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i - 1;
              while (c && c !== '<' && c !== '&') {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === '\n') {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i - 1);
            }
            if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, 'Text data outside of root node.');
              }
              if (c === '&') {
                parser.state = S.TEXT_ENTITY;
              } else {
                parser.textNode += c;
              }
            }
            continue

          case S.SCRIPT:
            // only non-strict
            if (c === '<') {
              parser.state = S.SCRIPT_ENDING;
            } else {
              parser.script += c;
            }
            continue

          case S.SCRIPT_ENDING:
            if (c === '/') {
              parser.state = S.CLOSE_TAG;
            } else {
              parser.script += '<' + c;
              parser.state = S.SCRIPT;
            }
            continue

          case S.OPEN_WAKA:
            // either a /, ?, !, or text is coming next.
            if (c === '!') {
              parser.state = S.SGML_DECL;
              parser.sgmlDecl = '';
            } else if (isWhitespace(c)) ; else if (isMatch(nameStart, c)) {
              parser.state = S.OPEN_TAG;
              parser.tagName = c;
            } else if (c === '/') {
              parser.state = S.CLOSE_TAG;
              parser.tagName = '';
            } else if (c === '?') {
              parser.state = S.PROC_INST;
              parser.procInstName = parser.procInstBody = '';
            } else {
              strictFail(parser, 'Unencoded <');
              // if there was some whitespace, then add that in.
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c = new Array(pad).join(' ') + c;
              }
              parser.textNode += '<' + c;
              parser.state = S.TEXT;
            }
            continue

          case S.SGML_DECL:
            if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser, 'onopencdata');
              parser.state = S.CDATA;
              parser.sgmlDecl = '';
              parser.cdata = '';
            } else if (parser.sgmlDecl + c === '--') {
              parser.state = S.COMMENT;
              parser.comment = '';
              parser.sgmlDecl = '';
            } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser.state = S.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(parser,
                  'Inappropriately located doctype declaration');
              }
              parser.doctype = '';
              parser.sgmlDecl = '';
            } else if (c === '>') {
              emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
              parser.sgmlDecl = '';
              parser.state = S.TEXT;
            } else if (isQuote(c)) {
              parser.state = S.SGML_DECL_QUOTED;
              parser.sgmlDecl += c;
            } else {
              parser.sgmlDecl += c;
            }
            continue

          case S.SGML_DECL_QUOTED:
            if (c === parser.q) {
              parser.state = S.SGML_DECL;
              parser.q = '';
            }
            parser.sgmlDecl += c;
            continue

          case S.DOCTYPE:
            if (c === '>') {
              parser.state = S.TEXT;
              emitNode(parser, 'ondoctype', parser.doctype);
              parser.doctype = true; // just remember that we saw it.
            } else {
              parser.doctype += c;
              if (c === '[') {
                parser.state = S.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser.state = S.DOCTYPE_QUOTED;
                parser.q = c;
              }
            }
            continue

          case S.DOCTYPE_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.q = '';
              parser.state = S.DOCTYPE;
            }
            continue

          case S.DOCTYPE_DTD:
            parser.doctype += c;
            if (c === ']') {
              parser.state = S.DOCTYPE;
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_DTD_QUOTED;
              parser.q = c;
            }
            continue

          case S.DOCTYPE_DTD_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.state = S.DOCTYPE_DTD;
              parser.q = '';
            }
            continue

          case S.COMMENT:
            if (c === '-') {
              parser.state = S.COMMENT_ENDING;
            } else {
              parser.comment += c;
            }
            continue

          case S.COMMENT_ENDING:
            if (c === '-') {
              parser.state = S.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, 'oncomment', parser.comment);
              }
              parser.comment = '';
            } else {
              parser.comment += '-' + c;
              parser.state = S.COMMENT;
            }
            continue

          case S.COMMENT_ENDED:
            if (c !== '>') {
              strictFail(parser, 'Malformed comment');
              // allow <!-- blah -- bloo --> in non-strict mode,
              // which is a comment of " blah -- bloo "
              parser.comment += '--' + c;
              parser.state = S.COMMENT;
            } else {
              parser.state = S.TEXT;
            }
            continue

          case S.CDATA:
            if (c === ']') {
              parser.state = S.CDATA_ENDING;
            } else {
              parser.cdata += c;
            }
            continue

          case S.CDATA_ENDING:
            if (c === ']') {
              parser.state = S.CDATA_ENDING_2;
            } else {
              parser.cdata += ']' + c;
              parser.state = S.CDATA;
            }
            continue

          case S.CDATA_ENDING_2:
            if (c === '>') {
              if (parser.cdata) {
                emitNode(parser, 'oncdata', parser.cdata);
              }
              emitNode(parser, 'onclosecdata');
              parser.cdata = '';
              parser.state = S.TEXT;
            } else if (c === ']') {
              parser.cdata += ']';
            } else {
              parser.cdata += ']]' + c;
              parser.state = S.CDATA;
            }
            continue

          case S.PROC_INST:
            if (c === '?') {
              parser.state = S.PROC_INST_ENDING;
            } else if (isWhitespace(c)) {
              parser.state = S.PROC_INST_BODY;
            } else {
              parser.procInstName += c;
            }
            continue

          case S.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c)) {
              continue
            } else if (c === '?') {
              parser.state = S.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c;
            }
            continue

          case S.PROC_INST_ENDING:
            if (c === '>') {
              emitNode(parser, 'onprocessinginstruction', {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = '';
              parser.state = S.TEXT;
            } else {
              parser.procInstBody += '?' + c;
              parser.state = S.PROC_INST_BODY;
            }
            continue

          case S.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else {
              newTag(parser);
              if (c === '>') {
                openTag(parser);
              } else if (c === '/') {
                parser.state = S.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, 'Invalid character in tag name');
                }
                parser.state = S.ATTRIB;
              }
            }
            continue

          case S.OPEN_TAG_SLASH:
            if (c === '>') {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, 'Forward-slash in opening tag not followed by >');
              parser.state = S.ATTRIB;
            }
            continue

          case S.ATTRIB:
            // haven't read the attribute name yet.
            if (isWhitespace(c)) {
              continue
            } else if (c === '>') {
              openTag(parser);
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c;
              parser.attribValue = '';
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_NAME:
            if (c === '=') {
              parser.state = S.ATTRIB_VALUE;
            } else if (c === '>') {
              strictFail(parser, 'Attribute without value');
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c)) {
              parser.state = S.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser.attribName += c;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_NAME_SAW_WHITE:
            if (c === '=') {
              parser.state = S.ATTRIB_VALUE;
            } else if (isWhitespace(c)) {
              continue
            } else {
              strictFail(parser, 'Attribute without value');
              parser.tag.attributes[parser.attribName] = '';
              parser.attribValue = '';
              emitNode(parser, 'onattribute', {
                name: parser.attribName,
                value: ''
              });
              parser.attribName = '';
              if (c === '>') {
                openTag(parser);
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, 'Invalid attribute name');
                parser.state = S.ATTRIB;
              }
            }
            continue

          case S.ATTRIB_VALUE:
            if (isWhitespace(c)) {
              continue
            } else if (isQuote(c)) {
              parser.q = c;
              parser.state = S.ATTRIB_VALUE_QUOTED;
            } else {
              strictFail(parser, 'Unquoted attribute value');
              parser.state = S.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c;
            }
            continue

          case S.ATTRIB_VALUE_QUOTED:
            if (c !== parser.q) {
              if (c === '&') {
                parser.state = S.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c;
              }
              continue
            }
            attrib(parser);
            parser.q = '';
            parser.state = S.ATTRIB_VALUE_CLOSED;
            continue

          case S.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c)) {
              parser.state = S.ATTRIB;
            } else if (c === '>') {
              openTag(parser);
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser, 'No whitespace between attributes');
              parser.attribName = c;
              parser.attribValue = '';
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, 'Invalid attribute name');
            }
            continue

          case S.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === '&') {
                parser.state = S.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c;
              }
              continue
            }
            attrib(parser);
            if (c === '>') {
              openTag(parser);
            } else {
              parser.state = S.ATTRIB;
            }
            continue

          case S.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c)) {
                continue
              } else if (notMatch(nameStart, c)) {
                if (parser.script) {
                  parser.script += '</' + c;
                  parser.state = S.SCRIPT;
                } else {
                  strictFail(parser, 'Invalid tagname in closing tag.');
                }
              } else {
                parser.tagName = c;
              }
            } else if (c === '>') {
              closeTag(parser);
            } else if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else if (parser.script) {
              parser.script += '</' + parser.tagName;
              parser.tagName = '';
              parser.state = S.SCRIPT;
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid tagname in closing tag');
              }
              parser.state = S.CLOSE_TAG_SAW_WHITE;
            }
            continue

          case S.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c)) {
              continue
            }
            if (c === '>') {
              closeTag(parser);
            } else {
              strictFail(parser, 'Invalid characters in closing tag');
            }
            continue

          case S.TEXT_ENTITY:
          case S.ATTRIB_VALUE_ENTITY_Q:
          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser.state) {
              case S.TEXT_ENTITY:
                returnState = S.TEXT;
                buffer = 'textNode';
                break

              case S.ATTRIB_VALUE_ENTITY_Q:
                returnState = S.ATTRIB_VALUE_QUOTED;
                buffer = 'attribValue';
                break

              case S.ATTRIB_VALUE_ENTITY_U:
                returnState = S.ATTRIB_VALUE_UNQUOTED;
                buffer = 'attribValue';
                break
            }

            if (c === ';') {
              parser[buffer] += parseEntity(parser);
              parser.entity = '';
              parser.state = returnState;
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
              parser.entity += c;
            } else {
              strictFail(parser, 'Invalid character in entity name');
              parser[buffer] += '&' + parser.entity + c;
              parser.entity = '';
              parser.state = returnState;
            }

            continue

          default:
            throw new Error(parser, 'Unknown state: ' + parser.state)
        }
      } // while

      if (parser.position >= parser.bufferCheckPosition) {
        checkBufferLength(parser);
      }
      return parser
    }

    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    /* istanbul ignore next */
    if (!String.fromCodePoint) {
      (function () {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function () {
          var MAX_SIZE = 0x4000;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length = arguments.length;
          if (!length) {
            return ''
          }
          var result = '';
          while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (
              !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 0x10FFFF || // not a valid Unicode code point
              floor(codePoint) !== codePoint // not an integer
            ) {
              throw RangeError('Invalid code point: ' + codePoint)
            }
            if (codePoint <= 0xFFFF) { // BMP code point
              codeUnits.push(codePoint);
            } else { // Astral code point; split in surrogate halves
              // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              codePoint -= 0x10000;
              highSurrogate = (codePoint >> 10) + 0xD800;
              lowSurrogate = (codePoint % 0x400) + 0xDC00;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result
        };
        /* istanbul ignore next */
        if (Object.defineProperty) {
          Object.defineProperty(String, 'fromCodePoint', {
            value: fromCodePoint,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = fromCodePoint;
        }
      }());
    }
  })(exports);
  });

  var bom = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    exports.stripBOM = function(str) {
      if (str[0] === '\uFEFF') {
        return str.substring(1);
      } else {
        return str;
      }
    };

  }).call(commonjsGlobal);
  });
  var bom_1 = bom.stripBOM;

  var processors = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var prefixMatch;

    prefixMatch = new RegExp(/(?!xmlns)^.*:/);

    exports.normalize = function(str) {
      return str.toLowerCase();
    };

    exports.firstCharLowerCase = function(str) {
      return str.charAt(0).toLowerCase() + str.slice(1);
    };

    exports.stripPrefix = function(str) {
      return str.replace(prefixMatch, '');
    };

    exports.parseNumbers = function(str) {
      if (!isNaN(str)) {
        str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
      }
      return str;
    };

    exports.parseBooleans = function(str) {
      if (/^(?:true|false)$/i.test(str)) {
        str = str.toLowerCase() === 'true';
      }
      return str;
    };

  }).call(commonjsGlobal);
  });
  var processors_1 = processors.normalize;
  var processors_2 = processors.firstCharLowerCase;
  var processors_3 = processors.stripPrefix;
  var processors_4 = processors.parseNumbers;
  var processors_5 = processors.parseBooleans;

  var every = function(str) {
    return new Every(str);
  };

  /*
    Time map
  */

  var time = {
    millisecond: 1,
    second: 1000,
    minute: 60000,
    hour: 3600000,
    day: 86400000
  };

  for (var key in time) {
    if (key === 'millisecond') {
      time.ms = time[key];
    } else {
      time[key.charAt(0)] = time[key];
    }
    time[key + 's'] = time[key];
  }


  /*
    Every constructor
  */

  function Every(str) {
    this.count = 0;
    var m = parse(str);
    if (m) {
      this.time = Number(m[0]) * time[m[1]];
      this.type = m[1];
    }
  }

  Every.prototype.do = function(cb) {
    if (this.time) {
      this.interval = setInterval(callback, this.time);
    }

    var that = this;
    function callback() {
      that.count++;
      cb.call(that);
    }
    return this;
  };

  Every.prototype.stop = function() {
    if (this.interval) {
      clearInterval(this.interval);
      delete this.interval;
    }
    return this;
  };


  /*
    Convert string to milliseconds

      ms, millisecond(s)?
      s, second(s)?
      m, minute(s)?
      h, hour(s)?
      d, day(s)?
  */
  var reg = /^\s*(\d+(?:\.\d+)?)\s*([a-z]+)\s*$/;

  function parse(str) {
    var m = str.match(reg);
    if (m && time[m[2]]) {
      return m.slice(1);
    }
    return null;
  }

  var C__Aristocrat_Projects_emdijs_node_modules_timers = {
  	every: every
  };

  var parser = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var bom$$1, defaults$$1, events$$1, isEmpty, processItem, processors$$1, sax$$1, setImmediate,
      bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    sax$$1 = sax;

    events$$1 = events;

    bom$$1 = bom;

    processors$$1 = processors;

    setImmediate = C__Aristocrat_Projects_emdijs_node_modules_timers.setImmediate;

    defaults$$1 = defaults.defaults;

    isEmpty = function(thing) {
      return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
    };

    processItem = function(processors$$1, item, key) {
      var i, len, process;
      for (i = 0, len = processors$$1.length; i < len; i++) {
        process = processors$$1[i];
        item = process(item, key);
      }
      return item;
    };

    exports.Parser = (function(superClass) {
      extend(Parser, superClass);

      function Parser(opts) {
        this.parseString = bind(this.parseString, this);
        this.reset = bind(this.reset, this);
        this.assignOrPush = bind(this.assignOrPush, this);
        this.processAsync = bind(this.processAsync, this);
        var key, ref, value;
        if (!(this instanceof exports.Parser)) {
          return new exports.Parser(opts);
        }
        this.options = {};
        ref = defaults$$1["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key)) continue;
          value = opts[key];
          this.options[key] = value;
        }
        if (this.options.xmlns) {
          this.options.xmlnskey = this.options.attrkey + "ns";
        }
        if (this.options.normalizeTags) {
          if (!this.options.tagNameProcessors) {
            this.options.tagNameProcessors = [];
          }
          this.options.tagNameProcessors.unshift(processors$$1.normalize);
        }
        this.reset();
      }

      Parser.prototype.processAsync = function() {
        var chunk, err;
        try {
          if (this.remaining.length <= this.options.chunkSize) {
            chunk = this.remaining;
            this.remaining = '';
            this.saxParser = this.saxParser.write(chunk);
            return this.saxParser.close();
          } else {
            chunk = this.remaining.substr(0, this.options.chunkSize);
            this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
            this.saxParser = this.saxParser.write(chunk);
            return setImmediate(this.processAsync);
          }
        } catch (error1) {
          err = error1;
          if (!this.saxParser.errThrown) {
            this.saxParser.errThrown = true;
            return this.emit(err);
          }
        }
      };

      Parser.prototype.assignOrPush = function(obj, key, newValue) {
        if (!(key in obj)) {
          if (!this.options.explicitArray) {
            return obj[key] = newValue;
          } else {
            return obj[key] = [newValue];
          }
        } else {
          if (!(obj[key] instanceof Array)) {
            obj[key] = [obj[key]];
          }
          return obj[key].push(newValue);
        }
      };

      Parser.prototype.reset = function() {
        var attrkey, charkey, ontext, stack;
        this.removeAllListeners();
        this.saxParser = sax$$1.parser(this.options.strict, {
          trim: false,
          normalize: false,
          xmlns: this.options.xmlns
        });
        this.saxParser.errThrown = false;
        this.saxParser.onerror = (function(_this) {
          return function(error) {
            _this.saxParser.resume();
            if (!_this.saxParser.errThrown) {
              _this.saxParser.errThrown = true;
              return _this.emit("error", error);
            }
          };
        })(this);
        this.saxParser.onend = (function(_this) {
          return function() {
            if (!_this.saxParser.ended) {
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        })(this);
        this.saxParser.ended = false;
        this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
        this.resultObject = null;
        stack = [];
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        this.saxParser.onopentag = (function(_this) {
          return function(node) {
            var key, newValue, obj, processedKey, ref;
            obj = {};
            obj[charkey] = "";
            if (!_this.options.ignoreAttrs) {
              ref = node.attributes;
              for (key in ref) {
                if (!hasProp.call(ref, key)) continue;
                if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                  obj[attrkey] = {};
                }
                newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                if (_this.options.mergeAttrs) {
                  _this.assignOrPush(obj, processedKey, newValue);
                } else {
                  obj[attrkey][processedKey] = newValue;
                }
              }
            }
            obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
            if (_this.options.xmlns) {
              obj[_this.options.xmlnskey] = {
                uri: node.uri,
                local: node.local
              };
            }
            return stack.push(obj);
          };
        })(this);
        this.saxParser.onclosetag = (function(_this) {
          return function() {
            var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
            obj = stack.pop();
            nodeName = obj["#name"];
            if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
              delete obj["#name"];
            }
            if (obj.cdata === true) {
              cdata = obj.cdata;
              delete obj.cdata;
            }
            s = stack[stack.length - 1];
            if (obj[charkey].match(/^\s*$/) && !cdata) {
              emptyStr = obj[charkey];
              delete obj[charkey];
            } else {
              if (_this.options.trim) {
                obj[charkey] = obj[charkey].trim();
              }
              if (_this.options.normalize) {
                obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
              }
              obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
            if (isEmpty(obj)) {
              obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
            }
            if (_this.options.validator != null) {
              xpath = "/" + ((function() {
                var i, len, results;
                results = [];
                for (i = 0, len = stack.length; i < len; i++) {
                  node = stack[i];
                  results.push(node["#name"]);
                }
                return results;
              })()).concat(nodeName).join("/");
              (function() {
                var err;
                try {
                  return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                } catch (error1) {
                  err = error1;
                  return _this.emit("error", err);
                }
              })();
            }
            if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
              if (!_this.options.preserveChildrenOrder) {
                node = {};
                if (_this.options.attrkey in obj) {
                  node[_this.options.attrkey] = obj[_this.options.attrkey];
                  delete obj[_this.options.attrkey];
                }
                if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                  node[_this.options.charkey] = obj[_this.options.charkey];
                  delete obj[_this.options.charkey];
                }
                if (Object.getOwnPropertyNames(obj).length > 0) {
                  node[_this.options.childkey] = obj;
                }
                obj = node;
              } else if (s) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                objClone = {};
                for (key in obj) {
                  if (!hasProp.call(obj, key)) continue;
                  objClone[key] = obj[key];
                }
                s[_this.options.childkey].push(objClone);
                delete obj["#name"];
                if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                  obj = obj[charkey];
                }
              }
            }
            if (stack.length > 0) {
              return _this.assignOrPush(s, nodeName, obj);
            } else {
              if (_this.options.explicitRoot) {
                old = obj;
                obj = {};
                obj[nodeName] = old;
              }
              _this.resultObject = obj;
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        })(this);
        ontext = (function(_this) {
          return function(text) {
            var charChild, s;
            s = stack[stack.length - 1];
            if (s) {
              s[charkey] += text;
              if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                charChild = {
                  '#name': '__text__'
                };
                charChild[charkey] = text;
                if (_this.options.normalize) {
                  charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                }
                s[_this.options.childkey].push(charChild);
              }
              return s;
            }
          };
        })(this);
        this.saxParser.ontext = ontext;
        return this.saxParser.oncdata = (function(_this) {
          return function(text) {
            var s;
            s = ontext(text);
            if (s) {
              return s.cdata = true;
            }
          };
        })(this);
      };

      Parser.prototype.parseString = function(str, cb) {
        var err;
        if ((cb != null) && typeof cb === "function") {
          this.on("end", function(result) {
            this.reset();
            return cb(null, result);
          });
          this.on("error", function(err) {
            this.reset();
            return cb(err);
          });
        }
        try {
          str = str.toString();
          if (str.trim() === '') {
            this.emit("end", null);
            return true;
          }
          str = bom$$1.stripBOM(str);
          if (this.options.async) {
            this.remaining = str;
            setImmediate(this.processAsync);
            return this.saxParser;
          }
          return this.saxParser.write(str).close();
        } catch (error1) {
          err = error1;
          if (!(this.saxParser.errThrown || this.saxParser.ended)) {
            this.emit('error', err);
            return this.saxParser.errThrown = true;
          } else if (this.saxParser.ended) {
            throw err;
          }
        }
      };

      return Parser;

    })(events$$1.EventEmitter);

    exports.parseString = function(str, a, b) {
      var cb, options, parser;
      if (b != null) {
        if (typeof b === 'function') {
          cb = b;
        }
        if (typeof a === 'object') {
          options = a;
        }
      } else {
        if (typeof a === 'function') {
          cb = a;
        }
        options = {};
      }
      parser = new exports.Parser(options);
      return parser.parseString(str, cb);
    };

  }).call(commonjsGlobal);
  });
  var parser_1 = parser.Parser;
  var parser_2 = parser.parseString;

  var xml2js = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.12.7
  (function() {
    var builder$$1, defaults$$1, parser$$1, processors$$1,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;

    defaults$$1 = defaults;

    builder$$1 = builder;

    parser$$1 = parser;

    processors$$1 = processors;

    exports.defaults = defaults$$1.defaults;

    exports.processors = processors$$1;

    exports.ValidationError = (function(superClass) {
      extend(ValidationError, superClass);

      function ValidationError(message) {
        this.message = message;
      }

      return ValidationError;

    })(Error);

    exports.Builder = builder$$1.Builder;

    exports.Parser = parser$$1.Parser;

    exports.parseString = parser$$1.parseString;

  }).call(commonjsGlobal);
  });
  var xml2js_1 = xml2js.defaults;
  var xml2js_2 = xml2js.processors;
  var xml2js_3 = xml2js.ValidationError;
  var xml2js_4 = xml2js.Builder;
  var xml2js_5 = xml2js.Parser;
  var xml2js_6 = xml2js.parseString;

  var EmdiFactory = /** @class */ (function () {
      function EmdiFactory() {
      }
      EmdiFactory.createCommand = function (command) {
          switch (exports.EmdiCommands[command]) {
              case exports.EmdiCommands.Heartbeat:
                  return new HeartbeatCommand();
              case exports.EmdiCommands.CommsOnLine:
                  return new CommsOnLineCommand();
              case exports.EmdiCommands.GetFunctionalGroups:
                  return new GetFunctionalGroupsCommand();
              case exports.EmdiCommands.ClearEventSub:
                  return new ClearEventSubCommand();
              case exports.EmdiCommands.ClearMeterSub:
                  return new ClearMeterSubCommand();
              case exports.EmdiCommands.ContentMessage:
                  return new ContentMessageCommand();
              case exports.EmdiCommands.ContentToHostMessage:
                  return new ContentToHostMessageCommand();
              case exports.EmdiCommands.GetActiveContent:
                  return new GetActiveContentCommand();
              case exports.EmdiCommands.GetCabinetStatus:
                  return new GetCabinetStatusCommand();
              case exports.EmdiCommands.GetCallAttendantState:
                  return new GetCallAttendantStateCommand();
              case exports.EmdiCommands.GetCardState:
                  return new GetCardStateCommand();
              case exports.EmdiCommands.GetDeviceVisibleState:
                  return new GetDeviceVisibleStateCommand();
              case exports.EmdiCommands.GetEventSubList:
                  return new GetEventSubListCommand();
              case exports.EmdiCommands.GetMeterInfo:
                  return new GetMeterInfoCommand();
              case exports.EmdiCommands.GetMeterSub:
                  return new GetMeterSubCommand();
              case exports.EmdiCommands.GetSupportedEventList:
                  return new GetSupportedEventListCommand();
              case exports.EmdiCommands.GetSupportedMeterList:
                  return new GetSupportedMeterListCommand();
              case exports.EmdiCommands.LogContentEvent:
                  return new LogContentEventCommand();
              case exports.EmdiCommands.SetCallAttendantState:
                  return new SetCallAttendantStateCommand();
              case exports.EmdiCommands.SetCardRemoved:
                  return new SetCardRemovedCommand();
              case exports.EmdiCommands.SetDeviceVisibleState:
                  return new SetDeviceVisibleStateCommand();
              case exports.EmdiCommands.SetEventSub:
                  return new SetEventSubCommand();
              case exports.EmdiCommands.SetMeterSub:
                  return new SetMeterSubCommand();
              case exports.EmdiCommands.GetEgmId:
                  return new GetEgmIdCommand();
              default:
                  console.log('Not Found =', command);
          }
          return undefined;
      };
      EmdiFactory.createResponseOrEvent = function (xml) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  xml2js_6(xml, function (error, json) {
                      if (error) {
                          reject(error);
                          return;
                      }
                      console.log('json data =', json);
                      var cls = Object.keys(json['md:mdMsg'])[1];
                      var data = {
                          xml: xml,
                          class: Object.keys(json['md:mdMsg'])[1].substr(5),
                          type: json['md:mdMsg'][cls][0]['$']['md:cmdType'],
                          sessionId: parseInt(json['md:mdMsg'][cls][0]['$']['md:sessionId'], 10),
                          error: parseInt(json['md:mdMsg'][cls][0]['$']['md:errorCode'], 10),
                      };
                      var cmd = Object.keys(json['md:mdMsg'][cls][0])[1];
                      if (cmd) {
                          data.command = {
                              name: cmd.substr(cmd.indexOf(':') + 1),
                              data: json['md:mdMsg'][cls][0][cmd][0],
                          };
                      }
                      if (data.error > 0) {
                          resolve(new EmdiError(data.error, data.class));
                      }
                      else if (data.type === 'response') {
                          var response = _this.createResponse(data);
                          response.sessionId = data.sessionId;
                          resolve(response);
                      }
                      else if (data.type === 'request') {
                          var event_1 = _this.createEvent(data);
                          event_1.sessionId = data.sessionId;
                          resolve(event_1);
                      }
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiFactory.createEvent = function (data) {
          var event = this.toUpperCamelCase(data.command.name);
          console.log('event =', event);
          switch (exports.EmdiEvents[event]) {
              case exports.EmdiEvents.EventReport:
                  return new EventReportEvent(data.command.data);
              case exports.EmdiEvents.MeterReport:
                  return new MeterReportEvent(data.command.data);
              case exports.EmdiEvents.ContentMessage:
                  return new ContentMessageEvent(data.command.data);
              case exports.EmdiEvents.HostToContentMessage:
                  return new HostToContentMessageEvent(data.command.data);
              default:
                  throw new Error('Event not found');
          }
      };
      EmdiFactory.createResponse = function (data) {
          var response = this.toUpperCamelCase(data.command.name);
          console.log('response =', response);
          switch (exports.EmdiResponses[response]) {
              case exports.EmdiResponses.HeartbeatAck:
                  return new HeartbeatAckResponse();
              case exports.EmdiResponses.CommsOnLineAck:
                  return new CommsOnLineAckResponse(data.command.data);
              case exports.EmdiResponses.FunctionalGroupList:
                  return new FunctionalGroupListResponse(data.command.data);
              case exports.EmdiResponses.EventSubList:
                  return new EventSubListResponse(data.command.data);
              case exports.EmdiResponses.MeterSubList:
                  return new MeterSubListResponse(data.command.data);
              case exports.EmdiResponses.ClearEventSubAck:
                  return new ClearEventSubAckResponse();
              case exports.EmdiResponses.ContentMessageAck:
                  return new ContentMessageAckResponse(data.command.data);
              case exports.EmdiResponses.DeviceVisibleStatus:
                  return new DeviceVisibleStatusResponse(data.command.data);
              case exports.EmdiResponses.CallAttendantStatus:
                  return new CallAttendantStatusResponse(data.command.data);
              case exports.EmdiResponses.CardStatus:
                  return new CardStatusResponse(data.command.data);
              case exports.EmdiResponses.ContentToHostMessageAck:
                  return new ContentToHostMessageAckResponse();
              case exports.EmdiResponses.CabinetStatus:
                  return new CabinetStatusResponse(data.command.data);
              case exports.EmdiResponses.SupportedMeterList:
                  return new SupportedMeterListResponse(data.command.data);
              case exports.EmdiResponses.ActiveContentList:
                  return new ActiveContentListResponse(data.command.data);
              case exports.EmdiResponses.SupportedEventList:
                  return new SupportedEventListResponse(data.command.data);
              case exports.EmdiResponses.LogContentEventAck:
                  return new LogContentEventAckResponse();
              case exports.EmdiResponses.MeterReport:
                  return new MeterReportResponse(data.command.data);
              case exports.EmdiResponses.ActiveContentList:
                  return new ActiveContentListResponse(data.command.data);
              case exports.EmdiResponses.EgmId:
                  return new EgmIdResponse(data.command.data);
              default:
                  throw new Error('Response not found');
          }
      };
      EmdiFactory.toUpperCamelCase = function (s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
      };
      return EmdiFactory;
  }());

  var EmdiClient = /** @class */ (function () {
      function EmdiClient() {
          this.sessionId = 1;
          this.heartbeat = EmdiFactory.createCommand('Heartbeat');
          this.isSessionValid = false;
          this.accessToken = 0;
          this._connected$ = new rxjs.BehaviorSubject(undefined);
          this._disconnected$ = new rxjs.BehaviorSubject(undefined);
          this._validated$ = new rxjs.BehaviorSubject(undefined);
          this._event$ = new rxjs.BehaviorSubject(null);
          this._response$ = new rxjs.BehaviorSubject(null);
          this._request$ = new rxjs.BehaviorSubject(null);
          this._error$ = new rxjs.BehaviorSubject(null);
          this.isConnected = false;
          this.deviceId = 0;
          this.egmId = '';
          this.service = new EmdiService();
      }
      Object.defineProperty(EmdiClient.prototype, "error$", {
          get: function () {
              return this._error$.asObservable().pipe(operators.filter(function (e) { return e != null; }), operators.map(function (e) { return e; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "connected$", {
          get: function () {
              return this._connected$.asObservable().pipe(operators.filter(function (connected) { return !!connected; }), operators.map(function (connected) { return !!connected; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "disconnected$", {
          get: function () {
              return this._disconnected$.asObservable().pipe(operators.filter(function (disconnected) { return !!disconnected; }), operators.map(function (disconnected) { return !!disconnected; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "validated$", {
          get: function () {
              return this._validated$.asObservable().pipe(operators.filter(function (validated) { return !!validated; }), operators.map(function (validated) { return !!validated; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "event$", {
          get: function () {
              return this._event$.asObservable().pipe(operators.filter(function (e) { return e != null; }), operators.map(function (e) { return e; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "request$", {
          get: function () {
              return this._request$.asObservable().pipe(operators.filter(function (c) { return c != null; }), operators.map(function (c) { return c; }));
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(EmdiClient.prototype, "response$", {
          get: function () {
              return this._response$.asObservable().pipe(operators.filter(function (r) { return r != null; }), operators.map(function (r) { return r; }));
          },
          enumerable: true,
          configurable: true
      });
      EmdiClient.prototype.connect = function (deviceId, accessToken) {
          var _this = this;
          return new Promise(function (resolve) {
              try {
                  if (_this.isConnected) {
                      resolve(true);
                      return;
                  }
                  _this.messages = _this.service.connect(deviceId).pipe(operators.map(function (message) {
                      var data = utf8.decode(message.data);
                      return data;
                  }));
                  _this.subscription = _this.messages.subscribe(function (data) {
                      _this.onReceive(data);
                  }, function (err) {
                      _this.onError(new EmdiError(err.message, 'Client'));
                  }, function () {
                      console.log("connection closed");
                      clearInterval(_this.pulseInterval);
                      _this.isConnected = false;
                      _this.isSessionValid = false;
                      _this.onDisconnected();
                  });
                  _this.sessionId = 1;
                  _this.deviceId = deviceId;
                  _this.accessToken = accessToken;
                  _this.isConnected = true;
                  _this.onConnected();
                  _this.validate();
                  resolve(true);
              }
              catch (err) {
                  console.error("error connecting to device " + deviceId + ": " + err);
                  resolve(false);
              }
          });
      };
      EmdiClient.prototype.validate = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  if (_this.isSessionValid) {
                      resolve(true);
                      return;
                  }
                  var command = EmdiFactory.createCommand('CommsOnLine');
                  command.accessToken = parseInt(_this.accessToken.toString(), 10);
                  _this.sendCommand(command)
                      .then(function (response) {
                      _this.isSessionValid = response.sessionValid;
                      if (_this.isSessionValid) {
                          _this.getEgmId().then(function (egmId) { return (_this.egmId = egmId); });
                          _this.onValidated();
                      }
                      resolve(_this.isSessionValid);
                  })
                      .catch(function (error) {
                      throw error;
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.disconnect = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  if (this.subscription) {
                      this.subscription.unsubscribe();
                  }
                  return [2 /*return*/];
              });
          });
      };
      EmdiClient.prototype.show = function () {
          return this.setDeviceVisbleState(true);
      };
      EmdiClient.prototype.hide = function () {
          return this.setDeviceVisbleState(false);
      };
      EmdiClient.prototype.getEgmId = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  var command = new GetEgmIdCommand();
                  _this.sendCommand(command)
                      .then(function (response) { return resolve(response.egmId); })
                      .catch(function (error) {
                      throw error;
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.sendContent = function (mediaDisplayId, contentId, contentData) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  var command = new ContentMessageCommand();
                  command.mediaDisplayId = mediaDisplayId;
                  command.contentId = contentId;
                  command.contentData = contentData;
                  _this.sendCommand(command)
                      .then(function (response) {
                      resolve();
                  })
                      .catch(function (error) {
                      throw error;
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.subscribe = function () {
          var _this = this;
          var codes = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              codes[_i] = arguments[_i];
          }
          return new Promise(function (resolve, reject) {
              try {
                  var command_1 = new SetEventSubCommand();
                  codes.forEach(function (code) { return command_1.eventSubscriptions.push({ code: code }); });
                  _this.sendCommand(command_1)
                      .then(function (response) {
                      var subs = response.eventSubscriptions;
                      resolve(subs.map(function (sub) { return sub.code; }));
                  })
                      .catch(function (error) {
                      throw error;
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.reconnect = function () {
          this.connect(this.deviceId, this.accessToken);
      };
      EmdiClient.prototype.onEvent = function (event) {
          this._event$.next(event);
      };
      EmdiClient.prototype.onResponse = function (response) {
          this._response$.next(response);
      };
      EmdiClient.prototype.onRequest = function (command) {
          this._request$.next(command);
      };
      EmdiClient.prototype.onError = function (error) {
          if (this.subscription) {
              this.subscription.unsubscribe();
          }
          clearInterval(this.pulseInterval);
          this._error$.next(error);
          this.isConnected = false;
          this.reconnect();
      };
      EmdiClient.prototype.onConnected = function () {
          this._connected$.next(true);
      };
      EmdiClient.prototype.onDisconnected = function () {
          if (this.subscription) {
              this.subscription.unsubscribe();
          }
          clearInterval(this.pulseInterval);
          this._disconnected$.next(true);
          this.isConnected = false;
          this.reconnect();
      };
      EmdiClient.prototype.onValidated = function () {
          this._validated$.next(true);
      };
      EmdiClient.prototype.sendCommand = function (command) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  if (!_this.isConnected) {
                      throw new Error('No connection');
                  }
                  if (_this.pulseInterval) {
                      clearInterval(_this.pulseInterval);
                  }
                  _this.pulseInterval = setInterval(function () { return _this.pulse(); }, 25000);
                  _this.onRequest(command);
                  var sessionId_1 = _this.sessionId;
                  var xml = command.getXml(sessionId_1);
                  // console.log('default', this.hexEscape(xml));
                  xml = utf8.encode(xml);
                  // console.log('encoded', this.hexEscape(xml));
                  _this.messages.next(xml);
                  _this.sessionId++;
                  var subscription_1 = _this.response$
                      .pipe(operators.filter(function (response) { return response.sessionId === sessionId_1; }), operators.timeout(30000), operators.catchError(function () { return rxjs.of(new Error("Response timeout: " + command.name)); }))
                      .subscribe(function (result) {
                      if (result instanceof Error) {
                          reject(result);
                      }
                      else {
                          resolve(result);
                      }
                      subscription_1.unsubscribe();
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.setDeviceVisbleState = function (state) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              try {
                  var command = new SetDeviceVisibleStateCommand();
                  command.deviceVisibleState = state;
                  _this.sendCommand(command)
                      .then(function (response) {
                      resolve(response.deviceVisibleState === state);
                  })
                      .catch(function (error) {
                      throw error;
                  });
              }
              catch (error) {
                  reject(error);
              }
          });
      };
      EmdiClient.prototype.sendResponse = function (event) {
          if (!this.isConnected) {
              throw new Error('No connection');
          }
          var xml = event.ack.getXml(event.sessionId);
          xml = utf8.encode(xml);
          this.messages.next(xml);
      };
      EmdiClient.prototype.pulse = function () {
          this.sendCommand(this.heartbeat);
      };
      EmdiClient.prototype.onReceive = function (xml) {
          var _this = this;
          console.log('receive: xml =', this.formatXml(xml));
          EmdiFactory.createResponseOrEvent(xml).then(function (result) {
              console.log('createResponseOrEvent', result);
              if (_this.isErrorType(result)) {
                  _this.onError(result);
              }
              else if (_this.isResponseType(result)) {
                  var response = result;
                  _this.onResponse(response);
              }
              else if (_this.isEventType(result)) {
                  var event_1 = result;
                  _this.sendResponse(event_1);
                  _this.onEvent(event_1);
              }
          });
      };
      EmdiClient.prototype.isCommsOnLineAckType = function (value) {
          return value.sessionValid !== undefined;
      };
      EmdiClient.prototype.isErrorType = function (value) {
          return value.error !== undefined;
      };
      EmdiClient.prototype.isResponseType = function (value) {
          return value.responseType !== undefined;
      };
      EmdiClient.prototype.isEventType = function (value) {
          return value.eventType !== undefined;
      };
      EmdiClient.prototype.formatXml = function (xml) {
          var formatted = '';
          var reg = /(>)(<)(\/*)/g;
          var pad = 0;
          xml = xml.replace(reg, '$1\r\n$2$3');
          xml.split('\r\n').forEach(function (node) {
              var indent = 0;
              if (node.match(/.+<\/\w[^>]*>$/)) {
                  indent = 0;
              }
              else if (node.match(/^<\/\w/)) {
                  if (pad !== 0) {
                      pad -= 1;
                  }
              }
              else if (node.match(/^<\w([^>]*[^\/])?>.*$/)) {
                  indent = 1;
              }
              else {
                  indent = 0;
              }
              var padding = '';
              for (var i = 0; i < pad; i++) {
                  padding += '  ';
              }
              formatted += padding + node + '\r\n';
              pad += indent;
          });
          return formatted;
      };
      return EmdiClient;
  }());

  var _client = null;
  function connect(deviceId, accessToken) {
      if (_client) {
          return Promise.resolve(_client);
      }
      var client = new EmdiClient();
      return new Promise(function (resolve, reject) {
          client.connect(deviceId, accessToken).then(function () {
              client.connected$
                  .pipe(operators.take(1))
                  .subscribe(function (connected) {
                  if (connected) {
                      _client = client;
                      resolve(client);
                  }
                  else {
                      reject(new Error('Failed to connect'));
                  }
              });
              client.error$
                  .pipe(operators.take(1))
                  .subscribe(function (err) {
                  return reject(new Error(err.error.toString()));
              });
              client.disconnected$
                  .pipe(operators.take(1))
                  .subscribe(function () { return _client = null; });
          }, function (err) { return reject(err); });
      });
  }

  exports.EmdiClient = EmdiClient;
  exports.EmdiError = EmdiError;
  exports.availableMeters = availableMeters;
  exports.HeartbeatCommand = HeartbeatCommand;
  exports.HeartbeatAckResponse = HeartbeatAckResponse;
  exports.CommsOnLineCommand = CommsOnLineCommand;
  exports.CommsOnLineAckResponse = CommsOnLineAckResponse;
  exports.GetFunctionalGroupsCommand = GetFunctionalGroupsCommand;
  exports.FunctionalGroupListResponse = FunctionalGroupListResponse;
  exports.EventReportEvent = EventReportEvent;
  exports.HostToContentMessageEvent = HostToContentMessageEvent;
  exports.MeterReportEvent = MeterReportEvent;
  exports.MeterReportResponse = MeterReportResponse;
  exports.ClearEventSubCommand = ClearEventSubCommand;
  exports.ClearEventSubAckResponse = ClearEventSubAckResponse;
  exports.ClearMeterSubCommand = ClearMeterSubCommand;
  exports.ContentMessageCommand = ContentMessageCommand;
  exports.ContentMessageEvent = ContentMessageEvent;
  exports.ContentToHostMessageCommand = ContentToHostMessageCommand;
  exports.GetActiveContentCommand = GetActiveContentCommand;
  exports.GetCabinetStatusCommand = GetCabinetStatusCommand;
  exports.GetCallAttendantStateCommand = GetCallAttendantStateCommand;
  exports.GetCardStateCommand = GetCardStateCommand;
  exports.GetDeviceVisibleStateCommand = GetDeviceVisibleStateCommand;
  exports.GetEventSubListCommand = GetEventSubListCommand;
  exports.EventSubListResponse = EventSubListResponse;
  exports.GetMeterInfoCommand = GetMeterInfoCommand;
  exports.GetMeterSubCommand = GetMeterSubCommand;
  exports.GetSupportedEventListCommand = GetSupportedEventListCommand;
  exports.GetSupportedMeterListCommand = GetSupportedMeterListCommand;
  exports.LogContentEventCommand = LogContentEventCommand;
  exports.LogContentEventAckResponse = LogContentEventAckResponse;
  exports.SetCallAttendantStateCommand = SetCallAttendantStateCommand;
  exports.CallAttendantStatusResponse = CallAttendantStatusResponse;
  exports.SetCardRemovedCommand = SetCardRemovedCommand;
  exports.SetDeviceVisibleStateCommand = SetDeviceVisibleStateCommand;
  exports.SetEventSubCommand = SetEventSubCommand;
  exports.SetMeterSubCommand = SetMeterSubCommand;
  exports.MeterSubListResponse = MeterSubListResponse;
  exports.ContentMessageAckCommand = ContentMessageAckCommand;
  exports.ContentMessageAckResponse = ContentMessageAckResponse;
  exports.ContentToHostMessageAckResponse = ContentToHostMessageAckResponse;
  exports.ActiveContentListResponse = ActiveContentListResponse;
  exports.CabinetStatusResponse = CabinetStatusResponse;
  exports.SupportedMeterListResponse = SupportedMeterListResponse;
  exports.SupportedEventListResponse = SupportedEventListResponse;
  exports.CardStatusResponse = CardStatusResponse;
  exports.DeviceVisibleStatusResponse = DeviceVisibleStatusResponse;
  exports.EventAckCommand = EventAckCommand;
  exports.MeterReportAckCommand = MeterReportAckCommand;
  exports.HostToContentMessageAckCommand = HostToContentMessageAckCommand;
  exports.GetEgmIdCommand = GetEgmIdCommand;
  exports.EgmIdResponse = EgmIdResponse;
  exports.connect = connect;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=emdi.umd.js.map
