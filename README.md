# Auto Template Literal

## Description

Auto Template Literal is a VSCode extension that automatically converts regular strings to template literals in JavaScript files. This helps you take advantage of template literals' powerful features, such as multi-line strings and string interpolation.

## Features

- Automatically converts single and double-quoted strings to template literals on save.
- Supports string interpolation with `${}` syntax.
- Configurable to enable or disable the automatic conversion.

## Installation

1. Open VSCode.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `Auto Template Literal`.
4. Click `Install` to install the extension.
5. Reload VSCode to activate the extension.

## Usage

1. Open a JavaScript file in VSCode.
2. Write or select a string enclosed in single or double quotes.
3. Save the file.
4. The selected string will be automatically converted to a template literal.

## Configuration

You can enable or disable the automatic conversion feature in the settings.

1. Open the settings by clicking on the gear icon in the lower left corner and selecting `Settings`, or by pressing `Ctrl+,`.
2. Search for `Auto Template Literal`.
3. Toggle the `Enable` setting to enable or disable the automatic conversion.

```json
{
  "autoTemplateLiteral.enable": true
}
```

## Contributing

If you find any issues or have suggestions for new features, please open an issue or submit a pull request on [GitHub](https://github.com/SaguadoDev/auto-template-literal).
