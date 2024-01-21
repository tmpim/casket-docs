# tls.dns.powerdns

Allows you to obtain certificates using DNS records for domains managed with PowerDNS.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns powerdns
}
```

Specify powerdns as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
