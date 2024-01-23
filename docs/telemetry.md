# Telemetry

::: danger TELEMETRY IS DISABLED

Telemetry is **disabled in Casket** as of 
[v1.2.10](https://github.com/tmpim/casket/blame/5fd2388ac586cc615be4fa8186ba5e4eaf72a03a/casket/casketmain/run.go#L612).

The documentation below is preserved here for historical purposes. You may still explicitly disable it if you prefer,
but it is unlikely that Casket will ever have telemetry. The code may be removed entirely in the future.

:::

The primary aim of the Casket Telemetry Project is to gain insights into the status and health of the Internet, globally
and in near-real-time, from a server-side perspective, without being constrained to a specific network or proprietary
source. A secondary goal is to provide server operators with information about their servers and their interactions with
clients.

<br />

#### Topics

[[toc]]

## Benefits of Telemetry {#benefits}

**Site owners:** Telemetry data makes it possible for operators to have a white-box understanding of their web servers.
Traditional monitoring tools usually require tedious analysis when anomalies occur because they have only an external
perspective of the process. Casket telemetry, on the other hand, operates from within the process and can give detailed
insights when you need answers. And when everything is nominal, it's also just really interesting to see how and what
your web server is doing. Telemetry is useful beyond access logging because it gives unique data points over time about
the effects your clients have on your servers.

**Researchers:** While client-side scans of the Internet are not uncommon, for the first time you now have access to a
global, *server-side* perspective from which to observe the behavior and health of the Internet. Casket telemetry is
uniquely positioned to offer anonymized aggregate data about *clients* on the Internet in conjunction together with an
internal view of the web servers which answer them. Our long-term hope is that with your participation and feedback, we
can build methods to detect emerging botnets, DDoS attacks, and other threats in real-time and work to automatically
mitigate them.

**Industry experts:** Information provided by Casket telemetry can certainly be useful when making decisions about new
Web standards, building out or monitoring network infrastructure, and developing Internet software.

## The Implementation {#implementation}

When telemetry is enabled, Casket takes various tallies and records certain events in the background while it is
running. It sends updates to a collector endpoint on a regular basis, flushing the local buffer of data.

Telemetry is implemented in a way that makes it unobtrusive and non-blocking to your process. Your Casket instance
should not suffer any noticable performance degredation. It has several safety measures built-in to ensure optimal
performance, even at the expense of the data, including a limit to the number of data points that can be buffered. The
collection endpoint may notice if certain metrics are too expensive and temporarily disable them on a per-instance basis
to improve performance. The collection endpoint may also entirely terminate telemetry reporting from any instance. In
addition, collection updates are tightly rate-limited, ensuring that telemetry never interferes with network throughput.

Each Casket instance generates its own unique, random ID called a UUID. It is stored in a file called `$CASKETPATH/uuid`
(the default CASKETPATH is `$HOME/.casket`). This UUID is NOT generated in connection with the collection endpoint in
any way, and does NOT associate with any individual person. We recommend that each Casket instance you run have its own
CASKETPATH so that your reports are more discernable when you go to look up your instance.

As you would expect, all transmissions are encrypted with HTTPS.

## The Metrics {#metrics}

This table lists the metrics that are collected by Casket core and the standard plugins in alphabetical order; but keep
in mind that third-party plugins might add their own which are not documented here; check their documentation instead.

| Key                            | Description                                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------------------------------------|
| arch                           | The microarchitecture compiled for                                                                            |
| casket_version                 | Casket version                                                                                                |
| container                      | Whether the process is running in a container                                                                 |
| cpu.aes_ni                     | Whether AES-NI is available                                                                                   |
| cpu.brand_name                 | The brand name of the CPU                                                                                     |
| cpu.num_logical                | Number of logical cores                                                                                       |
| directives                     | The list of directives used (directive name only)                                                             |
| disabled_metrics               | The list of individual metrics that have been disabled                                                        |
| goroutines                     | Number of goroutines currently running                                                                        |
| http_deployment_guess          | A rough guess as to whether it looks like a dev or production instance                                        |
| http_mitm                      | Count of whether [MITM was detected](/mitm-detection)                                                         |
| http_num_sites                 | Number of sites defined in your HTTP Casketfile (∑ blocks \* number of keys per block)                        |
| http_request_count             | Number of HTTP(S) requests handled                                                                            |
| http_user_agent                | User-Agent request header values                                                                              |
| http_user_agent_count          | Number of requests with the associated User-Agent string                                                      |
| memory.heap_alloc              | Bytes of allocated heap objects (reachable, or unreachable but not yet freed)                                 |
| memory.sys                     | Bytes of memory obtained from the OS                                                                          |
| instance_id                    | The instance UUID                                                                                             |
| num_listeners                  | Number of listeners opened                                                                                    |
| num_server_blocks              | The number of server blocks defined in your Casketfile                                                        |
| os                             | The OS compiled for                                                                                           |
| server_type                    | The server type plugin being run (HTTP, DNS, etc.)                                                            |
| sigtrap                        | Name and count of signal (or interrupt) trapped                                                               |
| timestamp                      | The timestamp of the telemetry update                                                                         |
| tls_acme_certs_obtained        | Number of certificates automatically obtained with ACME                                                       |
| tls_acme_certs_renewed         | Number of certificates automatically renewed with ACME                                                        |
| tls_acme_certs_revoked         | Number of certificates revoked using ACME                                                                     |
| tls_client_hello.cipher_suites | Cipher suites advertised in the TLS ClientHello                                                               |
| tls_client_hello.compression   | Compression methods advertised in the TLS ClientHello                                                         |
| tls_client_hello.curves        | Curves advertised in the TLS ClientHello                                                                      |
| tls_client_hello.extensions    | Extensions advertised in the TLS ClientHello                                                                  |
| tls_client_hello.points        | Points advertised in the TLS ClientHello                                                                      |
| tls_client_hello.version       | Supported version advertised in the TLS ClientHello                                                           |
| tls_client_hello_ua            | Counts of HTTPS requests with the given User-Agent strings that connected with the associated TLS ClientHello |
| tls_handshake_count            | Number of TLS handshakes completed                                                                            |
| tls_managed_cert_count         | How many certificates are being managed                                                                       |
| tls_manual_cert_count          | How many certificates are manually provided                                                                   |
| tls_on_demand_count            | Number of sites configured for [On-Demand TLS](/automatic-https#on-demand)                                    |
| tls_self_signed_count          | Number of sites configured to use integrated self-signed certificates                                         |

## Disabling Telemetry {#disable}

Telemetry is enabled by default in the source code and disabled by default on our download page. In order to better know
how representative the aggregate data is, telemetry may be toggled at compile-time or customized at run-time.

**Note that telemetry does NOT target personal information.** Telemetry is programmed to report only technical data
about machines, connections, and Casket instances; NOT end users, session IDs, cookies, etc. If you are considering
turning off telemetry because of applicable laws, make sure the laws actually apply to you.

The recommended way to disable telemetry is to turn off only the metrics that you do not want to report. You can do this
with the [`-disabled-metrics` CLI flag](/cli#disabled-metrics). (The disabled_metrics, timestamp, and instance_id
metrics cannot be disabled individually.) This will prevent Casket from collecting the specified information throughout
the lifetime of the process, and is useful if, for example, you discover that a particular metric is causing your
telemetry buffer to fill up too quickly under heavy load (there is a limit to how many items can be buffered for
emission).

However, if you wish to disable telemetry entirely, it can be done at compile-time. When you download Casket from the
website, you can choose to have telemetry disabled. If building from source, you can set `enableTelemetry` to false to
turn it off. Note that if you disable telemetry you will not have the ability to look up your instance and view its
metrics. It also does not contribute to the research efforts that are otherwise made possible, and it makes it difficult
to diagnose problems and improve Casket. We recommend leaving telemetry on to gain [its benefits](#benefits) and to
improve the Web overall.
