import { AiYordamchi, BoshSahifa, OquvMaskanlari, RecoverPassword, Zakovat } from './lazyPages.jsx'

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
  {
    path: '/auth/recover',
    label: 'Parolni tiklash',
    element: <RecoverPassword />,
    standalone: true,
    hidden: true,
  },
]

export const navRoutes = routes.filter((route) => !route.hidden)

export default routes
