const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'home',
          title: 'Home',
          type: 'item',
          url: '/app/dashboard/default',
          icon: 'feather icon-home',
        }
        ,
        {
          id: 'report',
          title: 'Report',
          type: 'item',
          url: '/app/report',
          icon: 'feather icon-bar-chart',
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: 'feather icon-lock',
          children: [
            {
              id: 'signup-1',
              title: 'Sign up',
              type: 'item',
              url: '/auth/signup-1',
              target: true,
              breadcrumbs: false
            },
            
            {
              id: 'signin-1',
              title: 'Sign in',
              type: 'item',
              url: '/auth/signin-1',
              target: true,
              breadcrumbs: false
            }
          ]
        },
      ]
    }
    ,
    {
      id: 'screens',
      title: 'Master-Screens',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'basic',
          title: 'Setting',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            
            {
              id: 'phase',
              title: 'Phase',
              type: 'item',
              url: '/phase'
            },
            
            {
              id: 'sector',
              title: 'Sector',
              type: 'item',
              url: '/sector'
            },
            {
              id: 'category',
              title: 'Category',
              type: 'item',
              url: '/category'
            },
            {
              id: 'ComplaintType',
              title: 'Complaint Type',
              type: 'item',
              url: '/complaintType'
            },
            {
              id: 'post',
              title: 'Post',
              type: 'item',
              url: '/post'
          },
            {
              id: 'officer',
              title: 'Officer',
              type: 'item',
              url: '/officer'
            },
            {
              id: 'user',
              title: 'User',
              type: 'item',
              url: '/user'
            },
          ]
        }
      ]
    },
  ]
};

export default menuItems;
