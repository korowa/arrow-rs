(function() {var type_impls = {
"arrow_integration_testing":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-FlightServiceClient%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-FlightServiceClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for FlightServiceClient&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; FlightServiceClient&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","arrow_integration_testing::flight_client_scenarios::auth_basic_proto::Client","arrow_integration_testing::flight_client_scenarios::integration_test::Client"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-FlightServiceClient%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-FlightServiceClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for FlightServiceClient&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_integration_testing::flight_client_scenarios::auth_basic_proto::Client","arrow_integration_testing::flight_client_scenarios::integration_test::Client"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FlightServiceClient%3CChannel%3E\" class=\"impl\"><a href=\"#impl-FlightServiceClient%3CChannel%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl FlightServiceClient&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/transport/channel/struct.Channel.html\" title=\"struct tonic::transport::channel::Channel\">Channel</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">connect</a>&lt;D&gt;(dst: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;FlightServiceClient&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/transport/channel/struct.Channel.html\" title=\"struct tonic::transport::channel::Channel\">Channel</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/transport/error/struct.Error.html\" title=\"struct tonic::transport::error::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/transport/channel/endpoint/struct.Endpoint.html\" title=\"struct tonic::transport::channel::endpoint::Endpoint\">Endpoint</a>&gt;,\n    &lt;D as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/transport/channel/endpoint/struct.Endpoint.html\" title=\"struct tonic::transport::channel::endpoint::Endpoint\">Endpoint</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html#associatedtype.Error\" title=\"type core::convert::TryInto::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempt to create a new client by connecting to a given endpoint.</p>\n</div></details></div></details>",0,"arrow_integration_testing::flight_client_scenarios::auth_basic_proto::Client","arrow_integration_testing::flight_client_scenarios::integration_test::Client"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FlightServiceClient%3CT%3E\" class=\"impl\"><a href=\"#impl-FlightServiceClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; FlightServiceClient&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;,\n    &lt;T as <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html#associatedtype.Error\" title=\"type tonic::client::service::GrpcService::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,\n    &lt;T as <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html#associatedtype.ResponseBody\" title=\"type tonic::client::service::GrpcService::ResponseBody\">ResponseBody</a>: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.6/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&lt;Data = Bytes&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    &lt;&lt;T as <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html#associatedtype.ResponseBody\" title=\"type tonic::client::service::GrpcService::ResponseBody\">ResponseBody</a> as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.6/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.6/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(inner: T) -&gt; FlightServiceClient&lt;T&gt;</h4></section><section id=\"method.with_origin\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_origin</a>(inner: T, origin: <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a>) -&gt; FlightServiceClient&lt;T&gt;</h4></section><section id=\"method.with_interceptor\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_interceptor</a>&lt;F&gt;(\n    inner: T,\n    interceptor: F,\n) -&gt; FlightServiceClient&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/service/interceptor/struct.InterceptedService.html\" title=\"struct tonic::service::interceptor::InterceptedService\">InterceptedService</a>&lt;T, F&gt;&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/service/interceptor/trait.Interceptor.html\" title=\"trait tonic::service::interceptor::Interceptor\">Interceptor</a>,\n    &lt;T as <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html#associatedtype.ResponseBody\" title=\"type tonic::client::service::GrpcService::ResponseBody\">ResponseBody</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    T: Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;, Response = <a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;&lt;T as <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html\" title=\"trait tonic::client::service::GrpcService\">GrpcService</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/tonic/0.11.0/tonic/client/service/trait.GrpcService.html#associatedtype.ResponseBody\" title=\"type tonic::client::service::GrpcService::ResponseBody\">ResponseBody</a>&gt;&gt;,\n    &lt;T as Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http-body/0.4.6/http_body/combinators/box_body/struct.UnsyncBoxBody.html\" title=\"struct http_body::combinators::box_body::UnsyncBoxBody\">UnsyncBoxBody</a>&lt;Bytes, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;&gt;&gt;&gt;::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.send_compressed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">send_compressed</a>(\n    self,\n    encoding: <a class=\"enum\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/compression/enum.CompressionEncoding.html\" title=\"enum tonic::codec::compression::CompressionEncoding\">CompressionEncoding</a>,\n) -&gt; FlightServiceClient&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Compress requests with the given encoding.</p>\n<p>This requires the server to support it otherwise it might respond with an\nerror.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.accept_compressed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">accept_compressed</a>(\n    self,\n    encoding: <a class=\"enum\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/compression/enum.CompressionEncoding.html\" title=\"enum tonic::codec::compression::CompressionEncoding\">CompressionEncoding</a>,\n) -&gt; FlightServiceClient&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Enable decompressing responses.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_decoding_message_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">max_decoding_message_size</a>(self, limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; FlightServiceClient&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Limits the maximum size of a decoded message.</p>\n<p>Default: <code>4MB</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoding_message_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">max_encoding_message_size</a>(self, limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; FlightServiceClient&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Limits the maximum size of an encoded message.</p>\n<p>Default: <code>usize::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handshake\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">handshake</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoStreamingRequest.html\" title=\"trait tonic::request::IntoStreamingRequest\">IntoStreamingRequest</a>&lt;Message = HandshakeRequest&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;HandshakeResponse&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Handshake between client and server. Depending on the server, the\nhandshake may be required to determine the token that should be used for\nfuture operations. Both request and response are streams to allow multiple\nround-trips depending on auth mechanism.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.list_flights\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">list_flights</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;Criteria&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;FlightInfo&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Get a list of available streams given a particular criteria. Most flight\nservices will expose one or more streams that are readily available for\nretrieval. This api allows listing the streams available for\nconsumption. A user can also provide a criteria. The criteria can limit\nthe subset of streams that can be listed via this interface. Each flight\nservice allows its own definition of how to consume criteria.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_flight_info\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">get_flight_info</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;FlightDescriptor&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;FlightInfo&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>For a given FlightDescriptor, get information about how the flight can be\nconsumed. This is a useful interface if the consumer of the interface\nalready can identify the specific flight to consume. This interface can\nalso allow a consumer to generate a flight stream through a specified\ndescriptor. For example, a flight descriptor might be something that\nincludes a SQL statement or a Pickled Python operation that will be\nexecuted. In those cases, the descriptor will not be previously available\nwithin the list of available streams provided by ListFlights but will be\navailable for consumption for the duration defined by the specific flight\nservice.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_flight_info\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">poll_flight_info</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;FlightDescriptor&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;PollInfo&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>For a given FlightDescriptor, start a query and get information\nto poll its execution status. This is a useful interface if the\nquery may be a long-running query. The first PollFlightInfo call\nshould return as quickly as possible. (GetFlightInfo doesn’t\nreturn until the query is complete.)</p>\n<p>A client can consume any available results before\nthe query is completed. See PollInfo.info for details.</p>\n<p>A client can poll the updated query status by calling\nPollFlightInfo() with PollInfo.flight_descriptor. A server\nshould not respond until the result would be different from last\ntime. That way, the client can “long poll” for updates\nwithout constantly making requests. Clients can set a short timeout\nto avoid blocking calls if desired.</p>\n<p>A client can’t use PollInfo.flight_descriptor after\nPollInfo.expiration_time passes. A server might not accept the\nretry descriptor anymore and the query may be cancelled.</p>\n<p>A client may use the CancelFlightInfo action with\nPollInfo.info to cancel the running query.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_schema\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">get_schema</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;FlightDescriptor&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;SchemaResult&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>For a given FlightDescriptor, get the Schema as described in Schema.fbs::Schema\nThis is used when a consumer needs the Schema of flight stream. Similar to\nGetFlightInfo this interface may generate a new flight that was not previously\navailable in ListFlights.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.do_get\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">do_get</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;Ticket&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;FlightData&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Retrieve a single stream associated with a particular descriptor\nassociated with the referenced ticket. A Flight can be composed of one or\nmore streams where each stream can be retrieved using a separate opaque\nticket that the flight service uses for managing a collection of streams.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.do_put\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">do_put</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoStreamingRequest.html\" title=\"trait tonic::request::IntoStreamingRequest\">IntoStreamingRequest</a>&lt;Message = FlightData&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;PutResult&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Push a stream to the flight service associated with a particular\nflight stream. This allows a client of a flight service to upload a stream\nof data. Depending on the particular flight service, a client consumer\ncould be allowed to upload a single stream per descriptor or an unlimited\nnumber. In the latter, the service might implement a ‘seal’ action that\ncan be applied to a descriptor once all streams are uploaded.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.do_exchange\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">do_exchange</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoStreamingRequest.html\" title=\"trait tonic::request::IntoStreamingRequest\">IntoStreamingRequest</a>&lt;Message = FlightData&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;FlightData&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Open a bidirectional data channel for a given descriptor. This\nallows clients to send and receive arbitrary Arrow data and\napplication-specific metadata in a single logical stream. In\ncontrast to DoGet/DoPut, this is more suited for clients\noffloading computation (rather than storage) to a Flight service.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.do_action\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">do_action</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;Action&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;Result&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Flight services can support an arbitrary number of simple actions in\naddition to the possible ListFlights, GetFlightInfo, DoGet, DoPut\noperations that are potentially available. DoAction allows a flight client\nto do a specific action against a flight service. An action includes\nopaque request and response objects that are specific to the type action\nbeing undertaken.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.list_actions\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">list_actions</a>(\n    &amp;mut self,\n    request: impl <a class=\"trait\" href=\"https://docs.rs/tonic/0.11.0/tonic/request/trait.IntoRequest.html\" title=\"trait tonic::request::IntoRequest\">IntoRequest</a>&lt;Empty&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/response/struct.Response.html\" title=\"struct tonic::response::Response\">Response</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/codec/decode/struct.Streaming.html\" title=\"struct tonic::codec::decode::Streaming\">Streaming</a>&lt;ActionType&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/tonic/0.11.0/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt;</h4></section></summary><div class=\"docblock\"><p>A flight service exposes all of the available action types that it has\nalong with descriptions. This allows different flight consumers to\nunderstand the capabilities of the flight service.</p>\n</div></details></div></details>",0,"arrow_integration_testing::flight_client_scenarios::auth_basic_proto::Client","arrow_integration_testing::flight_client_scenarios::integration_test::Client"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()