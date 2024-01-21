# hook.service

Always wanted to run Casket as a service? Here&#39;s what you&#39;ve been waiting for. This plugin was coded by me and
Henrique Dias, who is the main contributor for File Manager. Notes: Notice that if you install the service with a name
that is not the default&#39;s, you will need to specify it everytime you use one of the other commands using the flag
`-name`.

**[Full documentation](https://github.com/hacdias/caddy-service/blob/master/README.md)**

## Examples

### Install service

``` casketfile
casket -service install [-name optionalName]
```

### Uninstall service

``` casketfile
casket -service uninstall [-name optionalName]
```

### Start service

``` casketfile
casket -service start [-name optionalName]
```

### Stop service

``` casketfile
casket -service stop [-name optionalName]
```

### Restart service

``` casketfile
casket -service restart [-name optionalName]
```
