# tls.dns.auroradns

Allows you to obtain certificates using DNS records for domains managed with AuroraDNS.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns auroradns
}
```

Specify auroradns as the DNS provider within your tls directive.
