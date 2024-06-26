
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])





    return (
        <div>
            <div>  <Navbar />  </div>
            <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>

                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="btn btn-outline-success text-black bg-light" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?sea" className="d-block w-100 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
 </div>
            <div className='container'>
                {
                    foodCat.length !== 0
                        ? foodCat.map((data) => {
                            return (
                                <div key={data._id}className='row mb-3'>
                                    <div  className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem.length !== 0 ?
   foodItem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                            .map(filterItems => {
                                                return (
                                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodItem= {filterItems}
                                                        options={filterItems.options[0]}
                                                        
                                                        ></Card>
                                                    </div>
                                                )
                                            }
                                            ) : <div>No Such Data Found</div>}
                                </div>
                            )
                        })
                        : ""
                }
                
            </div>

            <div>  <Footer />  </div>
        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '../components/Card';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItems, setFoodItems] = useState([]);
//   const [search, setSearch] = useState('');

//   const loadFoodItems = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/foodData", {}, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log(response.data[0]);
//       setFoodItems(response.data[0]);
//       setFoodCat(response.data[1]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     loadFoodItems();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner" id='carousel'>
//             <div className="carousel-item active">
//               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//           </div>
//           <div className="carousel-caption" style={{ zIndex: "9" }}>
//             <div className="d-flex justify-content-center">
//               <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
//               <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='container'>
//         {foodItems.length !== 0 ? (
//           foodItems.map((data) => (
//             <div className='row mb-3' key={data.id}>
//               <div className='fs-3 m-3'>
//                 {data.CategoryName}
//               </div>
//               <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
//               {foodItems.length !== 0 ? (
//                 foodItems.filter(
//                   (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase()))
//                 ).map(filterItems => (
//                   <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
//                     {console.log(filterItems.url)}
//                     <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
//                   </div>
//                 ))
//               ) : (
//                 <div>No Such Data</div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div>No Food Categories</div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }