declare type StringKeyObj<T> = {
  [key in string]: T
}

declare namespace Model {
  interface App {
    id: string
  }

  interface Request {
    id?: number
    upload: (data: any) => void
  }
}

declare interface FeedbackOptions {
  url?: string
  container?: Element
  strings?: FeedbackStrings
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

interface FeedbackRequestData {
  id: string
  path: string
  userAgent: string
  user?: any
  message: string
}
