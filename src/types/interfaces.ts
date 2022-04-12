export interface Contact {
  id?: string
  name: string
  email: string
  phone: string
  color?: string
  highlighted?: boolean
}

export type ModalStatus = 'create' | 'edit' | 'delete' | null
