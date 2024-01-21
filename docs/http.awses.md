# http.awses

Caddy plugin for signing and proxying requests to AWS Elasticsearch (AWS ES). Configuring access to an AWS ES domain can
be tricky. The access policy of an AWS ES domain is based on a principal (which necessitates a signed request) or an IP
address whitelist. Whitelisting IP addresses often isn&#39;t a viable option and standard tools (such as curl or a
browser) can&#39;t properly sign requests. This is exactly the problem this plugin aims to address. Standard tools can
make unauthenticated requests to the Caddy server which are then signed and proxied to the AWS ES service.

**[Full documentation](https://github.com/miquella/caddy-awses/blob/master/README.md)**

## Examples

### All regions and domains

``` caddyfile
awses
```

Proxies requests to any region and AWS Elasticsearch domain in the form:
/&lt;region&gt;/&lt;domain&gt;/&lt;destination&gt;

### Specific region (all domains)

``` caddyfile
awses {
    region us-west-2
}
```

Proxies requests to any AWS Elasticsearch domain in a specific region (us-west-2) in the form:
/&lt;domain&gt;/&lt;destination&gt;

### Specific domain (all regions)

``` caddyfile
awses {
    domain es-logs
}
```

Proxies requests to any region for a specific AWS Elasticsearch domain (es-logs) in the form:
/&lt;region&gt;/&lt;destination&gt;

### Complex / multiple prefixes

``` caddyfile
awses /docs/ {
    region us-east-1
    domain the-docs
}

awses /logs/ {
    domain es-logs
}

awses /other-account/logs/ {
    domain es-logs
    role arn:aws:iam::123456789012:role/elasticsearch-logs-us-east-2
}
```

Proxies requests to a specific domain (the-docs) and region (us-east-1) with a prefix (/docs/) in the form:
/docs/&lt;destination&gt; Also proxies requests to any region for a specific AWS Elasticsearch domain (es-logs) in the
form: /logs/&lt;region&gt;/&lt;destination&gt; Also proxies requests to any region for a specific AWS Elasticsearch
domain (es-logs) in another account (access through the role) in the form:
/other-account/logs/&lt;region&gt;/&lt;destination&gt;
