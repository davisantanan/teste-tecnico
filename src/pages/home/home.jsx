import { Container, MainContainer } from "../../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import { cpf } from "cpf-cnpj-validator";
import axios from "axios";
import PessoalInfoStage from "../../components/pessoalInfoStage/pessoalInfoStage";
import AdressStage from "../../components/adressStage/adressStage";
import ShippingStage from "../../components/shippingStage/shippingStage";
  

const schema = object({
    email: string().required("Campo obrigatório").email("Insira um e-mail válido"),
    nome: string().required("Campo obrigatório")
    .test('sobrenome', 'Deve conter pelo menos 1 sobrenome', (value) => {
        const words = value.split(' ');
        return words.length > 1 && words[1].length > 0;
    }),
    telefone: string().required("Campo obrigatório").test('tel', 'Insira um telefone válido',(value) => {
        return value.replace(/[()\s-]/g, '') >= 11
    }),
    cpf: string().required("Campo obrigatório").test('registro', 'CPF inválido', (value) => {
        return cpf.isValid(value);
    }),
    endereco: string().required("Campo obrigatório"),
    complemento: string(),
    numero: string().required("Campo obrigatório"), 
    bairro: string().required("Campo obrigatório"),
    cidade: string().required("Campo obrigatório"),
    estado: string().required("Campo obrigatório")
    .test('estados', 'Ex: BA,SP,SE...', (value) => {
        const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
        return states.includes(value);
    }),
    cep: string().required("Campo obrigatório").test('codigo-postal', 'Insira um CEP váldo', (value) => {
        return value.replace(/\D/g, '').length >= 8;
    }),
    envio: string().required("Escolha uma opção de entrega")
});

  
function Home() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
        const response = await axios.post('http://localhost/teste-backend/api/api.php', data)
        if(response.status === 201){
            alert('Formulário enviado com sucesso');
            const newTabe = window.open('/data', '_blank');
            if(newTabe) {
                newTabe.focus();
            } else {
                alert("O bloqueio de pop-up pode ter impedido a abertura da nova aba.");
            }
        } else { 
            console.log('erro ao enviar dados');
        }
        } catch (error) {
            console.log("ocorreu um erro ao enviar os dados", error);
        }
    }

    return (
        <Container>
            <MainContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                <PessoalInfoStage
                register={register}
                errors={errors}
                />

                <AdressStage
                register={register}
                setValue={setValue}
                errors={errors}
                />
                
                <ShippingStage
                control={control}
                errors={errors}
                />

                </form>
            </MainContainer>
        </Container>
    );
};

export default Home;