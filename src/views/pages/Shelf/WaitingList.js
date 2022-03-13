import React from 'react'
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CCard,
    CCol,
    CRow,
  } from "@coreui/react";

const WaitingList = () => {
  return (
    <div>
        <CRow>
        <CCol xs>
          <CCard className="mb-4">
          <CTable hover>
        <CTableHead>
          <CTableRow color="primary">
            <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Profile</CTableHeaderCell>

            <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Enrollment No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Year</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Waiting For</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableHeaderCell scope="row">image</CTableHeaderCell>
            <CTableDataCell>Tony</CTableDataCell>
            <CTableDataCell>1913007</CTableDataCell>
            <CTableDataCell>2rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>

            <CTableDataCell>Zero To One</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableHeaderCell scope="row">image</CTableHeaderCell>
            <CTableDataCell>Captain</CTableDataCell>
            <CTableDataCell>1913008</CTableDataCell>
            <CTableDataCell>3rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>
           
            <CTableDataCell>Inner Engineering</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableHeaderCell scope="row">image</CTableHeaderCell>
            <CTableDataCell>Thor</CTableDataCell>
            <CTableDataCell>1913009</CTableDataCell>
            <CTableDataCell>4rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>
          
            <CTableDataCell>Zero To One</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default WaitingList