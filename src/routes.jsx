import BoshSahifa from './Pages/BoshSahifa/BoshSahifa.jsx'
import OquvMaskanlari from './Pages/OquvMaskanlari/OquvMaskanlari.jsx'
import Zakovat from './Pages/Zakovat/Zakovat.jsx'

const routes = [
  { path: '/', label: 'Bosh sahifa', element: <BoshSahifa /> },
  { path: '/oquv-maskanlari', label: "O'quv maskanlari", element: <OquvMaskanlari /> },
  { path: '/zakovat', label: 'Zakovat', element: <Zakovat /> },
]

export default routes
