# Casket

Casket is a fork of [mholt's Caddy web server](https://github.com/caddyserver/caddy) v1. Its goal is to maintain Caddy's
original goal of being a straight forward, simple to use web server rather than the direction of Caddy v2 which has a
focus on microservices and programmatic configurability.

Casket will come with all the features you love about Caddy v1, while also adding our own touches for convenience and
usability.

<div class="tight-list">

- [Getting Started](/tutorial)
- [Download Casket](https://github.com/tmpim/casket/releases)
- [GitHub](https://github.com/tmpim/casket)

</div>

## New in Casket

<!-- TODO: Link to documentation pages for these -->

<div class="tight-list">

- Provide multi-platform Docker images at `ghcr.io/tmpim/casket`
- Add `serverarchive` to download folders as archives in the [`browse`](/browse) directive
  ([17c7b06](https://github.com/tmpim/casket/commit/17c7b06))
- Default `browse` template is laid out better on mobile ([#24](https://github.com/tmpim/casket/pull/24))
- Backported `try_files` directive from Caddy v2 ([#15](https://github.com/tmpim/casket/pull/15))
- Add `exclude` directive to `basicauth`
  ([52c171f](https://github.com/tmpim/casket/commit/52c171f6c6d5941e0fd3e75aaad202a68f1305bc))
- Automatic MIME type detection based on extension to the `mime` directive
  ([67a1cb7..69ea3e2](https://github.com/tmpim/casket/compare/67a1cb7..69ea3e2))
- Redirect HTTP -> HTTPS even for self-managed TLS configurations (`self_signed`, own certificates, etc.)
  ([#26](https://github.com/tmpim/casket/pull/26))
- Environment variables everywhere placeholders are supported
  ([1bedd5e](https://github.com/tmpim/casket/commit/1bedd5e))
- Allow use of multiple headers for loadbalancing policy in the [`proxy`](/proxy) directive
  ([#1](https://github.com/tmpim/casket/pull/1))

</div>

## Fixes/updates in Casket

The following fixes have been made in Casket since the last Caddy v1 build:

<div class="tight-list">

- Updated various DNS providers
- Support newer API tokens in `tls.cloudflare.dns`
  ([dnsproviders@b6e727b..66e13a8](https://github.com/tmpim/dnsproviders/compare/b6e727b..66e13a8))
- Don't try to obtain certificates for reserved TLDs such as `.example`, `.invalid`, `.localhost`, `.test`, `.local` and
  `.app` ([#12](https://github.com/tmpim/casket/issues/12))
- Try all extensions in `ext` directive ([#4](https://github.com/tmpim/casket/pull/4/commits/9e4238c))

</div>

## Is Casket actively maintained?

Yes! Casket is actively maintained by a group of open source volunteers from [tmpim](https://github.com/tmpim). It is
considered to be stable software, so it does not see much active development, but we do fix bugs and add features when
necessary. [Pull requests](https://github.com/tmpim/casket) are welcome for any bug fixes or feature-creep you may
encounter along the way.

[(see more)](https://github.com/tmpim/casket/issues/25#issuecomment-1840117408)

## Why not Caddy v2?

Our concerns with forking Caddy were mostly around keeping us within the bounds of what was provided to us by Caddy v1,
without having to teach a whole lot of people the new semantics of Caddy v2's configuration format and pulling in a load
of unnecessary "cloud-native" features. There are a few big things that pushed us away:

1. Caddy v2 seems focused, as mentioned, on being a "cloud-native" web server a-la Traefik and co. This is great for
   those in that space, but for a bunch of developers best described as "hackers" who run our own small infrastructure
   it is biting off far too much to chew.
2. Somewhat a side effect of the above, but Caddy v2 has terrible defaults for the average user. Things like JSON logs,
   Admin API, are all on by default with difficult at best ways to opt-out of those features.
3. The configuration language was completely replaced, providing completely different semantics more similar to NGINX
   than what made Caddy good before. It still has automatic certificate management, but that's about all of the previous
   magic that remains.

[(see more)](https://github.com/tmpim/casket/issues/25#issuecomment-1840117408)

## Known issues with Casket

Asides from any possible [open issues](https://github.com/tmpim/casket/issues) on GitHub, there are two big fish to fry
for true maintainability going forward, that you should be aware of if you are considering using Casket:

- [Certmagic is very out of date](https://github.com/tmpim/casket/issues/19); we are at risk of using deprecation path
  ACME depending on what direction Let's Encrypt may go in the future. tmpim is mostly missing anyone with a motivation
  to tackle this, and we probably **wouldn't recommend casket for production / enterprise reliability for this reason**.
  It's still a great tool for personal use or scenarios where you're comfortable exploring a different web server in the
  future if the project gets too stale.
- Any plugin ecosystem is missing, and you will lose any benefits of the public builds if you have use-cases that fall
  outside of ours without making an effort to merge those plugins upstream in
  [casket-plugins](https://github.com/tmpim/casket-plugins) (PRs definitely welcome there too!).

[(see more)](https://github.com/tmpim/casket/issues/25#issuecomment-1840117408)
