import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect} from 'react';
import Produto from './src/components/Produto';

export default function App() {

  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const [productToEdit, setProductToEdit] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await fetch('http://localhost:3000/product/list')
      const data = await result.json()
      console.log(data)
      setProducts(data)
    }
    fetchProduct()
  }, [])

  useEffect(() => {
    console.log('productToEdit', productToEdit)
    if(productToEdit !== null) {
      const product = products.find((product) => product.id === productToEdit)  
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setImage(product.image)
    }
  }, [productToEdit])

  const handleCreateProduct = async () => {
    const result = await fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        price,
        image
      })
    })

    const data = await result.json()
    console.log(data)
    setProducts([...products, data.product]) 
    setName('')
    setDescription('')
    setPrice('')
    setImage('')
  }

  const handleEditProduct = async () => {
    const result = await fetch(`http://localhost:3000/product/${productToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        price,
        image
      })
    })
    const data = await result.json()
    console.log(data)
    const productsEdited = products.map((product) => {
      if(product.id === productToEdit) {
        return data.product
      }
      return product
    })
    setProducts(productsEdited)
    setProductToEdit(null)
    setName('')
    setDescription('')
    setPrice('')
    setImage('')
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.vitrine}>
        {
         products.map((product)=>{
            return <Produto
              key={product.id}
              id={product.id} 
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              products={products}
              setProducts={setProducts}
              setProductToEdit={setProductToEdit}
            />
         })
        }
      </View>

      <View>
        <Text style={styles.h1}>Criar ou Editar</Text>

        <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} /> 
        <TextInput style={styles.input} placeholder="Preço" value={price} onChangeText={setPrice} /> 
        <TextInput style={styles.input} placeholder="Imagem" value={image} onChangeText={setImage} />

        <View style={styles.boxButtons}>
            <Button title="Cadastrar" onPress={handleCreateProduct} />
            <Button title="Editar" onPress={handleEditProduct} />    
        </View>
      </View> 
            
            <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE5E1',
  },
  vitrine: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    gap: 15,
    marginTop: "5%",
    backgroundColor: '#EAE5E1',
  },
  products: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    flexWrap: 'wrap'
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#3F0D09'
  },
  boxButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    marginBottom: 40
  },
});