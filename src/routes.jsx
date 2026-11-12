import { AiYordamchi, BoshSahifa, OquvMaskanlari, Zakovat } from './lazyPages.jsx'

const routes = [
  { path: '/', label: 'Bosh sahifa', element: <BoshSahifa /> },
  { path: '/oquv-maskanlari', label: "O'quv maskanlari", element: <OquvMaskanlari /> },
  { path: '/zakovat', label: 'Zakovat', element: <Zakovat /> },
  {
    path: '/ai-yordamchi',
    label: 'AI Yordamchi',
    element: <AiYordamchi />,
    standalone: true,
  },
]

export default routes
