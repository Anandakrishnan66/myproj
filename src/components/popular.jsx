import { useEffect ,useState} from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
function Popular() {
  const [popular,setPopular]=useState([]);
  useEffect(()=>{
       getPopular();
  },[])

  
  const getPopular=async() =>{

    const check=localStorage.getItem("popular");
    if(check){
      setPopular(JSON.parse(check));
    }
    else{
      const api =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=   c2caa612113340a6a974ce61f8ee2f7c&number=9`);
      const data=await api.json();

localStorage.setItem('popular',JSON.stringify(data.recipes));

      console.log(data.recipes);
    setPopular(data.recipes)
    }
    
    
    
  };
  return (
      
    
    <div>
      
        
          <Wrapper>
            <h3>popular pics</h3>
            <Splide options={{
              perPage:4,
              arrows:false,
              pagination:false,
              drag:'free',
              gap:'5rem'
            }}>

            
            {popular.map((recipes)=>{
              return(
                <SplideSlide key={recipes.id}>
                  <Card>
                    <p>
                      {recipes.title}
                      <img src={recipes.image} alt={recipes.title}></img>
                   <Gradient/>
                    </p>
                  </Card>
                  </SplideSlide>
              )

            })}
            </Splide>
          </Wrapper>
        );
      
      
    </div>
  )
          
          }

const Wrapper =styled.div`
margin:4 rem 0rem;
`;
const Card=styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;
img{
  border-radius:2rem;
  position:absolute;
  left:50%;
  bottom:0%;
  transform:translate(-50%,0%);
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;

}




`;


const Gradient =styled.div`
z-index:3;
positin:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));


`;

export default Popular