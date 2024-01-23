# dns

A DNS server plugin.

**[Full documentation](https://github.com/coredns/coredns/blob/master/README.md)**

## Examples

### CoreDNS

``` casketfile
.:53 {
  cache
  forward . 8.8.8.8:53
  log
  errors
}
```

See <https://coredns.io> for more documentation.
