# import

import allows you to use configuration from another file or a [reusable snippet](/caddyfile#snippets). It gets replaced
with the contents of that file or snippet.

This is a unique directive in that `import` can appear outside of a server block. In other words, it can appear at the
top of a Caddyfile where an address would normally be. Like other directives, however, it cannot be used inside of other
directives.

Note that the the import path is relative to the Caddyfile, not the current working directory.

## Syntax

``` caddyfile
import pattern
```

-   **pattern** is the file or glob pattern (`*`) or snippet name to include. Its contents will replace this line, as if
    that file's contents appeared here to begin with. This value is relative to the file's location. It is an error if a
    specific file cannot be found, but an empty glob pattern is not an error. Globs can only have one wildcard and does
    not support \`\[ \]\` patterns.

## Examples

Import a shared configuration:

``` caddyfile
import config/common.conf
```

Imports any files found in the vhosts folder:

``` caddyfile
import ../vhosts/*
```

Import a snippet defined earlier:

``` caddyfile
import mysnippet
```
