export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603e9c4b44fb8e211028b957',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-insta-studio',
                  apiId: 'cb91ef44-c28b-42d9-a0e1-dbd0272e2832'
                },
                {
                  buildHookId: '603e9c4b19abb427d1db26e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-insta',
                  apiId: 'bcbd22cf-43d8-4898-9657-5f430567aeb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-gatsby-insta',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-insta.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
