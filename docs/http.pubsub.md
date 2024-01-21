# http.pubsub

The pubsub plugin implements a longpoll-based publish and subscribe middleware for Caddy. It lets you easily push event
notifications to any practical number of web clients. To publish an event, post content that includes a category and
body to the “publish” URL configured in the Caddyfile. To subscribe to published events, simply connect your web client
to the “subscribe” URL configured in the Caddyfile. To manage the subscription connection, include the small,
dependency-free file ps.js in your web application and use the non-blocking methods of a Subscriber instance.

**[Full documentation](https://jung-kurt.github.io/pubsub/)**

## Examples

### Simple publish and subscribe example

In the Caddyfile:

``` caddyfile
pubsub /chat/publish /chat/subscribe
```

From a browser or wget:

``` shell
curl 'https://example.com/chat/publish?category=team&body=Hello%20world'
```

In this example, the body “Hello world” is dispatched to all subscribers of the “team” category. In general, you will
want to restrict access to the publish and subscribe URLs, something that this example does not demonstrate.
