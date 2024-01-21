# http.cache

The cache directive adds http caching

**[Full documentation](https://github.com/nicolasazrak/caddy-cache/blob/master/README.md)**

## Examples

### basic example

``` caddyfile
yoursite.caddy {
    cache
    proxy / localhost:8080
}
```

This is the most basic usage. It will cache successful responses and save them in a temp folder. It will respect
cache-control headers if present. If no expiration is specified it will use a default of 5 minutes.

### advanced usage

``` caddyfile
caddy.test {
    proxy / yourserver:5000
    cache {
        match_path /assets
        match_header Content-Type image/jpg image/png
        status_header X-Cache-Status
        default_max_age 15m
        path /tmp/caddy-cache
    }
}
```

You can specify more advanced options such as: - match_path: It will cache given path unless a header specifies
otherwise (cache-control: private) - match_header: It will cache responses with given header. In the example: every
response with Content-Type image/jpg OR image/png will be cached unless a header specifies otherwise - status_header: Is
the header name to set with the cache status. The value will be one of the following: hit, miss, skip or bypass -
default_max_age: It specifies the default expiration for cached responses when headers do not specify it. - path: where
to store the responses. Make sure it exists and it is writable by caddy process.
