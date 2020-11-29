import React from "react";
import { connect } from "react-redux";
// import styles from "./AsideBar.module.css";
import store from "../../../Store/index";
// import { useDispatch } from "react-redux";
import { MyAsideBar } from "./AsideBarStyles";
// import { useParams } from "react-router-dom";
const AsideBar = ({ curso, modules }) => {
  // let {id} = useParams();
  const tree = store.getState();
  const [checado, setChecado] = React.useState("");
  // const [numero, setNumero] = React.useState(undefined);
  // console.log(tree);
  // console.log(tree.modules[curso]);
  // console.log("curso: ");
  
//   console.log(curso);
// if(tree.modules[curso]){
//   tree.modules[curso].map((item,index)=>{
//     console.log("- " +item.tittle)
//     item.lessons.map((aula, index)=>{
//       console.log("aula " + index + ": " +aula.tittle);
//     })
//   })
// }else{
//   console.log("nada aq")
// }
  function toggleLesson(module, lesson) {
    return {
      type: "TOGGLE_ACTIVE_LESSON",
      module,
      lesson,
    };
  }
  function resetLesson() {
    return {
      type: "RESET_STATUS",
    };
  }
  React.useEffect(()=>{

    return() => {store.dispatch(resetLesson())};
  }, []);

  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(resetLesson());
  //   // dispatch({type: "RESET_STATUS"});
  // }, [{curso}, dispatch]);

  function checkRadio(x) {
    setChecado(x);
  }
  // React.useEffect(() => {
  //   if ({curso} === "JavaScript") {
  //     setNumero(0);
  //   } else {
  //     setNumero(1);
  //   }
  // }, [{curso}]);

  // if (numero === undefined) {
  //   return "";
  // }

if (curso === undefined){
  return "";
}

  return (
    <MyAsideBar id="aside">
      {/* className={styles.aside}> */}
      {/* <h2>{id}</h2> */}
      <div className="asideContent">
      {/* className={styles.asideContent}> */}
        {/* {tree.modules.modulesReact.map((modulo) => { */}
        {/* {tree.modules.modulesJS.map((modulo, index) => { */}
        {/* {Object.values(tree.modules)[numero].map((modulo, index) => { */}
        {tree.modules[curso].map((modulo, index) => {
          return (
            <section className="section"key={index + 1}>
              <div className="modulos">
               {/* className={styles.content}> */}
                <h3>- {modulo.tittle}</h3>
                <ul>
                  {modulo.lessons.map((aula, index) => {
                    return (
                      <label key={aula.tittle} className="inputs">
                       {/* className={styles.input}> */}
                        {" "}
                        <input
                          type="radio"
                          name="aulaAtiva"
                          onClick={() =>
                            store.dispatch(toggleLesson(modulo, aula))
                          }
                          value={aula.tittle}
                          onChange={() => checkRadio(aula.tittle)}
                          checked={checado === aula.tittle}
                        />
                        <span>
                          Class {index + 1}: {aula.tittle}
                        </span>
                      </label>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </MyAsideBar>
  );
};

// export default asideBar;
export default connect((state) => ({ modules: state }))(AsideBar);
