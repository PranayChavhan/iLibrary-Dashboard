import React, { lazy } from 'react'

import {
  CCard,
  CCol,
  CRow,
} from '@coreui/react'
import IssuedBook from '../pages/Shelf/IssuedBook.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <IssuedBook/>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default Dashboard
