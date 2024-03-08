// // import React, { useState, useEffect } from "react";
// // import "./App.css";
// // import 'bootstrap/dist/css/bootstrap.css';
// // import Swal from 'sweetalert2';



// // function App() {
// //   const [dark, setdark] = useState("App-header")
// //   const [darkItem, setdarkItem] = useState("")
// //   const [darkblue, setdarkblue] = useState("")
// //   const [text, settext] = useState("Lite")
// //   const [number, setnumber] = useState(true)
// //   function blue() {
// //     setnumber(!number)
// //     if (number) {
// //       setdark("dark")
// //       settext(<i class="fa-regular fa-lightbulb"></i>)
// //       setdarkItem("dark-item ")
// //       setdarkblue("dark-item1 ")


// //     }
// //     if (!number) {
// //       setdark("lite")
// //       settext(<i class="fa-solid fa-lightbulb"></i>)
// //       setdarkItem("lite-item ")
// //       setdarkblue("lite-item2 ")

// //     }
// //   }


// //   return (
// //     <div className="App">
// //       <div className={`${dark} App-header`}>
// //         <nav className={`${darkItem} navbar justify-content-between px-4`} >
// //           <a className={`${darkItem} navbar justify-content-between px-4`}>Todo App by Umer Siddiqui</a>
// //           <form className="form-inline">
// //             <div className="px-4" onClick={blue}>{text}</div>
// //           </form>
// //         </nav>

// //         <br></br>
// //         <div className={` ${darkblue} card-header  p-0 position-relative mt-n4 mx-3 z-index-2  board`}>
// //           <div className=" shadow-info border-radius-lg pt-4 pb-3">
// //             <h6 className={`${darkblue}text-capitalize  ps-3`}>Todo's</h6>
// //           </div>
// //         </div>
// //         <div className="input-group flex-nowrap bg=primary mx-4 my-4">
// //           <input
// //             type="text"
// //             className="form-control mx-4"
// //             placeholder="Username"
// //             aria-label="Username"
// //             aria-describedby="addon-wrapping"
// //           />
// //           {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// // // import { useEffect, useState } from 'react';
// // // import './App.css';

// // // function App() {
// // //   const [questions, setQuestions] = useState([])
// // //   const [currentindex, setCurrentIndex] = useState(8)

// // //   useEffect( function () {
// // //     getQuestionsFromAPI()
// // //     },[])

// // //     function getQuestionsFromAPI(){
// // //       fetch("https://the-trivia-api.com/v2/questions")
// // //       .then(res => res.json())
// // //       .then (res => setQuestions(res))
// // //     }

// // //     // if(questions.length){
// // //     //   return<div>

// // //     //   </div>
// // //     // }

// // //     function next(){
// // //       setCurrentIndex(currentindex + 1)
// // //     }
// // //     // function restart(){
// // //     //   setCurrentIndex(8)

// // //     // }

// // //   return (
// // //     <div className="App">
// // //       <div className="App-header">
// // //        <h2>Q{currentindex + 1} {questions.length != 0 ? questions[currentindex].question.text : "wait"}  

// // //        </h2>
// // //        <div>
// // //        </div>
// // // {
// // //   currentindex === questions.length -1 ?
// // //   <button >Restart</button>
// // //   :<button onClick={next}>Next</button>
// // // }

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;



// import React, { useState, useEffect } from "react";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import Swal from 'sweetalert2';
// import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// import { FormControlLabel } from '@mui/material';



// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',
//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(22px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           '#fff',
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//     width: 32,
//     height: 32,
//     '&::before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         '#fff',
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },
// }));

// const handleReload = () => {
//   window.location.reload(); // Reloads the current page
// };

// function App() {
//   const [question, setQuestion] = useState([])
//   const [number, setNumber] = useState(0)
//   const [marks, setMarks] = useState(0)
//   const [Time, setTime] = useState(15)
//   let intervalId;

//   useEffect(function () {
//     intervalId = setInterval(decrementTime, 1000);
//     getApi()
//     return () => {
//       clearInterval(intervalId); // Clear the interval on component unmount or cleanup
//     };
//   }, [])


//   function getApi() {
//     fetch('https://the-trivia-api.com/v2/questions ')
//       .then((res) => res.json())

//       .then((res) => {
//         res.map(function (item) {
//           item.option = [...item.incorrectAnswers, item.correctAnswer];
//           item.options = shuffle(item.option)
//         })
//         setQuestion(res); console.log(res)
//       })
//   }



//   function next(i, index) {
//     console.log(i.target.innerText);
//     if (question[number].correctAnswer === i.target.innerText) {
//       setMarks(marks + 10);
//       if (marks == 0) {
//         setMarks(prevMarks => prevMarks + 10);
//       } // Update marks if the selected answer is correct
//     }
//     console.log(marks);
//     setTime(16)

