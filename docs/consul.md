# consul

This plugin allows Casket to use Consul Key/Value store to share TLS data across multiple Casket instances in a cluster.

**[Full documentation](https://github.com/pteich/caddy-tlsconsul/blob/master/README.md)**

## Examples

### Enable Consul cluster support

``` casketfile
# enable Consul clustering plugin
export CASKET_CLUSTERING="consul"

# set k/v path prefix
export CASKET_CLUSTERING_CONSUL_PREFIX="casketfile/tls"

# set AES key to use for encryption (32 Bytes)
export CASKET_CLUSTERING_CONSUL_AESKEY="consultls-1234567890-casketfiletls-32"

# set Consul address
export CONSUL_HTTP_ADDR="127.0.0.1:8500"

# set Consul access token
export CONSUL_HTTP_TOKEN=""
```

The plugin is configured using environment variables. Be sure to enable Consul cluster support setting CASKET_CLUSTERING
to &#34;consul&#34;.
