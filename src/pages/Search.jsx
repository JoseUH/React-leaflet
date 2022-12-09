import axios from 'axios';
import React from 'react'
import {  useForm } from 'react-hook-form';

const Search = () => {
  
  const {register, handleSubmit} =useForm();

  const onSubmit = async (data) => {
      
      console.log(await getRoad(data.road))
      const road = await getRoad(data.road)
      const {"lat": latitude, "lng": longitude} = road.geometry;
      data = {...data, latitude: latitude, longitude: longitude }
    
      
  }

  let getRoad = async (busca) => {

    const {data} = await axios.get('https://api.opencagedata.com/geocode/v1/json?key=ef1014d0798c41dea733f7bca5ab6538&q=' + busca + '&pretty=1')
      console.log(data.results[0].geometry);
      return data.results[0];

  }


  
  return (
    <div >
      
      <div className='seconddiv'>
      <form className='formguard' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='paraphtext paraphtext--weight' placeholder='Describe tu espacio' {...register("description")}/>
        
            <input type="text" className='paraphtext' placeholder='Ubicación' {...register("road")}/>
            <input type="text" className='paraphtext' placeholder='Fotos' {...register("images")}/>
            <input type="text" className='paraphtext' placeholder='Título' {...register("name")}/>
            <input type="text" className='paraphtext' placeholder='Disponibilidad y horarios' {...register("disponibility")}/>
            <input type="text" className='paraphtext' placeholder='Servicios' {...register("services")}/>
            <div className='btnnextdiv'>
          <button className='nextbtn'>Continuar</button>
        </div>
          </form>
      </div>
    </div>
  )
}

export default Search