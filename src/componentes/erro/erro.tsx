import { useSearchParams } from "react-router-dom";
function Erro(){
  const [searchParams] = useSearchParams()
  const mensagem = searchParams.get("mensagem")

    return(
    <>
    <h1>Pagina de erro</h1>
    {mensagem&&<p>{mensagem}</p>}
    </>
    )
}
export default Erro;