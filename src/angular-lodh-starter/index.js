"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularLodhStarter = void 0;
const schematics_1 = require("@angular-devkit/schematics");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function angularLodhStarter(_options) {
    return (_tree, _context) => {
        _options.style = 'scss';
        return schematics_1.chain([
            schematics_1.externalSchematic("@schematics/angular", "ng-new", _options),
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), []), schematics_1.MergeStrategy.Overwrite),
        ]);
    };
}
exports.angularLodhStarter = angularLodhStarter;
//# sourceMappingURL=index.js.map