# http.locale

Locale detection for caddy

**[Full documentation](https://github.com/simia-tech/caddy-locale/blob/master/README.md)**

## Examples

### Cookie / header locale detection

``` caddyfile
locale en de {
  detect cookie header
}

rewrite {
  ext /
  to index.{>Detected-Locale}.html index.html
}

header / Vary "Cookie, Accept-Language"
```

This example tries read the locale from a cookie and if this fails, uses the Accept-Language header.
