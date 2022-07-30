import Head from "next/head";
import Layout from "./components/Layout";
import Hero from './components/Hero';
import Caracteristicas from './components/Caracteristicas';
import Contacto from './components/Contacto';
import Testimoniales from './components/Testimoniales';

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Caracteristicas/>
      <Testimoniales/>
      <Contacto/>
    </Layout>
  );
}
