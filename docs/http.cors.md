# http.cors

Supports Cross Origin Resource Sharing headers

**[Full documentation](https://github.com/captncraig/cors/blob/master/README.md)**

## Examples

### Simple usage

``` caddyfile
cors
```

Allows all origins access to all resources

### Only allow certain origin domains

``` caddyfile
cors / http://mytrusteddomain.tld http://myotherdomain.com
```

Only allow cross-origin requests from a few specific domains

### Full config

``` caddyfile
cors / {
    origin            http://allowedsite.com
    origin            http://anothersite.org https://anothersite.org
    methods           POST,PUT
    allow_credentials false
    max_age           3600
    allowed_headers   X-Custom-Header,X-Foobar
    exposed_headers   X-Something-Special,SomethingElse
}
```

Shows examples of all available options
