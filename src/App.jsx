import { 
  Container, 
  MainContainer, 
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import PessoalInfoStage from "./components/pessoalInfoStage/pessoalInfoStage";
import AdressStage from "./components/adressStage/adressStage";
import ShippingStage from "./components/shippingStage/shippingStage";
import { cpf } from "cpf-cnpj-validator";


const schema = object({
  email: string().required("Campo obrigatório").email("Insira um e-mail válido"),
  nome: string().required("Campo obrigatório")
  .test('sobrenome', 'Deve conter pelo menos 1 sobrenome', (value) => {
    const words = value.split(' ');
    return words.length > 1 && words[1].length > 0;
  }),
  telefone: string().required("Campo obrigatório"),
  cpf: string().required("Campo obrigatório").test('registro', 'CPF inválido', (value) => {
    return cpf.isValid(value);
  }),
  endereco: string().required("Campo obrigatório"),
  complemento: string(),
  numero: string().required("Campo obrigatório"), 
  bairro: string().required("Campo obrigatório"),
  cidade: string().required("Campo obrigatório"),
  estado: string().required("Campo obrigatório")
  .test('estados', 'Digite uma sigla EX: BA,SP...', (value) => {
    const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    return states.includes(value);
  }),
  cep: string().required("Campo obrigatório").min(9, "Informe um CEP válido"),
  envio: string().required("Escolha uma opção de entrega")
});

function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  
  const onSubmit = (data) => {
    console.log(data)
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
}

export default App;