//     setNumber(number + 1);
//   }

//   function update() {
//     setNumber(number + 1);

//   }

//   const decrementTime = () => {
//     setTime(prevTime => prevTime - 1);
//   };
//   if (Time == 0) {
//     setTime(16)
//     update();
//     decrementTime();
//   }
//   if (number == 9) {
//     clearInterval(intervalId);
//     setNumber(0)
//     setMarks(0);
//     getApi()
//     if (marks >= 70) {
//       Swal.fire({
//         title: "Congratulations",
//         text: `You are Pass with the Marks of 100/${marks}`,
//         imageUrl: "https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-5.gif",
//         showCancelButton: false, // Optional additional settings
//         backdrop: `
//       #1a2f58
//       url("/images/nyan-cat.gif")
//       left top
//       no-repeat
//     `,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'Restart'
//       })
//     //   .then((result) => {
//     //     if (result.isConfirmed) {
//     //       window.location.reload(); // Reload the page when "OK" is clicked
//     //     }
//     //   });
//     }
//     if (marks <= 40) {
//       Swal.fire({
//         title: "Fail",
//         text: `U r fail your Marks is 100/${marks}`,
//         imageUrl: "https://media.tenor.com/JOiBmvPAvPsAAAAM/crying.gif",
//         showCancelButton: false, // Optional additional settings
//         backdrop: `
//       #1a2f58
//       url("/images/nyan-cat.gif")
//       left top
//       no-repeat
//     `,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'Restart'
//       })
//   //     .then((result) => {
//   //       if (result.isConfirmed) {
//   //         window.location.reload(); // Reload the page when "OK" is clicked
//   //       }
//   //     });
//     }

//   }
//   // const[number, setnumber]= 
//   // function blue() {
//   //       setnumber(!number)
//   //       if (number) {
//   //         setdark("dark")
//   //         settext(<i class="fa-regular fa-lightbulb"></i>)
//   //         setdarkItem("dark-item ")
//   //         setdarkblue("dark-item1 ")


//   //       }
//   //       if (!number) {
//   //         setdark("lite")
//   //         settext(<i class="fa-solid fa-lightbulb"></i>)
//   //         setdarkItem("lite-item ")
//   //         setdarkblue("lite-item2 ")

//   //       }
//   //     }

// const [mode,setMode]= useState(true)
// function darkmode(){
//   setMode(!mode)

// }




//   function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
//   }

//   if (!question.length) {
//     return
//     <></>
//   }
//   const currentQuestion = question[number]


//   return (
//     <div className="App ">
//       <div className={!mode ? "App-header container-fluid lite" : "App-header container-fluid dark" }>
//         <div className={!mode ? "box white " : "box black"}>
//           {/* header start */}
//           <div className="box-header">
//           <div className="box-header_title">
//             <h3>{number + 1}/10 Question</h3>
//           </div>
//           <div className="box-header_time">
//             <div className="box-header_time-icon">
//               <i class="fa-solid fa-stopwatch"></i>
//             </div>
//             <div className="box-header_time-text">
//               <p>{Time}s</p>
//             </div>
//           </div>
//         <FormGroup>
//           <FormControlLabel onClick={darkmode} control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />} />

//         </FormGroup>
//         </div>
//         {/* header end */}
//         {/* body start */}
//         <div className="box-quiestion ">
//           <h3>
//             Q.{number + 1}) {question.length != 0 ? currentQuestion.question.text : " Wait"}
//           </h3>
//         </div>
//         <div className="sellect-answer">
//           {currentQuestion.options.map(function (item) {
//             return <div className="box-select" onClick={next}>

//               <p>{item}</p>
//             </div>
//           })
//           }
//         </div>
//         </div>





//         {/* body end */}


//       </div>
//     </div>
//     // </div >
//   );
// }


// export default App;





import React, { useState, useEffect } from "react";
import RecipeReviewCard from "./screen/CustomCard/App";
import "./App.css";
function App() {

  const [titles, setTitles] = useState([])
  const [img, setImg] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(function () {
    getproductFromApi()
    // getImagesFromApi()
  }, [])

  function getproductFromApi() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(res => setTitles(res.products))
  }

  { console.log(titles) }




  if (!titles.length) {
    return <div className='img-div'>
      <img className='img' src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif'></img>
    </div>
  }



  return <div className="App">
    <div className="App-header" >
      {titles.map(item => (
        <RecipeReviewCard key={item.id} images={item.images} brand={item.brand} category={item.category} description={item.description} discountPercentage={item.discountPercentage} price={item.price} rating={item.rating} stock={item.stock} title={item.title} />
       
      ))}


    </div>
  </div>

}
export default App;



