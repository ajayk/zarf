// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    { type: 'autogenerated', dirName: 'docs' },
    {
      type: 'category',
      label: 'Package Examples',
      link: {
        type: 'doc',
        id: 'examples/README',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'examples',
        },
      ],
    },
  ],
}

module.exports = sidebars
