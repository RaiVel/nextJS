import Layout from "../components/layout"

const page = (props) => {
    console.log(props.pokeData)
    return (
    <Layout>
        <span>pagina de blog</span>
        { props.pokeData.abilities.map((ability, i) => (
            <p key={i}>
               {ability.ability.name} 
            </p>
        )) }
    </Layout>
    )
}

export async function getServerSideProps(){
    const response  = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    console.log(data)
    return {
        props: {
            pokeData: data
        }
    }
}

export default page