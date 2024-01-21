# tls.dns.otc

Allows you to obtain certificates using DNS records for domains managed with Open Telekom Cloud Managed DNS.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns otc
}
```

Specify otc as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
