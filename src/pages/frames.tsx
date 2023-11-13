import { createRoot } from 'react-dom/client'
import { useRoute, useLocation } from 'wouter'
//import './styles.css'
import { NewBG4 } from "./threejstest"

/*
Model JSX auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 model.glb --transform --simplify --resolution=2048
Author: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

const Root = () => {
  //const [, params] = useRoute('/item/:id')
  //const [, setLocation] = useLocation()
  return (
    <>
        <NewBG4></NewBG4>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Ryan Nguyen</div>
            {/*<a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>}
                {params ? '< back' : 'double click to enter portal'}
            </a>*/}
        </div>
    </>
  )
}

export default Root

//createRoot(document.getElementById('root')).render(<Root />)