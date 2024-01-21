# http.proxyprotocol

This directive adds PROXY protocol (both v1 and v2) support to Caddy. The [PROXY
PROTOCOL](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) allows the client IP to be passed through a load
balancer like those used in
[AWS](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html#enable-proxy-protocol-cli)
or [Google Cloud](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/#proxy-protocol).

**[Full documentation](https://github.com/mastercactapus/caddy-proxyprotocol/blob/master/README.md)**

## Examples

### Enable PROXY Protocol Support

``` caddyfile
proxyprotocol
```

Requires all connections (both IPv4 and IPv6) to specify a PROXY header. Both V1 (human readable) and V2 (binary)
protocol versions are supported, and will be auto-detected.

### Filter by Source Address

``` caddyfile
proxyprotocol 10.22.0.0/16 10.23.0.1/32 ::/0
```

Requires connections from the subnet `10.22.0.0/16`, the IP `10.23.0.1`, and any IPv6 address to specify a PROXY header.
All connections from other sources will still operate normally, as if the `proxyprotocol` directive was not in use.
**Note** It is important to filter to only trusted sources (e.g. proxies, LB), since it is trivial to spoof the source
address otherwise.

### Custom Timeout

``` caddyfile
proxyprotocol {
  timeout 3s
}
```

Changes the timeout for reading the complete PROXY header to *3 seconds*. The default is 5 seconds.
