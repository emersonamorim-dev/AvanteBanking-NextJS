import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Checkbox,
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
} from '@chakra-ui/react';
import { CheckCircleIcon, CheckIcon, CloseIcon, WarningIcon } from '@chakra-ui/icons';


const Widget = () => {

  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  const [isValidCpf, setIsValidCpf] = useState<boolean | null>(null);
  const [isValidPhone, setIsValidPhone] = useState<boolean | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);


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
    setIsTouched(true);
    if (value.length === 11 && isValidCPF(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };


  const validatePhone = (strPhone: string) => {
    const numericPhone = strPhone.replace(/\D/g, '');

    if (numericPhone.length !== 11) {
      return false;
    }

    const areaCode = numericPhone.substring(0, 2);
    if (!/^[0-9]{2}$/.test(areaCode)) {
      return false;
    }

    const phoneNumber = numericPhone.substring(2);
    if (!/^[0-9]{9}$/.test(phoneNumber)) {
      return false;
    }

    const formattedPhone = `(${areaCode})${phoneNumber.substring(0, 5)}-${phoneNumber.substring(5)}`;
    return formattedPhone === strPhone;
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setIsTouched(true);
    if (value.length === 11 && validatePhone(value)) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+(\.com|\.com\.br)$/;
    setIsValidEmail(emailPattern.test(value));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsValidCpf(cpf.length === 11);
  }, [cpf]);

  useEffect(() => {
    setIsValidPhone(phone.length === 11);
  }, [phone]);

  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(email));
  }, [email]);


  return (
    <Box
      pt={{ base: "60px", md: "120px" }}
      bg="rgb(245, 245, 245)"
      w="100%"
      h="100vh"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        width="100%"
        height="100vh"
      >
        <Box flex="1">
          <Center>
            <Text
              fontSize={{ base: "24px", md: "42px" }}
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

          <Box
            bgImage="url(asserts/yellow-credit-card-with-name-avante-bank.jpg)"
            bgSize="cover"
            bgPosition="center"
            h={{ base: "200px", md: "57vh" }}
            w="100%"
          />
        </Box>

        <Box
          ml={{ base: "0", md: "20px" }}
          flex="1"
          backgroundColor="white"
          h={{ base: "auto", md: "80vh" }}
          mt={{ base: "20px", md: "0" }}
          p={{ base: "20px", md: "40px" }}
        >
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
                  w={{ base: "100%", md: "80%" }}
                  fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="14px"
                  fontWeight="bold"
                />
                {isTouched && (
                  <InputRightElement mr={{ base: "16px", md: "146px" }}>
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

            <InputGroup>
              <Input
                placeholder="Nome Completo"
                variant='flushed'
                borderRadius="0"
                py="2"
                pl="0"
                mt="5px"
                maxLength={48}
                onFocus={() => setIsFocused(false)}
                onBlur={() => setIsFocused(false)}
                w={{ base: "100%", md: "80%" }}
                fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="14px"
                fontWeight="bold"
              />
            </InputGroup>

            <FormControl id="phone" isInvalid={isValidPhone === false && isTouched}>
              <FormLabel
                htmlFor="phone"
                mb="0"
                position="absolute"
                top={phone || isFocused ? "10px" : "50%"}
                transform={phone || isFocused ? "none" : "translateY(-50%)"}
                transition="all 0.3s"
              >
              </FormLabel>
              <InputGroup>
                <Input
                  placeholder="Celular"
                  type="number"
                  variant='flushed'
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  borderRadius="0"
                  py="2"
                  pl="0"
                  mt="5px"
                  maxLength={11}
                  onFocus={() => setIsFocused(false)}
                  onBlur={() => setIsFocused(false)}
                  w={{ base: "100%", md: "80%" }}
                  fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="14px"
                  fontWeight="bold"
                />
                {isTouched && (
                  <InputRightElement mr={{ base: "16px", md: "146px" }}>
                    <Circle
                      size="22px"
                      borderWidth="2px"
                      borderColor={isValidPhone ? "green.500" : "red.500"}
                    >
                      {isValidPhone ? (
                        <CheckIcon color="green.500" />
                      ) : (
                        <CloseIcon color="red.500" />
                      )}
                    </Circle>
                  </InputRightElement>
                )}
              </InputGroup>
              {isValidPhone === false && isTouched && (
                <FormHelperText
                  color="red.500"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  Digite um telefone válido.
                </FormHelperText>
              )}
            </FormControl>

            <FormControl id="email" isInvalid={isValidEmail === false && isTouched}>
              <InputGroup>
                <Input
                  value={email}
                  variant='flushed'
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="E-mail"
                  borderRadius="0"
                  py="2"
                  pl="0"
                  mt="5px"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  w={{ base: "100%", md: "80%" }}
                  fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontSize="14px"
                  fontWeight="bold"
                />

                {isTouched && (
                  <InputRightElement mr={{ base: "16px", md: "146px" }}>
                    <Circle
                      size="22px"
                      borderWidth="2px"
                      borderColor={isValidEmail ? "green.500" : "red.500"}
                    >
                      {isValidEmail ? (
                        <CheckIcon color="green.500" />
                      ) : (
                        <CloseIcon color="red.500" />
                      )}
                    </Circle>
                  </InputRightElement>
                )}
              </InputGroup>
              {isValidEmail === false && isTouched && (
                <FormHelperText
                  color="red.500"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  Digite um E-mail válido.
                </FormHelperText>
              )}
            </FormControl>

            <InputGroup>
              <Input
                variant='flushed'
                placeholder="Confirmar E-mail"
                borderRadius="0"
                py="2"
                pl="0"
                mt="5px"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                w={{ base: "100%", md: "80%" }}
                fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="14px"
                fontWeight="bold"
              />
            </InputGroup>

            <InputGroup>
              <Input
                variant='flushed'
                placeholder="Confirmar E-mail"
                borderRadius="0"
                py="2"
                pl="0"
                mt="5px"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                w={{ base: "100%", md: "80%" }}
                fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="14px"
                fontWeight="bold"
              />
            </InputGroup>

            <Checkbox colorScheme="yellow" defaultChecked ml={{ base: "0", md: "-140px" }}>
              <Text
                textAlign="left"
                fontSize={{ base: "1rem", md: "1.125rem" }}
                margin="0px"
                letterSpacing="-0.02em"
                lineHeight="1.32"
                color="rgb(17, 17, 17)"
              >
                Aceito receber comunicações do Nextbank por WhatsApp.
              </Text>
            </Checkbox>

            <Checkbox
              colorScheme="yellow"
              isChecked={isChecked}
              onChange={handleCheckboxChange}
              ml={{ base: "0", md: "0" }}
            >
              <Text
                textAlign="left"
                fontSize={{ base: "1rem", md: "1.125rem" }}
                margin="0px"
                letterSpacing="-0.02em"
                lineHeight="1.32"
                color="rgb(17, 17, 17)"
              >
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta.
              </Text>
            </Checkbox>

            <Button
              colorScheme="yellow"
              borderRadius="50px"
              w={{ base: "100%", md: "80%" }}
              isDisabled={!isChecked}
              ml={{ base: "0", md: "-80px" }}
              mt="20px"
            >
              Enviar
            </Button>
          </VStack>

        </Box>
      </Flex>
    </Box>

  );
};

export default Widget;
