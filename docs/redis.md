# redis

This plugin allows Casket to use Redis to store and share TLS data across multiple Casket instances in a cluster.

<!-- TODO: -->
<!--**[Full documentation](/blob/master/README.md)**-->

## Examples

### Examples

``` casketfile
export CASKET_CLUSTERING="redis"

# set Redis Host
export CASKET_CLUSTERING_REDIS_HOST="127.0.0.1"

# set Redis Port
export CASKET_CLUSTERING_REDIS_PORT="6379"

# set Redis DB
export CASKET_CLUSTERING_REDIS_DB="9"

# set Redis Password
export CASKET_CLUSTERING_REDIS_PASSWORD=""
```

The plugin is configured using environment variables. Be sure to enable Redis cluster support setting CASKET_CLUSTERING
to &#34;redis&#34;.
