import {
  Box,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  FormControl,
  FormLabel,
  FormHelperText,
  Circle,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";




const Content = () => {
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Novo estado para controlar o foco
  const toast = useToast();

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

  const handleSubmit = () => {
    if (isValid) {
      toast({
        title: "CPF validado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "CPF inválido.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex w="99vw" h="80vh" alignItems="center" justifyContent="space-between"
        bgImage="url(asserts/avant-bank-interface-18.jpg)"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        px={6}
      >
        <VStack alignItems="start" spacing={4} ml="40px">

          <Text fontSize="3xl" fontWeight="bold">
            Avante Banking é um banco <br />
            que ajuda seus clientes a <br />
            prosperar, aproveitando as <br />
            oportunidades do futuro.
          </Text>

          <Text>
            Avante Banking: O banco que te impulsiona para o futuro. <br />
            A sua liberdade financeira começa aqui.
          </Text>
        </VStack>

        <Box w="320px" h="295px" bg="white" p={6} borderRadius="md" boxShadow="md" mr="40px">
          <Text fontSize="2xl" mb={4}>
            Peça sua conta e cartão de crédito do AvanteBank
          </Text>
          <FormControl id="cpf" mb={4} isInvalid={!isValid && isTouched}>
            <FormLabel
              htmlFor="cpf"
              mb="0"
              fontSize={cpf || isFocused ? "sm" : "md"}
              color={cpf || isFocused ? "gray.600" : "gray.400"}
              position="absolute"
              top={cpf || isFocused ? "10px" : "50%"}
              left="15px"
              transform={cpf || isFocused ? "none" : "translateY(-50%)"} // Centraliza verticalmente quando não há CPF
              transition="all 0.3s"
            >
              Digite seu CPF
            </FormLabel>
            <InputGroup>
              <Input
                type="number"
                value={cpf}
                variant='flushed'
                onChange={(e) => handleInputChange(e.target.value)}
                borderRadius="0"
                py="2"
                pl="0"
                mt="5px"
                bg="transparent"
                maxLength={11}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {isTouched && (
                <InputRightElement>
                  <Circle
                    size="24px"
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
              <FormHelperText color="red.500">Precisamos de um CPF válido.</FormHelperText>
            )}
          </FormControl>
          <Button
            colorScheme="yellow"
            onClick={handleSubmit}
            isDisabled={!isValid}
            borderRadius="50px"
            h="50px"
            w="100%"
            justifyContent="space-between"
            paddingX={4}
          >
            <Text>Continuar</Text>
            <ArrowForwardIcon />
          </Button>

        </Box>
      </Flex>
    </>
  );
};


export default Content;