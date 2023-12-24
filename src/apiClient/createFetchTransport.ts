import createHttpError from "http-errors"

export interface ICreateFetchTransportProps {
  namespace?: string
}

type Options = {
  responseType?: string
  timeout?: number
  headers?: {}
}

type FetchFunction = <ReturnType = any>(
  url: string,
  body: BodyInit,
  options?: Options & RequestInit
) => Promise<ReturnType>

export type FetchTransport = (<ReturnType = any>(
  url: string,
  body: BodyInit,
  options?: Options & RequestInit
) => Promise<ReturnType>) & {
  get: FetchFunction
  post: FetchFunction
  put: FetchFunction
  delete: FetchFunction
}

export const createFetchTransport = ({
  namespace = "/",
}: ICreateFetchTransportProps): FetchTransport => {
  const transportPart = async <ReturnType = any>(
    url: string,
    body: BodyInit,
    options: Options & RequestInit = {}
  ): Promise<ReturnType> => {
    const { responseType, timeout = 55000, headers = {} } = options

    const mergedOptions: RequestInit = {
      timeout,
      body,
      ...options,
      headers: {
        ...headers,
      },
    }

    if (!(body instanceof FormData)) {
      mergedOptions.headers = {
        ...mergedOptions.headers,
        "Content-Type": "application/json",
      }
    }

    const response: Response = await fetch(`${namespace}${url}`, mergedOptions)

    const contentType =
      (
        responseType ?? response.headers.get("content-type")
      )?.toLocaleLowerCase() ?? ""

    let responseData: Promise<any> | undefined

    if (contentType.includes("application/json")) {
      responseData = response.json()
    } else if (contentType.includes("blob")) {
      responseData = response.blob()
    } else if (contentType.includes("text")) {
      responseData = response.text()
    } else {
      return Promise.reject(new Error("Unexpected content type"))
    }

    if (response.ok) {
      return await responseData
    }

    const errorData = contentType.toLowerCase().includes("application/json")
      ? responseData
      : {}

    const httpError = createHttpError({ ...response, ...errorData })

    return Promise.reject(httpError)
  }

  const transport = Object.assign(transportPart, {
    get: (url: string, body: BodyInit, options: Options & RequestInit = {}) =>
      transport(url, body, { method: "GET", ...options }),

    post: (url: string, body: BodyInit, options: Options & RequestInit = {}) =>
      transport(url, body, { method: "POST", ...options }),

    delete: (
      url: string,
      body: BodyInit,
      options: Options & RequestInit = {}
    ) => transport(url, body, { method: "DELETE", ...options }),

    put: (url: string, body: BodyInit, options: Options & RequestInit = {}) =>
      transport(url, body, { method: "PUT", ...options }),
  })

  return transport
}
