import { Container, MainContainer, PageTitle, Table, Td, Tr } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";


function UserData(){    

    const [dataTable, setDataTable] = useState([]);

    async function load(){
        try{
            const response = await axios.get('http://localhost/teste-backend/api/api.php');
            setDataTable(response.data);
        } catch(error){
            console.log('Houve um erro ao consultar a api', error);
        }
    }

    useEffect(() => {
        load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(dataTable);
  
    return(
        <Container>
            <MainContainer>
                <PageTitle>Dados enviados</PageTitle>
                <div>
                    {dataTable.map((data) => (
                        <Table key={data.index}>
                            <tbody>
                                {Object.keys(data).map((key) => (
                                    <Tr key={key}>
                                        <Td>{key}:</Td>
                                        <Td>{data[key]}</Td>
                                    </Tr>
                                ))}
                            </tbody>
                    </Table>
                    ))}
                </div>
            </MainContainer>
        </Container>
    )
}

export default UserData;