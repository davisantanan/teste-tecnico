import { 
  Container, 
  MainContainer, 
  ShippingContainer,
  ShippingContainerTitle,
  CheckBoxContainer,
  TextCheckBoxContainer,
  InputCheckBox,
  LabelCheckBox,
  DescriptionCheckBox,
  ValueContainer,
  InformationCheckBoxContainer,
  ValueCheckBox,
  FooterContainer,
  TextFooter,
  TextFooterContainer,
  TextFooterIcon,
  SubmitButton,
  IconButton,
} from "./styles";
import PadlockIcon from './assets/fechadura.png';
import ButtonIcon from './assets/continue.png'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import PessoalInfoStage from "./components/pessoalInfoStage/pessoalInfoStage";
import AdressStage from "./components/adressStage/adressStage";


const schema = object({
  email: string().required("Campo obrigatório").email("Insira um e-mail válido"),
  nome: string().required("Campo obrigatório")
  .test('sobrenome', 'Deve conter pelo menos 1 sobrenome', (value) => {
    const words = value.split(' ');
    return words.length > 1 && words[1].length > 0;
  }),
  telefone: string().required("Campo obrigatório"),
  cpf: string().required("Campo obrigatório"),
  endereco: string().required("Campo obrigatório"),
  numero: string().required("Campo obrigatório"), 
  bairro: string().required("Campo obrigatório"),
  cidade: string().required("Campo obrigatório"),
  estado: string().required("Campo obrigatório")
});

function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ resolver: yupResolver(schema) });

  
  const onSubmit = (data) => {
    console.log(data)
  }

  const [ selectedOption, setSelectedOption ] = useState();
    
  return (
    <Container>
      <MainContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <PessoalInfoStage
          register={register}
          errors={errors}
          control={control} 
          />

          <AdressStage
          register={register}
          setValue={setValue}
          errors={errors}
          />
          
          <ShippingContainer>
            <ShippingContainerTitle>Opções de entrega:</ShippingContainerTitle>
            
            <CheckBoxContainer selectedOption={selectedOption === 13.70}>
              <InputCheckBox
              type="radio"
              value={13.70}
              checked={selectedOption === 13.70}
              onChange={(e) => setSelectedOption(parseFloat(e.target.value))}
              />
              <InformationCheckBoxContainer>
                <TextCheckBoxContainer>
                  <LabelCheckBox>Econômico</LabelCheckBox>
                  <DescriptionCheckBox>8 dias úteis a partir da postagem</DescriptionCheckBox>
                </TextCheckBoxContainer>
                <ValueContainer>
                  <ValueCheckBox>R$ 13,70</ValueCheckBox>
                </ValueContainer>
              </InformationCheckBoxContainer>
            </CheckBoxContainer>

            <CheckBoxContainer selectedOption={selectedOption === 50.19}>
              <InputCheckBox
              type="radio"
              value={50.19}
              checked={selectedOption === 50.19}
              onChange={(e) => setSelectedOption(parseFloat(e.target.value))}
              />
              <InformationCheckBoxContainer>
                <TextCheckBoxContainer>
                  <LabelCheckBox>Expresso</LabelCheckBox>
                  <DescriptionCheckBox>7 dias úteis a partir da postagem</DescriptionCheckBox>
                </TextCheckBoxContainer>
                <ValueContainer>
                  <ValueCheckBox>R$ 50,19</ValueCheckBox>
                </ValueContainer>
              </InformationCheckBoxContainer>
            </CheckBoxContainer>

            <FooterContainer>
              <TextFooterContainer>
                <TextFooterIcon alt='padlock' src={PadlockIcon} />
                <TextFooter>Você está em uma página segura.</TextFooter>
              </TextFooterContainer>
              <SubmitButton type="submit">
                <IconButton alt="continue" src={ButtonIcon} />
                Continuar
              </SubmitButton>
            </FooterContainer>

          </ShippingContainer>

        </form>
      </MainContainer>
    </Container>
  );
}

export default App;