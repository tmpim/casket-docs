# redis

This plugin allows Caddy to use Redis to store and share TLS data across multiple Caddy instances in a cluster.

**[Full documentation](/blob/master/README.md)**

## Examples

### Examples

``` caddyfile
export CADDY_CLUSTERING="redis"

# set Redis Host
export CADDY_CLUSTERING_REDIS_HOST="127.0.0.1"

# set Redis Port
export CADDY_CLUSTERING_REDIS_PORT="6379"

# set Redis DB
export CADDY_CLUSTERING_REDIS_DB="9"

# set Redis Password
export CADDY_CLUSTERING_REDIS_PASSWORD=""
```

The plugin is configured using environment variables. Be sure to enable Redis cluster support setting CADDY_CLUSTERING
to &#34;redis&#34;.
