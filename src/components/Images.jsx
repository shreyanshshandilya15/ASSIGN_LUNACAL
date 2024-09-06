
export default function Images({src}) {
  
  return (
    <div>
     <img src={src} alt="" style={{height:"165px",width:"190px",objectFit:"cover",borderRadius:"10px"}} />
    </div>
  )
}
