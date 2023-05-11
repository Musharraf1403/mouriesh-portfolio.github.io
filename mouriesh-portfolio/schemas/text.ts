export default {
  title: 'Text',
  name: 'texts',
  type: 'document',
  fields: [
    {
      title: 'Portfolio Texts',
      name: 'portfolio_texts',
      type: 'object',
      fields: [
        {
          title: 'Navbar Text',
          name: 'navbar_text',
          type: 'string'
        },
        {
          title: 'Footer Text',
          name: 'footer_text',
          type: 'string'
        }
      ]
    }
  ]
}