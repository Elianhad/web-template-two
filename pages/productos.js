import React from "react";
import Layout from "./components/Layout";
import Image from "next/image";

const listaProductos = [
  {
    categoria: "guitarras",
    nombre: "guitarra",
    source:
      "https://res.cloudinary.com/dksibcbrj/image/upload/v1647611451/medium_blog_3_baa6c94e0d.jpg",
  },
  {
    categoria: "guitarras",
    nombre: "guitarra 2",
    source:
      "https://res.cloudinary.com/dksibcbrj/image/upload/v1647611307/medium_blog_2_d3480ef1f7.jpg",
  },
  {
    categoria: "guitarra",
    nombre: "squier",
    source:
      "https://res.cloudinary.com/dksibcbrj/image/upload/v1647610919/medium_blog_1_8e2ae542ae.jpg",
  },
  {
    categoria: "guitarra",
    nombre: "imagen",
    source:
      "https://res.cloudinary.com/dksibcbrj/image/upload/v1653845335/instrument_3888684_1920_dvrji9_a9b04e68d7.png",
  },
  {
    categoria: "ARTE",
    nombre: "pinceles",
    source:
      "https://res.cloudinary.com/dksibcbrj/image/upload/v1653845129/small_pexels_deeana_arts_1646953_hufbsd_0f82b74262.jpg",
  },
];

const Productos = () => {
  return (
    <Layout>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {listaProductos.map((productos, index) => (
              <div key={index} className='lg:w-1/4 md:w-1/2 p-4 w-full'>
                <a className='block relative h-48 rounded overflow-hidden'>
                  <Image
                    alt='ecommerce'
                    className='object-cover object-center w-full h-full block'
                    src={productos.source}
                    width={300}
                    heigth={300}
                    layout='fill'
                  />
                </a>
                <div className='mt-4'>
                  <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                    {productos.categoria}
                  </h3>
                  <h2 className='text-white title-font text-lg font-medium'>
                    {productos.nombre}
                  </h2>
                  <p className='mt-1'>$16.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
