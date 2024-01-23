# tls.dns.godaddy

Allows you to obtain certificates using DNS records for domains managed with GoDaddy.

**[Full documentation](https://github.com/tmpim/dnsproviders/blob/master/README.md)**

## Examples

### Usage

``` casketfile
tls {
  dns godaddy
}
```

Specify godaddy as the DNS provider within your tls directive. Make sure to set environment variables containing your
credentials.
