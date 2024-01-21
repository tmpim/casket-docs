# tls.dns.cloudxns

Allows you to obtain certificates using DNS records for domains managed with CloudXNS.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns cloudxns
}
```

Specify cloudxns as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
