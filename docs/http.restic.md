# http.restic

The restic plugin serves a restic repository at a path. Restic is a secure and fast backup program, see
<https://restic.github.io> for details

**[Full documentation](https://github.com/restic/caddy/blob/master/README.md)**

## Examples

### Serve a restic repository at path /foo

``` caddyfile
basicauth /foo user pass
restic    /foo /home/me/backups
```

This servers the restic repository at /home/me/backups in the path /foo via caddy.
