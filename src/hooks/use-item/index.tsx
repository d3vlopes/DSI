import { createContext, ReactNode, useContext } from 'react'

export type ItemContextData = {
  as: string
}

export const ItemDefaultValues = {
  as: 'h1',
}

export const ItemContext = createContext<ItemContextData>(ItemDefaultValues)

export type ItemProviderProps = {
  children: ReactNode
  as: string
}

function ItemProvider({ children, as }: ItemProviderProps) {
  return <ItemContext.Provider value={{ as }}>{children}</ItemContext.Provider>
}

const useItem = () => useContext(ItemContext)

export { ItemProvider, useItem }
