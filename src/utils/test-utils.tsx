import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { ItemContext, ItemContextData, ItemDefaultValues } from 'hooks/use-item'

import theme from 'styles/theme'

type CustomRenderProps = {
  itemProviderProps?: ItemContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    itemProviderProps = ItemDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <ItemContext.Provider value={itemProviderProps}>
        {ui}
      </ItemContext.Provider>
    </ThemeProvider>,
    renderOptions,
  )

// Permite importa tudo do mesmo lugar
export * from '@testing-library/react'
export { customRender as render }
