import Layout from "../components/layout";
import Error from "./_error";

const page = ({pokeData, statusError}) => {
    if(statusError > 200){
        return(
            <Error statusError = {statusError}/>
        )
    }

    return (
    <Layout>
        <span>pagina de blog</span>
        { pokeData.abilities.map((ability, i) => (
            <p key={i}>
               {ability.ability.name} 
            </p>
        )) }
    </Layout>
    )
}

export async function getServerSideProps(){
    let response  = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let statusError = response.status;

    response = statusError > 200 ? await response.text() : await response.json();

    return {
        props: {
            pokeData: response,
            statusError,
        }
    }
}

export default page