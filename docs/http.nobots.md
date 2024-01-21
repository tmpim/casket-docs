# http.nobots

Nobots protect your website against web crawlers and bots.

**[Full documentation](https://github.com/Xumeiquer/nobots/blob/master/README.md)**

## Examples

### Ban bots by user agent strings

``` caddyfile
nobots "bomb.gz" {
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  "Googlebot/2.1 (+http://www.google.com/bot.html)"
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  "Googlebot-News"
  "Googlebot-Image/1.0"
  "Googlebot-Video/1.0"
  "compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html"
  "Mediapartners-Google"
  "AdsBot-Google (+http://www.google.com/adsbot.html)"
  "AdsBot-Google-Mobile-Apps"
  "APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)"
}
```

It will send the bomb.gz to the Google bots listed inside the directive block.

### Ban bots by using regular expresions

``` caddyfile
nobots "bomb.gz" {
  regexp "bingbot"
}
```

It will send the bomb.gz to all user agents that contains bingbot.

### Mix of strings and regular expresions

``` caddyfile
nobots "bomb.gz" {
  "msnbot-media/1.1 (+http://search.msn.com/msnbot.htm)"
  regexp "bingbot"
}
```

It will send the bomb.gz to all user agents that contains bingbot and the one defined on the string as well.

### Unproctected URI

``` caddyfile
nobots "bomb.gz" {
  "Googlebot"
  public "^/public"
  public "^/[a-z]{,5}/public"
}
```

It will send the bomb.gz to all user agents that match Googlebot and the URI is not defined in the public keyword.
