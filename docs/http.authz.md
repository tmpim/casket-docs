# http.authz

Caddy-authz is an authorization middleware for Caddy, it&#39;s based on <https://github.com/casbin/casbin>. Casbin is a
powerful and efficient open-source access control library for Golang projects. It provides support for enforcing
authorization based on various models like ACL, RBAC, ABAC.

**[Full documentation](https://github.com/casbin/caddy-authz/blob/master/README.md)**

## Examples

### Simple Example

``` caddyfile
package main

import (
    "net/http"

    "github.com/casbin/caddy-authz"
    "github.com/casbin/casbin"
    "github.com/mholt/caddy/caddyhttp/httpserver"
)

func main() {
    // load the casbin model and policy from files, database is also supported.
    e := casbin.NewEnforcer("authz_model.conf", "authz_policy.csv")

    // define your handler, this is just an example to return HTTP 200 for any requests.
    // the access that is denied by authz will return HTTP 403 error.
    handler := authz.Authorizer{
        Next: httpserver.HandlerFunc(func(w http.ResponseWriter, r *http.Request) (int, error) {
            return http.StatusOK, nil
        }),
        Enforcer: e,
    }
}
```

Use a simple model file and policy file to do the authorization for the HTTP requests.
