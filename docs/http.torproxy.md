# http.torproxy

Expose a http based onion server to clearnet via caddy including autoTLS capabilities.

**[Full documentation](https://torproxy.okkur.org/docs)**

## Examples

### Simple

``` caddyfile
example.test {
  torproxy example.test somewhereonthe.onion 
}
```

This config maps the domain example.test to somewhereonthe.onion, which should be your actual onion address.
