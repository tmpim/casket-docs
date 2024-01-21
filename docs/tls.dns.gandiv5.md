# tls.dns.gandiv5

Allows you to obtain certificates using DNS records for domains managed with Gandi v5.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns gandiv5
}
```

Specify gandiv5 as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
