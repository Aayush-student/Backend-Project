// const asyncHandler = (requestHandler) =>{
//       return (req,res,next) =>{
//          Promise.resolve(req,res,next).catch((error)=> next(error))
//       }
// }

// export {asyncHandler};

const asyncHandler = (fn) => async()=>{
    try{
      await (req,res,next)
    }
    catch(error){
      error.status(error.code || 500).json({
         message : error.message,
         success : false
      })
    }
}