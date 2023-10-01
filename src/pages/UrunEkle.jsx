import { Form, Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import * as Yup from "yup"
import MyTextInput from '../utilities/MyTextInput'
import { Button, Dropdown } from 'semantic-ui-react'
import IsletmeService from '../services/IsletmeService'
import { NavLink } from 'react-router-dom'


export default function UrunEkle() {

  const initialValues = { productName: "", price: "", categoryId: "", productImage: "" }
  const schema = Yup.object({
    categoryName: Yup.string().required("Kategori adı zorunludur."),
    productImage: Yup.string().required("Ürün fotoğrafının urli zorunludur."),
    productName: Yup.string().required("Ürün adı zorunludur."),
    price: Yup.number()
  })

  const { state, setState } = useState([])

  // useEffect(() => {
  //   let isletmeService = new IsletmeService
  //   isletmeService.getAllCategory().then(response => setState(response.data))
  // }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
        let isletmeService = new IsletmeService()
        isletmeService.saveProduct(values.productName, values.price, values.categoryName, values.productImage)
      }}
    >
      <Form className='ui form'>
        <MyTextInput name="productName" placeholder="Ürün Adı" />
        <MyTextInput name="categoryId" placeholder="Kategori Adı" />

        <Dropdown
          placeholder='Kategori'
          fluid
          selection
          options={state}
          onChange={(value) => {
              
          }}
        />

        <MyTextInput name="productImage" placeholder="Ürün Fotoğraf Urli" />
        <MyTextInput name="price" placeholder="Ürün Fiyatı" />
        <Button color='green' type='submit'>Ekle</Button>
      </Form>
    </Formik>
  )
}
