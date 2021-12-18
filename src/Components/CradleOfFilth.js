import '../App.css'

export const CradleOfFilth =() => {
   return  (
      <div className='container'>
         <img className ='Cradle' src={require('../Components/Images/Filth.jpg').default} alt='band'  height={500} width={500}/>,
         <img className ='Cradle' src={require('../Components/Images/Cradle3.jpg').default} alt='scary shit' height={500} width={500} />,
         <img className ='Cradle' src={require('../Components/Images/Cradle4.jpg').default} alt='more weird shit' height={500} width={500} />,
         <img className ='Cradle' src={require('../Components/Images/Cradle5.jpg').default} alt='the weirdest one' height={500} width={500} />,
         <img className ='Cradle' src={require('../Components/Images/CradeKanye.jpg').default} alt='weird shit' height={500} width={500}/>
         <img className ='Cradle' src={require('../Components/Images/Dani.jpg').default} alt='weird shit' height={500} width={500}/>
     </div>
   )
}

