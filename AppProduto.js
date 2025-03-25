import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Produto from './src/components/Produto';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />

        <View style={styles.vitrine}>
          <Produto 
          imagem="https://cdn.dooca.store/9528/products/bata-mia-listra-biarritz-01_1500x2000+fill_ffffff.jpg?v=1736548086"
           nome="Bata Tricoline Listras Biarritz" 
           preco="R$ 269,00"> 
           </Produto>

          <Produto 
          imagem="https://cdn.dooca.store/9528/products/vestido-tai-tricoline-coral-vermelho-01_1500x2000+fill_ffffff.jpg?v=1733149971&webp=0" 
          nome="Vestido Tai Tricoline Coral" 
          preco="R$ 419,00"> 
          </Produto>

          <Produto 
          imagem="https://cdn.dooca.store/9528/products/saia-slip-satin-cobre-01_1500x2000+fill_ffffff.jpg?v=1715890712" 
          nome="Saia Slip Satin Cobre" 
          preco="R$ 229,00"> 
          </Produto>

          <Produto 
          imagem="https://cdn.dooca.store/9528/products/blusa-drica-porto-preta-01_1500x2000+fill_ffffff.jpg?v=1732819428" 
          nome="Blusa Drica Porto" 
          preco="R$ 199,00"> 
          </Produto>

          <Produto 
          imagem="https://cdn.dooca.store/9528/products/calca-retra-tricoline-listra-brule-01_1500x2000+fill_ffffff.jpg?v=1731443250" 
          nome="Calça Reta Tricoline Brulée" 
          preco="R$ 299,00"> 
          </Produto>

          <Produto 
          imagem="https://cdn.dooca.store/9528/products/vestido-tai-rosa-magnolia-01_1500x2000+fill_ffffff.jpg?v=1732820018&webp=0" 
          nome="Vestido Tai Ipa Rosa Magnolia" 
          preco="R$ 389,00"> 
          </Produto>
        </View>
      
      <StatusBar style="auto" />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE5E1'
  },
  vitrine: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    gap: 15,
    marginTop: "5%",
    backgroundColor: '#DDDDDD',
  },
  products: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    flexWrap: 'wrap'
  }
});
