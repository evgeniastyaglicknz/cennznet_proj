"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextService = void 0;
var classes_1 = require("../shared/classes");
var ContextService = /** @class */ (function () {
    function ContextService() {
        this.paymentOngoing = false;
        this.paymentSuccessfull = false;
        this.showLogin = false;
        this.showSignup = false;
        this.tokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.endpoint = 'wss://nikau.centrality.me/public/ws';
        this.projects = [];
        this.addProject("p1", "Global Species Database", "2021-08-22", "donate", "IUCN Photo1.jpg", 10);
        this.addProject("p2", "Environmental Coding School", "2021-09-04", "invest", "GirlCodeIncubator1.jpg", 15);
    }
    ContextService.prototype.addProject = function (code, name, releaseDate, type, url, price) {
        var proj = new classes_1.Project();
        proj.name = name;
        proj.code = code;
        proj.url = url;
        proj.type = type;
        proj.releaseDate = releaseDate;
        proj.price = price;
        this.projects.push(proj);
    };
    ContextService.prototype.readCollection = function () {
    };
    return ContextService;
}());
exports.ContextService = ContextService;
//# sourceMappingURL=context.js.map