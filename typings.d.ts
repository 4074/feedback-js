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
  strings?: FeedbackStrings
  onClick?: (event: MouseEvent) => {}
}

interface FeedbackStrings {
  title?: string
  submit?: string
  labels?: {
    input?: string
    image?: string
  }
  placeholders?: {
    input?: string
    image?: string
  }
  contact?: string
}
