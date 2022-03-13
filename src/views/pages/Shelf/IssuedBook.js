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
    CButton,
    CRow,
  } from "@coreui/react";

const IssuedBook = () => {
  return (
    <div>
        <CRow>
        <CCol xs>
          <CCard className="mb-4">
          <CTable hover>
        <CTableHead>
          <CTableRow color="primary">
            <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Student Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Enrollment No</CTableHeaderCell>
            <CTableHeaderCell scope="col">Year</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Time</CTableHeaderCell>
            <CTableHeaderCell scope="col">Essued Book</CTableHeaderCell>
            <CTableHeaderCell scope="col">Accept</CTableHeaderCell>
            <CTableHeaderCell scope="col">Reject</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Tony</CTableDataCell>
            <CTableDataCell>1913007</CTableDataCell>
            <CTableDataCell>2rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>
            <CTableDataCell>03:34 PM</CTableDataCell>
            <CTableDataCell>Zero To One</CTableDataCell>
            <CTableDataCell><CButton color="success">Accept</CButton></CTableDataCell>
            <CTableDataCell><CButton color="danger">Reject</CButton></CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Captain</CTableDataCell>
            <CTableDataCell>1913008</CTableDataCell>
            <CTableDataCell>3rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>
            <CTableDataCell>03:34 PM</CTableDataCell>
            <CTableDataCell>Inner Engineering</CTableDataCell>
            <CTableDataCell><CButton color="success">Accept</CButton></CTableDataCell>
            <CTableDataCell><CButton color="danger">Reject</CButton></CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>Thor</CTableDataCell>
            <CTableDataCell>1913009</CTableDataCell>
            <CTableDataCell>4rd Year</CTableDataCell>
            <CTableDataCell>11 March 2022</CTableDataCell>
            <CTableDataCell>03:34 PM</CTableDataCell>
            <CTableDataCell>Zero To One</CTableDataCell>
            <CTableDataCell><CButton color="success">Accept</CButton></CTableDataCell>
            <CTableDataCell><CButton color="danger">Reject</CButton></CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
          </CCard>
        </CCol>
      </CRow>
        
    </div>
  )
}

export default IssuedBook