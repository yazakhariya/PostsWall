
export type ElementType = {
  title: string
  id: number
  body: string
}

export type R = {
  [index:number] : ElementType
  map(arg0: (el: ElementType, i: number) => void): import('react').ReactNode
}

export type QueryFn = {
  length: number
  filter(arg0: (el: ElementType) => void): R
  map(arg0: (el: ElementType, i: number) => void): import('react').ReactNode
  element: ElementType
}
