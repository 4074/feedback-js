declare namespace Model {
  interface App {
    id: string
  }

  interface Request {
    id?: number
    send: (data: any) => void
  }
}

declare interface FeedbackOptions {
  container?: Element
  messages?: FeedbackOptionsMessage
  onClick?: (event: MouseEvent) => {}
}

interface FeedbackOptionsMessage {
  title?: string
  labels?: {
    input?: string
    image?: string
  }
  placeholders?: {
    input?: string
    image?: string
  }
  footer?: string
}
