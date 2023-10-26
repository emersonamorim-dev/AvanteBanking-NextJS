import { Box, VStack, HStack, Text, Link, Flex, Icon, Divider } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>

      <Flex
        w="100%"
        h="1%"
        direction={{ base: "column", md: "row" }}
      >
        <Box flex="1" p={8} textAlign="left" backgroundColor="#0F4F2D"></Box>
        <Box flex="1" p={8} textAlign="left" backgroundColor="#349431"></Box>
      </Flex>

      <Box bg="#DDC20C" color="#257A36" p={6} px={{ base: 4, md: 10 }}>
        <VStack spacing={6} align="start">
          <Text fontSize="2xl" fontWeight="bold">Avante Banking</Text>

          <Flex
            width="90%"
            justifyContent="space-between"
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Sobre nós</Text>
              <Link>Carreiras</Link>
              <Link>Perguntas frequentes</Link>
              <Link>Contato</Link>
              <Link>Imprensa</Link>
              <Link>Avante Cryptos</Link>
              <Link>Investidores</Link>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Produtos</Text>
              <Link>Conta digital</Link>
              <Link>Cartão de crédito</Link>
              <Link>Empréstimo</Link>
              <Link>Conta PJ</Link>
              <Link>Cartão de crédito PJ</Link>
              <Link>Investimentos</Link>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Explore</Text>
              <HStack><Link>Comunidade</Link><Icon as={ChevronRightIcon} /></HStack>
              <HStack><Link>Blog</Link><Icon as={ChevronRightIcon} /></HStack>
              <HStack><Link>InvestNews</Link><Icon as={ChevronRightIcon} /></HStack>
              <HStack><Link>Newsletter</Link><Icon as={ChevronRightIcon} /></HStack>
              <HStack><Link>USA</Link><Icon as={ChevronRightIcon} /></HStack>
              <HStack><Link>Canadá</Link><Icon as={ChevronRightIcon} /></HStack>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Transparência</Text>
              <Link>Política de privacidade</Link>
              <Link>Política de segurança</Link>
              <Link>Relatórios financeiros</Link>
              <Link>Ética e compliance</Link>
              <Link>Dados abertos</Link>
              <Link>Convenção de boletos</Link>
            </VStack>

          </Flex>

          <Flex
            width="90%"
            justifyContent="space-between"
            flexWrap={{ base: "wrap", md: "nowrap" }}
            mb={6}
          >

          </Flex>

          <Flex
            width="90%"
            justifyContent="space-between"
            flexWrap={{ base: "wrap", md: "nowrap" }}
            mb={6}
          >

          </Flex>

          <Text>© 2023 Avante Banking S.A - Instituição Financeira Digital. 18.200.100/0001-00</Text>
          <Text>Rua sn, 18 - São Paulo, SP - 18000-000</Text>
        </VStack>
      </Box>

    </>
  );
};

export default Footer;
