import {
  apply,
  chain,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicContext,
  Tree,
  url,
} from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function angularLodhStarter(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    _options.style = 'scss'

    return chain([
      externalSchematic("@schematics/angular", "ng-new", _options),
      mergeWith(apply(url('./files'), []), MergeStrategy.Overwrite),
    ]);
  };
}
