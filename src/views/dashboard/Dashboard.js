import React, { lazy, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import {
  CCard,
  CCol,
  CRow,
} from '@coreui/react'
import IssuedBook from '../pages/Shelf/IssuedBook.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
        history.push("/dashboard");
    }else{
        history.push("/login");
    }
  }, [])


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
