import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';

export default function Login({navigation}) {
  return (
    <VStack
      flex={1}
      alignItems="center"
      p={5}
      justifyContent="center">
      <Image source={Logo} alt='Logo Voll' />

      <Titulo>
        Faça login com sua conta
      </Titulo>

      <Box>

        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
        />
      </Box>
      <Button
        w='100%'
        bg="blue.800"
        mt={10}
        borderRadius='lg'
        onPress={() => navigation.navigate('Tabs')}
      >
        Entrar
      </Button>
      <Link mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box
        mt={8}
        w="100%"
        flexDirection="row"
        justifyContent="center"
      >
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.400" fontWeight="bold">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


