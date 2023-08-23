import { Box, VStack, HStack, Text, Link, Flex, Icon, Divider } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
      <Flex w="100%" h="1%" direction="row">
        <Box flex="1" p={8} textAlign="left" backgroundColor="#0F4F2D"></Box>
        <Box flex="1" p={8} textAlign="left" backgroundColor="#349431"></Box>
      </Flex>
      <Box bg="#DDC20C" color="#257A36" p={6} px={10}>
        <VStack spacing={6} align="start">
          <Text fontSize="2xl" fontWeight="bold">Avante Banking</Text>

          <Flex width="90%" justifyContent="space-between">
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
              <Text fontWeight="bold" color="#2F962B">Veja também</Text>
              <HStack><Link>Auxílio e FGTS</Link><Icon as={ChevronDownIcon} /></HStack>
              <HStack><Link>Faça um Pix</Link><Icon as={ChevronDownIcon} /></HStack>
              <HStack><Link>Fornecedores</Link><Icon as={ChevronDownIcon} /></HStack>
              <HStack><Link>Transparência</Link><Icon as={ChevronDownIcon} /></HStack>
            </VStack>
          </Flex>

          <Flex width="90%" justifyContent="space-between" mb={6}>
            {/* Primeira linha de menus */}
            {/* ... (restante do código anterior) ... */}
          </Flex>

          <Flex width="90%" justifyContent="space-between" mb={6}>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Transparência</Text>
              <Link>Política de privacidade</Link>
              <Link>Política de segurança</Link>
              <Link>Relatórios financeiros</Link>
              <Link>Ética e compliance</Link>
              <Link>Dados abertos</Link>
              <Link>Convenção de boletos</Link>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Fale com a gente</Text>
              <Text>Capitais e Regiões <br />
                metropolitanas: <br />
                4018 1818</Text>
              <Text>Demais localidades: <br />
                0800 181 1818</Text>
              <Link href="mailto:meajuda@avantebanking.com.br">meajuda@avantebanking.com.br</Link>
              <Text>Atendimento 24h</Text>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Ouvidoria</Text>
              <Text>0800 181 1818</Text>
              <Link href="mailto:ouvidoria@avantebanking.com.br">ouvidoria@avantebanking.com.br</Link>
              <Text>Atendimento das <br />
                9h às 18h (dias úteis)</Text>
            </VStack>

            <VStack align="start" spacing={2}>
              <Text fontWeight="bold" color="#2F962B">Baixe o app</Text>
            </VStack>
          </Flex>

          <Text>© 2023 Avante Banking S.A - Instituição Financeira Digital. 18.200.100/0001-00</Text>
          <Text>Rua sn, 18 - São Paulo, SP - 18000-000</Text>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
