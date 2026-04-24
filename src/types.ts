export type Task = {
  id: number
  text: string
  done: boolean
}

export type FilterType = 'all' | 'active' | 'done'