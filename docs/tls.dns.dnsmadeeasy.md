# tls.dns.dnsmadeeasy

Allows you to obtain certificates using DNS records for domains managed with DNS Made Easy.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns dnsmadeeasy
}
```

Specify dnsmadeeasy as the DNS provider within your tls directive. Make sure to set environment variables containing
your credentials.
