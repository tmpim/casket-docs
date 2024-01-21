# http.filter

Provides a directive to filter response bodies. This could be useful to modify static HTML files to add (for example)
Google Analytics source code to it.

**[Full documentation](https://github.com/echocat/caddy-filter/blob/master/README.md)**

## Examples

### Syntax

``` caddyfile
filter rule {
    path                          <regexp pattern>
    content_type                  <regexp pattern>
    path_content_type_combination <and|or>
    search_pattern                <regexp pattern>
    replacement                   <replacement pattern>
}
filter rule ...
filter max_buffer_size    <maximum buffer size in bytes>
```

-   **rule**: Defines a new filter rule for a file to respond. *Important: Define `path` and/or `content_type` not to
    open. Slack rules could dramatically impact the system performance because every response is recorded to memory
    before returning it.*
    -   **path**: Regular expression that matches the requested path.
    -   **content_type**: Regular expression that matches the requested content type that results after the evaluation
        of the whole request.
    -   **path_content_type_combination**: *(Since 0.8)* Could be `and` or `or`. (Default: `and` - before this parameter
        existed it was `or`)
    -   **search_pattern**: Regular expression to find in the response body to replace it.
    -   **replacement**: Pattern to replace the `search_pattern` with. <br />You can use parameters. Each parameter
        must be formatted like: `{name}`.
        -   Regex group: Every group of the `search_pattern` could be addressed with `{index}`.
            -   Example: `"My name is (.*?) (.*?)." => "Name: {2}, {1}."`
        -   Request context: Parameters like URL … could be accessed. <br />Example: `Host: {request_host}`
            -   `request_header_<header name>`: Contains a header value of the request, if provided or empty.
            -   `request_url`: Full requested url
            -   `request_path`: Requested path
            -   `request_method`: Used method
            -   `request_host`: Target host
            -   `request_proto`: Used proto
            -   `request_proto`: Used proto
            -   `request_remoteAddress`: Remote address of the calling client
            -   `response_header_<header name>`: Contains a header value of the response, if provided or empty.
        -   Replacements in files: If the replacement is prefixed with a `@` character it will be tried to find a file
            with this name and load the replacement from there. This will help you to also add replacements with larger
            payloads which will be ugly direct within the Caddyfile.
            -   Example: `@myfile.html`
-   **max_buffer_size**: Limit the buffer size to the specified maximum number of bytes. If a rules matches the whole
    body will be recorded at first to memory before delivery to HTTP client. If this limit is reached no filtering will
    executed and the content is directly forwarded to the client to prevent memory overload. Default is: `10485760` (=10
    MB)

### Insert server name in every HTML page.

``` caddyfile
filter rule {
    content_type text/html.*
    search_pattern Server
    replacement "This site was provided by {response_header_Server}"
}
```

### Add Google Analytics to every HTML page from a file.

``` caddyfile
filter rule {
    path .*\.html
    search_pattern </title>
    replacement @googleAnalyticsSnippet.html
}
```

### Replace in every text file Foo with Bar.

``` caddyfile
filter rule {
    path .*\.txt
    search_pattern Foo
    replacement Bar
}
```
