"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var helperFunctions_1 = require("../../utilities/helperFunctions");
var data_2 = require("../../utilities/data");
var url = "https://mp3quran.net/api/_english.php?";
function getReciters() {
    return __awaiter(this, void 0, void 0, function () {
        var data, data_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, node_fetch_1.default(url)];
                case 1:
                    data = _a.sent();
                    return [4, data.json()];
                case 2:
                    data_1 = _a.sent();
                    return [2, data_1['reciters']];
            }
        });
    });
}
function getReciterNamesList() {
    return __awaiter(this, void 0, void 0, function () {
        var data, reciters, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getReciters()];
                case 1:
                    data = _a.sent();
                    reciters = [];
                    for (i = 0; i < data.length; i++) {
                        reciters.push(data[i]['name']);
                    }
                    return [2, reciters];
            }
        });
    });
}
function showAllReciters() {
    getReciterNamesList()
        .then(function (res) {
        helperFunctions_1.showListIndex(res, 'Reciter Index', 'Name');
    })
        .catch(function (err) {
        console.log(err);
    });
}
function getReciterName(reciterIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getReciters()];
                case 1:
                    data = _a.sent();
                    return [2, data[reciterIndex]['name']];
            }
        });
    });
}
function getReciterData(reciterIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getReciters()];
                case 1:
                    data = _a.sent();
                    return [2, data[reciterIndex]];
            }
        });
    });
}
function getAvailableSuras(reciterIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var reciterData, availableSuras;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getReciterData(reciterIndex)];
                case 1:
                    reciterData = _a.sent();
                    availableSuras = reciterData['suras'].split(",");
                    return [2, availableSuras];
            }
        });
    });
}
function showAvailableSuras(reciterIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var availableSuras;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getAvailableSuras(reciterIndex)];
                case 1:
                    availableSuras = _a.sent();
                    helperFunctions_1.showListIndex(availableSuras, 'Surah Index', 'Name', true);
                    return [2];
            }
        });
    });
}
function getSurahURL(reciterIndex, surahIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var data, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getReciterData(reciterIndex)];
                case 1:
                    data = _a.sent();
                    url = data['Server'] + "/" + String(surahIndex).padStart(3, '0') + ".mp3";
                    return [2, url];
            }
        });
    });
}
function runSurah(reciterIndex, surahIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var reciterName, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, getReciterName(reciterIndex)];
                case 1:
                    reciterName = _b.sent();
                    console.log("Reciter: " + reciterName + ", Surah: " + data_2.surasDictionary[surahIndex]);
                    _a = helperFunctions_1.runFromURL;
                    return [4, getSurahURL(reciterIndex, surahIndex)];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    return [2];
            }
        });
    });
}
exports.runSurah = runSurah;