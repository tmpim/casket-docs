# tls.dns.azure

Allows you to obtain certificates using DNS records for domains managed with Microsoft Azure.

**[Full documentation](https://github.com/caddyserver/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` caddyfile
tls {
    dns azure
}
```

Use this in your tls directive. Be sure to set credentials using environment variables. (See docs.)
