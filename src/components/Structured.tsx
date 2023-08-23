import React from 'react';
import { Box, Heading, Text, Button, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'; // Importando o ícone de seta

const Structured = () => {
  const cards = [
    {
      image: 'asserts/woman-standing-holding-cell-phone.jpg', 
      title: 'Empréstimos',
      subtitle: 'O empréstimo que você precisa para conquistar o que sempre quis.'
    },
    {
      image: 'asserts/woman-and-son-sitting-in-the-square.jpg',
      title: 'Seguro de vida',
      subtitle: 'Seguro uma boa escolha no banco digital certo, pois transmite uma mensagem otimista.'
    },
    {
      image: 'asserts/woman-with-curly.jpg', 
      title: 'Seguro celular',
      subtitle: 'Não arrisque perder todas as suas fotos e vídeos com um celular quebrado.'
    }
  ];

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" marginBottom="2rem" color="#349431">
        Mais Produtos Avante Bank
      </Heading>

      <HStack spacing={20}>
        {cards.map((card, index) => (
          <Box key={index} borderRadius="lg" boxShadow="md" overflow="hidden">
            <Image 
              src={card.image} 
              alt={card.title}
              display="block"
              width="100%"
              height="260px"
              objectFit="cover"
            />
            <VStack p={4} spacing={4} alignItems="start">
              <Heading as="h3" size="lg" color="#349431">{card.title}</Heading>
              <Text color="#0F4F2D">{card.subtitle}</Text>
              <Button
               rightIcon={<ArrowForwardIcon />}
               colorScheme="green"
               variant="outline"
               _hover={{
                 bg: 'transparent', 
                 color: '#DDC20C', 
                 border: '1px solid #DDC20C', 
               }}
             >
               Saiba mais
             </Button>
            </VStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};


export default Structured;
