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
exports.getUserData = exports.getUser = void 0;
const client_1 = require("@prisma/client");
function getUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const users = yield prisma.user.findFirst({
            where: {
                mail: email,
                password: password
            },
        });
        console.log(users);
        return users;
    });
}
exports.getUser = getUser;
function getUserData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const userData = yield prisma.user.findFirst({
            where: {
                id: id
            }
        });
        console.log(userData);
        return userData;
    });
}
exports.getUserData = getUserData;
//# sourceMappingURL=UserModel.js.map