// import React, {useState} from 'react'
// import {  Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import { Grid, Menu, Segment } from 'semantic-ui-react'

// export default function Dashboard({KurulusIslemleri}) {
//   const [activeItem,setActiveItem] = useState();
//   return (
//     <div>
//       <ToastContainer position='bottom-right'/>
//       <Grid>
//         <Grid.Column width={4}>
//           <Routes>
//             <Route exact path='/kurulusislemleri' Component={KurulusIslemleri}/>
//           </Routes>
//           <Menu fluid vertical tabular>
//             <Menu.Item
//               name='Kuruluş İşlemleri'
//               active={activeItem === 'kurulus'}
//               onClick={()=>setActiveItem('kurulus')}
//             />
//           </Menu>
//         </Grid.Column>
//         <Grid.Column stretched width={12}>
//           <Segment className='segment'>
//             This is an 
//           </Segment>
//         </Grid.Column>
//       </Grid>
//     </div>
//   )
// }
import React from 'react'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import TumUrunler from '../pages/TumUrunler'
import UrunEkle from '../pages/UrunEkle'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path='/urunler' Component={TumUrunler} />
              <Route exact path='/internal/urunEkle' Component={UrunEkle} />
              <Route exact path='/' Component={TumUrunler}/>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}


