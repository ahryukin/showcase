import {
  createFetchTransport,
  FetchTransport,
  ICreateFetchTransportProps,
} from "./createFetchTransport"
import { ContactFormResult } from "@/ui/ContactForm"

type ICreateHttpClient = ICreateFetchTransportProps

export class HttpClient {
  private transport: FetchTransport

  constructor({ namespace }: ICreateHttpClient) {
    this.transport = createFetchTransport({
      namespace,
    })
  }
  sendContactForm = (data: ContactFormResult) =>
    this.transport.post("api/contactForm", JSON.stringify(data))
}

export const httpClient = new HttpClient({})
