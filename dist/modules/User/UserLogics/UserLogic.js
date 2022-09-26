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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDataLogic = exports.getUserLogic = void 0;
const UserModel_1 = require("../UserModels/UserModel");
function getUserLogic(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield (0, UserModel_1.getUser)(email, password);
        return userData;
    });
}
exports.getUserLogic = getUserLogic;
function getUserDataLogic(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield (0, UserModel_1.getUserData)(id);
        return userData;
    });
}
exports.getUserDataLogic = getUserDataLogic;
//# sourceMappingURL=UserLogic.js.map