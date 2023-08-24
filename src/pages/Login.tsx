import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  VStack,
  InputRightElement,
  Icon,
  InputGroup,
  FormLabel,
  FormControl,
  Circle,
  FormHelperText,
  Center,
  ChakraProvider,



} from '@chakra-ui/react';
import { CheckCircleIcon, CheckIcon, CloseIcon, WarningIcon } from '@chakra-ui/icons';

import Head from "next/head";


const Login = () => {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const [isValidCpf, setIsValidCpf] = useState<boolean | null>(null);
  const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null);



  const isValidCPF = (strCPF: string) => {
    let sum;
    let remainder;
    sum = 0;
    if (strCPF === "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(strCPF.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  };

  const handleInputChange = (value: string) => {
    setCpf(value);
    updateButtonDisabledState(value, password);
    setIsTouched(true);
    if (value.length === 11 && isValidCPF(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    updateButtonDisabledState(cpf, value);

    const isLengthValid = value.length >= 8 && value.length <= 18;

    const hasUppercase = /[A-Z]/.test(value);

    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value);

    // Verifica a sequência numérica de 8 a 18 caracteres
    const hasNumberSequence = /(?=.*\d{8,18})/.test(value);

    const hasOnlyLettersAndNumbers = /^[a-zA-Z0-9]+$/.test(value);

    const isValidPassword =
      isLengthValid &&
      hasUppercase &&
      hasSpecialChar &&
      hasNumberSequence &&
      hasOnlyLettersAndNumbers;

    setIsValidPassword(isValidPassword);
  };


  const updateButtonDisabledState = (cpfValue: string, passwordValue: string) => {
    // Verifica se os campos de CPF e senha estão preenchidos
    const areFieldsFilled = cpfValue.trim() !== '' && passwordValue.trim() !== '';

    // Atualiza o estado do botão com base no preenchimento dos campos
    setIsButtonDisabled(!areFieldsFilled);
  };



  useEffect(() => {
    setIsValidCpf(cpf.length === 11);
  }, [cpf]);



  return (
    <ChakraProvider>
      <Head>
        <title>Avante Banking - Banco Digital</title>
      </Head>

      <Box pt="120px" bg="rgb(245, 245, 245)" w="50%" h="100vh">
        <Flex width="100vw" height="100vh">
          <Box flex="1" >
            <Center>
              <Text
                fontSize="42px"
                mb="32px"
                fontWeight="bold"
                letterSpacing="-0.03em"
                lineHeight="1.2"
                color="rgb(17, 17, 17)"
                fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                textAlign="left"
              >
                Complete os campos ao <br />
                lado para pedir sua Conta <br />
                e Cartão de crédito
              </Text>

            </Center>
            <Flex
            direction={['column', 'row']}
            justify="space-between"
            bg="gray.100" 
            w="100%"       
            h="57vh"  
          >
            <Box
              flex="1"
              bgImage="url(asserts/create-a-yellow-credit-card-named-avante-bank-18.jpg)"
              bgSize="cover"
              bgPosition="bottom"
            />
          </Flex>
        </Box>

          <Box ml="270px" flex="1" backgroundColor="white" h="80vh">

            <VStack flex="1" spacing="4">
              <FormControl id="cpf" mb={4} isInvalid={!isValidCpf && isTouched}>
                <FormLabel
                  htmlFor="cpf"
                  mb="0"
                  position="absolute"
                  top={cpf || isFocused ? "10px" : "50%"}
                  transform={cpf || isFocused ? "none" : "translateY(-50%)"}
                  transition="all 0.3s"
                >
                </FormLabel>
                <InputGroup>

                  <Input
                    placeholder="CPF"
                    variant='flushed'
                    type="number"
                    value={cpf}
                    onChange={(e) => handleInputChange(e.target.value)}
                    borderRadius="0"
                    py="2"
                    pl="0"
                    mt="5px"
                    maxLength={11}
                    onFocus={() => setIsFocused(false)}
                    onBlur={() => setIsFocused(false)}
                    w="80%"
                    fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    fontSize="14px"
                    fontWeight="bold"
                  />

                  {isTouched && (
                    <InputRightElement mr="126px"> {/* Ajuste a margem direita aqui */}
                      <Circle
                        size="22px"
                        borderWidth="2px"
                        borderColor={isValid ? "green.500" : "red.500"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {isValid ? (
                          <CheckIcon color="green.500" />
                        ) : (
                          <CloseIcon color="red.500" />
                        )}
                      </Circle>
                    </InputRightElement>
                  )}
                </InputGroup>
                {!isValid && isTouched && (
                  <FormHelperText
                    color="red.500"
                    fontSize="14px"
                    fontWeight="bold"
                  >
                    Precisamos de um CPF válido.
                  </FormHelperText>
                )}

              </FormControl>

              <FormControl id="email" isInvalid={isValidPassword === false && isTouched}>
                <InputGroup>
                  <Input
                    type="password"
                    value={password}
                    variant='flushed'
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    placeholder="Senha"
                    borderRadius="0"
                    maxLength={18}
                    py="2"
                    pl="0"
                    mt="5px"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    w="80%"
                    fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    fontSize="14px"
                    fontWeight="bold"
                  />
                </InputGroup>
              </FormControl>

              <Button
                colorScheme="yellow"
                borderRadius="50px"
                w="80%"
                ml="-140px"
                isDisabled={isButtonDisabled}
              >
                Continuar
              </Button>
            </VStack>

          </Box>
        </Flex>
      </Box>
    </ChakraProvider>


  );
};

export default Login;
