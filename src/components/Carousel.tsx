import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Flex,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLandmark, FaCoins } from "react-icons/fa";
import { MdAccountBalanceWallet, MdPix, MdPayments, MdOpenInBrowser, MdCurrencyBitcoin, MdSafetyCheck } from "react-icons/md";



const Carousel = () => {
  const data = [
    {
      icon: <Icon as={FaLandmark} boxSize={6} />,
      title: "Banco Digital",
      text: "Os bancos digitais estão mudando o mundo, tornando as finanças mais justas e equitativas."
    },
    {
      icon: <Icon as={MdAccountBalanceWallet} boxSize={6} />,
      title: "Conta Digital",
      text: "Conta digital: a conta do futuro, disponível agora."
    },

    {
      icon: <Icon as={MdPix} boxSize={6} />,
      title: "Dinheiro Digital",
      text: "O Drex é a moeda do futuro, inovação financeira para todos os brasileiros."
    },
    {
      icon: <Icon as={MdPayments} boxSize={6} />,
      title: "Pagamento Digital",
      text: "Pagamentos digitais são mais convenientes, seguros e eficientes."
    },

    {
      icon: <Icon as={MdOpenInBrowser} boxSize={6} />,
      title: "Open Finance",
      text: "Open Finance: mais transparência, mais controle, mais opções para o consumidor."
    },
    {
      icon: <Icon as={MdCurrencyBitcoin} boxSize={6} />,
      title: "Cryptos",
      text: "As criptomoedas são uma forma de preservar o valor do seu dinheiro"
    },
    {
      icon: <Icon as={FaCoins} boxSize={6} />,
      title: "Corretora Digital",
      text: "A Corretora Digital é a escolha certa para quem quer investir com segurança e tranquilidade."
    },
    {
      icon: <Icon as={MdSafetyCheck} boxSize={6} />,
      title: "Seguros",
      text: "A segurança é o melhor negócio que você pode fazer."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // padrão para telas maiores
    slidesToScroll: 1,
    nextArrow: (
      <Box
        as="button"
        w="3rem"
        h="3rem"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
        bg="#DDC20C"
        color="#FFF"
        position="absolute"
        bottom="-50px"
        right="50%"
        transform="translateX(25px)"
        outline="none"
        border="0"
        cursor="pointer"
      >
        →
      </Box>
    ),
    prevArrow: (
      <Box
        as="button"
        w="3rem"
        h="3rem"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
        bg="#DDC20C"
        color="#FFF"
        position="absolute"
        bottom="-50px"
        left="50%"
        transform="translateX(-25px)"
        outline="none"
        border="0"
        cursor="pointer"
      >
        ←
      </Box>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (

    <Box p={{ base: "10px", md: "20px" }} w="100%">
      <Slider {...settings}>
        {data.map((item, index) => (
          <Flex
            key={index}
            p={4}
            boxShadow="md"
            borderRadius="md"
            border="1px solid #e0e0e0"
            marginRight={{ base: "15px", md: "25px" }}
            w={{ base: "280px", md: "280px", lg: "280px" }}
            h={{ base: "200px", md: "200px", lg: "200px" }}
            direction="column"
            justify="space-between"
            align="center"
          >
            {item.icon}
            <Heading size={{ base: "sm", md: "md" }}>{item.title}</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }}>{item.text}</Text>
            <Button fontSize={{ base: "xs", md: "sm" }}>Saiba Mais</Button>
          </Flex>
        ))}
      </Slider>
    </Box>

  );
};

export default Carousel;

