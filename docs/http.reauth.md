# http.reauth

A common basis for authenticating with various and multiple authentication systems. This came to be as we wanted to
dynamically authenticate our docker registry against gitlab-ci and avoid storing credentials in gitlab while still
permitting users to log in with their own credentials.

**[Full documentation](https://github.com/freman/caddy-reauth/blob/master/README.md)**

## Examples

### Configuration

``` caddyfile
reauth {
    path /v2
    simple username=password,root=badpractice
    upstream url=https://accounts.example.com/check
    gitlab url=https://gitlab.example.com/
}
```

Authenticate access against /v2 with the following flow (in this order):

1. Does the username and password match any of the given comma seperated credentials?
2. Basic HTTP auth against <https://accounts.example.com/check> 
3. Against a GitLab project with the `gitlab-ci-token` user: 
    ```shell
    docker login docker.example.com -u "$CI_PROJECT_PATH"" -p "$CI_BUILD_TOKEN"
    ```
