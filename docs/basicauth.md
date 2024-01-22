# http.basicauth

<script setup>
import NewInCasket from "./components/NewInCasket.vue";
</script>

basicauth implements HTTP Basic Authentication. Basic Authentication can be used to protect directories and files with a
username and password. Note that basic auth is *not secure* over plain HTTP. Use discretion when deciding what to
protect with HTTP Basic Authentication.

When a user requests a resource that is protected, the browser will prompt the user for a username and password if they
have not already supplied one. If the proper credentials are present in the Authorization header, the server will grant
access to the resource and set the `{user}` [placeholder](/placeholders) to the value of the username. If the header is
missing or the credentials are incorrect, the server will respond with HTTP 401 Unauthorized.

This directive allows use of .htpasswd files by prefixing the password argument with `htpasswd=` and the path to the
.htpasswd file to use. 

::: warning
Support for .htpasswd is for legacy sites only and may be removed in the future; do not use .htpasswd with new sites.
:::

Note that basicauth does not protect `OPTIONS` requests. This is so that clients can know whether to prompt for
authentication in cross-origin contexts. We emphasize that servers violate RFC 2616 if they respond to OPTIONS with a
resource retrieval (i.e. if they respond with secret content to OPTIONS requests).

## Syntax

``` casketfile
basicauth path username password {
  exclude [paths...]
}
```

-   **path** is the file or directory to protect
-   **username** is the username
-   **password** is the password
-   **exclude** <NewInCasket version="v1.2.10" /> is a list of paths to exclude from protection. This is useful if you
    want to protect a directory but allow access to a specific file within it. Paths are relative to the protected path.
    For example, if you want to protect `/secret` but allow access to `/secret/allowed.txt`, you would use `exclude
    allowed.txt`.

This syntax is convenient for protecting a single file or base path/directory with the default realm "Restricted". To
protect multiple resources or to specify a realm, use the following variation:

``` casketfile
basicauth username password {
    realm name
    exclude [paths...]
    resources...
}
```

-   **username** is the username.
-   **password** is the password.
-   **realm** identifies the protection partition; it is optional and cannot be repeated. Realms are used to specify the
    space in which the protection applies. This can be convenient for user agents that are configured to remember
    authentication details (which is most browsers).
-   **exclude** <NewInCasket version="v1.2.10" /> is a list of paths to exclude from protection. This is useful if you
    want to protect a directory but allow access to a specific file within it. Paths are relative to the protected path.
    For example, if you want to protect `/secret` but allow access to `/secret/allowed.txt`, you would use `exclude
    allowed.txt`.
-   **resources** is a list of files/directories to protect, one per line.

## Examples

Protect all files in /secret so only Bob can access them with the password "hiccup":

``` casketfile
basicauth /secret Bob hiccup
```

Protect multiple files and directories in the realm "Mary Lou's documents" so Mary Lou has access with her password
"milkshakes":

``` casketfile
basicauth "Mary Lou" milkshakes {
    realm "Mary Lou's documents"
    /notes-for-mary-lou.txt
    /marylou-files
    /another-file.txt
}
```

Protect all files in the root (`/`) except for `/robots.txt` and everything in `/public`:

``` casketfile
basicauth / Bob hiccup {
  exclude /robots.txt /public
}  
```
