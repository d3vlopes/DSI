import { Story, Meta } from '@storybook/react/types-6-0'
import ProductService from '.'

export default {
  title: 'ProductService',
  component: ProductService
} as Meta

export const Default: Story = () => <ProductService />
