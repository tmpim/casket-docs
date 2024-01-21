# http.recaptcha

The recaptcha directive performs reCAPTCHA validation on incoming requests. Upon receiving a specified type of request,
it extracts the response token and sends it to the reCAPTCHA server. If the request is invalid, recaptcha drops it and
returns a 400 status code. This allows backends to simplify their code and logic. However, the recaptcha directive does
not inject reCAPTCHA code into outgoing HTML pages. Instead, that can be done with the http.filter plugin.

**[Full documentation](https://github.com/defund/caddy-recaptcha/blob/master/README.md)**

## Examples

### v3 Syntax

``` caddyfile
recaptcha v3 secret {
    action [threshold] [method] path
}
```

-   **secret** is the secret key
-   **action** is the action
-   **threshold** is the lower bound of allowed scores
    -   float between 0.0 and 1.0
    -   default is .5
-   **method** is the request method to validate
    -   one of POST, PUT, PATCH
    -   default is POST
-   **path** is the URL path to validate

### v2 Syntax

``` caddyfile
recaptcha v2 secret {
    [method] path
}
```

-   **secret** is the secret key
-   **method** is the request method to validate
    -   one of POST, PUT, PATCH
    -   default is POST
-   **path** is the URL path to validate
