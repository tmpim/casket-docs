# tls.dns.rfc2136

Allows you to obtain certificates using DNS records for domains managed with any RFC 2136 compliant DNS provider.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns rfc2136
}
```

Configure this in your tls directive.
