"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../01-heranca/person");
var dao_1 = require("./dao");
var dao = new dao_1.Dao();
var person = new person_1.Person('Wolverine');
dao.insert(person);
//# sourceMappingURL=main.js.map