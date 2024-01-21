# http.realip

This plugin allows you to see the actual client IP from `X-Forwarded-For` headers if you are running behind a CDN or
Proxy. It will make it so logs and other downstream directives will see the actual client IP, *not* the proxy&#39;s.
Implements security measures so that X-Forwarded-For cannot be spoofed from unauthorized IP ranges.

**[Full documentation](https://github.com/captncraig/caddy-realip/blob/master/README.md)**

## Examples

### Accept X-Forwarded-For from known IPs only

``` caddyfile
realip {
    from 1.2.3.4/32
    from 2.3.4.5/32
}
```

### Cloudflare Preset

``` caddyfile
realip cloudflare
```

Automatically adds cloudflare ips to allowed set.
