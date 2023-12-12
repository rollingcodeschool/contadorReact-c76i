const Informacion = (props) => {
  //aqui va la logica del componente

  return (
    //aqui puede ir un poco de logica
    <>
      <h2>Conceptos de react {props.comision}</h2>
      <section>
        {/* aqui va todo el maquetado del componente */}
        <p>
          React es una biblioteca de JavaScript desarrollada por Facebook que se
          utiliza para construir interfaces de usuario interactivas y
          eficientes. Su enfoque se centra en la creación de componentes
          reutilizables que representan diferentes partes de la interfaz de
          usuario. React utiliza un paradigma de programación declarativa, lo
          que significa que los desarrolladores describen cómo debería ser la
          interfaz de usuario y React se encarga de manejar los cambios de
          manera eficiente. <br/> comision: {props.anioActualProps}
        </p>
      </section>
    </>
  );
};

export default Informacion;
