import { Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from 'next/image';

const Balanced = () => {
  return (
    <Box
      w="99vw"
      h="100vh"
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Box>
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
        marginRight="20px"
        float="right"
      >
        <Image
          src="/asserts/yellow-credit-card-avant-bank.jpg"
          alt="Imagem Descrição"
          width={609}
          height={600}
        />
      </Box>
    </Box>
  );
};

export default Balanced;
