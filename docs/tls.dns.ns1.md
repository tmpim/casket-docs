# tls.dns.ns1

Allows you to obtain certificates using DNS records for domains managed with NS1.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns ns1
}
```

Specify ns1 as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
