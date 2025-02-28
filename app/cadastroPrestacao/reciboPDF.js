import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  image: {
    width: 100, // Ajuste o tamanho conforme necessário
    height: 50,
    marginBottom: 10,
    alignItems: "center",
  },
  section: {
    marginBottom: 10,
    
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  textLeft: {
    fontSize: 10,
  },
});
export default function ReciboPDF({ cpf, servico, quantidade, unidade, valorUnitario, valorTotal }) {
  return (
    <Document>
      <Page size="A5" style={styles.page}> 
      <View style={styles.section}>
      <Image src="/cosalma.png" style={styles.image} />
                
          <Text style={{fontSize: 12,textAlign:'center'}}>Cooperativa dos Trabalhadores Rurais de São Lourenço da Mata.PE </Text>
          <Text style={{ fontSize: 8,textAlign:'center' }}>Rua Armando Braga, 53a, Sl.A, Centro, São Lourenço da Mata.PE - 54.7353-70</Text>
          <Text style={{ fontSize: 8,textAlign:'center' }}>Telefone: (81) 8308-6561 / E-mail: cosalmape@gmail.com</Text>
          <Text style={{ fontSize: 8,textAlign:'center' }}>CNPJ: 11.704.939/0001-53</Text>
          
          <Text style={{ fontSize: 10, textAlign:'center' }}>Recibo de Prestação de Serviço</Text>
          
          <Text style={{ fontSize: 10 }}>CPF: {cpf}</Text>
          <Text style={{ fontSize: 10 }}>Serviço: {servico}</Text>
          <Text style={{ fontSize: 10}}>Quantidade: {quantidade} {}</Text>
          <Text style={{ fontSize: 10 }}>Valor Unitário: {valorUnitario}</Text>
          <Text style={{ fontSize: 10 }}>Valor Total: {valorTotal}</Text>
        </View>
      </Page>
    </Document>
  );
}

