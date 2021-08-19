import {AuthorBox} from "../components/AuthorBox"
const Testing = ()=>{

const styles= {
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",


}

    return(

        <div style={styles}>
           {<AuthorBox/>}
        </div>
    )
}

export default Testing 

