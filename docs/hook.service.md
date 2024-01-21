# hook.service

Always wanted to run Caddy as a service? Here&#39;s what you&#39;ve been waiting for. This plugin was coded by me and
Henrique Dias, who is the main contributor for File Manager. Notes: Notice that if you install the service with a name
that is not the default&#39;s, you will need to specify it everytime you use one of the other commands using the flag
`-name`.

**[Full documentation](https://github.com/hacdias/caddy-service/blob/master/README.md)**

## Examples

### Install service

``` caddyfile
caddy -service install [-name optionalName]
```

### Uninstall service

``` caddyfile
caddy -service uninstall [-name optionalName]
```

### Start service

``` caddyfile
caddy -service start [-name optionalName]
```

### Stop service

``` caddyfile
caddy -service stop [-name optionalName]
```

### Restart service

``` caddyfile
caddy -service restart [-name optionalName]
```
