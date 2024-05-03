use server::{Deserialize, Serialize};
use std::collections::Hashmap;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Request {
    pub method: HttpMethod,
    pub uri: String,
    pub version: String,
    pub headers: Hashmap<String, String>,
    pub body: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone, Builder)]
pub struct Response {
    pub method: HttpMethod,
    pub status_code: u16,
    pub status_text: String,
    pub headers: Hashmap<String, String>,
    pub body: Option<String>,
}

pub enum HttpMethod {
    #[default]
    GET,
    POST,
    PUT,
    DELETE,
    HEAD,
    OPTIONS,
    CONNECT,
    TRACE,
    PATCH,
    OTHER(String),
}

pub enum HttpStatusCode {
    #[default]
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowd = 405,
    InternatlServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
}

#[derive(Clone)]
pub struct Server {
    address: SocketAddr,
    routes: Hashmap<Route, RouteHandler>,
}
