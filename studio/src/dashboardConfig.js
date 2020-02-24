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
                  buildHookId: '5e53f40e148742dd9ae0b2fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uzbgzcc5',
                  apiId: 'a07f4ad3-8ddc-41bc-8f1a-a34ce548d48d'
                },
                {
                  buildHookId: '5e53f40f985d2704a771b2f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rdf2qiqt',
                  apiId: '9d3b27d4-18ef-4374-886f-239e6dee1003'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Wesselvdp/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rdf2qiqt.netlify.com', category: 'apps' }
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
