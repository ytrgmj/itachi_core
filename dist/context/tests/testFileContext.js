"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const FileContext_1 = __importDefault(require("../FileContext"));
var context = new FileContext_1.default();
context.loadFromPath(path_1.default.join(__dirname, './biz'));
let childContext = context.buildChild();
function run() {
    let orderFactory = childContext.get('OrderFactory');
    orderFactory.test('PayOrder');
    orderFactory.test('NormalOrder');
}
run();
run();
