"use strict";
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var signin_component_1 = require("./signin/signin.component");
exports.MODULE_ROUTES = [
    { path: 'notfound', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'signin', component: signin_component_1.SignInComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    signin_component_1.SignInComponent,
    register_component_1.RegisterComponent
];
//# sourceMappingURL=dashboard.routes.js.map