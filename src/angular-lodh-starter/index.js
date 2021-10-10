"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularLodhStarter = void 0;
const schematics_1 = require("@angular-devkit/schematics");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function angularLodhStarter(_options) {
    return (_tree, _context) => {
        _options.style = "scss";
        _options.version = "~13.0.0-next.0";
        const templateSource = schematics_1.apply(schematics_1.url("./files"), [
            schematics_1.template(Object.assign({}, _options)),
        ]);
        return schematics_1.chain([
            schematics_1.externalSchematic("@schematics/angular", "ng-new", _options),
            schematics_1.mergeWith(templateSource, schematics_1.MergeStrategy.Overwrite),
            (_host) => {
                console.log("directory", _host.getDir("/edada").subdirs);
            },
        ]);
    };
}
exports.angularLodhStarter = angularLodhStarter;
//# sourceMappingURL=index.js.map