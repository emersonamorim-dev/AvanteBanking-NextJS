import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Content from "../components/Content";
import Head from "next/head";
import { routes } from "../routes/routes"; // Importe as rotas
import Footer from "@/components/Footer";



const Home = () => {
  return (
    
    <ChakraProvider>
      <Head>
        <title>Avante Banking - Banco Digital</title>
        <link rel="icon" href="asserts/favicon.ico" />
      </Head>
      <Header />

      <Content />
      {routes.map((route, index) => {
        const Component = route.component;
        return <Component key={index} />;
      })}

      <Footer />

    </ChakraProvider>


  );
};

export default Home;

