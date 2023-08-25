const Studentinfo = (props) => {
    const data_ = props.info;
    
    return (
            <div className="bigbody">
            {data_.map((index) => {
                return (

            
              <div key={index.id} className="databasedata"  >
                  <p> <span className="titles"> Name </span> <br/> {index.name} </p>
                  <p> <span className="titles"> Email </span> <br/> {index.email} </p>
                  <p> <span className="titles"> About </span> <br/>{index.body} </p>
                  <a href="#" class="btn btn-primary">more info</a>
              </div> 
              )
            
            })}
     );
        </div>
        
    )
}
 
export default Studentinfo;