import {
  apply,
  chain,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function angularLodhStarter(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    _options.style = "scss";
    _options.version = "~13.0.0-next.0";

    const templateSource = apply(url("./files"), [
      template({
        ..._options,
      }),
    ]);

    return chain([
      externalSchematic("@schematics/angular", "ng-new", _options),
      mergeWith(templateSource, MergeStrategy.Overwrite),
      (_host: Tree) => {
        console.log("directory", _host.getDir("/edada").subdirs);
      },
    ]);
  };
}
