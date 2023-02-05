const thefunc=(passedfunc)=>(req,res,next)=>{
    Promise.resolve(passedfunc(req,res,next)).catch(next);
}

export default thefunc;