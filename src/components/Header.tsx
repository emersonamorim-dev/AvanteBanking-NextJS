import React, { useState, useEffect } from "react";
import {
  Box, Flex, Link, Icon, Menu, MenuButton, Button, Modal, ModalOverlay, ModalContent, Slide, Stack, MenuItem, ModalCloseButton, ModalBody, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, IconButton, useDisclosure, VStack
} from "@chakra-ui/react";
import { ChevronDownIcon, ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';
import Widget from "./Widget";

const Header = () => {
  const [showButton, setShowButton] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerDisclosure = useDisclosure();

  type MenuItemsType = {
    "Para Você": string[];
    "Para Seu Negócio": string[];
    "O Avante Banking": string[];
  };

  const menuItems: MenuItemsType = {
    "Para Você": ["Conta Poupança", "Conta Corrente", "Faça seu Pix"],
    "Para Seu Negócio": ["Conta Jurídica", "Investimentos", "Cartão Corporativo"],
    "O Avante Banking": ["Sobre nós", "Carreiras", "Imprensa"],
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  type FullScreenSubMenuProps = {
    items: string[];
  };

  const FullScreenSubMenu: React.FC<FullScreenSubMenuProps> = ({ items }) => (
    <Slide direction="top" in={true} style={{ zIndex: 4000 }}>
      <Box position="relative" top="20" left="0" right="0" bottom="0" bg="white">
        <Flex direction="column" justifyContent="center" alignItems="center" h="100%">
          {items.map((item, index) => (
            <MenuItem key={index} color="gray.800" my={2}>
              {item}
            </MenuItem>
          ))}
        </Flex>
      </Box>
    </Slide>
  );


  return (
    <>
      <Box bg="#DDC20C" w="100%" p={4} color="#18622C" position="sticky" top="0" zIndex="1000">
        <Flex justify="space-between" align="center">
          <Flex display={{ base: "none", md: "flex" }}>
            <Link
              mr={6}
              borderBottom="2px solid transparent"
              _hover={{ borderBottomColor: "#257A36", transition: "0.3s" }}
            >
              Página Inicial
            </Link>

            {Object.keys(menuItems).map((menuTitle) => (
              <div
                key={menuTitle}
                onMouseEnter={() => setActiveMenu(menuTitle)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="link"
                    mr={6}
                    borderBottom="2px solid transparent"
                    _hover={{ borderBottomColor: "white", transition: "0.3s" }}
                  >
                    {menuTitle}
                  </MenuButton>
                  {activeMenu === menuTitle && <FullScreenSubMenu items={menuItems[menuTitle as keyof typeof menuItems]} />}
                </Menu>
              </div>
            ))}
          </Flex>

          <IconButton
            display={{ base: "block", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color="#18622C"
            variant="outline"
            icon={<HamburgerIcon />}
            onClick={drawerDisclosure.onOpen}
          />

          <Flex align="center">
            <Link
              href="/Login"
              mr={4}
              fontWeight="bold"
              fontSize="18"
              fontFamily="Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
              borderBottom="2px solid transparent"
              _hover={{ borderBottomColor: "white", transition: "0.3s" }}
              isExternal
            >
              Login <Icon as={ArrowForwardIcon} ml={2} />
            </Link>
            {showButton && (
              <Button colorScheme="whiteAlpha" borderRadius="50px" onClick={onOpen}>
                Quero ser AvanteBank
              </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight" size="full">
              <ModalOverlay />
              <ModalContent maxW="100vw" maxH="100vh" m="0" borderRadius="0">
                <ModalCloseButton />
                <ModalBody p="0">
                  <Widget />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Box>
      <Drawer placement="left" isOpen={drawerDisclosure.isOpen} onClose={drawerDisclosure.onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link
                borderBottom="2px solid transparent"
                _hover={{ borderBottomColor: "#257A36", transition: "0.3s" }}
              >
                Página Inicial
              </Link>
              {Object.keys(menuItems).map((menuTitle) => (
                <Link key={menuTitle}>
                  {menuTitle}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex w="100%" h="10px" direction="row">
        <Box flex="1" h="10px" backgroundColor="#349431"></Box>
      </Flex>
    </>
  );
};

export default Header;
