export default {
  title: 'Portfolio Body',
  name: 'portfolio_body',
  type: 'document',
  fields: [
    {
      title: 'Portfolio Contents',
      name: 'portfolio_contents',
      type: 'array',
      of: [
        {
          title: 'Portfolio Content',
          name: 'portfolo_content',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            }, {
              title: 'Banner Image',
              name: 'banner_image',
              type: 'object',
              fields: [
                {
                  title: 'Mobile Banner',
                  name: 'mobile_banner',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }, {
                  title: 'Desktop Banner',
                  name: 'desktop_banner',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }
              ]
            }, {
              title: 'Cards',
              name: 'cards',
              type: 'array',
              of: [
                {
                  title: 'Card',
                  name: 'card',
                  type: 'object',
                  fields: [
                    {
                      title: 'Card Title',
                      name: 'card_title',
                      type: 'string'
                    }, {
                      title: 'Card Body',
                      name: 'card_body',
                      type: 'string'
                    }, {
                      title: 'Card Banner',
                      name: 'card_banner',
                      type: 'object',
                      fields: [
                        {
                          title: 'Mobile Banner',
                          name: 'mobile_banner',
                          type: 'image',
                          options: {
                            hotspot: true
                          }
                        }, {
                          title: 'Desktop Banner',
                          name: 'desktop_banner',
                          type: 'image',
                          options: {
                            hotspot: true
                          }
                        }
                      ]
                    }, {
                      title: 'Card Url',
                      name: 'card_url',
                      type: 'url'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}