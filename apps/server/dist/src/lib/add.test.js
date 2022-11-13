"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./add"));
describe('add', () => {
    it('should add two numbers', () => {
        expect((0, add_1.default)(1, 2)).toEqual(3);
    });
});
//# sourceMappingURL=add.test.js.map