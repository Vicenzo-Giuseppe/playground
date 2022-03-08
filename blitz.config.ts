import {
  BlitzConfig,
  sessionMiddleware,
  simpleRolesIsAuthorized,
  Middleware,
  connectMiddleware,
} from "blitz"

const client_id = "737f044613e64d6ab19ce41487785200"
const redirect_url = "http://localhost:3000/error"

const securityHeaders = [
  { key: "response_type", value: "code" },
  { key: "client_id", value: client_id },
  { key: "redirect_url", value: redirect_url },
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Access-Control-Allow-Credentials", value: "true" },
  { key: "Access-Control-Allow-Methods", value: "GET,HEAD,OPTIONS,POST,PUT" },
  {
    key: "Access-Control-Allow-Headers",
    value:
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  },
]

const config: BlitzConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: securityHeaders,
      },
    ]
  },
  middleware: [
    sessionMiddleware({
      cookiePrefix: "a",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
}
module.exports = config
