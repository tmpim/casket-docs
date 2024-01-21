# http.datadog

Datadog plugin allow Caddy HTTP/2 web server to send some metrics to Datadog. This plugin is not only working with
Datadog, it also compatible with all services using statsd.

**[Full documentation](https://github.com/payintech/caddy-datadog/blob/master/README.md)**

## Examples

### Configuration

``` caddyfile
example-b.com {
  datadog {
    statsd 127.0.0.1:8125
    tags tag1 tag2 tag3
  }
}
```
