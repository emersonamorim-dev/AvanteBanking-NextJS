import { Box, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from 'next/image';

const Balanced = () => {
  // Use breakpoints para definir o tamanho da imagem de acordo com a largura da tela
  const imageSize = useBreakpointValue({ base: '80%', md: '609px' });

  return (
    <Box
      w="full"
      minH="100vh"
      bg="gray.100"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Box
        textAlign={{ base: "center", md: "left" }}
        marginBottom={{ base: "2rem", md: "0" }}
      >
        <Heading as="h1" size="xl" marginBottom="1rem" color="yellow.400">
          Conheça nosso Cartão de Crédito
        </Heading>
        <Heading as="h3" size="md" fontWeight="normal" marginBottom="1rem">
          Avante Banking: O banco que ilumina seu futuro.
        </Heading>
        <Button 
          rightIcon={<ArrowForwardIcon />} 
          bg="#DDC20C" 
          borderColor="#DDC20C" 
          color="black" 
          variant="outline"
        >
          Saiba mais
        </Button>
      </Box>

      <Box 
        display="block"
        maxWidth="78%"
        mx="auto" // Centraliza a imagem em telas pequenas
      >
        <Image 
          src="/asserts/yellow-credit-card-avant-bank.jpg"
          alt="Imagem Descrição"
          width={imageSize}
          height={imageSize}
        />
      </Box>
    </Box>
  );
};

export default Balanced;

