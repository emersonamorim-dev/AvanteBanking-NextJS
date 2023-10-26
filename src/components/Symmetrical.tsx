import React from 'react';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


const Symmetrical = () => {
  return (

    <Flex 
    w="100%" 
    h="100vh" 
    direction={{ base: "column", md: "row" }}
  >
    <Box flex="1" p={8} textAlign="left" backgroundColor="#0F4F2D">
      <Image 
        src="/asserts/card-woman-cell.jpg"
        alt="Descrição da imagem"
        display="block"
        width="100%"
        height={{ base: "200px", md: "420px" }}
        maxW="100%"
        objectFit="cover"
      />
      <Heading as="h1" size="2xl" marginBottom="1rem" color="white">
        Conta do Avante Bank
      </Heading>
      <Heading as="h4" size="md" marginBottom="2rem" color="white">
        Manter suas contas em dia nunca foi tão simples com AI Assistente.
      </Heading>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme="#DDC20C" color="#DDC20C" variant="outline">
        Saiba mais
      </Button>
    </Box>

    {/* Lado Direito */}
    <Box flex="1" p={8} textAlign="left" backgroundColor="#349431">
      <Image
        src="/asserts/man-in-a-suit-sitting.jpg"
        alt="Descrição da imagem"
        display="block"
        width="100%"
        height={{ base: "200px", md: "420px" }}
        maxW="100%"
        objectFit="cover"
      />
      <Heading as="h1" size="2xl" marginBottom="1rem" color="white">
        Conta PJ
      </Heading>
      <Heading as="h4" size="md" marginBottom="2rem" color="white">
        Ficou mais fácil organizar o seu negócio com a conta PJ do Avante Bank.
      </Heading>

      <Button rightIcon={<ArrowForwardIcon />} colorScheme="#DDC20C" color="#DDC20C" variant="outline">
        Saiba mais
      </Button>
    </Box>
  </Flex>
  );
};

export default Symmetrical;

