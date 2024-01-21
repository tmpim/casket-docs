# dyndns

Using cloudflare, pdd.yandex or dnspod as in dynamic dns mode

**[Full documentation](https://github.com/linkonoid/caddy-dyndns/blob/master/README.md)**

## Examples

### Full directive config example

``` caddyfile
dyndns {
    provider cloudflare     
    ipaddress http://whatismyip.akamai.com/
    auth hunter2 me@example.com
    domains example.com www.example.com
    period 30m
}
```

provider: cloudflare/yandex/dnspod - name dns provider

ipaddress: http/remote/local/xxx.xxx.xxx.xxx - get external IP from remote server (<http://whatismyip.akamai.com/>,
<http://ipv4.myexternalip.com/raw> or other with body in RAW format)/get remote IP auto in local mode/ get local IP
auto)/Hand your IP xxx.xxx.xxx.xxx

auth: AuthApikeyToken - authentification token and via space Email - email address (for yandex - not present)

domains: name.tld - list of domains to update via space symbol

period: XXs/XXm/XXh/XXd - time period IP update (s - seconds, m - minutes, h - hours, d - days)
