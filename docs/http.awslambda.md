# http.awslambda

The awslambda plugin gateways requests to AWS Lambda functions.

**[Full documentation](https://github.com/coopernurse/caddy-awslambda/blob/master/README.md)**

## Examples

### Proxy /api/\* requests to Lambda

``` caddyfile
awslambda /api/ {
    aws_region  us-west-2
    qualifier   prod
    include     api-*
    exclude     *-internal
}
```

Proxy requests starting with /api/ to AWS Lambda using the us-west-2 region, for functions staring with api- but not
ending with -internal. A qualifier is used to target the prod aliases for each function. For example, requests to
/api/api-user would each invoke the AWS Lambda function named &#34;api-user&#34;.
