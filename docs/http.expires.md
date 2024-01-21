# http.expires

expires allows you to set expiration header relative to the request time. It allows you to set different expiration
durations base on a path matching a regular expression.

**[Full documentation](https://github.com/epicagency/caddy-expires/blob/master/README.md)**

## Examples

### Syntax

``` caddyfile
expires {
    match regex duration
}
```

*match*: a regular expression matching on path and an expiration duration. Match subdirective can be repeated as many
times as you want but only the first matching will be used. Duration is a combination of 0y0m0d0h0i0s in that order.
Parts can be omitted.

### Expires various assets.

``` caddyfile
expires {
    match some/path/.*.css$ 1y # expires
    css files in some/path after one year
    match .js$ 1m # expires
    js files after 30 days
    match .png$ 1d # expires
    png files after one day
    match .jpg$ 1h # expires
    jpg files after one hour
    match .pdf$ 1i # expires
    pdf file after one minute
    match .txt$ 1s # expires
    txt files after one second
    match .html$ 5i30s # expires
    html files after 5 minutes 30 seconds
}
```

You can specify as many match directives you need for fine-grained expiration control. The first matching rule is used.

### Expires based on header value

``` caddyfile
expires {
    match_header Content-Type .*/json 1d
}
```

You can also match on the value of a *RESPONSE* header. Useful for content-type matching for instance.
