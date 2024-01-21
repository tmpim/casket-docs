# tls.dns.duckdns

Allows you to obtain certificates using DNS records for domains managed by DuckDNS.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns duckdns
}
```

Specify duckdns as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
